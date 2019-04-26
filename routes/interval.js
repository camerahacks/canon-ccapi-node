var request = require("request");

var interval;
var isActive = false;
var numberOfShots;
var sequenceNumber;

exports.intervalShooting = function(req, res) {

	numberOfShots 		= req.params.shots;
	var wait 			= req.params.wait*1000; //wait in seconds
	var delay 			= req.params.delay*1000; //delay in seconds

	isActive = true;

	//Turn off the display according to preferences
	if(config.LCD == 'off'){
		
		var LCD = liveVew('small', 'off');
	
	};

	if (delay > 0) {
		
		setTimeout(function() { intervalSequence(numberOfShots, wait, res) }, delay)
	
	} else {
		
		intervalSequence(numberOfShots, wait, res);
	
	};

};

exports.stopInterval = function(req, res) {

	clearInterval(interval);

	isActive = false;

	/*
	/	wait 5 seconds to turn on the LCD screen
	/	otherwise, camera will be busy saving the last photo
	*/
	setTimeout(function(){
		var LCD = liveVew('small', 'on');
		clearInterval(interval);
	}, 5000);
	
	console.log("Stopped");
	
	res.send("Stopped");

};

exports.getStatus = function(req, res) {

	if(isActive == false){
		numberOfShots = 0;
		sequenceNumber = 0;
	}

	var status = 	{	
						'isActive': isActive,
						'numberOfShots': numberOfShots ,
						'sequenceNumber': sequenceNumber
					};

	res.send(status);

};


function intervalSequence(numberOfShots, wait, res) {

	sequenceNumber = 0;

	res.send("Started");

	//fire one shot right away
	let shutter = tripShutter();
	
	sequenceNumber = sequenceNumber+1;

	console.log("Tripped the Shutter "+sequenceNumber+" times");

	interval = setInterval(function(){

		sequenceNumber = sequenceNumber+1;

		let shutter = tripShutter();

		console.log(shutter);

		if(shutter == 200){
			
			console.log("Tripped the Shutter "+sequenceNumber+" times");
		
		};

		if(sequenceNumber >= numberOfShots){
			
			console.log("Sequence Complete");

			/*
			/	wait 5 seconds to turn on the LCD screen
			/	otherwise, camera will be busy saving the last photo
			*/
			setTimeout(function(){
				var LCD = liveVew('small', 'on');
				clearInterval(interval);
			}, 5000);
			
		};

	}, 	wait);

};