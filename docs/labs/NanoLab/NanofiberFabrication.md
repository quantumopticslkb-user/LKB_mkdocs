---
title: Nanofiber Fabrication
description: 'Experiment notebook'
position: 2
category: Nano lab
---
## Nanofiber profile calculation
<alert type="info"> The profile of tapered optical nanofiber needs to meet the so-called *adiabatic criterium* so that the incoming modes will transit from a core-cladding waveguide to a core-vacuum waveguide losslessly. </alert>

A tapered optical nanofiber includes three main regions: standard single mode fiber, fiber taper and nanofiber.
The first step is to calculate the nanofiber diameter meeting the experimental requirements.


## Software and Pulling Setup initialization

In this section the main steps for initializing the pulling setup and its software controls will be described. 

1. Turn on the computer! **:D**

2. The pulling setup needs several softwares to control all the different hardware parts. Open the softwares in the order they are named in this tutorial, to ensure that everything works smooth. The first software to run is **Spyder**, to launch the UI for controlling and monitoring the procedure.
    
    *insert spyder logo*

3. Once the software is launched, run the following commands in the ```console``` *individually*:
    <code-block label="Python">
    ```python
    import sys
    sys.path.append('DIRECTORY TBA')
    runfile('PATH TO PULLING INTERFACE TBA')
    ```
    </code-block>
    <alert type='warning'>
    When launching the interface, after the last command, pay attention to the feedback from the console. It happens often that one of the motors (in particular, the one moving up and down the brushing flame) can't establish a connection with the software. 
    If the connection is established, the message *1 APT motor connected* followed by a ID number will be displayed. If not, please close the software, unplug and plug again the cable connecting the motor to the computer, and run again the commands in the *console*. It will eventually connect and the correct message will be displayed during the UI launch.
    </alert>

4. After the UI is launched correctly, open **Mozilla Firefox** and then click on the **XPS** bookmark on the bookmark toolbar.
    *Image will be added*

5. Insert the correct ```Username``` and ```Password```. Ask for the credentials to one of your lab colleagues. Usually, the credentials should be already saved on the page.

6. After logging in, the following interface will appear. Locate the ```move``` label on the toolbar at the top of the page and click on it.
   *Image will be added*
    <alert type='warning'>
    aaaaa
    </alert>

7. After the previous steps, the connection with the motors (one to move the brushing flame, connected via Spyder, and two to pull the fiber, connected via the procedure in *steps 4-6*). At this step, we can go back to the UI opened after *step 3*.
    <alert type='info'>
    Verify that the check-boxes *APT Connect* and *XPS Connect* are checked at the top of the UI window!
    </alert>

8. Verify the pulling motors connection by clicking on the ```HOME``` button. The motors will rapidly move at their home position.

9. Move the motors to the proper position to start the pulling procedure, by clicking on the ```INIT Position``` button. The motors will move close to each other, at the right position to ensure that the flame is positioned at the center between the two motors. By default from a previous calibration, these position are preloaded in the UI software and they are **-49** for the *Left* motor and **-28** for the *Right* one.

10. Verify that the fiber-flame distance written in the UI box is **0.9**.

11. Verify the jog step is set at **0.1** in the UI box. The jogging refers to the up and down movement of the flame during the pulling process. This point will be recalled in the *Fabrication* section.

12. Load the pulling profile calculated in the *Nanofiber profile calculation* section. Commonly used profiles are already available in the computer storage, in the ```D://``` volume. For example, nanofibers fabricated in the framework of the NanoBright European Project are pulled using the profile available in ```D:/Tirage/780HP/07_Dec_2020_10h27-PUTM-rw180-Lw3-L00.43.txt```.

## Startup of the Hydrogen and Oxygen generators, flame control

The heat and brush pulling procedure to fabricate the nanofibers exploits a oxyhydrogen flame (obtained by a mixture of gaseous hydrogen and oxygen with a precise ratio). In this section, the correct procedure to turn on and to start up the generators, as well as the softwares to control the fluxes, will be described.

1. Open the oxygen cylinder valve (the cylinder with the red valve on the right of the pulling setup hood).

2. Turn on the hydrogen generator, under the pulling setup hood, by pressing the ON/OFF switch located on the rear part of the generator.
    <alert type='warning'>
    ATTENTION! Pay a lot of attention if any warning or error is reported during the generator warming up procedure. If ANY warning is reported, quickly check the generator manual at the following path, checking the reported warning code.
    </alert>
    ```MANUAL ADDRESS TO BE ADDED```

## THESE PART HAVE BEEN WRITTEN ON THE 22nd of March 2022. RESUME FROM HERE. AB


## Fabrication

 <alert type="info"> Tapered optical nanofiber is fabricated with "heat and pull" method. </alert>
Producing optical nanofiber requires clean environment and careful fiber cleaning before pulling.
Before the tapering of optical fiber starts, the polymeric jacket needs to be removed over the distance separating the fiber clamps.
Any dusts from the environment fell on to the fiber, the remaining detritus of fiber jacket or grease on fingers left on the fiber will burn when it's brought to the flame and create some defects on the fiber surface during pulling.
Therefore, the pulling system is installed in a box with air-flow.
Clean room gloves (as opposed to standard chemistry protection gloves)
are necessary to avoid contamination by the operator.
The optical fiber is cleaned with a few wipes of isopropanol on lens tissue to remove most of the particles on the surface, followed with a wipe of acetone to dissolve small remaining pieces, and finalized with a wipe of isopropanol to remove the remaining acetone. 
The clean environment can also avoid the dusts attaching to the nanofiber after tapering, which will cause the scattering of light and lower the entire transmission rate.

Then, we mount the cleaned fiber into the v-grooves on the clamps.

A camera continuously monitors the nanofiber from the side.
The focus plane of the camera is adjusted to be on the fiber.
The center of the flame needs to be aligned with the fiber based on the focus plane of the camera.

The transmission is detected with a photodiode, as shown in Fig. \ref{fig:Fiber_tapering_system}, and recorded.
The output signal is normalized to the initial laser power before pulling.

<article-image src="NanoLab/image841.png" alt="Setup" size="80" :center="true"></article-image>

<alert type="warning"> During the pulling, the hot air from the flame will slowly lift the nanofiber since the weight of the fiber region on top of the flame drops.
It is critical because the distance between flame and the fiber becomes larger than the setting.
The temperature of the fiber might not reach the softening point of silica.
The distance between the two transverse stage increases during the pulling process, and this will break the fiber rather than narrowing it.</alert>


