const express = require("express");
const app = express();
const studentRoute = require("./route.js");
const service = require("./controller.js");

app.use(express.json());
app.set("view engine", "ejs");
app.use("/student", studentRoute);

app.use("/", service.studentDisplay.bind(service));

app.listen(9292, () => [console.log(" The server started on PORT = 9292")]);
