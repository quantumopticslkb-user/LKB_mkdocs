---
title: Computers and networks
description: 'A guide to all IT stuff'
category: Tutorials
---

### LKB email

Present yourself to the administration board to Stephanie to get your @lkb.upmc.fr email adress!

### CNRS Account (Janus)

This account is created automatically when you have an LKB account. You can then connect to Janus authentification service (add link). It centralizes all the CNRS tools.

## Contact the LKB IT support

For your general IT issues contact the IT support (Adil Khalfa). To do so:

- Use the ticket service [GLPI](https://weblkb.lkb.upmc.fr/glpi/)   (faster)
- or send an email to support@lkb.upmc.fr

Some tasks require a clear procedure (See below for details)

### Adding a computer to the network

To add a computer to the network, you need to open a ticket with the IT services. To this end, [write them an email](mailto:support@lkb.upmc.fr).

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

<alert type="warning"> It's plain and simple, either you provide all this info at once or the IT services will joyfully be a pain. </alert>

## Map a Network drive ⚠️You need a LKB email account

- **Windows**

1. Open a window in the file explorer > Tools
2. Server: **\\\134.157.6.6\eq15b**
3. login/password:

- **Mac**

1. cmd+K from Finder
2. `smb manip15b@134.157.6.6/eq15b`
3. password:

- **Linux**

1. Open a window in the file explorer > Other locations
2. In the bottom right adress bar type : `ssh://login@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B`
3. Password (don't forget to tick "Remember password")
   See the following detailed explanation for [ssh](/StartingPackage/Tools#ssh)

### VPN

VPN allows to acces the lab network from anywhere. To get an access, download OpenVPN (on Windows) or TunnelBlick (macOS) and contact the IT support. They will generate a configuration file for you.





## Inventory

### LKB network

- Printers

  | Name | IP | Where |
  | ------ | ---- | ------- |

### Hardware


| Name                      | IP          | MAC |
| --------------------------- | ------------- | ----- |
| Routeur (Netgear FVS318N) | 192.168.1.1 | --- |

### Computers


| Computer | IP | User | OS | MAC |
| ---------- | ---- | ------ | ---- | ----- |

## Passwords

Of  course not here ! Ask Quentin
