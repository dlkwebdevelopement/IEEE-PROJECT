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
import CellTowerIcon from "@mui/icons-material/CellTower";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
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

// Custom 3D NS3 Simulator Logo
const Ns3BrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#ns3Grad2021)" stroke="#38BDF8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="ns3Grad2021" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
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

// 2021-2022 IEEE NS3 Project Dataset (10 Titles across 6 Domains)
const ns3Projects2021Data = [
  {
    id: 1,
    title: "A Survey and Performance Evaluation of Ad-Hoc Multi-Hop Routing Protocols for Static Outdoor Networks",
    domain: "Wireless Ad-Hoc Routing",
    category: "Wireless Ad-Hoc & WLAN",
    tech: ["NS-3", "AODV", "DSDV", "OLSR", "C++", "NetAnim", "Gnuplot"],
    description: "A comprehensive simulation testbed in NS-3 benchmarking multi-hop routing protocols (AODV, OLSR, DSDV) in static outdoor mesh environments.",
    abstract: "Outdoor wireless sensor networks often operate over static multi-hop topologies with varying environmental fading. This project builds a standardized outdoor simulation framework in NS-3 evaluating hop count, packet delivery ratio, end-to-end delay, and control routing overhead across reactive and proactive ad-hoc protocols.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "FACT Fine-Grained Adaptation of Carrier Sense Threshold in IEEE 802.11 WLANs",
    domain: "WLAN MAC & Carrier Sense",
    category: "Wireless Ad-Hoc & WLAN",
    tech: ["NS-3", "IEEE 802.11ac/ax", "C++ MAC Extension", "Carrier Sense Adaptation", "Wireshark PCAP"],
    description: "A fine-grained dynamic carrier sense threshold adaptation protocol (FACT) in NS-3 maximizing spatial reuse in dense enterprise WiFi deployments.",
    abstract: "In dense IEEE 802.11 wireless LANs, rigid Clear Channel Assessment (CCA) thresholds cause excessive contention and starve adjacent access points. We implement FACT in NS-3—a localized carrier sense adaptation algorithm that dynamically tunes energy detection thresholds to allow concurrent non-interfering transmissions.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Performance Evaluation of Caching Policies in NDN – an ICN Architecture",
    domain: "Named Data Networking (NDN / ICN)",
    category: "Information-Centric Networks",
    tech: ["NS-3", "ndnSIM Module", "Content Store Caching (LRU/LFU/FIFO)", "Interest/Data Packets", "C++"],
    description: "An empirical performance investigation of in-network caching strategies in Named Data Networking using the ndnSIM extension for NS-3.",
    abstract: "Information-Centric Networking (ICN) replaces host-to-host addressing with content-centric named data retrieval. Using ndnSIM in NS-3, this project simulates Content Store (CS) caching policies (LRU, LFU, Probabilistic, and Popularity-aware) to quantify cache hit ratios, hop reduction, and link load reduction under realistic Zipf content distributions.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "ROSE Robustness Strategy for Scale-Free Wireless Sensor Networks",
    domain: "Scale-Free Topology & Fault Tolerance",
    category: "Sensor Networks & IoT",
    tech: ["NS-3", "Scale-Free Graphs", "Node Failure Injector", "Percolation Theory", "C++ Core"],
    description: "A topological robustness enhancement strategy (ROSE) in NS-3 protecting scale-free sensor networks from targeted hub attacks and cascading failures.",
    abstract: "Scale-free wireless sensor networks are highly resilient to random node failures but critically vulnerable to targeted hub-node attacks. We design ROSE in NS-3—a proactive edge rewiring and degree-bounded cluster reinforcement mechanism that maintains global network connectivity even after 40% of hub nodes are disabled.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "Simulation Based Performance Evaluation of TCP Variants along with UDP Flow",
    domain: "Transport Protocols & Congestion Control",
    category: "Transport Protocols",
    tech: ["NS-3", "TCP Reno / NewReno / Cubic / BBR", "UDP Cross-Traffic", "Queue Disciplinary (CoDel/RED)", "Gnuplot"],
    description: "A systematic NS-3 simulation analyzing throughput fairness and bufferbloat when modern TCP variants (Cubic, BBR) compete with unresponsive UDP streams.",
    abstract: "Unresponsive UDP media flows often starve TCP connections in bottleneck router queues. This project constructs an NS-3 benchmark suite comparing TCP Reno, NewReno, Cubic, and BBR under heavy UDP cross-traffic, evaluating queuing delays, packet drops, RTT fairness, and Active Queue Management (AQM) mitigation.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "Simulation Model and Comparison for Satellite Links in Ku and Ka Bands for Standards-based on DVB-S2 and NS3",
    domain: "Satellite Communications & DVB-S2",
    category: "Satellite & Next-Gen Links",
    tech: ["NS-3", "DVB-S2 Physical Layer", "Ku / Ka Band Rain Attenuation", "Adaptive Coding & Modulation (ACM)", "C++"],
    description: "A high-fidelity satellite communications simulator in NS-3 modeling Ku/Ka band rain fade, slant-path attenuation, and DVB-S2 Adaptive Coding Modulation.",
    abstract: "Broadband satellite communication operating in Ku (12-18 GHz) and Ka (26-40 GHz) bands suffers severe atmospheric rain fade. We build a DVB-S2 physical and MAC layer extension in NS-3 with dynamic Adaptive Coding and Modulation (ACM) switching to maintain link availability during heavy tropical precipitation.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "A Real-time Aware Routing Strategy in Smart City Environments.",
    domain: "Smart City IoT & Real-Time Routing",
    category: "Smart City & Spatial Routing",
    tech: ["NS-3", "Smart City Grid Topology", "Latency-Constrained Routing", "Urban Traffic Model", "C++"],
    description: "A real-time latency-aware routing algorithm in NS-3 designed for smart city sensor grids and emergency municipal services.",
    abstract: "Smart city applications such as smart grid fault alerts and traffic signal preemption require guaranteed real-time latency bounds. We formulate an on-demand deadline-aware routing protocol in NS-3 that calculates link delivery probability and queue wait times to select time-optimal wireless paths across urban lamppost mesh networks.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "Multipoint Relay Selection through Estimated Spatial Relation in Smart City Environments.",
    domain: "Smart City Spatial Relays",
    category: "Smart City & Spatial Routing",
    tech: ["NS-3", "OLSR Spatial Extension", "Multipoint Relay (MPR) Optimizer", "Urban Obstacle Model", "C++"],
    description: "An enhanced OLSR Multipoint Relay selection protocol in NS-3 incorporating estimated 3D spatial building obstacles in urban smart city deployments.",
    abstract: "Standard OLSR Multipoint Relay (MPR) selection assumes isotropic radio propagation and selects redundant forwarders in urban street canyons. This project designs a spatial-relation-aware MPR selection heuristic in NS-3 that minimizes duplicate control broadcasts by 35% in dense building grid topologies.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "D-TCP: Dynamic TCP Congestion Control Algorithm for Next Generation Mobile Networks.",
    domain: "5G Congestion Control",
    category: "Transport Protocols",
    tech: ["NS-3", "5G-LENA / LTE", "Dynamic Congestion Window", "RTT Gradient Estimator", "C++"],
    description: "A next-generation mobile TCP congestion control algorithm in NS-3 (D-TCP) that eliminates throughput collapse during rapid cellular handovers.",
    abstract: "Rapid beam changes and base station handovers in 5G cellular networks induce abrupt bandwidth and RTT fluctuations. We propose D-TCP in NS-3—a dynamic congestion control protocol that estimates RTT gradient trends and available wireless bandwidth to prevent unnecessary window halving upon transient handover spikes.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Detection of Selfish Attack over Wireless Body Area Networks.",
    domain: "WBAN Security & Selfish Node Detection",
    category: "Sensor Networks & IoT",
    tech: ["NS-3", "IEEE 802.15.6 Medical MAC", "Selfish Attack Simulator", "Trust Evaluation Engine", "C++"],
    description: "A trust-based intrusion detection protocol in NS-3 identifying selfish sensor nodes that manipulate MAC contention windows in Wireless Body Area Networks.",
    abstract: "Selfish sensor nodes in Wireless Body Area Networks (WBAN) manipulate IEEE 802.15.6 backoff parameters to monopolize channel access at the expense of critical medical vital signs. We implement a localized watchdog and trust estimation architecture in NS-3 that isolates selfish nodes and ensures fair channel access for cardiac telemetry.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "IEEE NS3 Projects 2024 - 2025", path: "/2024-2025-ns3-projects-chennai" },
  { label: "IEEE NS3 Projects 2022 - 2023", path: "/ns3-ieee-projects-2022-2023-in-chennai" },
  { label: "IEEE NS3 Projects 2021 - 2022", path: "/ns3-ieee-projects-2021-2022-in-chennai", active: true },
  { label: "IEEE NS3 Projects 2020 - 2021", path: "/ns3-ieee-projects-2020-2021-in-chennai" },
  { label: "IEEE NS3 Projects 2019 - 2020", path: "/ns3-ieee-projects-2019-2020-in-chennai" },
  { label: "IEEE NS3 Projects 2018 - 2019", path: "/ns3-ieee-projects-2018-2019-in-chennai" },
];

const domainCategories = [
  { label: "All Domains", value: "All", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
  { label: "Wireless Ad-Hoc & WLAN", value: "Wireless Ad-Hoc & WLAN", icon: <WifiIcon sx={{ fontSize: 18 }} /> },
  { label: "Information-Centric Networks", value: "Information-Centric Networks", icon: <HubIcon sx={{ fontSize: 18 }} /> },
  { label: "Sensor Networks & IoT", value: "Sensor Networks & IoT", icon: <MonitorHeartIcon sx={{ fontSize: 18 }} /> },
  { label: "Transport Protocols", value: "Transport Protocols", icon: <SpeedIcon sx={{ fontSize: 18 }} /> },
  { label: "Satellite & Next-Gen Links", value: "Satellite & Next-Gen Links", icon: <SatelliteAltIcon sx={{ fontSize: 18 }} /> },
  { label: "Smart City & Spatial Routing", value: "Smart City & Spatial Routing", icon: <LocationCityIcon sx={{ fontSize: 18 }} /> },
];

export default function Ns3Projects2021() {
  const [projectsList, setProjectsList] = useState(ns3Projects2021Data);
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
    academicYear: "2021 - 2022",
    projectRequirements: "IEEE NS3 Projects 2021-2022 in Chennai",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=ns3&year=2021 - 2022`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "Network Simulation",
              category: item.category || "Wireless Ad-Hoc & WLAN",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["NS-3", "C++", "NetAnim"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2021 - 2022",
              difficulty: item.difficulty || "Intermediate",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2021-2022 NS3 projects");
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
          academicYear: "2021 - 2022",
          projectRequirements: "IEEE NS3 Projects 2021-2022 in Chennai",
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

      {/* Futuristic Radial Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-96 right-1/4 w-[32rem] h-[32rem] bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-md">
            <Ns3BrandIcon className="w-4 h-4 text-cyan-400" />
            <span>IEEE NS3 Projects 2021 - 2022</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-slate-300">Chennai Simulation Centre</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl mx-auto">
            IEEE NS3 Projects{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              2021 - 2022
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to IEEE Project Centre—explore 10 verified IEEE 2021-2022 NS3 network simulation projects. 
            From designing intricate network topologies to analyzing communication protocols and optimizing network performance, 
            bridge theoretical knowledge with real-world applications.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <CheckCircleIcon className="text-emerald-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">10 Verified IEEE Titles</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <CellTowerIcon className="text-cyan-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">NDN, D-TCP &amp; DVB-S2 Satellite</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <CodeIcon className="text-indigo-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">C++ Core &amp; NetAnim Visuals</span>
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
                Browse NS3 Projects By Academic Year
              </h2>
            </div>
            <span className="text-xs text-slate-400">Complete 2018 – 2025 Archive</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
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
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT IEEE NS3 PROJECTS (EXACT CONTENT AS REQUESTED) --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="space-y-4 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-medium uppercase tracking-wider">
                About IEEE NS3 Projects
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Transformative Network Simulation &amp; Protocol Research
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                In the realm of networking and simulation technologies, the years 2021-2022 stand as a transformative phase as the 2021-2022 IEEE Project Centre unveiled an array of innovative projects within the IEEE NS3 domain. These projects, meticulously curated to align with the esteemed standards of the Institute of Electrical and Electronics Engineers (IEEE), provided an exceptional platform for students and professionals to delve into the world of network simulation.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The 2021-2022 IEEE Project Centre showcased an impressive spectrum of NS3 Projects, each meticulously designed to explore various facets of networking. From designing intricate network topologies to analyzing communication protocols and optimizing network performance, participants were immersed in hands-on experiences that seamlessly bridged theoretical knowledge with real-world applications. These projects not only refined technical skills but also nurtured problem-solving abilities, all while adhering to the rigorous criteria set by IEEE.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The Industry experts and mentors offered participants an unparalleled opportunity to immerse themselves in the world of network simulation, unearthing its potential to revolutionize industries and ignite innovation. These projects tangibly demonstrated the outcomes of theoretical concepts, equipping participants with a profound understanding of network dynamics and behavior. The result was a cohort of individuals exceptionally prepared to address contemporary networking challenges, standing on the foundation fortified by the 2021-2022 IEEE NS3 projects at the IEEE Project Centre.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic">
                In conclusion, the years 2021-2022 exemplify the 2021-2022 IEEE Project Centre’s dedication to fostering innovation and knowledge in the field of networking and simulation technologies. By providing a platform for immersive exploration, collaboration with experts, and adherence to the stringent standards set by IEEE, these projects have enriched participants’ technical expertise while fostering a mindset of innovation and adept problem-solving. As we forge ahead, the impact of the 2021-2022 IEEE NS3 projects continues to shape participants’ academic and professional journeys in remarkable and transformative ways.
              </p>
            </div>

            {/* NS3 Technology Apparatus Orbs */}
            <div className="w-full lg:w-96 flex-shrink-0 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <HubIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">ndnSIM / ICN</span>
                <span className="text-[11px] text-slate-400">Named Data Networking</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <SatelliteAltIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">DVB-S2 Satellite</span>
                <span className="text-[11px] text-slate-400">Ku / Ka Band Rain Fade</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <LocationCityIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">Smart City OLSR</span>
                <span className="text-[11px] text-slate-400">Spatial Relay Selection</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <SpeedIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">D-TCP &amp; AQM CoDel</span>
                <span className="text-[11px] text-slate-400">Congestion Control</span>
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

          {/* Search Bar & View Mode Switcher */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-72">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" sx={{ fontSize: 18 }} />
              <input
                type="text"
                placeholder="Search 2021-2022 NS3 titles..."
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
            <span>IEEE 2021-2022 NS3 Project Titles</span>
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
                <span>NS3 Deliverables at IEEE Project Centre</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Full C++ Simulation Scripts:</strong> Complete scenario source code, custom protocol helpers, and CMake build scripts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>NetAnim &amp; Wireshark Traces:</strong> Visual node topology animations and detailed packet capture (.pcap) analysis.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Automated Plotting Graphs:</strong> Gnuplot and Matplotlib graphs for Throughput, Delay, Packet Delivery Ratio, and Energy.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>IEEE Documentation &amp; Viva Voce:</strong> Project report, base paper, synopsis, PPT presentation, and 1-on-1 Ubuntu NS3 execution training.
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919597793345?text=Hello%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%20IEEE%20NS3%20Projects%202021-2022"
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
                Fill the form below to reserve your selected 2021-2022 NS3 project title or request custom simulation research.
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
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition duration-200"
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
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-bold text-xs sm:text-sm transition text-center"
                  >
                    Select This Title &amp; Enquire
                  </button>
                  <a
                    href={`https://wa.me/919597793345?text=Hello%20IEEE%20Project%20Centre,%20I%20want%20NS3%20code%20and%20base%20paper%20for:%20${encodeURIComponent(
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
