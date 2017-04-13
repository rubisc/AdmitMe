var express   = require('express'),
	cors        = require('cors'),
	app         = express(),
	logger      = require('morgan'),
	cookieParser   = require('cookie-parser'),
	bodyParser	= require('body-parser'),
	mongoose    = require('mongoose'),
	port        = process.env.PORT || 3000,
	studentRoutes  = require('./backend/config/student_routes.js'),
	collegeRoutes  = require('./backend/config/college_routes.js')

// Use a .env file to hide sensitive environment variables.
require('dotenv').config()
// // mount cors as middleware like this:
app.use(cors())

// connect database
var dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/collegetracker'
mongoose.connect(dbUri)

//log requests made to the app
app.use(logger('dev'))

//make json objects available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//mount 'public' folder as '/'
app.use(express.static('public'))

//mount studentRoutes at /api/students
app.use('/api', studentRoutes)
//mount collegeRoutes at /api/colleges_controller
app.use('/api/colleges', collegeRoutes)

//run the web server
app.listen(port, function(){
	console.log('Server running on', port)
})

// Validate content-type.
app.use(validateContentType);

app.use(studentRoutes);

app.use(addFailedAuthHeader);

function validateContentType(req, res, next) {
  var methods = ['PUT', 'PATCH', 'POST'];
  if (                                    // If the request is
    methods.indexOf(req.method) !== -1 && // one of PUT, PATCH or POST, and
    Object.keys(req.body).length !== 0 && // has a body that is not empty, and
    !req.is('json')                       // does not have an application/json
  ) {                                     // Content-Type header, then …
    var message = 'Content-Type header must be application/json.';
    res.status(400).json(message);
  } else {
    next();
  }
}

// When there is a 401 Unauthorized, the repsonse shall include a header
// WWW-Authenticate that tells the client how they must authenticate
// their requests.
function addFailedAuthHeader(err, req, res, next) {
  var header = {'WWW-Authenticate': 'Bearer'};
  if (err.status === 401) {
    if (err.realm) header['WWW-Authenticate'] += ` realm="${err.realm}"`;
    res.set(header);
  }
  next(err);
}
