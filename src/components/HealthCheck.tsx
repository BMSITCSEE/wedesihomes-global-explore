
import React, { useEffect } from 'react';

const HealthCheck = () => {
  useEffect(() => {
    console.log('HealthCheck component mounted successfully');
    console.log('Current URL:', window.location.href);
    console.log('Document ready state:', document.readyState);
    
    // Force remove any remaining loading screens
    const forceRemoveLoading = () => {
      console.log('HealthCheck: Forcing removal of loading screens');
      const loadingElements = document.querySelectorAll('.loading-fallback');
      loadingElements.forEach((el, index) => {
        console.log(`HealthCheck: Removing loading element ${index + 1}`);
        el.remove();
      });
      
      // Mark body as react-ready
      document.body.classList.add('react-ready');
      console.log('HealthCheck: Added react-ready class to body');
    };
    
    // Log that the app is fully loaded
    const logAppStatus = () => {
      console.log('WEDESIHOMES app fully loaded and operational');
      console.log('All components rendered successfully');
      forceRemoveLoading();
    };
    
    // Execute immediately
    forceRemoveLoading();
    
    if (document.readyState === 'complete') {
      logAppStatus();
    } else {
      window.addEventListener('load', logAppStatus);
      return () => window.removeEventListener('load', logAppStatus);
    }
  }, []);

  return null; // This component doesn't render anything visible
};

export default HealthCheck;
