import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8181/api/v1/', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  },
});

export default axiosInstance;
