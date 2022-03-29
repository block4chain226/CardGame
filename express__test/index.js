const express = require("express");
const send = require("send");
const path = require("path");
const dirname = path.resolve();
const app = express();
const PORT = 3000;
const user = {
  id: 1,
  login: "retouch",
  password: "1234",
};

app.listen(PORT);
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(dirname, "static", "index.html"));
// });
// app.get("/features", (req, res) => {
//   res.sendFile(path.resolve(dirname, "static", "features.html"));
// });
app.get("/", (req, res) => {
  res.send(`${user.login}`);
});
