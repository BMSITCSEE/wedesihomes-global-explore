
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
      
      // Debug: Check if content is being rendered
      setTimeout(() => {
        const root = document.getElementById('root');
        if (root) {
          console.log('HealthCheck: Root element HTML length:', root.innerHTML.length);
          console.log('HealthCheck: Root element children count:', root.children.length);
          
          // Check for main content elements
          const header = document.querySelector('header');
          const main = document.querySelector('main');
          const sections = document.querySelectorAll('section');
          
          console.log('HealthCheck: Header found:', !!header);
          console.log('HealthCheck: Main found:', !!main);
          console.log('HealthCheck: Sections found:', sections.length);
          
          // Check if Tailwind CSS is loaded
          const testElement = document.createElement('div');
          testElement.className = 'bg-red-500';
          testElement.style.display = 'none';
          document.body.appendChild(testElement);
          const bgColor = window.getComputedStyle(testElement).backgroundColor;
          document.body.removeChild(testElement);
          
          console.log('HealthCheck: Tailwind CSS working:', bgColor.includes('rgb(239, 68, 68)') || bgColor.includes('239'));
        }
      }, 500);
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
