# Hawking

Hawking is the GPU supercalculator located in the ColdLAB. 

Hawking's IP is listed on the Mattermost channel #Hawking, but you can also ask for it to the admins if you don't have access to the channel.


## Creating an account
To create an account on Hawking, you need to ask the admins for it. Once you have an account, you can connect to Hawking with the following command:
```
ssh user@ip_address
```

## Connecting to Hawking
You can connect to hawking via **ssh** to run quickly any demanding piece of code. It's possible to do that directly in VScode with the **SSH Extension**. 

## Using Hawking with environments (required)

This machine provides a **shared Miniforge installation** located in: `/opt/miniforge3`

- The **base environment is shared and read-only**
- **Users must never install packages in `base`**
- Each user has **their own environments and package cache** in `$HOME/.conda`

### Rules (important)

!!! danger 
  
  **DO**

  - Create one Conda environment per project
  - Use mamba instead of conda when possible
  - Install packages inside environments only

**DO NOT**

  - Install packages in base
  - Use pip install in base
  - Mix pip and conda unless necessary


---
## User guide
### 1. What is already configured

For every user:

- `conda` and `mamba` are available in `PATH`
- `base` **does not auto-activate**
- User-local directories:

```
~/.conda/envs
~/.conda/pkgs
```
- Channels restricted to: `conda-forge`

Check anytime with:

```bash
conda info
```



### 2. How to create a new environment
**Example: Python 3.11 environment**
```bash
mamba create -n myenv python=3.11
```
Activate it:
```bash
conda activate myenv
```
Verify the environment is active:
```bash
which python
```
Ensure it points to your user directory `~/.conda/envs/myenv/bin/python`, not `/opt/miniforge3`.

### 3. Installing packages
**Preferred (conda-forge)**
```bash
mamba install numpy scipy matplotlib
```
If a package is not available via Conda, use pip **inside the activated environment**:
```bash
pip install some-package
```
!!! danger
    
    Only inside an activated environment.

## 4. Managing environments
List your environments:
```bash
conda env list
```
Remove an environment:
```bash
conda remove -n myenv --all
```
Update an environment:
```bash
mamba update -n myenv --all
```
Export environment (history only):
```bash
conda env export --from-history > environment.yml
```
Recreate later:
```bash
conda env create -f environment.yml
```

### 5. Typical “safe default” GPU environment
```bash
mamba create -n gpu-sci python=3.11
conda activate gpu-sci

mamba install \
  cuda-cudart cuda-cublas cuda-cufft cuda-curand \
  cupy pycuda pyfftw \
  numpy scipy matplotlib
```

## Storage policy
!!! danger

    Don't store anything on Hawking.<br> Before you get excited in the comms, and answer me “but yet I did put the path to LEON”: if you don't mount LEON there, it will just copy locally to Hawking! <br> This is what systematically crashes LEON (I went to look at the logs). <br> Every time you reboot, make sure you remount your LEON user on hawking with the ssh command 
    ```md
    sshfs **nom**@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B /home/**USER**/LEON
    ```

If you have several GB used for your user account, this is usually a sign that you've started writing directly to hawking, you can check this by running
```
du -h --max-depth=1 
```
in your /home/user folder.

## For admins
### Account creation
To create an account for a new user, run the following command:
```
sudo ./create_user_conda.sh alice
```
This will create a new user `alice` with a home directory and set up the necessary permissions for the shared Miniforge installation. The user will be able to create their own Conda environments and install packages without affecting other users.

Delete an account:
```
sudo ./delete_user_conda.sh alice --yes
```

### Machine documentation 

**Date:** 2026-02-10T14:57:43+01:00

#### OS / Kernel
```
 Static hostname: hawking
       Icon name: computer-desktop
         Chassis: desktop
  Operating System: Ubuntu 24.04.3 LTS
          Kernel: Linux 6.8.0-86-generic
    Architecture: x86-64
 Hardware Vendor: Micro-Star International Co., Ltd.
  Hardware Model: MS-7D67
Firmware Version: 1.A2
   Firmware Date: Fri 2023-06-30
    Firmware Age: 2y 7month 1w 6d
Linux hawking 6.8.0-86-generic #87-Ubuntu SMP Distributor ID:	Ubuntu
Description:	Ubuntu 24.04.3 LTS
Release:	24.04
Codename:	noble
```

#### Hardware / CPU
```
Architecture:                         x86_64
CPU op-mode(s):                       32-bit, 64-bit
Address sizes:                        48 bits physical, 48 bits virtual
Byte Order:                           Little Endian
CPU(s):                               32
On-line CPU(s) list:                  0-31
Vendor ID:                            AuthenticAMD
BIOS Vendor ID:                       Advanced Micro Devices, Inc.
Model name:                           AMD Ryzen 9 7950X 16-Core Processor
BIOS Model name:                      AMD Ryzen 9 7950X 16-Core Processor             Unknown CPU @ 4.5GHz
BIOS CPU family:                      107
CPU family:                           25
Model:                                97
Thread(s) per core:                   2
Core(s) per socket:                   16
Socket(s):                            1
Stepping:                             2
CPU(s) scaling MHz:                   76%
CPU max MHz:                          5881.0000
CPU min MHz:                          400.0000
BogoMIPS:                             9000.32
Virtualization:                       AMD-V
L1d cache:                            512 KiB (16 instances)
L1i cache:                            512 KiB (16 instances)
L2 cache:                             16 MiB (16 instances)
L3 cache:                             64 MiB (2 instances)
NUMA node(s):                         1
NUMA node0 CPU(s):                    0-31
```
