import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import './circuitPage.css';
import { useSearchParams } from 'next/navigation';
import Circuit1 from './circuit1'; 
import Circuit2 from './circuit2'; 

import Modal from './Modal';
import CircuitViewer from '../DTC/circuitViewer';

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

const CircuitPageContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('schematics');
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const [selectedConnector, setSelectedConnector] = useState<Connector | null>(null);
  const [selectedSchematic, setSelectedSchematic] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showModal, setShowModal] = useState(false);
  const [highlightedText, setHighlightedText] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);


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

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3001/api/ml/connectors')
      .then(response => {
        const formattedConnectors = response.data.connectors.map(formatConnectorData);
        setConnectors(formattedConnectors);
        if (formattedConnectors.length > 0) {
          setSelectedConnector(formattedConnectors[0]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching connectors', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setZoomLevel(100); // Reset zoom level to default (100%)
  }, [selectedSchematic]);

  const searchParams = useSearchParams();
  const brand = searchParams.get('brand');
  const model = searchParams.get('model');
  const year = searchParams.get('year');

  const handleZoom = (direction: 'in' | 'out') => {
    setZoomLevel(prevZoom => {
      const newZoom = direction === 'in' ? prevZoom + 10 : prevZoom - 10;
      return Math.max(50, Math.min(200, newZoom)); // Limit zoom between 50% and 200%
    });
  };

  const filteredConnectors = connectors.filter(connector =>
    connector.connectorPartNumber.toLowerCase().includes(searchTerm.toLowerCase()) || 
    connector.connectorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort connectors by connectorName in ascending order
  const sortedConnectors = [...filteredConnectors].sort((a, b) => 
    a.connectorPartNumber.localeCompare(b.connectorPartNumber) || a.connectorName.localeCompare(b.connectorName)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (e.target.value.trim() !== '') {
      setActiveTab('connectors');
      setSelectedSchematic(null);  // Hide schematic when searching for connectors
    }
  };

  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'schematics') {
      setSelectedSchematic('door-circuit-module-1'); // Reset schematic when switching tabs
    } else if (tab === 'connectors' && sortedConnectors.length > 0) {
      setSelectedConnector(sortedConnectors[0]);
    }
    setHighlightedText(null);  // Reset connector when switching tabs
  };

  const handleConnectorClick = (connector: Connector) => {
    // Show the modal with the clicked connector's details
    setSelectedConnector(connector);
    setShowModal(true); // Show the modal
  };

  const handleSchematicChange = (schematic: string) => {
    setSelectedSchematic(schematic);
    setHighlightedText(null); // Reset the highlighted text when changing schematics
  };

  const handleTextClick = (textValue: string) => {
    setHighlightedText(textValue);  // Set the text to be highlighted in Svg2
    setSelectedSchematic('door-circuit-module-2'); // Switch to Svg2
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  const handleConnectorSelect = (connector: Connector) => {
    setSelectedConnector(formatConnectorData(connector));
    setActiveTab('connectors');
  };

  return (
    <div className="circuit-page-container">
      <div className="vehicle-info-bar">
        <h1>{brand}-{model} {year}MY Schematics</h1>
      </div>
      <div className="panels-container">
        {/* Left Panel */}
        <div className="left-panel">
          <input
            type="text"
            placeholder="Search connectors..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />

          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'schematics' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('schematics')}
            >
              Circuit
            </button>
            <button
              className={`tab-button ${activeTab === 'connectors' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('connectors')}
            >
              Connectors
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'schematics' && (
              <div className="schematics-tab">
                <ul>
                  <li 
                    onClick={() => handleSchematicChange('door-circuit-module-1')}
                    className={selectedSchematic === 'door-circuit-module-1' ? 'active' : ''}
                  >
                    Door Module - 1
                  </li>
                  <li 
                    onClick={() => handleSchematicChange('door-circuit-module-2')}
                    className={selectedSchematic === 'door-circuit-module-2' ? 'active' : ''}
                  >
                    Door Module - 2
                  </li>
                  <li 
                    onClick={() => handleSchematicChange('powertrain-can-bus')}
                    className={selectedSchematic === 'powertrain-can-bus' ? 'active' : ''}
                  >
                    Powertrain CAN Bus
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'connectors' && (
              <div className="connectors-tab">
                {loading ? (
                  <div className="loading-indicator">Loading connectors...</div>
                ) : (
                  <ul>
                    {sortedConnectors.map((connector) => (
                      <li
                        key={connector._id}
                        onClick={() => handleConnectorSelect(connector)}
                        className={selectedConnector?._id === connector._id ? 'active' : ''}
                      >
                        {connector.connectorPartNumber}: {connector.connectorName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          {/* Door Module 1 Schematic */}
          {selectedSchematic === 'door-circuit-module-1' && activeTab === 'schematics' && (
            <div className="schematic-image">
              <div style={{ transform: `scale(${zoomLevel / 90})`, transformOrigin: 'top left' }}>
                <Circuit1
                  connectors={connectors}
                  onConnectorClick={handleConnectorClick}
                  onTextClick={handleTextClick}
                />
              </div>
              <div className="zoom-controls">
                <button className="zoom-button" onClick={() => handleZoom('in')}>+</button>
                <button className="zoom-button" onClick={() => handleZoom('out')}>-</button>
              </div>
            </div>
          )}
          
          {/* Door Module 2 Schematic */}
          {selectedSchematic === 'door-circuit-module-2' && activeTab === 'schematics' && (
            <div className="schematic-image">
              <div style={{ transform: `scale(${zoomLevel / 90})`, transformOrigin: 'top left' }}>
                <Circuit2
                  connectors={connectors}
                  onConnectorClick={handleConnectorClick}
                  highlightedText={highlightedText}
                />
              </div>
              <div className="zoom-controls">
                <button className="zoom-button" onClick={() => handleZoom('in')}>+</button>
                <button className="zoom-button" onClick={() => handleZoom('out')}>-</button>
              </div>
            </div>
          )}
          
          {/* Powertrain CAN Bus Schematic */}
          {selectedSchematic === 'powertrain-can-bus' && activeTab === 'schematics' && (
            <div className="schematic-image">
              <CircuitViewer 
                connectors={connectors}
                onConnectorClick={handleConnectorClick}
                zoomLevel={zoomLevel}
              />
              <div className="zoom-controls">
                <button className="zoom-button" onClick={() => handleZoom('in')}>+</button>
                <button className="zoom-button" onClick={() => handleZoom('out')}>-</button>
              </div>
            </div>
          )}
          
          <Modal 
            show={showModal} 
            onClose={closeModal} 
            connector={selectedConnector} 
          />

          {/* Connector Details */}
          {selectedConnector && activeTab === 'connectors' && (
            <div className="connector-details">
              <h3>{selectedConnector.connectorPartNumber} : {selectedConnector.connectorName}</h3>
              
              <div className="connector-image">
                <img
                  src="/graphics.jpg"
                  alt={selectedConnector.connectorName}
                />
              </div>
              
              <div className="connector-info">
                <div className="info-row">
                  <div className="info-label">Description:</div>
                  <div className="info-value">{selectedConnector.connectorDescription || selectedConnector.description || 'N/A'}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Location:</div>
                  <div className="info-value">{selectedConnector.location || 'N/A'}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Connector Part Number:</div>
                  <div className="info-value">{selectedConnector.connectorPartNumber || 'N/A'}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Supplier:</div>
                  <div className="info-value">{selectedConnector.supplier || 'N/A'}</div>
                </div>
                <div className="info-row">
                  <div className="info-label">Supplier Part Number:</div>
                  <div className="info-value">{selectedConnector.supplierPartNumber || 'N/A'}</div>
                </div>
              </div>
              
              {/* Fit Part Table */}
              <div className="table-container">
                <h4>Fit Parts</h4>
                {selectedConnector.fitPart && selectedConnector.fitPart.length > 0 ? (
                  <table className="fit-part-table">
                    <thead>
                      <tr>
                        <th>Component Name</th>
                        <th>Component Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedConnector.fitPart.map((part, index) => (
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
              </div>
              
              {/* Legend Table */}
              <div className="table-container">
                <h4>Legend</h4>
                {selectedConnector.legend && selectedConnector.legend.length > 0 ? (
                  <div className="legend-table-wrapper">
                    <table className="legend-table">
                      <thead>
                        <tr>
                          <th>Cavity</th>
                          <th>Wire Number</th>
                          <th>Ident Tag</th>
                          <th>From Tag</th>
                          <th>To Tag</th>
                          <th>Wire PN</th>
                          <th>Colour</th>
                          <th>Size</th>
                          <th>Material</th>
                          <th>To</th>
                          <th>Pin</th>
                          <th>Terminal</th>
                          <th>Seal</th>
                          <th>MC ID</th>
                          <th>Strip Length (mm)</th>
                          <th>From Label</th>
                          <th>From Label Material</th>
                          <th>To Label</th>
                          <th>To Label Material</th>
                          <th>Next Op</th>
                          <th>Variant</th>
                          <th>Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedConnector.legend.map((item, index) => (
                          <tr key={item._id || index}>
                            <td>{item.cavity}</td>
                            <td>{item.wireNumber}</td>
                            <td>{item.identTag}</td>
                            <td>{item.fromTag}</td>
                            <td>{item.toTag}</td>
                            <td>{item.wirePN}</td>
                            <td>{item.colour}</td>
                            <td>{item.size}</td>
                            <td>{item.material}</td>
                            <td>{item.to}</td>
                            <td>{item.pin}</td>
                            <td>{item.terminal}</td>
                            <td>{item.seal}</td>
                            <td>{item.mcID}</td>
                            <td>{item.stripLength}</td>
                            <td>{item.fromLabel}</td>
                            <td>{item.fromLabelMaterial}</td>
                            <td>{item.toLabel}</td>
                            <td>{item.toLabelMaterial}</td>
                            <td>{item.nextOp}</td>
                            <td>{item.variant}</td>
                            <td>{item.options}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <table className="legend-table">
                    <thead>
                      <tr>
                        <th>Cavity</th>
                        <th>Wire Number</th>
                        <th>Ident Tag</th>
                        <th>From Tag</th>
                        <th>To Tag</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={5} className="no-data">No legend data available</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SuspendedCircuitPageContent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CircuitPageContent />
  </Suspense>
);

export default SuspendedCircuitPageContent;