import api from './api';

export const propertyService = {
  getProperties: async (params = {}) => {
    const { data } = await api.get('/properties', { params });
    return data;
  },

  getProperty: async (id) => {
    const { data } = await api.get(/properties/${id});
    return data;
  },

  createProperty: async (propertyData) => {
    const { data } = await api.post('/properties', propertyData);
    return data;
  },

  updateProperty: async (id, propertyData) => {
    const { data } = await api.put(/properties/${id}, propertyData);
    return data;
  },

  deleteProperty: async (id) => {
    const { data } = await api.delete(/properties/${id});
    return data;
  },

  searchProperties: async (searchParams) => {
    const { data } = await api.get('/properties/search', { params: searchParams });
    return data;
  },

  getFeaturedProperties: async () => {
    const { data } = await api.get('/properties/featured');
    return data;
  },

  saveProperty: async (id) => {
    const { data } = await api.post(/properties/${id}/save);
    return data;
  },

  getSavedProperties: async () => {
    const { data } = await api.get('/properties/user/saved');
    return data;
  },
};