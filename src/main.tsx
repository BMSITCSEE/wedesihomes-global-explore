
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx executing...');

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('Root element not found!');
  throw new Error('Root element not found');
}

console.log('Root element found, creating React root...');

// Remove loading screen when React is ready
const removeLoadingScreen = () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
    console.log('Loading screen removed');
  }
};

try {
  const root = createRoot(rootElement);
  console.log('React root created, rendering App...');
  
  root.render(<App />);
  console.log('App rendered successfully');
  
  // Remove loading screen after render
  setTimeout(removeLoadingScreen, 100);
  
} catch (error) {
  console.error('Error rendering app:', error);
  
  // Show error message
  rootElement.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background: linear-gradient(135deg, #7CB518 0%, #001F54 100%); color: white;">
      <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 10px; max-width: 500px;">
        <h1 style="margin-bottom: 1rem; font-size: 2rem;">WEDESIHOMES</h1>
        <p style="margin-bottom: 1rem; font-size: 1.1rem;">We're experiencing technical difficulties.</p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: white; color: #001F54; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
          Reload Page
        </button>
      </div>
    </div>
  `;
  
  removeLoadingScreen();
}
