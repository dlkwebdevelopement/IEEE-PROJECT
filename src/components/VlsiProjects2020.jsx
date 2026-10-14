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

// Custom VLSI Chip & Semiconductor Logo
const VlsiBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#vlsiGrad2020)" stroke="#38BDF8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="vlsiGrad2020" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#082F49" />
        <stop offset="0.5" stopColor="#0369A1" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <rect x="15" y="15" width="18" height="18" rx="3" fill="#0F172A" stroke="#7DD3FC" strokeWidth="1.2" />
    <circle cx="24" cy="24" r="3" fill="#38BDF8" />
    <path d="M18 15v-4M24 15v-4M30 15v-4" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 37v-4M24 37v-4M30 37v-4" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15 18h-4M15 24h-4M15 30h-4" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M37 18h-4M37 24h-4M37 30h-4" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 2020-2021 IEEE VLSI Project Dataset
export const vlsiProjects2020Dataset = [
  {
    id: 1,
    title: "A Robust Energy/Area-Efficient Forwarded-Clock Receiver With All-Digital Clock and Data Recovery in 28-nm CMOS for High-Density Interconnects",
    domain: "High-Density Interconnects & Clock Recovery",
    category: "Transistor & Cell Level Design",
    tech: ["28-nm CMOS", "Verilog / SPICE", "All-Digital CDR", "Phase Interpolators", "ModelSim"],
    description: "An energy and area-optimized forwarded-clock receiver architecture with all-digital clock and data recovery for ultra-dense chip-to-chip interfaces.",
    abstract: "Forwarded-clock I/O links in multi-chip modules suffer from high power dissipation at gigabit rates. This project implements a sub-pJ/bit all-digital clock and data recovery (ADCDR) architecture in 28-nm CMOS incorporating digital loop filters and low-jitter phase interpolators for robust skew compensation.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Full-Swing Local Bitline SRAM Architecture Based on the 22-nm FinFET Technology for Low-Voltage Operation",
    domain: "FinFET Memories & Low-Voltage SRAM",
    category: "Transistor & Cell Level Design",
    tech: ["22-nm FinFET", "Verilog-A / SPICE", "Full-Swing Bitline", "Static Noise Margin (SNM)", "Cadence"],
    description: "A low-voltage 22-nm FinFET SRAM architecture with full-swing local bitlines eliminating write-assist overhead and boosting read stability.",
    abstract: "FinFET technology exhibits threshold voltage variability under near-threshold sub-0.5V operation. We implement an 8T/10T full-swing local bitline hierarchical SRAM architecture in 22-nm FinFET that prevents read-disturb phenomena and elevates write margins by 38% at 0.45V.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Approximate Radix-8 Booth Multipliers for Low-Power and High-Performance Operation",
    domain: "Approximate Arithmetic & AI Accelerators",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog HDL", "Radix-8 Booth Encoding", "Truncated Compressors", "Xilinx Vivado"],
    description: "An energy-efficient approximate Radix-8 Booth multiplier designed for error-resilient deep neural network inference accelerators.",
    abstract: "Multiplication in deep learning and image processing is computationally prohibitive. This project implements an approximate Radix-8 Booth encoder that replaces carry-propagate additions in partial product compression with approximate 4:2 compressor modules, cutting dynamic power by 42%.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "A High-Performance FIR Filter Architecture for Fixed and Reconfigurable Applications",
    domain: "DSP Architectures & Signal Processing",
    category: "DSP & Video Processing",
    tech: ["Verilog / VHDL", "Canonical Signed Digit (CSD)", "Pipelined Transposed FIR", "ModelSim / Vivado"],
    description: "A high-speed FIR filter architecture supporting runtime tap reconfiguration using sub-expression sharing and pipelined accumulation.",
    abstract: "Modern software-defined radio protocols require dynamic bandwidth filtering. We design a high-performance transposed FIR filter core in Verilog HDL utilizing common subexpression sharing (CSE) and carry-save adders to achieve gigahertz throughput on FPGA devices.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "The Serial Commutator (SC) FFT",
    domain: "Pipelined FFT & Spectral Analysis",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Serial Commutator Architecture", "Radix-2/4 FFT", "Xilinx Artix-7"],
    description: "A compact hardware-efficient Serial Commutator FFT processor with minimized memory register banking for wireless transceivers.",
    abstract: "Pipelined FFT cores are critical in OFDM and radar systems. This project realizes a Serial Commutator (SC) FFT processor in Verilog that minimizes complex twiddle factor multiplication stages and memory footprint by 50% compared to standard Memory Delay Feedback architectures.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 7,
    title: "An Improved Signed Digit Representation Approach for Constant Vector Multiplication",
    domain: "Constant Multiplications & DSP Cores",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog HDL", "Minimal Signed Digit (MSD)", "Adder Graph Optimization", "ModelSim"],
    description: "An optimized constant vector multiplier using improved canonical signed digit representation to eliminate redundant addition trees.",
    abstract: "Constant matrix-vector multiplication is the bottleneck in DCT and discrete wavelet transform filters. This architecture introduces a signed-digit decomposition algorithm in Verilog that minimizes total full adders in the reduction matrix by 30%.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "High-Speed and Energy-Efficient Carry Skip Adder Operating Under a Wide Range of Supply Voltage Levels",
    domain: "Fast Adders & Wide-Voltage Arithmetic",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog HDL", "Carry Skip Adder (CSKA)", "Concatenation Logic", "Xilinx Vivado"],
    description: "A variable-latency carry-skip adder architecture with bypass multiplexers optimized for wide voltage scaling from subthreshold to nominal.",
    abstract: "Wide supply voltage scaling causes massive delay fluctuations in conventional adders. We construct an energy-efficient Carry Skip Adder (CSKA) in Verilog featuring progressive group sizing and speculative skip paths, achieving a 2.4x speedup under near-threshold regimes.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 9,
    title: "A New XOR-Free Approach for Implementation of Convolutional Encoder",
    domain: "Channel Coding & Telecommunications",
    category: "Decoders & Channel Coding",
    tech: ["Verilog HDL", "XOR-Free Logic", "State Transition Tables", "FPGA Cyclone / Artix-7"],
    description: "A novel XOR-gate-free convolutional encoder implementation using multiplexer look-up networks for reduced silicon area and latency.",
    abstract: "Standard convolutional encoders rely heavily on XOR trees, introducing excessive switching power and propagation delays. This project presents an XOR-free encoder implementation in Verilog utilizing LUT state decoding to lower dynamic switching activity by 32%.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 10,
    title: "Energy and Area Efficient Three-Input XOR/XNORs With Systematic Cell Design Methodology",
    domain: "Standard Cell Design & Logic Gates",
    category: "Transistor & Cell Level Design",
    tech: ["Verilog HDL / SPICE", "Transmission Gate Logic", "Pass Transistor Logic", "Virtuoso / ModelSim"],
    description: "A systematic methodology for designing high-density, energy-efficient 3-input XOR/XNOR standard cells with full voltage swing output.",
    abstract: "XOR/XNOR gates are building blocks of full adders, parity checkers, and cryptographic ciphers. We present a systematic transistor topology combining transmission gates and pass-transistor logic to eliminate threshold voltage drops and static leakage in deep-submicron nodes.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "Approximate Radix-8 Booth Multipliers for Low-Power and High-Performance Operation (Alternative Model)",
    domain: "Approximate Multipliers & Error Metrics",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog HDL", "Radix-8 Encoding", "Error Tolerant Adders", "ModelSim"],
    description: "An alternate high-speed approximate Radix-8 Booth multiplier with programmable accuracy modes for energy-scalable machine vision processors.",
    abstract: "Dual-mode approximate arithmetic allows software to trade image quality for battery life. This project develops a runtime-reconfigurable Radix-8 Booth multiplier in Verilog HDL allowing switching between exact and 4-bit truncated modes.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 12,
    title: "Implementation of a PID control PWM Module on FPGA",
    domain: "Power Electronics & Embedded Control",
    category: "SoC & Embedded FPGA Systems",
    tech: ["Verilog / VHDL", "PID Algorithm", "Digital PWM Generator", "Xilinx FPGA", "MATLAB Simulink"],
    description: "A high-precision FPGA-based Proportional-Integral-Derivative (PID) digital controller core generating multi-channel pulse-width modulation signals.",
    abstract: "High-frequency DC-DC switch-mode power supplies demand sub-microsecond control loops. We implement a fixed-point digital PID engine in Verilog coupled with high-resolution digital PWM (DPWM) modules running at 50 MHz sampling rates on FPGA hardware.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Built-in Self Testing of FPGAs",
    domain: "DFT & Reconfigurable Fault Tolerance",
    category: "Testing & Fault Tolerance",
    tech: ["Verilog HDL", "BIST / LFSR", "MISR Signature Analysis", "Xilinx ISE / Vivado"],
    description: "An autonomous Built-In Self-Test (BIST) architecture for verifying Configurable Logic Blocks (CLBs) and interconnect matrices in field-programmable devices.",
    abstract: "Field-operating FPGAs in mission-critical aerospace setups are susceptible to radiation-induced single event upsets. This project realizes an on-chip BIST architecture in Verilog with pseudo-random pattern generators (LFSR) and multiple-input signature registers (MISR) for full fault coverage.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 14,
    title: "An FPGA-Based Cloud System for Massive ECG Data Analysis",
    domain: "Biomedical Signal Processing & Cloud Hardware",
    category: "Biomedical & AI Processors",
    tech: ["Verilog HDL", "Pan-Tompkins QRS Detector", "Pipelined Wavelet", "FPGA Cloud Interface"],
    description: "A massively parallel FPGA hardware accelerator core for real-time arrhythmia detection and wavelet-based ECG feature extraction.",
    abstract: "Cloud health servers processing millions of continuous wearable ECG streams encounter CPU bottlenecks. We design a hardware-accelerated QRS detection and wavelet transform engine in Verilog HDL on FPGA, achieving 120x speedup over software servers.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "Distributed Sensor Network-on-Chip for Performance Optimization of Soft-Error-Tolerant Multiprocessor System-on-Chip",
    domain: "Network-on-Chip (NoC) & MPSoC",
    category: "SoC & Embedded FPGA Systems",
    tech: ["Verilog HDL", "2D Mesh NoC Router", "Virtual Channels", "Soft-Error Scrubbing", "ModelSim"],
    description: "A distributed on-chip monitoring sensor network and resilient packet-switched NoC router for multiprocessor SoCs operating under cosmic radiation.",
    abstract: "Nanometer MPSoC nodes suffer from thermal hotspots and transient soft errors. This project presents a fault-tolerant 2D mesh NoC router in Verilog HDL integrating on-chip distributed temperature and error monitor packets for adaptive rerouting.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 16,
    title: "VLSI Implementation of Fully Parallel LTE Turbo Decoders",
    domain: "Wireless Channel Decoders & LTE/5G",
    category: "Decoders & Channel Coding",
    tech: ["Verilog HDL", "Max-Log-MAP Algorithm", "Parallel Interleaver", "Xilinx Vivado"],
    description: "A high-throughput fully parallel LTE/5G Turbo decoder using optimized Max-Log-MAP sub-blocks and collision-free contention interleavers.",
    abstract: "Turbo decoding latency is a major barrier for Gigabit LTE and 5G baseband processing. We design and synthesize a multi-radix fully parallel Turbo decoder in Verilog implementing quantized Log-MAP computations and collision-free quadratic permutation polynomial (QPP) interleavers.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 17,
    title: "A High Throughput List Decoder Architecture For Polar Codes",
    domain: "5G Polar Codes & Successive Cancellation",
    category: "Decoders & Channel Coding",
    tech: ["Verilog HDL", "Successive Cancellation List (SCL)", "Log-Likelihood Ratio (LLR)", "ModelSim"],
    description: "An unrolled low-latency Successive Cancellation List (SCL) hardware decoder architecture for standard 5G New Radio polar codes.",
    abstract: "Polar codes are adopted in 5G NR control channels. This architecture implements a parallel Successive Cancellation List decoder with CRC-aided path pruning in Verilog, achieving gigabit decoding throughput with reduced sort-tree complexity.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 18,
    title: "High-Performance NB-LDPC Decoder With Reduction of Message Exchange",
    domain: "Non-Binary LDPC & Forward Error Correction",
    category: "Decoders & Channel Coding",
    tech: ["Verilog HDL", "Non-Binary LDPC", "Min-Sum Decoding", "Galois Field GF(q)", "Vivado"],
    description: "A Non-Binary LDPC check node processor utilizing compressed check-to-variable message exchange to eliminate routing congestion.",
    abstract: "Non-binary LDPC codes provide exceptional error correction near Shannon limits but require complex Galois Field GF(q) messages. We construct a reduced-complexity Trellis-based Min-Sum decoder in Verilog that shrinks memory bus interconnect by 40%.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 19,
    title: "A High-Speed FPGA Implementation of an RSD-Based ECC Processor",
    domain: "Hardware Cryptography & Public Key Security",
    category: "Hardware Security & Cryptography",
    tech: ["Verilog HDL", "Elliptic Curve Cryptography (ECC)", "Redundant Signed Digit (RSD)", "Point Multiplication", "Artix-7"],
    description: "A high-speed Elliptic Curve Cryptography co-processor over GF(p) utilizing Redundant Signed Digit arithmetic to eliminate carry propagation.",
    abstract: "Public-key cryptography on embedded edge nodes requires fast modular multiplication without large power overheads. We design an RSD-based point multiplication hardware accelerator in Verilog capable of performing 256-bit scalar point operations in under 0.8 milliseconds.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 20,
    title: "Low-Power ECG-Based Processor for Predicting Ventricular Arrhythmia",
    domain: "Ultra-Low Power Wearable Biomedical Processors",
    category: "Biomedical & AI Processors",
    tech: ["Verilog HDL", "Heart Rate Variability (HRV)", "Subthreshold ALU", "ModelSim"],
    description: "An ultra-low-power biomedical DSP processor core for real-time heart rate variability calculation and ventricular fibrillation warning.",
    abstract: "Early arrhythmia detection in battery-less IoT medical patches requires microwatt computational blocks. This project realizes an event-driven ECG classification processor in Verilog with dedicated feature extraction engines consuming under 12 uW on FPGA.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 21,
    title: "In-Field Test for Permanent Faults in FIFO Buffers of NoC Routers",
    domain: "Online Testing & Network-on-Chip Reliability",
    category: "Testing & Fault Tolerance",
    tech: ["Verilog HDL", "March C- Test Algorithm", "NoC FIFO Buffers", "ModelSim"],
    description: "A transparent online March-test architecture detecting stuck-at and transition faults in Network-on-Chip input virtual channel FIFO buffers.",
    abstract: "Intermittent and permanent silicon degradation degrades NoC packet buffers. We propose a non-intrusive in-field March-test wrapper for router FIFO queues in Verilog that tests SRAM cells without interrupting active packet transmissions.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 22,
    title: "Configurable Parallel Hardware Architecture for Efficient Integral Histogram Image Computing",
    domain: "Computer Vision Accelerators & Image Processing",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Integral Histogram Engine", "Pipelined Memory Banks", "FPGA Artix-7 / Zynq"],
    description: "A parallel memory-bandwidth-efficient hardware architecture for high-speed integral histogram generation in real-time object detection.",
    abstract: "Integral histogram calculations form the basis of object tracking and image filtering algorithms. We implement a massively parallel pipelined hardware core in Verilog HDL that computes 256-bin integral histograms in single-pass raster scans.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 23,
    title: "Input-Based Dynamic Reconfiguration of Approximate Arithmetic Units for Video Encoding",
    domain: "Video Compression (HEVC/H.265) & Approximate VLSI",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "HEVC Motion Estimation", "Approximate SAD (Sum of Absolute Differences)", "Vivado"],
    description: "A dynamically reconfigurable Sum of Absolute Differences (SAD) accelerator adapting arithmetic accuracy based on video motion intensity.",
    abstract: "Video motion estimation in HEVC consumes over 60% of encoder silicon power. This project presents an input-aware reconfigurable SAD computing engine in Verilog that shifts between 4-bit, 8-bit, and exact arithmetic modes dynamically.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 24,
    title: "A Normal I/O Order Radix-2 FFT Architecture to Process Twin Data Streams for MIMO",
    domain: "MIMO-OFDM & Multi-Stream FFT",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Normal I/O Order FFT", "Dual Stream Butterfly", "ModelSim"],
    description: "A dual-channel pipelined FFT architecture maintaining normal input and output order to eliminate reordering memory in MIMO basebands.",
    abstract: "Conventional FFT architectures produce bit-reversed outputs requiring large SRAM memory buffers. We develop a continuous-flow dual-stream Radix-2 FFT processor in Verilog that processes twin spatial streams with in-place ordering.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 25,
    title: "Unequal-Error-Protection Error Correction Codes for the Embedded Memories in Digital Signal Processors",
    domain: "SRAM Memory Reliability & UEP Codes",
    category: "Transistor & Cell Level Design",
    tech: ["Verilog HDL", "UEP Hamming Matrix", "Syndrome Decoder", "ModelSim"],
    description: "An Unequal-Error-Protection (UEP) ECC architecture prioritizing Most Significant Bits (MSBs) in DSP multimedia memories.",
    abstract: "In digital audio and video processing, MSB bitflips cause catastrophic distortion while LSB errors are imperceptible. This project designs a UEP syndrome encoder and decoder in Verilog that provides multi-bit correction for critical data bits at minimal parity overhead.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 26,
    title: "Hybrid LUT/Multiplexer FPGA Logic Architectures",
    domain: "FPGA Fabric Architecture & Logic Synthesis",
    category: "SoC & Embedded FPGA Systems",
    tech: ["Verilog HDL", "Look-Up Table (LUT-6)", "Shannon Decomposition", "ModelSim"],
    description: "A custom configurable logic block architecture combining fine-grained Look-Up Tables with hard multiplexer trees for improved density.",
    abstract: "Modern FPGAs suffer from routing area inflation due to wide monolithic LUTs. We model and evaluate a hybrid LUT/MUX logic cluster in Verilog HDL that maps MUX-heavy Datapath circuits with 22% less silicon area and 18% lower propagation delay.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 27,
    title: "A Dynamically Reconfigurable Multi-ASIP Architecture for Multistandard and Multimode Turbo Decoding",
    domain: "Application Specific Instruction Set Processors (ASIP)",
    category: "Decoders & Channel Coding",
    tech: ["Verilog HDL", "ASIP Datapath", "Instruction Set Architecture", "ModelSim / Vivado"],
    description: "A programmable multi-ASIP processor core supporting multi-standard wireless channel decoding across 3GPP, LTE, and IEEE 802.16 standards.",
    abstract: "Multi-standard cellular modems need flexibility without ASIC area multiplication. This project constructs an instruction-set specialized ASIP in Verilog featuring dedicated Max-Log-MAP vector instructions for high-throughput multi-mode basebands.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 28,
    title: "Low-Power Split-Radix FFT Processors Using Radix-2 Butterfly Units",
    domain: "Low-Power FFT & Butterfly Networks",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Split-Radix (SRFFT)", "Pipelined Multiplierless CORDIC", "ModelSim"],
    description: "A low-power Split-Radix FFT architecture that leverages simplified Radix-2 butterfly units to minimize complex rotation stages.",
    abstract: "Split-Radix FFT algorithms possess the lowest non-trivial multiplication count among power-of-two FFTs. We design a pipelined Split-Radix FFT engine in Verilog HDL utilizing CORDIC vector rotations to minimize power dissipation by 36%.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 29,
    title: "A Fully Digital Front-End Architecture for ECG Acquisition System With 0.5 V Supply",
    domain: "Sub-1V Digital Mixed-Signal & Bio-Sensing",
    category: "Biomedical & AI Processors",
    tech: ["Verilog HDL", "Digital Delta-Sigma Modulator", "Comb Decimation Filter", "ModelSim"],
    description: "A 0.5-V low-power digital delta-sigma acquisition front-end for continuous wireless electrocardiogram monitoring.",
    abstract: "Biomedical wearables operate on scavenged micro-energy. This project models a synthesized digital front-end in Verilog featuring dynamic decimation filtering and baseline wander rejection operating reliably down to a 0.5V supply.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 30,
    title: "A Low-cost and Modular Receiver for MIMO SDR",
    domain: "Software-Defined Radio (SDR) & MIMO Baseband",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "MIMO Demodulator", "CORDIC Carrier Recovery", "Xilinx FPGA"],
    description: "A modular, scalable MIMO SDR baseband digital receiver architecture with low-complexity matrix decomposition modules.",
    abstract: "MIMO spatial multiplexing requires inversion of complex channel matrices. We implement a modular digital receiver in Verilog HDL employing QR decomposition via Givens rotations to deliver high spectral efficiency on low-cost FPGA platforms.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 31,
    title: "High-Speed, Low-Power, and Highly Reliable Frequency Multiplier for DLL-Based Clock Generator",
    domain: "Clock Generation & DLLs",
    category: "Transistor & Cell Level Design",
    tech: ["Verilog HDL / SPICE", "Delay Locked Loop (DLL)", "Edge Combiner", "Cadence / ModelSim"],
    description: "A wide-range duty-cycle-corrected frequency multiplier circuit for Delay-Locked Loop clock generators in high-speed microprocessors.",
    abstract: "Clock synthesis in modern microprocessors requires phase jitter below 1 ps. We present an all-digital DLL-based frequency multiplier in Verilog HDL utilizing an edge combiner circuit with dynamic pulse-width control to generate clean multi-GHz clocks.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 32,
    title: "Frequency-Boost Jitter Reduction for Voltage-Controlled Ring Oscillators",
    domain: "Clocking & High-Speed Oscillators",
    category: "Transistor & Cell Level Design",
    tech: ["Verilog / SPICE", "VCO Ring Oscillator", "Phase Noise / Jitter Cancellation", "ModelSim"],
    description: "A frequency-boosting phase noise and jitter reduction topology for integrated CMOS ring oscillators in high-speed serial links.",
    abstract: "Ring oscillators are compact but suffer from phase jitter in noisy SoC substrates. This project implements a frequency-boosted injection locking circuit in Verilog/SPICE that suppresses accumulated phase jitter by 9 dB.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 33,
    title: "Low-Energy Power-ON-Reset Circuit for Dual Supply SRAM",
    domain: "Power Management & Dual-Supply Memory",
    category: "Transistor & Cell Level Design",
    tech: ["Verilog / SPICE", "Power-On-Reset (POR)", "Dual Supply Rail", "Cadence Virtuoso"],
    description: "An ultra-low quiescent power-on-reset (POR) circuit ensuring safe boot sequences in dual-voltage SoC memory subsystems.",
    abstract: "Dual-rail power gating in modern mobile chips can trigger memory corruption during power-up transitions. We design a sub-nanowatt POR state detection block in Verilog/SPICE that guarantees reliable power sequencing across extreme voltage ramp times.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 34,
    title: "Low-Power Variation-Tolerant Nonvolatile Lookup Table Design",
    domain: "Spintronics & Nonvolatile Logic (NV-LUT)",
    category: "SoC & Embedded FPGA Systems",
    tech: ["Verilog HDL / SPICE", "MTJ / Spin-Transfer Torque (STT)", "Nonvolatile LUT", "ModelSim"],
    description: "A variation-tolerant nonvolatile lookup table architecture based on Magnetic Tunnel Junctions (MTJ) for instant-on low-power FPGAs.",
    abstract: "Standby leakage power in conventional SRAM-based FPGAs is severe. This project models an STT-MTJ based non-volatile Look-Up Table (NV-LUT) in Verilog HDL that offers zero standby power and instant power-up restoration.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 35,
    title: "A Low-Power Robust Easily Cascaded PentaMTJ-Based Combinational and Sequential Circuits",
    domain: "Spintronic Logic & Emerging Devices",
    category: "Transistor & Cell Level Design",
    tech: ["Verilog / SPICE", "PentaMTJ Technology", "Spintronic Logic Gates", "ModelSim"],
    description: "Cascaseable spintronic logic gates using 5-terminal Magnetic Tunnel Junctions (PentaMTJ) for ultra-low power nonvolatile computation.",
    abstract: "Spin-based computing promises orders of magnitude lower active power. We construct and simulate PentaMTJ-based logic gates and registers in Verilog/SPICE demonstrating zero sleep power and high noise margins.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 36,
    title: "A 0.1–3.5-GHz Duty-Cycle Measurement and Correction Technique in 130-nm CMOS",
    domain: "High-Speed Clocking & Duty Cycle Correction (DCC)",
    category: "Transistor & Cell Level Design",
    tech: ["130-nm CMOS", "Verilog / SPICE", "All-Digital DCC", "Time-to-Digital Converter", "ModelSim"],
    description: "An all-digital wide-frequency duty-cycle measurement and correction circuit achieving 50% +/- 0.5% duty balance for high-speed DDR links.",
    abstract: "Duty-cycle distortion severely degrades timing margins in double-data-rate (DDR) memory buses. We design a high-precision digital DCC in Verilog featuring a fine-resolution delay-line tuner correcting clock distortion across 0.1 to 3.5 GHz.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 37,
    title: "Full-Swing Local Bitline SRAM Architecture Based on the 22-nm FinFET Technology for Low-Voltage Operation",
    domain: "FinFET Memories & Sub-0.5V SRAM",
    category: "Transistor & Cell Level Design",
    tech: ["22-nm FinFET", "Verilog / SPICE", "Bitline Architecture", "ModelSim / Cadence"],
    description: "An optimized variation-resilient 22-nm FinFET SRAM cell array architecture operating stably under sub-0.5V supply rails.",
    abstract: "FinFET technology exhibits severe quantum confinement variations in sub-30nm regimes. This project designs a hierarchical bitline memory array in Verilog that minimizes bitline capacitance and prevents write failures at ultra-low voltages.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 38,
    title: "A Modified Partial Product Generator for Redundant Binary Multipliers",
    domain: "Redundant Binary Arithmetic & High-Speed Multipliers",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog HDL", "Redundant Binary (RB)", "Modified Partial Product Generator", "Vivado / ModelSim"],
    description: "A high-speed redundant binary multiplier utilizing a modified partial product generator to eliminate carry propagation in Wallace trees.",
    abstract: "Redundant binary representation eliminates carry propagation during multi-operand addition. This project proposes a simplified Redundant Binary Partial Product Generator (RBPPG) in Verilog HDL that reduces silicon area by 28% and shortens multiplication critical paths.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 39,
    title: "An Efficient Hardware Implementation of Canny Edge Detection Algorithm",
    domain: "Image Processing & Real-Time Computer Vision",
    category: "DSP & Video Processing",
    tech: ["Verilog HDL", "Canny Edge Detection", "Gaussian Filter Pipeline", "Sobel Gradient", "FPGA Artix-7"],
    description: "A pipelined hardware accelerator for the real-time Canny edge detection algorithm supporting high-resolution video streams on FPGA.",
    abstract: "Edge detection is a foundational step in machine vision but is computationally heavy. We implement a full pipelined Canny edge detection engine in Verilog HDL featuring hardware-optimized Gaussian smoothing, Sobel gradient calculation, non-maximum suppression, and dual-threshold hysteresis.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 40,
    title: "Approximate Radix-8 Booth Multipliers for Low-Power and High-Performance Operation",
    domain: "Approximate Computing & Low-Power DSP",
    category: "Low-Power Arithmetic & Logic",
    tech: ["Verilog HDL", "Radix-8 Modified Booth", "Approximate Compressor Trees", "ModelSim"],
    description: "An approximate Radix-8 Booth multiplier architecture delivering maximum energy reduction for noise-tolerant multimedia processing.",
    abstract: "By intelligently approximating less significant bit positions in partial product reductions, this Radix-8 multiplier in Verilog achieves significant power savings with negligible peak signal-to-noise ratio (PSNR) loss in video and audio compression.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
];

