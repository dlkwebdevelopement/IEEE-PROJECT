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
import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CellTowerIcon from "@mui/icons-material/CellTower";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import LanIcon from "@mui/icons-material/Lan";
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

// Custom 3D SDN (Software-Defined Networking) Logo
const SdnBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#sdnGrad2020)" stroke="#06B6D4" strokeWidth="1.5" />
    <defs>
      <linearGradient id="sdnGrad2020" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0891B2" />
        <stop offset="1" stopColor="#0E7490" />
      </linearGradient>
    </defs>
    {/* Centralized SDN Controller & Plane Separation */}
    <rect x="14" y="10" width="20" height="8" rx="2" fill="#F8FAFC" stroke="#06B6D4" strokeWidth="1.5"/>
    <text x="24" y="16.5" textAnchor="middle" fill="#0891B2" fontSize="6.5" fontWeight="bold">CONTROLLER</text>
    {/* OpenFlow Control Channel Rays */}
    <line x1="18" y1="18" x2="14" y2="28" stroke="#FDE047" strokeWidth="2" strokeDasharray="2 2" />
    <line x1="24" y1="18" x2="24" y2="28" stroke="#FDE047" strokeWidth="2" strokeDasharray="2 2" />
    <line x1="30" y1="18" x2="34" y2="28" stroke="#FDE047" strokeWidth="2" strokeDasharray="2 2" />
    {/* OpenFlow Switches Data Plane */}
    <circle cx="14" cy="32" r="4" fill="#38BDF8" />
    <circle cx="24" cy="32" r="4" fill="#4ADE80" />
    <circle cx="34" cy="32" r="4" fill="#38BDF8" />
    <line x1="18" y1="32" x2="20" y2="32" stroke="white" strokeWidth="2" />
    <line x1="28" y1="32" x2="30" y2="32" stroke="white" strokeWidth="2" />
  </svg>
);

