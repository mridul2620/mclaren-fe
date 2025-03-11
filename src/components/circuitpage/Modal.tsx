// Modal.tsx
import React from 'react';
import './Modal.css'; // Add styles for the modal

// Import the Connector interface or redefine it here
interface Connector {
  _id: string;
  connectorName: string;
  description?: string;
  connectorDescription?: string;
  location?: string;
  connectorID?: string;
  connectorPartNumber: string;
  supplierPartNumber?: string;
  supplier?: string;
  color?: string;
  numberOfPins?: number;
  powerSupply?: string;
  imageUrl?: string;
  fitPart?: any[];
  legend?: any[];
  partNumber?: string
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  connector: Connector | null;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, connector }) => {
  if (!show || !connector) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{connector.connectorName}</h2>
        <div className="connector-image">
          <img src={'/graphics.jpg'} alt={connector.connectorName} />
        </div>
        <p><strong>Description:</strong> {connector.connectorDescription || connector.description || 'N/A'}</p>
        <p><strong>Location:</strong> {connector.location || 'N/A'}</p>
        <p><strong>Part Number:</strong> {connector.partNumber || 'N/A'}</p>
        <p><strong>Supplier:</strong> {connector.supplier || 'N/A'}</p>
        <p><strong>Supplier Part Number:</strong> {connector.supplierPartNumber || 'N/A'}</p>
        <p><strong>Color:</strong> {connector.color || 'N/A'}</p>
        <p><strong>Number of Pins:</strong> {connector.numberOfPins || 'N/A'}</p>
      </div>
    </div>
  );
};

export default Modal;