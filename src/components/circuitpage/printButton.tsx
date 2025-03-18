import React, { useRef, ReactNode } from 'react';
import './circuitPage.css';

// Add this to your existing CSS file (circuitPage.css)
const printStyles = `
  @media print {
    body * {
      visibility: hidden;
    }
    .print-content, .print-content * {
      visibility: visible;
    }
    .print-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
    .print-header {
      text-align: center;
      font-size: 18px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .print-watermark {
      position: fixed;
      bottom: 20px;
      width: 100%;
      text-align: center;
      font-size: 12px;
      color: #999;
      opacity: 0.7;
    }
    .zoom-controls, .feedback-box, .print-button {
      display: none !important;
    }
  }
`;

// Updated interface to include children prop
interface PrintButtonProps {
  schematicName: string | null;
  children: ReactNode;  // Add children to the props interface
}

const PrintButton: React.FC<PrintButtonProps> = ({ schematicName, children }) => {
  const printContentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    // Format the schematic name for display
    let formattedName = '';
    if (schematicName === 'door-circuit-module-1') {
      formattedName = 'Door Module - 1';
    } else if (schematicName === 'door-circuit-module-2') {
      formattedName = 'Door Module - 2';
    } else if (schematicName === 'powertrain-can-bus') {
      formattedName = 'P0606 : Powertrain CAN Bus';
    } else {
      formattedName = 'Circuit Schematic';
    }

    // Create a style element for print styles
    const style = document.createElement('style');
    style.innerHTML = printStyles;
    document.head.appendChild(style);

    // Create print header
    const header = document.createElement('div');
    header.className = 'print-header';
    header.innerText = formattedName;

    // Create watermark
    const watermark = document.createElement('div');
    watermark.className = 'print-watermark';
    watermark.innerHTML = '© McLaren<br />This is the property of McLaren and should be used by people of McLaren only.';

    // Get the content to print
    const content = printContentRef.current;
    if (content) {
      // Temporarily add header and watermark
      content.prepend(header);
      content.appendChild(watermark);
      
      // Print
      window.print();
      
      // Clean up
      content.removeChild(header);
      content.removeChild(watermark);
    }

    // Clean up style
    document.head.removeChild(style);
  };

  return (
    <>
      <button 
        className="print-button"
        onClick={handlePrint}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#0066cc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 15px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          zIndex: 1000
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          viewBox="0 0 16 16"
        >
          <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/>
          <path d="M11 9V3H5v1h6v5a1 1 0 0 0 2 0z"/>
          <path d="M2 7v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H2zm2-6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z"/>
        </svg>
        Print
      </button>
      {/* Wrap the content to be printed in a div with ref */}
      <div ref={printContentRef} className="print-content">
        {children}  {/* Render the children inside the print-content div */}
      </div>
    </>
  );
};

export default PrintButton;
