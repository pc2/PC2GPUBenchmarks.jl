var documenterSearchIndex = {"docs":
[{"location":"refs/p2p_memcpy/#Peer-to-Peer-Memcpy","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"","category":"section"},{"location":"refs/p2p_memcpy/#Index","page":"Peer-to-Peer Memcpy","title":"Index","text":"","category":"section"},{"location":"refs/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"Pages   = [\"p2p_memcpy.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/p2p_memcpy/#References","page":"Peer-to-Peer Memcpy","title":"References","text":"","category":"section"},{"location":"refs/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"Modules = [PC2GPUBenchmarks]\nPages   = [\"p2p_memcpy.jl\"]","category":"page"},{"location":"refs/p2p_memcpy/#PC2GPUBenchmarks.bench_p2p_memcpy","page":"Peer-to-Peer Memcpy","title":"PC2GPUBenchmarks.bench_p2p_memcpy","text":"bench_p2p_memcpy([memsize::UnitPrefixedBytes]; kwargs...)\n\nPerforms a peer-to-peer memory copy benchmark (time measurement) and returns an inter-gpu memory bandwidth estimate (in GiB/s) derived from it.\n\nKeyword arguments:\n\nsrc (default: 0): source device\ndst (default: 1): destination device\nnbench (default: 5): number of time measurements (i.e. p2p memcopies)\nverbose (default: true): set to false to turn off any printing.\nhist (default: false): when true, a UnicodePlots-based histogram is printed.\ntimes (default: false): toggle printing of measured times.\nalternate (default: false): alternate src and dst, i.e. copy data back and forth.\ndtype (default: Float32): see alloc_mem.\n\nExamples:\n\nbench_p2p_memcpy()\nbench_p2p_memcpy(MiB(1024))\nbench_p2p_memcpy(KiB(20_000); dtype=Int32)\n\n\n\n\n\n","category":"function"},{"location":"refs/p2p_memcpy/#PC2GPUBenchmarks.bench_p2p_memcpy_all-Tuple","page":"Peer-to-Peer Memcpy","title":"PC2GPUBenchmarks.bench_p2p_memcpy_all","text":"bench_p2p_memcpy_all(args...; kwargs...)\n\nRun bench_p2p_memcpy for all combinations of devices. Returns a matrix with the p2p memory bandwidth estimates.\n\n\n\n\n\n","category":"method"},{"location":"refs/gpustresstest/#GPU-Stresstest","page":"GPU Stress Test","title":"GPU Stresstest","text":"","category":"section"},{"location":"refs/gpustresstest/#Index","page":"GPU Stress Test","title":"Index","text":"","category":"section"},{"location":"refs/gpustresstest/","page":"GPU Stress Test","title":"GPU Stress Test","text":"Pages   = [\"gpustresstest.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/gpustresstest/#References","page":"GPU Stress Test","title":"References","text":"","category":"section"},{"location":"refs/gpustresstest/","page":"GPU Stress Test","title":"GPU Stress Test","text":"Modules = [PC2GPUBenchmarks]\nPages   = [\"stresstest.jl\", \"stresstest_tests.jl\"]","category":"page"},{"location":"refs/gpustresstest/#PC2GPUBenchmarks.stresstest-Tuple{Any}","page":"GPU Stress Test","title":"PC2GPUBenchmarks.stresstest","text":"stresstest(device_or_devices)\n\nRun a GPU stress test (matrix multiplication) on one or multiple GPU devices, as specified by the positional argument. If no argument is provided (only) the currently active GPU will be used.\n\nKeyword arguments:\n\nduration (default: nothing): desired run time in seconds. Takes precedence over mem if also set.\nmem (default: nothing): number (<:Real) between 0 and 1, indicating the fraction of the available GPU memory that should be used, or a <:UnitPrefixedBytes indicating an absolute memory limit. May not be used together with duration.\ndtype (default: Float32): element type of the matrices\nsize (default: 2048): matrices of size (size, size) will be used\nverbose (default: true): toggle printing of information\nparallel (default: true): If true, will (try to) run each GPU test on a different Julia thread. Make sure to have enough Julia threads.\nthreads (default: nothing): If parallel == true, this argument may be used to specify the Julia threads to use.\n\n\n\n\n\n","category":"method"},{"location":"refs/gpustresstest/#PC2GPUBenchmarks.StressTest","page":"GPU Stress Test","title":"PC2GPUBenchmarks.StressTest","text":"GPU stress test (matrix multiplications) in which we try to run for a given time period.\n\n\n\n\n\n","category":"type"},{"location":"refs/gpustresstest/#PC2GPUBenchmarks.StressTestStoreResults","page":"GPU Stress Test","title":"PC2GPUBenchmarks.StressTestStoreResults","text":"GPU stress test (matrix multiplications) in which we store all matmul results and try to run as many iterations as possible for a certain memory limit (default: 90% of free memory).\n\nThis stress test is somewhat inspired by gpu-burn by Ville Timonen.\n\n\n\n\n\n","category":"type"},{"location":"examples/gpuinfo/#Example:-CUDA/GPU-Information","page":"CUDA/GPU Information","title":"Example: CUDA/GPU Information","text":"","category":"section"},{"location":"examples/gpuinfo/","page":"CUDA/GPU Information","title":"CUDA/GPU Information","text":"note: Note\nTest system: DGX with 8x A100 GPUs","category":"page"},{"location":"examples/gpuinfo/","page":"CUDA/GPU Information","title":"CUDA/GPU Information","text":"julia> gpuinfo()\nCUDA toolkit 11.5, local installation\nNVIDIA driver 495.29.5, for CUDA 11.5\nCUDA driver 11.5\n\nLibraries: \n- CUBLAS: 11.7.3\n- CURAND: 10.2.6\n- CUFFT: 10.6.0\n- CUSOLVER: 11.2.1\n- CUSPARSE: 11.7.0\n- CUPTI: 16.0.0\n- NVML: 11.0.0+495.29.5\n- CUDNN: missing\n- CUTENSOR: missing\n\nToolchain:\n- Julia: 1.7.1\n- LLVM: 12.0.1\n- PTX ISA support: 3.2, 4.0, 4.1, 4.2, 4.3, 5.0, 6.0, 6.1, 6.3, 6.4, 6.5, 7.0\n- Device capability support: sm_35, sm_37, sm_50, sm_52, sm_53, sm_60, sm_61, sm_62, sm_70, sm_72, sm_75, sm_80\n\nEnvironment:\n- JULIA_CUDA_USE_BINARYBUILDER: false\n\n8 devices:\n  0: NVIDIA A100-SXM4-40GB (sm_80, 39.583 GiB / 39.586 GiB available)\n  1: NVIDIA A100-SXM4-40GB (sm_80, 39.583 GiB / 39.586 GiB available)\n  2: NVIDIA A100-SXM4-40GB (sm_80, 39.583 GiB / 39.586 GiB available)\n  3: NVIDIA A100-SXM4-40GB (sm_80, 39.583 GiB / 39.586 GiB available)\n  4: NVIDIA A100-SXM4-40GB (sm_80, 39.583 GiB / 39.586 GiB available)\n  5: NVIDIA A100-SXM4-40GB (sm_80, 39.583 GiB / 39.586 GiB available)\n  6: NVIDIA A100-SXM4-40GB (sm_80, 39.583 GiB / 39.586 GiB available)\n  7: NVIDIA A100-SXM4-40GB (sm_80, 39.583 GiB / 39.586 GiB available)","category":"page"},{"location":"examples/gpuinfo/","page":"CUDA/GPU Information","title":"CUDA/GPU Information","text":"More specific information for each gpu device can be obtained with gpuinfo(deviceid::Integer).","category":"page"},{"location":"examples/gpuinfo/","page":"CUDA/GPU Information","title":"CUDA/GPU Information","text":"julia> gpuinfo(0) # first GPU\nDevice: NVIDIA A100-SXM4-40GB (CuDevice(0))\nTotal amount of global memory: 42.5 GB\nNumber of CUDA cores: 6912\nNumber of multiprocessors: 108 (64 CUDA cores each)\nGPU max. clock rate: 1410 Mhz\nMemory clock rate: 1215 Mhz\nMemory bus width: 5120-bit\nL2 cache size: 41.9 MB\nMax. texture dimension sizes (1D): 131072\nMax. texture dimension sizes (2D): 131072, 65536\nMax. texture dimension sizes (3D): 16384, 16384, 16384\nMax. layered 1D texture size: 32768 (2048 layers)\nMax. layered 2D texture size: 32768, 32768 (2048 layers)\nTotal amount of constant memory: 65.5 kB\nTotal amount of shared memory per block: 49.2 kB\nTotal number of registers available per block: 65536\nWarp size: 32\nMax. number of threads per multiprocessor: 2048\nMax. number of threads per block: 1024\nMax. dimension size of a thread block (x,y,z): 1024, 1024, 64\nMax. dimension size of a grid size (x,y,z): 2147483647, 65535, 65535\nTexture alignment: 512.0 B\nMaximum memory pitch: 2.1 GB\nConcurrent copy and kernel execution: Yes with 3 copy engine(s)\nRun time limit on kernels: No\nIntegrated GPU sharing host memory: No\nSupport host page-locked memory mapping: Yes\nConcurrent kernel execution: Yes\nAlignment requirement for surfaces: Yes\nDevice has ECC support: Yes\nDevice supports Unified Addressing (UVA): Yes\nDevice supports managed memory: Yes\nDevice supports compute preemption: Yes\nSupports cooperative kernel launch: Yes\nSupports multi-device co-op kernel launch: Yes\nDevice PCI domain ID / bus ID / device ID: 0 / 7 / 0\nCompute mode: Default (multiple host threads can use ::cudaSetDevice() with device simultaneously)","category":"page"},{"location":"examples/gpuinfo/","page":"CUDA/GPU Information","title":"CUDA/GPU Information","text":"Peer-to-peer access information can be retrived via gpuinfo_p2p_access.","category":"page"},{"location":"examples/gpuinfo/","page":"CUDA/GPU Information","title":"CUDA/GPU Information","text":"julia> gpuinfo_p2p_access()\nP2P Access Supported:\n8×8 Matrix{Bool}:\n 0  1  1  1  1  1  1  1\n 1  0  1  1  1  1  1  1\n 1  1  0  1  1  1  1  1\n 1  1  1  0  1  1  1  1\n 1  1  1  1  0  1  1  1\n 1  1  1  1  1  0  1  1\n 1  1  1  1  1  1  0  1\n 1  1  1  1  1  1  1  0\n\nP2P Atomic Supported:\n8×8 Matrix{Bool}:\n 0  1  1  1  1  1  1  1\n 1  0  1  1  1  1  1  1\n 1  1  0  1  1  1  1  1\n 1  1  1  0  1  1  1  1\n 1  1  1  1  0  1  1  1\n 1  1  1  1  1  0  1  1\n 1  1  1  1  1  1  0  1\n 1  1  1  1  1  1  1  0","category":"page"},{"location":"examples/gpuinfo/","page":"CUDA/GPU Information","title":"CUDA/GPU Information","text":"Turns out that using CU_DEVICE_P2P_ATTRIBUTE_ACCESS_SUPPORTED or cuDeviceCanAccessPeer to query p2p access support may lead to different results (see this stackoverflow thread). In gpuinfo_p2p_access() we use both methods and, if the results were to be different, we print both matrices (not shown above).","category":"page"},{"location":"refs/monitoring/#Monitoring","page":"Monitoring","title":"Monitoring","text":"","category":"section"},{"location":"refs/monitoring/#Index","page":"Monitoring","title":"Index","text":"","category":"section"},{"location":"refs/monitoring/","page":"Monitoring","title":"Monitoring","text":"Pages   = [\"monitoring.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/monitoring/#References","page":"Monitoring","title":"References","text":"","category":"section"},{"location":"refs/monitoring/","page":"Monitoring","title":"Monitoring","text":"Modules = [PC2GPUBenchmarks]\nPages   = [\"monitoring.jl\"]","category":"page"},{"location":"refs/monitoring/#PC2GPUBenchmarks.monitor_powerusage-Tuple{Any}","page":"Monitoring","title":"PC2GPUBenchmarks.monitor_powerusage","text":"monitor_powerusage(duration) -> times, powerusage\n\nMonitor the power usage of GPU(s) (in Watts) over a given time period, as specified by duration (in seconds). Returns the (relative) times as a Vector{Float64} and the power usage as a Vector{Vector{Float64}}.\n\nFor general keyword arguments, see monitor_something.\n\n\n\n\n\n","category":"method"},{"location":"refs/monitoring/#PC2GPUBenchmarks.monitor_something-Union{Tuple{F}, Tuple{F, Any}} where F","page":"Monitoring","title":"PC2GPUBenchmarks.monitor_something","text":"monitor_something(f, duration) -> times, values\n\nMonitor some property of GPU(s), as specified through the function f, over a given time period, as specified by duration (in seconds). Returns the (relative) times as a Vector{Float64} and the temperatures as a Vector{Vector{Float64}}.\n\nThe function f will be called on a vector of devices (CuDevices or NVML.Devices) and should return a vector of Float64 values.\n\nKeyword arguments:\n\nfreq (default: 1): polling rate in Hz.\ndevices (default: NVML.devices()): CuDevices or NVML.Devices to consider.\nplot (default: false): Create a unicode plot after the monitoring.\nliveplot (default: false): Create and update a unicode plot during the monitoring. Use optional ylims to specify fixed y limits.\ntitle (default: \"\"): Title used in unicode plots.\nylabel (default: \"Values\"): y label used in unicode plots.\n\nSee: monitor_temperature, monitor_powerusage\n\n\n\n\n\n","category":"method"},{"location":"refs/monitoring/#PC2GPUBenchmarks.monitor_temperature-Tuple{Any}","page":"Monitoring","title":"PC2GPUBenchmarks.monitor_temperature","text":"monitor_temperature(duration) -> times, temperatures\n\nMonitor the temperature of GPU(s) over a given time period, as specified by duration (in seconds). Returns the (relative) times as a Vector{Float64} and the temperatures as a Vector{Vector{Float64}}.\n\nFor general keyword arguments, see monitor_something.\n\n\n\n\n\n","category":"method"},{"location":"refs/utility/#Utility","page":"Utility","title":"Utility","text":"","category":"section"},{"location":"refs/utility/#Index","page":"Utility","title":"Index","text":"","category":"section"},{"location":"refs/utility/","page":"Utility","title":"Utility","text":"Pages   = [\"utility.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/utility/#References","page":"Utility","title":"References","text":"","category":"section"},{"location":"refs/utility/","page":"Utility","title":"Utility","text":"Modules = [PC2GPUBenchmarks]\nPages   = [\"utility.jl\"]","category":"page"},{"location":"refs/utility/#PC2GPUBenchmarks.alloc_mem-Tuple{UnitPrefixedBytes}","page":"Utility","title":"PC2GPUBenchmarks.alloc_mem","text":"alloc_mem(memsize::UnitPrefixedBytes; devs=(CUDA.device(),), dtype=Float32)\n\nAllocates memory on the devices whose IDs are provided via devs. Returns a vector of memory handles (i.e. CuArrays).\n\nExamples:\n\nalloc_mem(MiB(1024)) # allocate on the currently active device\nalloc_mem(B(40_000_000); devs=(0,1)) # allocate on GPU0 and GPU1\n\n\n\n\n\n","category":"method"},{"location":"refs/utility/#PC2GPUBenchmarks.clear_all_gpus_memory","page":"Utility","title":"PC2GPUBenchmarks.clear_all_gpus_memory","text":"Reclaim the unused memory of all available GPUs.\n\n\n\n\n\n","category":"function"},{"location":"refs/utility/#PC2GPUBenchmarks.clear_gpu_memory","page":"Utility","title":"PC2GPUBenchmarks.clear_gpu_memory","text":"Reclaim the unused memory of the currently active GPU (i.e. device()).\n\n\n\n\n\n","category":"function"},{"location":"refs/utility/#PC2GPUBenchmarks.functional","page":"Utility","title":"PC2GPUBenchmarks.functional","text":"Check if CUDA/GPU is available and functional. If not, print some (hopefully useful) debug information.\n\n\n\n\n\n","category":"function"},{"location":"examples/p2p_memcpy/#Example:-Peer-to-Peer-Memcpy","page":"Peer-to-Peer Memcpy","title":"Example: Peer-to-Peer Memcpy","text":"","category":"section"},{"location":"examples/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"note: Note\nTest system: DGX with 8x A100 GPUs (+ NVSwitch)","category":"page"},{"location":"examples/p2p_memcpy/#Unidirectional","page":"Peer-to-Peer Memcpy","title":"Unidirectional","text":"","category":"section"},{"location":"examples/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"julia> bench_p2p_memcpy();\nMemsize: 38.147 MiB\n\nBandwidth (GiB/s):\n ├ max: 247.32\n ├ min: 173.5\n ├ avg: 229.63\n └ std_dev: 31.67\n\njulia> bench_p2p_memcpy_all()\n8×8 Matrix{Union{Nothing, Float64}}:\n    nothing  245.706     241.075     244.467     246.434     242.229     245.085     245.033\n 239.046        nothing  241.776     243.853     241.626     245.136     244.467     240.379\n 246.957     242.633        nothing  242.937     245.291     248.114     239.193     242.684\n 244.724     241.375     244.211        nothing  245.861     238.117     245.085     242.28\n 241.576     246.329     242.582     245.602        nothing  246.59      240.677     243.343\n 247.114     240.18      245.965     244.006     236.616        nothing  242.28      244.673\n 243.802     242.028     248.326     239.933     244.365     245.033        nothing  245.498\n 245.136     246.904     239.488     243.343     244.057     240.627     243.445        nothing","category":"page"},{"location":"examples/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"Theoretical maximum should be 25GB/s * 12 = 300GB/s ≈ 279GiB/s.","category":"page"},{"location":"examples/p2p_memcpy/#NVIDIA-Nsight-Systems-profile","page":"Peer-to-Peer Memcpy","title":"NVIDIA Nsight Systems profile","text":"","category":"section"},{"location":"examples/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"(Image: p2p_memcpy_dgx_profile)","category":"page"},{"location":"examples/p2p_memcpy/#Discussions","page":"Peer-to-Peer Memcpy","title":"Discussions","text":"","category":"section"},{"location":"examples/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"See this GitHub gist.","category":"page"},{"location":"examples/p2p_memcpy/#Bidirectional","page":"Peer-to-Peer Memcpy","title":"Bidirectional","text":"","category":"section"},{"location":"examples/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"julia> bench_p2p_memcpy_bidirectional();\nMemsize: 38.147 MiB\n\nBandwidth (GiB/s):\n ├ max: 450.36\n ├ min: 448.66\n ├ avg: 449.69\n └ std_dev: 0.49","category":"page"},{"location":"examples/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"julia> bench_p2p_memcpy_bidirectional_all()\n8×8 Matrix{Union{Nothing, Float64}}:\n    nothing  456.631     453.133     454.946     453.67      453.953     455.06      454.662\n 453.67         nothing  454.01      450.329     455.345     453.02      454.691     455.203\n 453.981     451.53         nothing  452.344     453.868     454.747     452.232     454.208\n 453.557     451.979     449.883        nothing  454.01      455.288     450.189     454.691\n 452.429     454.293     445.094     454.151        nothing  453.472     451.474     453.981\n 454.89      454.066     453.84      453.84      451.194        nothing  453.274     451.53\n 453.925     453.02      454.293     456.459     451.839     451.951        nothing  455.032\n 454.208     416.936     454.265     435.947     452.035     437.836     451.895        nothing","category":"page"},{"location":"examples/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"Theoretical maximum should be 25GB/s * 12 * 2 = 600GB/s ≈ 559 GiB/s (is this correct?!).","category":"page"},{"location":"examples/p2p_memcpy/#NVIDIA-Nsight-Systems-profile-2","page":"Peer-to-Peer Memcpy","title":"NVIDIA Nsight Systems profile","text":"","category":"section"},{"location":"examples/p2p_memcpy/","page":"Peer-to-Peer Memcpy","title":"Peer-to-Peer Memcpy","text":"(Image: p2p_memcpy_bidirectional_dgx_profile.png)","category":"page"},{"location":"refs/UnitPrefixedBytes/#Unit-Prefixed-Bytes","page":"Unit-Prefixed Bytes","title":"Unit-Prefixed Bytes","text":"","category":"section"},{"location":"refs/UnitPrefixedBytes/#Index","page":"Unit-Prefixed Bytes","title":"Index","text":"","category":"section"},{"location":"refs/UnitPrefixedBytes/","page":"Unit-Prefixed Bytes","title":"Unit-Prefixed Bytes","text":"Pages   = [\"UnitPrefixedBytes.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/UnitPrefixedBytes/#References","page":"Unit-Prefixed Bytes","title":"References","text":"","category":"section"},{"location":"refs/UnitPrefixedBytes/","page":"Unit-Prefixed Bytes","title":"Unit-Prefixed Bytes","text":"Modules = [PC2GPUBenchmarks]\nPages   = [\"UnitPrefixedBytes.jl\"]","category":"page"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.B","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.B","text":"Bytes\n\n\n\n\n\n","category":"type"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.GB","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.GB","text":"Gigabytes, i.e. 10^9 = 1000^3 bytes\n\n\n\n\n\n","category":"type"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.GiB","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.GiB","text":"Gibibytes, i.e. 2^30 = 1024^3 bytes\n\n\n\n\n\n","category":"type"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.KB","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.KB","text":"Kilobytes, i.e. 10^3 = 1000 bytes\n\n\n\n\n\n","category":"type"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.KiB","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.KiB","text":"Kibibytes, i.e. 2^10 = 1024 bytes\n\n\n\n\n\n","category":"type"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.MB","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.MB","text":"Megabytes, i.e. 10^6 = 1000^2 bytes\n\n\n\n\n\n","category":"type"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.MiB","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.MiB","text":"Mebibytes, i.e. 2^20 = 1024^2 bytes\n\n\n\n\n\n","category":"type"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.TB","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.TB","text":"Terabytes, i.e. 10^12 = 1000^4 bytes\n\n\n\n\n\n","category":"type"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.TiB","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.TiB","text":"Tebibytes, i.e. 2^40 = 1024^4 bytes\n\n\n\n\n\n","category":"type"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.UnitPrefixedBytes","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.UnitPrefixedBytes","text":"Abstract type representing an amount of data, i.e. a certain number of bytes, with a unit prefix (also \"metric prefix\"). Examples include the SI prefixes, like KB, MB, and GB, but also the binary prefixes (ISO/IEC 80000), like KiB, MiB, and GiB.\n\nSee https://en.wikipedia.org/wiki/Binary_prefix for more information.\n\n\n\n\n\n","category":"type"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.bytes-Tuple{Number}","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.bytes","text":"bytes(x::Number)\n\nReturns an appropriate UnitPrefixedBytes object, representing the number of bytes.\n\nNote: This function is type unstable by construction!\n\nSee simplify for what \"appropriate\" means here.\n\n\n\n\n\n","category":"method"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.bytes-Tuple{UnitPrefixedBytes}","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.bytes","text":"bytes(x::UnitPrefixedBytes)\n\nReturn the number of bytes (without prefix) as Float64.\n\n\n\n\n\n","category":"method"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.change_base-Tuple{T} where T<:UnitPrefixedBytes","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.change_base","text":"Toggle between\n\nBase 10, SI prefixes, i.e. factors of 1000\nBase 2, ISO/IEC prefixes, i.e. factors of 1024\n\nExample:\n\njulia> change_base(KB(13))\n~12.7 KiB\n\njulia> change_base(KiB(13))\n~13.31 KB\n\n\n\n\n\n","category":"method"},{"location":"refs/UnitPrefixedBytes/#PC2GPUBenchmarks.simplify-Tuple{B}","page":"Unit-Prefixed Bytes","title":"PC2GPUBenchmarks.simplify","text":"simplify(x::UnitPrefixedBytes[; base])\n\nGiven a UnitPrefixedBytes number x, finds a more appropriate UnitPrefixedBytes that represents the same number of bytes but with a smaller value.\n\nThe optional keyword argument base can be used to switch between base 2, i.e. ISO/IEC prefixes (default), and base 10. Allowed values are 2, 10, :SI, :ISO, and :IEC.\n\nNote: This function is type unstable by construction!\n\nExample:\n\njulia> simplify(B(40_000_000))\n~38.15 MiB\n\njulia> simplify(B(40_000_000); base=10)\n40.0 MB\n\n\n\n\n\n","category":"method"},{"location":"examples/host2device_memcpy/#Example:-Host-to-Device-Memcpy","page":"Host-to-Device Memcpy","title":"Example: Host-to-Device Memcpy","text":"","category":"section"},{"location":"examples/host2device_memcpy/","page":"Host-to-Device Memcpy","title":"Host-to-Device Memcpy","text":"note: Note\nTest system: DGX with 8x A100 GPUs","category":"page"},{"location":"examples/host2device_memcpy/","page":"Host-to-Device Memcpy","title":"Host-to-Device Memcpy","text":"julia> host2device_memcpy()\nMemsize: 512.000 MiB\nGPU: CuDevice(0) - NVIDIA A100-SXM4-40GB\n\nHost <-> Device Bandwidth (GiB/s):\n └ max: 11.75\n\nHost (pinned) <-> Device Bandwidth (GiB/s):\n └ max: 24.24\n\nDevice <-> Device (same device) Bandwidth (GiB/s):\n └ max: 1226.84","category":"page"},{"location":"examples/host2device_memcpy/","page":"Host-to-Device Memcpy","title":"Host-to-Device Memcpy","text":"Or with a bit more statistics on the benchmark runs:","category":"page"},{"location":"examples/host2device_memcpy/","page":"Host-to-Device Memcpy","title":"Host-to-Device Memcpy","text":"julia> host2device_memcpy(; stats=true)\nMemsize: 512.000 MiB\nGPU: CuDevice(0) - NVIDIA A100-SXM4-40GB\n\nHost <-> Device Bandwidth (GiB/s):\n ├ max: 11.71\n ├ min: 8.74\n ├ avg: 10.2\n └ std_dev: 1.22\n\nHost (pinned) <-> Device Bandwidth (GiB/s):\n ├ max: 24.15\n ├ min: 21.86\n ├ avg: 23.54\n └ std_dev: 0.74\n\nDevice <-> Device (same device) Bandwidth (GiB/s):\n ├ max: 1226.84\n ├ min: 1185.6\n ├ avg: 1220.56\n └ std_dev: 12.41","category":"page"},{"location":"refs/gpuinfo/#GPU-Information","page":"CUDA/GPU Information","title":"GPU Information","text":"","category":"section"},{"location":"refs/gpuinfo/","page":"CUDA/GPU Information","title":"CUDA/GPU Information","text":"Heavily inspired by the cuda sample deviceQueryDrv.","category":"page"},{"location":"refs/gpuinfo/#Index","page":"CUDA/GPU Information","title":"Index","text":"","category":"section"},{"location":"refs/gpuinfo/","page":"CUDA/GPU Information","title":"CUDA/GPU Information","text":"Pages   = [\"gpuinfo.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/gpuinfo/#References","page":"CUDA/GPU Information","title":"References","text":"","category":"section"},{"location":"refs/gpuinfo/","page":"CUDA/GPU Information","title":"CUDA/GPU Information","text":"Modules = [PC2GPUBenchmarks]\nPages   = [\"gpuinfo.jl\"]","category":"page"},{"location":"refs/gpuinfo/#PC2GPUBenchmarks.gpuinfo-Tuple{Integer}","page":"CUDA/GPU Information","title":"PC2GPUBenchmarks.gpuinfo","text":"gpuinfo(deviceid::Integer)\n\nPrint out detailed information about the GPU with the given deviceid.\n\nHeavily inspired by the CUDA sample \"deviceQueryDrv.cpp\".\n\n\n\n\n\n","category":"method"},{"location":"refs/gpuinfo/#PC2GPUBenchmarks.gpuinfo-Tuple{}","page":"CUDA/GPU Information","title":"PC2GPUBenchmarks.gpuinfo","text":"gpuinfo()\n\nShow general information about the available GPU related software and hardware. Among other things the versions of the CUDA toolkit, the CUDA driver, and the NVIDIA driver, as well as the available GPUs (names, total memory, etc.) will be printed.\n\nTo get more detailed information for a particular device, see gpuinfo(deviceid).\n\n\n\n\n\n","category":"method"},{"location":"refs/gpuinfo/#PC2GPUBenchmarks.gpuinfo_p2p_access-Tuple{}","page":"CUDA/GPU Information","title":"PC2GPUBenchmarks.gpuinfo_p2p_access","text":"Query peer-to-peer (i.e. inter-GPU) access support.\n\n\n\n\n\n","category":"method"},{"location":"refs/host2device_memcpy/#Host-Device-Memcpy","page":"Host-to-Device Memcpy","title":"Host-Device Memcpy","text":"","category":"section"},{"location":"refs/host2device_memcpy/#Index","page":"Host-to-Device Memcpy","title":"Index","text":"","category":"section"},{"location":"refs/host2device_memcpy/","page":"Host-to-Device Memcpy","title":"Host-to-Device Memcpy","text":"Pages   = [\"host2device_memcpy.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/host2device_memcpy/#References","page":"Host-to-Device Memcpy","title":"References","text":"","category":"section"},{"location":"refs/host2device_memcpy/","page":"Host-to-Device Memcpy","title":"Host-to-Device Memcpy","text":"Modules = [PC2GPUBenchmarks]\nPages   = [\"host2device_memcpy.jl\"]","category":"page"},{"location":"refs/workers/#Worker-Utilities","page":"Worker Utilities","title":"Worker Utilities","text":"","category":"section"},{"location":"refs/workers/#Index","page":"Worker Utilities","title":"Index","text":"","category":"section"},{"location":"refs/workers/","page":"Worker Utilities","title":"Worker Utilities","text":"Pages   = [\"workers.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/workers/#References","page":"Worker Utilities","title":"References","text":"","category":"section"},{"location":"refs/workers/","page":"Worker Utilities","title":"Worker Utilities","text":"Modules = [PC2GPUBenchmarks]\nPages   = [\"workers.jl\"]","category":"page"},{"location":"refs/workers/#PC2GPUBenchmarks.@worker-Tuple{Any, Any}","page":"Worker Utilities","title":"PC2GPUBenchmarks.@worker","text":"@worker pid ex\n\nSpawns the given command on the given worker process.\n\nExamples:\n\n@worker 3 PC2GPUBenchmarks.functional()\n@worker 3 stresstest(CUDA.devices(); duration=10, verbose=false)\n\n\n\n\n\n","category":"macro"},{"location":"refs/workers/#PC2GPUBenchmarks.@worker-Tuple{Any}","page":"Worker Utilities","title":"PC2GPUBenchmarks.@worker","text":"@worker ex\n\nCreates a worker process, spawns the given command on it, and kills the worker process once the command has finished execution.\n\nImplementation: a Julia thread (we use @spawn) will be used to wait on the task and kill the worker.\n\nExamples:\n\n@worker PC2GPUBenchmarks.functional()\n@worker stresstest(CUDA.devices(); duration=10, verbose=false)\n\n\n\n\n\n","category":"macro"},{"location":"refs/workers/#PC2GPUBenchmarks.@worker_create-Tuple{Any}","page":"Worker Utilities","title":"PC2GPUBenchmarks.@worker_create","text":"@worker_create n -> pids\n\nCreate n workers (i.e. separate Julia processes) and execute using PC2GPUBenchmarks, CUDA on all of them. Returns the pids of the created workers.\n\n\n\n\n\n","category":"macro"},{"location":"refs/workers/#PC2GPUBenchmarks.@worker_killall-Tuple{}","page":"Worker Utilities","title":"PC2GPUBenchmarks.@worker_killall","text":"Kills all Julia workers.\n\n\n\n\n\n","category":"macro"},{"location":"refs/cuda_wrappers/#CUDA-Wrappers","page":"CUDA Wrappers","title":"CUDA Wrappers","text":"","category":"section"},{"location":"refs/cuda_wrappers/#Index","page":"CUDA Wrappers","title":"Index","text":"","category":"section"},{"location":"refs/cuda_wrappers/","page":"CUDA Wrappers","title":"CUDA Wrappers","text":"Pages   = [\"cuda_wrappers.md\"]\nOrder   = [:function, :type]","category":"page"},{"location":"refs/cuda_wrappers/#References","page":"CUDA Wrappers","title":"References","text":"","category":"section"},{"location":"refs/cuda_wrappers/","page":"CUDA Wrappers","title":"CUDA Wrappers","text":"Modules = [PC2GPUBenchmarks]\nPages   = [\"cuda_wrappers.jl\"]","category":"page"},{"location":"refs/cuda_wrappers/#PC2GPUBenchmarks.get_power_usage-Tuple{CUDA.NVML.Device}","page":"CUDA Wrappers","title":"PC2GPUBenchmarks.get_power_usage","text":"get_power_usage(device=CUDA.device())\n\nGet current power usage of the given CUDA device in Watts.\n\n\n\n\n\n","category":"method"},{"location":"refs/cuda_wrappers/#PC2GPUBenchmarks.get_power_usages","page":"CUDA Wrappers","title":"PC2GPUBenchmarks.get_power_usages","text":"get_power_usages(devices=CUDA.devices())\n\nGet current power usage of the given CUDA devices in Watts.\n\n\n\n\n\n","category":"function"},{"location":"refs/cuda_wrappers/#PC2GPUBenchmarks.get_temperature","page":"CUDA Wrappers","title":"PC2GPUBenchmarks.get_temperature","text":"get_temperature(device=CUDA.device())\n\nGet current temperature of the given CUDA device in degrees Celsius.\n\n\n\n\n\n","category":"function"},{"location":"refs/cuda_wrappers/#PC2GPUBenchmarks.get_temperatures","page":"CUDA Wrappers","title":"PC2GPUBenchmarks.get_temperatures","text":"get_temperatures(devices=CUDA.devices())\n\nGet current temperature of the given CUDA devices in degrees Celsius.\n\n\n\n\n\n","category":"function"},{"location":"refs/cuda_wrappers/#PC2GPUBenchmarks.gpuid","page":"CUDA Wrappers","title":"PC2GPUBenchmarks.gpuid","text":"Get GPU index of the given device.\n\nNote: GPU indices start with zero.\n\n\n\n\n\n","category":"function"},{"location":"explanations/dgx/#DGX-A100","page":"DGX Details","title":"DGX-A100","text":"","category":"section"},{"location":"explanations/dgx/#Topology","page":"DGX Details","title":"Topology","text":"","category":"section"},{"location":"explanations/dgx/","page":"DGX Details","title":"DGX Details","text":"(Image: topology)","category":"page"},{"location":"explanations/dgx/","page":"DGX Details","title":"DGX Details","text":"(Image source: https://www.microway.com/wp-content/uploads/NVIDIA-DGX-A100-Block-Diagram.png","category":"page"},{"location":"#PC2GPUBenchmarks.jl","page":"PC2GPUBenchmarks","title":"PC2GPUBenchmarks.jl","text":"","category":"section"},{"location":"","page":"PC2GPUBenchmarks","title":"PC2GPUBenchmarks","text":"gpuinfo: General overview of GPUs, their topology (P2P access abilities), and detailed information about a particular GPU.\np2p_memcpy: P2P memory bandwidth benchmark (i.e. inter-GPU NVLink / PCIe).\nhost2device_memcpy: Host-device memory bandwidth benchmark.","category":"page"}]
}
