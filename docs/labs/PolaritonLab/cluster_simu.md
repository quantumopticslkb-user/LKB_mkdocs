---
title: Cluster computation
description: 'Instructions to compute with Roland cluster.'
position: 2
category: Polariton Lab
menuTitle: Cluster computation
---

---
## General idea
Roland is a Linux computation server on which a scheduler (sbash) controls the script under execution. The scheduler distributes the computation among up to 64 threads depending on the instructions in the bash file.
## Prerequisites:
<alert type="danger">If you want to use this server, you must have received express approbation from Maxime Jacquet. Proceeding otherwise will unleash a mess nobody wants to have to contend with. </alert>

<alert type="warning">You may only run computations on Roland if you have checked beforehand that they succeed on your computer, including the multithreading. Failure to comply will cause harm. </alert>

## Bash file
Execution of the code on Roland is controlled by a bash script (a recipe whose instructions are executed by the console/shell).
A minimal working version of the bash script features the following:

```bash
    #!/bin/bash
    #SBATCH -c 63
    #SBATCH --ntasks 1
    #SBATCH --mem=50000M
    #SBATCH --job-name=polariton
```

which controls the number of threads (-c) used, the number of tasks to perform, the allocated physical memory (how much space the data may fill) and a job-name.

If you use the **Julia** language, you need to set and export the thread variable ```bash export JULIA_NUM_THREADS=64``` for your programme to use.

Finally, you must instruct the shell to run your **Julia** programme:

```bash julia simulation_roland_v0.jl```

    
Note this assumes your Julia code is in the same directory as your bash file.

## Useful commands

```bash sinfo ```
provides info on the use mode of Roland (eg the available max_N_hours)
```bash squeue```
provides info on current server usage by users
```bash htop ```
provides info on current use (threads, tasks)
