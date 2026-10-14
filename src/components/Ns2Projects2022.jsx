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
import RouterIcon from "@mui/icons-material/Router";
import WifiIcon from "@mui/icons-material/Wifi";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PermMediaIcon from "@mui/icons-material/PermMedia";
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
import CellTowerIcon from "@mui/icons-material/CellTower";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SpeedIcon from "@mui/icons-material/Speed";

// Custom SVG Icons for NS2 & Network Protocols
const Ns2Icon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#ns2Grad)" stroke="#38BDF8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="ns2Grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0369A1" />
        <stop offset="1" stopColor="#0C4A6E" />
      </linearGradient>
    </defs>
    {/* Network Nodes & Links */}
    <circle cx="14" cy="18" r="4" fill="#38BDF8" />
    <circle cx="34" cy="18" r="4" fill="#38BDF8" />
    <circle cx="24" cy="34" r="4" fill="#4ADE80" />
    <circle cx="24" cy="22" r="3" fill="#FBBF24" />
    <line x1="14" y1="18" x2="24" y2="22" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
    <line x1="34" y1="18" x2="24" y2="22" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
    <line x1="14" y1="18" x2="24" y2="34" stroke="#38BDF8" strokeWidth="2" />
    <line x1="34" y1="18" x2="24" y2="34" stroke="#38BDF8" strokeWidth="2" />
    <line x1="24" y1="22" x2="24" y2="34" stroke="#4ADE80" strokeWidth="2" />
  </svg>
);

