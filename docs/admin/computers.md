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

```
- User last and first names :
- Login (typically your lkb email address) :
- Mac address of the device :
- Does this machine belong to the lab or to you?
- Is this Mac address for the wireless or LAN network?:
- Type of machine (portable computer, tower, usb adapter):
- Description : Brand / model / operating system :
- Date of end of contract (for personnal portable computers only) :
```

### Storing data
!!! warning
     You need a LKB email account

Use the lab data storage server (Léon) to store your data. The IP address is **134.157.6.6** and you can access it using [ssh](/programming/index.md) with your LKB account. The team stores everything under the **eq15b\\** directory.

### How to install the VPN ?

VPN allows to acces the lab network from anywhere. To get an access, download OpenVPN (on Windows) or TunnelBlick (macOS) and contact the IT support. They will generate a configuration file for you.

!!! question "Why do I need a VPN actually ?"
    Good question. You need a VPN to access the lab network from outside. This is useful to access the shared drives on LEON, the server for computation Hawking or the publications behind paywalls.

## Network Architecture

The network is configured as follows :

```
router
    |--p1 <- LKB network (not managed by us 134.157.6.1)
    |
    |--p2 -> warm switch (134.157.7.74)
    |        192.168.0.x
    |                 |--p2 -> switch 8 ports (bragg experiment)
    |                 |--p3 -> switch 16 ports (1d experiment)
    |                 |--p4 -> switch 24 ports (vortex experiment)
    |                
    |--p3 -> cold switch
    |        192.168.1.x
    |                 |--p2 -> switch 8 ports (table top)
    |                 |--p3 -> switch 24 ports (table top)
    |                 |--p4 -> switch 8 ports (near Hawking)
    |                 
    |--p4 -> disconnected
    |
    |--p5 -> muquans laser
             10.0.2.x
```

## Passwords

Of  course not here ! Ask Quentin
