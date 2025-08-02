import api from './api';

export const messageService = {
  sendMessage: async (messageData) => {
    const { data } = await api.post('/messages', messageData);
    return data;
  },

  getMessages: async () => {
    const { data } = await api.get('/messages');
    return data;
  },

  updateMessageStatus: async (messageId, status) => {
    const { data } = await api.put(`/messages/${messageId}`, { status });
    return data;
  },
};
