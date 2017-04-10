var Student = require('../models/student.js')

// INDEX
function indexStudent(req, res) {
  Student.find({}, function(err, students) {
    if (err) throw err

    res.send(students)
  })
}
// CREATE
function createStudent(req, res, next) {
  var student = new Student(req.body)

  student.save(function(err, student) {
    if (err) throw err

    res.send(student)
  })
}
// UPDATE
function updateStudent(req, res) {
  Student.findById({_id: req.params.id}, function(err, student) {
    if (err) throw err

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
  var id = req.params.id

  Student.remove({_id: id}, function(err) {
    if (err) throw err

    res.json({message: "Student successfully deleted"})
  })
}

module.exports = {
  indexStudent: indexStudent,
  createStudent: createStudent,
  updateStudent: updateStudent,
  destroyStudent: destroyStudent
}
