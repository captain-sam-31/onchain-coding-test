import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { message } from "antd";

// 创建 axios 实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 从 localStorage 获取 token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;

    // 根据后端的错误码约定做相应的处理
    if (data.code !== 0) {
      message.error(data.message || "请求失败");
      return Promise.reject(new Error(data.message || "Error"));
    }
    return data;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response?.status === 401) {
      // token 过期处理
      localStorage.removeItem("token");
      window.location.href = "/login";
    } else {
      message.error(error.message);
    }
    return Promise.reject(error);
  }
);

export default request;
