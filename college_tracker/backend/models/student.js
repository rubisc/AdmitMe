var mongoose = require('mongoose'),
     College = require('./college.js')

var studentSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  firstName: String,
  lastName:String,
  dob: Date,
  citizenship: String,
  phone: String,
  gpa: Number,
  yearToStartCollege: Number,
  everSuspended: {type: Boolean, default: false},
  everExpelled: {type: Boolean, default: false},
  collegeList: [{type: mongoose.Schema.Types.ObjectId, ref: 'College'}]
})

//  add bcrypt hashing to model (works on a password field)!
studentSchema.plugin(require('mongoose-bcrypt'))

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
studentSchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var Student = mongoose.model('Student', studentSchema)

module.exports = Student
