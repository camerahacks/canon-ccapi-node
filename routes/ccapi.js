var request = require("request");

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