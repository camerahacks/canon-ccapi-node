express = require('express'); //call express module
app = express();
request = require('request');// call the request module, globally


//Build other app variables
var port = 3000;
config = require('./config');

//var shutter		= require('./routes/shutter');
var interval = require('./routes/interval');
var ccapi = require('./routes/ccapi');

app.use('/connect', ccapi.connect);

//INTERVAL SHOOTING
app.use('/interval/:shots/:wait/:delay', interval.intervalShooting);


//APP PORT
app.listen(port, function(){
	console.log('Listening on port 3000...');
});
