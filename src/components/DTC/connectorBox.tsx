'use client'
import React, { useState, useEffect } from 'react';
import ImageZoomModal from './ImageZoomModal';
import styles from './connBox.module.css';
import axios from 'axios';

interface ConnectorDetail {
  title: string;
  subtitle: string;
  pins: Array<{ number: string; function: string }>;
  pinImagePath: string;
  locationImagePath: string;
}

interface Box {
  connector: ConnectorDetail;
  onClose: () => void;
}

export interface FitPart {
  _id: string;
  compName: string;
  compDesc: string;
}

export interface LegendItem {
  _id: string;
  cavity: string;
  wireNumber: string;
  identTag: string;
  fromTag: string;
  toTag: string;
  wirePN: string;
  colour: string;
  size: string;
  material: string;
  to: string;
  pin: string;
  terminal: string;
  seal: string;
  mcID: string;
  stripLength: string;
  fromLabel: string;
  fromLabelMaterial: string;
  toLabel: string;
  toLabelMaterial: string;
  nextOp: string;
  variant: string;
  options: string;
}

export interface Connector {
  _id: string;
  connectorName: string;
  description: string;
  location: string;
  connectorID: string;
  connectorPartNumber: string;
  supplierPartNumber: string;
  connectorDescription: string;
  supplier: string;
  fitPart: FitPart[];
  legend: LegendItem[];
  numberOfPins?: number;
  color?: string;
  powerSupply?: string;
  imageUrl?: string;
}

