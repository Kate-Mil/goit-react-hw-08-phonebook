import axios from 'axios';
import { setAuthHeader } from '../redux';

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export const getContacts = async () => {
  const response = await axios.get(`/contacts`);
  setAuthHeader(response.data.token);
  return response.data;
};

export const postContact = async ({ name, number }) => {
  const response = await axios.post(`/contacts`, { name, number });
  setAuthHeader(response.data.token);
  return response.data;
};

export const delContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  setAuthHeader(response.data.token);
  return response.data;
};
