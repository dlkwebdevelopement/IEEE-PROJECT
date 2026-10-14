import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { API_BASE } from "../api";
import { sendToWhatsApp, submitEnquiryWithWhatsApp, DEFAULT_WHATSAPP_NUMBER } from "../utils/whatsapp";

// Material UI Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import { 
  ProgramAvatar, 
  ProgramTechBadges, 
  getProgramMeta,
  RoundTechOrb,
  JavaIcon, 
  PythonIcon, 
  PhpIcon, 
  DotNetIcon, 
  VbNetIcon, 
  DatabaseIcon, 
  ReactIcon, 
  AndroidIcon, 
  IotIcon, 
  WebIcon,
  AiChipIcon,
  SecurityLockIcon,
  SpringIcon
} from "./ProgramIconBadge";

// Project Data by Category
const allProjectsData = [
  {
    id: 1,
    title: "A System to Filter Unwanted Messages from OSN User Walls",
    domain: "Core Java / OSN",
    category: "General Java",
    tech: ["Java 17", "Machine Learning", "NLP", "MySQL", "Swing/Web"],
    description: "An automated rule-based and machine-learning system for filtering unwanted, vulgar, and spam messages from Online Social Network (OSN) user walls based on user-defined privacy policies.",
    abstract: "Online Social Networks (OSNs) are today the most popular interactive medium to communicate and share information. However, uncontrolled message posting can lead to spam and offensive content. This project implements an automated content-based filtering system using text classification algorithms and flexible wall-owner rule engines.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Enabling Local Privacy Protection on Data Network Data",
    domain: "Data Privacy & Security",
    category: "General Java",
    tech: ["Java", "Differential Privacy", "Cryptography", "Network Sockets"],
    description: "A framework providing local privacy protection for sensitive network traffic data before collection, ensuring individual privacy without compromising analytical utility.",
    abstract: "Collecting network traffic traces is essential for network management and security analysis. However, traces often contain private user information. We present a local differential privacy mechanism that perturbs sensitive attributes at the source while preserving aggregate network traffic statistics.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "An Item-Level Heat-Based Method for Analyzing Topic Trends on Japanese Wikipedia",
    domain: "Big Data / NLP",
    category: "General Java",
    tech: ["Java", "Text Mining", "TF-IDF", "Heat Distribution Algorithm"],
    description: "An item-level heat conduction model designed to analyze and predict temporal topic trend evolutions across massive unstructured Wikipedia datasets.",
    abstract: "Understanding topic popularity dynamics in large-scale online encyclopedias is critical for information retrieval and trend forecasting. This project adapts heat diffusion models to track how page view bursts propagate through hyperlinked knowledge networks.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Annotating Search Results from Web Databases",
    domain: "Web Mining & Databases",
    category: "General Java",
    tech: ["Java", "HTML Parser", "DOM Tree Analysis", "SQL Database"],
    description: "An automatic annotation system that extracts, aligns, and assigns semantic labels to structured data units returned from Deep Web search engines.",
    abstract: "Web databases generate search result pages dynamically containing rich structured data. This project proposes an unsupervised multi-annotator framework that combines tag alignment, schema matching, and value type analysis to automatically annotate deep web records.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Crowdsourcing Predictors of Behavioral Outcomes",
    domain: "Crowdsourcing & Analytics",
    category: "General Java",
    tech: ["Java", "Statistical Modeling", "Web Services", "MySQL"],
    description: "A crowdsourcing platform that aggregates crowd predictions to accurately forecast human behavioral outcomes and market trends using consensus algorithms.",
    abstract: "Wisdom of the crowd offers powerful predictive capabilities. This project presents a structured crowdsourcing pipeline that evaluates participant confidence weights and reputation metrics to deliver highly reliable behavioral trend predictions.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "DeDOS: Learning to Defeat Web Scrapers",
    domain: "Cyber Security & Web",
    category: "General Java",
    tech: ["Java", "Pattern Recognition", "Bot Detection", "Spring Boot"],
    description: "A dynamic defense system that identifies and mitigates automated web scraping bots by analyzing behavioral navigation paths and request rates.",
    abstract: "Malicious web scrapers steal proprietary data and degrade server availability. DeDOS introduces real-time behavioral fingerprinting and dynamic honey-token traps to identify scrapers while ensuring genuine users experience zero latency.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Multi-party Computation for Online Social Networks: A Private Web Service",
    domain: "Cryptography & Privacy",
    category: "General Java",
    tech: ["Java", "Secure MPC", "Homomorphic Encryption", "REST API"],
    description: "A secure multi-party computation protocol enabling social network users to compute joint social analytics without disclosing their private data.",
    abstract: "Social graph analysis often requires computing functions over multiple users' private graphs. We implement a practical secure multi-party computation (SMPC) web service in Java that guarantees cryptographic data privacy against semi-honest adversaries.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 8,
    title: "Spatial Approximation Using Voronoi",
    domain: "Spatial Databases & GIS",
    category: "General Java",
    tech: ["Java", "Computational Geometry", "Voronoi Diagrams", "GUI Map View"],
    description: "An efficient spatial query approximation algorithm utilizing Voronoi diagrams to solve nearest neighbor and spatial partition queries rapidly.",
    abstract: "Spatial databases require fast indexing for location-based services. This project implements Voronoi diagram partitions to provide real-time spatial proximity approximations with minimal computational overhead.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 9,
    title: "A Cloud-Secure Log Model based on Cloud Partitioning Service in Public Cloud",
    domain: "Cloud Computing",
    category: "Cloud Computing",
    tech: ["Java", "Cloud Storage API", "AES-256", "Log Verification", "Hash Chain"],
    description: "A tamper-evident cloud log audit architecture using dynamic cloud partitioning and cryptographic hash chains to ensure log integrity in untrusted public clouds.",
    abstract: "System audit logs stored in public clouds are vulnerable to unauthorized alteration by malicious insiders or compromised cloud nodes. This system implements a decentralized partitioned logging architecture with continuous cryptographic integrity proofs.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Enabling Efficient Fingerprint using Minutiae-based Matching",
    domain: "Information Forensics",
    category: "Security & Forensics",
    tech: ["Java", "Image Processing", "Minutiae Extraction", "Pattern Matching"],
    description: "A high-speed fingerprint identification system utilizing optimized minutiae extraction and rotational alignment algorithms for biometric forensics.",
    abstract: "Biometric authentication systems require both high precision and rapid matching speeds over massive databases. We implement an enhanced minutiae ridge-ending and bifurcation extraction pipeline with geometric alignment in Java.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 11,
    title: "A Multimodal Framework for Enhancing Multi-Biometric Identification",
    domain: "Biometric Security",
    category: "Security & Forensics",
    tech: ["Java", "Fusion Algorithms", "Face & Fingerprint Recognition", "MySQL"],
    description: "A multi-modal biometric framework combining facial geometry and fingerprint features at the score-level fusion to achieve near-zero false acceptance rates.",
    abstract: "Single biometric modalities often suffer from noise and spoofing vulnerabilities. This project designs a score-level weighted fusion framework integrating fingerprint and facial recognition algorithms to ensure foolproof identity authentication.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "User Search Profiling: A Context-Aware Communication Protocol for Mobile Devices",
    domain: "Mobile Computing",
    category: "Mobile Computing",
    tech: ["Java", "Android/Mobile Sockets", "Context-Aware Computing", "REST API"],
    description: "A lightweight mobile protocol that builds personalized user search profiles considering battery, location, and temporal context to optimize query relevance.",
    abstract: "Mobile search demands context awareness without exhausting handheld device resources. We introduce an adaptive profiling protocol that balances search personalization accuracy against mobile energy consumption.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Geo-Dates: Diffusing Data in Online Social Networks",
    domain: "Multimedia & Social Networks",
    category: "Multimedia",
    tech: ["Java", "Graph Theory", "Geo-Spatial Indexing", "Information Diffusion"],
    description: "A spatio-temporal information diffusion model that tracks how multimedia content and location-tagged updates spread across geographic social circles.",
    abstract: "Analyzing the viral propagation of multimedia across geographic regions is vital for targeted marketing and viral epidemiology. This project simulates and analyzes geo-social diffusion dynamics using real-world location-based social graphs.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 14,
    title: "A Robust Multicast Routing Protocol for Mobile IPTV",
    domain: "Multimedia & Networking",
    category: "Multimedia",
    tech: ["Java", "Multicast Sockets", "Video Streaming", "QoS Optimization"],
    description: "A QoS-aware multicast streaming routing protocol designed for seamless high-definition video distribution to mobile IPTV clients across diverse networks.",
    abstract: "Mobile IPTV faces bandwidth fluctuations and handoff packet losses. We present a fault-tolerant tree-based multicast routing protocol with proactive packet recovery that ensures uninterrupted multimedia streaming quality.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "Buffer Management for Media Streaming Services in Diverse Networks",
    domain: "Multimedia & Streaming",
    category: "Multimedia",
    tech: ["Java", "Adaptive Bitrate", "Buffer Control", "TCP/UDP Protocols"],
    description: "An adaptive client-side buffer management algorithm that dynamically adjusts video segment caching to eliminate playback stutter on fluctuating bandwidth.",
    abstract: "Smooth multimedia streaming depends critically on intelligent buffer allocation. This project implements a predictive buffer management controller that dynamically throttles chunk prefetching based on real-time network throughput variations.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
];

const yearNavigationLinks = [
  { label: "IEEE Java Projects 2024 - 2025", path: "/2024-2025-java-ieee-projects", active: true },
  { label: "IEEE Java Projects 2022 - 2023", path: "/2022-2023-java-ieee-projects" },
  { label: "IEEE Java Projects 2021 - 2022", path: "/java-ieee-projects-2021-2022-in-chennai" },
  { label: "IEEE Java Projects 2020 - 2021", path: "/java-ieee-projects-2020-2021-in-chennai" },
  { label: "IEEE Java Projects 2019 - 2020", path: "/java-ieee-projects-2019-2020-in-chennai" },
  { label: "IEEE Java Projects 2018 - 2019", path: "/java-ieee-projects-2018-2019-in-chennai" },
  { label: "IEEE Java Projects 2017 - 2018", path: "/java-ieee-projects-2017-2018-in-chennai" },
  { label: "IEEE Java Projects 2016 - 2017", path: "/java-ieee-projects-2016-2017-in-chennai" },
  { label: "IEEE Java Projects 2015 - 2016", path: "/java-ieee-projects-2015-2016-in-chennai" },
  { label: "IEEE Java Projects 2014 - 2015", path: "/java-ieee-projects-2014-2015-in-chennai" },
  { label: "IEEE Java Projects 2013 - 2014", path: "/java-ieee-projects-2013-2014-in-chennai" },
];

const domainCategories = [
  { label: "All Domains", value: "All", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
  { label: "General Java", value: "General Java", icon: <CodeIcon sx={{ fontSize: 18 }} /> },
  { label: "Cloud Computing", value: "Cloud Computing", icon: <CloudIcon sx={{ fontSize: 18 }} /> },
  { label: "Security & Forensics", value: "Security & Forensics", icon: <SecurityIcon sx={{ fontSize: 18 }} /> },
  { label: "Mobile Computing", value: "Mobile Computing", icon: <PhoneAndroidIcon sx={{ fontSize: 18 }} /> },
  { label: "Multimedia", value: "Multimedia", icon: <PermMediaIcon sx={{ fontSize: 18 }} /> },
];

const faqs = [
  {
    q: "What is included in the IEEE Java Project Package?",
    a: "Every package includes complete Java source code, MySQL database dump, IEEE base paper, detailed system design documentation, PPT presentations, and full viva voce guidance."
  },
  {
    q: "Can I customize the project modules or add new features?",
    a: "Yes! Our senior Java developers can add custom modules, integrate REST APIs, or tailor the project to meet your university's specific requirements."
  },
  {
    q: "Do you provide installation and execution support on my laptop?",
    a: "Absolutely. We provide step-by-step setup support via AnyDesk/TeamViewer or in-person at our Chennai project centres in Vadapalani and Tambaram."
  },
  {
    q: "How can I book a project or request a live demo?",
    a: "You can submit the enquiry form on this page, call us directly at 7299951536, or connect with our senior technical advisors on WhatsApp."
  }
];

export default function JavaProjects2024() {
  const [projectsList, setProjectsList] = useState(allProjectsData);
  const [selectedYear, setSelectedYear] = useState("IEEE Java Projects 2024 - 2025");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'grid'
  const [selectedProject, setSelectedProject] = useState(null); // For Abstract Modal
  const [copiedId, setCopiedId] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    academicYear: "2024 - 2025",
    projectRequirements: "IEEE Projects",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  // Scroll to top and fetch dynamic project titles from backend
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?year=2024 - 2025`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "General Java",
              category: item.category || "General Java",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["Java", "MySQL"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2024 - 2025",
              difficulty: item.difficulty || "Intermediate",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2024-2025 projects");
      }
    };
    fetchDynamicProjects();
  }, []);

  // Filtered Projects Logic
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

  const handleCopyTitle = (proj) => {
    navigator.clipboard.writeText(proj.title);
    setCopiedId(proj.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.captchaChecked) {
      alert("Please verify the security captcha checkbox.");
      return;
    }
    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      academicYear: formData.academicYear || "2024 - 2025",
      projectTitle: formData.projectRequirements,
      requirement: formData.projectRequirements,
      message: "Enquiry from Java Projects 2024-2025 Page",
      source: "Java IEEE Projects 2024-2025"
    };

    try {
      await submitEnquiryWithWhatsApp(payload, {
        openWhatsApp: true,
        whatsappNumber: DEFAULT_WHATSAPP_NUMBER
      });
    } catch (err) {
      console.warn("Could not post enquiry to backend:", err);
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        academicYear: "2024 - 2025",
        projectRequirements: "IEEE Projects",
        captchaChecked: false,
      });
    }, 4000);
  };

  return (
    <div className="font-sans bg-[#f8fafc] min-h-screen flex flex-col text-slate-800 antialiased selection:bg-[#ff8200] selection:text-white">
      
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Premium 3D Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#0a192f] via-[#0d2346] to-[#071328] text-white pt-8 pb-14 overflow-hidden border-b-4 border-[#ff8200]">
        {/* Background Ambient Glows & Tech Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff8200] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00a8cc] rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px]" />
        </div>

        <div className="max-w-[1360px] mx-auto px-4 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-4">
            <Link to="/" className="hover:text-[#ff8200] transition-colors !no-underline text-slate-300 flex items-center gap-1">
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-slate-400">IEEE Projects</span>
            <span>/</span>
            <span className="text-[#ff8200] font-semibold">Java IEEE Projects ({selectedYear.replace("IEEE Java Projects ", "")})</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Content Column: Clean, Bold, Card-Free */}
            <div className="flex-1 max-w-2xl text-left">
              
              {/* 3D Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffaa40] text-xs font-bold uppercase tracking-wider mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <VerifiedIcon sx={{ fontSize: 16 }} className="text-[#ffaa40]" />
                <span>2024 - 2025 Approved IEEE Standards</span>
              </div>

              {/* Page Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-4 drop-shadow-md">
                JAVA IEEE PROJECTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#ffaa00]">IN CHENNAI</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-xl">
                Explore our curated list of 2024 & 2025 IEEE Java Projects designed for B.E, B.Tech, M.E, MCA, and Diploma students. Engineered with Java 21, Spring Boot, Microservices, and MySQL backend with 100% executable source code and Viva voce preparation.
              </p>

              {/* 3D Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects-catalog"
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white px-7 py-3.5 rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_8px_25px_rgba(255,130,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-98 !no-underline"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>View All 2024-2025 Titles</span>
                    <ArrowForwardIcon sx={{ fontSize: 18 }} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                </a>
                <a
                  href="https://wa.me/917299951536?text=Hi,%20I%20am%20looking%20for%20IEEE%20Java%20Projects%202024-2025."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] hover:brightness-110 text-white px-7 py-3.5 rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_8px_25px_rgba(16,185,129,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-98 !no-underline"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <WhatsAppIcon sx={{ fontSize: 19 }} />
                    <span>WhatsApp Live Demo</span>
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: ONLY ROUND 3D REAL BRAND ICONS */}
            <div className="w-full lg:w-auto flex-1 flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-5 sm:gap-6 w-full max-w-[480px]">
                <RoundTechOrb
                  name="Java 21"
                  icon={<JavaIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-orange-500/50 via-amber-500/20 to-transparent"
                  ringColor="border-orange-400/50"
                  shadowColor="rgba(234,88,12,0.45)"
                  labelColor="text-orange-300"
                  duration={3.6}
                  delay={0}
                />
                <RoundTechOrb
                  name="Spring Boot"
                  icon={<SpringIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-emerald-500/50 via-green-500/20 to-transparent"
                  ringColor="border-emerald-400/50"
                  shadowColor="rgba(109,179,63,0.45)"
                  labelColor="text-emerald-300"
                  duration={4.2}
                  delay={0.3}
                />
                <RoundTechOrb
                  name="Python & AI"
                  icon={<PythonIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-sky-500/50 via-blue-500/20 to-transparent"
                  ringColor="border-sky-400/50"
                  shadowColor="rgba(2,132,199,0.45)"
                  labelColor="text-sky-300"
                  duration={3.8}
                  delay={0.6}
                />
                <RoundTechOrb
                  name="Cloud Web"
                  icon={<WebIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-cyan-500/50 via-sky-500/20 to-transparent"
                  ringColor="border-cyan-400/50"
                  shadowColor="rgba(2,132,199,0.45)"
                  labelColor="text-cyan-300"
                  duration={4.0}
                  delay={0.2}
                />
                <RoundTechOrb
                  name="MySQL DB"
                  icon={<DatabaseIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-teal-500/50 via-cyan-500/20 to-transparent"
                  ringColor="border-teal-400/50"
                  shadowColor="rgba(0,117,143,0.45)"
                  labelColor="text-teal-300"
                  duration={4.4}
                  delay={0.5}
                />
                <RoundTechOrb
                  name="Security"
                  icon={<SecurityLockIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-emerald-500/50 via-teal-500/20 to-transparent"
                  ringColor="border-emerald-400/50"
                  shadowColor="rgba(16,185,129,0.45)"
                  labelColor="text-emerald-300"
                  duration={3.5}
                  delay={0.7}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Main Content Section */}
      <div className="max-w-[1360px] mx-auto px-4 lg:px-8 py-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT CONTENT COLUMN (8 COLS) ================= */}
          <div className="lg:col-span-8 flex flex-col space-y-7" id="projects-catalog">
            
            {/* 3D Year Selector Matrix */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff8200] shadow-[0_0_8px_rgba(255,130,0,0.8)]" />
                  Select Academic Year
                </h3>
                <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-2.5 py-1 rounded-full">
                  11 Years Available
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {yearNavigationLinks.map((yr, idx) => {
                  const isCurrent = yr.active;
                  return (
                    <Link
                      key={idx}
                      to={yr.path}
                      className={`px-3.5 py-2.5 text-xs sm:text-[13px] font-bold rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-1.5 border !no-underline ${
                        isCurrent
                          ? "bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] text-white shadow-[0_4px_14px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] border-amber-300/40 scale-[1.02]"
                          : "bg-slate-50/90 hover:bg-white text-slate-700 hover:text-[#ff8200] border-slate-200 hover:border-orange-200 shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
                      }`}
                    >
                      <span>{yr.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Search & Domain Filter Control Station */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-200/80 space-y-5 relative overflow-hidden">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#0284c7]" />

              {/* 1. Top Row: Search Input + Segmented View Switcher */}
              <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center justify-between">
                <div className="relative flex-1 group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-orange-500/10 text-[#ff8200] flex items-center justify-center transition-colors group-focus-within:bg-[#ff8200] group-focus-within:text-white pointer-events-none">
                    <SearchIcon sx={{ fontSize: 18 }} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search projects by title, domain, or technology (e.g. Cloud, Privacy, ML)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-13 pr-10 py-3 text-sm font-medium bg-slate-50/80 hover:bg-white border-2 border-slate-200/90 rounded-2xl focus:outline-none focus:border-[#ff8200] focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all text-slate-800 placeholder:text-slate-400 shadow-inner"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-xs font-black transition-colors cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Table / Grid Switcher & Count Pill */}
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                  <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-xs font-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{filteredProjects.length} Available</span>
                  </span>

                  <div className="flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80 shadow-inner">
                    <button
                      onClick={() => setViewMode("table")}
                      className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-xs font-black cursor-pointer ${
                        viewMode === "table"
                          ? "bg-white text-[#ff8200] shadow-[0_2px_8px_rgba(0,0,0,0.08)] scale-[1.02]"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                      title="Table View"
                    >
                      <TableRowsIcon sx={{ fontSize: 17 }} />
                      <span>Table</span>
                    </button>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-xs font-black cursor-pointer ${
                        viewMode === "grid"
                          ? "bg-white text-[#ff8200] shadow-[0_2px_8px_rgba(0,0,0,0.08)] scale-[1.02]"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                      title="Card Grid View"
                    >
                      <GridViewIcon sx={{ fontSize: 17 }} />
                      <span>Grid</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. Domain Filter Section */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                    Research Domain
                  </span>
                  {activeCategory !== "All" && (
                    <button
                      onClick={() => setActiveCategory("All")}
                      className="text-xs font-bold text-[#ff8200] hover:text-[#e06d00] hover:underline cursor-pointer transition-colors"
                    >
                      Show All Domains ✕
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {domainCategories.map((cat, index) => {
                    const isSelected = activeCategory === cat.value;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(cat.value)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                          isSelected
                            ? "bg-gradient-to-r from-[#001733] via-[#002855] to-[#003875] text-white border-[#002855] shadow-[0_3px_12px_rgba(0,40,85,0.35)] scale-[1.02]"
                            : "bg-slate-50 hover:bg-white text-slate-700 hover:text-[#ff8200] border-slate-200 hover:border-orange-300 shadow-2xs hover:-translate-y-0.5"
                        }`}
                      >
                        {cat.icon}
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Filter Clear Banner (if filtered) */}
              {(activeCategory !== "All" || searchQuery) && (
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-500 bg-slate-50/80 px-4 py-2 rounded-xl border border-slate-200/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Filters active ({filteredProjects.length} matches found)
                  </span>
                  <button
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchQuery("");
                    }}
                    className="text-[#ff8200] hover:underline font-black cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            {/* Project List Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#1e3a5f] uppercase tracking-tight flex items-center gap-2">
                  <span>{selectedYear}</span>
                  <span className="text-xs bg-orange-100 text-[#ff8200] font-extrabold px-2.5 py-0.5 rounded-full border border-orange-200">
                    {filteredProjects.length} Titles Found
                  </span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Click "View Abstract" to read the project overview, architecture & algorithms</p>
              </div>
            </div>

            {/* ================= VIEW 1: TABLE VIEW ================= */}
            {viewMode === "table" && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="bg-gradient-to-r from-[#0a2347] via-[#0f2d59] to-[#14376b] p-4 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                      <span>{selectedYear} Catalog</span>
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">Click "View Abstract" to read the project overview, architecture & algorithms</p>
                  </div>
                  <span className="text-xs bg-white/10 text-amber-300 font-extrabold px-3 py-1.5 rounded-full border border-white/15">
                    {filteredProjects.length} Projects Available
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-slate-100/90 text-slate-700 text-xs uppercase font-extrabold tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="p-3.5 w-24 text-center">Program</th>
                        <th className="p-3.5">IEEE Project Title & Domain</th>
                        <th className="p-3.5 hidden md:table-cell">Technologies</th>
                        <th className="p-3.5 text-center w-48">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredProjects.map((proj, idx) => (
                        <tr
                          key={proj.id}
                          className="hover:bg-orange-50/40 transition-colors group"
                        >
                          <td className="p-3.5 text-center whitespace-nowrap">
                            <div className="flex items-center justify-center gap-2">
                              <span className="font-extrabold text-xs text-slate-400 group-hover:text-[#ff8200] w-6">
                                #{idx + 1}
                              </span>
                              <ProgramAvatar tech={proj.tech} title={proj.title} size="sm" />
                            </div>
                          </td>
                          <td className="p-3.5">
                            <div className="flex flex-col gap-1.5">
                              <Link
                                to={`/project/${proj.id}`}
                                className="font-bold text-slate-900 text-[14px] group-hover:text-[#ff8200] transition-colors leading-snug cursor-pointer !no-underline"
                              >
                                {proj.title}
                              </Link>
                              <div className="flex items-center gap-2">
                                <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-100">
                                  {proj.domain}
                                </span>
                                <span className="text-[11px] text-slate-400 font-medium">
                                  Level: <strong className="text-slate-600">{proj.difficulty}</strong>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="p-3.5 hidden md:table-cell">
                            <ProgramTechBadges tech={proj.tech} />
                          </td>
                          <td className="p-3.5 text-center whitespace-nowrap">
                            <div className="flex items-center justify-center gap-2">
                              <Link
                                to={`/project/${proj.id}`}
                                className="px-3 py-1.5 bg-[#0a2347] hover:bg-[#14376b] text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:scale-105 active:scale-95 !no-underline flex items-center gap-1"
                              >
                                <span>Details</span>
                                <ArrowForwardIcon sx={{ fontSize: 13 }} />
                              </Link>
                              <button
                                onClick={() => setSelectedProject(proj)}
                                className="px-3 py-1.5 bg-gradient-to-r from-[#ff8200] to-[#f97316] hover:brightness-110 text-white text-xs font-bold rounded-xl transition-all shadow-[0_2px_8px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
                              >
                                Abstract
                              </button>
                              <button
                                onClick={() => handleCopyTitle(proj)}
                                className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                                title="Copy Title"
                              >
                                {copiedId === proj.id ? (
                                  <CheckIcon sx={{ fontSize: 16 }} className="text-green-600" />
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
                          <td colSpan="4" className="p-8 text-center text-slate-500">
                            No projects match your search criteria. Try a different search term or domain filter.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ================= VIEW 2: CARD GRID VIEW ================= */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProjects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-orange-300 transition-all flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div>
                      {/* Top: 3D Program Avatar + Domain + S.No */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <ProgramAvatar tech={proj.tech} title={proj.title} size="md" />
                          <div>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                              {getProgramMeta(proj.tech, proj.title).badgeText}
                            </span>
                            <span className="inline-block px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-100">
                              {proj.domain}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-black text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                          #{idx + 1}
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-[15.5px] sm:text-base mb-2 group-hover:text-[#ff8200] transition-colors leading-snug">
                        <Link to={`/project/${proj.id}`} className="text-inherit hover:text-[#ff8200] !no-underline cursor-pointer">
                          {proj.title}
                        </Link>
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3.5">
                        {proj.description}
                      </p>

                      <div className="pt-2.5 border-t border-slate-100 mb-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Technologies:</span>
                        <ProgramTechBadges tech={proj.tech} />
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <Link
                        to={`/project/${proj.id}`}
                        className="px-3 py-2.5 bg-[#0a2347] hover:bg-[#14376b] text-white text-xs font-bold rounded-xl transition-all text-center shadow-xs hover:scale-102 active:scale-98 !no-underline flex items-center justify-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowForwardIcon sx={{ fontSize: 13 }} />
                      </Link>
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="flex-1 py-2.5 bg-gradient-to-r from-[#ff8200] to-[#f97316] hover:brightness-110 text-white text-xs font-bold rounded-xl transition-all text-center shadow-[0_2px_8px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-102 active:scale-98 cursor-pointer"
                      >
                        View Full Abstract
                      </button>
                      <button
                        onClick={() => handleCopyTitle(proj)}
                        className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                        title="Copy Title"
                      >
                        {copiedId === proj.id ? (
                          <CheckIcon sx={{ fontSize: 16 }} className="text-green-600" />
                        ) : (
                          <ContentCopyIcon sx={{ fontSize: 16 }} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ================= ABOUT & CONTENT SECTION ================= */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-8">
              
              {/* About Section */}
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-[#ff8200] text-xs font-extrabold uppercase tracking-wider mb-3">
                  About Java IEEE Projects
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e3a5f] leading-tight mb-4">
                  Experience the Best in 2024 & 2025 Java Projects in Chennai
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed text-justify mb-4">
                  <strong>1Crore Projects</strong> is your premier destination for state-of-the-art <strong>2024 java projects Chennai</strong> and <strong>2025 java projects Chennai</strong>. Our team of senior full-stack Java architects and researchers provides hands-on mentorship, end-to-end code walkthroughs, and complete project deliverables tailored to your college norms.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed text-justify">
                  Whether your interests lie in <strong>Cloud Security, Distributed Databases, Machine Learning Integration, Cryptography, or Mobile Edge Computing</strong>, our library covers the latest IEEE Transactions with clean, production-grade Java code.
                </p>
              </div>

              {/* Why Choose Us - Bento Cards */}
              <div>
                <h3 className="text-xl font-bold text-[#1e3a5f] uppercase tracking-wide mb-4">
                  Why Choose 1Crore Projects for Java Development?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff8200] flex items-center justify-center mb-3">
                      <SchoolIcon sx={{ fontSize: 22 }} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Experienced Java Architects</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Learn directly from industry experts with 15+ years of real-time experience in enterprise Java, Spring Boot, and cloud ecosystems.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1e3a5f] flex items-center justify-center mb-3">
                      <DescriptionIcon sx={{ fontSize: 22 }} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Complete Deliverables</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Receive complete IEEE base paper, customized documentation, system architecture diagram, and presentation slides.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-3">
                      <CheckCircleIcon sx={{ fontSize: 22 }} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">100% Output Guarantee</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We ensure error-free compilation and output execution on your personal machine with thorough 1-on-1 code explanation.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                      <SupportAgentIcon sx={{ fontSize: 22 }} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Viva Voce Training</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mock review sessions and detailed Q&A preparation to help you confidently face external college review panels.
                    </p>
                  </div>

                </div>
              </div>

              {/* FAQ Accordion */}
              <div>
                <h3 className="text-xl font-bold text-[#1e3a5f] uppercase tracking-wide mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                        className="w-full p-4 text-left font-bold text-slate-800 text-sm flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ExpandMoreIcon
                          className={`transform transition-transform duration-200 text-slate-400 ${
                            openFaq === fIdx ? "rotate-180 text-[#ff8200]" : ""
                          }`}
                        />
                      </button>
                      {openFaq === fIdx && (
                        <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDEBAR (4 COLS) ================= */}
          <div className="lg:col-span-4 sticky top-6 space-y-6">
            
            {/* 3D Reach Us Card */}
            <div className="bg-white rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.06)] border border-slate-200 overflow-hidden" id="enquiry-form-card">
              
              {/* Form Header Banner */}
              <div className="bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] p-4 text-white text-center shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4)]">
                <h3 className="text-lg font-black tracking-wide uppercase">Quick Enquiry</h3>
                <p className="text-xs text-orange-100 font-medium mb-0">Get Base Paper & Live Project Demo</p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleFormSubmit} className="p-5 space-y-3.5">
                
                {submitted && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-xl text-xs font-medium flex items-center gap-2">
                    <CheckCircleIcon sx={{ fontSize: 18 }} className="text-emerald-600 shrink-0" />
                    <span>Thank you! Your enquiry has been received. Our technical team will call you in 10 minutes.</span>
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-100 transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-100 transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-100 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wider">Current Academic Year</label>
                  <select
                    value={formData.academicYear}
                    onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-[#ff8200] transition-colors"
                  >
                    <option value="2024 - 2025">2024 - 2025 (Final Year)</option>
                    <option value="2023 - 2024">2023 - 2024</option>
                    <option value="2022 - 2023">2022 - 2023</option>
                    <option value="2021 - 2022">2021 - 2022</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wider">Project Type</label>
                  <select
                    value={formData.projectRequirements}
                    onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-[#ff8200] transition-colors"
                  >
                    <option value="IEEE Projects">IEEE Final Year Projects</option>
                    <option value="Application Projects">Application Projects</option>
                    <option value="Mini Projects">Mini Projects</option>
                    <option value="Internship Training">Internship + Project Training</option>
                  </select>
                </div>

                {/* Styled Security reCAPTCHA Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.captchaChecked}
                      onChange={(e) => setFormData({ ...formData, captchaChecked: e.target.checked })}
                      className="w-5 h-5 rounded border-slate-300 text-[#00a8cc] focus:ring-0 cursor-pointer"
                    />
                    <span className="text-xs font-semibold text-slate-700">I'm not a robot</span>
                  </label>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA"
                      className="w-6 h-6 object-contain opacity-70"
                    />
                    <span className="text-[8px] text-slate-400 font-medium">reCAPTCHA</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_4px_15px_rgba(255,130,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Send Enquiry Now
                </button>
              </form>
            </div>

            {/* 3D Specialist Helpline Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-[0_4px_18px_rgba(0,0,0,0.04)] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.6),0_4px_12px_rgba(16,185,129,0.4)]">
                  <PhoneIcon sx={{ fontSize: 20 }} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Senior Technical Advisor</span>
                  <a href="tel:+917299981536" className="text-[14px] font-black text-slate-800 hover:text-[#10b981] transition-colors !no-underline block">
                    +91 72999 81536
                  </a>
                </div>
              </div>
              <a
                href="tel:+917299981536"
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-extrabold uppercase shadow-sm hover:scale-105 transition-all !no-underline"
              >
                Call
              </a>
            </div>

            {/* 3D Chennai Centres Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-[0_4px_18px_rgba(0,0,0,0.04)] space-y-3">
              <div className="flex items-center gap-2 text-[#1e3a5f]">
                <LocationOnIcon sx={{ fontSize: 20 }} className="text-[#ff8200]" />
                <h4 className="font-extrabold text-sm uppercase tracking-wider">Our Chennai Centres</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our state-of-the-art software centres for live demo execution and 1-on-1 viva guidance:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-800 block font-bold">Vadapalani Branch:</strong>
                  <span className="text-slate-600">No. 68 & 70, Ground Floor, Raahat Plaza, Vadapalani, Chennai.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-800 block font-bold">Tambaram Branch:</strong>
                  <span className="text-slate-600">Opposite Railway Station, Sanatorium, Tambaram, Chennai.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ================= ABSTRACT PREVIEW MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0a2347] via-[#0f2d59] to-[#14376b] text-white p-5 flex items-start justify-between">
                <div className="pr-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-500/20 text-[#ffaa40] text-xs font-bold uppercase tracking-wider mb-2 border border-orange-400/30">
                    {selectedProject.domain}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <CloseIcon sx={{ fontSize: 20 }} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm">
                <div>
                  <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-1">Project Abstract</h4>
                  <p className="leading-relaxed text-justify bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-2">Technologies & Architecture</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1e3a5f] font-semibold text-xs border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Need Base Paper & Full Source Code?</span>
                    <span className="text-[11px] text-slate-600">Connect with our coordinator for instant project download.</span>
                  </div>
                  <a
                    href={`https://wa.me/917299951536?text=Hi,%20I%20am%20interested%20in%20the%20project:%20${encodeURIComponent(selectedProject.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-gradient-to-r from-[#10b981] to-[#059669] hover:brightness-110 text-white text-xs font-bold rounded-xl shadow-[0_4px_14px_rgba(16,185,129,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all whitespace-nowrap !no-underline flex items-center gap-1.5"
                  >
                    <WhatsAppIcon sx={{ fontSize: 16 }} />
                    <span>Get Base Paper</span>
                  </a>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/project/${selectedProject.id}`}
                  className="px-4 py-2 bg-[#ff8200] hover:bg-[#e06d00] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 !no-underline shadow-sm"
                >
                  <span>Open Full Project Page</span>
                  <ArrowForwardIcon sx={{ fontSize: 14 }} />
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>



      {/* Global Footer */}
      <Footer />
    </div>
  );
}