export default function ConnectorBox({ connector, onClose }: Box) {
  const [activeTab, setActiveTab] = useState('pins');
  const [selectedConnector, setSelectedConnector] = useState<Connector | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const [zoomedImage, setZoomedImage] = useState<{src: string; alt: string} | null>(null);
  
  // Filter out pins that have actual functions (not just '-')
  const activePins = connector.pins.filter(pin => pin.function !== '-');
  
  // Handle escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else {
          onClose();
        }
      }
    };

    // Animation timing
  setIsVisible(true);
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, zoomedImage]);

  useEffect(() => {
    axios.get('https://publication-portal-be.onrender.com/api/ml/connectors')
      .then(response => {
        const formattedConnectors = response.data.connectors.map(formatConnectorData);
        setConnectors(formattedConnectors);
        if (formattedConnectors.length > 0) {
          setSelectedConnector(formattedConnectors[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching connectors', error);
      });
  }, []);


  const formatConnectorData = (connector: Connector): Connector => {
      // Replace underscores with spaces in string fields
      const replaceUnderscores = (str: string) => 
        typeof str === 'string' ? str.replace(/_/g, ' ') : str;
    
      // Remove "Location : " from location
      const formatLocation = (location: string) => 
        typeof location === 'string' ? location.replace('Location : ', '') : location;
    
      // Replace empty or "No Cavity Plug found" with "-"
      const formatLegendValue = (value: string) => 
        !value || value.trim() === '' || value === 'No Cavity Plug found.' ? '-' : value;
    
      // Deep clone and transform the connector
      const formattedConnector: Connector = {
        ...connector,
        connectorName: replaceUnderscores(connector.connectorName),
        location: formatLocation(connector.location),
        connectorPartNumber: replaceUnderscores(connector.connectorPartNumber),
        connectorDescription: replaceUnderscores(connector.connectorDescription),
        
        fitPart: connector.fitPart.map(part => ({
          ...part,
          compName: replaceUnderscores(part.compName),
          compDesc: replaceUnderscores(part.compDesc)
        })),
        
        legend: connector.legend.map(legendItem => ({
          ...legendItem,
          cavity: formatLegendValue(legendItem.cavity),
          wireNumber: formatLegendValue(legendItem.wireNumber),
          identTag: formatLegendValue(legendItem.identTag),
          fromTag: formatLegendValue(legendItem.fromTag),
          toTag: formatLegendValue(legendItem.toTag),
          wirePN: formatLegendValue(legendItem.wirePN),
          colour: formatLegendValue(legendItem.colour),
          size: formatLegendValue(legendItem.size),
          material: formatLegendValue(legendItem.material),
          to: formatLegendValue(legendItem.to),
          pin: formatLegendValue(legendItem.pin),
          terminal: formatLegendValue(legendItem.terminal),
          seal: formatLegendValue(legendItem.seal),
          mcID: formatLegendValue(legendItem.mcID),
          stripLength: formatLegendValue(legendItem.stripLength),
          fromLabel: formatLegendValue(legendItem.fromLabel),
          fromLabelMaterial: formatLegendValue(legendItem.fromLabelMaterial),
          toLabel: formatLegendValue(legendItem.toLabel),
          toLabelMaterial: formatLegendValue(legendItem.toLabelMaterial),
          nextOp: formatLegendValue(legendItem.nextOp),
          variant: formatLegendValue(legendItem.variant),
          options: formatLegendValue(legendItem.options)
        }))
      };
    
      return formattedConnector;
    };
  
  // Handle backdrop click to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Handle image click to zoom
  const handleImageClick = (src: string, alt: string) => {
    setZoomedImage({ src, alt });
  };

  // Close zoomed image
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <>
      <div className={styles.modalOverlay} onClick={handleBackdropClick}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2>{connector.title}</h2>
            <p>{connector.subtitle}</p>
            <button 
              className={styles.closeButton} 
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
          
          {/* Image section */}
          <div className={styles.imagesContainer}>
            {/* Pin Image */}
            <div className={styles.imageBox}>
              {connector.pinImagePath ? (
                <img 
                  src={connector.pinImagePath} 
                  alt={`${connector.title} Connector Pins`}
                  className={styles.connectorImage}
                  onClick={() => handleImageClick(
                    connector.pinImagePath, 
                    `${connector.title} Connector Pins`
                  )}
                />
              ) : (
                <div className={styles.noImage}>
                  <div>No pin diagram available</div>
                </div>
              )}
            </div>
            
            {/* Location Image */}
            {connector.locationImagePath && (
              <div className={styles.imageBox}>
                <img 
                  src={connector.locationImagePath} 
                  alt={`${connector.title} Connector Location`}
                  className={styles.connectorImage}
                  onClick={() => handleImageClick(
                    connector.locationImagePath, 
                    `${connector.title} Connector Location`
                  )}
                />
              </div>
            )}
          </div>

          <div className={styles.connectorInfo}>
                <div className="info-row">
                  <div className="info-label">Description:</div>
                  <div className="info-value">{selectedConnector?.connectorDescription || selectedConnector?.description || 'N/A'}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Location:</div>
                  <div className="info-value">{selectedConnector?.location || 'N/A'}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Connector Part Number:</div>
                  <div className="info-value">{selectedConnector?.connectorPartNumber || 'N/A'}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Supplier:</div>
                  <div className="info-value">{selectedConnector?.supplier || 'N/A'}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Supplier Part Number:</div>
                  <div className="info-value">{selectedConnector?.supplierPartNumber || 'N/A'}</div>
                </div>
              </div>

              {/* <div className="table-container">
                <h4>Fit Parts</h4>
                {selectedConnector?.fitPart && selectedConnector.fitPart.length > 0 ? (
                  <table className="fit-part-table">
                    <thead>
                      <tr>
                        <th>Component Name</th>
                        <th>Component Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedConnector?.fitPart.map((part, index) => (
                        <tr key={part._id || index}>
                          <td>{part.compName}</td>
                          <td>{part.compDesc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="fit-part-table">
                    <thead>
                      <tr>
                        <th>Component Name</th>
                        <th>Component Description</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2} className="no-data">No fit parts available</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div> */}
          
          {/* Pins tabs */}
          <div className={styles.modalTabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'pins' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('pins')}
            >
              All Pins ({connector.pins.length})
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'active' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('active')}
            >
              Active Pins ({activePins.length})
            </button>
          </div>
          
          {/* Tab content */}
          <div className={styles.tabContent}>
            {activeTab === 'pins' && (
              <div className={styles.pinsContainer}>
                <table className={styles.pinsTable}>
                  <thead>
                    <tr>
                      <th>Pin</th>
                      <th>Callout</th>
                    </tr>
                  </thead>
                  <tbody>
                    {connector.pins.map((pin) => (
                      <tr key={pin.number} className={pin.function === '-' ? styles.inactivePin : ''}>
                        <td>{pin.number}</td>
                        <td>{pin.function === '-' ? 'Not Used' : pin.function}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'active' && (
              <div className={styles.pinsContainer}>
                <table className={styles.pinsTable}>
                  <thead>
                    <tr>
                      <th>Pin</th>
                      <th>Callout</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activePins.map((pin) => (
                      <tr key={pin.number}>
                        <td>{pin.number}</td>
                        <td>{pin.function}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <ImageZoomModal 
          src={zoomedImage.src}
          alt={zoomedImage.alt}
          onClose={closeZoomedImage}
        />
      )}
    </>
  );
}