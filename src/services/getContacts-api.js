import axios from 'axios';

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export const getContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

export const postContact = async ({ name, number }) => {
  const response = await axios.post(`/contacts`, { name, number });
  return response.data;
};

export const delContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
