# NLSE - Quick Start Guide

---

## What is NLSE?

**NLSE** is a Python package for simulating all sorts of **Nonlinear Schrödinger Equations**. It uses a fast [split-step spectral scheme](https://en.wikipedia.org/wiki/Split-step_method) and can run on both CPU and GPU for optimal performance.

**Perfect for:** Nonlinear optics, Bose-Einstein condensates, wave propagation in nonlinear media, and many other physical systems!

---

## Installation on Hawking

If you haven't already, follow the [installation guide](nlse_install.md) to set up your environment with CUDA 13.x and PyVkFFT for GPU acceleration.

## Installation on your local machine

### 1. Clone the repository

```bash
git clone https://github.com/Quantum-Optics-LKB/NLSE.git
cd NLSE
```

### 2. Install the package

```bash
pip install .
```

> **GPU Support:** For faster simulations, install `cupy` (NVIDIA) or `rocm` (AMD). The package automatically falls back to CPU if GPU libraries are not available.

---

## Your First Simulation

Here's a complete example that simulates the propagation of a gaussian beam in a nonlinear medium:

```python
import numpy as np
from NLSE import NLSE

# Physical parameters
N = 2048              # number of grid points
n2 = -1.6e-9          # nonlinear index in m²/W
waist = 2.23e-3       # initial beam waist in m
window = 4 * waist    # computational window size in m
power = 1.05          # input optical power in W
Isat = 10e4           # saturation intensity in W/m²
L = 10e-3             # length of the medium in m
alpha = 20            # linear losses coefficient in m⁻¹

# Create simulation object
simu = NLSE(
    alpha, power, window, n2, None, L, 
    NX=N, NY=N, Isat=Isat, backend="GPU"
)

# Define input field (gaussian beam)
E_0 = np.exp(-(simu.XX**2 + simu.YY**2) / waist**2)

# Define potential (optional)
waist2 = 70e-6
V = -1e-4 * np.exp(-(simu.XX**2 + simu.YY**2) / waist2**2)

# Run simulation and display results
simu.out_field(E_0, L, verbose=True, plot=True, precision="single")
```

**That's it!** This code will propagate your field through the nonlinear medium and display the results automatically.

---

## Key Parameters

| Parameter | Description | Units |
|-----------|-------------|-------|
| `alpha` | Linear losses coefficient | m⁻¹ |
| `power` | Input optical power | W |
| `window` | Computational window size | m |
| `n2` | Nonlinear refractive index | m²/W |
| `L` | Propagation length | m |
| `NX, NY` | Number of grid points | - |
| `Isat` | Saturation intensity | W/m² |
| `backend` | Choose "GPU" or "CPU" | - |

---

## Available Solvers

NLSE provides multiple specialized solvers for different physical systems:

- **`NLSE`**: Standard 2D nonlinear Schrödinger equation
- **`NLSE_1d`**: 1D version for faster simulations
- **`NLSE_3d`**: Full 3D simulations
- **`CNLSE`**: Coupled NLSE for multi-component systems
- **`CNLSE_1d`**: 1D coupled system
- **`GPE`**: Gross-Pitaevskii equation for Bose-Einstein Condensates
- **`DDGPE`**: Dipolar Gross-Pitaevskii equation

> **Tip:** Start with the basic `NLSE` class for 2D problems, or `NLSE_1d` for quick testing and 1D systems.

---

## Example Gallery

Check out the [`examples/`](examples/) folder for more use cases:

- **`nlse.py`** - Basic 2D propagation
- **`nlse_1d.py`** - 1D simulations
- **`nlse3d.py`** - 3D propagation
- **`cnlse.py`** - Coupled systems
- **`gpe.py`** - Bose-Einstein condensates
- **`callbacks.py`** - Custom callbacks and monitoring
- **`broadcasting.py`** - Parameter sweeps
- **`benchmarks.py`** - Performance testing

---

## Need More?

This quick start covers the basics. For advanced features, detailed API reference, and in-depth tutorials:

### [**Full Documentation**](https://quantum-optics-lkb.github.io/NLSE/)

**Key sections:**

- [Installation Guide](https://quantum-optics-lkb.github.io/NLSE/installation/) - Detailed setup for GPU/CPU
- [Basic Usage](https://quantum-optics-lkb.github.io/NLSE/basic_usage/) - Step-by-step introduction
- [Physics Problem](https://quantum-optics-lkb.github.io/NLSE/physics_problem/) - Mathematical background
- [API Reference](https://quantum-optics-lkb.github.io/NLSE/nlse/) - Complete class documentation
- [How-To Guides](https://quantum-optics-lkb.github.io/NLSE/how_to/) - Advanced techniques

### Useful Links

- [GitHub Repository](https://github.com/Quantum-Optics-LKB/NLSE)
- [More Examples](https://github.com/Quantum-Optics-LKB/NLSE/tree/main/examples)
- [Report Issues](https://github.com/Quantum-Optics-LKB/NLSE/issues)
- [Cite this software](https://doi.org/10.21105/joss.06607) - JOSS Paper

---

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](mkdocs-documentation/docs/contributing.md) for guidelines.

---

**NLSE** - Developed by [Quantum Optics LKB](https://github.com/Quantum-Optics-LKB) | Licensed under BSD-3-Clause
