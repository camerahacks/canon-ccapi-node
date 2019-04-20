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

I do not recommend using interval times shorter than 5 seconds. This application is meant to be used for long timelapses, not short burts of photos. Intervals shorter than 5 seconds might skip photos as the camera might be busy writing the photo to the memory card or responding to other commands. The CCAPI interface is not capable of queuing multiple concurrent requests.

I have this app installed on a Raspberry Pi Zero W configured as an Access Point. I can connect my Canon EOS RP and my cellphone to the Raspberry Pi.

The phone does not need to be connected to the Pi once the intervalometer sequence is started. Feel free to turn off WiFi on your phone once the sequence is running.

### Operation

Connect the Canon camera to the Raspberry Pi.
Connect your phone or any other device with an internet browser

From a browser app on your device (cellphone). Call your Raspberry Pi IP:port followed by ```/ccapi```.\
Example:\
```192.168.1.4:3000/ccapi```
This will stablish a CCAPI connection between the camera and the Raspberry Pi.

Next, using the same browser on your device (cellphone), call the intervalimeter api on the Raspberry Pi using the format ```/numberOfShots/wait/delay```

**numeberOfShots** is the number of pictures the camera will take\
**wait** is the number of second between shots\
**delay** is the number of seconds to wait before starting the sequence of shots

Example:
```192.168.1.4:3000/interval/20/60/5```

The above translates to: Wait 5 second to start shooting then take 20 pictures waiting 60 seconds between each picture.

### Important
Currently, there is no way to gracefully stop the sequence once it has started. This is the next feature I will implement.
