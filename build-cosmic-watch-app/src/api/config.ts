// API Configuration for different environments
export const API_CONFIG = {
  // Local development
  development: {
    BASE_URL: 'http://localhost:3001',
  },
  // Production (GitHub Pages) - Using mock mode for now
  production: {
    BASE_URL: null, // Use mock authentication
  },
  // Default fallback
  fallback: {
    BASE_URL: 'http://localhost:3001',
  }
};

// Get current environment
export const getApiConfig = () => {
  // Check if we're in production (GitHub Pages)
  if (window.location.hostname === 'akgupta2025-en.github.io' || 
      window.location.hostname.includes('github.io')) {
    return API_CONFIG.production;
  }
  
  // Check if we're in local development
  if (window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1') {
    return API_CONFIG.development;
  }
  
  // Fallback
  return API_CONFIG.fallback;
};

export const API_BASE_URL = getApiConfig().BASE_URL;

// Check if we should use mock authentication
export const USE_MOCK_AUTH = API_BASE_URL === null;
