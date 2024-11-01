---
title: Introduction
description: 'Useful papers and tools'
position: 10
category: Rubidium Lab
---
## Introduction
To have a better understanding of propagating photon fluids in hot rubidium vapors the The tools and methods used to generate and characterise  are introduced. An important part is dedicated to presenting the method used to measure the vapor nonlinear refractive index. 

## Bibliography

A page to find relevant papers to understand what you do. All of the references (unless if otherwise stated) are available on [**Zotero**](/starting-package/tools#zotero).

### Bogoliubov theory

In this section, we will give useful references to treat the cubic hamiltonian of the non linear propagation in a $\chi^{(3)}$ medium.\
These paper describe how to treat your system in second quantized formalism, using field operators ($\hat{a}$ and $\hat{a}^\dagger$). If you are not familiarized with these tools, we strongly suggest you take a look at any serious quantum mechanics book (such as *Quantum Field Theory for the gifted amateur* by Lancaster and Blundell).

### Index measurement
The strength of the photon-photon interaction ralated to the third-order susceptibility $chi^{(3)}$ which links to nonlinear refractive index n2.  Although methods have been proposed by other groups such as the z-scan and the ring image in the far field,  all these ways exist some limitations and disadvantages. So it would be important to find an easy and precise way to measure this index. Tangui and Murad proposed a method based on wavefront measurement using interferometric techniques. The general idea is to place the non-linear medium in one arm of an interferometer (typically a Mach–Zehnder interferometer) and use phase retrieval algorithm to reconstruct the accumulated phase from the interferogram. You will find more details in the [arxiv](https://arxiv.org/abs/2202.05764).
### Temperature measurement
Temoperature is a key parameter controls not only the atoms velocity,  the filling and transit rates but transport length scales and the atomic density. Our basic idea is to get the transmission spectrum of a low power beam to pass through the vapor and then fit with the saturated absorption spectrum.
### Atomic structure

Read [Rubidium 87 D Line Data](https://steck.us/alkalidata/rubidium87numbers.1.6.pdf).

## General spirit of the experiments

The idea you always need to keep in mind is that you are doing a **science experiment**. You need to be able to **control everything that you do**, and **know at every moment what are the relevant parameters** of your experiment. In that sense, we strongly suggest that all your experiment be controlled through a Python code that is on your computer (and of course kept up to date on the team's [GitHub](/starting-package/tools#github)). This will allow you to reproduce easily your results and encourage you to store your data systematically in an orderly fashion. The goal is very simple : anybody with your lab book should be able to replicate your setup. The easier this is to do, the stronger your results will be. Furthermore, this will help you to be much more systematical in your data acquisition (namely changing only one thing at a time).

### Control

#### **Python code structure**

For the code structure, we suggest that you write a class that should contain all of the methods you use to run your experiments. Here is a simple example :
<code-block label="Python" active>

```python
from ScopeInterface import USBArbitraryFG
import EasyPySpin
import numpy as np

class Experiment:
    def __init__(self, afg: USBArbitraryFG, cam: EasyPySpin.VideoCapture) -> None:
        """
        Instantiates an Experiment object 
        :param afg: A USBArbitraryFG instance for the Arbitrary Function Generator
        :param cam: An EasyPySpin.VideoCapture instance for the PointGrey camera
        """
        self.afg = afg
        self.cam = cam
    def close(self):
        """
        A method to release connection to all instruments
        """
        self.afg.close()
        self.cam.release()
```

</code-block>

Here you have an experiment class that will control two instruments :
- An arbitrary function generator (AFG) to control a laser for instance
- A camera
  
The libraries to control both of theses instruments are imported at the begining of the file to be able to properly type the `__init__` method. This `__init__` function tells the class the recipe to build an `Experiment` instance. Here, it only has two attributes which are the AFG and camera objects. This is essentially a virtual representation of your setup.\
The `close` method will simply close the connections to all instruments. When you control remotely instruments, you should always take care to close connections once you're done or else the connection will be blocked for other programms to access the instrument.\
Now you can for instance add a method that will put the AFG in DC mode at a specific voltage and take a picture :
<code-block label="Python" active>
```python
def setAFG_takepic(self, voltage: float, output: int = 1) -> np.ndarray:
    """
    Sets the AFG to a specific voltage and takes a picture
    :param float voltage: DC voltage in volts
    :param int output: AFG port (1 or 2)
    """
    self.afg.dc_offset(ouptut, offset=voltage)
    ret, frame = self.cam.read()
    return frame
```
</code-block>

You can find more examples on the group's [GitHub](https://github.com/Quantum-Optics-LKB).
<alert type="warning">**EVERY CODE SHOULD BE COMMENTED TO THIS STANDARD**</alert>\
(you are free to chose your docstring style though ...)

#### **A library for each instrument**

You will hereafter find a list of Python libraries to control almost all of the equipment you will find in the lab.

##### Cameras

Hamamatsu : You need to go through the DCAM API. Here is a [repo](https://github.com/ZhuangLab/storm-control) that shows you how to do this. You then only have a `hamamatsu_camera.py` module and very easy commands.

Point Grey : You need to install the [Spinnaker SDK](https://www.flir.eu/products/spinnaker-sdk/). Once in the FLIR dropbox, you need to also download the relevant `PySpin` package for your OS and Python version. You can then finally `pip install EasyPySpin` a super convenient little wrapper that allows to use FLIR cameras like any OpenCV capture device.

Thorlab : Thorcam software

Basler : use the Pylon library on python

##### Rigol Instruments

For all Rigol Instruments (e.g AFG, oscilloscopes, spectrum analyzers etc...), we developped a [library](https://github.com/Quantum-Optics-LKB/RigolInterface) that uses PyVisa to communicate with these instruments.\
If you find an instrument that does not fall in the three classes already implemented, you can easily expand it by using the list of SCPI commands for this specific instrument (the lists for the already implemented instruments are on the [repo](https://github.com/Quantum-Optics-LKB/RigolInterface/blob/main/DG2000_ProgrammingGuide_EN.pdf) for reference).

##### Thorlabs Kinesis devices

All Thorlabs devices that can be controlled through Kinesis/APT can be controlled with [this](https://github.com/Quantum-Optics-LKB/Piezo) library we wrote. The repo is extensively documented to make it possible to extend it with additional devices. 



#### **Lasers**

##### Muquans

The lasers are connected via an Ethernet cable to the computer network. They are identified with IP addresses and named them with mountain names:  
- IP: 192.168.1.107 / Name: Shakhdag  / Port: 23
- IP: 192.168.1.108 / Name: Kapaz  
Each laser is essentially a linux computer that you communicate to through tcp. \
To open a connection to the laser, you need to connect to it using the PuTTy client, usually on Maxwell, but this can be done on any computer of the Rb lab.\
We usually use [MTpuTTy](https://ttyplus.com/multi-tabbed-putty/) as a convenient PuTTy utility. Once installed, you have to add the server (laser)
you want to talk to. Besides the IP, you have to specify the port and the protocol (Telnet). \
Power control is possible by setting the power of the Erbium Doped Fibre Amplifier (EDFA) to a value between 0 and 3. 


<alert type="warning">Always turn on the diode before the amplifier or you will break the laser (and it is not cheap). Also, always switch off the amplifier before the diode.</alert>
The code to turn on the diode is:
 ```bash
  sml780_tool Enable_Current_Laser_Diode <on|off>
 ```  
The code to turn on the amplifier is:
 ```bash
  sml780_tool edfa_set 1
 ```   
The code to turn off the amplifier is:  
 ```bash
 sml780_tool edfa_shutdown
 ```   
  </code-block>

##### Toptica

The TA pro is a high power tunable diode laser product. It  can be operated via the digital control platform for example locking frequency intelligently.
 