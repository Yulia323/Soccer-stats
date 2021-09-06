import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': process.env.REACT_APP_API_KEY,
  },
});

instance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  if (error.response) {
    return 'client received an error response (5xx, 4xx)';
  } else if (error.request) {
    return 'client never received a response, or request never left';
  } else {
    return 'unexpected error';
  }
});
