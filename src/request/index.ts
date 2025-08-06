import axios from "axios";
console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 20000
})

instance.interceptors.request.use(config => {
  // 可以在这里添加请求头或其他配置
  // 例如：config.headers['Authorization'] = `Bearer ${token}`;
  return config;  
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  return res.data;
}, err => {
  return Promise.reject(err)
})

export default instance;