// var LocalStrategy = require('passport-local').Strategy,
//     Student = require('../models/student.js')
//
// module.exports = function(passport){
//
//   passport.serializeStudent(function(student, done){
//     done(null, student.id);
//   });
//
//   passport.deserializeStudent(function(id, callback){
//     Student.findById(id, function(err, student){
//       callback(err, student)
//     })
//   })
//
//   passport.use('local-signup', new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
//   }, function(req, email, password, callback) {
//     process.nextTick(function() {
//
//       // Find a student with this e-mail
//       Student.findOne({ 'local.email' :  email }, function(err, student) {
//         if (err) return callback(err);
//
//         // If there already is a student with this email
//         if (student) {
//           return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
//         } else {
//         // There is no email registered with this email
//
//           // Create a new student
//           var newStudent            = new Student();
//           newStudent.local.email    = email;
//           newStudent.local.password = newStudent.encrypt(password);
//
//           newStudent.save(function(err) {
//             if (err) throw err;
//             return callback(null, newStudent);
//           });
//         }
//       });
//     });
//   }));
//
//   passport.use('local-login', new LocalStrategy({
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true
//   }, function(req, email, password, callback) {
//
//      // Search for a student with this email
//      Student.findOne({ 'local.email' :  email }, function(err, student) {
//        if (err) return callback(err);
//
//         // If no student is found
//        if (!student) return callback(null, false, req.flash('loginMessage', 'No student found.'));
//
//        // Wrong password
//        if (!student.validPassword(password))           return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
//
//        return callback(null, student);
//      });
//    }));
//
// }
