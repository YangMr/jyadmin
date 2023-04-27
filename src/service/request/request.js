// 引入axios
import axios from "axios";

class Request {
  instance;
  constructor(config) {
    // 创建axios实例对象
    this.instance = axios.create(config);

    // 局部拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptors,
      config.interceptors?.requestInterceptorsCatch
    );

    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptors,
      config.interceptors?.responseInterceptorsCatch
    );

    // 添加请求拦截器  全局拦截器
    this.instance.interceptors.request.use(
      function (config) {
        config.headers.a = "123";
        // 在发送请求之前做些什么
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器;
    this.instance.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }
  post(config) {
    return this.request({ ...config, method: "POST" });
  }
  put(config) {
    return this.request({ ...config, method: "PUT" });
  }
  delete(config) {
    return this.request({ ...config, method: "DELETE" });
  }
}

export default Request;

// 解决项目中 多个baseurl基准地址的问题
