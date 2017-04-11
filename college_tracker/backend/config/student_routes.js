var {indexStudent, createStudent, showStudent, updateStudent, destroyStudent} = require('../controllers/students_controller.js'),
express = require('express'),
 router = express.Router()

 // /api/students/ routes:
router.route('/')
  .get(indexStudent)
  .post(createStudent)

// /api/students/:id routes:
router.route('/:id')
  .get(showStudent)
	.patch(updateStudent)
	.delete(destroyStudent)

module.exports = router
