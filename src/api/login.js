import { service } from "../service";

// 登录接口
export const login = (data) => {
  return service.request({
    url: "/api/user/login",
    method: "POST",
    data,
  });
};

// 获取用户信息接口
export const userInfo = () => {
  return service.request({
    url: "/api/user/info",
    method: "GET",
  });
};
