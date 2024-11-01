---
title: Write documentation tutorial
description: 'Instructions to learn how to write a documentation file and share it to the whole team.'
---
### Step 0: Git installation on your computer

Linux based systems :

```bash
sudo apt install git
```

For macOS users, if **apt** doesn't work, you can install **homebrew** and run instead: 
```bash
sudo brew install git
```


Windows Based systems :
[git](https://git-scm.com/download/win)

**Git Hub personnal account**
    Create a personnal account on git hub if you don't have one. 
    <alert type="warning">If you want to edit files on the Quantum Optics documentation you need to be invited by an owner. </alert>

**Download [VSCode](/StartingPackage/Tools#vs-code)**

### Step 1: clone the github repository on your own workspace

Copy the repository [github](xxx) on your clipboard.

On the VSCode GUI click on the github icon (second item in the top left corner) and then click on Clone Repository and paste the link you just copied.

*Now you should see all the files of the team on your VSCode interface on the left part of the screen.*

### Step 2: create/modify a documentation file and add it to the doclkb page 

Go on the repository you cloned on **Step 1** and create a file "myfilename.md" (.md stands for the markdown language in which the documents of this page are written) or go on the document you want to modify.

Write the content using markdown. 

### Step 3: Run the web server locally
You can run locally the website using python.
To do so you need to install mkdocs package.

First create a Python virtual environnement using pyenv or preferrably conda.
```python
conda create web
conda activate
``` 
Then install the mkdocs package inside the environnement

```python
conda install mkdocs
```
Then use the following commands

* `mkdocs serve` - Start the live-reloading docs server (this is what you want to do actually)
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.


### Step 4: Push to Github

 Once you're done with modifications you can commit the changes you made on the github repository of the team :
- Click on the github icon
- Enter the message that goes with your commitment (for instance "first commit *username*)").
- Click on commit next to SOURCE CONTROL title.

If it's the first time you use VSCode with your github account it may ask you to configure your git user.name and user.email. The following command lines should work for any OS :



```bash
git config --global user.name "FIRST_NAME LAST_NAME"
git config --global user.email "MY_NAME@example.com"
```


*The user.name and the user.email don't have to be identical to the user name and the email you used te create your github account.*

<alert type="success">
If your commit was succesful, you should be able to see your file appear on the Github page of the team as well as on the doclkb page.
</alert>







