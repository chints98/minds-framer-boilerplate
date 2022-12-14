(function() {
  //if not Framer.Device
  // From framer.generated.js
  //Framer.Defaults.DeviceView = {"deviceScale":-1,"deviceType":"apple-iphone-7-gold","contentScale":1,"orientation":0};
  //Framer.Defaults.DeviceComponent = {"deviceScale":-1,"deviceType":"apple-iphone-7-gold","contentScale":1,"orientation":0};
  //Framer.Device = new Framer.DeviceView();
  //Framer.Device.setupContext();
  // End from framer.generated.js 

  //MyModule = require("myModule")

  //MyModule.myFunction()

  //#Set custom device - iPhone X
  //figma = Framer.Importer.load("imported/")
  //projectLayers = Framer.Importer.load("imported", scale: 1)

  //$ = Framer.Importer.load("imported")

  //feedModule = require("feedScreen")

  //feedModule.examFunction()
  var Device, bkgLayer, layerA;

  Device = new DeviceComponent;

  Device.setupContext();

  Device.deviceType = 'apple-macbook-pro';

  // Custom device code (for later)

  //Device.customize
  // screenWidth: 1512
  // screenHeight: 982
  //deviceImage: 'Apple-Macbook-Pro-16-Space-Grey.png'
  // deviceImage: 'http://f.cl.ly/items/001L0v3c1f120t0p2z24/custom.png'
  // deviceImageWidth: 1600
  // deviceImageHeight: 2000
  bkgLayer = new BackgroundLayer({
    backgroundColor: "green"
  });

  layerA = new Layer({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    borderRadius: 8,
    backgroundColor: "#28affa"
  });

  
//layerA.on Events.Click, ->
//   print "Click!"

}).call(this);


//# sourceMappingURL=app.js.map
//# sourceURL=coffeescript