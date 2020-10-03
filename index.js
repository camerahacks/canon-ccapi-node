express = require('express');//call express module
request = require('request');// call the request module
path = require('path');// call the path modeule


config = require('./config');
ccapi = require('./routes/ccapi');
interval = require('./routes/interval');

//Build other app variables
port = 3000;

app = express();

//MAIN PAGE
app.use('/', express.static(path.join(__dirname, 'html')));

//BASIC COMMANDS CCAPI
app.get('/connect', ccapi.connect);

//CAMERA INFO
app.get('/deviceinfo', ccapi.getDeviceInfo);


//DEVICE STATUS
app.get('/storage', ccapi.getDeviceStatusStorage);
app.get('/currentstorage', ccapi.getDeviceStatusCurrStorage);
app.get('/currentdirectory', ccapi.getDeviceStatusCurrDirectory);
app.get('/battery', ccapi.getDeviceStatusBattery);
app.get('/batterylist', ccapi.getDeviceStatusBatteryList);
app.get('/lens', ccapi.getDeviceStatusLens);
app.get('/temperature', ccapi.getDeviceStatusTemp);

//CAMERA SETTINGS
app.get('/copyright', ccapi.getCopyright);
app.get('/putcopyright/:copyrightInfo', ccapi.putCopyright);
app.get('/deletecopyright', ccapi.delCopyright);

app.get('/author', ccapi.getAuthor);
app.get('/author/:authorInfo', ccapi.putAuthor);
app.get('/deleteauthor', ccapi.delAuthor);

app.get('/ownername', ccapi.getOwner);
app.get('/ownername/:ownerInfo', ccapi.putOwner);
app.get('/deleteownername', ccapi.delOwner);

app.get('/nickname', ccapi.getNickname);
app.get('/nickname/:nicknameInfo', ccapi.putNickname);
app.get('/deletenickname', ccapi.delNickname);

app.get('/datetime', ccapi.getDatetime);
app.get('/datetime/:datetimeInfo/:DST', ccapi.putDatetime);
app.get('/cardformat/:storagename', ccapi.postCardFormat);

app.get('/beep', ccapi.getBeep);
app.get('/beep/:ability', ccapi.putBeep);

app.get('/displayoff', ccapi.getDisplayoff);
app.get('/displayoff/:ability', ccapi.putDisplayoff);

app.get('/autopoweroff', ccapi.getAutopoweroff);
app.get('/autopoweroff/:ability', ccapi.putAutopoweroff);

app.get('/networkconnection/:action', ccapi.postNetworkconnection); //Doesn't support Wi-Fi
app.get('/networksetting', ccapi.getNetworksetting); //List of network APIs
//Skipping other calls for network setting for now.
app.get('/wificonnection', ccapi.postWificonnection);
app.get('/wifisetting', ccapi.getWifisetting);
//Skipping other call for WiFi setting for now.

//CAMERA CUSTOMIZATION
app.get('/exposure', ccapi.getExposure); //Exposure compensation
app.get('/exposure/av', ccapi.getExposureAV);
app.get('/exposure/tv', ccapi.getExposureTV);
app.get('/flashexposure', ccapi.getFlashExposure); //Flash exposure compensation
app.get('/isoincrements', ccapi.getIsoIncrements); // ISO increments

//IMAGE OPERATIONS
app.get('/contents', ccapi.getContents); //Get list of storage URLs
app.get('/contents/:storage', ccapi.getContentsStorage); //Get list of storage URLs
app.get('/contents/:storage/:directory', ccapi.getContentsDirectory); //Get list of contents URLs
app.get('/deletecontents/:storage/:directory', ccapi.delContentsDirectory); //Delete directory
app.get('/contents/:storage/:directory/:file/:kind', ccapi.getFile); //Get list of contents URLs

//BASIC COMMANDS INTERVAL
app.use('/status', interval.getStatus);
app.use('/test', interval.test);


//INTERVAL SHOOTING
app.use('/interval/:shots/:wait/:delay', interval.intervalShooting);
app.use('/interval/stop', interval.stopInterval);


//SETUP THE APP
app.listen(port, function(){
	console.log('Listening on port 3000...');
});