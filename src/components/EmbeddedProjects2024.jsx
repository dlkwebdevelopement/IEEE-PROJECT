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
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import ShareIcon from "@mui/icons-material/Share";
import CodeIcon from "@mui/icons-material/Code";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TimelineIcon from "@mui/icons-material/Timeline";
import SpeedIcon from "@mui/icons-material/Speed";
import SmartToyIcon from "@mui/icons-material/SmartToy";

// Custom 3D Embedded Microcontroller / Chip Logo
const EmbeddedBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#embGrad2024)" stroke="#38BDF8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="embGrad2024" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0369A1" />
        <stop offset="0.5" stopColor="#0284C7" />
        <stop offset="1" stopColor="#38BDF8" />
      </linearGradient>
    </defs>
    {/* Microchip Core Die */}
    <rect x="15" y="15" width="18" height="18" rx="3" fill="#082F49" stroke="#7DD3FC" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="3" fill="#38BDF8" />
    {/* Chip Pins Top/Bottom */}
    <line x1="14" y1="4" x2="14" y2="8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="4" x2="24" y2="8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="4" x2="34" y2="8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="40" x2="14" y2="44" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="40" x2="24" y2="44" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="40" x2="34" y2="44" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    {/* Chip Pins Left/Right */}
    <line x1="4" y1="14" x2="8" y2="14" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="24" x2="8" y2="24" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="34" x2="8" y2="34" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="14" x2="44" y2="14" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="24" x2="44" y2="24" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="34" x2="44" y2="34" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 2024-2025 IEEE Embedded Systems Project Dataset (15 Titles across 5 Categories)
