var College = require('../models/college.js')

// INDEX
function indexCollege(req, res) {
  College.find({}, function(err, colleges) {
    if (err) throw err

    res.send(colleges)
  })
}
// CREATE
function createCollege(req, res, next) {
  var college = new College(req.body)

  college.save(function(err, college) {
    if (err) throw err

    res.send(college)
  })
}
// SHOW
function showCollege(req, res) {
  var id = req.params.id

  College.find({_id: id}, function(err, college) {
    if (err) throw err

    res.send(college)
  })
}
// DESTROY
function destroyCollege(req, res) {
  var id = req.params.id

  College.remove({_id: id}, function(err) {
    if (err) throw err

    res.json({message: "College deleted successfully!"})
  })
}

module.exports = {
  indexCollege: indexCollege,
  createCollege: createCollege,
  showCollege: showCollege,
  destroyCollege: destroyCollege
}
