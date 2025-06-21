
import React, { useEffect } from 'react';

const HealthCheck = () => {
  useEffect(() => {
    console.log('HealthCheck component mounted successfully');
    console.log('Current URL:', window.location.href);
    console.log('Document ready state:', document.readyState);
    
    // Simple cleanup function that only removes loading if it still exists
    const cleanupLoading = () => {
      console.log('HealthCheck: Checking for remaining loading elements');
      const loadingElement = document.getElementById('initial-loading');
      
      if (loadingElement) {
        console.log('HealthCheck: Removing remaining loading element');
        loadingElement.remove();
      }
      
      // Mark body as react-ready
      document.body.classList.add('react-ready');
      console.log('HealthCheck: Added react-ready class to body');
    };
    
    // Log that the app is ready
    console.log('WEDESIHOMES app components loaded successfully');
    
    // Clean up any remaining loading elements
    cleanupLoading();
    
    // Ensure cleanup runs after a short delay as well
    const timeoutId = setTimeout(cleanupLoading, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return null; // This component doesn't render anything visible
};

export default HealthCheck;
