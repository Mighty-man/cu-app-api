var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var stutentsRouter = require('./routes/students');
var bankReceiptRouter = require('./routes/bankReciept');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/students', stutentsRouter);
app.use('/api/v1/receipts', bankReceiptRouter);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

module.exports = app;
