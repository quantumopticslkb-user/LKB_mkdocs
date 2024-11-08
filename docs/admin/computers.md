---
title: LKB IT guide
description: 'A guide to all IT stuff'
category: Tutorials
---
## General infos

### Contact the LKB IT support

For your general IT issues contact the IT support (Adil Khalfa). To do so:

- Use the ticket service [GLPI](https://weblkb.lkb.upmc.fr/glpi/)   (faster)
- or send an email to support@lkb.upmc.fr

Some tasks require a clear procedure (See below for details)

### CNRS Account - Janus

This account is created automatically when you have an LKB account. 
You can then connect to [Janus authentification service](https://magelan.cnrs.fr/). It centralizes all the CNRS tools.


## How-to ?

### How to get an LKB email ?

Present yourself to the administration board at room 13-23 203 to get your @lkb.upmc.fr email address! (Stéphanie or David can help you)

### How to add computer to the network ?

To add a computer to the network, you need to open a ticket with the IT services. To this end, [write them an email](mailto:support@lkb.upmc.fr).

!!! danger

    It's plain and simple, either you provide all the following info at once or the IT services will joyfully be a pain.

The email must feature the info

```text
- User last and first names :
- Login (typically your lkb email address) :
- Mac address of the device :
- Does this machine belong to the lab or to you?
- Is this Mac address for the wireless or LAN network?:
- Type of machine (portable computer, tower, usb adapter):
- Description : Brand / model / operating system :
- Date of end of contract (for personnal portable computers only) :
```


### How to map the LEON network drive ?
!!! warning
     You need a LKB email account

#### **Windows**

1.  Open a window in the file explorer > Tools
2.  Server: **\\\134.157.6.6\eq15b**
3.  login/password:

#### **Mac OS**

1. cmd+K from Finder
2. `smb manip15b@134.157.6.6/eq15b`
3. password:

#### **Linux**

1. Open a window in the file explorer > Other locations
2. In the bottom right adress bar type : `ssh://login@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B`
3. Password (don't forget to tick "Remember password")
   See the following detailed explanation for [ssh](/StartingPackage/Tools#ssh)

### How to install the VPN ?

VPN allows to acces the lab network from anywhere. To get an access, download OpenVPN (on Windows) or TunnelBlick (macOS) and contact the IT support. They will generate a configuration file for you.

!!! question "Why do I need a VPN actually ?"
    Good question. You need a VPN to access the lab network from outside. This is useful to access the shared drives on LEON, the server for computation Hawking or the publications behind paywalls.

## Passwords

Of  course not here ! Ask Quentin
