canon-ccapi-node
# Canon Camera Control API NodeJS

More information @ [{DPHacks}](https://dphacks.com/how-to-canon-camera-control-api-ccapi/) website - a website for everything camera hack related

![Canon EOS RP - Camera Control API](https://i0.wp.com/dphacks.com/wp-content/uploads/2019/04/Canon-CCAPI-EOS-RP_1.jpg?resize=768%2C512&ssl=1 "Canon EOS RP - CCAPI")

This is a simplified version of my CCAPI app. This NodeJS is super lightweight and a lot more portable than my other CFML app.

Required packages:
- Express
- Request

## Instructions

Edit the ```config.json``` and edit the camera IP address. Port 8080 is the default port for canon cameras but feel free to change it if needed.

The app is intended to be used as a WiFi intervalomer for Canon cameras that support CCAPI.

I do not recommend using interval times shorter than 5 seconds. This application is meant to be used for long timelapses, not short burts of photos. Intervals shorter than 5 seconds might skip photos as the camera might be budy writing the photo to card.

I have this installed on a Raspberry Pi in Access Point mode. I can connect my Canon EOS RP and my cellphone to the Raspberry Pi.

The Phone does not need to be connected to the Pi once the intervalometer is started.

From a browser app on your phone. Call your Raspberry Pi IP:port followed by ```/ccapi```. Example:
```192.168.1.4:3000/ccapi```

Next, call the intervalimeter api on the Raspberry Pi using the format /numberOfShots/wait/delay

**numeberOfShots** is the number of pictures the camera will take\
**wait** is the number of second wait between shots\
**delay** is the numer of seconds to wait before starting the sequence of shots




