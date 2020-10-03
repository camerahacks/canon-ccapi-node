var request = require("request");

/*
Direct Calls through the express API
*/

/*
List of APIs
*/

exports.connect = function(req, res) {

	endpoint = '/ccapi';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET',
		},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

};

/*
Camera Control functions without a direct call
*/

/*
Camera Information
*/

exports.getDeviceInfo = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/deviceinformation';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});
}

/*
Camera Status
*/

exports.getDeviceStatusStorage = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/devicestatus/storage';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}



exports.getDeviceStatusCurrStorage = function(req, res){ //Ver 110

	endpoint = '/ccapi/'+config.VER+'/devicestatus/currentstorage';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getDeviceStatusCurrDirectory = function(req, res){ //Ver 110

	endpoint = '/ccapi/'+config.VER+'/devicestatus/currentdirectory';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getDeviceStatusBattery = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/devicestatus/battery';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getDeviceStatusBatteryList = function(req, res){ //Ver 110

	endpoint = '/ccapi/'+config.VER+'/devicestatus/batterylist';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getDeviceStatusLens = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/devicestatus/lens';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getDeviceStatusTemp = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/devicestatus/temperature';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

/*
Camera Settings
*/

exports.getCopyright = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/copyright';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.putCopyright = function(req, res){ //Ver 100

	var copyright = req.params.copyrightInfo;

	var requestData = { "copyright": copyright };

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/copyright';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'PUT',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.delCopyright = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/copyright';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'DELETE'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getAuthor = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/author';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}


exports.putAuthor = function(req, res){ //Ver 100

	var author = req.params.authorInfo;

	var requestData = { "author": author };

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/author';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'PUT',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}


exports.delAuthor = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/author';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'DELETE'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getOwner = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/ownername';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}


exports.putOwner = function(req, res){ //Ver 100

	var owner = req.params.ownerInfo;

	var requestData = { "ownername": owner };

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/ownername';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'PUT',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}


exports.delOwner = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/ownername';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'DELETE'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getNickname = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/nickname';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}


exports.putNickname = function(req, res){ //Ver 100

	var nickname = req.params.nicknameInfo;

	var requestData = { "nickname": nickname };

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/nickname';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'PUT',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}


exports.delNickname = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/registeredname/nickname';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'DELETE'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getDatetime = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/datetime';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}


exports.putDatetime = function(req, res){ //Ver 100

	//Need to format datetime to RFC1123 compliant

	var datetime = req.params.datetimeInfo;
	var dst = req.params.DST;

	var requestData = { 
						"datetime": datetime,
						"dst": dst
						 };

	endpoint = '/ccapi/'+config.VER+'/functions/datetime';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'PUT',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}


exports.postCardFormat = function(req, res){ //Ver 100

	var storagename = req.params.storagename;

	var requestData = { "name": storagename};

	endpoint = '/ccapi/'+config.VER+'/functions/cardformat';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'POST',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}


exports.getBeep = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/beep';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.putBeep = function(req, res){ //Ver 100

	//Need to format datetime to RFC1123 compliant

	var ability = req.params.ability;

	var requestData = { "datetime": ability };

	endpoint = '/ccapi/'+config.VER+'/functions/beep';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'PUT',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getDisplayoff = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/displayoff';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.putDisplayoff = function(req, res){ //Ver 100

	//Need to format datetime to RFC1123 compliant

	var ability = req.params.ability;

	var requestData = { "datetime": ability };

	endpoint = '/ccapi/'+config.VER+'/functions/displayoff';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'PUT',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getAutopoweroff = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/autopoweroff';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.putAutopoweroff = function(req, res){ //Ver 100

	//Need to format datetime to RFC1123 compliant

	var ability = req.params.ability;

	var requestData = { "datetime": ability };

	endpoint = '/ccapi/'+config.VER+'/functions/autopoweroff';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'PUT',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.postNetworkconnection = function(req, res){ //Ver 110

	//Doesn't support Wi-Fi
	//Actions: disconnect, reboot

	var action = req.params.action;

	var requestData = { "action": action};

	endpoint = '/ccapi/'+config.VER+'/functions/networkconnection';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'POST',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getNetworksetting = function(req, res){ //Ver 110, 110

	endpoint = '/ccapi/'+config.VER+'/functions/networksetting';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.postWificonnection = function(req, res){ //Ver 100

	//Actions: disconnect

	var requestData = { "action": "disconnect"};

	endpoint = '/ccapi/'+config.VER+'/functions/wificonnection';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'POST',
			json: requestData
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getWifisetting = function(req, res){ //Ver 100

	endpoint = '/ccapi/'+config.VER+'/functions/wifisetting';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

/*
Camera Customization
*/

exports.getExposure = function(req, res){ //Ver 110

	endpoint = '/ccapi/'+config.VER+'/customfunctions/exposureincrements/exposure';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getExposureAV = function(req, res){ //Ver 110

	endpoint = '/ccapi/'+config.VER+'/customfunctions/exposureincrements/av';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getExposureTV = function(req, res){ //Ver 110

	endpoint = '/ccapi/'+config.VER+'/customfunctions/exposureincrements/tv';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getFlashExposure = function(req, res){ //Ver 110

	endpoint = '/ccapi/'+config.VER+'/customfunctions/exposureincrements/flashexposure';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getIsoIncrements = function(req, res){ //Ver 110

	endpoint = '/ccapi/'+config.VER+'/customfunctions/isoincrements';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getContents = function(req, res){ //Ver 100, 110

	endpoint = '/ccapi/'+config.VER+'/contents';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getContentsStorage = function(req, res){ //Ver 100, 110

	var storage = req.params.storage;

	endpoint = '/ccapi/'+config.VER+'/contents/'+storage;

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}


exports.getContentsDirectory = function(req, res){ //Ver 100, 110

	var storage = req.params.storage;
	var directory = req.params.directory;

	endpoint = '/ccapi/'+config.VER+'/contents/'+storage+'/'+directory;

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.delContentsDirectory = function(req, res){ //Ver 100, 110

	var storage = req.params.storage;
	var directory = req.params.directory;

	endpoint = '/ccapi/'+config.VER+'/contents/'+storage+'/'+directory;

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'DELETE'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

exports.getFile = function(req, res){ //Ver 100, 110

	var storage = req.params.storage;
	var directory = req.params.directory;
	var file = req.params.file;
	var kind = req.params.kind;

	endpoint = '/ccapi/'+config.VER+'/contents/'+storage+'/'+directory+'/'+file+'?kind='+kind;

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

		function(error, response, body){
				if(response.statusCode == 200){
					res.send(body);
				}else{
					res.send(response)
				}
				console.log(response.statusCode);
			});

}

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
				});

}


getLensInfo = function(){

	endpoint = '/ccapi/'+config.VER+'/devicestatus/lens';

	request({
			url: 'http://'+config.IP+':'+config.PORT+endpoint,
			method: 'GET'
			},

			function(error, response, body){
				console.log(response.statusCode);
				console.log(body.message);
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
				});
}