---
title: Turbulence Exp
description: 'All you need to know about the manip 1'
position: 41
category: Rubidium Lab
---

## Introduction
This setup has been designed to be as versatile as possible. The idea is to be able to perform different quantum hydrodynamics experiments as simply as possible. This allows you to quickly run a project and get data.
<article-image src="RbLab/Table1/table1.jpg" alt="setup" size="40" :center="true"></article-image>

## Control 

To be able to use the experiment properly you need to have some basic knowledge about control (laser, imaging, ...).
There are two ways to control the setup: with electronics and optics.

### Devices 

#### Laser
Our laser is a muquans fiber laser that gives us 1 Watt on the output of the fiber coming on the optical table. It is called Shakdag.  
To control it you should go their: <NuxtLink to="/RbLab/bibliography"> General </NuxtLink>.  
<article-image src="RbLab/Table1/laser.jpg" alt="setup" size="40" :center="true"></article-image>

#### AFG

This is a device act as a function generator. This function generator is linked to the laser and allow us to control the frequency by modulating the laser diode current between -5V to +5V.  
It's a good tools to give modulation to any device, for exemple an AOM.
<article-image src="RbLab/Table1/afg.jpg" alt="setup" size="40" :center="true"></article-image>

#### Temperature of the Rb cell

The Rb cell is surrounded by resistors to which a current is applied to heat the medium. Controlling the current given to them is equivalent to controlling the temperature applied to the medium. To do this we simply use a current generator connected to the resistor.
<article-image src="RbLab/Table1/temp.jpg" alt="setup" size="40" :center="true"></article-image>

#### AOM

On the probe arm we added an aom to be able to modulate it (contolled with the afg). It means that, for a given modulation we switch on and off the aom which will cause the probe to flash at this frequency modulation.

#### Camera

On the table we have two cameras to image the entry and exit of our environment. The one at the entrance is not very efficient, it is a cheapos thorlabs camera.  
To control it, you have to use the software provided by thorlabs. The PCO camera is very powerful and allows us to have a very good image. We use the software provided also.  
Both need to be plugged into a pc with an ultra fast usb port, otherwise it won't work.

### Optics

With the optical elements we have an easy control over the power of the laser and for the imaging process.

#### Power

To control the power we usually use half-wave blade followed by a polarized beam splitter.  
One control the total power after the fiber, a second one control the ratio between the probe and the pump, and each of them has their own control too.

#### Imaging

For imaging we make telescopes with two lenses.

## The previous project

Quantum turbulence.  
Superradiance.