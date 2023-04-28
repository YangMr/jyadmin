import Request from "./request/request";
import { config } from "./request/config";
export const service = new Request(config);

// export const mRequest = new Request({
//   baseURL: 'http://vue.mengxuegu.com/pro-api',
//   timeout: 5000,
//   interceptors: {
//     // 请求成功的拦截器方法
//     requestInterceptors: (config) => {
//       config.headers.b = '456'
//       // 在发送请求之前做些什么
//       return config
//     },
//     // 请求失败的拦截器方法
//     requestInterceptorsCatch: (error) => {
//       // 对请求错误做些什么
//       return Promise.reject(error)
//     },
//     // 响应成功的拦截器方法
//     responseInterceptors: (response) => {
//       // 2xx 范围内的状态码都会触发该函数。
//       // 对响应数据做点什么
//       return response
//     },
//     responseInterceptorsCatch: (error) => {
//       // 超出 2xx 范围的状态码都会触发该函数。
//       // 对响应错误做点什么
//       return Promise.reject(error)
//     },
//   },
// })

// export const bRequest = new Request({
//   baseURL: 'http://blog.9yuecloud.com/pro-api',
//   timeout: 5000,
//   interceptors: {
//     // 请求成功的拦截器方法
//     requestInterceptors: (config) => {
//       config.headers.b = '789'
//       // 在发送请求之前做些什么
//       return config
//     },
//     // 请求失败的拦截器方法
//     requestInterceptorsCatch: (error) => {
//       // 对请求错误做些什么
//       return Promise.reject(error)
//     },
//     // 响应成功的拦截器方法
//     responseInterceptors: (response) => {
//       // 2xx 范围内的状态码都会触发该函数。
//       // 对响应数据做点什么
//       return response
//     },
//     responseInterceptorsCatch: (error) => {
//       // 超出 2xx 范围的状态码都会触发该函数。
//       // 对响应错误做点什么
//       return Promise.reject(error)
//     },
//   },
// })
