var {createStudent, me, updateStudent, destroyStudent} = require('../controllers/students_controller.js'),
 {collegeList} = require('../controllers/colleges_controller.js'),
 express = require('express'),
 router = express.Router(),
 token = require('./token_auth.js'),
 bodyParser = require('body-parser'),
 methodOverride = require('method-override'),
 Student = require('../models/student.js')

 // /api/students/ routes:
router.route('/students')
  .post(createStudent)

router.route('/token')
  .post(token.create)

router.route('/students/:id/favorites')
  .post(function(req,res){
    console.log(req)
    Student.findById(req.params.id).populate('collegeList').exec(function(err, student){
      student.collegeList.push(req.body)
      student.save(function(err, student) {
        res.json(student)
      })
    })
  })

// /api/students/:id routes:
// router.route('/:id')
//   .get(showStudent)
// 	.patch(updateStudent)
// 	.delete(destroyStudent)

router.route('/me')
  .get(token.authenticate, me)
  .patch(token.authenticate, updateStudent)
  .delete(token.authenticate, destroyStudent)

module.exports = router
