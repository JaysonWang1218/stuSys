//该文件对axios做一个二次封装
import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});
//请求拦截器
request.interceptors.request.use((config) => {
  //config就是你的请求
  //做一些其他的事情
  return config;
});
//响应拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default request;
