var College = require('../models/college.js'),
    Student = require('../models/student.js')

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

// // for favorites aka my collegList functionality
// function collegeList(req, res) {
//   console.log(req.user)
// Student.findById(req.student.id, function(err, student) {
//   if (err) res.status(404).send(err)
//   console.log(student.id)
//   College.findOne({_id: req.body.college._id}, function(err, college) {
//     console.log(college.name)
//     if(college) {
//       student.collegeList.push(college._id);
//       student.save(function(err, student) {
//         if (err)res.status(404).send(err)
//
//         res.json({message: "Added to college list.", success: true, student});
//       });
//
//     } else {
//
//       var collegeFields = {
//         name                  : req.body.name,
//         city                  : req.body.city,
//         commonApp             : req.body.commonApp,
//         ucApp                 : req.body.ucApp,
//         admissionRate         : req.body.admissionRate,
//         costOfTuition         : req.body.costOfTuition,
//         regularAppDue         : req.body.regularAppDue,
//         toeflScoresDue        : req.body.toeflScoresDue,
//         letterOfRecsRequired  : req.body.letterOfRecsRequired,
//         averageGpaAdmitted    : req.body.averageGpaAdmitted,
//         internationalAppFee   : req.body.internationalAppFee
//
//       }
//
//       College.create(collegeFields, function(err, college) {
//         student.collegeList.push(college._id);
//         student.save(function(err, student) {
//           if (err)res.status(404).send(err)
//
//           res.json({message: "College created and added to college List", success: true, student});
//         });
//       })
//
//     }
//   })
// })
// };

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
  // collegeList: collegeList,
  destroyCollege: destroyCollege
}
