const router = require('express-promise-router')();
const studentController = require('../controllers/studentController')

router.route('/')
    .get(studentController.index)
    .post(studentController.newStudent)
    
router.route('/:studentId')
.post(studentController.getSingleStudent)
module.exports =  router;