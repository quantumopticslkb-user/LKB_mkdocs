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
All the lasers manual, test reports and softwares are available on LEON at `partages/EQ15B/Manuals and Data Sheets/Precilaser`. You will find all the info 

#### Turn on
cf manual. <br>
Plug the laser, turn it on, turn the key. Press "Enable", set the desired current value then press "Set(A)". Press "PSMode" for automatic optimization of parameters to deliver max power. To turn off : first set the current to 0, then press "Enable"

#### Software
First, you need to connect the two USB cables (seed and laser) to your computer.\
The software install is also in `partages/EQ15B/Manuals and Data Sheets/Precilaser`. \
To tune the 

#### Python control

#### Cold Lab - DA BEAST MOT: 
- TA control [driver](https://www.teamwavelength.com/download/Datasheets/lfi4500.pdf). Wavelength Electronics: LFI-4532 3.25 Amp Laser Diode Driver. Default current limit: 250 mA for LFI-4532.


#### How to lock Everest for the GigaMOT
The 8W Everest laser at 780 is designed to be locked using an OPLL provided by Precilaser. This offers flexibility and tunability.
The plan is to lock a Master laser on any resonance of the 780nm line. This will be done by providing ~6mW to the PreciBox SAS. This Master laser will then be locked using Precilaser electronics. We could actually use the repump from the small MOT for example.
(I dont know if we need to provide a modulation on this ?)

The second step is to use the fiber combiner within the box to combine this Master laser with 3mW of Everest via the fiber input on the front panel of Precibox.
Doing so, the electronics inside will allow to choose the lock point at any (reasonable) detuning from the Master laser (electronically), and will output an error signal (after a PID) to be reinjected into Everest piezo input.

### Toptica
#### Turn on & control
#### Software
The "TOPAS" software is to be found here : https://www.toptica.com/company-profile/downloads-apps 

#### Python control
#### Extra info


### Muquans
#### How to use the MuQuans lasers 

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

The code to turn on the diode is:
 ``` bash
  sml780_tool Enable_Current_Laser_Diode <on|off>
 ```  
The code to turn on the amplifier (ofr example on 1) is:
 ``` bash
  sml780_tool edfa_set 1
 ```   
The code to turn off the amplifier is:  
 ``` bash
 sml780_tool edfa_shutdown
 ```  
