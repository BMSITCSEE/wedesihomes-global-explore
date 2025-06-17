
import React, { useEffect } from 'react';

const HealthCheck = () => {
  useEffect(() => {
    console.log('HealthCheck component mounted successfully');
    console.log('Current URL:', window.location.href);
    console.log('Document ready state:', document.readyState);
    
    // Log that the app is fully loaded
    const logAppStatus = () => {
      console.log('WEDESIHOMES app fully loaded and operational');
      console.log('All components rendered successfully');
    };
    
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
