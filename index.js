const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

const data = require("./data/data.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("hey hello....!! Skillshare server is coming!");
});
app.get("/courses", (req, res) => {
  res.send(data);
});
app.listen(port, () => {
  console.log("SkillShare server running  on port", port);
});
