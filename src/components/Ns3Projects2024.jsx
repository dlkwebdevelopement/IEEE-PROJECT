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
import HubIcon from "@mui/icons-material/Hub";
import SecurityIcon from "@mui/icons-material/Security";
import CloudIcon from "@mui/icons-material/Cloud";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import DevicesIcon from "@mui/icons-material/Devices";
import CodeIcon from "@mui/icons-material/Code";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import StarIcon from "@mui/icons-material/Star";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Custom 3D NS3 Simulator Logo
const Ns3BrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#ns3Grad)" stroke="#38BDF8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="ns3Grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#0369A1" />
      </linearGradient>
    </defs>
    {/* Hexagonal Connected Mesh */}
    <polygon points="24,10 36,17 36,31 24,38 12,31 12,17" stroke="#38BDF8" strokeWidth="2" fill="none" opacity="0.6"/>
    <circle cx="24" cy="10" r="3.5" fill="#38BDF8" />
    <circle cx="36" cy="17" r="3.5" fill="#4ADE80" />
    <circle cx="36" cy="31" r="3.5" fill="#38BDF8" />
    <circle cx="24" cy="38" r="3.5" fill="#FBBF24" />
    <circle cx="12" cy="31" r="3.5" fill="#4ADE80" />
    <circle cx="12" cy="17" r="3.5" fill="#38BDF8" />
    <circle cx="24" cy="24" r="4.5" fill="#F43F5E" />
    {/* Inter-Node Ray Links */}
    <line x1="24" y1="24" x2="24" y2="10" stroke="white" strokeWidth="1.6" />
    <line x1="24" y1="24" x2="36" y2="17" stroke="white" strokeWidth="1.6" />
    <line x1="24" y1="24" x2="36" y2="31" stroke="white" strokeWidth="1.6" />
    <line x1="24" y1="24" x2="24" y2="38" stroke="white" strokeWidth="1.6" />
    <line x1="24" y1="24" x2="12" y2="31" stroke="white" strokeWidth="1.6" />
    <line x1="24" y1="24" x2="12" y2="17" stroke="white" strokeWidth="1.6" />
  </svg>
);

