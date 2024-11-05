# SSH

SSH ([ssh : Linux](https://www.ssh.com/academy/ssh/command) and 
[ssh : Windows](https://www.putty.org/)) is a protocol that computers use to communicate with one another. This is the protocol that you will use to connect to the shared server **LEON**  / shared folder **EQ15B**. \
The easiest way to use ssh is to setup a passwordless connection by setting up an RSA ssh key. This is easily done following [this](https://www.ssh.com/academy/ssh/copy-id) tutorial. \
On Linux, you might not even need or want a passwordless setup as you can just "ssh" to **EQ15B** from "Other locations" tab in the file explorer by entering `ssh://login@patriot.lkb.upmc.fr/partages/EQ15B/LEON-15B` in the orange rectangle below:

![nautilus_ssh](nautilus_ssh.png)

On Windows, you can install `sshfs-win` and `Winfsp` following [this](http://makerlab.cs.hku.hk/index.php/en/mapping-network-drive-over-ssh-in-windows) tutorial to mount the drive in your file explorer.\
<alert type="warning">**ONLY PATRIOT IS ACCESSIBLE ON THE OUTSIDE**</alert>\
So if you want to have access wherever, mount Patriot and not Leon.

# Github
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

# Python

The most used language in the team. Mandatory to interface with the lab's equipment. \
You can install python throught [Conda-forge](https://conda-forge.org/) or if you are a nerd [MAMBAFORGE](https://mamba.readthedocs.io/en/latest/installation/mamba-installation.html).

Unless you need specific installs for a project and you *know exactly what you are doing*, this is the safest most complete Python install. 

- **Linux**, it is more than recommanded to add the Python version of conda/mamba to your `PATH` by running `conda init` at the end of the install (explained in the installer's messages). Once this is done, you should see an additional `(base)` in your command shell :
```bash
(base) user@computer:~$
```
This indicates that the `base` conda environment is activated.

- **Windows**, this last step is **discouraged** ! Windows handle very differently Python installs, and you should not try to mess with it. Just do whatever the installer tells you to do.
You should then use "Anaconda prompt" if you need to install stuff with `pip` or `conda`.
But if you need to sepcify the PATH you can enter `env` in windows search. Then `environment variable`, select `PATH` and modify and add the adress of your anaconda installation like `C:\Users\[user_name]\anaconda3\Scripts`.
    
- **Mac**, it's your problem cowboy !
The following packages are used widely in the group and you should install them as well through `pip` : `opencv-python` (imports as `cv2`): `pyfftw`, `cupy` (see CUDA section below), `scikit-image`, `pyvisa` (for VISA communication with scopes and other instruments), `pythonnet` (.NET interface)


# VS Code

[VSCode](https://code.visualstudio.com/): the world's most used code editor : not for nothing. In this editor you will be able to run any language you want but also write your papers in Latex or your lab book in Markdown. 

### Link your github account

Vscode allows you to link vscode to your github account in order to commit your repository. You can follow the tuto for [github in vscode](https://code.visualstudio.com/docs/sourcecontrol/github)

### Create and change environement

You shoul create separate environement to avoid package conflict: science, image, web etc... Sometimes installing a new package using `pip` or `conda` will update force the update of other package. For example doing `pip install opencv-python` will force the update of numpy but the new version of numpy will not work with your version of matplotlib and then you have to downgrade numpy.....!
To create a new environement you can open a new terminal and use the command:
```bash
conda create -n <env-name>
```
and the environement:
```bash
conda activate <env-name>
```
Don't forget that the packages you've installed on one environment aren't necessarily on the one you've created. 


### Extensions

And you can add extensions to help you. Here a list of mandatory extensions :

- autoDocstring for Python: we strongly encourage you to activate the autoformatting on save. This means that VS Code will automatically make your code prettier when you save your file (access settings  by pressing <kbd>Ctrl</kbd> + <kbd>,</kbd> and then search "Format on save"). You can then choose a format provider if you're looking for specific rules.
- Jupyter and notebook: separate your code in cells and run them separately or organize your code as a notebook with markdown implemention
- Pylance
- Julia
- LaTex Workshop
- Markdown All in One
- markdownlint
- Github [copilote](https://github.com/features/copilot): help of an artificial intelligence. Copilote can automatically fill in the rest of your code, adapting to what you already coded. If your github account is eligible for Copilote, you can take advantage of it. As a student, you're almost forced to have it, since it's free! [student request](https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-education-for-students/apply-to-github-education-as-a-student).


Most of these extensions do not need any settings, but if you wish to, you can access those in the "Extensions" tab on the left of VS Code.\