// 2022-2023 IEEE NS2 Project Dataset (15 Titles across 6 Domains)
const ns2Projects2022Data = [
  {
    id: 1,
    title: "Dynamic Connectivity Establishment and Cooperative Scheduling for QoS-Aware Wireless Body Area Networks",
    domain: "WBAN & Healthcare IoT",
    category: "WBAN & Healthcare",
    tech: ["NS2", "Tcl/OTcl", "C++ Engine", "IEEE 802.15.6 WBAN", "AWK & Gnuplot"],
    description: "A dynamic cooperative channel scheduling protocol in NS2 that optimizes QoS metrics and minimizes RF body radiation during medical emergencies.",
    abstract: "In Wireless Body Area Networks (WBAN), vital health data packets must satisfy strict latency and reliability constraints. This project implements a cooperative channel scheduling and dynamic connectivity scheme in NS2 that avoids node packet contention and minimizes RF exposure while guaranteeing QoS for critical medical alerts.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "On Modeling Shortest Path Length Distribution in Scale-Free Network Topologies",
    domain: "Network Topologies & Complex Graphs",
    category: "Network Topologies",
    tech: ["NS2", "OTcl Scripts", "C++ Core Routing", "Scale-Free Graphs", "Power-Law Analysis"],
    description: "An analytical shortest path distribution model simulated in NS2 evaluating hop-count variance, packet delivery ratios, and congestion in scale-free networks.",
    abstract: "Scale-free networks exhibit power-law degree distributions that fundamentally dictate routing behavior. We construct an analytical shortest path length distribution model simulated within Network Simulator 2 (NS2) to evaluate hop-count variance, packet delivery ratios, and node congestion under high traffic.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Real-Time Intersection-based Segment Aware Routing Algorithm for Urban Vehicular Networks",
    domain: "Urban VANET Routing",
    category: "VANET & Urban Routing",
    tech: ["NS2", "SUMO Traffic Simulator", "IEEE 802.11p", "Segment Aware Routing", "NAM Animator"],
    description: "An intelligent urban vehicular routing algorithm in NS2 utilizing road segment vehicle density to circumvent congested or disconnected street corridors.",
    abstract: "Urban vehicular environments feature high building attenuation and erratic road traffic densities. This project proposes a real-time intersection-based segment-aware routing protocol in NS2 that integrates road segment vehicular density to dynamically circumvent disconnected street corridors.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Traffic-Aware Efficient Mapping of Wireless Body Area Networks to Health Cloud Service Providers in Critical Emergency Situations",
    domain: "WBAN & Cloud Integration",
    category: "WBAN & Healthcare",
    tech: ["NS2", "C++", "Tcl Scripting", "Health Cloud Gateway", "Priority Queue Model"],
    description: "A priority mapping mechanism in NS2 seamlessly offloading critical physiological telemetry from wearable sensor hubs to health cloud datacenters.",
    abstract: "Critical medical emergencies demand seamless uplink offloading from wearable WBAN sensors to remote health cloud datacenters. We model a traffic-aware priority mapping algorithm in NS2 that optimizes gateway resource selection and minimizes transmission delay during patient cardiac emergencies.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "A Realistic Distributed Conditional Privacy Preserving Authentication Scheme for Vehicular Ad Hoc Networks",
    domain: "VANET Security & Cryptography",
    category: "VANET & Security",
    tech: ["NS2", "C++ Cryptographic Modules", "Elliptic Curve Cryptography", "Pseudonym Manager", "OTcl"],
    description: "A distributed conditional privacy authentication protocol in NS2 that verifies beacon integrity in sub-millisecond cycles while protecting driver privacy.",
    abstract: "Preserving driver privacy while enabling vehicular certificate authority auditing is essential in intelligent transportation. We simulate a distributed conditional privacy-preserving authentication protocol in NS2 that validates beacon integrity in sub-millisecond intervals without disclosing driver identities.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "Dense-Device-Enabled Cooperative Networks for Efficient and Secure Transmission",
    domain: "Cooperative Relays & 5G",
    category: "Cooperative Networks",
    tech: ["NS2", "OTcl", "C++ Physical Layer", "Cooperative Jamming", "Relay Selection"],
    description: "A cooperative relay framework in NS2 leveraging neighboring idle devices as friendly jammers and decode-and-forward relays to maximize physical layer security.",
    abstract: "Ultra-dense device deployments in 5G and IoT networks face co-channel interference and eavesdropping threats. We build a cooperative device relay transmission framework in NS2 where neighboring idle nodes serve as friendly jammers and decode-and-forward relays to optimize secrecy capacity.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "MobiT Distributed and Congestion Resilient Trajectory Based Routing for Vehicular Delay Tolerant Networks",
    domain: "Vehicular DTN (VDTN)",
    category: "VANET & Urban Routing",
    tech: ["NS2", "Tcl", "Trajectory Predictor", "Buffer Management", "Store-Carry-Forward"],
    description: "A trajectory-based store-carry-forward routing algorithm in NS2 designed for intermittently connected sparse vehicular networks.",
    abstract: "In sparse suburban or post-disaster vehicular networks, persistent end-to-end paths do not exist. This project introduces MobiT—a trajectory-based store-carry-forward routing algorithm in NS2 that utilizes vehicle route predictability and buffer-aware drop policies to overcome intermittent connectivity.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 8,
    title: "An Efficient Message-Authentication Scheme Based on Edge Computing for Vehicular Ad Hoc Networks",
    domain: "Edge-Assisted VANET",
    category: "VANET & Security",
    tech: ["NS2", "Edge Node Proxy", "Batch Verification", "C++", "SUMO"],
    description: "An edge-assisted batch message authentication scheme in NS2 enabling Road-Side Units to verify hundreds of vehicle safety signatures concurrently.",
    abstract: "Road-Side Units (RSUs) deployed as edge computing gateways can accelerate vehicular message verification. We design a batch message-authentication protocol in NS2 running at the edge layer to verify hundreds of safety beacon signatures concurrently with negligible verification delay.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 9,
    title: "CISRP connectivity-aware intersection-based shortest path routing protocol for VANETs in urban environments",
    domain: "Urban VANET Routing",
    category: "VANET & Urban Routing",
    tech: ["NS2", "IEEE 802.11p", "Urban Grid Topology", "Shortest Path Oracle", "Tcl/C++"],
    description: "A connectivity-aware intersection routing protocol in NS2 that estimates vehicle cluster densities to select robust multi-hop urban packet forwarding paths.",
    abstract: "Connectivity holes caused by traffic light cycles degrade urban packet delivery. We implement CISRP in NS2—a connectivity-aware intersection routing protocol that predicts vehicular cluster density at street intersections to select stable multi-hop communication paths.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Discovery of Critical Nodes in Road Networks Through Mining From Vehicle Trajectories",
    domain: "Road Network Topology Mining",
    category: "Network Topologies",
    tech: ["NS2", "Trajectory Mining", "Critical Node Centrality", "C++ Core", "Gnuplot"],
    description: "A trajectory mining system in NS2 evaluating node betweenness and topology centrality to discover critical routing junctions across road networks.",
    abstract: "Identifying vulnerable bottleneck intersections in road traffic networks is vital for congestion relief and emergency routing. We develop a trajectory mining module in NS2 that evaluates node betweenness and connectivity centrality to discover and protect critical network routing junctions.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 11,
    title: "Energy Efficiency and Delay in 5G Ultra Reliable Low Latency Communications System Architectures",
    domain: "5G URLLC & Green Networks",
    category: "5G & Next-Gen Systems",
    tech: ["NS2", "URLLC MAC Layer", "Radio Resource Scheduler", "Energy Model", "OTcl"],
    description: "A joint power-allocation and latency-bounded packet scheduler in NS2 achieving sub-millisecond delays with minimal transceiver energy consumption.",
    abstract: "5G Ultra-Reliable Low Latency Communication (URLLC) requires millisecond latency alongside green energy constraints. This project models a joint power-allocation and latency-bounded packet scheduling protocol in NS2 to achieve sub-1ms transmission delays with minimal transceiver energy drain.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "k Nearest Neighbor Search for Location Dependent Sensor Data in MANETs",
    domain: "MANET & Spatial Querying",
    category: "MANET & Spatial Query",
    tech: ["NS2", "AODV Protocol Extension", "k-NN Spatial Filter", "Mobile Node Mobility", "C++"],
    description: "An on-demand spatial k-NN query algorithm built on top of AODV in NS2 retrieving localized sensor telemetry with minimal broadcast flooding overhead.",
    abstract: "Querying the k-nearest sensing nodes in highly mobile ad hoc networks is prone to high control overhead. We design an on-demand spatial k-NN search algorithm integrated into the AODV routing protocol in NS2 that retrieves localized sensor readings with minimum broadcast flooding.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Node-Based Distributed Channel Access With Enhanced Delay Characteristics",
    domain: "MAC Protocols & Channel Access",
    category: "MAC & Protocol Design",
    tech: ["NS2", "IEEE 802.11 MAC / DCF", "Backoff Optimization", "Delay Analysis", "C++"],
    description: "A dynamic contention window optimization mechanism in NS2 stabilizing channel access delay variance under heavy multi-node wireless contention.",
    abstract: "Standard CSMA/CA binary exponential backoff induces high packet delay variance under heavy network contention. We create a node-based distributed channel access mechanism in NS2 with dynamic contention window tuning to stabilize channel access delay for real-time traffic.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 14,
    title: "LBP: Robust Rate Adaptation Algorithm for SVC Video Streaming",
    domain: "Scalable Video Streaming (SVC)",
    category: "Multimedia Streaming",
    tech: ["NS2", "Evalvid Video Toolset", "SVC Layered Streaming", "Rate Adaptation (LBP)", "Tcl"],
    description: "A layer-based rate adaptation protocol in NS2 that dynamically adjusts video layer transmissions according to estimated wireless link capacity.",
    abstract: "Streaming Scalable Video Coding (SVC) content across fluctuating wireless links causes frequent playback stalling. We construct the LBP (Layer-Based Probe) rate adaptation algorithm in NS2 that dynamically switches base and enhancement video layers according to estimated wireless channel throughput.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 15,
    title: "Heavy-Traffic Analysis of QoE Optimality for On-Demand Video Streams Over Fading Channels",
    domain: "Multimedia QoE & Fading Channels",
    category: "Multimedia Streaming",
    tech: ["NS2", "Rayleigh Fading Channel", "QoE Optimization", "Buffer-Underflow Predictor", "C++"],
    description: "A stochastic video bitrate controller in NS2 maximizing user Quality of Experience (QoE) over wireless Rayleigh fading channels.",
    abstract: "Video streaming over wireless fading channels faces severe rebuffering under heavy network loads. We simulate an on-demand video streaming framework in NS2 using heavy-traffic stochastic analysis to jointly optimize video bitrates, buffer states, and Quality of Experience (QoE) metrics.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "IEEE NS2 Projects 2022 - 2023", path: "/ns2-ieee-projects-2022-2023-in-chennai", active: true },
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
  { label: "VANET & Urban Routing", value: "VANET & Urban Routing", icon: <DirectionsCarIcon sx={{ fontSize: 18 }} /> },
  { label: "WBAN & Healthcare", value: "WBAN & Healthcare", icon: <MonitorHeartIcon sx={{ fontSize: 18 }} /> },
  { label: "VANET & Security", value: "VANET & Security", icon: <SecurityIcon sx={{ fontSize: 18 }} /> },
  { label: "5G & Next-Gen Systems", value: "5G & Next-Gen Systems", icon: <CellTowerIcon sx={{ fontSize: 18 }} /> },
  { label: "Multimedia Streaming", value: "Multimedia Streaming", icon: <PermMediaIcon sx={{ fontSize: 18 }} /> },
  { label: "MANET & Spatial Query", value: "MANET & Spatial Query", icon: <WifiIcon sx={{ fontSize: 18 }} /> },
];

export default function Ns2Projects2022() {
  const [projectsList, setProjectsList] = useState(ns2Projects2022Data);
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
    projectRequirements: "IEEE NS2 Network Simulation Projects 2022-2023",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=ns2&year=2022 - 2023`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "Network Simulation",
              category: item.category || "VANET & Urban Routing",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["NS2", "Tcl/OTcl", "C++"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2022 - 2023",
              difficulty: item.difficulty || "Intermediate",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2022-2023 NS2 projects");
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
        }),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          academicYear: "2022 - 2023",
          projectRequirements: "IEEE NS2 Network Simulation Projects 2022-2023",
          captchaChecked: false,
        });
      }, 4000);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Submission failed. Please contact us directly via Phone or WhatsApp.");
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

      {/* Floating Radial Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-96 right-1/4 w-[30rem] h-[30rem] bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-md">
            <Ns2Icon className="w-4 h-4 text-cyan-400" />
            <span>IEEE NS2 Projects 2022 - 2023</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-slate-300">Network Simulation Lab Chennai</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl mx-auto">
            IEEE NS2 Projects{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              2022 - 2023
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            IEEE Project Centre presents a captivating array of 2022-2023 NS2 / NS3 network simulation projects. 
            Master protocol design, VANET urban mobility, 5G URLLC scheduling, WBAN healthcare monitoring, 
            and multimedia QoE with complete Tcl scripts, C++ engine modifications, NAM animations, and Xgraph / Gnuplot analytics.
          </p>

          {/* Quick Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <CheckCircleIcon className="text-emerald-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">15 Verified IEEE Titles</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <DirectionsCarIcon className="text-cyan-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">SUMO &amp; IEEE 802.11p VANET</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <SpeedIcon className="text-sky-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">NAM, AWK &amp; Trace Analytics</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- 10-YEAR NS2 ARCHIVE MATRIX --- */}
      <section className="py-8 bg-slate-900/40 border-b border-slate-800/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <AutoAwesomeIcon className="text-cyan-400" sx={{ fontSize: 20 }} />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Browse NS2 Projects By Academic Year
              </h2>
            </div>
            <span className="text-xs text-slate-400">Complete 2013 – 2023 Archive</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {yearNavigationLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className={`flex items-center justify-center text-center px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  item.active
                    ? "bg-gradient-to-r from-cyan-600 to-sky-600 text-white border-cyan-400/50 shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-850"
                }`}
              >
                {item.label.replace("IEEE NS2 Projects ", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT IEEE NS2 PROJECT SECTION (AS REQUESTED) --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="space-y-4 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-medium uppercase tracking-wider">
                About IEEE NS2 Project
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Pioneering Network Simulation, Protocols &amp; Wireless Architectures
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                In the realm of networking and simulation technologies, IEEE Project Centre stands as a beacon of innovation and education. The years 2022-2023 witness a transformative phase as this esteemed institution introduces a captivating array of projects within the IEEE NS2 domain. These projects, meticulously tailored to meet the exacting standards of the Institute of Electrical and Electronics Engineers (IEEE), provide an exceptional avenue for students and professionals to immerse themselves in the world of network simulation.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Throughout this period, IEEE Project Centre unveils a diverse spectrum of projects, each meticulously focused on exploring different facets of networking. From designing intricate network topologies to dissecting communication protocols and optimizing network performance, participants engage in immersive hands-on experiences that artfully bridge theoretical knowledge with real-world applications. These projects not only hone technical skills but also foster critical problem-solving abilities, all while adhering to the stringent benchmarks set by IEEE.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Collaboration with industry experts and mentors offers participants an unprecedented opportunity to dive deep into the realm of network simulation, unlocking its potential to reshape industries and ignite innovation. These projects showcase tangible outcomes of theoretical concepts, equipping participants with a profound understanding of network dynamics and behavior. The culmination is a cohort of individuals exceptionally prepared to address contemporary networking challenges.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic">
                NS2 Ventures Offer an Assorted Scope of Tasks in NS2 for You. We have Confidence in Changing Your Thoughts into Your Work. As Like Whatever, we Don’t have Confidence in Giving Static Records and Making You to Pick A Subject Among it. NS2 Project Centers In Chennai we Trust that Each Understudy Needs to Feel their Value as Everybody has an Energy to Change the World with their Basic Reasoning Force. Change Your Reality, Know Your Value, And Come To Us. NS3 Projects, NS3 Project Centers Chennai We Make Creative Tasks for Each Understudy as we Trust that Our Understudies can Contend with Any Ventures on the Planet And Can Make their Name Alongside us.
              </p>
            </div>

            {/* NS2 Apparatus & Protocol 3D Cards */}
            <div className="w-full lg:w-96 flex-shrink-0 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <HubIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">NS2.35 &amp; NS3</span>
                <span className="text-[11px] text-slate-400">C++ / OTcl Simulation</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <DirectionsCarIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">VANET &amp; SUMO</span>
                <span className="text-[11px] text-slate-400">802.11p / DSRC Wave</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MonitorHeartIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">WBAN &amp; Health Cloud</span>
                <span className="text-[11px] text-slate-400">IEEE 802.15.6 Medical</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <TimelineIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">NAM &amp; Trace Analysis</span>
                <span className="text-[11px] text-slate-400">AWK &amp; Gnuplot Metrics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DOMAIN FILTER TABS & SEARCH BAR --- */}
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
                    ? "bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md shadow-cyan-500/20"
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

          {/* Search Bar & View Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-72">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" sx={{ fontSize: 18 }} />
              <input
                type="text"
                placeholder="Search NS2 project titles..."
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
            <span>IEEE 2022-2023 NS2 Project Titles</span>
            <span className="text-xs font-normal text-cyan-400 bg-cyan-950/70 border border-cyan-800 px-2 py-0.5 rounded-full">
              Showing {filteredProjects.length} Titles
            </span>
          </h3>
          <span className="text-xs text-slate-400">Click title for abstract &amp; simulator details</span>
        </div>

        {viewMode === "table" ? (
          /* Table View */
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl backdrop-blur-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/90 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
                  <th className="py-3.5 px-4 w-12 text-center">S.No</th>
                  <th className="py-3.5 px-6">IEEE NS2 Project Title</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Domain / Topic</th>
                  <th className="py-3.5 px-4 hidden lg:table-cell">Tools &amp; Protocols</th>
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
                <span>NS2 Project Deliverables at IEEE Project Centre</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Complete Simulation Scripts:</strong> Full .tcl files, C++ protocol patches, makefiles, and AWK metric analysis scripts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>NAM Animation &amp; Trace Files:</strong> Ready-to-run Network Animator (.nam) visual flows and .tr trace data.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Xgraph / Gnuplot Analytics:</strong> Automated performance plots (Throughput, Packet Delivery Ratio, End-to-End Delay, Energy Residuals).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>IEEE Documentation &amp; Viva Voce:</strong> Project report, base paper, synopsis, PPT presentation, and 1-on-1 Ubuntu/Linux NS2 installation walkthrough.
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919597793345?text=Hello%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%20IEEE%20NS2%20Projects%202022-2023"
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
              <h3 className="text-xl font-bold text-white mb-2">Book Your NS2 Project Title</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill the form below to reserve your selected 2022-2023 NS2 project title or request custom protocol simulation.
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
                        placeholder="e.g. Rahul Sharma"
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
                        placeholder="e.g. rahul@gmail.com"
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
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition duration-200"
                  >
                    Submit NS2 Project Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL FOR ABSTRACT & DETAILS --- */}
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
                    Simulation Abstract Overview
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Simulation Tools &amp; Environment
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
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-bold text-xs sm:text-sm transition text-center"
                  >
                    Select This Title &amp; Enquire
                  </button>
                  <a
                    href={`https://wa.me/919597793345?text=Hello%20IEEE%20Project%20Centre,%20I%20want%20simulation%20scripts%20and%20base%20paper%20for:%20${encodeURIComponent(
                      selectedProject.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition"
                  >
                    <WhatsAppIcon sx={{ fontSize: 18 }} />
                    <span>WhatsApp Demo Video</span>
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
