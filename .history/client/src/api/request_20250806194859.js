//该文件对axios做一个二次封装
import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});
//请求拦截器
request.interceptors.request.use((config) => {
  //在发送请求前，取消未完成的请求
  if (typeof config.cancelToken === "function") {
    cancel("取消请求");
  }
  config.cancelToken = new axios.CancelToken((cancel) => {
    cancel("取消请求");
  });

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
