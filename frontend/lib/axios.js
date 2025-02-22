import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://your-api-url.com', // replace with your API base URL
  // ...other configurations...
});
