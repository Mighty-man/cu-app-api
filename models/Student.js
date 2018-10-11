var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  firstName:  String,
  middleName: String,
  lastName:   String,
 countyOfOrigin: String,
 emailAddress: String,
 phoneNumber: Number
});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;