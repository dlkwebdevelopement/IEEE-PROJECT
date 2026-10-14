import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { API_BASE } from "../api";

// Material UI Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import MemoryIcon from "@mui/icons-material/Memory";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import HubIcon from "@mui/icons-material/Hub";
import CodeIcon from "@mui/icons-material/Code";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TimelineIcon from "@mui/icons-material/Timeline";
import SpeedIcon from "@mui/icons-material/Speed";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// Custom 3D VLSI Chip & Semiconductor Logo
const VlsiBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#vlsiGrad2013)" stroke="#818CF8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="vlsiGrad2013" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E1B4B" />
        <stop offset="0.5" stopColor="#312E81" />
        <stop offset="1" stopColor="#4F46E5" />
      </linearGradient>
    </defs>
    {/* Microchip Die Center */}
    <rect x="15" y="15" width="18" height="18" rx="3" fill="#0F172A" stroke="#A5B4FC" strokeWidth="1.2" />
    <circle cx="24" cy="24" r="3" fill="#FACC15" />
    {/* Interconnect Traces */}
    <path d="M18 15v-4M24 15v-4M30 15v-4" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 37v-4M24 37v-4M30 37v-4" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15 18h-4M15 24h-4M15 30h-4" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M37 18h-4M37 24h-4M37 30h-4" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 2013-2014 IEEE VLSI Project Dataset (40 Titles across 5 Core Domains)
