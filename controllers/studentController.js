const Student = require('../models/Student');

module.exports = {
    index: async (req, res) => {
        const students = await Student.find({})
        res.status(200).json(students)

    }
}