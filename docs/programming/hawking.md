# Machine documentation — hawking

**Date:** 2026-02-10T14:57:43+01:00

## OS / Kernel
```
 Static hostname: hawking
       Icon name: computer-desktop
         Chassis: desktop 🖥️
      Machine ID: b6da31df38c9479cb8fb151a7850bfd6
         Boot ID: 187f363f0875493d98c97591858359e6
Operating System: Ubuntu 24.04.3 LTS
          Kernel: Linux 6.8.0-86-generic
    Architecture: x86-64
 Hardware Vendor: Micro-Star International Co., Ltd.
  Hardware Model: MS-7D67
Firmware Version: 1.A2
   Firmware Date: Fri 2023-06-30
    Firmware Age: 2y 7month 1w 6d
Linux hawking 6.8.0-86-generic #87-Ubuntu SMP PREEMPT_DYNAMIC Mon Sep 22 18:03:36 UTC 2025 x86_64 x86_64 x86_64 GNU/Linux
Distributor ID:	Ubuntu
Description:	Ubuntu 24.04.3 LTS
Release:	24.04
Codename:	noble
```

## Hardware / CPU
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
Flags:                                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good amd_lbr_v2 nopl nonstop_tsc cpuid extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx f16c rdrand lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_core perfctr_nb bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba perfmon_v2 ibrs ibpb stibp ibrs_enhanced vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid cqm rdt_a avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mbm_total cqm_mbm_local user_shstk avx512_bf16 clzero irperf xsaveerptr rdpru wbnoinvd cppc amd_ibpb_ret arat npt lbrv svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold avic vgif x2avic v_spec_ctrl vnmi avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid overflow_recov succor smca fsrm flush_l1d
Virtualization:                       AMD-V
L1d cache:                            512 KiB (16 instances)
L1i cache:                            512 KiB (16 instances)
L2 cache:                             16 MiB (16 instances)
L3 cache:                             64 MiB (2 instances)
NUMA node(s):                         1
NUMA node0 CPU(s):                    0-31
Vulnerability Gather data sampling:   Not affected
Vulnerability Itlb multihit:          Not affected
Vulnerability L1tf:                   Not affected
Vulnerability Mds:                    Not affected
Vulnerability Meltdown:               Not affected
Vulnerability Mmio stale data:        Not affected
Vulnerability Reg file data sampling: Not affected
Vulnerability Retbleed:               Not affected
Vulnerability Spec rstack overflow:   Mitigation; Safe RET
Vulnerability Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
Vulnerability Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:             Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP always-on; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
Vulnerability Srbds:                  Not affected
Vulnerability Tsx async abort:        Not affected
```

## Load / Uptime
```
 14:57:43 up 109 days,  1:04, 11 users,  load average: 24.00, 24.03, 24.33
```

## Memory
```
               total        used        free      shared  buff/cache   available
