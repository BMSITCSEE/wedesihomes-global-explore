
import React, { useEffect } from 'react';

const HealthCheck = () => {
  useEffect(() => {
    console.log('HealthCheck: Component mounted');
    console.log('HealthCheck: URL:', window.location.href);
    console.log('HealthCheck: Environment:', import.meta.env.MODE);
    
    // Additional loading screen cleanup
    setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
        loadingScreen.classList.add('hidden');
        console.log('HealthCheck: Removed loading screen');
      }
    }, 500);
    
  }, []);

  return null;
};

export default HealthCheck;
