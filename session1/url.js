const url = require("url");
const myURL = url.parse(
  "https://user:pass@sub.example.com:8080/p/a/t/h?name=manav&age=21#hash"
);
console.log(myURL);