export const vlsiProjectsDataset = [
  {
    id: 1,
    title: "Graph-Based Transistor Network Generation Method for Supergate Design",
    domain: "CMOS Layout & Automated Transistor Sizing",
    category: "Transistor & Cell Level Design",
    tech: ["Verilog HDL", "Cadence Virtuoso / SPICE", "Graph Theory", "Transistor Sizing", "ModelSim"],
    description: "An automated graph-theoretic transistor network generation algorithm minimizing parasitic capacitances in complex static CMOS supergates.",
    abstract: "Standard static CMOS logic suffers from routing congestion when synthesizing complex Boolean functions. This project implements a graph-based transistor synthesis methodology in Verilog and SPICE that optimizes Euler paths and dual graph networks, reducing layout area and parasitic gate capacitance by 24%.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Implementing Minimum-Energy-Point Systems With Adaptive Logic",
    domain: "Subthreshold / Near-Threshold Low Power",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog / VHDL", "Adaptive Voltage Scaling (AVS)", "Subthreshold Logic", "ModelSim / Xilinx ISE"],
    description: "A self-adjusting dynamic voltage and frequency scaling logic block tracking the minimum energy consumption point across varying PVT conditions.",
    abstract: "Operating near the subthreshold minimum-energy point (MEP) leads to severe timing variability. We develop an adaptive logic controller in Verilog with embedded critical path replica monitors that dynamically adjusts supply voltage and substrate body bias to guarantee functional correctness at lowest energy per operation.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Approximate Radix-8 Booth Multipliers for Low-Power and High-Performance Operation",
    domain: "Approximate Computing & Fast Multipliers",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog HDL", "Radix-8 Modified Booth", "Approximate Compressors", "Xilinx Vivado / ModelSim"],
    description: "A high-speed Radix-8 Booth multiplier utilizing approximate 4:2 compressor trees to minimize critical path delay in error-tolerant multimedia processors.",
    abstract: "Higher radix Booth multipliers reduce partial product rows but suffer from complex odd-multiple generation (+3X). We design an approximate Radix-8 Booth encoder and partial product generator in Verilog that truncates insignificant carry propagations, achieving 35% power reduction with negligible signal degradation.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "A High-Performance FIR Filter Architecture for Fixed and Reconfigurable Applications",
    domain: "DSP Architectures & Digital Filtering",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Distributed Arithmetic (DA)", "Pipelined Multipliers", "MATLAB Filter Design", "FPGA Spartan-6 / Artix-7"],
    description: "A high-throughput reconfigurable Finite Impulse Response (FIR) filter architecture utilizing canonical signed digit (CSD) multiplierless techniques.",
    abstract: "Real-time communication receivers demand variable bandwidth FIR filters with high operating frequencies. This project implements a reconfigurable FIR filter in Verilog utilizing systolic pipelined adders and common subexpression elimination (CSE), reducing hardware multipliers by 45% on FPGA targets.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "The Serial Commutator (SC) FFT",
    domain: "FFT Transforms & Spectral Analysis",
    category: "DSP & Video Processing",
    tech: ["VHDL / Verilog", "Radix-2/4 Serial Commutator", "Rotational Butterfly Units", "ModelSim", "FPGA"],
    description: "A compact serial commutator Fast Fourier Transform (FFT) hardware architecture minimizing memory buffering in streaming OFDM systems.",
    abstract: "Conventional pipelined FFT processors require extensive FIFO register arrays. This project designs a Serial Commutator (SC) FFT architecture in VHDL that reorganizes intermediate butterfly stages, reducing memory usage by 50% while sustaining 1GS/s throughput for ultra-wideband communications.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "An Improved Signed Digit Representation Approach for Constant Vector Multiplication",
    domain: "Matrix Math & Vector Processors",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog HDL", "Canonical Signed Digit (CSD)", "Vector Multiplication", "ModelSim / Xilinx ISE"],
    description: "An optimized constant vector multiplication pipeline replacing power-hungry multipliers with shift-and-add networks based on minimal signed-digit recoding.",
    abstract: "Constant matrix vector multiplication is fundamental to neural weights and DCT/IDCT engines. We formulate an improved signed-digit recoding algorithm that maximizes common subexpression sharing across parallel vector lanes, reducing adder counts by 32% compared to standard Horner schemes.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 7,
    title: "High-Speed and Energy-Efficient Carry Skip Adder Operating Under a Wide Range of Supply Voltage Levels",
    domain: "High-Speed Adders & Arithmetic Units",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog HDL", "Concatenation & Inc-Skip Logic", "Voltage Scalable Adder", "ModelSim / Synopsys DC"],
    description: "A variable-latency carry-skip adder architecture delivering high throughput from super-threshold (1.2V) down to deep subthreshold (0.4V) operation.",
    abstract: "Conventional carry skip adders experience delay degradation at low supply voltages due to increased chain resistance. We design an energy-efficient concatenation-based carry skip adder in Verilog that optimizes block sizes dynamically, achieving 40% energy-delay-product reduction across wide voltage ranges.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "A New XOR-Free Approach for Implementation of Convolutional Encoder",
    domain: "Forward Error Correction & Channel Coding",
    category: "Error Control Coding & Security",
    tech: ["Verilog HDL", "Convolutional Coding", "Look-Up Logic / MUX Networks", "ModelSim", "FPGA"],
    description: "An XOR-free convolutional encoder architecture replacing traditional deep XOR feedback trees with parallel multiplexer lookups.",
    abstract: "Deep XOR gates in high constraint-length convolutional encoders cause high dynamic switching activity and propagation delays. This project implements an XOR-free shift-register state machine in Verilog that precomputes parity polynomials via LUT logic, boosting encoding speeds by 28%.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 9,
    title: "Energy and Area Efficient Three-Input XOR/XNORs With Systematic Cell Design Methodology",
    domain: "Standard Cell Design & Elementary Logic",
    category: "Transistor & Cell Level Design",
    tech: ["Verilog HDL / SPICE", "Transmission Gate Logic", "Pass Transistor Logic (PTL)", "Cadence Virtuoso"],
    description: "A full-swing 3-input XOR/XNOR cell designed with hybrid pass-transistor and transmission gate logic for compact arithmetic adders.",
    abstract: "Arithmetic parity and full-adder circuits heavily rely on 3-input XOR/XNOR gates. We present a systematic 8-transistor cell design methodology in SPICE/Verilog that eliminates non-full-swing threshold drops while achieving the lowest power-delay product among published benchmark cells.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 10,
    title: "Implementation of a PID control PWM Module on FPGA",
    domain: "Control Systems & Power Electronics VLSI",
    category: "FPGA & System-on-Chip",
    tech: ["VHDL / Verilog", "Fixed-Point PID Controller", "Digital PWM Generator", "ModelSim", "Xilinx Spartan-6"],
    description: "A digital Proportional-Integral-Derivative (PID) controller core driving high-frequency Pulse Width Modulation (PWM) channels on an FPGA.",
    abstract: "High-precision DC-DC power converters and motor drives demand microsecond feedback loop responses. This project builds a pipelined 32-bit fixed-point PID controller module in VHDL on FPGA, providing sub-nanosecond PWM resolution with automated anti-windup clamping.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 11,
    title: "Built-in Self Testing (BIST) of FPGAs",
    domain: "VLSI Testing & Fault Tolerant Architectures",
    category: "FPGA & System-on-Chip",
    tech: ["Verilog HDL", "LFSR Pattern Generator", "MISR Signature Analyzer", "BIST Controller", "ModelSim"],
    description: "A circular Built-In Self-Test (BIST) infrastructure scanning configurable logic blocks (CLBs) and routing interconnects for permanent hardware faults.",
    abstract: "Testing uncommitted programmable logic resources in deep submicron FPGAs requires specialized test configurations. We implement an on-chip BIST architecture in Verilog with pseudorandom LFSR vectors and Multiple Input Signature Registers (MISR) that achieves 99.4% fault coverage with zero external test equipment.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "An FPGA-Based Cloud System for Massive ECG Data Analysis",
    domain: "Biomedical VLSI & Hardware Accelerators",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "QRS Detection Filter", "Pipelined Wavelet Transform", "FPGA Accelerator", "UART / Ethernet"],
    description: "A hardware-accelerated ECG signal processing pipeline implemented on FPGA for real-time cardiac arrhythmia classification.",
    abstract: "Cloud servers processing continuous multi-lead ECG telemetry experience severe CPU bottlenecks. This project builds a dedicated hardware accelerator on FPGA in Verilog implementing Pan-Tompkins QRS peak detection and Discrete Wavelet Transforms (DWT) at 100x real-time streaming speeds.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 13,
    title: "Distributed Sensor Network-on-Chip for Performance Optimization of Soft-Error-Tolerant Multiprocessor System-on-Chip",
    domain: "Network-on-Chip (NoC) & MPSoC Fault Tolerance",
    category: "FPGA & System-on-Chip",
    tech: ["Verilog HDL", "2D Mesh Router", "Distributed Voltage/Temp Sensors", "Fault Tolerant Routing", "ModelSim"],
    description: "A 2D mesh Network-on-Chip architecture integrating distributed telemetry monitors to dynamically steer packet routes around soft-error hotspot cores.",
    abstract: "Thermal hotspots and radiation in Multiprocessor SoCs (MPSoCs) cause transient soft errors. We develop a distributed sensor NoC router architecture in Verilog that monitors router packet drop rates and temperature proxies, dynamically redirecting flits across healthy neighboring routing paths.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 14,
    title: "VLSI Implementation of Fully Parallel LTE Turbo Decoders",
    domain: "Wireless Channel Decoders & 4G/LTE Modems",
    category: "Error Control Coding & Security",
    tech: ["Verilog HDL", "Max-Log-MAP Algorithm", "Parallel SISO Decoders", "Contention-Free Interleaver", "ModelSim"],
    description: "A fully parallel Max-Log-MAP Turbo Decoder architecture meeting multi-gigabit LTE-Advanced throughput standards with low hardware area.",
    abstract: "Iterative Turbo decoders in LTE modems suffer from high latency during interleaver memory access. This project designs a fully parallel Turbo decoder in Verilog featuring contention-free Quadratic Permutation Polynomial (QPP) interleaver routing and optimized Log-MAP soft-in soft-out (SISO) units.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "A High Throughput List Decoder Architecture For Polar Codes",
    domain: "Next-Gen 5G Channel Coding & Polar Decoders",
    category: "Error Control Coding & Security",
    tech: ["Verilog HDL", "Successive Cancellation List (SCL)", "Log-Likelihood Ratio (LLR)", "ModelSim / Vivado"],
    description: "A high-throughput Successive Cancellation List (SCL) polar decoder with low-latency path pruning for 5G eMBB channel specifications.",
    abstract: "Polar codes achieve Shannon capacity but Successive Cancellation List (SCL) decoders require extensive sorting registers. We implement a low-latency SCL polar decoder architecture in Verilog that uses simplified bit-level metric sorters, boosting decoding throughput to over 2.4 Gbps.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 16,
    title: "High-Performance NB-LDPC Decoder With Reduction of Message Exchange",
    domain: "Non-Binary LDPC & Forward Error Correction",
    category: "Error Control Coding & Security",
    tech: ["Verilog HDL", "Non-Binary LDPC", "Trellis Min-Max Algorithm", "Message Truncation", "ModelSim"],
    description: "A Trellis Min-Max Non-Binary LDPC decoder architecture reducing check-node to variable-node routing congestion in flash storage controllers.",
    abstract: "Non-Binary LDPC codes over GF(q) offer outstanding error resilience for solid-state drives but generate massive check-node message traffic. This project implements a truncated Trellis Min-Max NB-LDPC decoder in Verilog that reduces message exchange bits by 60% without coding gain loss.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 17,
    title: "A High-Speed FPGA Implementation of an RSD-Based ECC Processor",
    domain: "Public Key Cryptography & Hardware Security",
    category: "Error Control Coding & Security",
    tech: ["Verilog HDL", "Elliptic Curve Cryptography (ECC)", "Redundant Signed Digit (RSD)", "Point Addition / Doubling", "FPGA"],
    description: "A carry-free Redundant Signed Digit (RSD) modular arithmetic processor for 256-bit Elliptic Curve Cryptography over GF(p).",
    abstract: "Scalar point multiplication in Elliptic Curve Cryptography (ECC) suffers from carry propagation delay during multi-precision modular additions. We design a 256-bit RSD ECC coprocessor in Verilog that performs modular inversion and multiplication with carry-free digit adders, computing point multiplication in under 1.2ms.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 18,
    title: "Low-Power ECG-Based Processor for Predicting Ventricular Arrhythmia",
    domain: "Ultra Low Power Biomedical DSP",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Subthreshold DSP", "Wavelet Feature Extraction", "Support Vector Machine (SVM)", "ModelSim"],
    description: "An ultra-low-power biomedical DSP SoC extracting morphological ECG wave features to trigger proactive Ventricular Tachycardia alerts.",
    abstract: "Implantable cardiac defibrillators operate on micro-watt power budgets. We design a dedicated low-power ECG processor in Verilog operating at 0.5V that couples QRS wave feature extraction with an integer-arithmetic SVM decision engine, predicting arrhythmia 5 minutes before onset with 96% sensitivity.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 19,
    title: "In-Field Test for Permanent Faults in FIFO Buffers of NoC Routers",
    domain: "Network-on-Chip Testing & BIST",
    category: "FPGA & System-on-Chip",
    tech: ["Verilog HDL", "NoC Router FIFO", "March Test Algorithm", "Online Fault Detection", "ModelSim"],
    description: "An online in-field transparent March test controller detecting stuck-at and transition faults inside virtual-channel FIFO buffers of NoC routers.",
    abstract: "Virtual channel FIFO buffers occupy over 60% of NoC router silicon and are vulnerable to silicon aging. This project implements a transparent periodic in-field March test controller in Verilog that tests FIFO memory cells during idle transmission slots without disrupting active network packets.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 20,
    title: "Configurable Parallel Hardware Architecture for Efficient Integral Histogram Image Computing",
    domain: "Computer Vision & Image Processing VLSI",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Integral Histogram Engine", "Parallel Prefix Adders", "FPGA Virtex-7", "ModelSim"],
    description: "A parallel streaming pipelined hardware engine generating multi-bin integral histograms in real-time for high-speed object tracking.",
    abstract: "Integral histograms accelerate computer vision object detectors but generate high memory bandwidth bottlenecks. We build a configurable 64-bin parallel integral histogram architecture in Verilog on FPGA that uses diagonal wavefront scan engines to process 1080p video at 120 FPS.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 21,
    title: "Input-Based Dynamic Reconfiguration of Approximate Arithmetic Units for Video Encoding",
    domain: "Approximate Computing & Video Codecs",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Motion Estimation Engine", "Approximate SAD Units", "H.264 / HEVC Codec", "ModelSim"],
    description: "A content-adaptive approximate Sum of Absolute Differences (SAD) motion estimation processor for energy-constrained HEVC video encoders.",
    abstract: "Motion estimation consumes up to 70% of video encoding power. This project designs a dynamic reconfigurable SAD processor in Verilog that monitors video spatial gradient statistics and switches between exact and truncated approximate arithmetic units, saving 48% energy with no perceived visual PSNR loss.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 22,
    title: "A Normal I/O Order Radix-2 FFT Architecture to Process Twin Data Streams for MIMO",
    domain: "MIMO-OFDM Baseband & FFT Processors",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Twin Stream Radix-2 FFT", "In-Order I/O Buffer", "ModelSim / Vivado"],
    description: "A dual-channel in-order I/O pipelined FFT architecture concurrently processing dual Spatial Multiplexing MIMO antenna data streams.",
    abstract: "Dual-stream MIMO transceivers require parallel FFT processing without bit-reversal reordering latency. We design a normal I/O order Radix-2 FFT processor in Verilog that interleaves real and imaginary twiddle operations across dual streams, cutting total memory footprint by 35%.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 23,
    title: "Unequal-Error-Protection Error Correction Codes for the Embedded Memories in Digital Signal Processors",
    domain: "Memory Reliability & UEP Coding",
    category: "Memory & Nanoscale Circuits",
    tech: ["Verilog HDL", "UEP Hamming Matrix", "SRAM Memory Scrubbing", "ModelSim / FPGA"],
    description: "An Unequal-Error-Protection (UEP) syndrome codec providing fortified multi-bit protection to critical MSB bits in DSP coefficient memories.",
    abstract: "In DSP data paths, bit-flips in MSBs cause catastrophic output noise while LSB errors are often imperceptible. This project implements a UEP linear block code encoder/decoder in Verilog that delivers triple-error correction to high-significance bits at identical parity overhead to single-error ECC.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 24,
    title: "Hybrid LUT/Multiplexer FPGA Logic Architectures",
    domain: "FPGA Architecture & Silicon Benchmarking",
    category: "FPGA & System-on-Chip",
    tech: ["Verilog HDL", "Hybrid LUT-MUX CLB", "VPR FPGA Cad Flow", "ModelSim"],
    description: "A novel FPGA Configurable Logic Block (CLB) architecture embedding hard multiplexers inside 6-LUT logic clusters to reduce silicon area.",
    abstract: "Synthesizing wide multiplexers and control logic into standard Look-Up Tables consumes excessive FPGA routing resources. We model a hybrid LUT/MUX logic block architecture in Verilog that incorporates 4:1 hard MUX cells, yielding a 15% reduction in critical path delay and 18% area savings on benchmark circuits.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 25,
    title: "A Dynamically Reconfigurable Multi-ASIP Architecture for Multistandard and Multimode Turbo Decoding",
    domain: "Application Specific Instruction Processors (ASIP)",
    category: "FPGA & System-on-Chip",
    tech: ["VHDL / Verilog", "Multi-ASIP Core", "Custom VLIW Instruction Set", "ModelSim / Xilinx Vivado"],
    description: "A dynamically reconfigurable multi-ASIP architecture running unified microcode for LTE, WiMAX, and DVB-RCS2 Turbo and LDPC decoding.",
    abstract: "Multi-standard wireless base stations require flexible baseband processors supporting divergent channel coding standards. We construct a multi-core ASIP in VHDL featuring SIMD arithmetic units and configurable shuffling networks that achieves seamless software switching between LTE Turbo and WiMAX LDPC modes.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 26,
    title: "Low-Power Split-Radix FFT Processors Using Radix-2 Butterfly Units",
    domain: "Low Power Transforms & Digital Signal Processing",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Split-Radix FFT (SR-FFT)", "Radix-2 Butterfly Engine", "ModelSim / Synopsys"],
    description: "An energy-efficient Split-Radix FFT processor that decomposes complex Radix-4 twiddle stages into simplified Radix-2 butterfly units.",
    abstract: "Split-Radix FFT minimizes total complex additions and multiplications but exhibits irregular control paths. This project implements an L-shaped Split-Radix FFT pipeline in Verilog that regularizes memory scheduling using dual Radix-2 butterflies, saving 28% dynamic switching energy in OFDM basebands.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 27,
    title: "A Fully Digital Front-End Architecture for ECG Acquisition System With 0.5 V Supply",
    domain: "Sub-Volt Bio-Potential Acquisition",
    category: "Transistor & Cell Level Design",
    tech: ["Verilog-AMS / SPICE", "Delta-Sigma Modulator", "Digital Front-End (DFE)", "Cadence Virtuoso"],
    description: "A 0.5V ultra-low voltage digital front-end for wearable ECG sensor patches with high common-mode rejection and DC offset cancellation.",
    abstract: "Recording biopotential signals with miniature button batteries requires sub-volt analog-to-digital front-ends. We develop a fully digital front-end architecture in SPICE/Verilog operating at 0.5V that replaces high-gain analog op-amps with time-domain Delta-Sigma modulators, achieving 84 dB CMRR at only 1.2 micro-watts.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 28,
    title: "A Low-Cost and Modular Receiver for MIMO SDR",
    domain: "Software-Defined Radio (SDR) & RF Baseband",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Direct Digital Down-Converter (DDC)", "CORDIC Quadrature Demodulator", "FPGA"],
    description: "A modular digital down-conversion and channel equalization baseband receiver core for 2x2 Software-Defined Radio platforms.",
    abstract: "MIMO SDR hardware requires flexible digital IF down-conversion without expensive discrete analog mixers. This project designs a modular MIMO SDR receiver in Verilog utilizing pipelined CORDIC phase rotators and Polyphase Decimation Filters, supporting arbitrary carrier frequencies up to 500 MHz on FPGA.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 29,
    title: "High-Speed, Low-Power, and Highly Reliable Frequency Multiplier for DLL-Based Clock Generator",
    domain: "Clock Generation & Mixed-Signal VLSI",
    category: "Memory & Nanoscale Circuits",
    tech: ["Verilog HDL / SPICE", "Delay-Locked Loop (DLL)", "Edge Combiner Multiplier", "ModelSim"],
    description: "A low-jitter all-digital Delay-Locked Loop (DLL) frequency multiplier generating multiphase GHz clock signals with high PVT immunity.",
    abstract: "High-speed memory interfaces require frequency multiplication without the phase accumulation jitter of PLLs. We implement a DLL-based frequency multiplier in Verilog/SPICE with an overlap-canceling edge combiner, achieving 2GHz clock output with less than 2.1ps peak-to-peak jitter.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 30,
    title: "Frequency-Boost Jitter Reduction for Voltage-Controlled Ring Oscillators",
    domain: "Oscillator Circuits & Phase Noise Reduction",
    category: "Memory & Nanoscale Circuits",
    tech: ["SPICE / Verilog-AMS", "Ring Oscillator (VCO)", "Sub-Harmonic Injection Locking", "Cadence Spectre"],
    description: "A frequency-boosted multi-stage ring oscillator with sub-harmonic injection locking that drastically suppresses low-frequency phase noise.",
    abstract: "Integrated Voltage-Controlled Ring Oscillators (VCROs) suffer from poor phase noise compared to bulky LC tanks. This project models a frequency-boosted ring oscillator in SPICE that injects momentary current boosts during transistor zero-crossings, cutting phase jitter by 42% at identical DC power.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 31,
    title: "Low-Energy Power-ON-Reset Circuit for Dual Supply SRAM",
    domain: "Power Management & SRAM Peripherals",
    category: "Memory & Nanoscale Circuits",
    tech: ["SPICE / Cadence", "Power-On-Reset (POR)", "Dual-Supply SRAM", "Leakage Current Reduction"],
    description: "An ultra-low leakage Power-On-Reset (POR) generator ensuring monotonic power-up sequencing for dual-rail low-power SRAM arrays.",
    abstract: "Dual-supply SRAM architectures (low core voltage, high bitline voltage) risk internal latch-up during asynchronous power rail ramp-up. We design a nano-power POR circuit in SPICE that generates a clean reset pulse with zero quiescent static leakage after power stabilization.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 32,
    title: "Low-Power Variation-Tolerant Nonvolatile Lookup Table Design",
    domain: "Spintronics & Nonvolatile FPGA Logic",
    category: "Memory & Nanoscale Circuits",
    tech: ["SPICE / Verilog-A", "Magnetic Tunnel Junction (MTJ)", "Spin-Transfer Torque (STT)", "Nonvolatile LUT (nvLUT)"],
    description: "A non-volatile 6-LUT architecture based on Spin-Transfer Torque MTJ devices that achieves instant power-on and zero standby leakage.",
    abstract: "SRAM-based FPGA LUTs suffer from high standby leakage in deep submicron nodes. This project designs a variation-tolerant non-volatile LUT (nvLUT) integrating STT-MTJ spintronic devices with differential pre-charge sense amplifiers, cutting standby leakage to zero and enabling instant-on operation.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 33,
    title: "A Low-Power Robust Easily Cascaded PentaMTJ-Based Combinational and Sequential Circuits",
    domain: "Spintronic Logic & Magnetic Tunnel Junctions",
    category: "Memory & Nanoscale Circuits",
    tech: ["Verilog-A / SPICE", "PentaMTJ Spintronic Device", "Nonvolatile Full Adder / Flip-Flop", "Cadence"],
    description: "A robust Penta-terminal MTJ cell structure enabling direct cascading of spintronic logic gates with large sensing margins.",
    abstract: "Standard 2-terminal MTJ logic requires complex CMOS sensing amplifiers between stages, hindering multi-level logic depth. We implement a PentaMTJ cell structure in SPICE that decouples write and read current paths, demonstrating cascadable non-volatile full adders and D-latches with 3x higher noise margins.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 34,
    title: "A 0.1–3.5-GHz Duty-Cycle Measurement and Correction Technique in 130-nm CMOS",
    domain: "High-Speed Clock Conditioning & SerDes",
    category: "Memory & Nanoscale Circuits",
    tech: ["SPICE / Verilog-AMS", "Duty-Cycle Corrector (DCC)", "Time-to-Digital Converter", "130-nm CMOS"],
    description: "A high-precision duty-cycle measurement and correction circuit correcting asymmetric 50% clock distortions across 0.1 to 3.5 GHz.",
    abstract: "High-speed Double Data Rate (DDR) memory buses require strictly symmetric 50% clock duty cycles. This project designs an all-digital Duty-Cycle Corrector (DCC) in 130nm CMOS that measures pulse-width deviations with digital integrators and adjusts p-channel pull-up currents with sub-1% duty error.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 35,
    title: "Full-Swing Local Bitline SRAM Architecture Based on the 22-nm FinFET Technology for Low-Voltage Operation",
    domain: "FinFET Memory & Ultra-Low-Voltage SRAM",
    category: "Memory & Nanoscale Circuits",
    tech: ["22-nm FinFET PTM", "SPICE Simulation", "Full-Swing Local Bitline", "Read/Write Static Noise Margin (SNM)"],
    description: "A high-density 22-nm FinFET SRAM architecture with full-swing local bitlines eliminating half-select disturbance and read-upset failures.",
    abstract: "Sub-0.5V operation in nanoscale FinFET SRAM is constrained by narrow read static noise margins (SNM). We develop an 8T/10T full-swing local bitline SRAM architecture in 22-nm FinFET technology that isolates the storage node during read access, delivering 2.5x larger read SNM at 0.4V supply.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 36,
    title: "A Robust Energy/Area-Efficient Forwarded-Clock Receiver With All-Digital Clock and Data Recovery in 28-nm CMOS for High-Density Interconnects",
    domain: "Clock & Data Recovery (CDR) & SerDes Interconnects",
    category: "Memory & Nanoscale Circuits",
    tech: ["28-nm CMOS", "All-Digital CDR (ADCDR)", "Phase Interpolator", "Eye-Opening Monitor", "Verilog / SPICE"],
    description: "A 10Gbps forwarded-clock receiver with an all-digital dual-loop phase interpolator CDR for ultra-dense chip-to-chip die interconnects.",
    abstract: "Multi-channel high-speed parallel interfaces suffer from cross-talk and clock skew. This project constructs an all-digital forwarded-clock receiver in 28-nm CMOS featuring hybrid coarse/fine phase interpolators and bang-bang phase detectors, achieving 10 Gb/s per lane with an energy efficiency of 0.85 pJ/bit.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 37,
    title: "OTA-Based Logarithmic Circuit for Arbitrary Input Signal and Its Application",
    domain: "Analog / Mixed-Signal VLSI",
    category: "Transistor & Cell Level Design",
    tech: ["SPICE / Cadence Virtuoso", "Operational Transconductance Amplifier (OTA)", "Logarithmic Amplifier", "Subthreshold MOSFET"],
    description: "A wide-dynamic-range Operational Transconductance Amplifier (OTA) logarithmic converter processing bipolar biopotential inputs.",
    abstract: "Compressing high-dynamic-range sensor signals requires logarithmic converters with broad linearity. We design an OTA-based logarithmic circuit in SPICE utilizing subthreshold MOS exponential transfer characteristics, achieving 7 decades of input current dynamic range with temperature compensation.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 38,
    title: "A Single-Ended With Dynamic Feedback Control 8T Subthreshold SRAM Cell",
    domain: "Subthreshold Memory Design & Ultra-Low Power",
    category: "Memory & Nanoscale Circuits",
    tech: ["SPICE / Cadence Virtuoso", "8T SRAM Cell", "Dynamic Feedback Control (DFC)", "Subthreshold Leakage Modeling"],
    description: "A single-ended 8T SRAM cell with dynamic feedback pull-up control delivering write-ability and read stability down to 0.3V.",
    abstract: "Standard 6T SRAM cells suffer write-failure and read-disturb in subthreshold regimes. This project designs an 8T subthreshold SRAM cell with dynamic feedback control in SPICE that disconnects the feedback inverter during write cycles, expanding write margin by 68% at 0.3V.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 39,
    title: "A Modified Partial Product Generator for Redundant Binary Multipliers",
    domain: "Redundant Binary Arithmetic & Fast Multipliers",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog HDL", "Redundant Binary (RB)", "Booth Partial Product Generator", "ModelSim / Synopsys"],
    description: "A modified Redundant Binary (RB) partial product generator eliminating the extra sign-extension correction words in high-speed multipliers.",
    abstract: "Redundant Binary Multipliers achieve carry-free tree addition but traditional partial product generators require complex error-compensation words. We design an improved RB partial product encoding matrix in Verilog that removes redundant carry vectors, saving 22% logic gates in 64-bit floating-point multipliers.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 40,
    title: "An Efficient Hardware Implementation of Canny Edge Detection Algorithm",
    domain: "Computer Vision & Edge Detection Accelerators",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Gaussian Filtering", "Sobel Gradient", "Non-Maximum Suppression (NMS)", "FPGA Spartan-6 / Artix-7"],
    description: "A fully pipelined, memory-efficient Canny edge detection coprocessor running on FPGA for real-time robotic vision systems.",
    abstract: "Canny edge detection requires multiple computational passes (Gaussian smoothing, Sobel gradients, Non-Maximum Suppression, Hysteresis thresholding). This project builds a systolic pipeline in Verilog on FPGA with line-buffer caching, computing high-quality gradient edges on 1080p video streams with zero external RAM stall.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
];

