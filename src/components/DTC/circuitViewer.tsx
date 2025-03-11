// src/components/CircuitViewer.tsx - Modified for integration
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { XMLParser } from 'fast-xml-parser';
import ConnBox from './connectorBox';

interface Hotspot {
  shape: string;
  x: number;
  y: number;
  width: number;
  height: number;
  connectorId: string;
}

interface ConnectorDetail {
  title: string;
  subtitle: string;
  pins: Array<{ number: string; function: string }>;
  pinImagePath: string;
  locationImagePath: string;
}

interface CircuitViewerProps {
  connectors: any[];
  onConnectorClick?: (connector: any) => void;
  zoomLevel: number;
}

export default function CircuitViewer({ connectors, onConnectorClick, zoomLevel }: CircuitViewerProps) {
  const [hotspots, setHotspots] = useState<Hotspot[]>([]);
  const [selectedConnector, setSelectedConnector] = useState<ConnectorDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showHotspots, setShowHotspots] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  
  const diagramContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the main wiring diagram XML and extract hotspots
    const loadMainXML = async () => {
      setLoading(true);
      try {
        const response = await fetch('/data/xml/D042088-01-00-01-P12 powertrain CAN BUS S2 P1.xmlt');
        if (!response.ok) {
          throw new Error(`Failed to load diagram data: ${response.status} ${response.statusText}`);
        }
        
        const xmlData = await response.text();
        
        const parser = new XMLParser({
          ignoreAttributes: false,
          attributeNamePrefix: '@_',
          allowBooleanAttributes: true
        });
        
        const parsed = parser.parse(xmlData);
        
        // Extract hotspots from the parsed XML
        const extractedHotspots = parsed.ie['map-wiring'].hotspotimage.hotspots.hotspot.map((spot: any) => ({
          shape: spot['@_shape'],
          x: parseFloat(spot['@_x']),
          y: parseFloat(spot['@_y']),
          width: parseFloat(spot['@_dx']),
          height: parseFloat(spot['@_dy']),
          connectorId: spot['@_annotation-ref'].split('_')[0]
        }));
        
        setHotspots(extractedHotspots);
        setLoading(false);
      } catch (error) {
        console.error('Error loading main XML:', error);
        setError('Failed to load circuit diagram data');
        setLoading(false);
      }
    };
    
    loadMainXML();
  }, []);

  const handleConnectorClick = async (connectorId: string) => {
    setActiveHotspot(connectorId);
    try {
      setLoading(true);
      // Find the XML file for this connector from your annotation refs
      // Map connector IDs to file names based on your file list
      let xmlFilename;
      
      switch(connectorId) {
        case 'MB024':
          xmlFilename = 'D040538-01-00-01-fetched';
          break;
        case 'MB036':
          xmlFilename = 'D040546-01-00-01-fetched';
          break;
        case 'MB060':
          xmlFilename = 'D040560-01-00-01-fetched';
          break;
        case '12MB17':
          xmlFilename = 'D040368-01-00-01-fetched';
          break;
        case 'MB137':
          xmlFilename = 'D040606-01-00-01-fetched';
          break;
        default:
          setError(`Unknown connector ID: ${connectorId}`);
          setLoading(false);
          return;
      }
      
      const response = await fetch(`/data/xml/${xmlFilename}.xml`);
      if (!response.ok) {
        throw new Error(`Failed to load connector data: ${response.status} ${response.statusText}`);
      }
      
      const xmlData = await response.text();
      
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_',
        allowBooleanAttributes: true
      });
      
      const parsed = parser.parse(xmlData);
      
      // Extract connector details
      let pinData = [];
      if (parsed.unit?.pin?.figure?.legend?.['custom-legend']?.callout) {
        // Make sure callout is treated as an array
        const callouts = Array.isArray(parsed.unit.pin.figure.legend['custom-legend'].callout) 
          ? parsed.unit.pin.figure.legend['custom-legend'].callout 
          : [parsed.unit.pin.figure.legend['custom-legend'].callout];
          
        pinData = callouts.map((pin: any) => ({
          number: pin.title,
          function: pin['callout-text']
        }));
      }
      
      // Find the PIN image path
      let pinImagePath = '';
      if (parsed.unit?.pin?.figure?.graphic?.['@_file']) {
        // Extract just the filename from the path
        const graphicUrl = parsed.unit.pin.figure.graphic['@_file'];
        const imageMatch = graphicUrl.match(/uri=([^.]+)/);
        if (imageMatch && imageMatch[1]) {
          const imageFilename = imageMatch[1];
          pinImagePath = `/images/${imageFilename}-fetched.png`;
        }
      }
      
      // Find the LOCATION image path
      let locationImagePath = '';
      if (parsed.unit?.location?.figure?.graphic?.['@_file']) {
        const graphicUrl = parsed.unit.location.figure.graphic['@_file'];
        const imageMatch = graphicUrl.match(/uri=([^.]+)/);
        if (imageMatch && imageMatch[1]) {
          const imageFilename = imageMatch[1];
          locationImagePath = `/images/${imageFilename}-fetched.png`;
        }
      }
      
      // Set the selected connector details
      setSelectedConnector({
        title: parsed.unit.title,
        subtitle: parsed.unit.subtitle,
        pins: pinData,
        pinImagePath: pinImagePath,
        locationImagePath: locationImagePath
      });
      
      setIsModalOpen(true);
      setLoading(false);
    } catch (error) {
      console.error('Error loading connector details:', error);
      setError('Failed to load connector details');
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveHotspot(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div 
        ref={diagramContainerRef}
        style={{ 
          position: 'relative',
          overflow: 'auto',
          maxHeight: '80vh'
        }}
      >
        <div 
          style={{ 
            transform: `scale(${zoomLevel / 100})`, 
            transformOrigin: 'top left',
            position: 'relative'
          }}
        >
          {/* Base image */}
          <img 
            src="/images/G019019-01-00-01-fetched.png" 
            alt="Powertrain CAN Bus Diagram"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto'
            }}
          />
          
      
          {showHotspots && hotspots.map((hotspot, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: `${hotspot.x * 100}%`,
                top: `${hotspot.y * 100}%`,
                width: `${hotspot.width * 100}%`,
                height: `${hotspot.height * 100}%`,
                backgroundColor: activeHotspot === hotspot.connectorId ? 
                  'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.1)',
                border: activeHotspot === hotspot.connectorId ?
                  '2px solid rgba(59, 130, 246, 0.6)' : '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onClick={() => handleConnectorClick(hotspot.connectorId)}
              aria-label={`Connector ${hotspot.connectorId}`}
            >
              <div 
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                  opacity: '0',
                  transition: 'opacity 0.2s',
                  pointerEvents: 'none',
                  marginBottom: '5px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
                className="hotspot-label" // For CSS targeting in :hover
              >
                Connector {hotspot.connectorId}
              </div>
            </div>
          ))}
        </div>
        
        {loading && (
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 20
            }}
          >
            <div 
              style={{
                border: '3px solid rgba(0, 0, 0, 0.1)',
                borderTop: '3px solid #3b82f6',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                animation: 'spin 1s linear infinite'
              }}
            ></div>
          </div>
        )}
      </div>
      
      {/* Modal for connector details */}
      {isModalOpen && selectedConnector && (
        <ConnBox
          connector={selectedConnector}
          onClose={closeModal}
        />
      )}
      
      {/* Add a CSS rule for hovering on hotspots */}
      <style jsx>{`
        div:hover > .hotspot-label {
          opacity: 1 !important;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}


//Add a dtc column