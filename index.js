express = require('express'); //call express module
app = express();
request = require('request');// call the request module, globally


config = require('./config');
ccapi = require('./routes/ccapi');
interval = require('./routes/interval');

//Build other app variables
var port = 3000;

app.use('/connect', ccapi.connect);

//INTERVAL SHOOTING
app.use('/interval/:shots/:wait/:delay', interval.intervalShooting);
app.use('/interval/stop', interval.stopInterval);


//APP PORT
app.listen(port, function(){
	console.log('Listening on port 3000...');
});
