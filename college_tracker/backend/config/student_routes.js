var {createStudent, me, updateStudent, destroyStudent} = require('../controllers/students_controller.js'),
express = require('express'),
 router = express.Router(),
 token = require('./token_auth.js'),
 bodyParser = require('body-parser'),
 methodOverride = require('method-override')

 // /api/students/ routes:
router.route('/students')
  .post(createStudent)

router.route('/token')
  .post(token.create)

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