const embeddedProjects2024Data = [
  {
    id: 1,
    title: "A System to Filter Unwanted Messages from OSN User Walls",
    domain: "Embedded AI / NLP Message Filtering & Micro-Gateways",
    category: "Data Mining & Social Networks",
    tech: ["Raspberry Pi 4 / STM32", "Python / Embedded C", "MQTT Gateway", "NLP Text Analytics", "SVM Classifier"],
    description: "An automated Machine Learning and rule-based content filtering embedded gateway classifying and intercepting unwanted wall postings in Online Social Networks.",
    abstract: "Online Social Networks (OSNs) expose user profile walls to unwanted and spam messages. This project develops an intelligent automated wall filtering system. The system combines flexible rule-based Blacklists with Machine Learning text classifiers (Multiclass SVM & Naive Bayes) operating on Bag-of-Words and TF-IDF representations to filter unwanted messages with over 97% precision.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Sensitive Label Privacy Protection on Social Network Data",
    domain: "Embedded Security & Graph Differential Privacy",
    category: "Data Mining & Social Networks",
    tech: ["ESP32-S3 / Python", "NetworkX Graph Engine", "Differential Privacy", "k-Degree Anonymity", "Embedded Graph Broker"],
    description: "A graph anonymization and sensitive attribute perturbation engine preventing identity leakage and attribute inference on published social graph topologies.",
    abstract: "Publishing social network graphs risks deanonymizing user identities and private attributes. This project implements a sensitive label privacy-preserving graph algorithm. By modifying edge structures (k-degree anonymity) and injecting differential privacy noise into sensitive node labels, the system guarantees high data utility for analytical mining while blocking attribute disclosure attacks.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "A Generalized Flow-Based Method for Analysis of Implicit Relationships on Wikipedia",
    domain: "Network Graph Flow & Knowledge Mining",
    category: "Data Mining & Social Networks",
    tech: ["ARM Cortex-M7 / Python", "Max-Flow Min-Cut Solver", "Graph Centrality", "Sparse Matrix Operations", "Information Flow Modeling"],
    description: "A generalized maximum-flow network algorithm uncovering hidden semantic relationships and latent topical connectivity across massive Wikipedia hyperlink graphs.",
    abstract: "Uncovering implicit entity relationships in large knowledge bases is challenging due to noisy hyperlinks. We build a generalized network flow simulation that treats hyperlink graphs as capacitated flow networks. By computing multi-commodity maximum flow and path bottleneck capacities, the algorithm accurately ranks implicit semantic ties between disparate concepts.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Annotating Search Results From Web Databases",
    domain: "Information Retrieval & Embedded Data Extraction",
    category: "Data Mining & Social Networks",
    tech: ["Raspberry Pi / Python", "DOM Tree Parser", "Clustering & Alignment", "LCS Algorithm", "Web Scraping"],
    description: "An automatic semantic search result wrapper annotating structured database results into standardized schema attributes without manual labeling.",
    abstract: "Deep web databases return search results encoded in heterogeneous HTML structures. This project implements an automatic semantic annotation framework. Using Longest Common Subsequence (LCS) tree alignment and unsupervised clustering of visual layout coordinates, the engine parses web results and annotates data units with high F-measure accuracy.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Crowdsourcing Predictors of Behavioral Outcomes",
    domain: "Predictive Analytics & Crowdsourced Feature Learning",
    category: "Data Mining & Social Networks",
    tech: ["ESP32 / Python Scikit-Learn", "Ensemble Random Forest", "Cross-Validation", "Crowd Aggregator", "REST API"],
    description: "A crowdsourced ensemble modeling pipeline aggregating diverse predictor variables to forecast complex user behavioral and societal outcomes.",
    abstract: "Individual expert forecasting often suffers from cognitive bias. This project models a crowdsourced predictive engine. By aggregating feature hypotheses from distributed crowd contributors and training regularized Ridge Regression and Random Forest ensembles, the model achieves superior forecasting accuracy for real-world socio-economic and user behavioral trends.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "FoCUS Learning to Crawl Web Forums",
    domain: "Supervised Web Crawling & Information Extraction",
    category: "Data Mining & Social Networks",
    tech: ["Python / Scrapy", "URL Pattern Classifier", "DOM Tree Traversal", "Support Vector Machines", "Regex Extraction"],
    description: "A supervised forum crawler (FoCUS) that learns entry page patterns to extract comprehensive discussion threads while minimizing redundant page downloads.",
    abstract: "Web forum crawling is challenged by duplicate links and infinite pagination traps. We implement the FoCUS (Forum Crawler Under Supervision) framework. The system trains an SVM on URL layout features and DOM tree signatures to selectively traverse only thread and navigation links, achieving over 90% crawling efficiency.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Multiparty Access Control for Online Social Networks Model and Mechanisms",
    domain: "Embedded Security & Collaborative Access Control",
    category: "Data Mining & Social Networks",
    tech: ["STM32 / Django", "Voting Logic Simulator", "Conflict Resolution Engine", "Access Matrix Optimization", "Hardware Security Token"],
    description: "A collaborative multi-stakeholder privacy policy simulator resolving conflicting authorization preferences when co-sharing tagged photos and posts.",
    abstract: "When a photo or post in an OSN involves multiple tagged users, their independent privacy preferences frequently conflict. This project develops a multiparty access control model that formalizes voting schemes, stakeholder weights, and conflict resolution policies to compute optimal joint access decisions in real-time.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "Spatial Approximate String Search",
    domain: "Spatial Databases & Geo-Textual Indexing",
    category: "Data Mining & Social Networks",
    tech: ["ARM Cortex / Python", "Spatial R-Tree Indexing", "q-Gram Inverted List", "Euclidean Distance Solver", "k-NN Search"],
    description: "An efficient spatial approximate string search engine matching geo-located points of interest (POIs) under both spatial proximity and string typographical errors.",
    abstract: "Location-based search requires retrieving spatial locations whose textual descriptions approximately match user keywords. In this project, an integrated Spatial Inverted Index (L-Index / IR-Tree) is simulated. The algorithm prunes search space using q-gram edit distance and bounding boxes, returning top-k spatial-textual candidates in sub-millisecond response times.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "A Load Balancing Model Based on Cloud Partitioning for the Public Cloud",
    domain: "Distributed Edge Computing & Cloud Partitioning",
    category: "Cloud Computing",
    tech: ["CloudSim / Python", "IoT Edge Gateway (ESP32/RPi)", "Partitioning Controller", "Game Theory Load Balancer", "QoS Analysis"],
    description: "A scalable cloud partitioning architecture dividing vast public cloud datacenters into sub-regions with autonomous local game-theoretic load balancers.",
    abstract: "Global load balancers in massive public clouds experience server overload and synchronization latency. This project implements a partitioned cloud load balancing framework. The public cloud is divided into dynamic geographic partitions where local game-theoretic schedulers allocate incoming virtual machine tasks, significantly reducing response latency and energy usage.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Enabling Cloud Storage Auditing With Key-Exposure Resistance",
    domain: "Embedded Cryptography & Key-Insulated Auditing",
    category: "Information Forensics & Security",
    tech: ["STM32 Cryptolib", "Homomorphic Verifiable Tags (HVT)", "Key-Insulation Cryptosystem", "Third Party Auditor (TPA)", "Bilinear Pairing"],
    description: "A zero-knowledge cloud storage integrity auditing protocol safeguarding past and future data blocks even if the client's current private secret key is compromised.",
    abstract: "Key exposure represents a fatal vulnerability in traditional cloud auditing protocols. This project simulates a key-exposure resistant cloud storage auditing framework. Utilizing key-insulated homomorphic verifiable authenticators (HVT) and update tickets, the third-party auditor (TPA) efficiently verifies multi-period data integrity without incurring client re-encryption overhead.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "CAM Cloud-Assisted Privacy Preserving Mobile Health Monitoring",
    domain: "Embedded Telemedicine & Biometric Cryptography",
    category: "Information Forensics & Security",
    tech: ["ESP32 / MAX30102 / AD8232 ECG", "Paillier Homomorphic Encryption", "Branching Program Classifier", "Cloud IoT Dashboard", "BLE Telemetry"],
    description: "A secure telemedicine framework allowing cloud servers to diagnose continuous patient ECG/vital signals using machine learning models without decrypting medical records.",
    abstract: "Continuous remote health monitoring requires outsourcing patient physiological data to commercial clouds. This project implements the CAM (Cloud-Assisted Mobile Health) system. The mobile IoT sensor encrypts vital signals (ECG/Blood Pressure) using homomorphic encryption, allowing cloud diagnostic classifiers to evaluate disease risks over ciphertext without learning private patient records.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "Overhead of using secure wireless communications in mobile computing",
    domain: "Wireless Embedded Security & Energy Benchmarking",
    category: "Mobile Computing",
    tech: ["STM32 / NS-3 Simulator", "Cryptographic Benchmark (AES/RSA/ECC)", "Energy Dissipation Model", "Throughput Profiler", "MQTT-TLS"],
    description: "A quantitative benchmarking suite measuring latency overhead, energy dissipation, and packet jitter incurred by security protocols across mobile wireless channels.",
    abstract: "Securing mobile computing nodes introduces computational delays and battery depletion. This project presents an experimental benchmarking framework that evaluates the computational, bandwidth, and energy overheads of IPSec, SSL/TLS, and elliptic curve cryptography (ECC) under fluctuating wireless channel fading conditions.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Two Tales of Privacy in Online Social Networks",
    domain: "Social Network Privacy & Game Theory",
    category: "Multimedia & Privacy",
    tech: ["Python / Flask", "Game Theoretic Solver", "Privacy Loss Quantifier", "Utility-Privacy Tradeoff", "Monte Carlo Simulation"],
    description: "A formal mathematical framework evaluating the dual tension between user content sharing utility and interpersonal privacy exposure in modern social networks.",
    abstract: "Users desire high social visibility while simultaneously fearing unauthorized data harvesting. In this project, a dual-objective game-theoretic privacy optimization model is formulated and solved. By modeling interdependent user payoffs and privacy leakage matrices, the simulator calculates Nash equilibria for privacy-preserving media sharing.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 14,
    title: "CloudMoV Cloud-based Mobile Social TV",
    domain: "Multimedia Streaming & Cloud Edge Transcoding",
    category: "Multimedia & Privacy",
    tech: ["Raspberry Pi / Node.js", "WebRTC / HLS Streaming", "Adaptive Bitrate (ABR) Controller", "Surrogate Cloud Architecture", "QoE Evaluation"],
    description: "A cloud-orchestrated social live streaming architecture enabling synchronized video viewing and interactive social interactions across bandwidth-constrained mobile devices.",
    abstract: "Mobile social television requires real-time video transcoding and co-viewing synchronization. This project implements the CloudMoV streaming architecture. By offloading video encoding and social peer messaging to virtual cloud surrogates, the system maintains high Quality of Experience (QoE) and minimal playback lag across heterogeneous mobile devices.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "Fully Anonymous Profile Matching in Mobile Social Networks",
    domain: "BLE Proximity Biometrics & Anonymous Handshaking",
    category: "Multimedia & Privacy",
    tech: ["ESP32 BLE", "Private Set Intersection (PSI)", "Anonymous Handshake Protocol", "Cosine Similarity Engine", "Embedded Dashboard"],
    description: "A cryptographic profile matching protocol in mobile social networks discovering shared interests between proximate strangers without leaking unshared personal attributes.",
    abstract: "Finding like-minded friends in mobile ad-hoc environments often requires disclosing full personal profile vectors. We design a fully anonymous proximity profile matching protocol using Private Set Intersection (PSI) and homomorphic dot-product computation. Two users identify mutual interests only if their similarity score exceeds a threshold, with zero information leakage otherwise.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "Embedded Projects 2024 - 2025", path: "/2024-2025-embedded-projects-chennai", active: true },
  { label: "Embedded Projects 2022 - 2023", path: "/embedded-ieee-projects-2022-2023" },
  { label: "Embedded Projects 2021 - 2022", path: "/embedded-systems-projects-2021-2022-chennai" },
  { label: "Embedded Projects 2020 - 2021", path: "/embedded-systems-projects-2020-2021-chennai" },
  { label: "Embedded Projects 2019 - 2020", path: "/embedded-systems-domain-2019-2020-chennai" },
  { label: "Embedded Projects 2018 - 2019", path: "/embedded-systems-projects-2018-2019-chennai" },
  { label: "Embedded Projects 2017 - 2018", path: "/embedded-systems-projects-2017-2018-chennai" },
  { label: "Embedded Projects 2016 - 2017", path: "/embedded-systems-projects-2016-2017-chennai" },
  { label: "Embedded Projects 2015 - 2016", path: "/embedded-systems-projects-2015-2016-chennai" },
  { label: "Embedded Projects 2014 - 2015", path: "/http-dhanamfoundationindia-coembedded-ieee-projects-2014-2015-in-chennai" },
  { label: "Embedded Projects 2013 - 2014", path: "/embedded-systems-projects-2013-2014-chennai" },
];

const domainCategories = [
  { label: "All Domains", value: "All", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
  { label: "Data Mining & Social Networks", value: "Data Mining & Social Networks", icon: <ShareIcon sx={{ fontSize: 18 }} /> },
  { label: "Cloud Computing", value: "Cloud Computing", icon: <CloudIcon sx={{ fontSize: 18 }} /> },
  { label: "Information Forensics & Security", value: "Information Forensics & Security", icon: <SecurityIcon sx={{ fontSize: 18 }} /> },
  { label: "Mobile Computing", value: "Mobile Computing", icon: <PhonelinkIcon sx={{ fontSize: 18 }} /> },
  { label: "Multimedia & Privacy", value: "Multimedia & Privacy", icon: <PermMediaIcon sx={{ fontSize: 18 }} /> },
];

export default function EmbeddedProjects2024() {
  const [projectsList, setProjectsList] = useState(embeddedProjects2024Data);
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
    projectRequirements: "Embedded Systems Projects 2024-2025 in Chennai",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=embedded&year=2024 - 2025`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "Embedded Systems & Hardware Solutions",
              category: item.category || "Data Mining & Social Networks",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["STM32", "ESP32", "Python", "Cloud Dashboard"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2024 - 2025",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2024-2025 Embedded projects");
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!formData.captchaChecked) {
      alert("Please verify the human verification checkbox.");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      academic_year: formData.academicYear,
      project_requirements: formData.projectRequirements,
    };

    fetch(`${API_BASE}/enquiries.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        setSubmitted(true);
      });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs & Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <EmbeddedBrandIcon className="w-4 h-4" />
              Embedded Systems Projects 2024 – 2025
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
              ARM Cortex • ESP32 • Edge AI • Cloud Gateways • Telemedicine
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            2024 – 2025 Embedded System Projects{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
              in Chennai
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mb-8 leading-relaxed">
            Build next-generation embedded prototypes, edge computing micro-gateways, and hardware-software co-designed systems with complete hardware blueprints, firmware, and IEEE base papers in Chennai.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects-directory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <SearchIcon sx={{ fontSize: 20 }} />
              Browse 2024-2025 Embedded Titles
            </a>
            <a
              href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%202024-2025%20Embedded%20Systems%20Projects%20in%20Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon sx={{ fontSize: 20 }} />
              WhatsApp Embedded Expert
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
              <div className="text-2xl font-black text-sky-400">15+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Embedded 2024 Titles</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-cyan-400">ARM / STM32 / ESP32</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Microcontroller Hardware Kits</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-blue-400">Cloud &amp; Edge AI</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Hardware-Cloud Co-Design</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Hardware + Code + Base Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Matrix Navigation */}
      <section className="py-6 bg-slate-900/90 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap pl-1">
              Embedded Release Archives:
            </span>
            {yearNavigationLinks.map((yearLink, index) => (
              <Link
                key={index}
                to={yearLink.path}
                className={`text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 border ${
                  yearLink.active
                    ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white border-sky-400 shadow-md shadow-sky-600/30"
                    : "bg-slate-950/60 text-slate-300 border-slate-800 hover:border-sky-500/50 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {yearLink.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Embedded System Project 2024 - 2025 Section */}
      <section className="py-16 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
                <AutoAwesomeIcon sx={{ fontSize: 14 }} />
                Next-Gen Embedded Systems
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
                ABOUT EMBEDDED PROJECT
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <h3 className="text-base sm:text-lg font-bold text-sky-300">
                  1Crore Project – Your Premier Destination for 2024 – 2025 Embedded Projects Chennai
                </h3>
                <p>
                  At 1Crore Project, we specialize in 2024 embedded projects Chennai, offering expert support and resources to ensure your project’s success. Our team of experienced mentors is dedicated to helping you navigate the complexities of 2024 embedded projects Chennai. With 1Crore Project, you can be confident that your 2024 embedded projects Chennai will meet the highest standards of quality and innovation. Our 2024 embedded projects Chennai provide a wide range of services designed to meet all your project needs. From initial concept development to final execution, 1Crore Project offers the support and resources necessary for successful 2024 embedded projects Chennai. Choose our 2024 embedded projects Chennai for a comprehensive approach to project development and execution.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-sky-300 pt-2">
                  Benefits of Choosing 1Crore Project for 2024 – 2025 Embedded Projects Chennai
                </h3>
                <p>
                  1Crore Project is the leading destination for 2024 embedded projects in Chennai. Our state-of-the-art facilities and experienced mentors make us the best choice for students seeking guidance and resources for their 2024 embedded projects Chennai. At 1Crore Project, we are committed to providing exceptional support and innovative solutions for 2024 embedded projects Chennai, ensuring your academic success. Looking ahead to the future? 1Crore Project is also your premier destination for 2025 embedded projects in Chennai. We are committed to providing the same high level of support and innovation for 2025 embedded projects in Chennai as we do for 2024. Our expert team and cutting-edge resources ensure that your 2025 embedded projects in Chennai will be a success.
                </p>
                <p>
                  Choosing 1Crore Project means opting for the best 2024 embedded projects Chennai. Our dedication to excellence and comprehensive support make us the preferred choice for students working on their 2024 embedded projects Chennai. We provide personalized assistance, cutting-edge resources, and expert guidance to help you achieve your academic goals. Trust 1Crore Project for all your 2024 embedded projects Chennai and experience unparalleled success. At 1Crore Project, we offer comprehensive support for 2025 embedded projects in Chennai. Our experienced mentors and state-of-the-art facilities are here to help you succeed. Trust 1Crore Project for all your 2025 embedded projects in Chennai and benefit from our dedication to excellence.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-sky-300 pt-2">
                  Why Choose 1Crore Project for 2024 – 2025 Embedded Projects Chennai?
                </h3>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon sx={{ fontSize: 16 }} className="text-sky-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Experienced Mentors:</strong> Benefit from the expertise of our highly qualified mentors at 1Crore Project.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon sx={{ fontSize: 16 }} className="text-sky-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Personalized Assistance:</strong> Receive customized guidance tailored to your specific project requirements at our 2024 embedded projects Chennai.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon sx={{ fontSize: 16 }} className="text-sky-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Advanced Resources:</strong> Our 2024 embedded projects Chennai are equipped with the latest tools and technologies to support your project development.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon sx={{ fontSize: 16 }} className="text-sky-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Proven Success:</strong> Join the ranks of successful students who have completed their projects at 1Crore Project.</span>
                  </li>
                </ul>

                <h3 className="text-base sm:text-lg font-bold text-sky-300 pt-2">
                  Contact Us for the Best 2024 – 2025 Embedded Projects Chennai
                </h3>
                <p>
                  Get ready for the future with 1Crore Project. Contact us today to learn more about our services for 2025 embedded projects in Chennai. Let us help you achieve your academic and professional goals with our expert guidance and support for 2025 embedded projects in Chennai. Experience the best with 1Crore Project for all your 2024 and 2025 embedded projects Chennai. Book your consultation now and start your journey to success with 1Crore Project.
                </p>
              </div>
            </div>

            {/* Feature Highlights Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-sky-950/40 border border-sky-500/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400">
                    <PrecisionManufacturingIcon sx={{ fontSize: 28 }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">2024-2025 Embedded Ecosystem</h3>
                    <p className="text-xs text-slate-400">Complete Hardware &amp; Firmware Stack</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-sky-400 mb-1">
                      <span>1. PHYSICAL HARDWARE CIRCUIT</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">STM32 / ESP32-S3 / RPi</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Assembled microcontrollers, biometric sensors, Bluetooth BLE modules, and power supplies.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30">
                    <div className="flex items-center justify-between text-xs font-bold text-cyan-300 mb-1">
                      <span>2. EMBEDDED C &amp; PYTHON FIRMWARE</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">Keil / VS Code / STM32</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Cleanly commented firmware source code, hex file generation, UART protocol drivers, and Android APK interface.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-blue-400 mb-1">
                      <span>3. IEEE PAPERS &amp; PPT SLIDES</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">Complete Reports</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Circuit diagrams, simulation files, thesis documentation, and project defense PowerPoint slides.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Directory Section */}
      <section id="projects-directory" className="py-16 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
                <CodeIcon sx={{ fontSize: 14 }} />
                2024-2025 Project Catalog
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Embedded System Projects List (2024-2025)
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-2xl">
                Explore next-generation embedded AI, edge cloud computing, biometric privacy, and mobile health monitoring systems.
              </p>
            </div>

            {/* View Mode & Count */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-400">
                Showing <strong className="text-sky-400">{filteredProjects.length}</strong> Titles
              </span>
              <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800">
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition ${
                    viewMode === "table" ? "bg-sky-600 text-white shadow" : "text-slate-400 hover:text-white"
                  }`}
                  title="Table View"
                >
                  <TableRowsIcon sx={{ fontSize: 16 }} />
                  Table
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition ${
                    viewMode === "grid" ? "bg-sky-600 text-white shadow" : "text-slate-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <GridViewIcon sx={{ fontSize: 16 }} />
                  Cards
                </button>
              </div>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="space-y-4 mb-8">
            <div className="relative">
              <SearchIcon sx={{ fontSize: 20 }} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search embedded projects by title, category, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-white text-sm placeholder-slate-500 transition outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
              {domainCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                    activeCategory === cat.value
                      ? "bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/25"
                      : "bg-slate-950/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects View: Table Mode */}
          {viewMode === "table" ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900/90 text-slate-300 uppercase text-[11px] font-bold tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-4 px-4 sm:px-6 w-16 text-center">S.No</th>
                      <th className="py-4 px-4 sm:px-6">Project Title &amp; Domain</th>
                      <th className="py-4 px-4 sm:px-6 hidden md:table-cell">Hardware &amp; Tech Stack</th>
                      <th className="py-4 px-4 sm:px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredProjects.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-12 text-center text-slate-500">
                          No embedded projects found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredProjects.map((project, idx) => (
                        <tr
                          key={project.id}
                          className="hover:bg-slate-900/50 transition-colors group cursor-pointer"
                          onClick={() => setSelectedProject(project)}
                        >
                          <td className="py-4 px-4 sm:px-6 text-center font-mono text-xs text-sky-400 font-bold">
                            #{idx + 1}
                          </td>
                          <td className="py-4 px-4 sm:px-6">
                            <div className="font-bold text-white group-hover:text-sky-300 transition-colors">
                              {project.title}
                            </div>
                            <div className="text-xs text-slate-400 mt-1 flex flex-wrap items-center gap-2">
                              <span className="text-sky-400/90 font-medium">{project.domain}</span>
                              <span className="text-slate-600">•</span>
                              <span className="text-slate-400">{project.category}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 hidden md:table-cell">
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((t, i) => (
                                <span
                                  key={i}
                                  className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 text-center" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => setSelectedProject(project)}
                                className="px-3 py-1.5 rounded-lg bg-sky-950 border border-sky-500/40 text-sky-300 hover:bg-sky-600 hover:text-white text-xs font-semibold transition"
                              >
                                View Details
                              </button>
                              <button
                                onClick={() => handleCopyTitle(project.title, project.id)}
                                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
                                title="Copy Title"
                              >
                                {copiedId === project.id ? (
                                  <CheckCircleIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
                                ) : (
                                  <ContentCopyIcon sx={{ fontSize: 16 }} />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Projects View: Grid Cards Mode */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.length === 0 ? (
                <div className="col-span-full py-12 text-center text-slate-500">
                  No embedded projects found matching your search.
                </div>
              ) : (
                filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-2xl bg-slate-950 border border-slate-800/90 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-500/30">
                          #{idx + 1}
                        </span>
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2 leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs font-medium text-sky-400/90 mb-3">{project.domain}</p>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 py-2 rounded-lg bg-sky-950/80 hover:bg-sky-600 border border-sky-500/30 hover:border-sky-500 text-sky-300 hover:text-white text-xs font-semibold transition text-center"
                        >
                          View Details &amp; Abstract
                        </button>
                        <button
                          onClick={() => handleCopyTitle(project.title, project.id)}
                          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition"
                          title="Copy Title"
                        >
                          {copiedId === project.id ? (
                            <CheckCircleIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
                          ) : (
                            <ContentCopyIcon sx={{ fontSize: 16 }} />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition"
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded-md border border-sky-500/30">
                  {selectedProject.year}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                {selectedProject.title}
              </h3>

              <p className="text-sm font-semibold text-sky-400 mb-6">{selectedProject.domain}</p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    System Abstract
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Hardware &amp; Software Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-lg bg-sky-950/60 border border-sky-500/30 text-sky-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20want%20to%20develop%20the%202024-2025%20Embedded%20project:%20${encodeURIComponent(
                    selectedProject.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition"
                >
                  <WhatsAppIcon sx={{ fontSize: 18 }} />
                  Enquire on WhatsApp
                </a>
                <button
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      projectRequirements: `Enquiry for: ${selectedProject.title} (Embedded 2024-2025)`,
                    }));
                    setSelectedProject(null);
                    const el = document.getElementById("enquiry-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition"
                >
                  Book This Project
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Embedded Project Guidance & Architecture Section */}
      <section className="py-16 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
              <SettingsSuggestIcon sx={{ fontSize: 14 }} />
              Professional Mentorship
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Choose 1Crore Project for 2024-2025 Embedded Projects?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              From hardware prototyping and edge computing firmware to cloud backend deployment and thesis defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <MemoryIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Advanced Edge AI &amp; RTOS</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hands-on development with STM32 ARM Cortex-M7, ESP32-S3, Raspberry Pi 4, and real-time operating systems (FreeRTOS).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-sky-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <PrecisionManufacturingIcon sx={{ fontSize: 24 }} />
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <SpeedIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">100% Hardware Deliverables</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero simulation compromises. Every project includes fully assembled physical hardware, schematic files, and base papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Enquiry & Booking Form */}
      <section id="enquiry-section" className="py-16 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-500/30">
                Enrollment &amp; Project Booking
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                Get Started on Your 2024-2025 Embedded Project
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Fill out the form below to receive physical circuit kits, complete firmware source code, and mentorship in Chennai.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center"
              >
                <CheckCircleIcon sx={{ fontSize: 48 }} className="text-emerald-400 mb-3" />
                <h3 className="text-xl font-bold text-white">Thank You for Reaching Out!</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Our Embedded Systems Technical Lead will contact you shortly via phone &amp; WhatsApp with hardware deliverables.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold transition"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arun Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. arun@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Mobile / WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Academic Year
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={formData.academicYear}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-sm outline-none cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Requirement / Title Interest
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectRequirements}
                    onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-sm outline-none transition"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="emb2024-captcha"
                    required
                    checked={formData.captchaChecked}
                    onChange={(e) => setFormData({ ...formData, captchaChecked: e.target.checked })}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-sky-600 focus:ring-sky-500"
                  />
                  <label htmlFor="emb2024-captcha" className="text-xs text-slate-400">
                    I verify that I am a student or researcher requesting project development guidance.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-600/20 transition transform hover:-translate-y-0.5"
                >
                  Submit Project Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
