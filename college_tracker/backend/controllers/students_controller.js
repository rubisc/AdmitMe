var Student = require('../models/student.js'),
  passport  = require('passport'),
  College       = require('../models/college.js')

// PASSPORT AUTHENTICATION
// function getSignup(req, res) {
//   res.render('authentication/signup.ejs', {message: req.flash('signupMessage')})
// }
//
// function postSignup(req, res) {
//   var signupStrategy = passport.authenticate('local-signup', {
//       successRedirect: '/',
//       failureRedirect: '/students/signup',
//       failureFlash: trues
//     }
//   )
//   return signupStrategy(req, res);
// }
//
// function getLogin(req, res) {
//   res.render('authentication/login.ejs', {message: req.flash('loginMessage')})
// }
//
// function postLogin(req, res) {
//   var loginProperty = passport.authenticate('local-login', {
//     successRedirect: '/',
//     failureRedirect: '/users/login',
//     failureFlash: true
//   })
//
//   return loginProperty(req, res)
// }
//
// function getLogout(req, res, next) {
//   req.logout();
//   // req.session.destroy(function(err) {
//   //     if (err) {
//   //       return next(err);
//   //     }
//   //     return res.send({
//   //       authenticated: req.isAuthenticated()
//   //     })
//   //   })
//     res.redirect('/students/login');
//   }

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
// SHOW
function showStudent(req, res) {
  var id = req.params.id

  Student.find({_id: id}, function(err, student) {
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
  showStudent: showStudent,
  updateStudent: updateStudent,
  destroyStudent: destroyStudent
}
