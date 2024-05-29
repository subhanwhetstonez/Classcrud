const express = require("express");
const Router = express.Router();
const service = require("./controller.js");

Router.use(function (req, res, next) {
  console.log(`${req.url} @ ${Date.now()}`);
  next();
});

//Router.route("/create").get(service.certain);

Router.route("/")
  .get(service.studentDisplay.bind(service))
  .post(service.inputeStudent.bind(service));

Router.route("/:stdid")
  .get(service.oneStudent.bind(service))
  .post(service.updateStudent.bind(service))
  .delete(service.deleteStudent.bind(service));

module.exports = Router;
