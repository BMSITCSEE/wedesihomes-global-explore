import axios from 'axios';

// CHANGE: Use VITE_ prefix instead of REACT_APP_
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://wedesihomes-backend.onrender.com/api';

console.log('API_BASE_URL:', API_BASE_URL); // Debug log

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    console.log('Making API request to:', config.baseURL + config.url); // Debug log
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log('API response received:', response.status, response.data); // Debug log
    return response;
  },
  (error) => {
    console.error('API response error:', error.response?.status, error.response?.data); // Debug log
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeUser('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
