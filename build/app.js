(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Device, bgLayer, topBar, topBarIcons;

Framer.DeviceView.Devices["custom-iPhone-14"] = {
  deviceType: "custom-iPhone-14",
  screenWidth: 490,
  screenHeight: 1048,
  deviceImage: "https://www.citypng.com/public/uploads/preview/iphone-14-pro-max-mockup-hd-png-116625857418akbu6lfyo.png",
  deviceImageWidth: 800,
  deviceImageHeight: 1214
};

Framer.DeviceView.Devices["custom-phone"] = {
  deviceType: "custom-phone",
  screenWidth: 390,
  screenHeight: 752,
  deviceImage: "app/modules/iPhone 14 Plus – Midnight.png",
  deviceImageWidth: 437,
  deviceImageHeight: 890
};

Framer.DeviceView.Devices["custom-macbook-16"] = {
  deviceType: "custom-macbook-16",
  screenWidth: 1664,
  screenHeight: 1036,
  deviceImage: "app/modules/Apple-Macbook-Pro-16-Space-Grey.png",
  deviceImageWidth: 2200,
  deviceImageHeight: 1248
};

Device = new DeviceComponent;

Device.setupContext();

Device.deviceType = 'google-pixel-quite-black';

bgLayer = new BackgroundLayer({
  backgroundColor: "#1F252C"
});

topBar = new Layer({
  width: Screen.width,
  height: 48,
  backgroundColor: "#333",
  y: 0,
  x: 0
});

topBarIcons = new Layer({
  width: 124,
  height: 24,
  image: "app/assets/icons.png",
  parent: topBar,
  x: Screen.width - 156,
  y: 12
});


},{}]},{},[1])

//# sourceMappingURL=app.js.map
