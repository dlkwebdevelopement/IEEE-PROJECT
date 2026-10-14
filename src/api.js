// Centralized API Configuration
// Connects to the Backend API (Laravel API or PHP endpoints)

const rawApiBase = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000/api';

// Export sanitized API_BASE without trailing slash to prevent double slashes in fetch calls
export const API_BASE = (typeof rawApiBase === 'string' ? rawApiBase : '').replace(/\/+$/, '');

// Helper function for building endpoint URLs cleanly
export const getApiUrl = (endpoint = '') => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_BASE}/${cleanEndpoint}`;
};

export default API_BASE;
