<template>
  <div>
    <el-button type="primary" @click="handleLogin">登录</el-button>
  </div>
</template>
<script>
import { login } from "../../api/login";
export default {
  data() {
    return {
      form: {
        username: "jack",
        password: "123",
      },
    };
  },
  methods: {
    async handleLogin() {
      try {
        const res = await login(this.form);
        console.log("Res=>", res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