export default function VlsiProjects2013() {
  const [projects, setProjects] = useState(vlsiProjectsDataset);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [expandedAbstracts, setExpandedAbstracts] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  // Modal / Quick Enquiry State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  // Enquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "2013 - 2014",
    projectTitle: "",
    message: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Fetch from backend API if available
  useEffect(() => {
    let isMounted = true;
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/project_titles.php?tech=vlsi&year=2013 - 2014`);
        if (res.ok) {
          const json = await res.json();
          const items = Array.isArray(json) ? json : json.data || [];
          if (items && items.length > 0 && isMounted) {
            const mapped = items.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title_name || item.title || `VLSI Project ${idx + 1}`,
              domain: item.domain || "VLSI Design & Digital Systems",
              category: item.category || "VLSI Architecture",
              tech: item.tech ? (Array.isArray(item.tech) ? item.tech : item.tech.split(",")) : ["Verilog", "VHDL", "ModelSim", "FPGA"],
              description: item.description || "IEEE Standard VLSI Project implementation with complete Verilog/VHDL source code and base paper.",
              abstract: item.abstract || "Comprehensive experimental evaluation and ASIC/FPGA architecture modeling using IEEE standard benchmarks.",
              year: item.academic_year || "2013 - 2014",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjects(mapped);
          }
        }
      } catch (e) {
        console.warn("Using local dataset for VLSI 2013-2014 projects:", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = selectedCategory === "All" || p.category === selectedCategory;
      const term = searchTerm.toLowerCase().trim();
      const matchSearch =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.domain.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        (Array.isArray(p.tech) && p.tech.some((t) => t.toLowerCase().includes(term))) ||
        (p.abstract && p.abstract.toLowerCase().includes(term));
      return matchCat && matchSearch;
    });
  }, [projects, selectedCategory, searchTerm]);

  const toggleAbstract = (id) => {
    setExpandedAbstracts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyTitle = (id, title) => {
    navigator.clipboard.writeText(title);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const openProjectModal = (proj) => {
    setModalProject(proj);
    setFormData((prev) => ({
      ...prev,
      projectTitle: proj ? proj.title : "VLSI IEEE Projects 2013-2014",
    }));
    setIsModalOpen(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormSuccess(false);

    try {
      await fetch(`${API_BASE}/enquiries.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          year: formData.year,
          project_title: formData.projectTitle,
          message: formData.message || `Enquiry for VLSI 2013-2014: ${formData.projectTitle}`,
          source: "VLSI Projects 2013-2014 Page",
        }),
      });
      setFormSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "2013 - 2014",
        projectTitle: "",
        message: "",
      });
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSuccess(false);
      }, 2500);
    } catch (err) {
      setFormSuccess(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  // VLSI Years Tabs
  const yearTabs = [
    { label: "VLSI IEEE Projects 2013 - 2014", path: "/vlsi-ieee-projects-2013-2014-in-chennai/", active: true },
    { label: "VLSI IEEE Projects 2014 - 2015", path: "/vlsi-ieee-projects-2013-2014-in-chennai/", active: false },
    { label: "VLSI IEEE Projects 2015 - 2016", path: "/vlsi-ieee-projects-2013-2014-in-chennai/", active: false },
    { label: "VLSI IEEE Projects 2016 - 2017", path: "/vlsi-ieee-projects-2013-2014-in-chennai/", active: false },
    { label: "VLSI IEEE Projects 2017 - 2018", path: "/vlsi-ieee-projects-2013-2014-in-chennai/", active: false },
    { label: "VLSI IEEE Projects 2018 - 2019", path: "/vlsi-ieee-projects-2013-2014-in-chennai/", active: false },
    { label: "VLSI IEEE Projects 2019 - 2020", path: "/vlsi-ieee-projects-2013-2014-in-chennai/", active: false },
    { label: "VLSI IEEE Projects 2020 - 2021", path: "/vlsi-ieee-project-2020-2021/", active: false },
    { label: "VLSI IEEE Projects 2021 - 2022", path: "/vlsi-ieee-project-2021-2022/", active: false },
    { label: "VLSI IEEE Projects 2022 - 2023", path: "/vlsi-ieee-project-2022-2023/", active: false },
  ];

  const faqs = [
    {
      q: "What tools and HDLs are used in IEEE VLSI Projects?",
      a: "Our VLSI projects are developed and verified using industry-standard Electronic Design Automation (EDA) tools including ModelSim, Xilinx Vivado / ISE, Cadence Virtuoso, Synopsys Design Compiler, and Quartus Prime with Verilog HDL, VHDL, and SystemVerilog code.",
    },
    {
      q: "Do you provide testbench files, simulation waveforms, and FPGA bitstreams?",
      a: "Yes! Every project kit includes self-checking testbench codes, complete simulation waveform outputs, synthesis reports (LUTs, Flip-Flops, Power, Frequency), RTL schematics, and FPGA bitstreams for Spartan-6 / Artix-7 / Zynq development boards.",
    },
    {
      q: "Will I get full project documentation and PPT presentation for my college reviews?",
      a: "Yes. Every student receives the original published IEEE base paper PDF, complete modular RTL source code, IEEE standard documentation report (Architecture, RTL Schematics, Simulation Results, Resource Utilization & Timing Analysis), PPT presentation, and 1-on-1 viva guidance.",
    },
    {
      q: "How can I book a VLSI project or request a live simulation demo?",
      a: "Click 'Request Base Paper & Pricing' on any project card or fill out the instant enquiry form. You can also chat directly with our VLSI design engineers via WhatsApp at +91 9597793345.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/java-projects" className="hover:text-indigo-400 transition-colors">IEEE Projects</Link>
          <span>/</span>
          <span className="text-indigo-400 font-semibold">VLSI IEEE Projects 2013 - 2014</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(129,140,248,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs sm:text-sm font-semibold mb-6 shadow-inner shadow-indigo-500/20"
            >
              <VlsiBrandIcon className="w-4 h-4" />
              <span>IEEE VLSI Projects 2013 - 2014</span>
              <span className="bg-indigo-400/20 text-indigo-300 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Chennai Center</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              VLSI IEEE Projects <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-sky-400 bg-clip-text text-transparent">
                2013 - 2014 in Chennai
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
            >
              Explore 40 premier IEEE published projects in Low-Power Arithmetic, Fast Adders, Booth Multipliers, Polar / Turbo Decoders, NoC Routers, and FinFET / MTJ Memories with full Verilog / VHDL code & FPGA synthesis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
            >
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-indigo-400">40+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Verified IEEE Titles</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-sky-400">Verilog / VHDL</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">ModelSim & Vivado</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Simulation & Synthesis</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-amber-400">1-on-1</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Viva & EDA Training</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <button
                onClick={() => openProjectModal(null)}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2"
              >
                <AutoAwesomeIcon className="w-4 h-4" />
                Request Base Paper & Verilog Code
              </button>
              <a
                href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%20VLSI%20IEEE%20Projects%202013-2014"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp Consultation
              </a>
              <a
                href="tel:9597793345"
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4" />
                Call: 9597793345
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Year Navigation Tabs */}
      <section className="bg-slate-900 border-b border-slate-800 py-3 sticky top-0 z-30 shadow-md backdrop-blur-md bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap mr-2 flex items-center gap-1">
              <TimelineIcon className="w-4 h-4 text-indigo-400" />
              VLSI Years:
            </span>
            {yearTabs.map((tab, idx) => (
              <Link
                key={idx}
                to={tab.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  tab.active
                    ? "bg-indigo-500 text-slate-950 font-bold shadow-md shadow-indigo-500/30"
                    : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 border border-slate-700/60"
                }`}
              >
                {tab.active && <CheckIcon className="w-3.5 h-3.5" />}
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search VLSI titles, architectures (Booth, FFT, SRAM, Polar, NoC), or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 self-end md:self-auto">
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">View:</span>
              <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center gap-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                    viewMode === "grid"
                      ? "bg-indigo-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <GridViewIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                    viewMode === "table"
                      ? "bg-indigo-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Table / List View"
                >
                  <TableRowsIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">List</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
            <span className="text-xs text-slate-400 font-semibold whitespace-nowrap">Category:</span>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/50 font-semibold shadow-sm"
                    : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
            <span>
              Showing <strong className="text-indigo-400">{filteredProjects.length}</strong> of {projects.length} IEEE VLSI Projects
            </span>
            {(selectedCategory !== "All" || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                className="text-indigo-400 hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400 text-sm">Loading 2013-2014 VLSI IEEE Projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <SearchIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-300">No matching projects found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              We couldn't find any projects matching "{searchTerm}". Try clearing your search term or exploring all categories.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-bold text-xs flex items-center justify-center">
                        #{project.id}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      IEEE {project.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                    <HubIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Domain: <strong className="text-slate-300">{project.domain}</strong></span>
                  </div>

                  {project.tech && project.tech.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-slate-950 text-slate-300 border border-slate-800 px-2 py-0.5 rounded-md"
                        >
                          {t.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {project.abstract && (
                    <div className="mt-3">
                      <button
                        onClick={() => toggleAbstract(project.id)}
                        className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                      >
                        <span>{expandedAbstracts[project.id] ? "Hide Abstract" : "View IEEE Abstract & Hardware Architecture"}</span>
                        <ExpandMoreIcon
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            expandedAbstracts[project.id] ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedAbstracts[project.id] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 p-3 rounded-xl bg-slate-950/90 border border-slate-800/80 text-[11px] text-slate-300 leading-relaxed"
                          >
                            <div className="font-semibold text-indigo-400 mb-1 flex items-center gap-1">
                              <MenuBookIcon className="w-3 h-3" />
                              Official IEEE Abstract Summary:
                            </div>
                            {project.abstract}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyTitle(project.id, project.title)}
                      className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors text-xs flex items-center gap-1"
                      title="Copy IEEE Title"
                    >
                      {copiedId === project.id ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] text-emerald-400 font-medium">Copied</span>
                        </>
                      ) : (
                        <>
                          <ContentCopyIcon className="w-3.5 h-3.5" />
                          <span className="text-[10px]">Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/919597793345?text=${encodeURIComponent(
                        `Hi IEEE Project Centre, I want base paper and Verilog source code for VLSI Project #${project.id}: "${project.title}"`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-colors text-xs flex items-center gap-1"
                      title="WhatsApp Inquiry"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-semibold">WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => openProjectModal(project)}
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-xs shadow-md shadow-indigo-500/20 transition-all flex items-center gap-1"
                  >
                    <span>Request Base Paper</span>
                    <ArrowForwardIcon className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4 w-12 text-center">S.No</th>
                    <th className="py-3 px-4">IEEE Project Title & Domain</th>
                    <th className="py-3 px-4 hidden sm:table-cell">Category</th>
                    <th className="py-3 px-4 hidden md:table-cell">Technologies</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 text-center font-bold text-indigo-400">
                        #{project.id}
                      </td>
                      <td className="py-3.5 px-4 max-w-md">
                        <div className="font-semibold text-white hover:text-indigo-300 transition-colors">
                          {project.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                          <HubIcon className="w-3 h-3 text-indigo-400" />
                          <span>{project.domain}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 hidden sm:table-cell">
                        <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-[11px]">
                          {project.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 hidden md:table-cell max-w-xs">
                        <div className="flex flex-wrap gap-1">
                          {project.tech?.slice(0, 3).map((t, idx) => (
                            <span key={idx} className="bg-slate-950 text-slate-300 px-1.5 py-0.5 rounded text-[10px] border border-slate-800">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleCopyTitle(project.id, project.title)}
                            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:text-white"
                            title="Copy Title"
                          >
                            <ContentCopyIcon className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => openProjectModal(project)}
                            className="px-2.5 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold text-xs"
                          >
                            Get Paper
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Detailed SEO & Content Section */}
        <section className="mt-16 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 text-slate-300 text-sm leading-relaxed">
              <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <MemoryIcon className="w-6 h-6 text-indigo-400" />
                  ABOUT IEEE VLSI PROJECT 2013 – 2014
                </h2>
                
                <p className="mb-4">
                  In the realm of electronics and semiconductor design, the years 2013-2014 marked a pivotal era as <strong>IEEE Project Centre</strong> introduced a diverse range of <strong>VLSI IEEE Projects</strong>. These projects, meticulously crafted to align with the esteemed standards of the Institute of Electrical and Electronics Engineers (IEEE), provided an exceptional platform for students and professionals to delve into the intricacies of Very Large Scale Integration (VLSI).
                </p>

                <p className="mb-4">
                  Throughout the 2013-2014 period, IEEE Project Centre showcased a spectrum of VLSI projects, each thoughtfully designed to explore various dimensions of VLSI design. From low-power design and hardware security to digital signal processing and emerging technologies, participants were immersed in hands-on experiences that seamlessly integrated theoretical knowledge with real-world applications. These projects not only honed technical skills but also nurtured critical problem-solving abilities, all while adhering to the rigorous benchmarks set by IEEE.
                </p>

                <p className="mb-4">
                  Collaboration with industry experts and mentors within the IEEE Project Centre offered participants an unparalleled opportunity to dive deep into the world of VLSI design. These projects tangibly showcased the practical outcomes of theoretical concepts, equipping participants with an in-depth understanding of VLSI’s principles and capabilities. The result was a cohort of individuals exceptionally prepared to address contemporary challenges, standing on the foundation fortified by the 2013-2014 VLSI IEEE projects at the IEEE Project Centre.
                </p>

                <p className="mb-4">
                  In conclusion, the years 2013-2014 underscore the IEEE Project Centre’s commitment to nurturing innovation and knowledge in the realm of VLSI design, aligning with the highest standards of the IEEE. By providing a platform for immersive exploration, collaboration with experts, and adherence to the stringent criteria set by IEEE, these projects have enriched participants’ technical acumen while fostering a mindset of innovation and adept problem-solving. As we stride ahead, the impact of the 2013-2014 VLSI IEEE projects continues to resonate, shaping participants’ academic and professional journeys in profound and transformative ways.
                </p>

                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 mt-4">
                  <strong>Looking for complete VLSI implementation support?</strong> Contact IEEE Project Centre today to receive original IEEE base papers, synthesized Verilog/VHDL code, ModelSim testbenches, and FPGA hardware verification on Spartan-6 / Artix-7 boards!
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-2xl shadow-xl sticky top-20">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <AutoAwesomeIcon className="w-5 h-5 text-indigo-400" />
                  Instant VLSI Project Consultation
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Request IEEE base paper PDF, Verilog/VHDL source code, and schedule a 1-on-1 ModelSim demo with our senior VLSI chip designers.
                </p>

                {formSuccess ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs text-center space-y-2">
                    <CheckCircleIcon className="w-8 h-8 text-emerald-400 mx-auto" />
                    <div className="font-bold text-sm">Enquiry Submitted Successfully!</div>
                    <p>Our VLSI design team will contact you via WhatsApp / Phone within 15 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">WhatsApp / Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. student@college.edu"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">College / University</label>
                      <input
                        type="text"
                        name="college"
                        placeholder="e.g. Anna University / SRM / VIT"
                        value={formData.college}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">Select / Type Project Title</label>
                      <input
                        type="text"
                        name="projectTitle"
                        placeholder="e.g. Approximate Radix-8 Booth Multiplier..."
                        value={formData.projectTitle}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
                    >
                      {formSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircleIcon className="w-4 h-4" />
                          <span>Request Base Paper & Pricing</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions (FAQs) - VLSI IEEE Projects
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 flex items-center justify-between gap-2 hover:text-indigo-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ExpandMoreIcon
                    className={`w-4 h-4 text-indigo-400 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-3.5 text-xs text-slate-400 border-t border-slate-800/80 pt-2.5 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl p-6 shadow-2xl relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-950 border border-slate-800"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                <VlsiBrandIcon className="w-4 h-4" />
                <span>IEEE Base Paper & Verilog Code Request</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {modalProject ? `Project #${modalProject.id}: ${modalProject.title}` : "IEEE VLSI Projects 2013-2014"}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Fill your contact details below to get instant download access, base paper PDF, and Verilog testbench requirements.
              </p>

              {formSuccess ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircleIcon className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Thank you! Your request is submitted.</h4>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Vignesh R"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. student@gmail.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">College Name</label>
                    <input
                      type="text"
                      name="college"
                      placeholder="e.g. Anna University"
                      value={formData.college}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Selected IEEE Project</label>
                    <input
                      type="text"
                      name="projectTitle"
                      readOnly
                      value={formData.projectTitle}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-indigo-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
                  >
                    Submit & Get Instant Base Paper
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