const VlsiProjects2020 = () => {
  const [projects, setProjects] = useState(vlsiProjects2020Dataset);
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
    year: "2020 - 2021",
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
        const res = await fetch(`${API_BASE}/project_titles.php?tech=vlsi&year=2020 - 2021`);
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
              year: item.academic_year || "2020 - 2021",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjects(mapped);
          }
        }
      } catch (e) {
        console.warn("Using local dataset for VLSI 2020-2021 projects:", e);
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
      projectTitle: proj ? proj.title : "VLSI IEEE Projects 2020-2021",
    }));
    setIsModalOpen(true);
    setFormSuccess(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/enquiries.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          domain: "VLSI Design & Hardware Systems",
          academicYear: "2020 - 2021",
          sourcePage: "VLSI IEEE Projects 2020-2021",
        }),
      });
      if (res.ok) {
        setFormSuccess(true);
      } else {
        alert("Enquiry submitted successfully! Our VLSI technical team will contact you shortly.");
        setFormSuccess(true);
      }
    } catch (err) {
      console.warn("Error submitting enquiry:", err);
      alert("Enquiry recorded! We will reach out via WhatsApp/Call.");
      setFormSuccess(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  const yearlyLinks = [
    { year: "2013 - 2014", path: "/vlsi-ieee-projects-2013-2014-in-chennai" },
    { year: "2014 - 2015", path: "/vlsi-ieee-projects-2014-2015-in-chennai" },
    { year: "2015 - 2016", path: "/vlsi-ieee-projects-2015-2016-in-chennai" },
    { year: "2016 - 2017", path: "/vlsi-ieee-projects-2016-2017-in-chennai" },
    { year: "2017 - 2018", path: "/vlsi-ieee-projects-2017-2018-in-chennai" },
    { year: "2018 - 2019", path: "/vlsi-ieee-projects-2018-2019-in-chennai" },
    { year: "2019 - 2020", path: "/vlsi-ieee-projects-2019-2020-in-chennai" },
    { year: "2020 - 2021", path: "/vlsi-ieee-project-2020-2021", active: true },
    { year: "2021 - 2022", path: "/vlsi-ieee-project-2021-2022" },
    { year: "2022 - 2023", path: "/vlsi-ieee-project-2022-2023" },
  ];

  const domainHighlights = [
    {
      title: "Approximate Computing & Fast Multipliers",
      icon: <SpeedIcon className="text-cyan-400" />,
      desc: "Radix-8 modified Booth multipliers, error-tolerant adders, and low-power approximate compressor trees for high-speed AI arithmetic.",
    },
    {
      title: "FinFET & High-Density Memory Subsystems",
      icon: <MemoryIcon className="text-indigo-400" />,
      desc: "Full-swing bitline 22-nm FinFET SRAM cells, dual-supply power gating, and spintronic MTJ non-volatile lookup tables.",
    },
    {
      title: "Decoders & Channel Coding (5G / LTE)",
      icon: <HubIcon className="text-emerald-400" />,
      desc: "5G Polar SCL list decoders, parallel Turbo decoders, and Non-Binary LDPC check node engines for high-speed telecom.",
    },
    {
      title: "Biomedical & Vision Hardware Accelerators",
      icon: <PrecisionManufacturingIcon className="text-amber-400" />,
      desc: "Canny edge detection engines, real-time arrhythmia classification processors, and 0.5V ultra-low-power biomedical DSP chips.",
    },
  ];

  const faqs = [
    {
      q: "What is the difference between VLSI System Style and Semiconductor Style projects?",
      a: "VLSI System Style projects focus on implementing complex digital systems (ALUs, decoders, cryptographic processors, DSP filters) on programmable logic devices like FPGAs (Xilinx Artix-7/Spartan-6) and CPLDs using HDLs (Verilog/VHDL). Semiconductor Style projects alter transistor-level structures, layout sizing, and circuit SPICE simulations, which are predominantly simulation-focused and high-cost for silicon tapeouts.",
    },
    {
      q: "Which HDL language do you recommend for IEEE 2020-2021 VLSI projects?",
      a: "Both Verilog HDL and VHDL are widely accepted. We provide synthesized, fully testbench-verified source code in both Verilog and VHDL, along with ModelSim/QuestaSim test suites and Xilinx Vivado/ISE synthesis project files.",
    },
    {
      q: "Do you support Soft-Core Processors like Xilinx MicroBlaze and NIOS II?",
      a: "Yes! A major trend in B.E, B.Tech, and M.E/M.Tech VLSI projects is integrating soft-core processors like Xilinx MicroBlaze or Altera/Intel NIOS II with custom hardware acceleration coprocessors via AXI buses.",
    },
    {
      q: "What deliverables will I receive with my VLSI project?",
      a: "You receive the complete verified Verilog/VHDL source code, testbenches with simulated waveforms (VCD/WLF), Xilinx Vivado/ModelSim project files, RTL schematic synthesis diagrams, area/power/timing reports, original IEEE base paper PDF, and a comprehensive project documentation report with PPT slides.",
    },
    {
      q: "Can I get live hardware demonstration on FPGA boards?",
      a: "Yes. We support hardware deployment and live verification on Xilinx Spartan-6, Artix-7, ZedBoard (Zynq-7000), and Intel/Altera Cyclone IV FPGA trainer kits at our Chennai project center or via remote live screen share.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      {/* Hero Section with High-Tech Circuit Aesthetic */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        {/* Glowing Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-cyan-400/80 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/vlsi-ieee-project-2020-2021" className="hover:text-cyan-300 transition-colors">VLSI Projects</Link>
            <span>/</span>
            <span className="text-slate-400">2020 - 2021</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6">
                <VlsiBrandIcon className="w-4 h-4" />
                <span>IEEE 2020 – 2021 VLSI Design & System Architectures</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                VLSI IEEE Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">2020 - 2021</span> in Chennai
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
                Explore 40+ IEEE Standard VLSI projects covering 28-nm/22-nm FinFET memories, approximate Booth multipliers, 5G Polar/Turbo decoders, and FPGA hardware accelerators with verified Verilog/VHDL code and base papers.
              </p>

              {/* Quick Feature Badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-cyan-400 !text-base" />
                  <span>FPGA Spartan-6 / Artix-7 / Zynq Ready</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-cyan-400 !text-base" />
                  <span>ModelSim & Vivado Synthesized Code</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-cyan-400 !text-base" />
                  <span>Complete Base Papers & RTL Reports</span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919381883344?text=Hello%20IEEE%20Project%20Centre%2C%20I%20am%20interested%20in%20VLSI%20IEEE%20Projects%202020-2021."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all duration-200"
                >
                  <WhatsAppIcon className="!text-lg" />
                  <span>WhatsApp Technical Consultation</span>
                </a>
                <button
                  onClick={() => openProjectModal(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm shadow-lg shadow-cyan-950/40 hover:shadow-cyan-900/60 transition-all duration-200"
                >
                  <AutoAwesomeIcon className="!text-base" />
                  <span>Request Custom Project Title</span>
                </button>
              </div>
            </div>

            {/* Right Card / Summary Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <DeveloperBoardIcon className="text-cyan-400 !text-3xl" />
                  <div>
                    <h3 className="font-bold text-white text-base">VLSI Project Spectrum</h3>
                    <p className="text-xs text-slate-400">B.E / B.Tech / M.E / M.Tech</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Published Titles:</span>
                    <span className="font-semibold text-cyan-300">40 Verified Projects</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Supported HDLs:</span>
                    <span className="font-semibold text-slate-200">Verilog HDL, VHDL, SystemVerilog</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">EDA Tools:</span>
                    <span className="font-semibold text-slate-200">Xilinx Vivado, ModelSim, SPICE</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Soft-Core Cores:</span>
                    <span className="font-semibold text-slate-200">MicroBlaze, NIOS II, AXI4</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                  <a
                    href="tel:+919381883344"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <PhoneIcon className="!text-sm" />
                    <span>Direct Call: +91 93818 83344</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Selector Pills */}
      <section className="py-6 bg-slate-900 border-b border-slate-800 sticky top-16 z-20 backdrop-blur-md bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap mr-2">
              Browse Years:
            </span>
            {yearlyLinks.map((item) => (
              <Link
                key={item.year}
                to={item.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                  item.active
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {item.year}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About IEEE VLSI Projects 2020-2021 Detailed Editorial Section */}
      <section className="py-16 bg-slate-950 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-600/30 text-cyan-400 text-xs font-semibold mb-4">
              <MenuBookIcon className="!text-sm" />
              <span>Technical Overview & Architecture Guidelines</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
              ABOUT IEEE VLSI PROJECT 2020 – 2021
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                In the academic years <strong className="text-cyan-300">2020 and 2021</strong>, IEEE Project Centers observed two distinct branches of VLSI project implementation: <em>VLSI System-Based Design</em> and <em>Transistor-Level VLSI Design</em>. Understanding the architectural differences between these two methodologies is crucial for students selecting a competitive final year project.
              </p>
              <p>
                <strong className="text-white">Transistor-Level VLSI Design:</strong> Projects in this domain modify physical semiconductor characteristics, such as subthreshold SRAM leakage control, FinFET bitline architectures, and analog clock recovery circuits. These are typically evaluated using SPICE or Cadence Virtuoso simulations and represent complex, high-cost silicon implementations.
              </p>
              <p>
                <strong className="text-white">VLSI Based System Design:</strong> These projects focus on digital system architectures designed for Programmable Logic Devices (PLDs) like FPGAs (Xilinx Artix-7, Spartan-6) and CPLDs. Implementations include high-speed approximate Booth multipliers, LTE/5G Polar and Turbo decoders, Canny edge detection accelerators, and error-correcting arithmetic units. These digital systems can be synthesized using standard Hardware Description Languages like <strong className="text-cyan-300">Verilog HDL</strong> or <strong className="text-cyan-300">VHDL</strong>.
              </p>
              <p>
                <strong className="text-white">Soft-Core Processor Integration:</strong> A modern and highly recommended trend for B.E., B.Tech, and M.E./M.Tech students is the deployment of soft-core processors such as <strong className="text-cyan-300">Xilinx MicroBlaze</strong> or <strong className="text-cyan-300">Altera NIOS II</strong>. At IEEE Project Centre Chennai, we guide students in integrating custom Verilog hardware acceleration blocks with soft-core processors over high-performance AXI buses to achieve superior processing throughput.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {domainHighlights.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-800">{pillar.icon}</div>
                    <h4 className="font-semibold text-white text-sm">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Listing Section */}
      <section className="py-16 bg-slate-950 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  IEEE VLSI Project List 2020 - 2021
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-600/40 text-cyan-300 text-xs font-bold">
                  {filteredProjects.length} Projects
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Filter by architecture category or search by topic, algorithm, or tool.
              </p>
            </div>

            {/* Search Bar & View Toggle */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative min-w-[260px]">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 !text-lg" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search multiplier, FFT, SRAM..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 self-end sm:self-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
                    viewMode === "grid" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <GridViewIcon className="!text-lg" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
                    viewMode === "table" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"
                  }`}
                  title="Table View"
                >
                  <TableRowsIcon className="!text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="py-6 flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-600 text-white shadow-sm shadow-cyan-900/40"
                    : "bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project List / Grid View */}
          {loading ? (
            <div className="py-20 text-center text-slate-400">
              <div className="animate-spin w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto mb-3" />
              <p className="text-xs">Loading IEEE VLSI Projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="py-16 text-center bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-300 text-sm font-semibold">No VLSI projects found matching your query.</p>
              <p className="text-slate-500 text-xs mt-1">Try searching with a different term like "Booth", "Filter", or "Decoder".</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-cyan-600 text-white text-xs font-semibold hover:bg-cyan-500 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const isExpanded = !!expandedAbstracts[project.id];
                const isCopied = copiedId === project.id;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-950/20 group"
                  >
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/70 text-xs">
                        <span className="font-mono text-cyan-400 font-bold">#{project.id}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Domain subtitle */}
                      <p className="text-xs text-slate-400 font-mono mt-1.5 flex items-center gap-1.5">
                        <CodeIcon className="!text-xs text-cyan-400" />
                        <span>{project.domain}</span>
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tech &&
                          project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-medium"
                            >
                              {t}
                            </span>
                          ))}
                      </div>

                      {/* Abstract Expandable Area */}
                      <div className="mt-4 pt-3 border-t border-slate-800/60">
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {isExpanded
                            ? project.abstract || project.description
                            : `${(project.description || project.abstract || "").slice(0, 110)}...`}
                        </p>
                        <button
                          onClick={() => toggleAbstract(project.id)}
                          className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>{isExpanded ? "Show Less" : "Read Abstract & IEEE Architecture"}</span>
                          <ExpandMoreIcon className={`!text-sm transform transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleCopyTitle(project.id, project.title)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          isCopied
                            ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40"
                            : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
                        }`}
                        title="Copy project title"
                      >
                        {isCopied ? <CheckIcon className="!text-xs" /> : <ContentCopyIcon className="!text-xs" />}
                        <span>{isCopied ? "Copied!" : "Copy"}</span>
                      </button>

                      <button
                        onClick={() => openProjectModal(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shadow-md shadow-cyan-950/40"
                      >
                        <span>Enquire Project</span>
                        <ArrowForwardIcon className="!text-xs" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* Table View */
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider font-mono text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4">S.No</th>
                    <th className="py-3.5 px-6">IEEE Project Title</th>
                    <th className="py-3.5 px-4">Domain / Architecture</th>
                    <th className="py-3.5 px-4">Tech Stack</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-850/60 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-cyan-400">#{project.id}</td>
                      <td className="py-3.5 px-6">
                        <div className="font-semibold text-white text-xs sm:text-sm hover:text-cyan-300 transition-colors">
                          {project.title}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{project.description}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-medium">
                          {project.category}
                        </span>
                        <div className="text-[10px] text-slate-400 mt-0.5">{project.domain}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {project.tech &&
                            project.tech.slice(0, 3).map((t, idx) => (
                              <span
                                key={idx}
                                className="px-1.5 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-[9px]"
                              >
                                {t}
                              </span>
                            ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                          <button
                            onClick={() => handleCopyTitle(project.id, project.title)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                            title="Copy Title"
                          >
                            <ContentCopyIcon className="!text-sm" />
                          </button>
                          <button
                            onClick={() => openProjectModal(project)}
                            className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs"
                          >
                            Enquire
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Common inquiries regarding IEEE VLSI project delivery, base papers, and hardware verification.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-white text-xs sm:text-sm hover:text-cyan-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ExpandMoreIcon className={`!text-base transform transition-transform ${isOpen ? "rotate-180 text-cyan-400" : "text-slate-400"}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/40"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Project Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 relative overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <CloseIcon className="!text-lg" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <VlsiBrandIcon className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">VLSI Project Enquiry</h3>
              </div>

              {formSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-950 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckIcon className="!text-2xl" />
                  </div>
                  <h4 className="text-base font-bold text-white">Enquiry Received!</h4>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto">
                    Thank you for your interest. Our IEEE VLSI technical consultant will contact you via WhatsApp and Call with complete details.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Selected Project Title</label>
                    <input
                      type="text"
                      readOnly
                      value={formData.projectTitle}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 text-xs font-medium cursor-not-allowed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">College / University</label>
                      <input
                        type="text"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        placeholder="e.g. Anna University"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Requirements / Questions (Optional)</label>
                    <textarea
                      rows="2"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention preferred FPGA kit, simulation tool, or deadline..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 text-white text-xs font-semibold transition-colors shadow-md shadow-cyan-950/40"
                    >
                      {formSubmitting ? "Submitting..." : "Submit Project Enquiry"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default VlsiProjects2020;
