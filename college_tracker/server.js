var express   = require('express'),
	// cors        = require('cors'),
	app         = express(),
	logger      = require('morgan'),
	cookieParser   = require('cookie-parser'),
	bodyParser	= require('body-parser'),
	mongoose    = require('mongoose'),
	passport    = require('passport'),
	port        = process.env.PORT || 3000,
	studentRoutes  = require('./backend/config/student_routes.js'),
	collegeRoutes  = require('./backend/config/college_routes.js')
	// session     = require('express-session')

// // mount cors as middleware like this:
// app.use(cors())

// connect database
var dbUri = process.env.MONGODB_URI || 'mongodb://localhost/collegetracker'
mongoose.connect(dbUri)

//log requests made to the app
app.use(logger('dev'))

//make json objects available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//mount studentRoutes at /api/students
app.use('/api/students', studentRoutes)
//mount collegeRoutes at /api/colleges_controller
app.use('/api/colleges', collegeRoutes)

//mount 'public' folder as '/'
app.use(express.static('public'))

//run the web server
app.listen(port, function(){
	console.log('Server running on', port)
})
