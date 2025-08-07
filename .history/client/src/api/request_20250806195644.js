//该文件对axios做一个二次封装
import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});
let cancel;
//请求拦截器
request.interceptors.request.use((config) => {
  //在发送请求前，取消未完成的请求
  if (typeof cancel === "function") {
    cancel("取消请求");
  }
  config.cancelToken = new axios.CancelToken((c) => {
    cancel = c;
  });
  //config就是你的请求 做一些其他的事情
  return config;
});

//响应拦截器

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log("请求取消", error.message);
      return Promise(() => {});
    } else {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
export default request;