Mem:           124Gi        11Gi        69Gi        30Mi        45Gi       113Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
NAME      TYPE SIZE USED PRIO
/swap.img file   8G   1M   -2
```

## Filesystems
```
Filesystem     Type      Size  Used Avail Use% Mounted on
tmpfs          tmpfs      13G  3.0M   13G   1% /run
/dev/sda2      ext4      116G   90G   21G  82% /
tmpfs          tmpfs      63G   25M   63G   1% /dev/shm
tmpfs          tmpfs     5.0M   24K  5.0M   1% /run/lock
efivarfs       efivarfs  128K   49K   75K  40% /sys/firmware/efi/efivars
/dev/sda1      vfat      1.1G  6.2M  1.1G   1% /boot/efi
tmpfs          tmpfs      13G  168K   13G   1% /run/user/1005
tmpfs          tmpfs      13G   96K   13G   1% /run/user/1011
tmpfs          tmpfs      13G  104K   13G   1% /run/user/120
tmpfs          tmpfs      13G  312K   13G   1% /run/user/1002
tmpfs          tmpfs      13G   92K   13G   1% /run/user/1013
tmpfs          tmpfs      13G   88K   13G   1% /run/user/1015
tmpfs          tmpfs      13G   88K   13G   1% /run/user/1004
tmpfs          tmpfs      13G   88K   13G   1% /run/user/1014
tmpfs          tmpfs      13G   88K   13G   1% /run/user/1018
```

## CPU usage (top processes)
```
    PID USER     %CPU %MEM     ELAPSED CMD
 849335 althea    100  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 895601 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895593 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895596 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895602 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895591 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895598 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895599 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895600 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895597 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895595 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895594 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 895592 althea   99.9  0.3 55-23:22:19 python run_bash.py -machine hawking -res 20 -cell 50 -cell_yz 7 -wl 0.737 -rad 0.170 -tap 10 -c 1 -hgt 0.23 -wdt 0.23 -ang 180 -bnum 1 -par_source NO_PARITY
 849336 althea   99.6  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 849342 althea   99.6  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 849341 althea   99.6  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 849344 althea   99.6  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 849346 althea   99.6  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 849343 althea   99.5  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 849345 althea   99.5  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 849337 althea   99.5  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 849338 althea   99.5  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 849340 althea   99.5  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 849339 althea   99.4  0.2  6-23:41:32 python run_bash.py -res 20 -cell 25 -wl 0.737 -rad 0.22 -tap 10 -c 1 -hgt 0.26 -wdt 0.37 -nfiber 1.4545
 919827 root     54.5  0.0       00:00 /usr/lib/systemd/systemd-hostnamed
 918933 quentin   0.0  0.0       47:44 sshd: quentin@pts/8
 251433 althea    0.0  0.6 102-20:38:49 sshfs ahousset@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B /home/althea/LEON
 919004 root      0.0  0.0       38:45 sudo -i
 867371 jil       0.0  0.3  4-22:27:18 sshfs jhameury@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B /home/jil/LEON
```

## CPU usage per user
```
althea       2393.7
root         142.8
www-data     0.0
systemd+     0.0
syslog       0.0
stagios      0.0
rtkit        0.0
raul         0.0
quentin      0.0
polkitd      0.0
message+     0.0
lucien       0.0
lp           0.0
killian      0.0
kevin        0.0
kernoops     0.0
jil          0.0
gnome-r+     0.0
gdm          0.0
cups-br+     0.0
colord       0.0
avahi        0.0
```

## Services failed
```
  UNIT LOAD ACTIVE SUB DESCRIPTION

