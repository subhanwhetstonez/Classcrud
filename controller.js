const StudentService = require("./service.js");

class StudentController {
  constructor() {
    this.studentService = new StudentService();
  }

  async studentDisplay(req, res) {
    const data = await this.studentService.dataDisplay();
    res.json(data.rows);
  }

  async oneStudent(req, res) {
    const { stdid } = req.params;
    const data = await this.studentService.specificData(stdid);
    res.json(data.rows);
  }

  async inputeStudent(req, res) {
    const { first_name, last_name, phone_no, email, total_marks } = req.body;
    await this.studentService.inputData(
      first_name,
      last_name,
      phone_no,
      email,
      total_marks
    );
    res.json("STUDENT HAS BEEN ADDED");
  }

  async updateStudent(req, res) {
    const { stdid } = req.params;
    const { first_name, last_name, phone_no, email, total_marks } = req.body;
    const data = await this.studentService.updateData(
      stdid,
      first_name,
      last_name,
      phone_no,
      email,
      total_marks
    );
    res.json(data.rows);
  }

  async deleteStudent(req, res) {
    const { stdid } = req.params;
    const data = await this.studentService.deleteData(stdid);
    res.send("STUDENT DATA DELETED SUCCESSFULLY");
  }
}

module.exports = new StudentController();
