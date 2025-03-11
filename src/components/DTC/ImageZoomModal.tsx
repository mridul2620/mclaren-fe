// src/components/circuitpage/ImageZoomModal.tsx
'use client'
import React, { useState, useEffect } from 'react';
import styles from './connBox.module.css';

interface ImageZoomModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageZoomModal({ src, alt, onClose }: ImageZoomModalProps) {
  // State to track if modal has fully rendered (for animation)
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Handle escape key to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    // Set animation timing
    setIsVisible(true);
    
    // Add and remove event listeners
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div 
      className={styles.modalOverlay} 
      onClick={handleBackdropClick}
      style={{ zIndex: 1100 }} // Higher z-index than parent modal
    >
      <div className={styles.zoomedImageContainer}>
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Close image zoom"
          style={{ 
            position: 'absolute', 
            top: '1rem', 
            right: '1rem',
            backgroundColor: 'rgba(255,255,255,0.7)',
            zIndex: 1101
          }}
        >
          ×
        </button>
        <img 
          src={src} 
          alt={alt}
          className={styles.zoomedImage}
          onClick={(e) => e.stopPropagation()} // Prevent clicks on image from closing
        />
      </div>
    </div>
  );
}