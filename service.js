const express = require("express");
let pool = require("./module.js");

class StudentService {
  constructor() {
    this.db = pool;
  }

  async dataDisplay() {
    const result = await this.db.query(
      `SELECT * FROM students ORDER BY stdid ASC`
    );
    return result;
  }

  async specificData(stdID) {
    const result = await this.db.query(
      `SELECT * FROM students WHERE stdid = ${stdID}`
    );
    return result;
  }

  async inputData(first_name, last_name, phone_no, email, total_marks) {
    const result = await this.db.query(
      `INSERT INTO students (first_name, last_name, phone_no, email, total_marks) 
      VALUES (${first_name}, ${last_name}, ${phone_no}, ${email}, ${total_marks}) RETURNING *`
    );
    return result;
  }

  async updateData(stdID, first_name, last_name, phone_no, email, total_marks) {
    const result = await this.db.query(
      `UPDATE students SET first_name = ${first_name}, last_name = ${last_name}, phone_no = ${phone_no}, email = ${email}, total_marks = ${total_marks}`
    );
    return result;
  }

  async deleteData(stdID) {
    const result = await this.db.query(
      `DELETE FROM students WHERE stdid = ${stdID}`
    );
    return result;
  }
}

module.exports = StudentService;
