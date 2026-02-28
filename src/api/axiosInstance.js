const GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;
import axios from 'axios';
  
const axiosInstance = axios.create({
  baseURL: 'https://api.geoapify.com/v2',
  timeout: 25000, // 25 seconds — matches your query timeout
  params: {
    apiKey: GEOAPIFY_API_KEY,
  },
});

export default axiosInstance; 