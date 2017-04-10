var mongoose = require('mongoose'),
     Student = require('./student.js')

var collegeSchema = new mongoose.Schema({
  name: String,
  city: String,
  commonApp: {type: String, default: true},
  ucApp: {type: String, default: false},
  admissionRate: Number,
  costOfTuition: Number,
  regularAppDue: Date,
  toeflScoresDue: Date,
  letterOfRecsRequired: Number,
  averageGpaAdmitted: Number,
  internationalAppFee: Number
})

var College = mongoose.model('College', collegeSchema)

module.exports = College
