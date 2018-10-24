const router = require('express-promise-router')();
const bankRecieptController = require('../controllers/bankReceiptcontroller')

router.route('/')
    .get(bankRecieptController.index)
    .post(bankRecieptController.newBankReciept)
    
module.exports =  router;