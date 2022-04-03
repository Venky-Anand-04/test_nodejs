const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/ssologin.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App is listening on port 3000");
});
