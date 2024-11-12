---
title: Lasers
description: 'A guide for the lasers'
category: Tutorials
---
## List
### Precilaser
All the laser docs are available on LEON at `partages/EQ15B/Manuals` and `Data Sheets/Precilaser`
#### 780nm
  - Nuptse: CW 2W (free)
  - Aoraki: CW 5W (Myrann)
  - Fuji: CW 5W (free)
  - Everest: CW 8W (cold atoms)
#### 795nm
- Kosciusko: CW 2W (Myrann)
- Toubkal 1 and 2: CW 2W

### Toptica
- Kilimandjaro : 2W - clara
- Denali: 2W
- Lhotse  : 50mW -lothr
- Cervin : 50mW -cold


### μ-quans
- Shakdag : 1W @ 780
- Kapaz : 1W @ 780

#### Warm vapors ?
- Whitney: FL-SF-780-2-CW (FECL)
- Logan: FL-SF-795-2-CW (DFB)
- Makalu: FL-SF-780-5-CW (DFB) 
- Anapurna: FL-SF-780-5-CW (DFB ?)

#### MistiQ-Light ?
- Denali: FL-SF-795-2-2-CW (FECL) - clara
- K2: FL-SF-780-8-CW (FECL)




!!! warning
  Always turn on the diode before the amplifier or you will break the laser (and it is not cheap). Also, always switch off the amplifier before the diode.

The code to turn on the diode is:
 ``` bash
  sml780_tool Enable_Current_Laser_Diode <on|off>
 ```  
The code to turn on the amplifier is:
 ``` bash
  sml780_tool edfa_set 1
 ```   
The code to turn off the amplifier is:  
 ``` bash
 sml780_tool edfa_shutdown
 ```   


### TAs (Tapered Amplifiers); 
aka MOPA (Master Oscillator Power Amplifier)
#### Cold Lab - DA BEAST MOT: 
- TA control [driver](https://www.teamwavelength.com/download/Datasheets/lfi4500.pdf). Wavelength Electronics: LFI-4532 3.25 Amp Laser Diode Driver. Default current limit: 250 mA for LFI-4532.

## Usage
| Laser         | Main characteristics                      | Usage                 |
|-----------    |-------------------------------------------|-------------          |
| Whitney       | 2W @780 - 15GHz                           | fluid beam            |
| Logan         | 2W @795 - 0.5nm                           | defect beam           |
| Makalu        | 5W @780 - 0.5nm                           | fluid beam            |
| Anapurna      | 5W @780 - 0.5nm                           | fluid beam            |
| Denali        | 2x2W @795 phase-locked @6.8GHz            | EIT probe and pump    |
| Everest       | 8W @780 + sidebands @6.8GHz               | Cooling and repump    |
| Kilimandjaro  | 3.6W @780                                 | 2 components          |
| Méru          | 3W @795                                   | defect beam           |
| Cervin        | 50mW @780/795                             | laser Cooling         |
| Lhotse        | 50mW @780/795                             | laser Cooling         |
| Shakdag       | 1W @ 780 + EOM                            | 1D                    |
| Kapaz         | 1W @ 780 + EOM                            | Not used              |

## How to
### Precilaser
#### How to lock Everest for the GigaMOT
The 8W Everest laser at 780 is designed to be locked using an OPLL provided by Precilaser. This offers flexibility and tunability.
The plan is to lock a Master laser on any resonance of the 780nm line. This will be done by providing ~6mW to the PreciBox SAS. This Master laser will then be locked using Precilaser electronics. We could actually use the repump from the small MOT for example.
(I dont know if we need to provide a modulation on this ?)

The second step is to use the fiber combiner within the box to combine this Master laser with 3mW of Everest via the fiber input on the front panel of Precibox.
Doing so, the electronics inside will allow to choose the lock point at any (reasonable) detuning from the Master laser (electronically), and will output an error signal (after a PID) to be reinjected into Everest piezo input.

### Muquans
#### How to use the MuQuans lasers (to be improved)


The lasers are connected via an Ethernet cable to the computer network. They are identified with IP addresses and named them with mountain names:  
- IP: 192.168.1.107 / Name: Shakhdag  / Port: 23
- IP: 192.168.1.108 / Name: Kapaz  
Each laser is essentially a linux computer that you communicate to through tcp. \
To open a connection to the laser, you need to connect to it using the PuTTy client, usually on Maxwell, but this can be done on any computer of the Rb lab.\
We usually use [MTpuTTy](https://ttyplus.com/multi-tabbed-putty/) as a convenient PuTTy utility. Once installed, you have to add the server (laser)
you want to talk to. Besides the IP, you have to specify the port and the protocol (Telnet). \
Power control is possible by setting the power of the Erbium Doped Fibre Amplifier (EDFA) to a value between 0 and 3. 