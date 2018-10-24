var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bankReceiptSchema = new Schema({
 email: String,
 reciept: String
});

const BankReceipt= mongoose.model('bankReceipt', bankReceiptSchema);
module.exports = BankReceipt;