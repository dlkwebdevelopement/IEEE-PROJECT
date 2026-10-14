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
import VisibilityIcon from "@mui/icons-material/Visibility";
import SecurityIcon from "@mui/icons-material/Security";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GrassIcon from "@mui/icons-material/Grass";
import FilterIcon from "@mui/icons-material/Filter";
import CodeIcon from "@mui/icons-material/Code";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TimelineIcon from "@mui/icons-material/Timeline";
import SpeedIcon from "@mui/icons-material/Speed";
import MemoryIcon from "@mui/icons-material/Memory";
import LockIcon from "@mui/icons-material/Lock";

// Custom 3D MATLAB (Matrix Laboratory) Logo
const MatlabBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#matlabGrad2020)" stroke="#F59E0B" strokeWidth="1.5" />
    <defs>
      <linearGradient id="matlabGrad2020" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EA580C" />
        <stop offset="0.5" stopColor="#D97706" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="meshGrad" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="1" stopColor="#FB923C" />
      </linearGradient>
    </defs>
    {/* 3D L-Shaped Membrane Surface (Classic MATLAB Logo Motif) */}
    <path
      d="M12 32C16 26 20 16 24 16C28 16 32 26 36 32C30 36 18 36 12 32Z"
      fill="url(#meshGrad)"
      opacity="0.9"
    />
    <path
      d="M24 16C24 24 24 32 24 34"
      stroke="#78350F"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
    <path
      d="M16 24C24 24 32 24 32 24"
      stroke="#78350F"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
    <circle cx="24" cy="16" r="2.5" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" />
    <circle cx="12" cy="32" r="2" fill="#FFFFFF" />
    <circle cx="36" cy="32" r="2" fill="#FFFFFF" />
  </svg>
);

