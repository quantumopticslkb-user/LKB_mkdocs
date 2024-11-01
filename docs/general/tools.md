---
title: Useful tools
description: 'Summary of all the tools available for the team'
---




## Introduction
Here you will find informations you need to know about the different tools used by the team to help you in your work. You can finds tutorials for each of them. Remember, if you have a problem with any of these tools, please **read the documentation**. We kindly attached links to the documentation of all these tools for this very reason.



## Bibliography and communication
### Mattermost 
[Mattermost](https://mattermost.com/) is our social network. It will allows you to talk with the other team member, share your data or planified your task.  
<!-- The private server used by the team is: http://ultratrail.lkb.upmc.fr. But to be able to connect on the **EQ15B** server you have 2 solutions : be connected on the LKB network or you can use the VPN given by the lab (if you don't have access to it please contact support@lkb.upmc.fr).    
Then your username will be the same as sogo, same for the password.   -->
You can have acces to a common LKB server: https://mattermost.lkb.upmc.fr.  
To register copy this link: https://mattermost.lkb.upmc.fr/signup_user_complete
Connect to our team page : Ask somebody for the link
Here are our chatting rooms:
- Documentation
- Bibliography
- Daily chatting
- Essential
- Group meeting
- Lunch?
- Off Topic
- Rubidium

In addition, this mattermost server allows us to use it as a lab book. Indeed Focalboard is the place where everyone can have their personal calendar and write their lab book.  
It allows you to write down what you have or are going to do and frame your data with explanations. It is a very powerful and useful tool. The lab book should be your legacy for newcomers.  
There is however an option to name notion on which mattermost has heavily plagiarized and which will be personal.

### Notion
It can be a very powerfull tool if you are an untidy person. [Notion](https://www.notion.so/desktop/) can be used as a digital lab book that everybody can follow. Moreover, you will quickly realize the versatility of this tool, for example to write your to-do list or to backup your data (but beware of the 5 Mo). There are a lot of notion templates (many of them are free) that can be very helpful in setting up your work environment. You can find them on the notion [website](https://www.notion.so/templates). Search for the template that you want to use, click on **Duplicate Template** and the template will appear on your notion account. You can then edit the template as you want to better fit your needs. Other websites with notion templates [Easlo](https://easlo.gumroad.com/).

### Zotero
"I present you my best friend.." M. Jacquet.  
[Zotero](https://www.zotero.org/) is the database where all scientific articles of interest to us are listed and accessible. You are free to navigate inside it and find a lot of information (from previous team paper or other group).
For every project you can create a folder where you can store the relevant literature and get pdf files of the articles. Also, it allows you to transfer any repository in **TeX** to save time on writing a bibliography.\
You can find a tutorial to install it on the [Zotero](https://www.zotero.org/support/installation) web page.\
The other crucial tool for Zotero is the browser [connector](https://www.zotero.org/download/connectors) that allows you to easily sync the paper you are reading in your browser to your Zotero library.
In order to save time, accumulate knowledge and not panic when you will write your PhD thesis :
<alert type="warning">**KEEP AN ORGANIZED AND THOROUGH LIBRARY**</alert>

### Google calendar

This is the common calendar for the whole team. It is essential if you want to be aware of the team meetings and events (and incidentally not to get yelled at :).
To join it, you need to contact a member of the team who will send you an invitation by mail. 

### ArXiv
[arXiv](https://arxiv.org/) is a website that gathers all the articles published or in the process of being published in the whole world (as long as their authors have put them on it). It is a simple way to consult articles, reviews or books. This site also allows you to get the reference of these articles in tex format or even better to put them in zotero :)

## Programming tools
### Github
[Github](https://github.com/) will be our best friend for code managing. Here everybody in the team share their code and get feedback from others. Also it will allows you to save your code and have backup (just in case).\
You need to ask a permanent staff member to add your GitHub account to the Quantum-Optics-LKB *organization* in order to gain access to the team's repositories.\
When you put code on GitHub, you share it with the rest of the team. This should encourage you to **document very thoroughly** your projects such that everyone can use your code without spending weeks reverse-engineering it.\
The canonical way we suggest you document your code (a part from in code comments made such as docstrings etc ...) is to include a `README.md` file in your repository. GitHub suggests you this by default. Many examples can be found on the teams GitHub such as the [Piezo](https://github.com/Quantum-Optics-LKB/Piezo) repo.\
<alert type="warning">**YOU MUST DOCUMENT AND COMMENT ALL YOUR CODES, ALWAYS**</alert>
*But how does GitHub work ?*\
[Git](https://en.wikipedia.org/wiki/Git) is the underlying program that handles code version control. It was initially developped by Linus Torvalds to handle the growing number of developpers on the Linux kernel. It is meant to allow a decentralized way to handle contributions to a code base, and to be able to keep track of changes.\
[GitHub](https://en.wikipedia.org/wiki/GitHub) on the other hand is a cloud based storage solution for your code, that integrates Git in order to handle version control.\
**In order to install `git` on your computer follow [this](https://github.com/git-guides/install-git) tutorial.**\
Once you installed `git` you can `git clone` a repository (here the [Transit](https://github.com/Quantum-Optics-LKB/Transit) repo as an example) as follows:
```shell
git clone git@github.com:Quantum-Optics-LKB/Transit.git
```
or over https
```shell
git clone https://github.com/Quantum-Optics-LKB/Transit.git
```
This will copy a folder named `Transit` with hidden `.git` / `.gitignore` folders within it that essentially list all changes and what files to ignore. \
Now, let's say you want to add to the `Transit` codebase, the simplest way to go about doing this is to open the folder in VSCode :
::image-lkb{target="StartingPackage/tools/vscode_transit.png"  size="100"}



Let's open the documentation file `README.md` to edit as indicated by the orange rectangle. We edit it and once we are happy with the change, we **stage** the changes as follows :

::image-lkb{target="StartingPackage/tools/vscode_transit_stage.png" size=100} 

We can then **commit** the changes (without forgetting to enter a name for the commit):
::image-lkb{target="StartingPackage/tools/vscode_transit_commit.png" size="100"}

To finally send the changes on the remote side of the repository (on GitHub), we **push** the changes :
::image-lkb{target="StartingPackage/tools/vscode_transit_push.png"  size="100"}

You can then check that everything went well by looking at the timeline pane :
::image-lkb{target="StartingPackage/tools/vscode_transit_timeline.png"  size="100" center}



### VS Code
[VSCode](https://code.visualstudio.com/): the world's most used code editor : not for nothing. In thi editor you will be able to run any language you want but also write your papers in Latex or your lab book in Markdown. A list of mandatory extensions :
- autoDocstring : for Python
- Jupyter
- Pylance
- Julia
- LaTex Workshop
- Markdown All in One
- markdownlint

Most of these extensions do not need any settings, but if you wish to, you can access those in the "Extensions" tab on the left of VS Code.\
We strongly encourage you to activate the autoformatting on save. This means that VS Code will automatically make your code prettier when you save your file (access settings  by pressing <kbd>Ctrl</kbd> + <kbd>,</kbd> and then search "Format on save"). You can then choose a format provider if you're looking for specific rules.

### SSH


SSH ([ssh : Linux](https://www.ssh.com/academy/ssh/command) and 
[ssh : Windows](https://www.putty.org/)) is a protocol that computers use to communicate with one another. This is the protocol that you will use to connect to the shared server **LEON**  / shared folder **EQ15B**. \
The easiest way to use ssh is to setup a passwordless connection by setting up an RSA ssh key. This is easily done following [this](https://www.ssh.com/academy/ssh/copy-id) tutorial. \
On Linux, you might not even need or want a passwordless setup as you can just "ssh" to **EQ15B** from "Other locations" tab in the file explorer by entering `ssh://login@patriot.lkb.upmc.fr/partages/EQ15B/LEON-15B` in the orange rectangle below:

::image-lkb{target="StartingPackage/tools/nautilus_ssh.png"  size="100" center}

On Windows, you can install `sshfs-win` and `Winfsp` following [this](http://makerlab.cs.hku.hk/index.php/en/mapping-network-drive-over-ssh-in-windows) tutorial to mount the drive in your file explorer.\
<alert type="warning">**ONLY PATRIOT IS ACCESSIBLE ON THE OUTSIDE**</alert>\
So if you want to have access wherever, mount Patriot and not Leon.

### Python
The most used language in the team. Mandatory to interface with the lab's equipment. \
<alert type="warning">**YOU MUST INSTALL PYTHON THROUGH [MAMBAFORGE](https://mamba.readthedocs.io/en/latest/installation.html) : PERIOD !**</alert>

Unless you need specific [Python](https://mamba.readthedocs.io/en/latest/installation.html) installs for a project and you *know exactly what you are doing*, this is the safest most complete Python install. \
On **Linux**, it is more than recommanded to add the Python version of mamba to your `PATH` by running `conda init` at the end of the install (explained in the installer's messages). Once this is done, you should see an additional `(base)` in your command shell :
```bash
(base) user@computer:~$
```
This indicates that the `base` conda environment is activated.

On **Windows**, this last step is **discouraged** ! Windows handle very differently Python installs, and you should not try to mess with it. Just do whatever the installer tells you to do ...\
You should then use "Anaconda prompt" if you need to install stuff with `pip` or `conda`. \
On **Mac**, it's your problem cowboy !\
The following packages are used widely in the group and you should install them as well through `pip` :
- `opencv-python` (imports as `cv2`)
- `pyfftw`
- `cupy` (see CUDA section below)
- `scikit-image`
- `pyvisa` (for VISA communication with scopes and other instruments)
- `pythonnet` (.NET interface)

### Julia
[Julia](https://julialang.org/) is a very nice JIT-compiled langage that is gaining a lot of popularity in the scientific community. Offers a lot of performance for numerical calculations. 

### CUDA 
[CUDA](https://developer.nvidia.com/cuda-toolkit) is a variant of C++ used to do computations on Nvidia GPU's. It is very useful if you have a Nvidia GPU on your computer to massively speed up FFT calculations (that occur a lot in optics simulation, NLSE simulations) in conjuction with [CuPy](https://cupy.dev/).

## Final suggestion
::image-lkb{target='StartingPackage/tools/keep-calm-RTFM.jpg' size=40 center} 