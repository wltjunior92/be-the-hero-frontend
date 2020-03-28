import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bethehero-wlt.herokuapp.com',
});

export default api;