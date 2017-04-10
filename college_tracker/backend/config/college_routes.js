var {indexCollege, createCollege, showCollege, destroyCollege} = require('../controllers/colleges_controller.js'),
express = require('express'),
 router = express.Router()

// /api/colleges/ routes:
router.route('/')
  .get(indexCollege)
  .post(createCollege)

// /api/colleges/:id routes:
router.route('/:id')
  .get(showCollege)
  .delete(destroyCollege)

  module.exports = router
