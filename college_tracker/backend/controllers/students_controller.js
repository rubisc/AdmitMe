var Student = require('../models/student.js')
  // College       = require('../models/college.js')

function createStudent(req, res, next) {
  if (!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  console.log(req.body)
  Student
    .create(req.body)
    .then(function(student) {
      res.json({
        success: true,
        message: 'Successfully created student.',
        data: {
          email: student.email,
          id:    student._id
        }
      });
    }).catch(function(err) {
      if (err.message.match(/E11000/)) {
        err.status = 409;
      } else {
        err.status = 422;
      }
      next(err);
    });
};

function me(req, res, next) {
  Student
    .findOne({email: req.decoded.email}).exec()
    .then(function(student) {
      res.json({
        success: true,
        message: 'Successfully retrieved student data.',
        data: student
      });
    })
    .catch(function(err) {
      next(err);
    });
};

// // INDEX
// function indexStudent(req, res) {
//   Student.find({}, function(err, students) {
//     if (err) throw err
//
//     res.send(students)
//   })
// }
// // CREATE
// function createStudent(req, res, next) {
//   var student = new Student(req.body)
//
//   student.save(function(err, student) {
//     if (err) throw err
//
//     res.send(student)
//   })
// }
// // SHOW
// function showStudent(req, res) {
//   var id = req.params.id
//
//   Student.find({_id: id}, function(err, student) {
//     if (err) throw err
//
//     res.send(student)
//   })
// }
// UPDATE
function updateStudent(req, res) {
  Student.findOne({_id: req.decoded._id}).exec()
   .then(function(student, err) {
    if (err) throw err
    if(req.body.email) student.email = req.body.email
    if(req.body.firstName) student.firstName = req.body.firstName
    if(req.body.lastName) student.lastName = req.body.lastName
    if(req.body.dob) student.dob = req.body.dob
    if(req.body.citizenship) student.citizenship = req.body.citizenship
    if(req.body.phone) student.phone = req.body.phone
    if(req.body.gpa) student.gpa = req.body.gpa
    if(req.body.yearToStartCollege) student.yearToStartCollege = req.body.yearToStartCollege

    student.save(function(err) {
      if (err) throw err
      res.send(student)
      res.json({message: "Student successfully updated"})
    })
  })
}
// DELETE
function destroyStudent(req, res) {
  // var id = req.params.id
  Student
    .remove({_id: req.decoded._id}, function(err) {
    if (err) throw err

    res.json({message: "Student successfully deleted"})
  })
}

module.exports = {
  // indexStudent: indexStudent,
  createStudent: createStudent,
  me: me,
  // showStudent: showStudent,
  updateStudent: updateStudent,
  destroyStudent: destroyStudent
}
