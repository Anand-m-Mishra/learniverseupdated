import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api/v1/users', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
