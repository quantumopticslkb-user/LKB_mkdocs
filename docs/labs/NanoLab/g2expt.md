---
title: g2 experiment
description: 'short description'
position: 2
category: Nano lab 
---

## g2 experiment via microscope

  This document aims at explaining how the g2 set-up works. 

### Set-up description 

Soon here: the set-up description as reference for the next paragraph. 

### Launch the Spyder interface to control the set-up 

Open Spyder on the lab computer and run *Experiment.guy*; the *Main Window* interface will appair. 

### Connection to the CCD camera 

We use the CCD camera to:

   1. locate and select the emitters (wide-field microscopy)
   2. make saturation measures and bleaching videos

In the first case we control the CCD camera using the *HC ImageLive* camera's software, instead in the second case using the *Main Window* interface. At the beginning, the camera is controlled by default by *Main Window*. To control the CCD camera via *HC ImageLive*, open the *Device* panel from the interface's top bar and uncheck *Camera* from the list of devices on the right. 


### Wide-field microscopy 

We use a non collimated LED lamp to excite the sample in order to have an overview of the all camera's frame before selecting a single emitter to characterize. 

The LED power can be adjusted between 0 and 25W (0% - 100%) and we choose the LED power according to the brightness of the emitters we are characterizing (i.e for perovskites we set the power at 2.5W (10%), for brighter emitters 5% can be enough). Then, the LED light is sent into the microscope.

Soon here: an image of the wide field microscopy set-up 

To illuminate the sample, you can choose the suitable filters rotating the LED filters' turret on the microscope. 

<alert type="info">  On the microscope there are two filters' turrets and each one contains several filters as many   are the available light sources. In the bottom turret there are all the LED filters (i.e. filters for LED@405 nm,  LED@532 nm...) and in the top turret the laser filters (i.e. filters for laser@405nm, laser@532nm...). Each  poissible choise is well labeled on the microscope. </alert >

Now, on the 'HC ImageLive' you can click on the 'Live' bottom and adjust the focal plane rotating slowly the microscope focusing handle, in order to see clearly all the emitters. 

Soon here: image of wide-field microscopy frame

At this point, you can select the nanocrystal you want to characterize and, using the motorized xy microscope plate, you can move it to the center of the frame, which will coincide with the position of the laser spot in the confocal microscopy configuration. 

#### Motorized xy microscope plate  

Soon here: how to control the MADCityLabs microscope plate


### Confocal microscopy 

Once the emitter is at the center of the frame, you can switch off the LED and excite the emitter with the laser rotating the top filters' turret (the one for the lasers dichoric mirrors and filters) and choosing the suitable position.  
The emitted PL is collected by the high NA objective and can be sent to the camera for the saturation measures, to the spectrometer to take emission spectra or, using a flipping mirror, to a pair of APDs in a Hanbury-Brown and Twiss configuration for the Time-Correlated Single Photon Counting (TCSPC) detection. 

### Spectra acquisition 

To take spectra you open the *LightField* spectrometer's software on the computer. Before the spectra acquisition, set the directory for the data saving and measure the background signal using the *Background acquisition* bottom on the right of the window. 

<alert type="warning">  Without the background acquisition all spectra will be affected by the light noise coming from the room, from computers etc. </alert>
<alert type="warning">  Whenever the lighting conditions in the room change, a new background acquisition is necessary. </alert>

Then, to take the PL spectrum click on *Run* on the top bar of the window. 

The data are saved with names in date-time format (dd-mmm-yyyy hh:mm:ss) with both the extension .cvs and .spe. A file without the background correction is also available in the .spe extension.  






### Saturation measurement 

### g2 measurement 

### Bleaching video acquisition 

### Blueshift measurement 


### Polarization measurement 

## Deposition of the emitter on the nanofiber 


## g2 experiment via nanofiber 