0 loaded units listed.
```

## System errors (last 24h)
```
Feb 10 12:33:20 hawking bluetoothd[1342]: profiles/audio/media.c:media_endpoint_create() Unable initialize endpoint for UUID 0000110b-0000-1000-8000-00805f9b34fb
Feb 10 12:33:20 hawking bluetoothd[1342]: profiles/audio/media.c:app_register_endpoint() Unable to register endpoint :1.10917:/MediaEndpoint/A2DPSink/sbc: Invalid argument
Feb 10 12:33:20 hawking bluetoothd[1342]: profiles/audio/media.c:media_endpoint_create() Unable initialize endpoint for UUID 0000110a-0000-1000-8000-00805f9b34fb
Feb 10 12:33:20 hawking bluetoothd[1342]: profiles/audio/media.c:media_endpoint_create() Unable initialize endpoint for UUID 0000110b-0000-1000-8000-00805f9b34fb
```

## Network
```
lo               UNKNOWN        127.0.0.1/8 ::1/128 
enp5s0           UP             134.157.7.122/23 fe80::26ef:928c:ba82:a5db/64 
wlp12s0          DOWN           
default via 134.157.6.1 dev enp5s0 proto dhcp src 134.157.7.122 metric 100 
134.157.6.0/23 dev enp5s0 proto kernel scope link src 134.157.7.122 metric 100 
Netid State  Recv-Q Send-Q Local Address:Port  Peer Address:PortProcess                                                                                                                                                                                                                                                                                                                                                                                                    
udp   UNCONN 0      0            0.0.0.0:47268      0.0.0.0:*    users:(("avahi-daemon",pid=1040732,fd=14))                                                                                                                                                                                                                                                                                                                                                                
udp   UNCONN 0      0         127.0.0.54:53         0.0.0.0:*    users:(("systemd-resolve",pid=1161,fd=16))                                                                                                                                                                                                                                                                                                                                                                
udp   UNCONN 0      0      127.0.0.53%lo:53         0.0.0.0:*    users:(("systemd-resolve",pid=1161,fd=14))                                                                                                                                                                                                                                                                                                                                                                
udp   UNCONN 0      0            0.0.0.0:5353       0.0.0.0:*    users:(("avahi-daemon",pid=1040732,fd=12))                                                                                                                                                                                                                                                                                                                                                                
udp   UNCONN 0      0               [::]:53891         [::]:*    users:(("avahi-daemon",pid=1040732,fd=15))                                                                                                                                                                                                                                                                                                                                                                
udp   UNCONN 0      0               [::]:5353          [::]:*    users:(("avahi-daemon",pid=1040732,fd=13))                                                                                                                                                                                                                                                                                                                                                                
tcp   LISTEN 0      4096      127.0.0.54:53         0.0.0.0:*    users:(("systemd-resolve",pid=1161,fd=17))                                                                                                                                                                                                                                                                                                                                                                
tcp   LISTEN 0      1024   134.157.7.122:45363      0.0.0.0:*    users:(("python",pid=895594,fd=35))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:45477      0.0.0.0:*    users:(("python",pid=895595,fd=36))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:46559      0.0.0.0:*    users:(("python",pid=849338,fd=34))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:43023      0.0.0.0:*    users:(("python",pid=895602,fd=33))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:44811      0.0.0.0:*    users:(("python",pid=895600,fd=33))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:41439      0.0.0.0:*    users:(("python",pid=849343,fd=32))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:41047      0.0.0.0:*    users:(("python",pid=849345,fd=32))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:42635      0.0.0.0:*    users:(("python",pid=849342,fd=32))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:39665      0.0.0.0:*    users:(("python",pid=895592,fd=31))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      4096         0.0.0.0:22         0.0.0.0:*    users:(("sshd",pid=1748,fd=3),("systemd",pid=1,fd=122))                                                                                                                                                                                                                                                                                                                                                   
tcp   LISTEN 0      1024   134.157.7.122:40447      0.0.0.0:*    users:(("python",pid=895598,fd=33))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:40187      0.0.0.0:*    users:(("python",pid=895597,fd=33))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:40853      0.0.0.0:*    users:(("python",pid=849341,fd=32))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:40929      0.0.0.0:*    users:(("python",pid=895593,fd=33))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      4096   127.0.0.53%lo:53         0.0.0.0:*    users:(("systemd-resolve",pid=1161,fd=15))                                                                                                                                                                                                                                                                                                                                                                
tcp   LISTEN 0      1024   134.157.7.122:38063      0.0.0.0:*    users:(("python",pid=895601,fd=33))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:38051      0.0.0.0:*    users:(("python",pid=849346,fd=32))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:38893      0.0.0.0:*    users:(("python",pid=849340,fd=36))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:35613      0.0.0.0:*    users:(("python",pid=849336,fd=30))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:35571      0.0.0.0:*    users:(("python",pid=895596,fd=37))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:36267      0.0.0.0:*    users:(("python",pid=849335,fd=28))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:33741      0.0.0.0:*    users:(("python",pid=849344,fd=32))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:34049      0.0.0.0:*    users:(("python",pid=849339,fd=35))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:34267      0.0.0.0:*    users:(("python",pid=895599,fd=33))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:34263      0.0.0.0:*    users:(("python",pid=895591,fd=29))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      1024   134.157.7.122:33989      0.0.0.0:*    users:(("python",pid=849337,fd=32))                                                                                                                                                                                                                                                                                                                                                                       
tcp   LISTEN 0      128        127.0.0.1:6010       0.0.0.0:*    users:(("sshd",pid=918933,fd=8))                                                                                                                                                                                                                                                                                                                                                                          
tcp   LISTEN 0      4096       127.0.0.1:631        0.0.0.0:*    users:(("cupsd",pid=905931,fd=8))                                                                                                                                                                                                                                                                                                                                                                         
tcp   LISTEN 0      128          0.0.0.0:44223      0.0.0.0:*    users:(("python",pid=895602,fd=5),("python",pid=895601,fd=5),("python",pid=895600,fd=5),("python",pid=895599,fd=5),("python",pid=895598,fd=5),("python",pid=895597,fd=5),("python",pid=895596,fd=5),("python",pid=895595,fd=5),("python",pid=895594,fd=5),("python",pid=895593,fd=5),("python",pid=895592,fd=5),("python",pid=895591,fd=5),("hydra_pmi_proxy",pid=895590,fd=5),("mpirun",pid=895587,fd=5))
tcp   LISTEN 0      128          0.0.0.0:36241      0.0.0.0:*    users:(("python",pid=849346,fd=5),("python",pid=849345,fd=5),("python",pid=849344,fd=5),("python",pid=849343,fd=5),("python",pid=849342,fd=5),("python",pid=849341,fd=5),("python",pid=849340,fd=5),("python",pid=849339,fd=5),("python",pid=849338,fd=5),("python",pid=849337,fd=5),("python",pid=849336,fd=5),("python",pid=849335,fd=5),("hydra_pmi_proxy",pid=849334,fd=5),("mpirun",pid=849333,fd=5))
tcp   LISTEN 0      511                *:80               *:*    users:(("apache2",pid=1040104,fd=4),("apache2",pid=905864,fd=4),("apache2",pid=905863,fd=4))                                                                                                                                                                                                                                                                                                              
tcp   LISTEN 0      4096            [::]:22            [::]:*    users:(("sshd",pid=1748,fd=4),("systemd",pid=1,fd=126))                                                                                                                                                                                                                                                                                                                                                   
tcp   LISTEN 0      4096           [::1]:631           [::]:*    users:(("cupsd",pid=905931,fd=7))                                                                                                                                                                                                                                                                                                                                                                         
tcp   LISTEN 0      128            [::1]:6010          [::]:*    users:(("sshd",pid=918933,fd=7))                                                                                                                                                                                                                                                                                                                                                                          
```

## SSH configuration (effective)
```
port 22
permitrootlogin without-password
pubkeyauthentication yes
passwordauthentication yes
x11forwarding yes
```

## Users / groups
```
sudo:x:27:hawking,tangui,quentin,schibler,clara
eq15b:x:1018:althea,clara,hawking,jil,kevin,killian,louis,lucien,quentin,schibler,simon,tangui,raul
```

## Sessions
```
 14:57:44 up 109 days,  1:04, 11 users,  load average: 24.00, 24.03, 24.33
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU  WHAT
raul              134.157.7.74     14:49   105days  0.00s  0.04s sshd: raul [priv]
quentin           134.157.7.74     14:09   105days  0.00s   ?    sshd: quentin [priv]
lucien            134.157.7.74     12:29   105days  0.00s   ?    sshd: lucien [priv]
gdm      tty1     -                28Oct25 109days 29:04   0.04s /usr/libexec/gsd-printer
SESSION  UID USER    SEAT  TTY    STATE   IDLE SINCE
  10098 1002 althea  -     -      closing no   -
   1213 1002 althea  -     -      closing no   -
    152 1005 killian -     -      closing no   -
  19402 1002 althea  -     -      closing no   -
  19810 1015 jil     -     -      closing no   -
  20736 1004 lucien  -     pts/5  active  yes  2h 27min ago
  20760 1014 quentin -     -      active  no   -
  20767 1018 raul    -     pts/11 active  no   -
    611 1011 stagios -     pts/16 closing yes  3 months 11 days ago
   7975 1013 kevin   -     -      closing no   -
     c2  120 gdm     seat0 tty1   active  yes  6 days ago

11 sessions listed.
```

## Mounts (sshfs / nfs)
```
/home/killian/LEON fuse.sshfs kguerrero@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B
/home/stagios/Paula/LEON fuse.sshfs kguerrero@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B
/home/althea/LEON fuse.sshfs ahousset@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B
/home/kevin/LEON fuse.sshfs falque@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B
/home/jil/LEON fuse.sshfs jhameury@patriot.lkb.upmc.fr:/partages/EQ15B/LEON-15B
```

## Home directories (one filesystem)
```
27G	/home
6.9G	/home/killian
3.3G	/home/althea
2.8G	/home/tangui
2.8G	/home/jil
2.6G	/home/stagios
2.5G	/home/clara
1.7G	/home/kevin
1.1G	/home/simon
793M	/home/hawking
764M	/home/louis
748M	/home/lucien
628M	/home/quentin
571M	/home/schibler
7.0M	/home/maxime
288K	/home/raul
du: cannot access '/home/stagios/Paula/LEON': Permission denied
du: cannot access '/home/killian/LEON': Permission denied
du: cannot access '/home/kevin/LEON': Permission denied
du: cannot access '/home/jil/LEON': Permission denied
du: cannot access '/home/althea/LEON': Permission denied
```
