const Mock = require("mockjs");

const data = Mock.mock({
  "memberList|5": [
    {
      "id|+1": 1,
      "name|10": "@string",
      price: "@float",
      status: "@boolean",
      birthday: "@date",
      birthday1: "@date(yyyy/MM/dd)",
      createDate: "@datetime",
      createDate1: "@datetime(yyyy/MM/dd HH:mm:ss)",
      pic: "@image(100x100)",
      title: "@ctitle",
      content: "@csentence(20,40)",
      nickName: "@cname",
      url: "@url",
      area: "@region",
      address: "@county(true)",
      domain: "@domain",
      email: "@email",
      username: "@cname()",
    },
  ],
});

console.log(JSON.stringify(data, null, 2));
