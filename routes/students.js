const router = require('express-promise-router')();
const studentController = require('../controllers/studentController')

router.route('/')
    .get(studentController.index)
    .post(studentController.newStudent)
module.exports =  router;