// 2024-2025 IEEE NS3 Project Dataset (15 Titles across 5 Domains)
const ns3Projects2024Data = [
  // --- DOMAIN 1: Online Social Networks & Web Mining (8 Projects) ---
  {
    id: 1,
    title: "A System to Filter Unwanted Messages from OSN User Walls",
    domain: "Online Social Networks (OSN)",
    category: "OSN & Web Mining",
    tech: ["NS-3", "C++ Engine", "Machine Learning Text Filter", "Rule-Based Wall Policy", "NetAnim"],
    description: "An automated content filtering and message moderation framework in NS-3 that blocks unwanted messages from user walls based on user-defined privacy constraints.",
    abstract: "Online Social Networks (OSN) users often receive unwanted or offensive wall posts. This project implements an automated machine-learning message classification and rule-based filtering architecture in NS-3 that evaluates text semantics and user relationship trust weights to block spam in real time.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Sensitive Label Privacy Protection on Social Network Data",
    domain: "Social Data Privacy & Anonymization",
    category: "OSN & Web Mining",
    tech: ["NS-3", "C++", "Differential Privacy", "Graph Anonymization", "Gnuplot"],
    description: "A graph anonymization and sensitive attribute perturbation model in NS-3 preventing node re-identification while preserving graph analytics utility.",
    abstract: "Publishing social network topology graphs risks revealing sensitive demographic labels of individuals. We develop a localized sensitive label privacy protection algorithm in NS-3 that adds noise to sensitive node degrees and structural links while preserving shortest-path and clustering distributions.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "A Generalized Flow-Based Method for Analysis of Implicit Relationships on Wikipedia",
    domain: "Information Flow & Graph Mining",
    category: "OSN & Web Mining",
    tech: ["NS-3", "Flow Network Model", "Maximum Flow Algorithm", "C++20", "Trace Analysis"],
    description: "A maximum-flow graph analytics pipeline in NS-3 uncovering latent implicit semantic relationships between interconnected entities on large-scale web graphs.",
    abstract: "Extracting hidden entity associations on open web encyclopedias requires modeling multi-hop reference flows. We construct a generalized network flow capacity model in NS-3 that computes bottleneck capacities and semantic proximity scores between disparate concept pages.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "Annotating Search Results From Web Databases",
    domain: "Web Database Information Extraction",
    category: "OSN & Web Mining",
    tech: ["NS-3", "DOM Tree Parser", "Structured Alignment", "Wrapper Generation", "C++"],
    description: "An automatic annotation system in NS-3 that extracts and labels structured result records from dynamically rendered deep-web query response pages.",
    abstract: "Deep web databases return search results formatted in complex HTML tables without explicit schema tags. This project designs an automatic multi-aligner annotation engine in NS-3 that groups identical attributes across results records with high precision.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Crowdsourcing Predictors of Behavioral Outcomes",
    domain: "Crowdsourcing & Behavioral Analytics",
    category: "OSN & Web Mining",
    tech: ["NS-3", "Incentive Mechanism", "Worker Reputation Filter", "Statistical Aggregator", "C++"],
    description: "A crowdsourcing prediction market platform in NS-3 that aggregates probabilistic forecasts from distributed participants to predict human behavioral outcomes.",
    abstract: "Harnessing collective human intelligence for forecasting requires mitigating noisy and collusive responses. We simulate a peer-prediction consensus protocol in NS-3 that weights worker reliability dynamically to predict macro-level behavioral events accurately.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "FoCUS Learning to Crawl Web Forums",
    domain: "Web Crawler & Forum Mining",
    category: "OSN & Web Mining",
    tech: ["NS-3", "Supervised URL Classifier", "Thread Extraction", "Page Layout Regularity", "C++"],
    description: "A supervised forum crawler system in NS-3 that learns forum page navigation patterns to extract discussion threads without downloading duplicate pages.",
    abstract: "Forum crawling suffers from redundant link traversal such as calendar pages and user profile loops. We develop FoCUS (Forum Crawler Under Supervision) in NS-3—a regular-expression URL training system that isolates true thread URLs and minimizes web bandwidth overhead.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Multiparty Access Control for Online Social Networks Model and Mechanisms",
    domain: "Multiparty Access Control (MPAC)",
    category: "OSN & Web Mining",
    tech: ["NS-3", "Voting Game Mechanism", "Collaborative Policy Engine", "C++", "Wireshark PCAP"],
    description: "A collaborative multiparty access control model in NS-3 resolving conflicting privacy preferences among co-owners of shared social media photos and posts.",
    abstract: "When multiple users are tagged in a single photo, standard single-owner access controls fail to honor everyone's privacy preferences. We build a multiparty policy negotiation solver in NS-3 using cooperative game theory to balance exposure sensitivity against visibility.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 8,
    title: "Spatial Approximate String Search",
    domain: "Spatial-Textual Databases",
    category: "OSN & Web Mining",
    tech: ["NS-3", "MHR-Tree Index", "Edit Distance Bounds", "Spatial Pruning", "C++20"],
    description: "A fast spatial-textual query engine in NS-3 answering location-based approximate string queries under typo tolerance and geographic proximity constraints.",
    abstract: "Mobile users querying points of interest frequently introduce typographical errors. We design an MHR-Tree spatial-textual indexing algorithm in NS-3 that jointly evaluates min-hash string signatures and Euclidean distances to return top-k matching venues in sub-milliseconds.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },

  // --- DOMAIN 2: Cloud Computing (1 Project) ---
  {
    id: 9,
    title: "A Load Balancing Model Based on Cloud Partitioning for the Public Cloud",
    domain: "Cloud Load Balancing & Partitioning",
    category: "Cloud Computing",
    tech: ["NS-3", "Cloud Schedulers", "Game Theory Partitioning", "Virtual Machine Allocator", "Gnuplot"],
    description: "A hierarchical cloud partitioning load balancer in NS-3 that divides large public clouds into autonomous sub-zones to eliminate central server hotspots.",
    abstract: "Centralized load balancing in massive public cloud datacenters creates single-point latency bottlenecks. We model a decentralized cloud partitioning framework in NS-3 that dynamically migrates incoming workloads between regional cloud sectors based on load status thresholds.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },

  // --- DOMAIN 3: Information Forensics and Security (2 Projects) ---
  {
    id: 10,
    title: "Enabling Cloud Storage Auditing With Key-Exposure Resistance",
    domain: "Cloud Cryptography & Auditing",
    category: "Information Forensics & Security",
    tech: ["NS-3", "Homomorphic Verifiable Tokens", "Key-Exposure Resilient Signature", "C++ Cryptography"],
    description: "A third-party cloud data integrity auditing protocol in NS-3 that remains secure even if the client's current private auditing key is compromised.",
    abstract: "Traditional cloud storage auditing schemes assume the client's signing key is completely secure. We construct a forward-secure, key-exposure resilient auditing protocol in NS-3 that partitions file signing epochs such that compromised keys cannot forge valid audit proofs for past time periods.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "CAM Cloud-Assisted Privacy Preserving Mobile Health Monitoring",
    domain: "Healthcare Privacy & Cryptography",
    category: "Information Forensics & Security",
    tech: ["NS-3", "Differential Privacy", "Homomorphic Paillier Encryption", "mHealth Gateway", "C++"],
    description: "A cloud-assisted mobile health monitoring architecture in NS-3 encrypting patient telemetry streams without hindering doctor diagnostic queries.",
    abstract: "Wearable biomedical sensors sending continuous heart rate and blood pressure streams to cloud servers risk exposing patient identities. We implement CAM in NS-3—a privacy-preserving aggregation framework utilizing Paillier additive homomorphic encryption to query trends without deciphering raw medical records.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },

  // --- DOMAIN 4: Mobile Computing (1 Project) ---
  {
    id: 12,
    title: "Overhead of using secure wireless communications in mobile computing",
    domain: "Mobile Security & Energy Overhead",
    category: "Mobile Computing",
    tech: ["NS-3", "IEEE 802.11 / LTE Model", "IPsec / TLS Overhead Profiler", "Battery Drain Model", "C++"],
    description: "A comprehensive empirical simulation model in NS-3 evaluating throughput degradation, latency overhead, and energy consumption of mobile cryptographic protocols.",
    abstract: "Deploying heavy cryptographic tunnels (TLS 1.3 / IPsec) on battery-operated mobile devices creates significant transmission delays and battery drain. This project quantifies packet header expansion, fragmentation rates, and CPU energy overhead across cellular and WiFi channels in NS-3.",
    year: "2024 - 2025",
    difficulty: "Intermediate",
  },

  // --- DOMAIN 5: Multimedia (3 Projects) ---
  {
    id: 13,
    title: "Two Tales of Privacy in Online Social Networks",
    domain: "Social Network Graph Privacy",
    category: "Multimedia",
    tech: ["NS-3", "Graph De-Anonymization", "Active / Passive Attack Simulator", "C++", "NetAnim"],
    description: "A dual privacy investigation platform in NS-3 quantifying information leakage across user interaction graphs and shared media metadata.",
    abstract: "User privacy in social networks is breached through both structural link analysis and multimedia exchange correlation. We model active graph seed attacks alongside passive traffic sniffing in NS-3 to demonstrate how auxiliary information enables adversary de-anonymization.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 14,
    title: "CloudMoV Cloud-based Mobile Social TV",
    domain: "Cloud Mobile Social TV",
    category: "Multimedia",
    tech: ["NS-3", "Video Transcoder Proxy", "Social Sync Scheduler", "P2P Co-Streaming", "C++"],
    description: "A cloud-based mobile social TV architecture in NS-3 synchronizing live high-definition video streaming and social chat across heterogeneous mobile devices.",
    abstract: "Watching live TV streams on mobile phones while chatting with friends requires tight video frame synchronization and bitrate adaptability. We construct CloudMoV in NS-3—a surrogate cloud architecture that transcodes video streams on-the-fly and synchronizes playback timestamps across mobile users.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "Fully Anonymous Profile Matching in Mobile Social Networks",
    domain: "Mobile Social Privacy & Profile Matching",
    category: "Multimedia",
    tech: ["NS-3", "Private Set Intersection (PSI)", "Homomorphic Dot-Product", "D2D Wireless", "C++"],
    description: "A fully anonymous proximity profile matching protocol in NS-3 allowing nearby mobile users to discover common interests without revealing private profile attributes.",
    abstract: "Friend discovery in proximity-based mobile social networks requires comparing user interest vectors without exposing sensitive hobbies. We implement a Private Set Intersection (PSI) protocol in NS-3 where two nearby smartphones discover mutual interests only if similarity exceeds a threshold, keeping non-matching traits secret.",
    year: "2024 - 2025",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "IEEE NS3 Projects 2024 - 2025", path: "/2024-2025-ns3-projects-chennai", active: true },
  { label: "IEEE NS2 Projects 2022 - 2023", path: "/ns2-ieee-projects-2022-2023-in-chennai" },
  { label: "IEEE NS2 Projects 2021 - 2022", path: "/ns2-ieee-projects-2021-2022-in-chennai" },
  { label: "IEEE NS2 Projects 2020 - 2021", path: "/ns2-ieee-projects-2020-2021-in-chennai" },
  { label: "IEEE NS2 Projects 2019 - 2020", path: "/ns2-ieee-projects-2019-2020-in-chennai" },
  { label: "IEEE NS2 Projects 2018 - 2019", path: "/ns2-ieee-projects-2018-2019-in-chennai" },
  { label: "IEEE NS2 Projects 2017 - 2018", path: "/ns2-ieee-projects-2017-2018-in-chennai" },
  { label: "IEEE NS2 Projects 2016 - 2017", path: "/ns2-ieee-projects-2016-2017-in-chennai" },
  { label: "IEEE NS2 Projects 2015 - 2016", path: "/ns2-ieee-projects-2015-2016-in-chennai" },
  { label: "IEEE NS2 Projects 2014 - 2015", path: "/ns2-ieee-projects-2014-2015-in-chennai" },
  { label: "IEEE NS2 Projects 2013 - 2014", path: "/ns2-ieee-projects-2013-2014-in-chennai" },
];

const domainCategories = [
  { label: "All Domains", value: "All", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
  { label: "OSN & Web Mining", value: "OSN & Web Mining", icon: <HubIcon sx={{ fontSize: 18 }} /> },
  { label: "Cloud Computing", value: "Cloud Computing", icon: <CloudIcon sx={{ fontSize: 18 }} /> },
  { label: "Information Forensics & Security", value: "Information Forensics & Security", icon: <SecurityIcon sx={{ fontSize: 18 }} /> },
  { label: "Mobile Computing", value: "Mobile Computing", icon: <DevicesIcon sx={{ fontSize: 18 }} /> },
  { label: "Multimedia", value: "Multimedia", icon: <PermMediaIcon sx={{ fontSize: 18 }} /> },
];

export default function Ns3Projects2024() {
  const [projectsList, setProjectsList] = useState(ns3Projects2024Data);
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
    projectRequirements: "IEEE NS3 Projects 2024-2025 in Chennai",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=ns3&year=2024 - 2025`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "OSN & Web Mining",
              category: item.category || "OSN & Web Mining",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["NS-3", "C++", "NetAnim"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2024 - 2025",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2024-2025 NS3 projects");
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

  const handleCopyTitle = (proj) => {
    navigator.clipboard.writeText(proj.title);
    setCopiedId(proj.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.captchaChecked) {
      alert("Please verify the security verification checkbox.");
      return;
    }
    try {
      await fetch(`${API_BASE}/enquiries.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          academic_year: formData.academicYear,
          project_requirements: formData.projectRequirements,
        }),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          academicYear: "2024 - 2025",
          projectRequirements: "IEEE NS3 Projects 2024-2025 in Chennai",
          captchaChecked: false,
        });
      }, 4000);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Submission failed. Please connect with us directly via Phone or WhatsApp.");
    }
  };

  const domainCountMap = useMemo(() => {
    const counts = { All: projectsList.length };
    domainCategories.forEach((cat) => {
      if (cat.value !== "All") {
        counts[cat.value] = projectsList.filter((p) => p.category === cat.value).length;
      }
    });
    return counts;
  }, [projectsList]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Futuristic Floating Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-96 right-1/4 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-md">
            <Ns3BrandIcon className="w-4 h-4 text-cyan-400" />
            <span>2024 NS3 projects chennai and 2025 NS3 projects chennai</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-slate-300">1crore Projects</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl mx-auto">
            IEEE NS3 Projects{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              2024 - 2025
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the Best in 2024 NS3 projects chennai and 2025 NS3 projects chennai at 1crore Projects. 
            Offering complete source code, expert guidance, simulation scripts, and publication-ready IEEE base papers.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <CheckCircleIcon className="text-emerald-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">15 Verified IEEE Titles</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <HubIcon className="text-cyan-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">OSN, Cloud &amp; Forensics</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <CodeIcon className="text-indigo-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">C++ Engine &amp; NetAnim</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- ACADEMIC YEAR NAVIGATION MATRIX --- */}
      <section className="py-8 bg-slate-900/40 border-b border-slate-800/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <AutoAwesomeIcon className="text-cyan-400" sx={{ fontSize: 20 }} />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Browse NS2 &amp; NS3 Projects By Academic Year
              </h2>
            </div>
            <span className="text-xs text-slate-400">Complete 2013 – 2025 Archive</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {yearNavigationLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className={`flex items-center justify-center text-center px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  item.active
                    ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400/50 shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-850"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT NS3 PROJECT (EXACT CONTENT AS REQUESTED) --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-medium uppercase tracking-wider">
              About NS3 Project
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Experience the Best in 2024 NS3 projects chennai and 2025 NS3 projects chennai
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At 1crore Projects, we offer a wide range of services for 2024 NS3 projects chennai and 2025 NS3 projects chennai. Our dedicated team supports you every step of the way, offering expert guidance for your 2024 2025 NS3 projects chennai. Seeking comprehensive support for your projects? 1crore Projects provides extensive resources and personalized mentoring for 2024 NS3 projects chennai and 2025 NS3 projects chennai. Our advanced facilities are equipped to support your 2024 NS3 projects chennai and 2025 NS3 projects chennai, ensuring you achieve your project objectives efficiently.
            </p>

            <h3 className="text-xl font-bold text-white tracking-tight pt-2">
              Expert Guidance for 2024 NS3 projects chennai and 2025 NS3 projects chennai
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At 1crore Projects, we specialize in offering exceptional support for 2024 NS3 projects chennai and 2025 NS3 projects chennai. At 1crore Projects, we are committed to providing the highest quality support and resources for 2024 NS3 projects chennai and 2025 NS3 projects chennai. Our state-of-the-art facilities and experienced professionals ensure that you receive the best guidance for your 2024 NS3 projects chennai and 2025 NS3 projects chennai. Our dedicated team and advanced facilities ensure that you receive top-notch guidance and resources for your 2024 NS3 projects chennai and 2025 NS3 projects chennai. We are committed to helping you excel in your 2024 2025 NS3 projects chennai.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you’re initiating a new project or enhancing an existing one, our comprehensive solutions for 2024 NS3 projects chennai and 2025 NS3 projects chennai are designed to help you succeed. Join us today and discover why 1crore Projects is the leading choice for 2024 NS3 projects chennai and 2025 NS3 projects chennai. 1crore Projects is your trusted partner for all your 2024 NS3 projects chennai and 2025 NS3 projects chennai needs. Our team of experienced professionals offers expert guidance and innovative solutions for your 2024 NS3 projects chennai and 2025 NS3 projects chennai. With 1crore Projects, you can confidently tackle the challenges of your 2024 2025 NS3 projects chennai.
            </p>

            {/* Why Choose 1crore Projects Bento Box */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <StarIcon className="text-amber-400" />
                <span>Why Choose 1crore Projects for 2024 NS3 projects chennai and 2025 NS3 projects chennai?</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                    <PsychologyIcon sx={{ fontSize: 20 }} />
                    <span>Advanced Techniques</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Utilizing cutting-edge technologies and methods for 2024 NS3 projects chennai and 2025 NS3 projects chennai.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                    <SupportAgentIcon sx={{ fontSize: 20 }} />
                    <span>Experienced Professionals</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our team of experts possesses extensive experience in guiding 2024 NS3 projects chennai and 2025 NS3 projects chennai.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <SettingsSuggestIcon sx={{ fontSize: 20 }} />
                    <span>Personalized Care</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tailoring project plans to ensure optimal outcomes for your 2024 NS3 projects chennai and 2025 NS3 projects chennai.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <EmojiEventsIcon sx={{ fontSize: 20 }} />
                    <span>Proven Results</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Students have achieved remarkable success with their 2024 NS3 projects chennai and 2025 NS3 projects chennai under our guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Contact Us for 2024 NS3 projects chennai and 2025 NS3 projects chennai</h4>
                <p className="text-xs text-slate-300">
                  Choose 1crore Projects for all your 2024 NS3 projects chennai and 2025 NS3 projects chennai, and embark on your journey to success with our expert assistance. Contact 1crore Projects today to schedule your consultation. Our friendly staff is here to assist you with all your 2024 NS3 projects chennai and 2025 NS3 projects chennai needs. Trust 1crore Projects for reliable and effective support.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href="https://wa.me/919597793345?text=Hello%201crore%20Projects,%20I%20am%20interested%20in%202024-2025%20NS3%20projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition"
                >
                  <WhatsAppIcon sx={{ fontSize: 16 }} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+919597793345"
                  className="flex items-center gap-2 py-2 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition"
                >
                  <PhoneIcon sx={{ fontSize: 16 }} />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DOMAIN FILTER TABS & SEARCH STATION --- */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
          {/* Domain Filter Tabs */}
          <div className="flex flex-wrap gap-2 items-center">
            {domainCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === category.value
                    ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-950/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {domainCountMap[category.value] || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Search Bar & View Mode Switcher */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-72">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" sx={{ fontSize: 18 }} />
              <input
                type="text"
                placeholder="Search 2024-2025 NS3 titles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-700 text-slate-200 pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode("table")}
                className={`p-1.5 rounded-lg transition ${
                  viewMode === "table" ? "bg-cyan-600 text-white" : "text-slate-400 hover:text-white"
                }`}
                title="Table View"
              >
                <TableRowsIcon sx={{ fontSize: 18 }} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition ${
                  viewMode === "grid" ? "bg-cyan-600 text-white" : "text-slate-400 hover:text-white"
                }`}
                title="Grid View"
              >
                <GridViewIcon sx={{ fontSize: 18 }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS CATALOG LISTING --- */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>IEEE 2024-2025 NS3 Project Titles</span>
            <span className="text-xs font-normal text-cyan-400 bg-cyan-950/70 border border-cyan-800 px-2 py-0.5 rounded-full">
              Showing {filteredProjects.length} Titles
            </span>
          </h3>
          <span className="text-xs text-slate-400">Click title for abstract &amp; NS3 toolset details</span>
        </div>

        {viewMode === "table" ? (
          /* Table View */
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl backdrop-blur-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/90 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
                  <th className="py-3.5 px-4 w-12 text-center">S.No</th>
                  <th className="py-3.5 px-6">IEEE NS3 Project Title</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Domain / Topic</th>
                  <th className="py-3.5 px-4 hidden lg:table-cell">NS3 Modules &amp; Tools</th>
                  <th className="py-3.5 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredProjects.map((proj, idx) => (
                  <tr
                    key={proj.id}
                    className="hover:bg-slate-850/80 transition group cursor-pointer"
                    onClick={() => setSelectedProject(proj)}
                  >
                    <td className="py-3 px-4 text-center font-bold text-slate-400 group-hover:text-cyan-400">
                      {idx + 1}
                    </td>
                    <td className="py-3 px-6">
                      <div className="font-semibold text-white group-hover:text-cyan-300 transition">
                        {proj.title}
                      </div>
                      <div className="text-[11px] text-slate-400 block md:hidden mt-1">
                        <span className="text-cyan-400">{proj.domain}</span> • {proj.tech.slice(0, 2).join(", ")}
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell text-slate-300 font-medium">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] text-cyan-300">
                        {proj.domain}
                      </span>
                    </td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {proj.tech.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedProject(proj)}
                          className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/30 transition"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => handleCopyTitle(proj)}
                          className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-white border border-slate-800 transition"
                          title="Copy Title"
                        >
                          {copiedId === proj.id ? (
                            <CheckIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
                          ) : (
                            <ContentCopyIcon sx={{ fontSize: 16 }} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj, idx) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      S.No #{idx + 1}
                    </span>
                    <span className="text-[11px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {proj.category}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition line-clamp-2">
                    {proj.title}
                  </h4>

                  <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400">{proj.domain}</span>
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleCopyTitle(proj)}
                      className="p-1 rounded bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                      title="Copy Title"
                    >
                      {copiedId === proj.id ? (
                        <CheckIcon sx={{ fontSize: 14 }} className="text-emerald-400" />
                      ) : (
                        <ContentCopyIcon sx={{ fontSize: 14 }} />
                      )}
                    </button>
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="text-xs font-semibold text-cyan-400 flex items-center gap-1 hover:underline"
                    >
                      <span>Read More</span>
                      <ArrowForwardIcon sx={{ fontSize: 14 }} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- ENQUIRY & CONTACT SECTION --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Deliverables Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AutoAwesomeIcon className="text-cyan-400" />
                <span>NS3 Project Deliverables at 1crore Projects</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Full C++20 / Python Source Code:</strong> Complete simulation scenarios, custom helper modules, and CMake build targets.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Wireshark PCAP &amp; NetAnim Files:</strong> Packet capture traces (.pcap) and visual animation files (.xml) for NetAnim &amp; PyViz.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Matplotlib &amp; Gnuplot Metrics:</strong> Automated benchmarking plots (Throughput, End-to-End Delay, Packet Loss, Energy Dissipation).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Complete IEEE Documentation &amp; Review Guidance:</strong> Synopsis, report, PPT presentation, IEEE base paper, and 1-on-1 code execution guidance on Ubuntu 22.04 / 24.04 LTS.
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919597793345?text=Hello%201crore%20Projects,%20I%20am%20interested%20in%20IEEE%20NS3%20Projects%202024-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition"
                >
                  <WhatsAppIcon sx={{ fontSize: 18 }} />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="tel:+919597793345"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition border border-slate-700"
                >
                  <PhoneIcon sx={{ fontSize: 18 }} />
                  <span>Call Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">Book Your NS3 Project Title</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill the form below to reserve your selected 2024-2025 NS3 project title or request custom simulation development.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                  <CheckCircleIcon sx={{ fontSize: 40 }} />
                  <h4 className="font-bold text-lg">Thank You! Your Enquiry Was Received</h4>
                  <p className="text-xs text-slate-300">
                    Our network simulation research team will get in touch with your project abstract and demo video within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vignesh R"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. vignesh@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Mobile / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Academic Year</label>
                      <input
                        type="text"
                        readOnly
                        value={formData.academicYear}
                        className="w-full bg-slate-950/60 border border-slate-800 text-slate-400 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Project Title / Requirements</label>
                    <textarea
                      rows={3}
                      value={formData.projectRequirements}
                      onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:outline-none transition"
                    />
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <input
                      type="checkbox"
                      id="captcha"
                      checked={formData.captchaChecked}
                      onChange={(e) => setFormData({ ...formData, captchaChecked: e.target.checked })}
                      className="w-4 h-4 rounded text-cyan-600 bg-slate-900 border-slate-700 focus:ring-0"
                    />
                    <label htmlFor="captcha" className="text-xs text-slate-300 cursor-pointer select-none">
                      I am not a robot (Security Verification)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition duration-200"
                  >
                    Submit NS3 Project Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL FOR ABSTRACT & SIMULATOR SPECS --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </button>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {selectedProject.domain}
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    IEEE {selectedProject.year}
                  </span>
                  <span className="text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800">
                    {selectedProject.difficulty}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {selectedProject.title}
                </h3>

                <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                    Simulation Abstract &amp; Architecture
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    NS3 Modules &amp; Toolchain
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-medium text-cyan-300 border border-slate-700"
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
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition text-center"
                  >
                    Select This Title &amp; Enquire
                  </button>
                  <a
                    href={`https://wa.me/919597793345?text=Hello%201crore%20Projects,%20I%20want%20NS3%20code%20and%20base%20paper%20for:%20${encodeURIComponent(
                      selectedProject.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition"
                  >
                    <WhatsAppIcon sx={{ fontSize: 18 }} />
                    <span>WhatsApp NS3 Demo</span>
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
