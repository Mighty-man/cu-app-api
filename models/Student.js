var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  firstName:  String,
  middleName: String,
  lastName:   String,
 countyOfOrigin: String,
 emailAddress: String,
 telephoneNumber: Number
});