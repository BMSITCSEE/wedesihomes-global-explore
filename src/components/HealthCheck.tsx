
import React, { useEffect } from 'react';

const HealthCheck = () => {
  useEffect(() => {
    console.log('HealthCheck component mounted successfully');
    console.log('Current URL:', window.location.href);
    console.log('Document ready state:', document.readyState);
    
    // Function to ensure content visibility
    const ensureContentVisibility = () => {
      console.log('HealthCheck: Ensuring content visibility');
      
      // Remove loading element
      const loadingElement = document.getElementById('initial-loading');
      if (loadingElement) {
        console.log('HealthCheck: Removing loading element');
        loadingElement.remove();
      }
      
      // Mark body as react-ready
      document.body.classList.add('react-ready');
      console.log('HealthCheck: Added react-ready class to body');
      
      // Force visibility on root element and all content
      const root = document.getElementById('root');
      if (root) {
        root.style.opacity = '1';
        root.style.visibility = 'visible';
        root.style.position = 'relative';
        root.style.zIndex = '1';
        
        // Force visibility on all children except loading
        const allElements = root.querySelectorAll('*:not(#initial-loading)');
        allElements.forEach(el => {
          const element = el as HTMLElement;
          element.style.visibility = 'visible';
          element.style.opacity = '1';
        });
        
        console.log('HealthCheck: Forced visibility on all elements');
      }
      
      // Debug: Check content after visibility fixes
      setTimeout(() => {
        if (root) {
          console.log('HealthCheck: Root element HTML length:', root.innerHTML.length);
          console.log('HealthCheck: Root element children count:', root.children.length);
          
          // Check for main content elements
          const header = document.querySelector('header');
          const sections = document.querySelectorAll('section');
          
          console.log('HealthCheck: Header found:', !!header);
          console.log('HealthCheck: Sections found:', sections.length);
          
          if (header) {
            console.log('HealthCheck: Header visible:', window.getComputedStyle(header).visibility !== 'hidden');
          }
          
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
    
    // Ensure content visibility immediately
    ensureContentVisibility();
    
    // Also run after a short delay to catch any delayed renders
    const timeoutId = setTimeout(ensureContentVisibility, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return null; // This component doesn't render anything visible
};

export default HealthCheck;
