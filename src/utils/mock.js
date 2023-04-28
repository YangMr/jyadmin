// 1. 安装mockjs
// 2. 引入mockjs
// 3.  Mock.mock生成随机的数据
const Mock = require("mockjs");

const data = Mock.mock({
  "memberLisr|2-5": [
    {
      "id|+1": 1,
      "name|4": "jack",
      "phone|11": "1",
      "age|20-40": 0,
      "salary|100-200.10": 1,
      "status|2-4": true,
      "order|2": { id: 1, name: "rose", age: 100 },
      "order1|1-3": { id: 1, name: "rose", age: 100 },
      idcard: /\d{15}|\d{18}/,
    },
  ],
});

console.log(JSON.stringify(data, null, 2));
