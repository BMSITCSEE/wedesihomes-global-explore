
import api from './api';

export const propertyService = {
  // Get properties by city name
  getPropertiesByCity: async (cityName, page = 1, limit = 12) => {
    const { data } = await api.get(`/properties/search?city=${cityName}&page=${page}&limit=${limit}`);
    return data;
  },

  // Get single property details
  getProperty: async (propertyId) => {
    const { data } = await api.get(`/properties/${propertyId}`);
    return data;
  },

  // Get all properties
  getAllProperties: async (page = 1, limit = 12) => {
    const { data } = await api.get(`/properties?page=${page}&limit=${limit}`);
    return data;
  },

  // Save/Unsave property
  toggleSaveProperty: async (propertyId) => {
    const { data } = await api.post(`/properties/${propertyId}/save`);
    return data;
  },

  // Get saved properties
  getSavedProperties: async () => {
    const { data } = await api.get('/properties/user/saved');
    return data;
  },
};
