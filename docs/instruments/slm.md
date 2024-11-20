--- 
title: Spatial Light Modulator
description: 'Basics on SLM in the group.

Links to tutorials: '
---

---

## Tuto SLM/DMD
For more information you can visit Sebastien Popoff's website: [Wavefrontshaping](https://www.wavefrontshaping.net/tutorials)

## How to SLM

In our experiments, we use the SLM package written by Tangui Aladjidi. It includes all the functions needed to display a pattern on the SLM: [Package](https://github.com/Quantum-Optics-LKB/PhaseUtils/blob/main/PhaseUtils/SLM.py)

**Here is an example of its use**  
I want to inject the wavefunction of a planar soliton into my system. I know the wavefunction:  
$\Psi_s(x) = \sqrt{\rho}\left[ \sqrt{1-\frac{v^2}{c_s^2}} \textrm{tanh}\left( \frac{x}{\xi\sqrt{2}}\sqrt{1-\frac{v^2}{c_s^2}} \right) + i\frac{v}{c_s} \right]$.

I have the function in the SLM.py package:  
```python
def Soliton1D(m, n, y_val, Mach, xi, theta=90) -> np.ndarray:
    """Generate a 1D soliton profile.
    Args:
        m (int): Height of the pattern
        n (int): Width of the pattern
        y_val (int): Position of the soliton
        Mach (float): Mach number
        xi (float): xi parameter
        theta (int, optional): Angle of the grating in degrees. Defaults to 90.
    """
    angle = 90
    angle = np.pi * angle / 180
    y, x = mgrid(m, n)
    x = x - n / 2.0
    y = y - m / 2.0 + y_val

    Psi = (
        np.sqrt(1 - Mach**2) * np.tanh((y / (np.sqrt(2) * xi)) * np.sqrt(1 - Mach**2))
        + 1j * Mach
    )
    Amp = np.abs(Psi)
    Phase = np.angle(Psi)

    return Amp, Phase
```
I call the function to get the amplitude and phase and use phase_amplitude to generate the pattern before to update the SLM:
```python
import SLM
import numpy as np

m, n = 1080, 1920
slm = SLM.SLMscreen(3)

Y, X = SLM.mgrid(m, n)
Y = Y.astype(float)
X = X.astype(float)

Mach = 0.0
xi = 1
Amp, Phase = SLM.Soliton1D(m, n, m / 2, n / 2, Mach, xi)

pat = SLM.phase_amplitude(Amp, Phase, pitch=16, theta=90)
slm.update(pat)
```


## In the group


| Brand     | Model                     | Resolution                | Pixel size (um)                                                                             | Reflectivity (%)                                                        | Who is using it ? | How many ? | 
| ----------- | --------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------- |----------------------- |
| Hammamatsu | X15213-02???? | 1272×1024  |         12.5                                                                                                       |   97   | Quentin S                 | 2
| Holoeye  | PLUTO-2.1                  | 1920x1080 | 8.5 |      95                                                                                    |        Myrann B and Clara P            | 2
| Hammamatsu | X15213-02???? | 1272×1024  |         12.5                                                                                                       |   97   | Kevin F                 | 2
| Holoeye  | PLUTO-?????                  | 1920x1080 | 8.5 |      95                                                                                    |        Killian G            | 2
| Texas Instruments  | DLPA?????                  | 1920x1080 | ??? |      ???                                                                                    |        Not used            | 1
