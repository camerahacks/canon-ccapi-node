var request = require("request");

exports.intervalShooting = function(req, res) {

	var numberOfShots 	= req.params.shots;
	var wait 			= req.params.wait*1000; //wait in seconds
	var delay 			= req.params.delay*1000; //delay in seconds

	if (delay > 0) {
		setTimeout(function() { intervalSequence(numberOfShots, wait, res) }, delay)
	} else {
		intervalSequence(numberOfShots, wait, res);
	}

};


function intervalSequence(numberOfShots, wait, res) {

	var endpoint = '/ccapi/'+config.VER+'/shooting/control/shutterbutton';

	var sequenceNumber = 0

	var requestData = { "af":config.AF };

	res.send("Started");

	//fire one shot right away

	var interval = setInterval(function(){

		if(sequenceNumber < numberOfShots){
	
			sequenceNumber = sequenceNumber+1;

			request({
						url: 'http://'+config.IP+':'+config.PORT+endpoint,
						method: 'POST',
						json: requestData
					},

					function(error, response, body){
						console.log(response.statusCode);
						console.log(body.message);
					});

			console.log("Tripped the Shutter "+sequenceNumber+" times");


		} else {
			clearInterval(interval)
		};

	}, 	wait);

};