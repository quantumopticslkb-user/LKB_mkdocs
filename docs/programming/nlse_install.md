# NLSE Installation Guide for Ubuntu with NVIDIA GPUs

This guide provides step-by-step instructions to set up NLSE on Ubuntu Linux with full GPU support for NVIDIA RTX 30/40 series graphics cards.

---

## Prerequisites

- Ubuntu 20.04 or later (24.04 LTS recommended)
- NVIDIA GPU(s): RTX 3090, RTX 4090, or equivalent
- NVIDIA drivers installed (verify with `nvidia-smi`)
- Conda/Miniconda installed
- At least 16 GB RAM
- Python 3.11

---

## Step 1: Create NLSE Environment

```bash
conda create -n nlse python=3.11 -y
conda activate nlse
```

---

## Step 2: Install CUDA Toolkit 13.x

```bash
conda install -c nvidia cuda-toolkit cuda-nvcc -y

# Set environment variables
export CUDA_PATH=$CONDA_PREFIX
export PATH=$CONDA_PREFIX/bin:$PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib:$LD_LIBRARY_PATH
```

Verify installation:

```bash
nvcc --version
```

You should see CUDA 13.1 or later.

---

## Step 3: Install CuPy for CUDA 13.x

```bash
pip install cupy-cuda13x
```

Verify installation:

```bash
python -c "import cupy as cp; print('CuPy version:', cp.__version__); print('GPUs detected:', cp.cuda.runtime.getDeviceCount())"
```

You should see the CuPy version and number of GPUs detected (e.g., "2" for dual GPU setup).

---

## Step 4: Configure CUDA Headers for CuPy

CUDA headers are installed in `$CONDA_PREFIX/targets/x86_64-linux/include/` but CuPy's JIT compiler expects them in `$CONDA_PREFIX/include/`. Create symlinks to make them accessible:

```bash
# Create symlinks for CUDA headers
mkdir -p $CONDA_PREFIX/include
cd $CONDA_PREFIX/include
ln -sf ../targets/x86_64-linux/include/*.h .

# Set CUDA_HOME permanently for this environment
conda env config vars set CUDA_HOME=$CONDA_PREFIX -n nlse

# Reactivate environment to apply changes
conda deactivate
conda activate nlse
```

Verify CUDA_HOME is set:

```bash
echo $CUDA_HOME
# Should show: /home/yourusername/.conda/envs/nlse
```

---

## Step 5: Install PyVkFFT

```bash
export LDFLAGS="-L$CONDA_PREFIX/lib"
export CPPFLAGS="-I$CONDA_PREFIX/include"
export LIBRARY_PATH=$CONDA_PREFIX/lib:$LIBRARY_PATH

pip install pyvkfft --no-cache-dir --no-binary pyvkfft
```

This step compiles PyVkFFT from source and may take a few minutes.

---

## Step 6: Install NLSE

```bash
cd ~/
git clone https://github.com/Quantum-Optics-LKB/NLSE.git
cd NLSE
pip install .
```

---

## Step 7: Test Your Installation

```bash
cd ~/NLSE
python ./examples/nlse.py
```

You should see GPU backend messages and the simulation completes in seconds. For dual GPU setups, NLSE will automatically use the available GPUs.

---


## Automated Installation Script

Save this as `install_nlse_gpu.sh`:

```bash
#!/bin/bash
set -e

echo "Installing NLSE with GPU support (CUDA 13.x)..."

# Create environment
conda create -n nlse python=3.11 -y
conda activate nlse

# Install CUDA 13.x
conda install -c nvidia cuda-toolkit cuda-nvcc -y

# Set environment variables
export CUDA_PATH=$CONDA_PREFIX
export PATH=$CUDA_PATH/bin:$PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib:$LD_LIBRARY_PATH
export LDFLAGS="-L$CONDA_PREFIX/lib"
export CPPFLAGS="-I$CONDA_PREFIX/include"

# Install CuPy for CUDA 13.x
pip install cupy-cuda13x

# Configure CUDA headers for CuPy JIT compiler
mkdir -p $CONDA_PREFIX/include
cd $CONDA_PREFIX/include
ln -sf ../targets/x86_64-linux/include/*.h .

# Set CUDA_HOME permanently
conda env config vars set CUDA_HOME=$CONDA_PREFIX -n nlse

# Install PyVkFFT
pip install pyvkfft --no-cache-dir --no-binary pyvkfft

# Clone and install NLSE
cd ~/
git clone https://github.com/Quantum-Optics-LKB/NLSE.git
cd NLSE
pip install .

echo "Installation complete!"
echo "IMPORTANT: Deactivate and reactivate the environment to apply CUDA_HOME:"
echo "  conda deactivate"
echo "  conda activate nlse"
```

Run with:
```bash
chmod +x install_nlse_gpu.sh
./install_nlse_gpu.sh
```

---

## Troubleshooting

### Error: "cannot open source file cuda_fp16.h"

If you see this error when running benchmarks or other examples:

```
catastrophic error: cannot open source file "cuda_fp16.h"
```

**Solution:** The CUDA header symlinks might be missing. Run:

```bash
conda activate nlse
mkdir -p $CONDA_PREFIX/include
cd $CONDA_PREFIX/include
ln -sf ../targets/x86_64-linux/include/*.h .
```

Also ensure `CUDA_HOME` is set:
```bash
echo $CUDA_HOME  # Should show your conda environment path
# If empty, set it:
conda env config vars set CUDA_HOME=$CONDA_PREFIX -n nlse
conda deactivate && conda activate nlse
```

---

## Performance Tips

- **Grid sizes**: Up to 4096x4096 for 2D, 512x512x512 for 3D
- **Precision**: Use `precision="single"` for best performance
- **Memory**: RTX 4090 has 24 GB, RTX 3090 has 24 GB VRAM
- **Multi-GPU**: NLSE automatically detects and can use multiple GPUs
- **Monitor usage**: Use `nvidia-smi -l 1` to watch GPU activity

---

## Next Steps

- [QUICKSTART.md](QUICKSTART.md) - Your first simulation
- [examples/](examples/) - More examples and use cases
- [Full Documentation](https://quantum-optics-lkb.github.io/NLSE/)

---

**Last updated:** February 2026  
**Tested with:** Ubuntu 24.04 LTS, CUDA 13.1, RTX 4090 + RTX 3090
