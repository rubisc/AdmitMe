var mongoose = require('mongoose'),
     College = require('./college.js')

var studentSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  dob: Date,
  citizenship: String,
  phone: String,
  email: String,
  gpa: Number,
  yearToStartCollege: Number,
  everSuspended: {type: Boolean, default: false},
  everExpelled: {type: Boolean, default: false},
  collegeList: [{type: mongoose.Schema.Types.ObjectId, ref: 'College'}]
})


var Student = mongoose.model('Student', studentSchema)

module.exports = Student
