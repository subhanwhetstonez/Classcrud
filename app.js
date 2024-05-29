const express = require("express");
const app = express();
const studentRoute = require("./route.js");

app.use(express.json());
app.set("view engine", "ejs");
app.use("/student", studentRoute);

app.use("/", (req, res) => {
  res.render(`pages/index`);
});

app.listen(9292, () => [console.log(" The server started on PORT = 9292")]);
