const express = require("express");
const app = express();
const router = require("./api");
const PORT = 8000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
