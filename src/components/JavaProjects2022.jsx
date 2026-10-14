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
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import VerifiedIcon from "@mui/icons-material/Verified";
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
import StorageIcon from "@mui/icons-material/Storage";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TerminalIcon from "@mui/icons-material/Terminal";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
  SecurityLockIcon 
} from "./ProgramIconBadge";

// 2022-2023 Project Data by Category
const projects2022Data = [
  {
    id: 1,
    title: "A System to Filter Unwanted Messages from OSN User Walls",
    domain: "Core Java / OSN",
    category: "General Java",
    tech: ["Java", "J2EE", "Text Mining", "MySQL 5.5", "Tomcat"],
    description: "An automated rule-based and machine learning system for filtering unwanted and offensive messages from Online Social Network (OSN) user walls based on user-defined privacy policies.",
    abstract: "Online Social Networks (OSNs) are today the most popular interactive medium to communicate and share information. However, uncontrolled message posting can lead to spam and offensive content. This project implements an automated content-based filtering system using text classification algorithms and flexible wall-owner rule engines.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Sensitive Label Privacy Protection on Social Network Data",
    domain: "Data Privacy & Security",
    category: "General Java",
    tech: ["Java", "Cryptography", "Anonymization", "Social Graph API"],
    description: "A sensitive label privacy preservation algorithm for social network graphs preventing identity disclosure while maintaining graph analytical properties.",
    abstract: "Publishing social network data for research or commercial purposes risks disclosing sensitive user labels. This project proposes a novel graph perturbation and clustering framework to anonymize sensitive node attributes with minimal utility loss.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "A Generalized Flow-Based Method for Analysis of Implicit Relationships on Wikipedia",
    domain: "Big Data / NLP",
    category: "General Java",
    tech: ["Java", "Graph Flow Algorithms", "Wikipedia API", "MySQL"],
    description: "A generalized network flow method that uncovers and quantifies implicit semantic relationships across vast hyperlinked Wikipedia articles.",
    abstract: "Implicit associations between entities in unstructured knowledge bases are difficult to extract. We design a generalized maximum flow algorithm across Wikipedia hyperlink networks that computes semantic proximity between non-adjacent concepts.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Annotating Search Results From Web Databases",
    domain: "Web Mining & Databases",
    category: "General Java",
    tech: ["Java", "DOM Parsing", "HTML Wrapper", "SQL"],
    description: "An automatic annotation system that extracts, aligns, and assigns semantic labels to structured data units returned from Deep Web search engines.",
    abstract: "Web databases generate search result pages dynamically containing rich structured data. This project proposes an unsupervised multi-annotator framework that combines tag alignment, schema matching, and value type analysis to automatically annotate deep web records.",
    year: "2022 - 2023",
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
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "FoCUS Learning to Crawl Web Forums",
    domain: "Web Crawling & Search",
    category: "General Java",
    tech: ["Java", "Web Crawler", "URL Pattern Learning", "Socket Programming"],
    description: "A supervised forum crawler (FoCUS) that learns forum layout patterns to crawl user-generated discussion threads efficiently with zero duplicate page downloads.",
    abstract: "Web forums contain vast amounts of domain-specific user discussions. FoCUS applies automated path-learning algorithms to navigate and crawl forum boards, entry pages, and thread pages while completely avoiding redundant query loops.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Multiparty Access Control for Online Social Networks Model and Mechanisms",
    domain: "Security & Access Control",
    category: "General Java",
    tech: ["Java", "Access Control Models", "Cryptographic Voting", "J2EE"],
    description: "A collaborative access control model for OSNs where multiple shared data owners jointly specify and enforce authorization rules on shared content.",
    abstract: "Content shared in social networks (such as group photos or co-authored posts) often involves multiple stakeholders. This project implements a multiparty authorization mechanism that aggregates multi-user privacy preferences into unified access control policies.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 8,
    title: "Spatial Approximate String Search",
    domain: "Spatial Databases & GIS",
    category: "General Java",
    tech: ["Java", "Spatial Indexing", "String Similarity", "R-Tree / M-Tree"],
    description: "An efficient indexing and query processing engine that handles spatial approximate string queries over point-of-interest (POI) databases.",
    abstract: "Location-based services frequently require finding spatial objects that are geographically close and match a textual keyword approximately. We implement an M-tree and spatial inverted indexing architecture that answers spatial approximate string queries in real-time.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 9,
    title: "A Load Balancing Model Based on Cloud Partitioning for the Public Cloud",
    domain: "Cloud Computing",
    category: "Cloud Computing",
    tech: ["Java", "CloudSim", "Partitioning Algorithms", "Load Balancer API"],
    description: "A dynamic load balancing model for public cloud infrastructure using geographical partitioning and game-theory task allocation strategies.",
    abstract: "Load balancing is crucial for optimizing cloud resource utilization and minimizing response latency. This project implements a cloud partitioning framework that divides large-scale public clouds into sub-domains and applies local load balancing controllers dynamically.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Enabling Cloud Storage Auditing With Key-Exposure Resistance",
    domain: "Information Forensics & Security",
    category: "Security & Forensics",
    tech: ["Java", "Key-Exposure Resistance", "Cloud Storage API", "AES/RSA"],
    description: "A secure cloud storage auditing protocol that remains resilient even if the client's secret signing key is temporarily compromised.",
    abstract: "Traditional cloud storage auditing schemes assume the client's private key is perpetually secure. We construct a key-exposure-resilient auditing scheme that updates client keys periodically and prevents adversaries from forging past audit proofs.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "CAM Cloud-Assisted Privacy Preserving Mobile Health Monitoring",
    domain: "Healthcare Security & Cloud",
    category: "Security & Forensics",
    tech: ["Java", "Homomorphic Encryption", "Mobile Health Sockets", "MySQL"],
    description: "A cloud-assisted mobile health monitoring architecture that performs medical analytics over encrypted patient biometric streams without decrypting private health data.",
    abstract: "Wearable health sensors continuously stream private patient vital signs to cloud servers. CAM introduces privacy-preserving classification protocols using lightweight encryption, allowing cloud health servers to trigger emergency alerts without reading plaintext patient vitals.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "Overhead of using secure wireless communications in mobile computing",
    domain: "Mobile Computing",
    category: "Mobile Computing",
    tech: ["Java", "Wireless Network Sockets", "Security Benchmarking", "Android/J2ME"],
    description: "A comprehensive benchmarking framework analyzing CPU, energy, and throughput overheads of cryptographic security suites in mobile wireless environments.",
    abstract: "Implementing strong cryptographic encryption on mobile nodes incurs significant battery and computation overhead. This project evaluates protocol efficiency across AES, RSA, and ECC ciphers under varying mobile wireless channel conditions.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Two Tales of Privacy in Online Social Networks",
    domain: "Multimedia & Privacy",
    category: "Multimedia",
    tech: ["Java", "Graph Analysis", "Privacy Metric Evaluation", "MySQL"],
    description: "A dual-faceted privacy evaluation framework investigating identity exposure risks from both user-generated content and structural network connections in OSNs.",
    abstract: "Privacy in OSNs is threatened by both direct content disclosure and indirect topological link inferences. We develop an analytical tool quantifying privacy leakage under multiple threat vectors to recommend optimal profile privacy settings.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 14,
    title: "CloudMoV Cloud-based Mobile Social TV",
    domain: "Multimedia & Cloud",
    category: "Multimedia",
    tech: ["Java", "Video Streaming", "Social Synchronization", "Cloud Server"],
    description: "A cloud-based social TV platform enabling synchronized mobile video streaming with real-time co-viewing social chat and virtual room interactions.",
    abstract: "Social TV merges live video streaming with social networking. CloudMoV leverages cloud transcoders and synchronized playback brokers to deliver low-latency social video streaming across heterogeneous mobile clients.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "Fully Anonymous Profile Matching in Mobile Social Networks",
    domain: "Multimedia & Mobile",
    category: "Multimedia",
    tech: ["Java", "Anonymous Handshake", "Attribute-Based Encryption", "Mobile P2P"],
    description: "A fully anonymous proximity-based profile matching protocol allowing nearby mobile users to discover mutual interests without revealing private attributes.",
    abstract: "Finding friends with shared interests in mobile social networks raises severe location and profile privacy concerns. We implement a blind matching protocol using private set intersection that allows users to verify shared traits only if mutual affinity exceeds a preset threshold.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "IEEE Java Projects 2024 - 2025", path: "/2024-2025-java-ieee-projects" },
  { label: "IEEE Java Projects 2022 - 2023", path: "/2022-2023-java-ieee-projects", active: true },
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

export default function JavaProjects2022() {
  const [projectsList, setProjectsList] = useState(projects2022Data);
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
    academicYear: "2022 - 2023",
    projectRequirements: "IEEE Projects",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?year=2022 - 2023`);
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
              year: item.academic_year || "2022 - 2023",
              difficulty: item.difficulty || "Intermediate",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2022-2023 projects");
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
      alert("Please verify the security captcha checkbox.");
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
          message: "Enquiry from Java Projects 2022-2023 Page",
          status: "New"
        })
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
        academicYear: "2022 - 2023",
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
        
        {/* Background Ambient Glows & Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff8200] rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00a8cc] rounded-full blur-[140px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px]"></div>
        </div>

        <div className="max-w-[1360px] mx-auto px-4 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-4">
            <Link to="/" className="hover:text-[#ff8200] transition-colors !no-underline text-slate-300">Home</Link>
            <span>/</span>
            <span className="text-slate-400">IEEE Projects</span>
            <span>/</span>
            <span className="text-[#ff8200] font-semibold">2022 - 2023 Java IEEE Projects</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Content Column: Clean, Bold, Card-Free */}
            <div className="flex-1 max-w-2xl text-left">
              
              {/* 3D Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffaa40] text-xs font-bold uppercase tracking-wider mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <VerifiedIcon sx={{ fontSize: 16 }} className="text-[#ffaa40]" />
                <span>2022 - 2023 IEEE Transactions Approved</span>
              </div>

              {/* Page Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-4 drop-shadow-md">
                2022 - 2023 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#ffaa00]">JAVA IEEE</span> PROJECTS
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-xl">
                Explore our comprehensive collection of 2022 - 2023 IEEE Java projects. Engineered with Java Enterprise Edition, Tomcat, NetBeans, Eclipse, and MySQL backend with complete verified source code, base papers, and 1-on-1 Viva voce preparation in Chennai.
              </p>

              {/* 3D Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects-2022-catalog"
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white px-7 py-3.5 rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_8px_25px_rgba(255,130,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-98 !no-underline"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Browse All 2022-2023 Titles</span>
                    <ArrowForwardIcon sx={{ fontSize: 18 }} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                </a>
                <a
                  href="https://wa.me/917299951536?text=Hi,%20I%20am%20looking%20for%202022-2023%20Java%20IEEE%20Projects."
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
                  name="Core Java"
                  icon={<JavaIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-orange-500/50 via-amber-500/20 to-transparent"
                  ringColor="border-orange-400/50"
                  shadowColor="rgba(234,88,12,0.45)"
                  labelColor="text-orange-300"
                  duration={3.6}
                  delay={0}
                />
                <RoundTechOrb
                  name="J2EE / Web"
                  icon={<WebIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-sky-500/50 via-cyan-500/20 to-transparent"
                  ringColor="border-sky-400/50"
                  shadowColor="rgba(2,132,199,0.45)"
                  labelColor="text-cyan-300"
                  duration={4.2}
                  delay={0.3}
                />
                <RoundTechOrb
                  name="Security"
                  icon={<SecurityLockIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-emerald-500/50 via-teal-500/20 to-transparent"
                  ringColor="border-emerald-400/50"
                  shadowColor="rgba(16,185,129,0.45)"
                  labelColor="text-emerald-300"
                  duration={3.8}
                  delay={0.6}
                />
                <RoundTechOrb
                  name="MySQL"
                  icon={<DatabaseIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-cyan-500/50 via-teal-500/20 to-transparent"
                  ringColor="border-cyan-400/50"
                  shadowColor="rgba(0,117,143,0.45)"
                  labelColor="text-cyan-300"
                  duration={4.4}
                  delay={0.5}
                />
                <RoundTechOrb
                  name="Android"
                  icon={<AndroidIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-lime-500/50 via-green-500/20 to-transparent"
                  ringColor="border-lime-400/50"
                  shadowColor="rgba(132,204,22,0.45)"
                  labelColor="text-lime-300"
                  duration={3.5}
                  delay={0.2}
                />
                <RoundTechOrb
                  name="Data Mining"
                  icon={<AiChipIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-purple-500/50 via-indigo-500/20 to-transparent"
                  ringColor="border-purple-400/50"
                  shadowColor="rgba(147,51,234,0.45)"
                  labelColor="text-purple-300"
                  duration={4.0}
                  delay={0.7}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Main Body */}
      <div className="max-w-[1360px] mx-auto px-4 lg:px-8 py-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT COLUMN (8 COLS) ================= */}
          <div className="lg:col-span-8 flex flex-col space-y-7" id="projects-2022-catalog">
            
            {/* 3D Year Selector Matrix */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff8200] shadow-[0_0_8px_rgba(255,130,0,0.8)]" />
                  IEEE Java Project Years
                </h3>
                <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-2.5 py-1 rounded-full">
                  12 Years Available
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
                    placeholder="Search 2022-2023 Java projects by title, domain, or technology..."
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

            {/* List Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#1e3a5f] uppercase tracking-tight flex items-center gap-2">
                  <span>IEEE JAVA PROJECT LIST 2022-2023</span>
                  <span className="text-xs bg-orange-100 text-[#ff8200] font-extrabold px-2.5 py-0.5 rounded-full border border-orange-200">
                    {filteredProjects.length} Titles
                  </span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Click "View Abstract" to view complete project summary and architecture</p>
              </div>
            </div>

            {/* ================= TABLE VIEW ================= */}
            {viewMode === "table" && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="bg-gradient-to-r from-[#0a2347] via-[#0f2d59] to-[#14376b] p-4 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                      <span>IEEE Java Project List 2022-2023</span>
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">Click "View Abstract" to view complete project summary and architecture</p>
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
                        <th className="p-3.5">Project Title & Domain</th>
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
                                  Year: <strong className="text-slate-600">2022 - 2023</strong>
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
                                className="px-3.5 py-1.5 bg-gradient-to-r from-[#ff8200] to-[#f97316] hover:brightness-110 text-white text-xs font-bold rounded-xl transition-all shadow-[0_2px_8px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
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
                            No projects match your search criteria. Try a different search query or category filter.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ================= GRID VIEW ================= */}
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

            {/* ================= ABOUT JAVA PROJECT SECTION ================= */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-8">
              
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-[#ff8200] text-xs font-extrabold uppercase tracking-wider mb-3">
                  ABOUT JAVA PROJECT
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e3a5f] leading-tight mb-4">
                  2022 - 2023 Java IEEE Projects Overview
                </h2>
                
                <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                  Java Platform, Enterprise Edition Or Java Is A Broadly Utilized Figuring Stage For Advancement And Organization Of Big Business Programming (System And Web Services). IEEE Provides 2022 2023 Java IEEE Projects Was Once In The Past Known As Java 2 Platform, Enterprise Edition Or J2EE. The Stage Utilizes The Protest Arranged Java Programming Dialect. It Is A Piece Of The Java Programming Stage Family. Java EE Expands The Java Platform, Standard Edition (Java SE), Providing An API For Protest Social Mapping, Disseminated And Multitier Structures, And Web Administrations.
                </p>

                <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                  <strong>IEEE Project Centre</strong>, the premier hub for innovative and cutting-edge Java Projects! With a steadfast commitment to fostering technological excellence, we offer a diverse range of Java projects that cater to students, researchers, and enthusiasts alike.
                </p>

                <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                  Our expert team at IEEE Project Centre understands the significance of Java in today’s technological landscape. Java’s versatility, portability, and extensive libraries make it a powerhouse for software development. Whether you’re a computer science student aiming to expand your skills or a professional seeking to stay ahead in the industry, our Java projects cover a wide array of domains such as web applications, mobile app development, game design, and more.
                </p>

                <p className="text-slate-700 text-sm leading-relaxed text-justify">
                  The Stage Consolidates A Plan Construct To A Great Extent With Respect To Measured Parts Running On An Application Server. <strong>Java Project Centers In Chennai</strong> The Stage Underscores Tradition Over Setup And Comments For Arrangement. Alternatively, XML Can Be Utilized To Abrogate Explanations Or To Digress From The Stage Defaults.
                </p>
              </div>

              {/* Tools & Web Servers Bento Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#1e3a5f] text-white">
                <div className="flex items-center gap-2 mb-3 text-[#ffaa40]">
                  <SettingsSuggestIcon sx={{ fontSize: 24 }} />
                  <h3 className="text-lg font-bold uppercase tracking-wide">Apparatuses And Web Servers</h3>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  Apparatuses And Web Servers Apparatuses Are <strong>Net Beans</strong> And <strong>Eclipse</strong>. At That Point Web Servers, For Example, <strong>Tomcat</strong> And <strong>Glass Fish</strong> And <strong>MySQL 5.5</strong> Is Utilized As Backend For Java.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/10">
                  <div className="p-3 bg-white/10 rounded-xl text-center">
                    <span className="text-xs text-[#ffaa40] font-bold block">IDE</span>
                    <span className="text-sm font-semibold">NetBeans / Eclipse</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl text-center">
                    <span className="text-xs text-[#ffaa40] font-bold block">Servers</span>
                    <span className="text-sm font-semibold">Apache Tomcat</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl text-center">
                    <span className="text-xs text-[#ffaa40] font-bold block">App Server</span>
                    <span className="text-sm font-semibold">GlassFish</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl text-center">
                    <span className="text-xs text-[#ffaa40] font-bold block">Database</span>
                    <span className="text-sm font-semibold">MySQL 5.5 / 8.0</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDEBAR (4 COLS) ================= */}
          <div className="lg:col-span-4 sticky top-6 space-y-6">
            
            {/* 3D Reach Us Card */}
            <div className="bg-white rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.06)] border border-slate-200 overflow-hidden" id="enquiry-form-card">
              
              <div className="bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] p-4 text-white text-center shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4)]">
                <h3 className="text-lg font-black tracking-wide uppercase">Reach Us</h3>
                <p className="text-xs text-orange-100 font-medium mb-0">Get 2022-2023 Java Project Documentation</p>
              </div>

              <form onSubmit={handleFormSubmit} className="p-5 space-y-3.5">
                
                {submitted && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-xl text-xs font-medium flex items-center gap-2">
                    <CheckCircleIcon sx={{ fontSize: 18 }} className="text-emerald-600 shrink-0" />
                    <span>Thank you! Your enquiry has been received. Our technical team will reach out shortly.</span>
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
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wider">Academic Year</label>
                  <select
                    value={formData.academicYear}
                    onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-[#ff8200] transition-colors"
                  >
                    <option value="2022 - 2023">2022 - 2023</option>
                    <option value="2023 - 2024">2023 - 2024</option>
                    <option value="2024 - 2025">2024 - 2025</option>
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
                    <option value="IEEE Projects">IEEE Projects</option>
                    <option value="Application Projects">Application Projects</option>
                    <option value="Final Year Projects">Final Year Projects</option>
                    <option value="Mini Projects">Mini Projects</option>
                    <option value="Internship Training">Internship Training</option>
                  </select>
                </div>

                {/* reCAPTCHA */}
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

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_4px_15px_rgba(255,130,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Send Message
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

      {/* ================= ABSTRACT MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
            >
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
                    href={`https://wa.me/917299951536?text=Hi,%20I%20am%20interested%20in%20the%202022-2023%20project:%20${encodeURIComponent(selectedProject.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-gradient-to-r from-[#10b981] to-[#059669] hover:brightness-110 text-white text-xs font-bold rounded-xl shadow-[0_4px_14px_rgba(16,185,129,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all whitespace-nowrap !no-underline flex items-center gap-1.5"
                  >
                    <WhatsAppIcon sx={{ fontSize: 16 }} />
                    <span>Get Base Paper</span>
                  </a>
                </div>
              </div>

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
