import api from './api';

export const authService = {
  login: async (credentials) => {
    console.log('AuthService login called with:', credentials);
    try {
      const { data } = await api.post('/auth/login', credentials);
      console.log('Login response:', data);
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.error('AuthService login error:', error);
      throw error;
    }
  },

  register: async (userData) => {
    console.log('AuthService register called with:', userData);
    try {
      const { data } = await api.post('/auth/register', userData);
      console.log('Register response:', data);
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.error('AuthService register error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Logout error:', error);
      // Still remove tokens even if API call fails
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },

  getMe: async () => {
    try {
      const { data } = await api.get('/auth/me');
      return data;
    } catch (error) {
      console.error('GetMe error:', error);
      throw error;
    }
  },

  updateProfile: async (profileData) => {
    try {
      const { data } = await api.put('/auth/update-profile', profileData);
      return data;
    } catch (error) {
      console.error('UpdateProfile error:', error);
      throw error;
    }
  },

  updatePassword: async (passwordData) => {
    try {
      const { data } = await api.put('/auth/update-password', passwordData);
      return data;
    } catch (error) {
      console.error('UpdatePassword error:', error);
      throw error;
    }
  },

  forgotPassword: async (email) => {
    try {
      const { data } = await api.post('/auth/forgot-password', { email });
      return data;
    } catch (error) {
      console.error('ForgotPassword error:', error);
      throw error;
    }
  },

  resetPassword: async (token, password) => {
    try {
      const resetUrl = '/auth/reset-password/' + token;
      const { data } = await api.post(resetUrl, { password });
      return data;
    } catch (error) {
      console.error('ResetPassword error:', error);
      throw error;
    }
  },
};
