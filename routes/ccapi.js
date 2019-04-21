var request = require("request");

/*
Direct Calls through the express API
*/

exports.connect = function(req, res) {

	endpoint = '/ccapi';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET',
		},

		function(error, response, body){
				if(response.statusCode=200){
					res.send("Connected");
				}else{
					res.send("Sorry, could not connect")
				}
				console.log(response.statusCode);
			});

};


/*
Camera Control functions without a direct call
*/

tripShutter = function() {

	endpoint = '/ccapi/'+config.VER+'/shooting/control/shutterbutton';

	var requestData = { "af":config.AF };

	request({
				url: 'http://'+config.IP+':'+config.PORT+endpoint,
				method: 'POST',
				json: requestData
				},

				function(error, response, body){
					console.log(response.statusCode);
					console.log(body.message);
					//return response.statusCode;
				});

}

liveVew = function(liveviewsize='small', cameraLCD='off') {

	endpoint = '/ccapi/'+config.VER+'/shooting/liveview';

	var requestData = {	
						'liveviewsize': liveviewsize,
						'cameradisplay': cameraLCD
						};

	request({
				url: 'http://'+config.IP+':'+config.PORT+endpoint,
				method: 'POST',
				json: requestData
				},

				function(error, response, body){
					console.log(response.statusCode);
					console.log(body.message);
					//return response.statusCode;
				});
}