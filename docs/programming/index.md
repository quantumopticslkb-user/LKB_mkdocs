-- quentin

### SSH


SSH ([ssh : Linux](https://www.ssh.com/academy/ssh/command) and 
[ssh : Windows](https://www.putty.org/)) is a protocol that computers use to communicate with one another. This is the protocol that you will use to connect to the shared server **LEON**  / shared folder **EQ15B**. \
The easiest way to use ssh is to setup a passwordless connection by setting up an RSA ssh key. This is easily done following [this](https://www.ssh.com/academy/ssh/copy-id) tutorial. \
On Linux, you might not even need or want a passwordless setup as you can just "ssh" to **EQ15B** from "Other locations" tab in the file explorer by entering `ssh://login@patriot.lkb.upmc.fr/partages/EQ15B/LEON-15B` in the orange rectangle below:

![nautilus_ssh](nautilus_ssh.png)

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
![vscode_transit](vscode_transit.png)



Let's open the documentation file `README.md` to edit as indicated by the orange rectangle. We edit it and once we are happy with the change, we **stage** the changes as follows :

![vscode_transit_stage](vscode_transit_stage.png)

We can then **commit** the changes (without forgetting to enter a name for the commit):
![vscode_transit_commit](vscode_transit_commit.png)

To finally send the changes on the remote side of the repository (on GitHub), we **push** the changes :
![vscode_transit_push](vscode_transit_push.png)

You can then check that everything went well by looking at the timeline pane :
![vscode_transit_timeline](vscode_transit_timeline.png)

-- myrann
