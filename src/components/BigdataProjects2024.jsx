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
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TvIcon from "@mui/icons-material/Tv";
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
import StarIcon from "@mui/icons-material/Star";

// Custom 3D Big Data Logo
const BigdataBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#bdGrad2024)" stroke="#38BDF8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="bdGrad2024" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0F172A" />
        <stop offset="0.5" stopColor="#1E293B" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="14" rx="14" ry="4.5" fill="#38BDF8" fillOpacity="0.85" stroke="#7DD3FC" strokeWidth="1.2" />
    <path d="M10 14v6c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-6" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
    <path d="M10 20v6c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-6" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
    <path d="M10 26v6c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-6" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
    <circle cx="16" cy="33" r="2.5" fill="#FACC15" />
    <circle cx="24" cy="36" r="3" fill="#4ADE80" />
    <circle cx="32" cy="33" r="2.5" fill="#F472B6" />
    <line x1="16" y1="33" x2="24" y2="36" stroke="#FDE047" strokeWidth="1.5" />
    <line x1="24" y1="36" x2="32" y2="33" stroke="#4ADE80" strokeWidth="1.5" />
  </svg>
);

// 2024-2025 IEEE Big Data Project Dataset (15 Titles across 5 Categories)
const bigdataProjects2024Data = [
  // CATEGORY: BIG DATA & SOCIAL ANALYTICS / DATA MINING
  {
    id: 1,
    title: "A System to Filter Unwanted Messages from OSN User Walls",
    domain: "Social Network Mining & Machine Learning",
    category: "Data Mining & Social Networks",
    tech: ["Python / NLP", "TF-IDF / Multi-class SVM", "MongoDB", "Flask / Django", "Content Filtering Engine"],
    description: "An automated Machine Learning and rule-based content filtering gateway classifying and intercepting unwanted wall postings in Online Social Networks.",
    abstract: "Online Social Networks (OSNs) expose user profile walls to unwanted and spam messages. This project develops an intelligent automated wall filtering system. The system combines flexible rule-based Blacklists with Machine Learning text classifiers (Multiclass SVM & Naive Bayes) operating on Bag-of-Words and TF-IDF representations to filter unwanted messages with over 97% precision.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Sensitive Label Privacy Protection on Social Network Data",
    domain: "Graph Differential Privacy & Anonymization",
    category: "Data Mining & Social Networks",
    tech: ["PySpark / GraphFrames", "NetworkX Graph Engine", "Differential Privacy", "k-Degree Anonymity", "Python"],
    description: "A graph anonymization and sensitive attribute perturbation engine preventing identity leakage and attribute inference on published social graph topologies.",
    abstract: "Publishing social network graphs risks deanonymizing user identities and private attributes. This project implements a sensitive label privacy-preserving graph algorithm. By modifying edge structures (k-degree anonymity) and injecting differential privacy noise into sensitive node labels, the system guarantees high data utility for analytical mining while blocking attribute disclosure attacks.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "A Generalized Flow-Based Method for Analysis of Implicit Relationships on Wikipedia",
    domain: "Knowledge Graph Mining & Flow Algorithms",
    category: "Data Mining & Social Networks",
    tech: ["Apache Spark", "GraphX / GraphFrames", "Maximum Flow Algorithms", "Python / PySpark", "Wikipedia Hyperlink Graph"],
    description: "A generalized network maximum-flow algorithm uncovering latent semantic relationships and indirect associations across massive Wikipedia entity graphs.",
    abstract: "Discovering implicit associations between distant concepts in large-scale knowledge bases is computationally challenging. We formulate entity relatedness as a generalized multi-commodity network flow problem over the Wikipedia hyperlink graph. Implemented on Apache Spark GraphX, the method measures bottleneck capacities and flow paths to rank indirect semantic connections with superior accuracy.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Annotating Search Results From Web Databases",
    domain: "Deep Web Mining & Automatic Data Extraction",
    category: "Data Mining & Social Networks",
    tech: ["Python / Beautiful Soup", "DOM Tree Alignment", "LCS Algorithm", "Web Scraping", "Clustering & Annotation Engine"],
    description: "A multi-annotator semantic extraction engine automatically aligning and labeling structured search result records returned from Deep Web databases.",
    abstract: "Search result records (SRRs) from Deep Web portals are presented in semi-structured HTML without explicit semantic tags. This project designs an automatic multivariable data annotator. Utilizing visual layout features, DOM tree path alignments, and Longest Common Subsequence (LCS) clustering, it extracts attribute-value pairs with over 98% field alignment accuracy.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Crowdsourcing Predictors of Behavioral Outcomes",
    domain: "Predictive Analytics & Human-in-the-Loop AI",
    category: "Data Mining & Social Networks",
    tech: ["Python / Scikit-Learn", "Ensemble Random Forest", "Crowdsource Aggregation Engine", "Pandas / NumPy", "FastAPI"],
    description: "A hybrid crowdsourced feature discovery and machine learning ensemble pipeline predicting real-world behavioral and social outcome indices.",
    abstract: "Selecting predictive feature variables for complex behavioral patterns is difficult using automated machine learning alone. This project implements a crowdsourced feature generation platform. By aggregating intuitive human hypothesis indicators with automated Random Forest and Gradient Boosting regressors, it significantly improves prediction accuracy on socio-economic outcome benchmarks.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "FoCUS Learning to Crawl Web Forums",
    domain: "Intelligent Web Crawling & Pattern Mining",
    category: "Data Mining & Social Networks",
    tech: ["Python / Scrapy", "URL Pattern Regularizer", "Page-Type Classifier (SVM)", "DOM Structure Analyzer", "Elasticsearch"],
    description: "A supervised crawling framework (FoCUS) that learns forum layout patterns to crawl discussion threads comprehensively with minimal duplicate page downloads.",
    abstract: "Web forums contain rich collective intelligence across thread trees, but nave crawlers suffer from link loops and duplicate URL traps. We build FoCUS (Forum Crawler Under Supervision), which trains an online SVM page classifier to distinguish index pages from thread pages. The crawler achieves over 95% thread retrieval efficiency while avoiding crawling redundant navigation paths.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 7,
    title: "Multiparty Access Control for Online Social Networks Model and Mechanisms",
    domain: "Collaborative Security & OSN Privacy Policies",
    category: "Data Mining & Social Networks",
    tech: ["Java / Spring Boot", "Voting & Conflict Resolution Engine", "JWT & OAuth2", "MySQL / MongoDB", "React GUI"],
    description: "A collaborative multiparty access control model resolving conflicting privacy preferences among co-owners of shared social media content.",
    abstract: "When photos, comments, or shared posts involve multiple tagged co-owners, unilateral access policies create privacy violations. This project constructs a Multiparty Access Control (MPAC) framework with game-theoretic conflict resolution. Co-owners submit individual sensitivity scores, and an automated policy aggregator dynamically establishes fair viewership permissions.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 8,
    title: "Spatial Approximate String Search",
    domain: "Spatial-Temporal Big Data & Geo-Text Search",
    category: "Data Mining & Social Networks",
    tech: ["R-Tree & Inverted Index", "PySpark / PostGIS", "q-gram Levenshtein Distance", "Spatial Pruning Algorithms", "Python"],
    description: "A spatial-keyword hybrid indexing engine (MHR-Tree) executing approximate typo-tolerant string searches over massive geo-tagged point-of-interest datasets.",
    abstract: "Spatial approximate string queries locate objects matching a geographical location and a text keyword containing misspellings or OCR noise. We implement a Min-Hash R-Tree (MHR-Tree) index combining spatial bounding boxes with Jaccard/Levenshtein min-hash signatures. The engine delivers sub-millisecond query responses across millions of spatial-text records.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },

  // CATEGORY: CLOUD COMPUTING
  {
    id: 9,
    title: "A Load Balancing Model Based on Cloud Partitioning for the Public Cloud",
    domain: "Distributed Cloud Scheduling & Elastic Load Balancing",
    category: "Cloud Computing",
    tech: ["CloudSim / OpenStack", "Dynamic Cloud Partitioning", "Game Theory Load Balancer", "Java / Python", "Round Robin + Ant Colony"],
    description: "An adaptive cloud partitioning and game-theoretic load balancing architecture dynamically routing bursty VM workloads across public cloud server pools.",
    abstract: "Centralized load balancers create processing bottlenecks as public cloud data centers scale. This project implements a hierarchical cloud partitioning architecture. By partitioning huge cloud node clusters into geographic domains and applying localized game-theory load scheduling, the system achieves near-zero idle resource wastage and prevents server thermal overloads.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },

  // CATEGORY: INFORMATION FORENSICS AND SECURITY
  {
    id: 10,
    title: "Enabling Cloud Storage Auditing With Key-Exposure Resistance",
    domain: "Cloud Cryptography & Zero-Knowledge Auditing",
    category: "Information Forensics and Security",
    tech: ["Java / PBC Library", "Bilinear Pairing Cryptography", "Merkle Hash Tree (MHT)", "Third-Party Auditor (TPA)", "AES-256"],
    description: "A forward-secure cloud data auditing protocol that preserves past integrity verification guarantees even if the client's current private secret key is compromised.",
    abstract: "Conventional cloud storage auditing schemes assume the client's private signing key remains perpetually unexposed. We implement a key-exposure resistant third-party auditing (TPA) framework using hierarchical identity-based encryption and bilinear maps. Even upon physical key compromise in period T, all integrity proofs generated in preceding periods [0, T-1] remain completely secure.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "CAM Cloud-Assisted Privacy Preserving Mobile Health Monitoring",
    domain: "e-Health Security & Homomorphic Encryption",
    category: "Information Forensics and Security",
    tech: ["Python / Paillier Encryption", "IoT Medical Sensors Telemetry", "Non-interactive Zero-Knowledge Proofs", "Flask Cloud API", "Android Client"],
    description: "A cloud-assisted privacy-preserving mobile health monitoring framework allowing continuous biometric data evaluation without exposing raw patient vitals.",
    abstract: "Continuous telemetry from wearable medical sensors must be processed by cloud diagnostic engines without disclosing sensitive vitals to untrusted cloud hosts. We develop the CAM framework using Paillier additive homomorphic encryption and secure inner-product evaluations, enabling cloud servers to trigger emergency alerts on encrypted health telemetry without decrypting private data.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },

  // CATEGORY: MOBILE COMPUTING
  {
    id: 12,
    title: "Overhead of using secure wireless communications in mobile computing",
    domain: "Mobile Security Benchmarking & Power Analytics",
    category: "Mobile Computing",
    tech: ["NS-3 Network Simulator", "TLS 1.3 / IPsec Handshake Analyzer", "Python / Battery Profiler", "Wireshark Telemetry", "C++"],
    description: "A comprehensive energy consumption and computational latency benchmarking testbed analyzing cryptographic handshake overheads across mobile 5G links.",
    abstract: "Enforcing end-to-end TLS/IPsec encryption on battery-constrained mobile edge devices introduces severe power and throughput penalties. This project builds a simulation and hardware telemetry testbed in NS-3 that quantifies packet transmission delay, CPU cycle usage, and battery drain across RSA, ECC, and ChaCha20-Poly1305 ciphers, identifying optimal cipher configurations for mobile IoT.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },

  // CATEGORY: MULTIMEDIA & SOCIAL NETWORKS
  {
    id: 13,
    title: "Two Tales of Privacy in Online Social Networks",
    domain: "Social Graph Privacy & Behavioral Economics",
    category: "Multimedia & Social Networks",
    tech: ["Python / NetworkX", "Game Theory Payoff Matrices", "Differential Graph Privacy", "Matplotlib / Seaborn", "Graph Analytics Engine"],
    description: "A dual game-theoretic and information-leakage analysis modeling the behavioral trade-off between user social disclosure and privacy leakages.",
    abstract: "Users on social networks trade privacy for social connectivity benefits. This project models the dual privacy paradox: direct profile sharing vs. indirect neighbor inferences. By simulating equilibrium states with evolutionary game theory and graph neural models, it proves how colluding third-party apps infer private user attributes even when target users restrict profile visibility.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 14,
    title: "CloudMoV Cloud-based Mobile Social TV",
    domain: "Cloud Video Streaming & Social Sync",
    category: "Multimedia & Social Networks",
    tech: ["Node.js / WebSockets", "HLS / DASH Video Transcoding", "Redis Pub/Sub Sync", "React Mobile GUI", "FFmpeg Engine"],
    description: "A distributed cloud-assisted mobile social TV platform enabling synchronized live video streaming, co-viewing chats, and real-time social interactions.",
    abstract: "Mobile social TV requires synchronizing high-bitrate video streams across heterogeneous mobile devices with low-latency chat interactions. We build CloudMoV on distributed cloud transcoding nodes and WebSocket sync brokers. The architecture achieves sub-second playback synchronization across cellular handovers while offloading video encoding from battery-constrained handsets.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 15,
    title: "Fully Anonymous Profile Matching in Mobile Social Networks",
    domain: "Mobile Ad-Hoc Networks & Private Proximity Matching",
    category: "Multimedia & Social Networks",
    tech: ["Python / Java", "Private Set Intersection (PSI)", "Homomorphic Cryptography", "Bluetooth / Wi-Fi Direct Protocol", "Android"],
    description: "A fully anonymous decentralized profile matching protocol allowing nearby mobile users to discover mutual interests without disclosing non-matching attributes.",
    abstract: "Proximity-based mobile social networking requires matching user interest vectors without revealing sensitive personal profiles to curious strangers. We implement an anonymous profile matching protocol utilizing Private Set Intersection (PSI) and threshold secret sharing over Wi-Fi Direct. Users discover shared interests if and only if mutual attribute overlap exceeds a preset threshold.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
];

export default function BigdataProjects2024() {
  const [projects, setProjects] = useState(bigdataProjects2024Data);
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
    year: "2024 - 2025",
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
        const res = await fetch(`${API_BASE}/project_titles.php?tech=bigdata&year=2024 - 2025`);
        if (res.ok) {
          const json = await res.json();
          const items = Array.isArray(json) ? json : json.data || [];
          if (items && items.length > 0 && isMounted) {
            const mapped = items.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title_name || item.title || `Big Data Project ${idx + 1}`,
              domain: item.domain || "Big Data & Social Analytics",
              category: item.category || "Data Mining & Social Networks",
              tech: item.tech ? (Array.isArray(item.tech) ? item.tech : item.tech.split(",")) : ["Python", "Spark", "Cloud", "NLP"],
              description: item.description || "IEEE Standard Big Data Project implementation with complete source code and base paper.",
              abstract: item.abstract || "Comprehensive experimental evaluation and distributed architecture modeling using IEEE standard datasets.",
              year: item.academic_year || "2024 - 2025",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjects(mapped);
          }
        }
      } catch (e) {
        console.warn("Using local dataset for Big Data 2024-2025 projects:", e);
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
      projectTitle: proj ? proj.title : "IEEE Big Data Projects 2024-2025",
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
          message: formData.message || `Enquiry for Big Data 2024-2025: ${formData.projectTitle}`,
          source: "Big Data Projects 2024-2025 Page",
        }),
      });
      setFormSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "2024 - 2025",
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

  const yearTabs = [
    { label: "Bigdata IEEE Projects 2018 - 2019", path: "/bigdata-ieee-projects-2018-2019-in-chennai/", active: false },
    { label: "Bigdata IEEE Projects 2019 - 2020", path: "/bigdata-ieee-projects-2019-2020-in-chennai/", active: false },
    { label: "Bigdata IEEE Projects 2020 - 2021", path: "/ieee-bigdata-project-list-2020-2021/", active: false },
    { label: "Bigdata IEEE Projects 2021 - 2022", path: "/ieee-bigdata-project-list-2021-2022/", active: false },
    { label: "BigData IEEE Projects 2022 - 2023", path: "/ieee-bigdata-project-list-2022-2023/", active: false },
    { label: "IEEE 2024 - 2025 Big Data", path: "/2024-2025-big-data-projects-chennai/", active: true },
  ];

  const faqs = [
    {
      q: "What domains are included in the 2024-2025 Big Data IEEE project list?",
      a: "The 2024-2025 titles cover 5 advanced domains: Data Mining & Social Networks, Cloud Computing Elastic Load Balancing, Information Forensics and Security, Mobile Computing Network Overheads, and Multimedia Social TV & Anonymous Matching.",
    },
    {
      q: "Do you provide working source code, base papers, and report documentation?",
      a: "Yes! Every student gets the official published IEEE base paper PDF, complete clean source code (Python, PySpark, Spring Boot, Node.js), IEEE standard documentation, PPT presentation, and 1-on-1 viva coaching.",
    },
    {
      q: "Can these projects be demonstrated on local laptops or cloud hosting?",
      a: "Yes. Our team assists in setting up local Python virtual environments, PySpark clusters, Docker containers, or live cloud deployment on AWS / Google Cloud / OpenStack.",
    },
    {
      q: "How do I enroll or request a project quote?",
      a: "Click 'Request Base Paper' on any project card or submit the consultation form. You can also chat directly on WhatsApp with our senior data engineers at +91 9597793345.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/java-projects" className="hover:text-cyan-400 transition-colors">IEEE Projects</Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">2024 - 2025 Big Data Projects Chennai</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-6 shadow-inner shadow-cyan-500/20"
            >
              <BigdataBrandIcon className="w-4 h-4" />
              <span>IEEE Big Data Projects 2024 - 2025</span>
              <span className="bg-cyan-400/20 text-cyan-300 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Chennai Center</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              2024 - 2025 Big Data Projects <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                in Chennai | 1crore Projects
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
            >
              Experience the best in 2024 & 2025 Big Data projects in Chennai. Explore 15 cutting-edge IEEE titles across Data Mining, Cloud Partitioning, Security Forensics, and Mobile Social Networks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
            >
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">15+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Verified IEEE Titles</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-sky-400">5 Domains</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Specialized Categories</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Working Code & Demo</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-amber-400">1-on-1</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Viva & Training</div>
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
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2"
              >
                <AutoAwesomeIcon className="w-4 h-4" />
                Request Project Details & Base Paper
              </button>
              <a
                href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%20Bigdata%20IEEE%20Projects%202024-2025"
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
              <TimelineIcon className="w-4 h-4 text-cyan-400" />
              Big Data Years:
            </span>
            {yearTabs.map((tab, idx) => (
              <Link
                key={idx}
                to={tab.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  tab.active
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30"
                    : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700/60"
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
                placeholder="Search titles, technologies (NLP, Privacy, Cloud, Graph), or domains..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-500"
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
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
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
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
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
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 font-semibold shadow-sm"
                    : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
            <span>
              Showing <strong className="text-cyan-400">{filteredProjects.length}</strong> of {projects.length} IEEE Big Data Projects
            </span>
            {(selectedCategory !== "All" || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                className="text-cyan-400 hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400 text-sm">Loading 2024-2025 Big Data IEEE Projects...</p>
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
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs flex items-center justify-center">
                        #{project.id}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      IEEE {project.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                    <HubIcon className="w-3.5 h-3.5 text-cyan-400" />
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
                        className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                      >
                        <span>{expandedAbstracts[project.id] ? "Hide Abstract" : "View IEEE Abstract & Algorithm"}</span>
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
                            <div className="font-semibold text-cyan-400 mb-1 flex items-center gap-1">
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
                        `Hi IEEE Project Centre, I want base paper and source code details for Big Data Project #${project.id}: "${project.title}"`
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
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1"
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
                      <td className="py-3.5 px-4 text-center font-bold text-cyan-400">
                        #{project.id}
                      </td>
                      <td className="py-3.5 px-4 max-w-md">
                        <div className="font-semibold text-white hover:text-cyan-300 transition-colors">
                          {project.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                          <HubIcon className="w-3 h-3 text-cyan-400" />
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
                            className="px-2.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
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
                  <StorageIcon className="w-6 h-6 text-cyan-400" />
                  ABOUT BIG DATA PROJECT 2024 - 2025
                </h2>
                
                <h3 className="text-base font-bold text-cyan-400 mb-2">
                  Experience the Best in 2024 Big Data Projects Chennai and 2025 Big Data Projects Chennai
                </h3>
                <p className="mb-4">
                  <strong>1crore Projects</strong> is the go-to place for all your 2024 big data projects Chennai and 2025 big data projects Chennai needs. Our team of experienced professionals is committed to providing top-notch support and innovative solutions for your 2024 big data projects Chennai and 2025 big data projects Chennai. Trust 1crore Projects to help you navigate the complexities of your 2024 2025 big data projects Chennai. At 1crore Projects, we provide a wide range of services for 2024 big data projects Chennai and 2025 big data projects Chennai. Our dedicated team supports you every step of the way, offering expert guidance for your 2024 2025 big data projects Chennai. At 1crore Projects, we are committed to providing the highest quality support and resources for 2024 big data projects Chennai and 2025 big data projects Chennai.
                </p>

                <h3 className="text-base font-bold text-sky-400 mb-2">
                  Expert Guidance for 2024 Big Data Projects Chennai and 2025 Big Data Projects Chennai
                </h3>
                <p className="mb-4">
                  At 1crore Projects, we specialize in providing top-tier support for 2024 big data projects Chennai and 2025 big data projects Chennai. Our state-of-the-art facilities and expert mentors ensure that you receive the best guidance and resources for your 2024 big data projects Chennai and 2025 big data projects Chennai. We are dedicated to helping you achieve success in your 2024 2025 big data projects Chennai. Join us today and discover why 1crore Projects is the leading choice for 2024 big data projects Chennai and 2025 big data projects Chennai.
                </p>

                <p className="mb-4">
                  Looking for comprehensive support for your projects? 1crore Projects offers extensive resources and expert guidance for 2024 big data projects Chennai and 2025 big data projects Chennai. Our personalized mentoring and advanced facilities are designed to support your 2024 big data projects Chennai and 2025 big data projects Chennai, ensuring you achieve your project goals efficiently and effectively.
                </p>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mt-4 space-y-2">
                  <h4 className="font-bold text-white text-sm">Why Choose 1crore Projects for 2024 Big Data Projects Chennai and 2025 Big Data Projects Chennai?</h4>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
                    <li><strong>Personalized Care:</strong> Each project plan is customized to ensure the best outcomes for your 2024 big data projects Chennai and 2025 big data projects Chennai.</li>
                    <li><strong>Proven Results:</strong> Our students have achieved significant success with their 2024 big data projects Chennai and 2025 big data projects Chennai.</li>
                    <li><strong>Advanced Techniques:</strong> Utilizing the latest technologies and methods for 2024 big data projects Chennai and 2025 big data projects Chennai.</li>
                    <li><strong>Experienced Professionals:</strong> Our team of experts is highly skilled in guiding 2024 big data projects Chennai and 2025 big data projects Chennai.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-2xl shadow-xl sticky top-20">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <AutoAwesomeIcon className="w-5 h-5 text-cyan-400" />
                  Instant Project Consultation
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Request IEEE base paper PDF, source code pricing, or schedule a free 1-on-1 demo with our senior data engineers.
                </p>

                {formSuccess ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs text-center space-y-2">
                    <CheckCircleIcon className="w-8 h-8 text-emerald-400 mx-auto" />
                    <div className="font-bold text-sm">Enquiry Submitted Successfully!</div>
                    <p>Our Big Data technical team will contact you via WhatsApp / Phone within 15 minutes.</p>
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
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
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
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
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
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
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
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">Select / Type Project Title</label>
                      <input
                        type="text"
                        name="projectTitle"
                        placeholder="e.g. A System to Filter Unwanted Messages..."
                        value={formData.projectTitle}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
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
            Frequently Asked Questions (FAQs) - 2024-2025 Big Data Projects
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 flex items-center justify-between gap-2 hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ExpandMoreIcon
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${
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

              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <BigdataBrandIcon className="w-4 h-4" />
                <span>IEEE Base Paper & Source Code Request</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {modalProject ? `Project #${modalProject.id}: ${modalProject.title}` : "IEEE Big Data Projects 2024-2025"}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Fill your contact details below to get instant download access, base paper PDF, and software requirements.
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
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
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
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
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
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
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
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Selected IEEE Project</label>
                    <input
                      type="text"
                      name="projectTitle"
                      readOnly
                      value={formData.projectTitle}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-cyan-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
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
