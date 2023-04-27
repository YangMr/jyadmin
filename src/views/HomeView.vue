<template>
  <div class="home">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import { getMemberList, getArticleList, getSupplierList } from "../api/test.js";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  created() {
    getMemberList().then((response) => {
      console.log("response=>", response);
    });

    getArticleList().then((response) => {
      console.log("article", response);
    });

    getSupplierList().then((response) => {
      console.log("supplier", response);
    });
  },
};
</script>
