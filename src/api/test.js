import { mRequest, bRequest } from "@/service";
// 会员管理系统中的 会员列表 http://vue.mengxuegu.com/pro-api
export const getMemberList = () => {
  return mRequest.request({
    url: "/member/list/search/1/20",
    method: "POST",
  });
};

export const getMemberList1 = () => {
  return mRequest.get({
    url: "/member/list/search/1/20",
  });
};
// 会员管理系统中的 会员列表 http://vue.mengxuegu.com/pro-api
export const getSupplierList = () => {
  return mRequest.request({
    url: "/supplier/list/search/1/10",
    method: "POST",
  });
};

// 博客管理系统中的 文章列表 http://blog.9yuecloud.com/pro-ap
export const getArticleList = () => {
  return bRequest.request({
    url: "/article/article/search",
    method: "POST",
  });
};

// 不管baseurl相同还是不相同 , 都在请求头中添加a = 123 全局拦截器
// 不同的baseurl 请求头传递不同的参数  局部拦截器
// 相同的baseurl、内的请求, 传递不同的请求头参数