// 2020-2021 IEEE SDN Project Dataset (10 Titles across 6 Domains)
const sdnProjects2020Data = [
  {
    id: 1,
    title: "Resource management and control in virtualized SDN networks",
    domain: "Network Virtualization & Slicing",
    category: "Virtualization & Control Plane",
    tech: ["Mininet", "Ryu Controller", "OpenFlow 1.3", "FlowVisor / OpenVirteX", "Python"],
    description: "A dynamic hypervisor resource partitioning system in virtualized SDN that isolates virtual network slices while maximizing substrate switch bandwidth utilization.",
    abstract: "Network virtualization allows multiple isolated virtual software-defined networks (vSDNs) to share a single physical substrate. This project designs a dynamic hypervisor resource manager using OpenFlow 1.3 in Mininet that provisions flow table capacity, CPU cycles, and link bandwidth with strict slice SLA isolation.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Social Data Driven SDN Network Operation using Northbound Interface",
    domain: "Northbound APIs & Social Analytics",
    category: "Northbound APIs & Analytics",
    tech: ["ONOS / Ryu", "REST Northbound API", "NLP Social Analyzer", "Python", "Mininet"],
    description: "An intent-driven SDN control pipeline querying live social media trends to proactively reroute network bandwidth before planned large-scale public events.",
    abstract: "Spike events on social media (breaking news, live sporting streams) cause severe sudden traffic congestion. We propose an intelligent Northbound application in Python interfacing with the Ryu SDN controller that parses Twitter/X trends and injects proactive flow modification rules before congestion cascades.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Hybrid SDN Networks: A Survey of Existing Approaches",
    domain: "Hybrid Traditional-SDN Routing",
    category: "Hybrid Networks",
    tech: ["Mininet", "OSPF / BGP Emulation", "OpenDaylight", "OpenFlow", "Wireshark"],
    description: "A hybrid networking testbed bridging legacy distributed routing protocols (OSPF/BGP) with centralized OpenFlow controllers for seamless brownfield migration.",
    abstract: "Upgrading legacy enterprise networks to pure SDN requires incremental hybrid deployment. This project simulates a hybrid SDN architecture in Mininet where legacy distributed OSPF routers and OpenFlow-enabled switches coexist, demonstrating loop-free forwarding and unified traffic engineering.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "A Scheme for Improving the Communications Efficiency between the Control Plane and Data Plane of the SDN-Enabled Airborne Tactical Network",
    domain: "Airborne Tactical Networks & FANET",
    category: "Airborne & Tactical SDN",
    tech: ["Mininet-WiFi", "Ryu Controller", "Airborne Mesh Model", "Batch Flow Push", "Python"],
    description: "A lightweight control channel compression and batch flow-pushing scheme in SDN that stabilizes intermittent high-latency airborne drone telemetry links.",
    abstract: "Airborne Tactical Networks suffer from high packet loss and intermittent control links. We develop an asynchronous batch flow installation and state-delta compression protocol in Ryu SDN that reduces Southbound OpenFlow message overhead by 45% over airborne wireless mesh channels.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "Data-driven network analytics and network optimization in SDN-based programmable optical networks",
    domain: "Optical SDN & Transport Networks",
    category: "Optical & Data Center SDN",
    tech: ["OpenDaylight", "Optical Flow Slicing", "Machine Learning Analytics", "Python", "Mininet Optical"],
    description: "A telemetry-driven optical wavelength allocation optimizer in SDN coordinating dynamic lightpath routing across high-capacity fiber backbones.",
    abstract: "Reconfigurable Optical Add-Drop Multiplexers (ROADMs) in optical transport backbones require automated spectrum management. This project builds a data-driven optical controller in OpenDaylight that evaluates Bit Error Rate (BER) telemetry to dynamically reassign optical wavelengths with zero traffic disruption.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "Resource Aware Routing for Service Function Chains in SDN and NFV-Enabled Network",
    domain: "Service Function Chaining (SFC) & NFV",
    category: "NFV & Service Chaining",
    tech: ["Mininet", "Ryu Controller", "VNF Orchestrator (Firewall/IDS/NAT)", "Dijkstra VNF Solver", "Python"],
    description: "A resource-aware Service Function Chain (SFC) placement algorithm in SDN steering user flows through required Virtual Network Functions (VNFs) with minimal latency.",
    abstract: "Network Function Virtualization (NFV) chains security and proxy functions (Firewall -> IDS -> NAT) sequentially. We design a joint VNF placement and flow routing controller in Ryu SDN that optimizes server CPU load and path stretch while guaranteeing end-to-end packet processing deadlines.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "SDN-based Local breakout for mobile edge computing in radio access network",
    domain: "MEC & Cellular Radio Access (5G RAN)",
    category: "Edge Computing & RAN",
    tech: ["Mininet", "OVS (Open vSwitch)", "Ryu SDN", "Local Breakout (LBO)", "Python"],
    description: "An SDN-controlled Local Breakout (LBO) router in 5G C-RAN steering low-latency edge application flows to local MEC servers without traversing the mobile core.",
    abstract: "Routing all mobile handset traffic through centralized EPC/5GC gateways introduces unacceptable round-trip latency. We implement an SDN-based Local Breakout controller in Open vSwitch that inspects GTP-U tunnel packets at the eNodeB/gNodeB edge and diverts local MEC services locally.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 8,
    title: "Analysis of traffic engineering capabilities for SDN-based data center networks",
    domain: "Data Center Traffic Engineering",
    category: "Optical & Data Center SDN",
    tech: ["Mininet", "Fat-Tree Topology (k=4)", "Ryu Controller", "Hedera Flow Scheduler", "Gnuplot"],
    description: "A centralized multi-path traffic engineering controller in SDN executing dynamic elephant flow rerouting across Fat-Tree datacenter bisection links.",
    abstract: "Equal-Cost Multi-Path (ECMP) hash collisions in datacenter bisection fabrics lead to link starvation and throughput collapse. We model a flow-aware traffic engineering controller (Hedera algorithm) in Ryu SDN that detects elephant flows exceeding 10% link capacity and dynamically reroutes them across non-congested core links.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 9,
    title: "Priority-aware VM Allocation and Network Bandwidth Provisioning in Software-Defined Networking (SDN)-enabled Clouds",
    domain: "Cloud Bandwidth Provisioning & VM Placement",
    category: "Virtualization & Control Plane",
    tech: ["Mininet", "CloudSim / SDN Module", "Ryu", "QoS Queuing (HTB)", "Python"],
    description: "A priority-aware VM scheduler and SDN bandwidth allocator guaranteeing dedicated bandwidth guarantees for mission-critical cloud tenants.",
    abstract: "Co-locating multi-tier enterprise virtual machines on public cloud hypervisors leads to noisy-neighbor bandwidth contention. This project develops a joint VM placement and OpenFlow QoS meter controller that provisions Hierarchical Token Bucket (HTB) rate-limits dynamically according to tenant SLA tiers.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Toward Privacy-Preserving Symptoms Matching in SDN-Based Mobile Healthcare Social Networks",
    domain: "SDN Security & Healthcare Social Networks",
    category: "Security & Privacy",
    tech: ["Mininet", "Ryu Controller", "Homomorphic Cryptography", "Privacy-Preserving Matching", "Python"],
    description: "An SDN-orchestrated secure patient matching protocol in mobile healthcare social networks evaluating medical symptom similarity without leaking private records.",
    abstract: "Patients seeking peer support groups in mobile health communities must compare private symptoms without exposing clinical diagnoses to third-party controllers. We build an SDN-assisted privacy-preserving cosine similarity matching system in Python that enforces encrypted token routing across software-defined patient clusters.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "IEEE SDN Projects 2024 - 2025", path: "/2024-2025-sdn-projects-chennai" },
  { label: "IEEE SDN Projects 2022 - 2023", path: "/sdn-ieee-projects-2022-2023-in-chennai" },
  { label: "IEEE SDN Projects 2021 - 2022", path: "/sdn-ieee-projects-2021-2022-in-chennai" },
  { label: "IEEE SDN Projects 2020 - 2021", path: "/sdn-ieee-projects-2020-2021-in-chennai", active: true },
  { label: "IEEE SDN Projects 2019 - 2020", path: "/sdn-ieee-projects-2019-2020-in-chennai" },
  { label: "IEEE SDN Projects 2018 - 2019", path: "/sdn-ieee-projects-2018-2019-in-chennai" },
];

const domainCategories = [
  { label: "All Domains", value: "All", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
  { label: "Virtualization & Control Plane", value: "Virtualization & Control Plane", icon: <LanIcon sx={{ fontSize: 18 }} /> },
  { label: "NFV & Service Chaining", value: "NFV & Service Chaining", icon: <HubIcon sx={{ fontSize: 18 }} /> },
  { label: "Edge Computing & RAN", value: "Edge Computing & RAN", icon: <CellTowerIcon sx={{ fontSize: 18 }} /> },
  { label: "Optical & Data Center SDN", value: "Optical & Data Center SDN", icon: <StorageIcon sx={{ fontSize: 18 }} /> },
  { label: "Airborne & Tactical SDN", value: "Airborne & Tactical SDN", icon: <FlightTakeoffIcon sx={{ fontSize: 18 }} /> },
  { label: "Security & Privacy", value: "Security & Privacy", icon: <SecurityIcon sx={{ fontSize: 18 }} /> },
];

export default function SdnProjects2020() {
  const [projectsList, setProjectsList] = useState(sdnProjects2020Data);
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
    projectRequirements: "IEEE SDN Projects 2020-2021 in Chennai",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=sdn&year=2020 - 2021`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "Software-Defined Networking",
              category: item.category || "Virtualization & Control Plane",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["Mininet", "Ryu", "OpenFlow 1.3", "Python"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2020 - 2021",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2020-2021 SDN projects");
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
          academicYear: "2020 - 2021",
          projectRequirements: "IEEE SDN Projects 2020-2021 in Chennai",
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
      <div className="absolute top-96 right-1/4 w-[32rem] h-[32rem] bg-teal-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-md">
            <SdnBrandIcon className="w-4 h-4 text-cyan-400" />
            <span>IEEE SDN Projects 2020 - 2021</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-slate-300">Software-Defined Networking Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl mx-auto">
            IEEE SDN Projects{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
              2020 - 2021
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Master programmable network architectures, OpenFlow controller design, NFV service function chaining, 
            and 5G edge Local Breakout with complete Mininet topologies, Ryu / ONOS controllers, and Python scripts.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <CheckCircleIcon className="text-emerald-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">10 Verified IEEE Titles</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <LanIcon className="text-cyan-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">Mininet &amp; OpenFlow 1.3</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <CodeIcon className="text-teal-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">Ryu, ONOS &amp; OpenDaylight</span>
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
                Browse SDN Projects By Academic Year
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
                    ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white border-cyan-400/50 shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-850"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT IEEE 2020-2021 SDN PROJECTS SECTION (EXACT AS REQUESTED) --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="space-y-4 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-medium uppercase tracking-wider">
                About IEEE 2020-2021 SDN Projects
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Empowering Programmable Control Planes &amp; Next-Gen Network Management
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                In the realm of networking technologies, the years 2020-2021 marked a pivotal period as the IEEE Project Centre unveiled a captivating lineup of projects within the realm of Software-Defined Networking (SDN). These projects, meticulously tailored to align with the esteemed standards of the Institute of Electrical and Electronics Engineers (IEEE), provided an exceptional platform for students and professionals to delve into the dynamic world of SDN.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The IEEE Project Centre showcased a diverse range of SDN projects, each meticulously designed to explore various facets of this transformative technology. From designing innovative network architectures to implementing dynamic network control and management solutions, participants immersed themselves in hands-on experiences that seamlessly merged theoretical knowledge with real-world applications. These projects not only honed technical skills but also nurtured critical problem-solving abilities, all while adhering to the rigorous benchmarks set by IEEE.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Collaboration with industry experts and mentors within the IEEE Project Centre offered participants an unparalleled opportunity to dive deep into the world of SDN, unearthing its potential to reshape industries and ignite innovation. These projects tangibly showcased the practical outcomes of theoretical concepts, equipping participants with an in-depth understanding of SDN’s principles and capabilities. The outcome was a cohort of individuals exceptionally prepared to tackle contemporary networking challenges, standing on the foundation fortified by the 2020-2021 IEEE SDN projects at the IEEE Project Centre.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic">
                In conclusion, the years 2020-2021 underscore the IEEE Project Centre‘s commitment to nurturing innovation and knowledge in the realm of networking technologies, particularly within the domain of Software-Defined Networking. By providing a platform for immersive exploration, collaboration with experts, and adherence to the high standards set by IEEE, these projects have enriched participants’ technical acumen while fostering a mindset of innovation and adept problem-solving. As we stride forward, the impact of the 2020-2021 IEEE SDN projects continues to resonate, shaping participants’ academic and professional journeys in remarkable and transformative ways.
              </p>
            </div>

            {/* SDN Technology Apparatus Orbs */}
            <div className="w-full lg:w-96 flex-shrink-0 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <LanIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">Mininet &amp; OVS</span>
                <span className="text-[11px] text-slate-400">OpenFlow 1.3 Virtualization</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <HubIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">Ryu &amp; ONOS</span>
                <span className="text-[11px] text-slate-400">Python REST Controllers</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <CloudIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">NFV &amp; Service Chaining</span>
                <span className="text-[11px] text-slate-400">VNF Dynamic Steering</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <SpeedIcon sx={{ fontSize: 28 }} />
                </div>
                <span className="text-xs font-semibold text-white">Traffic Engineering</span>
                <span className="text-[11px] text-slate-400">Hedera Multi-Path QoS</span>
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
                    ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-500/20"
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
                placeholder="Search 2020-2021 SDN titles..."
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
            <span>IEEE 2020-2021 SDN Project Titles</span>
            <span className="text-xs font-normal text-cyan-400 bg-cyan-950/70 border border-cyan-800 px-2 py-0.5 rounded-full">
              Showing {filteredProjects.length} Titles
            </span>
          </h3>
          <span className="text-xs text-slate-400">Click title for abstract &amp; SDN toolset details</span>
        </div>

        {viewMode === "table" ? (
          /* Table View */
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl backdrop-blur-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/90 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
                  <th className="py-3.5 px-4 w-12 text-center">S.No</th>
                  <th className="py-3.5 px-6">IEEE SDN Project Title</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Domain / Topic</th>
                  <th className="py-3.5 px-4 hidden lg:table-cell">SDN Tools &amp; Controllers</th>
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
                <span>SDN Deliverables at IEEE Project Centre</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Full SDN Controller Scripts:</strong> Complete Ryu / ONOS / OpenDaylight Python apps and custom Mininet network topologies.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>OpenFlow Flow Tables &amp; PCAP:</strong> Live flow table dump inspection (`ovs-ofctl`) and Wireshark Southbound packet capture analysis.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Performance Graphs &amp; Metrics:</strong> Iperf bandwidth evaluation, Ping latency / jitter comparisons, and flow installation speed benchmarks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>IEEE Documentation &amp; Viva Voce:</strong> Project report, base paper, synopsis, PPT presentation, and 1-on-1 Ubuntu VM execution training.
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919597793345?text=Hello%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%20IEEE%20SDN%20Projects%202020-2021"
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
              <h3 className="text-xl font-bold text-white mb-2">Book Your SDN Project Title</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill the form below to reserve your selected 2020-2021 SDN project title or request custom controller development.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                  <CheckCircleIcon sx={{ fontSize: 40 }} />
                  <h4 className="font-bold text-lg">Thank You! Your Enquiry Was Received</h4>
                  <p className="text-xs text-slate-300">
                    Our Software-Defined Networking research team will get in touch with your project abstract and demo video within 15 minutes.
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
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition duration-200"
                  >
                    Submit SDN Project Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL FOR ABSTRACT & SDN SPECS --- */}
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
                    SDN Architecture &amp; Abstract Overview
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    SDN Toolchain &amp; Controllers
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
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm transition text-center"
                  >
                    Select This Title &amp; Enquire
                  </button>
                  <a
                    href={`https://wa.me/919597793345?text=Hello%20IEEE%20Project%20Centre,%20I%20want%20SDN%20scripts%20and%20base%20paper%20for:%20${encodeURIComponent(
                      selectedProject.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition"
                  >
                    <WhatsAppIcon sx={{ fontSize: 18 }} />
                    <span>WhatsApp SDN Demo</span>
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
