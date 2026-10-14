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
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import PublicIcon from "@mui/icons-material/Public";
import ShareIcon from "@mui/icons-material/Share";
import HubIcon from "@mui/icons-material/Hub";
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
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

// Custom 3D MATLAB Logo
const MatlabBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#matlabGrad2024)" stroke="#F59E0B" strokeWidth="1.5" />
    <defs>
      <linearGradient id="matlabGrad2024" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EA580C" />
        <stop offset="0.5" stopColor="#D97706" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="meshGrad2024" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="1" stopColor="#FB923C" />
      </linearGradient>
    </defs>
    {/* 3D L-Shaped Membrane Surface */}
    <path
      d="M12 32C16 26 20 16 24 16C28 16 32 26 36 32C30 36 18 36 12 32Z"
      fill="url(#meshGrad2024)"
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

// 2024-2025 IEEE MATLAB Project Dataset (15 Titles across 5 Categories)
const matlabProjects2024Data = [
  {
    id: 1,
    title: "A System to Filter Unwanted Messages from OSN User Walls",
    domain: "Machine Learning & Natural Language Processing",
    category: "Data Mining & Social Networks",
    tech: ["MATLAB", "Text Analytics Toolbox", "Machine Learning Toolbox", "Rule-Based BL Filtering", "SVM Classifier"],
    description: "An automated Machine Learning and rule-based content filtering system in MATLAB classifying and intercepting unwanted, toxic, or spam wall postings in Online Social Networks.",
    abstract: "Online Social Networks (OSNs) expose user profile walls to unwanted and spam messages. This project develops an intelligent automated wall filtering system in MATLAB. The system combines flexible rule-based Blacklists with Machine Learning text classifiers (Multiclass SVM & Naive Bayes) operating on Bag-of-Words and TF-IDF representations to filter unwanted messages with over 97% precision.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Sensitive Label Privacy Protection on Social Network Data",
    domain: "Social Network Anonymization & Differential Privacy",
    category: "Data Mining & Social Networks",
    tech: ["MATLAB", "Graph Theory Toolbox", "Differential Privacy Engine", "k-Degree Anonymity", "Entropy Calculator"],
    description: "A graph anonymization and sensitive attribute perturbation model preventing identity leakage and sensitive label inference on published social graph topologies.",
    abstract: "Publishing social network graphs risks deanonymizing user identities and private attributes. This project implements a sensitive label privacy-preserving graph algorithm in MATLAB. By modifying edge structures (k-degree anonymity) and injecting differential privacy noise into sensitive node labels, the system guarantees high data utility for analytical mining while blocking attribute disclosure attacks.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "A Generalized Flow-Based Method for Analysis of Implicit Relationships on Wikipedia",
    domain: "Network Graph Flow & Knowledge Mining",
    category: "Data Mining & Social Networks",
    tech: ["MATLAB", "Max-Flow Min-Cut Solver", "Graph Centrality", "Sparse Matrix Operations", "Information Flow Modeling"],
    description: "A generalized maximum-flow network algorithm uncovering hidden semantic relationships and latent topical connectivity across massive Wikipedia hyperlink graphs.",
    abstract: "Uncovering implicit entity relationships in large knowledge bases is challenging due to noisy hyperlinks. We build a generalized network flow simulation in MATLAB that treats hyperlink graphs as capacitated flow networks. By computing multi-commodity maximum flow and path bottleneck capacities, the algorithm accurately ranks implicit semantic ties between disparate concepts.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Annotating Search Results From Web Databases",
    domain: "Information Retrieval & Wrapper Induction",
    category: "Data Mining & Social Networks",
    tech: ["MATLAB", "HTML Document Object Model Parser", "Clustering & Alignment", "LCS Algorithm", "Text Analytics"],
    description: "An automatic semantic search result wrapper annotating structured database results into standardized schema attributes without manual labeling.",
    abstract: "Deep web databases return search results encoded in heterogeneous HTML structures. This project implements an automatic semantic annotation framework in MATLAB. Using Longest Common Subsequence (LCS) tree alignment and unsupervised clustering of visual layout coordinates, the engine parses web results and annotates data units with high F-measure accuracy.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Crowdsourcing Predictors of Behavioral Outcomes",
    domain: "Predictive Analytics & Crowdsourced Feature Learning",
    category: "Data Mining & Social Networks",
    tech: ["MATLAB", "Statistics and Machine Learning Toolbox", "Ensemble Random Forest", "Cross-Validation", "Crowd Aggregator"],
    description: "A crowdsourced ensemble modeling pipeline aggregating diverse predictor variables to forecast complex user behavioral and societal outcomes.",
    abstract: "Individual expert forecasting often suffers from cognitive bias. This project models a crowdsourced predictive engine in MATLAB. By aggregating feature hypotheses from distributed crowd contributors and training regularized Ridge Regression and Random Forest ensembles, the model achieves superior forecasting accuracy for real-world socio-economic and user behavioral trends.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "FoCUS Learning to Crawl Web Forums",
    domain: "Supervised Web Crawling & Information Extraction",
    category: "Data Mining & Social Networks",
    tech: ["MATLAB", "URL Pattern Classifier", "DOM Tree Traversal", "Support Vector Machines", "Regex Extraction"],
    description: "A supervised forum crawler (FoCUS) that learns entry page patterns to extract comprehensive discussion threads while minimizing redundant page downloads.",
    abstract: "Web forum crawling is challenged by duplicate links and infinite pagination traps. We implement the FoCUS (Forum Crawler Under Supervision) framework in MATLAB. The system trains an SVM on URL layout features and DOM tree signatures to selectively traverse only thread and navigation links, achieving over 90% crawling efficiency.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Multiparty Access Control for Online Social Networks Model and Mechanisms",
    domain: "Access Control & Collaborative Security",
    category: "Data Mining & Social Networks",
    tech: ["MATLAB", "Voting Logic Simulator", "Conflict Resolution Engine", "Access Matrix Optimization", "GUI Simulator"],
    description: "A collaborative multi-stakeholder privacy policy simulator resolving conflicting authorization preferences when co-sharing tagged photos and posts.",
    abstract: "When a photo or post in an OSN involves multiple tagged users, their independent privacy preferences frequently conflict. This project develops a multiparty access control model in MATLAB that formalizes voting schemes, stakeholder weights, and conflict resolution policies to compute optimal joint access decisions in real-time.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "Spatial Approximate String Search",
    domain: "Spatial Databases & Geo-Textual Indexing",
    category: "Data Mining & Social Networks",
    tech: ["MATLAB", "Spatial R-Tree Indexing", "q-Gram Inverted List", "Euclidean Distance Solver", "k-NN Search"],
    description: "An efficient spatial approximate string search engine matching geo-located points of interest (POIs) under both spatial proximity and string typographical errors.",
    abstract: "Location-based search requires retrieving spatial locations whose textual descriptions approximately match user keywords. In this project, an integrated Spatial Inverted Index (L-Index / IR-Tree) is simulated in MATLAB. The algorithm prunes search space using q-gram edit distance and bounding boxes, returning top-k spatial-textual candidates in sub-millisecond response times.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "A Load Balancing Model Based on Cloud Partitioning for the Public Cloud",
    domain: "Cloud Computing & Distributed Load Balancing",
    category: "Cloud Computing",
    tech: ["MATLAB", "SimEvents / Cloud Queue Simulator", "Partitioning Controller", "Game Theory Load Balancer", "QoS Analysis"],
    description: "A scalable cloud partitioning architecture dividing vast public cloud datacenters into sub-regions with autonomous local game-theoretic load balancers.",
    abstract: "Global load balancers in massive public clouds experience server overload and synchronization latency. This project implements a partitioned cloud load balancing framework in MATLAB. The public cloud is divided into dynamic geographic partitions where local game-theoretic schedulers allocate incoming virtual machine tasks, significantly reducing response latency and energy usage.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Enabling Cloud Storage Auditing With Key-Exposure Resistance",
    domain: "Cloud Security & Key-Insulated Cryptography",
    category: "Information Forensics & Security",
    tech: ["MATLAB", "Homomorphic Verifiable Tags (HVT)", "Key-Insulation Cryptosystem", "Third Party Auditor (TPA)", "Bilinear Pairing"],
    description: "A zero-knowledge cloud storage integrity auditing protocol safeguarding past and future data blocks even if the client's current private secret key is compromised.",
    abstract: "Key exposure represents a fatal vulnerability in traditional cloud auditing protocols. This project simulates a key-exposure resistant cloud storage auditing framework in MATLAB. Utilizing key-insulated homomorphic verifiable authenticators (HVT) and update tickets, the third-party auditor (TPA) efficiently verifies multi-period data integrity without incurring client re-encryption overhead.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "CAM Cloud-Assisted Privacy Preserving Mobile Health Monitoring",
    domain: "Mobile Health Telemedicine & Biometric Security",
    category: "Information Forensics & Security",
    tech: ["MATLAB", "Homomorphic Encryption (Paillier)", "Branching Program Classifier", "ECG/EEG Signal Processing", "IoT Telemetry"],
    description: "A secure telemedicine framework allowing cloud servers to diagnose continuous patient ECG/vital signals using machine learning models without decrypting medical records.",
    abstract: "Continuous remote health monitoring requires outsourcing patient physiological data to commercial clouds. This project implements the CAM (Cloud-Assisted Mobile Health) system in MATLAB. The mobile sensor encrypts vital signals (ECG/Blood Pressure) using homomorphic encryption, allowing cloud diagnostic classifiers to evaluate disease risks over ciphertext without learning private patient records.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "Overhead of using secure wireless communications in mobile computing",
    domain: "Wireless Security & Energy-Performance Tradeoff",
    category: "Mobile Computing",
    tech: ["MATLAB", "Communications Toolbox", "Cryptographic Benchmark (AES/RSA/ECC)", "Energy Dissipation Model", "Throughput Profiler"],
    description: "A quantitative benchmarking suite measuring latency overhead, energy dissipation, and packet jitter incurred by security protocols across mobile wireless channels.",
    abstract: "Securing mobile computing nodes introduces computational delays and battery depletion. This project presents an experimental simulation framework in MATLAB Communications Toolbox that benchmarks the computational, bandwidth, and energy overheads of IPSec, SSL/TLS, and elliptic curve cryptography (ECC) under fluctuating channel fading conditions.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Two Tales of Privacy in Online Social Networks",
    domain: "Social Network Privacy & Behavioral Game Theory",
    category: "Multimedia & Privacy",
    tech: ["MATLAB", "Game Theoretic Solver", "Privacy Loss Quantifier", "Utility-Privacy Tradeoff", "Monte Carlo Simulation"],
    description: "A formal mathematical framework evaluating the dual tension between user content sharing utility and interpersonal privacy exposure in modern social networks.",
    abstract: "Users desire high social visibility while simultaneously fearing unauthorized data harvesting. In this project, a dual-objective game-theoretic privacy optimization model is formulated and solved in MATLAB. By modeling interdependent user payoffs and privacy leakage matrices, the simulator calculates Nash equilibria for privacy-preserving media sharing.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 14,
    title: "CloudMoV Cloud-based Mobile Social TV",
    domain: "Multimedia Streaming & Cloud Transcoding",
    category: "Multimedia & Privacy",
    tech: ["MATLAB", "Video Processing Toolbox", "Adaptive Bitrate (ABR) Controller", "Surrogate Cloud Architecture", "QoE Evaluation"],
    description: "A cloud-orchestrated social live streaming architecture enabling synchronized video viewing and interactive social interactions across bandwidth-constrained mobile devices.",
    abstract: "Mobile social television requires real-time video transcoding and co-viewing synchronization. This project implements the CloudMoV streaming architecture in MATLAB. By offloading video encoding and social peer messaging to virtual cloud surrogates, the system maintains high Quality of Experience (QoE) and minimal playback lag across heterogeneous mobile devices.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "Fully Anonymous Profile Matching in Mobile Social Networks",
    domain: "Proximity Biometrics & Anonymous Handshaking",
    category: "Multimedia & Privacy",
    tech: ["MATLAB", "Private Set Intersection (PSI)", "Anonymous Handshake Protocol", "Cosine Similarity Engine", "Bluetooth/WiFi Model"],
    description: "A cryptographic profile matching protocol in mobile social networks discovering shared interests between proximate strangers without leaking unshared personal attributes.",
    abstract: "Finding like-minded friends in mobile ad-hoc environments often requires disclosing full personal profile vectors. We design a fully anonymous proximity profile matching protocol in MATLAB using Private Set Intersection (PSI) and homomorphic dot-product computation. Two users identify mutual interests only if their similarity score exceeds a threshold, with zero information leakage otherwise.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "Matlab IEEE Projects 2024 - 2025", path: "/2024-2025-matlab-projects-chennai", active: true },
  { label: "Matlab IEEE Projects 2022 - 2023", path: "/matlab-ieee-projects-2022-2023-in-chennai" },
  { label: "Matlab IEEE Projects 2021 - 2022", path: "/matlab-ieee-projects-2021-2022-in-chennai" },
  { label: "Matlab IEEE Projects 2020 - 2021", path: "/matlab-ieee-projects-2020-2021-in-chennai" },
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
  { label: "Data Mining & Social Networks", value: "Data Mining & Social Networks", icon: <ShareIcon sx={{ fontSize: 18 }} /> },
  { label: "Cloud Computing", value: "Cloud Computing", icon: <CloudIcon sx={{ fontSize: 18 }} /> },
  { label: "Information Forensics & Security", value: "Information Forensics & Security", icon: <SecurityIcon sx={{ fontSize: 18 }} /> },
  { label: "Mobile Computing", value: "Mobile Computing", icon: <PhonelinkIcon sx={{ fontSize: 18 }} /> },
  { label: "Multimedia & Privacy", value: "Multimedia & Privacy", icon: <PermMediaIcon sx={{ fontSize: 18 }} /> },
];

export default function MatlabProjects2024() {
  const [projectsList, setProjectsList] = useState(matlabProjects2024Data);
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
    academicYear: "2024 - 2025",
    projectRequirements: "IEEE MATLAB Projects 2024-2025 in Chennai",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=matlab&year=2024 - 2025`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "MATLAB & Advanced Engineering",
              category: item.category || "Data Mining & Social Networks",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["MATLAB", "Toolbox", "GUI", "Simulink"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2024 - 2025",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2024-2025 MATLAB projects");
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
              IEEE MATLAB Projects 2024 – 2025
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
              Data Mining • Cloud Computing • Information Forensics • Mobile Computing • Multimedia
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            2024 – 2025 Matlab IEEE Projects{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">
              in Chennai
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mb-8 leading-relaxed">
            Experience the pinnacle of MATLAB simulation in Chennai with complete 2024–2025 IEEE research projects. Master Cloud Storage Auditing, OSN Message Filtering, Social Network Privacy, and Mobile Health Telemetry with complete MATLAB code, App Designer GUIs, and IEEE base papers.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects-directory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-sm shadow-lg shadow-amber-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <SearchIcon sx={{ fontSize: 20 }} />
              Browse 2024-2025 MATLAB Titles
            </a>
            <a
              href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%202024-2025%20MATLAB%20Projects%20in%20Chennai"
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
              <div className="text-2xl font-black text-amber-400">15+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">IEEE MATLAB 2024 Titles</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-orange-400">MATLAB R2024b</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">App Designer &amp; Toolboxes</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-yellow-400">5 Domain Tracks</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Cloud, Security, Social, Mobile</div>
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

      {/* About IEEE 2024-2025 MATLAB Projects Section */}
      <section className="py-16 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <AutoAwesomeIcon sx={{ fontSize: 14 }} />
                Comprehensive Academic Support
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
                ABOUT MATLAB PROJECT
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <h3 className="text-base sm:text-lg font-bold text-amber-300">
                  Experience the Best in 2024 MATLAB Projects Chennai and 2025 MATLAB Projects Chennai
                </h3>
                <p>
                  1crore Projects is your trusted partner for all your 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai needs. Our team of experienced professionals offers expert guidance and innovative solutions for your 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai. With 1crore Projects, you can confidently tackle the challenges of your 2024 2025 MATLAB projects Chennai. Whether you’re initiating a new project or enhancing an existing one, our comprehensive solutions for 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai are designed to help you succeed. Our dedicated team supports you every step of the way, offering expert guidance for your 2024 2025 MATLAB projects Chennai.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-amber-300 pt-2">
                  Expert Guidance for 2024 MATLAB Projects Chennai and 2025 MATLAB Projects Chennai
                </h3>
                <p>
                  At 1crore Projects, we offer exceptional support for 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai. Our dedicated team and advanced facilities ensure that you receive top-notch guidance and resources for your 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai. We are committed to helping you excel in your 2024 2025 MATLAB projects Chennai. At 1crore Projects, we are committed to providing the highest quality support and resources for 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai. Our state-of-the-art facilities and experienced professionals ensure that you receive the best guidance for your 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai.
                </p>
                <p>
                  Seeking comprehensive support for your MATLAB projects? 1crore Projects provides extensive resources and personalized mentoring for 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai. Our advanced facilities are equipped to support your 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai, ensuring you achieve your project objectives efficiently. Join us today and discover why 1crore Projects is the leading choice for 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai. At 1crore Projects, we offer a wide range of services for 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-amber-300 pt-2">
                  Why Choose 1crore Projects for 2024 MATLAB Projects Chennai and 2025 MATLAB Projects Chennai?
                </h3>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon sx={{ fontSize: 16 }} className="text-amber-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Experienced Professionals:</strong> Our team of experts possesses extensive experience in guiding 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon sx={{ fontSize: 16 }} className="text-amber-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Personalized Care:</strong> Tailoring project plans to ensure optimal outcomes for your 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon sx={{ fontSize: 16 }} className="text-amber-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Advanced Techniques:</strong> Utilizing cutting-edge technologies and methods for 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon sx={{ fontSize: 16 }} className="text-amber-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Proven Results:</strong> Students have achieved remarkable success with their 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai under our guidance.</span>
                  </li>
                </ul>

                <h3 className="text-base sm:text-lg font-bold text-amber-300 pt-2">
                  Contact Us for 2024 MATLAB Projects Chennai and 2025 MATLAB Projects Chennai
                </h3>
                <p>
                  Trust 1crore Projects for reliable and effective support. Choose 1crore Projects for all your 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai, and embark on your journey to success with our expert assistance. Ready to excel in your MATLAB projects? Contact 1crore Projects today to schedule your consultation. Our friendly staff is here to assist you with all your 2024 MATLAB projects Chennai and 2025 MATLAB projects Chennai needs.
                </p>
              </div>
            </div>

            {/* Feature Highlights Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/40 border border-amber-500/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-500/30 text-amber-400">
                    <VerifiedUserIcon sx={{ fontSize: 28 }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">2024-2025 Project Benefits</h3>
                    <p className="text-xs text-slate-400">Complete Deliverable Ecosystem</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400 mb-1">
                      <span>1. PRODUCTION-READY SOURCE CODE</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">.m &amp; .fig</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Cleanly commented, modularized MATLAB functions with intuitive App Designer &amp; GUIDE user interfaces.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
                    <div className="flex items-center justify-between text-xs font-bold text-orange-300 mb-1">
                      <span>2. IEEE BASE PAPERS &amp; BENCHMARKS</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-800">PDF + Datasets</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Original IEEE transactions research papers, benchmark datasets, and comparative quantitative evaluation metrics.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-yellow-400 mb-1">
                      <span>3. VIVA PREPARATION &amp; DOCUMENTATION</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-950 text-yellow-300 border border-yellow-800">PPT + DOCX</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Complete project report with UML diagrams, system architecture, algorithm flowcharts, and slide deck for college reviews.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Mentorship: Online &amp; Classroom</span>
                  <span className="text-amber-400 font-semibold">Chennai Centre</span>
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
                2024 – 2025 Catalogue
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                IEEE MATLAB PROJECT LIST 2024-2025
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Explore 15 IEEE MATLAB project titles across Data Mining, Cloud Computing, Security, Mobile, and Multimedia domains.
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
                placeholder="Search MATLAB titles, domains (Cloud, Security, Social, Mobile), techniques (SVM, Paillier, Anonymity)..."
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
                    <th className="py-4 px-6 min-w-[340px]">Projects List (IEEE 2024-2025 MATLAB Titles)</th>
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

      {/* Project Enquiry & Guidance Form */}
      <section id="enquiry-form" className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950/90 border border-amber-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <MatlabBrandIcon className="w-3.5 h-3.5" />
                Reserve 2024-2025 MATLAB Project
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request Base Paper &amp; Live MATLAB Simulation Demo
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Submit your chosen IEEE MATLAB 2024-2025 title below to receive the complete `.m` script files, App Designer GUI frontend, test dataset, IEEE PDF paper, and PPT presentation.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-amber-950/40 border border-amber-500/50 text-center">
                <CheckCircleIcon sx={{ fontSize: 48 }} className="text-emerald-400 mb-2" />
                <h3 className="text-lg font-bold text-white">Enquiry Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Our MATLAB &amp; Data Science Project Lead will contact you shortly via phone &amp; WhatsApp with the project deliverables.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20just%20submitted%20my%20enquiry%20for%202024-2025%20MATLAB%20Projects"
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
                  Submit 2024-2025 MATLAB Project Request
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