// 2020-2021 IEEE MATLAB Project Dataset (11 Core Titles)
const matlabProjects2020Data = [
  {
    id: 1,
    title: "A smart phone image processing application for plant disease diagnosis",
    domain: "Agricultural Computer Vision & Mobile DIP",
    category: "Image Processing & Agriculture",
    tech: ["MATLAB", "Image Processing Toolbox", "K-Means Clustering", "GLCM Texture Extraction", "SVM Classifier"],
    description: "An automated mobile-compatible plant leaf pathology diagnostics algorithm segmenting infected regions and classifying bacterial, fungal, and viral blights.",
    abstract: "Early detection of agricultural crop disease is essential for food security. In this project, we develop an automated MATLAB pipeline that processes plant leaf smartphone photographs. The algorithm applies color space transformation (RGB to L*a*b*), extracts spatial texture features using Gray-Level Co-occurrence Matrix (GLCM), and classifies disease pathology using multiclass Support Vector Machines with over 96% accuracy.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Contrast Enhancement Based on Intrinsic Image Decomposition",
    domain: "Illumination & Reflectance Decomposition",
    category: "Image Enhancement & Restoration",
    tech: ["MATLAB", "Intrinsic Decomposition", "Retinex Theory", "Variational Optimization", "Color Constancy"],
    description: "A physical reflection decomposition technique separating illumination from reflectance layers to restore extreme underexposed and backlit scenes.",
    abstract: "Traditional histogram equalization amplifies sensor noise and causes color over-saturation. This project implements an intrinsic image decomposition model based on Retinex theory in MATLAB. By separating an image into illumination and reflectance layers using L1-norm regularization, the algorithm selectively compresses dynamic range and enhances visibility in low-light environments without introducing halo artifacts.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Features Classification Forest: A Novel Development that is Adaptable to Robust Blind Watermarking Techniques",
    domain: "Digital Watermarking & Random Forest",
    category: "Watermarking & Steganography",
    tech: ["MATLAB", "Discrete Wavelet Transform (DWT)", "Random Forest Classifier", "Blind Extraction", "Robust Security"],
    description: "A machine learning-guided blind watermarking scheme employing Random Classification Forests to select optimal invariant wavelet coefficients for watermark embedding.",
    abstract: "Robust digital watermarking protects intellectual property against signal processing and compression attacks. We propose an adaptive blind watermarking system where a Classification Forest identifies perceptually significant DWT sub-bands. The system embeds encrypted binary copyright signatures into host image coefficients with complete blind recovery and high Peak Signal-to-Noise Ratio (PSNR).",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Comments on Steganography Using Reversible Texture Synthesis",
    domain: "Information Hiding & Reversible Texture Synthesis",
    category: "Watermarking & Steganography",
    tech: ["MATLAB", "Texture Synthesis", "Reversible Data Hiding (RDH)", "Patch Quilting", "Entropy Decoding"],
    description: "An enhanced information hiding architecture synthesizing synthetic cover textures from tiny sample swatches to embed massive secret payloads reversibly.",
    abstract: "Conventional steganography modifies existing cover images, leaving detectable statistical artifacts. This project implements an advanced reversible texture synthesis steganography framework in MATLAB. Secret bits are embedded by regulating the synthesis of repetitive texture patches, allowing zero distortion to original textures during extraction.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "A robust image watermarking method based on DWT, DCT, and SVD using a new technique for correction of main geometric attacks",
    domain: "Hybrid Frequency Transform & Geometric Invariance",
    category: "Watermarking & Steganography",
    tech: ["MATLAB", "DWT", "DCT", "Singular Value Decomposition (SVD)", "Geometric Correction", "Zernike Moments"],
    description: "A hybrid frequency-domain watermarking algorithm resistant to rotation, cropping, scaling, and JPEG compression via geometric moment calibration.",
    abstract: "Geometric distortions (rotation, affine shearing, random cropping) desynchronize watermark detectors. We design a tri-hybrid DWT-DCT-SVD watermarking algorithm in MATLAB coupled with image normalization and Zernike moments. Even under severe geometric tampering and Gaussian noise, the system accurately extracts the embedded watermark with Normalized Cross-Correlation (NCC) above 0.98.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Master Print: Exploring the Vulnerability of Partial Fingerprint-Based Authentication Systems",
    domain: "Biometric Security & Fingerprint Vulnerability",
    category: "Biometrics & Security",
    tech: ["MATLAB", "Minutiae Matching", "Synthetic Fingerprint Generator", "Hill Climbing Algorithm", "Gabor Filtering"],
    description: "A biometric vulnerability assessment algorithm synthesizing MasterPrint partial impressions capable of matching large percentages of user templates.",
    abstract: "Partial fingerprint sensors on smart devices evaluate only localized friction ridge impressions. This project models the 'MasterPrint' dictionary attack in MATLAB using genetic algorithms and Hill Climbing optimization. By analyzing common minutiae clusters across fingerprint datasets (FVC2002/FVC2004), the simulator assesses false match rate (FMR) risks and formulates anti-spoofing countermeasures.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 8,
    title: "Image Forgery Localization via Integrating Tampering Possibility Maps",
    domain: "Digital Forensics & Tampering Localization",
    category: "Image Forensics & Security",
    tech: ["MATLAB", "Color Filter Array (CFA) Inconsistency", "Noise Inconsistency Map", "Markov Features", "Fusion Map"],
    description: "A passive image forensics detector fusing Color Filter Array (CFA) artifacts and localized sensor noise statistics to pinpoint spliced and copy-move forged zones.",
    abstract: "Digital image manipulation undermines forensic credibility. This project implements a passive multi-modal forgery localization framework in MATLAB. By computing localized CFA demosaicing residuals and sensor photo-response non-uniformity (PRNU) noise maps, the algorithm computes a joint Tampering Possibility Map that precisely delineates forged object boundaries.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "Deep Representation-Based Feature Extraction and Recovering for Finger-Vein Verification",
    domain: "Vascular Biometrics & Feature Recovery",
    category: "Biometrics & Security",
    tech: ["MATLAB", "Deep Feature Encoder", "Repeated Line Tracking", "Gabor Filter", "Sparse Reconstruction"],
    description: "A vascular biometric verification engine recovering degraded subcutaneous infrared finger-vein patterns through deep representation and sparse coding.",
    abstract: "Finger-vein recognition offers high spoof resistance but suffers from illumination unevenness and low contrast in infrared imagery. We build an automated finger-vein enhancement and feature recovery pipeline in MATLAB. The system extracts vascular network topologies and utilizes sparse dictionary representation to recover missing vein segments, yielding exceptionally low Equal Error Rate (EER).",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "A Memristive Multilayer Cellular Neural Network With Applications to Image Processing",
    domain: "Neuromorphic Cellular Neural Networks & Memristors",
    category: "Neural Networks & Neuromorphic DIP",
    tech: ["MATLAB", "Simulink", "Memristor Mathematical Model", "Cellular Neural Network (CNN)", "Edge Detection"],
    description: "A non-linear memristive cellular neural network architecture executing real-time ultra-fast edge detection and associative memory filtering in MATLAB.",
    abstract: "Memristors exhibit non-volatile resistance switching, making them ideal synapses for analog computing. In this project, a multi-layer Memristive Cellular Neural Network (M-CNN) is modeled and numerically solved in MATLAB/Simulink. The template weights are dynamically modulated by memristance to perform high-speed edge segmentation and noise removal on standard benchmark images.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "A survey on brain tumor detection using image processing techniques",
    domain: "Medical Imaging & Neuro-Oncology MRI Analysis",
    category: "Medical Image Processing",
    tech: ["MATLAB", "MRI Pre-processing", "Skull Stripping", "Fuzzy C-Means (FCM)", "Morphological Operations"],
    description: "A comparative medical imaging suite implementing skull stripping, Fuzzy C-Means clustering, and watershed segmentation for automated brain tumor boundary detection.",
    abstract: "Accurate brain tumor segmentation from Magnetic Resonance Images (MRI) is critical for surgical navigation. This project presents a complete MATLAB diagnostic benchmark executing anisotropic diffusion filtering, skull stripping, Fuzzy C-Means (FCM) clustering, and morphological contouring to accurately segment glioblastomas and meningiomas with Dice similarity index over 91%.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 12,
    title: "Retinal Disease Screening Through Local Binary Patterns",
    domain: "Ophthalmic Imaging & Diabetic Retinopathy",
    category: "Medical Image Processing",
    tech: ["MATLAB", "Fundus Image Processing", "Local Binary Patterns (LBP)", "Optic Disc Segmentation", "Random Forest / SVM"],
    description: "An automated fundus image screening system utilizing Local Binary Patterns (LBP) and blood vessel segmentation to screen for Diabetic Retinopathy and Glaucoma.",
    abstract: "Early screening of retinal fundus photographs prevents vision loss in diabetic patients. This project develops an automated ophthalmic diagnostic system in MATLAB. The pipeline extracts vascular arborization using 2D Gabor wavelets, computes multi-scale Local Binary Pattern (LBP) descriptors for microaneurysms and exudates, and classifies retinopathy severity grades.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
];

const yearNavigationLinks = [
  { label: "Matlab IEEE Projects 2022 - 2023", path: "/matlab-ieee-projects-2022-2023-in-chennai" },
  { label: "Matlab IEEE Projects 2021 - 2022", path: "/matlab-ieee-projects-2021-2022-in-chennai" },
  { label: "Matlab IEEE Projects 2020 - 2021", path: "/matlab-ieee-projects-2020-2021-in-chennai", active: true },
  { label: "Matlab IEEE Projects 2019 - 2020", path: "/matlab-ieee-projects-2019-2020-in-chennai" },
  { label: "Matlab IEEE Projects 2018 - 2019", path: "/matlab-ieee-projects-2018-2019-in-chennai" },
  { label: "Matlab IEEE Projects 2017 - 2018", path: "/matlab-ieee-projects-2017-2018-in-chennai" },
  { label: "Matlab IEEE Projects 2016 - 2017", path: "/matlab-ieee-projects-2016-2017-in-chennai" },
  { label: "Matlab IEEE Projects 2015 - 2016", path: "/matlab-ieee-projects-2015-2016-in-chennai" },
  { label: "Matlab IEEE Projects 2014 - 2015", path: "/matlab-ieee-projects-2014-2015-in-chennai" },
  { label: "Matlab IEEE Projects 2013 - 2014", path: "/matlab-ieee-projects-2013-2014-in-chennai" },
];

const domainCategories = [
  { label: "All Domains", value: "All", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
  { label: "Medical Image Processing", value: "Medical Image Processing", icon: <MedicalServicesIcon sx={{ fontSize: 18 }} /> },
  { label: "Biometrics & Security", value: "Biometrics & Security", icon: <FingerprintIcon sx={{ fontSize: 18 }} /> },
  { label: "Watermarking & Steganography", value: "Watermarking & Steganography", icon: <LockIcon sx={{ fontSize: 18 }} /> },
  { label: "Image Enhancement & Restoration", value: "Image Enhancement & Restoration", icon: <FilterIcon sx={{ fontSize: 18 }} /> },
  { label: "Image Forensics & Security", value: "Image Forensics & Security", icon: <SecurityIcon sx={{ fontSize: 18 }} /> },
  { label: "Neural Networks & Neuromorphic", value: "Neural Networks & Neuromorphic DIP", icon: <MemoryIcon sx={{ fontSize: 18 }} /> },
  { label: "Agriculture & Computer Vision", value: "Image Processing & Agriculture", icon: <GrassIcon sx={{ fontSize: 18 }} /> },
];

export default function MatlabProjects2020() {
  const [projectsList, setProjectsList] = useState(matlabProjects2020Data);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("table");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    academicYear: "2020 - 2021",
    projectRequirements: "IEEE MATLAB Projects 2020-2021 in Chennai",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=matlab&year=2020 - 2021`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "Digital Image Processing & MATLAB",
              category: item.category || "Medical Image Processing",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["MATLAB", "Image Processing Toolbox", "SVM", "GUI"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2020 - 2021",
              difficulty: item.difficulty || "Intermediate",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2020-2021 MATLAB projects");
      }
    };
    fetchDynamicProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsList.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projectsList, activeCategory, searchQuery]);

  const handleCopyTitle = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.captchaChecked) {
      alert("Please check the captcha verification box before submitting!");
      return;
    }
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        academic_year: formData.academicYear,
        project_requirements: formData.projectRequirements,
      };

      const res = await fetch(`${API_BASE}/enquiries.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Server submission error. Please reach out via WhatsApp or direct call.");
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-4 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs & Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <MatlabBrandIcon className="w-4 h-4" />
              IEEE MATLAB Projects 2020 – 2021
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
              Image Processing • Biometrics • Medical Diagnostics • Steganography • Simulink
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            IEEE MATLAB Projects{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">
              2020 – 2021
            </span>{" "}
            in Chennai
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mb-8 leading-relaxed">
            Delve into state-of-the-art Digital Image Processing (DIP), biometric authentication, DWT-DCT watermarking, medical MRI tumor detection, and neuromorphic memristive computing powered by MATLAB &amp; Simulink with complete source scripts, custom GUI interfaces, and IEEE base papers.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects-directory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-sm shadow-lg shadow-amber-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <SearchIcon sx={{ fontSize: 20 }} />
              Browse 2020-2021 MATLAB Titles
            </a>
            <a
              href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%20IEEE%20MATLAB%20Projects%202020-2021"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon sx={{ fontSize: 20 }} />
              WhatsApp MATLAB Expert
            </a>
            <a
              href="tel:+919597793345"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition"
            >
              <PhoneIcon sx={{ fontSize: 18 }} />
              +91 9597793345
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-amber-400">11+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">IEEE MATLAB 2020 Titles</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-orange-400">MATLAB R2020b</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Image Processing Toolbox</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-yellow-400">GUIDE / App Designer</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Interactive GUI Deliverable</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Code + Base Papers + PPT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Matrix Navigation */}
      <section className="py-6 bg-slate-900/90 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap pl-1">
              MATLAB Release Archives:
            </span>
            {yearNavigationLinks.map((yearLink, index) => (
              <Link
                key={index}
                to={yearLink.path}
                className={`text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 border ${
                  yearLink.active
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-400 shadow-md shadow-amber-600/30"
                    : "bg-slate-950/60 text-slate-300 border-slate-800 hover:border-amber-500/50 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {yearLink.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About IEEE 2020-2021 MATLAB Projects Section */}
      <section className="py-16 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <AutoAwesomeIcon sx={{ fontSize: 14 }} />
                Excellence in Computational Simulation
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
                ABOUT IEEE MATLAB PROJECT
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  In the realm of technological innovation, the years 2020-2021 marked a significant era as the IEEE Project Centre introduced an array of transformative projects within the domain of MATLAB. These projects, meticulously curated to align with the esteemed standards of the Institute of Electrical and Electronics Engineers (IEEE), provided an exceptional platform for students and professionals to explore the dynamic world of MATLAB applications.
                </p>
                <p>
                  Throughout the 2020-2021 period, the IEEE Project Centre showcased a diverse spectrum of MATLAB projects, each thoughtfully designed to delve into various dimensions of this powerful software. From developing advanced algorithms to solving intricate mathematical problems, participants were immersed in hands-on experiences that seamlessly integrated theoretical knowledge with real-world applications. These projects not only honed technical skills but also nurtured critical problem-solving abilities, all while upholding the rigorous benchmarks set by IEEE.
                </p>
                <p>
                  <strong>MATLAB Programming Experts, Mirrors our Immense Experience and Ability in MATLAB, Which Makes us Experts of Experts.</strong> We have World Class Specialists Working with us to Give their Skill in Your MATLAB Ventures. We Offer Help for MATLAB Based Activities, Assignments and Research Work. 2020 2021 MATLAB IEEE Projects In Chennai we Likewise Offer Help Internet Preparing and Mentoring on MATLAB.
                </p>
                <p>
                  The collaborative environment fostered by the IEEE Project Centre, involving industry experts and mentors, provided participants an unparalleled opportunity to immerse themselves in the realm of MATLAB. These projects tangibly showcased the practical outcomes of theoretical concepts, equipping participants with an in-depth understanding of MATLAB’s capabilities and versatility. The result was a cohort of individuals exceptionally prepared to address contemporary challenges, standing on the foundation fortified by the 2020-2021 IEEE MATLAB projects at the IEEE Project Centre.
                </p>
                <p>
                  In conclusion, the years 2020-2021 underscore the IEEE Project Centre’s dedication to nurturing innovation and knowledge in the realm of MATLAB applications, aligning with the highest standards of the IEEE. By providing a platform for immersive exploration, collaboration with experts, and adherence to the stringent criteria set by IEEE, these projects have enriched participants’ technical acumen while fostering a mindset of innovation and adept problem-solving. As we stride ahead, the impact of the 2020-2021 IEEE MATLAB projects continues to resonate, shaping participants’ academic and professional journeys in profound and transformative ways.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3 text-amber-400 font-bold text-sm mb-1">
                    <CheckCircleIcon sx={{ fontSize: 18 }} />
                    Interactive GUI Frontends
                  </div>
                  <p className="text-xs text-slate-400">
                    Interactive MATLAB App Designer &amp; GUIDE graphical interfaces for live image uploads, step-by-step feature visualizers, and confusion matrices.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3 text-orange-400 font-bold text-sm mb-1">
                    <CheckCircleIcon sx={{ fontSize: 18 }} />
                    Quantitative Benchmarking
                  </div>
                  <p className="text-xs text-slate-400">
                    Rigorous calculation of PSNR, SSIM, Normalized Cross-Correlation (NCC), Bit Error Rate (BER), and ROC/AUC curves.
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/40 border border-amber-500/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-500/30 text-amber-400">
                    <MemoryIcon sx={{ fontSize: 28 }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">MATLAB DIP Pipeline</h3>
                    <p className="text-xs text-slate-400">IEEE 2020-2021 Standard Execution Flow</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Layer 1 */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400 mb-1">
                      <span>1. PREPROCESSING &amp; ENHANCEMENT</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">Spatial / Frequency</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      RGB to L*a*b* conversion, Median/Wiener filtering, Anisotropic Diffusion, Skull Stripping, and Retinex decomposition.
                    </p>
                  </div>

                  {/* Layer 2 */}
                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
                    <div className="flex items-center justify-between text-xs font-bold text-orange-300 mb-1">
                      <span>2. FEATURE EXTRACTION &amp; TRANSFORMS</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-800">DWT / DCT / SVD</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Multi-level Wavelets, Local Binary Patterns (LBP), GLCM textural statistics, Zernike moments, and Minutiae extraction.
                    </p>
                  </div>

                  {/* Layer 3 */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-yellow-400 mb-1">
                      <span>3. CLASSIFICATION &amp; VERIFICATION</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-950 text-yellow-300 border border-yellow-800">SVM / Random Forest</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Support Vector Machines (SVM), Random Classification Forests, Fuzzy C-Means (FCM) clustering, and Memristive CNNs.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Toolbox: Image Processing / Computer Vision</span>
                  <span className="text-amber-400 font-semibold">MATLAB R2018b – R2024b</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Directory */}
      <section id="projects-directory" className="py-16 bg-slate-900/60 border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <MemoryIcon sx={{ fontSize: 14 }} />
                2020 – 2021 Catalogue
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                IEEE MATLAB PROJECT LIST 2020-2021
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Explore 11 IEEE MATLAB &amp; Digital Image Processing project titles with complete source code `.m` scripts, `.fig` GUI frontends, datasets, and base papers.
              </p>
            </div>

            {/* View Switcher */}
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
              <button
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === "table"
                    ? "bg-amber-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <TableRowsIcon sx={{ fontSize: 16 }} />
                <span>Table View</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === "grid"
                    ? "bg-amber-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <GridViewIcon sx={{ fontSize: 16 }} />
                <span>Grid Cards</span>
              </button>
            </div>
          </div>

          {/* Search & Category Filter Station */}
          <div className="space-y-4 mb-8">
            {/* Search Bar */}
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" sx={{ fontSize: 20 }} />
              <input
                type="text"
                placeholder="Search MATLAB titles, algorithms (DWT, SVD, FCM), domains (Biometrics, Brain Tumor, Retinal, Watermarking)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-800 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
              {domainCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition border ${
                    activeCategory === cat.value
                      ? "bg-amber-600 text-white border-amber-400 shadow-md shadow-amber-600/30"
                      : "bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-xs text-slate-400 mb-4 flex items-center justify-between">
            <span>
              Showing <strong className="text-amber-400">{filteredProjects.length}</strong> of{" "}
              {projectsList.length} IEEE MATLAB projects
            </span>
            {searchQuery && (
              <span className="text-amber-400">
                Filtered by &quot;{searchQuery}&quot;
              </span>
            )}
          </div>

          {/* Table View */}
          {viewMode === "table" ? (
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-900/90 text-xs uppercase font-bold text-slate-400 border-b border-slate-800 tracking-wider">
                  <tr>
                    <th className="py-4 px-4 w-16 text-center">S.No</th>
                    <th className="py-4 px-6 min-w-[340px]">Projects List (IEEE 2020-2021 MATLAB Titles)</th>
                    <th className="py-4 px-4 hidden md:table-cell">Domain / Category</th>
                    <th className="py-4 px-4 hidden lg:table-cell">Tooling Stack</th>
                    <th className="py-4 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-normal">
                  {filteredProjects.map((project, index) => (
                    <tr
                      key={project.id}
                      className="hover:bg-slate-900/50 transition-colors group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <td className="py-4 px-4 text-center font-bold text-slate-500 group-hover:text-amber-400 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-semibold text-white group-hover:text-amber-300 transition-colors leading-snug">
                          {project.title}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {project.description}
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-2 md:hidden">
                          <span className="px-2 py-0.5 rounded text-[10px] bg-amber-950/80 text-amber-300 border border-amber-800">
                            {project.category}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900 border border-slate-700 text-slate-300">
                          {project.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {project.tech.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-900/90 text-amber-300 border border-slate-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="px-3 py-1.5 rounded-lg bg-amber-950 hover:bg-amber-900 border border-amber-700/50 text-amber-300 text-xs font-semibold transition"
                            title="View Abstract & Deliverables"
                          >
                            Abstract
                          </button>
                          <button
                            onClick={() => handleCopyTitle(project.title, project.id)}
                            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition"
                            title="Copy Title"
                          >
                            {copiedId === project.id ? (
                              <CheckIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
                            ) : (
                              <ContentCopyIcon sx={{ fontSize: 16 }} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredProjects.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-slate-500">
                        No MATLAB projects match your search query. Try another keyword or select &quot;All Domains&quot;.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300">
                        S.No: {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{project.year}</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Domain Category
                      </div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-xs bg-slate-900 border border-slate-700 text-slate-300">
                        {project.category}
                      </span>
                    </div>

                    <div className="mb-6">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Technology Stack
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 rounded-xl bg-amber-950 hover:bg-amber-900 border border-amber-700/60 text-amber-300 text-xs font-bold transition text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleCopyTitle(project.title, project.id)}
                      className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition"
                      title="Copy Title"
                    >
                      {copiedId === project.id ? (
                        <CheckIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
                      ) : (
                        <ContentCopyIcon sx={{ fontSize: 16 }} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MATLAB Toolboxes & Capabilities Showcase */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <SettingsSuggestIcon sx={{ fontSize: 16 }} />
              Engineering Toolboxes &amp; Algorithms
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              MATLAB Simulation Environment &amp; Packages
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Our 2020-2021 MATLAB projects are implemented using industry-standard MathWorks toolboxes, optimized matrix vectorized routines, and interactive GUI frontends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <VisibilityIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Image Processing Toolbox</h3>
              <div className="text-xs text-amber-400 font-semibold mb-2">Segmentation &amp; Transforms</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Comprehensive suite for morphology, 2D/3D filtering, Fourier/Wavelet domain transforms, and color space transformations.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-orange-950 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4">
                <PsychologyIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Computer Vision &amp; ML</h3>
              <div className="text-xs text-orange-400 font-semibold mb-2">Classifiers &amp; Feature Descriptors</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                SURF, FAST, HOG, LBP feature extraction, Support Vector Machines (SVM), and Random Decision Forests.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-yellow-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-yellow-950 border border-yellow-500/30 flex items-center justify-center text-yellow-400 mb-4">
                <CodeIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">App Designer &amp; GUIDE</h3>
              <div className="text-xs text-yellow-400 font-semibold mb-2">GUI Interfaces</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custom graphical user interfaces featuring push buttons, axis image visualizers, metrics tables, and real-time parameter tuning.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <TimelineIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Simulink &amp; M-Files</h3>
              <div className="text-xs text-emerald-400 font-semibold mb-2">Block Modeling &amp; Testing</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Model-based block diagram simulation with continuous time solvers, non-linear memristor differential models, and hardware export.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Enquiry & Guidance Form */}
      <section id="enquiry-form" className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950/90 border border-amber-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <MatlabBrandIcon className="w-3.5 h-3.5" />
                Reserve 2020-2021 MATLAB Project
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request Base Paper &amp; Live MATLAB Simulation Demo
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Submit your chosen IEEE MATLAB 2020-2021 title below to receive the complete `.m` script files, `.fig` GUI frontend, test dataset, IEEE PDF paper, and PPT presentation.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-amber-950/40 border border-amber-500/50 text-center">
                <CheckCircleIcon sx={{ fontSize: 48 }} className="text-emerald-400 mb-2" />
                <h3 className="text-lg font-bold text-white">Enquiry Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Our MATLAB &amp; Digital Signal Processing Project Lead will contact you shortly via phone &amp; WhatsApp with the project deliverables.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20just%20submitted%20my%20enquiry%20for%20IEEE%20MATLAB%20Projects%202020-2021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                  >
                    <WhatsAppIcon sx={{ fontSize: 18 }} />
                    Direct WhatsApp Support
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Alex Daniel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Academic Year
                    </label>
                    <select
                      value={formData.academicYear}
                      onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                    >
                      <option value="2024 - 2025">2024 - 2025</option>
                      <option value="2022 - 2023">2022 - 2023</option>
                      <option value="2021 - 2022">2021 - 2022</option>
                      <option value="2020 - 2021">2020 - 2021</option>
                      <option value="2019 - 2020">2019 - 2020</option>
                      <option value="2018 - 2019">2018 - 2019</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Selected MATLAB Title / Custom Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectRequirements}
                    onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                    placeholder="Enter project title name or specific algorithm / dataset requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>

                {/* Captcha */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.captchaChecked}
                      onChange={(e) => setFormData({ ...formData, captchaChecked: e.target.checked })}
                      className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 bg-slate-800 border-slate-700"
                    />
                    <span className="text-xs text-slate-300">
                      I am not a robot (Verification Check)
                    </span>
                  </label>
                  <span className="text-[10px] text-slate-500">reCAPTCHA v3</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-sm shadow-xl shadow-amber-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Submit IEEE MATLAB 2020-2021 Project Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Abstract Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-950 text-amber-300 border border-amber-800">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">{selectedProject.year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                {selectedProject.title}
              </h3>

              <div className="space-y-4 text-slate-300 text-xs sm:text-sm">
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    IEEE Research Abstract
                  </h4>
                  <p className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 leading-relaxed text-slate-300">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1.5">
                    Simulation Toolboxes &amp; Algorithms
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 text-amber-300 border border-slate-800 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        projectRequirements: `Enquiry for: ${selectedProject.title} (${selectedProject.year})`,
                      }));
                      setSelectedProject(null);
                      const element = document.getElementById("enquiry-form");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs sm:text-sm transition text-center"
                  >
                    Select This Title &amp; Enquire
                  </button>
                  <a
                    href={`https://wa.me/919597793345?text=Hello%20IEEE%20Project%20Centre,%20I%20want%20MATLAB%20code%20and%20base%20paper%20for:%20${encodeURIComponent(
                      selectedProject.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition"
                  >
                    <WhatsAppIcon sx={{ fontSize: 18 }} />
                    <span>WhatsApp MATLAB Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
