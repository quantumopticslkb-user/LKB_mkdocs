--- 
title: Welcome to the programming section!
description: 'Learn the basics for programming tools.

Links to tutorials: '
---

---
Learn the basics for programming tools.
---
Here's an introduction for the programming section:

---

Welcome to the programming section! This guide is designed to provide essential resources, tutorials, and best practices for using the programming tools commonly utilized by our team. Here, you’ll find information on configuring your environment, connecting to key services, managing code with GitHub, and more. Each tool and tutorial is crafted to ensure that you can get up and running quickly and with confidence. Be sure to explore the sections below, which cover topics such as setting up VS Code, using SSH for secure connections, integrating GitHub for collaborative work, and mastering Python for lab and research applications. 

## VS Code

[VSCode](https://code.visualstudio.com/): the world's most used code editor : not for nothing. In this editor you will be able to run any language you want but also write your papers in Latex or your lab book in Markdown. 

### Link your github account

Vscode allows you to link vscode to your github account in order to commit your repository. You can follow the tuto for [github in vscode](https://code.visualstudio.com/docs/sourcecontrol/github)


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


Most of these extensions do not need any settings, but if you wish to, you can access those in the "Extensions" tab on the left of VS Code.


## SSH

The Secure SHell (SSH) protocol is used to securely access remote servers using a public key and private key. 
The public key acts like a lock–anyone can see it–but only the holder of that corresponding private key and unlock it.
When connecting to a remote server that has your public key, your identity is verified by checking if your private key (which only you should have) 
can unlock your public key. Keeping your private key secure is crucial, as anyone with access to your private key can impersonate you and 
access servers that have your public key.

### Key generation

In order to use SSH authentication, you need SSH keys. In this section of the tutorial, we will show you how to generate SSH keys on Windows, Mac, and Linux.

=== "Linux"

    If you are using Linux, ssh is probably already installed. You can check by running
    ```
    $ ssh -v
    usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface] [-b bind_address]
             [-c cipher_spec] [-D [bind_address:]port] [-E log_file]
             [-e escape_char] [-F configfile] [-I pkcs11] [-i identity_file]
             [-J destination] [-L address] [-l login_name] [-m mac_spec]
             [-O ctl_cmd] [-o option] [-P tag] [-p port] [-R address]
             [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]]
             destination [command [argument ...]]
           ssh [-Q query_option]
    ```
=== "Windows"

    If you are using Windows 10, you will need to install the OpenSSH client before continuing with the following steps.

    - Go to **Setting** > **Apps** > **Optional Features**.
    - Click on **Add a feature**.
    - http://127.0.0.1:8000/
    - Note: Windows 11 has the OpenSSH client installed by default.
        

  

  If it's not, you need to install it using your distribution package manager, refer to your distribution documentation for more information


Generate the keys.

- Run `ssh-keygen -t ed25519 -C "email@example.com"`

You will be prompted for a filename/location to save your keys. Press Enter to select the default.

- `$ ssh-keygen -t ed25519 Generating public/private ed25519 key pair. Enter file in which to save the key (/home/<username>/.ssh/id_ed25519): `

You will be prompted to create a passphrase for your SSH keys. Make sure you remember this passphrase, as you will need it each time you use your SSH key.
The password you type won't be shown on the terminal, but don't fret it will still be recorded

- `Enter passphrase (empty for no passphrase):`

You will be asked to re-enter your passphrase. Do so and press Enter.

- `Enter same passphrase again:`

You will see output similar to this, indicating that your SSH keys have been generated.

- 
```
Your identification has been saved in /home/<username>/.ssh/id_ed25519
Your public key has been saved in /home/<username>/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:+hXUEBmvQLQNmVSdYGRt9HRn3t/sWhusi2qKgVAQr3c email@example.com
The key's randomart image is:
+--[ED25519 256]--+
| o.    o==XO... +|
|  o    .o*.+=o +o|
|   o    o o.o . o|
|  o      o .   .o|
| o . E  S o     +|
|  o o  .   .  .. |
|   . ..   .    oo|
|      o. o  . .oo|
|     . .+... oo. |
+----[SHA256]-----+
```

### Connecting to the server

We want to access Léon, which is the server used to store your experiment data. We need to share our public key (aka the shared lock) with it :

- `ssh-copy-id -i "path/to/key.pub" username@patriot.lkb.upmc.fr`

Finally, you can connect to the remote server

- `ssh username@patriot.lkb.upmc.fr`

### Using a user interface

If using the command line is not your thing, you can use a variety of different user interface to access a server via SSH. We won't list all of them
here, but here is a list of the one that are used in the lab

- VS Code ssh extension: [documentation](https://code.visualstudio.com/docs/remote/ssh)
- Using the nautilus file explorer: [documentation](https://help.gnome.org/users/gnome-help/stable/nautilus-connect.html.en)

## Git

To collaborate on project we use [Git](https://git-scm.com/). Git is a version control system, and we use it for two main purposes :

- Save the history of the project, have access to all modification and who did them. This is useful in case you want to undo big changes, or to know
  who to ask when you don't understand a piece of code.
- Collaborate offline and asynchroneously. Git allows us to share a decentralised codebase where people make changes and recombine them when they go
  online again

There is an great presentation called [The Zen of Git](https://www.youtube.com/watch?v=MYn0DHnQggo) explaining how it works.
If you don't like videos, there is the classic [Pro Git Book](https://git-scm.com/book/en/v2).

## Github

The lab remote repositories are hosted on github. To access the github server you can set up an ssh connection as shown 
[here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh). 

## Hawking

Hawking is the supercalculator located in the ColdLAB. You can connect to hawking via **ssh** to run quickly any demanding piece of code. It's possible to do that directly in VScode with the **SSH Extension**. Hawking's IP is **134.157.7.122**.

!!! danger

    Don't store anything on Hawking.<br> Before you get excited in the comms, and answer me “but yet I did put the path to LEON”: if you don't mount LEON there, it will just copy locally to Hawking! <br> This is what systematically crashes LEON (I went to look at the logs). <br> Every time you reboot, make sure you remount your LEON user on hawking with the ssh command 
    ```md
    sshfs **nom**@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B /home/**USER**/LEON
    ```

If you have several GB used for your user account, this is usually a sign that you've started writing directly to hawking, you can check this by running
```
-h --max-depth=1 
```
in your /home/user folder.


## Python

The most used language in the team. Mandatory to interface with the lab's equipment.

Here is a [guide](https://github.com/Quantum-Optics-LKB/Workshops/blob/main/2024-11/PythonAndGoodCoding/python_basics.md) with links to simple tutorial to master the basic tools we often use.

### Installation advice

You can install python throught [Conda-forge](https://conda-forge.org/) or if you are a nerd [MAMBAFORGE](https://mamba.readthedocs.io/en/latest/installation/mamba-installation.html).

Unless you need specific installs for a project and you *know exactly what you are doing*, this is the safest most complete Python install. 

=== "Linux"

    it is more than recommanded to add the Python version of conda/mamba to your `PATH` by running `conda init` at the end of the install (explained in the installer's messages). Once this is done, you should see an additional `(base)` in your command shell :
    ```bash
    (base) user@computer:~$
    ```
    This indicates that the `base` conda environment is activated.

=== "Windows"

    handle very differently Python installs, and you should not try to mess with it. Just do whatever the installer tells you to do.
    You should then use "Anaconda prompt" if you need to install stuff with `pip` or `conda`.
    But if you need to sepcify the PATH you can enter `env` in windows search. Then `environment variable`, select `PATH` and modify and add the adress of your anaconda installation like `C:\Users\[user_name]\anaconda3\Scripts`.

=== "Mac"

    It's your problem cowboy !
    The following packages are used widely in the group and you should install them as well through `pip` : `opencv-python` (imports as `cv2`), `pyfftw`, `cupy` (see CUDA section below), `scikit-image`, `pyvisa` (for VISA communication with scopes and other instruments), `pythonnet` (.NET interface)

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

## ChatGPT
- An Assistant for QuantumOptics Documentation
This guide is authored to help you navigate and utilize ChatGPT within the QuantumOptics documentation effectively. If you need access, please find the login credentials on the team's Mattermost channel.

---

Welcome to the QuantumOptics documentation portal, designed to offer precise and practical information on quantum optics. To enhance your experience, we've integrated the ChatGPT assistant, an intelligent tool that guides you through the documentation.

### Group account

You can acces the group account with the login/password provided in the pinned message in the Daily Chatting channel on mattermost.

### How to Use ChatGPT:

Here's a basic tutorial for using ChatGPT effectively:

1. **Ask a Question or Give a Task**: Start by typing a question or a command in plain language, such as "Explain photosynthesis" or "Help me write an email." ChatGPT responds to natural language, so you don’t need to use special commands or syntax.

2. **Review and Follow Up**: After receiving a response, read through it to see if it meets your needs. If you want more details, clarity, or a slightly different angle, ask a follow-up question or request a specific change, like “Can you add examples?” or “Summarize this in simpler terms.”

### Good practices

 Here's some advice on how to use this tool.

- **Open a new chat**: By default, each new chat is open to everyone (side bar). To keep track, you can rename the title by adding your initials [MB]. If you prefer to remain anonymous, you can open an ephemeral chat, but it will not be saved when closed.

- **Choose the model**: Depending on the task you want to perform, it is preferable to switch models. For example, for scientific use, you can select the Consensus model. This applies to everything, including code or image generation.

- **Use Iterative Refinement**: For any conversation, such as discussing about an article, build your query step-by-step. Provide the litterature and start with a broad question, review the answer, and gradually add specific requirements.

- **Don't trust everything**: Always double check the answer. This tool is only here to give us a lead.

## Mkdocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

### Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

### Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.



