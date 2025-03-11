'use client'
import React, { useState, useEffect } from 'react';
import ImageZoomModal from './ImageZoomModal';
import styles from './connBox.module.css';

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

export default function ConnectorBox({ connector, onClose }: Box) {
  const [activeTab, setActiveTab] = useState('pins');
  const [isVisible, setIsVisible] = useState(false);
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