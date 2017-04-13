var mongoose = require('./database'),
    College = require('../models/college')

var colleges = [
  {
    "name": "University of Chicago",
    "city": "Chicago",
    "admissionRate": 7.9,
    "costOfTuition": 71559,
    "regularAppDue": "2018-01-01T08:00:00.000Z",
    "toeflScoresDue": "2018-01-01T08:00:00.000Z",
    "letterOfRecsRequired": 2,
    "averageGpaAdmitted": 3.76,
    "internationalAppFee": 75,
    "ucApp": "false",
    "commonApp": "true"
  },
  {
    "name": "Princeton University",
    "city": "New Jersey",
    "admissionRate": 7.8,
    "costOfTuition": 61160,
    "regularAppDue": "2018-01-01T08:00:00.000Z",
    "toeflScoresDue": "2018-01-01T08:00:00.000Z",
    "letterOfRecsRequired": 3,
    "averageGpaAdmitted": 3.87,
    "internationalAppFee": 65,
    "ucApp": "false",
    "commonApp": "true"
  },
  {
    "name": "Harvard University",
    "city": "Princeton",
    "admissionRate": 5.9,
    "costOfTuition": 63025,
    "regularAppDue": "2018-01-01T08:00:00.000Z",
    "toeflScoresDue": "2018-01-01T08:00:00.000Z",
    "letterOfRecsRequired": 2,
    "averageGpaAdmitted": 3.83,
    "internationalAppFee": 75,
    "ucApp": "false",
    "commonApp": "true"
  },
  {
    "name": "Boston College",
    "city": "Chestnut Hill",
    "admissionRate": 28.8,
    "costOfTuition": 50480,
    "regularAppDue": "2018-01-01T08:00:00.000Z",
    "toeflScoresDue": "2018-01-01T08:00:00.000Z",
    "letterOfRecsRequired": 2,
    "averageGpaAdmitted": 3.7,
    "internationalAppFee": 70,
    "ucApp": "false",
    "commonApp": "true"
  },
  {
    "name": "Yale University",
    "city": "New Haven",
    "admissionRate": 6.8,
    "costOfTuition": 66445,
    "regularAppDue": "2018-01-01T08:00:00.000Z",
    "toeflScoresDue": "2018-01-01T08:00:00.000Z",
    "letterOfRecsRequired": 3,
    "averageGpaAdmitted": 3.85,
    "internationalAppFee": 80,
    "ucApp": "false",
    "commonApp": "true"
  },
  {
    "name": "Columbia University",
    "city": "New York",
    "admissionRate": 7.4,
    "costOfTuition": 71690,
    "regularAppDue": "2018-01-01T08:00:00.000Z",
    "toeflScoresDue": "2018-01-01T08:00:00.000Z",
    "letterOfRecsRequired": 3,
    "averageGpaAdmitted": 3.81,
    "internationalAppFee": 85,
    "ucApp": "false",
    "commonApp": "true"
  },
  {
    "name": "Stanford University",
    "city": "Stanford",
    "admissionRate": 6.6,
    "costOfTuition": 64477,
    "regularAppDue": "2018-01-01T08:00:00.000Z",
    "toeflScoresDue": "2018-01-03T08:00:00.000Z",
    "letterOfRecsRequired": 2,
    "averageGpaAdmitted": 3.83,
    "internationalAppFee": 90,
    "ucApp": "false",
    "commonApp": "true"
  },
  {
    "name": "Massachusetts Institution of Technology ",
    "city": "Cambridge",
    "admissionRate": 8.9,
    "costOfTuition": 56242,
    "regularAppDue": "2018-01-01T08:00:00.000Z",
    "toeflScoresDue": "2018-01-01T08:00:00.000Z",
    "letterOfRecsRequired": 2,
    "averageGpaAdmitted": 3.8,
    "internationalAppFee": 75,
    "ucApp": "false",
    "commonApp": "false"
  },
  {
    "name": "Duke University ",
    "city": "Durham",
    "admissionRate": 17.0,
    "costOfTuition": 58626,
    "regularAppDue": "2018-01-02T08:00:00.000Z",
    "toeflScoresDue": "2018-01-02T08:00:00.000Z",
    "letterOfRecsRequired": 2,
    "averageGpaAdmitted": 3.8,
    "internationalAppFee": 85,
    "ucApp": "false",
    "commonApp": "true"
  },
  {
    "name": "University of Pennsylvania ",
    "city": "Philadelphia",
    "admissionRate": 12.6,
    "costOfTuition": 58812,
    "regularAppDue": "2018-01-01T08:00:00.000Z",
    "toeflScoresDue": "2018-01-01T08:00:00.000Z",
    "letterOfRecsRequired": 2,
    "averageGpaAdmitted": 3.9,
    "internationalAppFee": 75,
    "ucApp": "false",
    "commonApp": "true"
  },
  {
    "name": "California Institute of Technology ",
    "city": "Pasadena",
    "admissionRate": 11.8,
    "costOfTuition": 54045,
    "regularAppDue": "2018-01-03T08:00:00.000Z",
    "toeflScoresDue": "2018-01-03T08:00:00.000Z",
    "letterOfRecsRequired": 2,
    "averageGpaAdmitted": 3.87,
    "internationalAppFee": 75,
    "ucApp": "false",
    "commonApp": "true"
  }
]

College.remove({}, function(err){
	if (err) throw err
	console.log('Cleared colleges.')
	College.create(colleges, function(err, colleges){
		if (err) throw err
		console.log(`Seeded ${colleges.length} colleges to the database.`)

		mongoose.connection.close()
        process.exit()
	})
})
