---
title: Lasers
description: 'A guide for the lasers'
category: Tutorials
---

All the lasers manual, test reports and softwares are available on LEON at `partages/EQ15B/Manuals and Data Sheets/`

## List

| Laser         | Wavelength | Scanning range |  Max power | Characteristics                      | Bought in |   Remarks           | Usage    |
|-----------    |---------------|---------------|-------------|-------------       | ----   | ------- | -------- |
| **Precilasers**  |
|Nuptse *(model : FL-SF-780-2-CW, SN : PLP-2024-01-002602)* | 780 nm | thermal tuning: 15 GHz, current tuning: 1 GHz |2W | FECL  | June 2024 | Fibered output | Feedback loop (QS)|
| Toubkal 1 *(model : FL-SF-795-2-2-CW ; SN : PLP-2024-01-002601)* | 780 nm |  thermal tuning: >15 GHz, current tuning: 1 GHz | 2W | FECL  | June 2024 | to be used with Toubklal 2 (phase-locked together) | Cold setup |
| Toubkal 2 | 780 nm | thermal tuning: 15 GHz, current tuning: 1 GHz| 2W | FECL | June 2024 | to be used with Toubklal 1 (phase-locked together) | Cold setup |
| Aoraki *(model : FL-SF-780-5-CW, SN : PLP-2024-01-002600)*| 780 nm | with PZT : 15 GHz | 5W | DFB  with PZT | June 2024 | Free space output | Hydro (Myrann) |
| Fuji *(model : FL-SF-780-5-CW, SN : PLP-2024-01-002599)* | 780 nm | thermal tuning: 15 GHz, current tuning : 1 GHz | 5W | FECL seed laser with PZT DC Input Voltage of -3~3 V | June 2024 | Free space output | Mixtures (Clara) |
| Everest *(model : FL-SF-780-8-CW, SN : PLP-2024-01-002584)* | 780 nm | thermal tuning: 15 GHz, current tuning: 1 GHz | 8W | DFB seed laser with PZT | June 2024 | Free spaced output |Cold setup |
| Kosciuzko *(model : FL-SF-795-2-CW, SN : PLP-2024-01-002603)* | 795 nm | PZT tuning : 6 GHz | 2W | DFB with PZT | June 2024 | Fibered output | Hydro (Myrann) |
| **Toptica** |
| Cervin | 780 nm | ~ 20 GHz | ~ 50 mW | ECDL | 2018 ? |  | Cold setup|
| Lhotse | 780 nm | ~ 20 GHz | ~ 50 mW | ECDL | 2022 |  | Cold setup|
| Kilimandjaro | 780 nm | ~ 20 GHz | 4 W | ECDL + TA | 2018 ? | TA changed in 2023 . Coupled to fiber dock.| Unused |
| Denali | 795 nm | ~ 20 GHz | 2 W | ECDL + TA. | 2022 | Coupled to fiber dock.  | Mixtures (Clara) |
| **Muquans** |
| Shakhdag | 780 nm | ~ 10 GHz | 1 W | DFB + EDFA | ? | EOM inside  | 1D (Alix) |
| Kapaz | 780 nm | ~ 10 GHz | 1 W | DFB + EDFA | ? | EOM inside  | Unused |



## Details and how to

### Precilaser
All the lasers manual, test reports and softwares are available on LEON at `partages/EQ15B/Manuals and Data Sheets/Lasers/Precilaser`. 

#### Turn on
cf manual. <br>
Plug the laser, turn it on, turn the key. Press "Enable", set the desired current value then press "Set(A)". Press "PSMode" for automatic optimization of parameters to deliver max power. To turn off : first set the current to 0, then press "Enable"

#### Software
First, you need to connect the two USB cables (seed and laser) to your computer.\
The software install is also in `partages/EQ15B/Manuals and Data Sheets/Lasers/Precilaser`. \
To tune the laser frequency, click on "PreciSeed" (top of the screen), then select the connection port of the SEED, then press "connect". Then depending on the laser you can directly set the desired  wavelength, or otherwise tune the seed temperature (slowly, by step of 0.1 °C). For instance, for Fuji, a change of 0.1°C shifts the frequency by about 0.35 GHz.

#### Python control
[Here](https://github.com/Quantum-Optics-LKB/PreciLaser) is the (homemade) code to control the PreciLaser with Python.

#### Details for the cold setup locking scheme
Incoming

### Toptica
#### Turn on & control
Pretty straightforward to turn on, press "enable". To control the frequency, adjust the piezo voltage. 

#### Software
The "TOPAS" software is to be found here : https://www.toptica.com/company-profile/downloads-apps \
Connect the laser to the lab network (and your computer) and on the software, go to "Connection settings" and select the laser IP adress (or name). 

#### Python control
You will find [here](https://github.com/Quantum-Optics-LKB/toptica_DL_control/blob/main/toptica_freq_control.py) codes exapmle to connect to the laser, calibrate the scanning frequency with an SAS, and set the frequency. 

#### Extra info
For the Toptica lasers, a linear ramp of the pizeo voltage renders a linear scan of the laser frequency, so you can calibrate your scan frequency with a fit of a saturated abssorption spectrum. 

For the TA lasers (Denali and Kilimandjaro) : coupling the fiber dock is a tedious (but ultimately satisfying) process. Don't expect to reach a better coupling than 55-60 % . [Here](https://www.toptica.com/fileadmin/Editors_English/03_products/11_Isolators_Photonicals/02_photonicals/toptica_FiberDock_Manual.pdf) is the fiber dock manual with the coupling process.

### Muquans
#### Turn on and control

The lasers are connected via an Ethernet cable to the computer network. They are identified with the IP addresses:  
- IP: 192.168.1.107 / Name: Shakhdag  / Port: 23
- IP: 192.168.1.108 / Name: Kapaz  

Each laser is essentially a linux computer that you communicate to through tcp. \
To open a connection to the laser, you need to connect to it using the PuTTy client, from any computer of the Rb lab.\
We use [MTpuTTy](https://ttyplus.com/multi-tabbed-putty/) as a convenient PuTTy utility. Once installed, you have to add the server (laser)
you want to talk to. Besides the IP, you have to specify the port and the protocol (Telnet). \
Power control is possible by setting the power of the Erbium Doped Fibre Amplifier (EDFA) to a value between 0 and 3. 

!!! warning
  Always turn on the diode before the amplifier (and turn off the aplifier before turning off the diode) or you will break the laser (and it is not cheap). Also, always switch off the amplifier before the diode.

Turn on the diode:
 ``` bash
  sml780_tool Enable_Current_Laser_Diode <on|off>
 ```  
Turn on the amplifier and set it to 1 (for example):
 ``` bash
  sml780_tool edfa_set 1
 ```   
To turn off the amplifier:  
 ``` bash
 sml780_tool edfa_shutdown
 ```
 
 #### Scan the frequency
 You can scan the laser frequency over about 15 GHz by inputting a linear ramp of **maximum** 10V amplitude (with an AFG). Tune the central frequency with the offset of the ramp. If you need to shift it further, you can **very slowly and delicately** turn the temperature knob on the front panel of the laser. \
 Careful ! With those lasers, a linear voltage ramp doesn **not** result in a linear frequency ramp. To calibrate the frequency during a scan, you will need a Fabry-Perot in addition to the saturated absorption.
