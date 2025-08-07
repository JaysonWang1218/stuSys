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
request.interceptors.response.use(
  (response) => {
    //请求成功
    return response.data;
  },
  (error) => {
    //请求失败
    if (axios.isCancel(error)) {
      console.log("取消请求");
    } else {
      console.log("请求失败");
    }
    return Promise.reject(error);
  }
);
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
