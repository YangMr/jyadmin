const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint检测  eslint 代码风格检测工具
  // SLint 是一个语法规则和代码风格的检查工具，可以 用来保证写出语法正确、风格统一的代码
  devServer: {
    port: 8888,
    open: true,
    host: "localhost",
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
  },
});
