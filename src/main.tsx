
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx executing...');
console.log('Environment:', import.meta.env.MODE);
console.log('Base URL:', import.meta.env.BASE_URL);

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('Root element not found!');
  throw new Error('Root element not found');
}

console.log('Root element found, creating React root...');

// Function to remove only the loading fallback, not all content
const removeLoadingFallback = () => {
  console.log('Attempting to remove loading fallback...');
  const loadingElement = document.getElementById('initial-loading');
  
  if (loadingElement && loadingElement.parentNode) {
    console.log('Removing loading element');
    loadingElement.remove();
    console.log('Loading fallback removed successfully');
    return true;
  }
  
  console.log('No loading element found or already removed');
  return false;
};

try {
  const root = createRoot(rootElement);
  console.log('React root created, rendering App...');
  
  // Remove loading immediately when React starts
  removeLoadingFallback();
  
  root.render(<App />);
  console.log('App rendered successfully');
  
} catch (error) {
  console.error('Error rendering app:', error);
  
  // Enhanced error fallback for production
  rootElement.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background: linear-gradient(135deg, #7CB518 0%, #001F54 100%); color: white;">
      <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 10px; max-width: 500px;">
        <h1 style="margin-bottom: 1rem; font-size: 2rem;">WEDESIHOMES</h1>
        <p style="margin-bottom: 1rem; font-size: 1.1rem;">We're experiencing technical difficulties loading the application.</p>
        <p style="margin-bottom: 1.5rem; font-size: 0.9rem; opacity: 0.8;">Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: white; color: #001F54; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 1rem; transition: all 0.3s;">
          Reload Page
        </button>
      </div>
    </div>
  `;
}
