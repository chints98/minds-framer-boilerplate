##Initial device setup 


Framer.DeviceView.Devices["custom-iPhone-14"] = 
	deviceType: "custom-iPhone-14"
	screenWidth: 490
	screenHeight: 1048
	deviceImage: "https://www.citypng.com/public/uploads/preview/iphone-14-pro-max-mockup-hd-png-116625857418akbu6lfyo.png"
	deviceImageWidth: 800
	deviceImageHeight: 1214
#Correct proportions for tablet.
Framer.DeviceView.Devices["custom-phone"] = 
	deviceType: "custom-phone"
	screenWidth: 390
	screenHeight: 752
	deviceImage: "app/modules/iPhone 14 Plus – Midnight.png"
	deviceImageWidth: 437
	deviceImageHeight: 890
#correct proportions for Macbook. 
Framer.DeviceView.Devices["custom-macbook-16"] = 
	deviceType: "custom-macbook-16"
	screenWidth: 1664
	screenHeight: 1036
	deviceImage: "app/modules/Apple-Macbook-Pro-16-Space-Grey.png"
	deviceImageWidth: 2200
	deviceImageHeight: 1248


##initial proto for pixel
Device = new DeviceComponent
Device.setupContext()
Device.deviceType = 'custom-macbook-16'


## Background for mobile - dark
bgLayer = new BackgroundLayer 
	backgroundColor: "#1C1D1F"
	


#print (bgLayer.width)
##example layer (quick animation)

##top bar experiment


