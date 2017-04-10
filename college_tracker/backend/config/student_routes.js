var {indexStudent, createStudent, updateStudent, destroyStudent} = require('../controllers/students_controller.js'),
express = require('express'),
 router = express.Router()

 // /api/students/ routes:
router.route('/')
  .get(indexStudent)
  .post(createStudent)
  
// /api/students/:id routes:
router.route('/:id')
	.patch(updateStudent)
	.delete(destroyStudent)

module.exports = router
