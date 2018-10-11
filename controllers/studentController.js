const Student = require('../models/Student');

module.exports = {
    index: async (req, res) => {
        const students = await Student.find({})
        res.status(200).json(students)

    },
    newStudent: async (req, res) => {
        const newStudent = req.body;
        const student = await Student.save(newStudent);
        res.status(201).json(student)
    },

 }
