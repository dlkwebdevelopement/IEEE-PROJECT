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
    <circle cx="24" cy="24" r="22" fill="url(#sdnGrad2021)" stroke="#06B6D4" strokeWidth="1.5" />
    <defs>
      <linearGradient id="sdnGrad2021" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
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

// 2021-2022 IEEE SDN Project Dataset (10 Titles across 6 Domains)
const sdnProjects2021Data = [
  {
    id: 1,
    title: "Resource management and control in virtualized SDN networks",
    domain: "Network Virtualization & Slicing",
    category: "Virtualization & Control Plane",
    tech: ["Mininet", "Ryu Controller", "OpenFlow 1.3", "FlowVisor / OpenVirteX", "Python"],
    description: "A dynamic hypervisor resource partitioning system in virtualized SDN that isolates virtual network slices while maximizing substrate switch bandwidth utilization.",
    abstract: "Network virtualization allows multiple isolated virtual software-defined networks (vSDNs) to share a single physical substrate. This project designs a dynamic hypervisor resource manager using OpenFlow 1.3 in Mininet that provisions flow table capacity, CPU cycles, and link bandwidth with strict slice SLA isolation.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Social Data Driven SDN Network Operation using Northbound Interface",
    domain: "Northbound APIs & Social Analytics",
    category: "Northbound APIs & Analytics",
    tech: ["ONOS / Ryu", "REST Northbound API", "NLP Social Analyzer", "Python", "Mininet"],
    description: "An intent-driven SDN control pipeline querying live social media trends to proactively reroute network bandwidth before planned large-scale public events.",
    abstract: "Spike events on social media (breaking news, live sporting streams) cause severe sudden traffic congestion. We propose an intelligent Northbound application in Python interfacing with the Ryu SDN controller that parses social media signals and injects proactive flow modification rules before congestion cascades.",
    year: "2021 - 2022",
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
    year: "2021 - 2022",
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
    year: "2021 - 2022",
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
    year: "2021 - 2022",
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
    year: "2021 - 2022",
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
    year: "2021 - 2022",
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
    year: "2021 - 2022",
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
    year: "2021 - 2022",
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
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "IEEE SDN Projects 2024 - 2025", path: "/2024-2025-sdn-projects-chennai" },
  { label: "IEEE SDN Projects 2022 - 2023", path: "/sdn-ieee-projects-2022-2023-in-chennai" },
  { label: "IEEE SDN Projects 2021 - 2022", path: "/sdn-ieee-projects-2021-2022-in-chennai", active: true },
  { label: "IEEE SDN Projects 2020 - 2021", path: "/sdn-ieee-projects-2020-2021-in-chennai" },
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

export default function SdnProjects2021() {
  const [projectsList, setProjectsList] = useState(sdnProjects2021Data);
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
    projectRequirements: "IEEE SDN Projects 2021-2022 in Chennai",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=sdn&year=2021 - 2022`);
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
              year: item.academic_year || "2021 - 2022",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2021-2022 SDN projects");
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
      alert("Please check the captcha before submitting!");
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
        alert("Server submission error. Please try WhatsApp or Call directly.");
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-4 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs & Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <SdnBrandIcon className="w-4 h-4" />
              IEEE SDN Projects 2021 – 2022
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
              OpenFlow 1.3 • Mininet • Ryu • ONOS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            IEEE SDN Projects{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              2021 – 2022
            </span>{" "}
            in Chennai
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mb-8 leading-relaxed">
            Pioneer modern decoupled networking architectures, centralized OpenFlow controllers, Network Functions Virtualization (NFV), and automated edge orchestration with industry-verified IEEE 2021–2022 software-defined networking research domains.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects-directory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <SearchIcon sx={{ fontSize: 20 }} />
              Browse 2021-2022 SDN Titles
            </a>
            <a
              href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%20IEEE%20SDN%20Projects%202021-2022"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon sx={{ fontSize: 20 }} />
              WhatsApp SDN Expert
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
              <div className="text-2xl font-black text-cyan-400">10+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">IEEE SDN 2021 Titles</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-teal-400">Mininet 2.3</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Virtual Emulation Testbed</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-emerald-400">Ryu / ONOS</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Programmable Controllers</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-sky-400">100%</div>
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
              SDN Release Archives:
            </span>
            {yearNavigationLinks.map((yearLink, index) => (
              <Link
                key={index}
                to={yearLink.path}
                className={`text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 border ${
                  yearLink.active
                    ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30"
                    : "bg-slate-950/60 text-slate-300 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {yearLink.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About IEEE 2021-2022 SDN Projects Section */}
      <section className="py-16 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                <AutoAwesomeIcon sx={{ fontSize: 14 }} />
                Architectural Evolution
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
                ABOUT IEEE 2021-2022 SDN PROJECTS
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  In the ever-evolving landscape of networking technologies, the years 2021-2022 have witnessed a remarkable stride as the IEEE Project Centre introduced an array of innovative projects within the realm of Software-Defined Networking (SDN). These projects, meticulously crafted to align with the esteemed standards of the Institute of Electrical and Electronics Engineers (IEEE), have provided an exceptional platform for students and professionals to explore the cutting-edge world of SDN.
                </p>
                <p>
                  Throughout the 2021-2022 period, the IEEE Project Centre has presented a diverse array of SDN projects, each thoughtfully designed to explore various dimensions of this transformative technology. From conceptualizing and implementing dynamic network control to orchestrating efficient network management solutions, participants have engaged in hands-on experiences that seamlessly integrate theoretical knowledge with real-world applications. These projects have not only honed technical skills but also nurtured critical problem-solving abilities, all while upholding the rigorous benchmarks set by IEEE.
                </p>
                <p>
                  The collaborative environment fostered by the IEEE Project Centre, with industry experts and mentors, has provided participants with an unparalleled opportunity to immerse themselves in the realm of SDN. These projects have tangibly showcased the practical outcomes of theoretical concepts, equipping participants with an in-depth understanding of SDN’s principles and capabilities. The result is a group of individuals exceptionally prepared to address contemporary networking challenges, standing on the foundation fortified by the 2021-2022 IEEE SDN projects at the IEEE Project Centre.
                </p>
                <p>
                  In conclusion, the years 2021-2022 epitomize the IEEE Project Centre‘s dedication to nurturing innovation and knowledge in the field of networking technologies, particularly in the realm of Software-Defined Networking. By offering a platform for immersive exploration, collaboration with experts, and adherence to the stringent standards set by IEEE, these projects have enriched participants’ technical expertise while fostering a mindset of innovation and adept problem-solving. As we move forward, the impact of the 2021-2022 IEEE SDN projects continues to shape participants’ academic and professional journeys in remarkable and transformative ways.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3 text-cyan-400 font-bold text-sm mb-1">
                    <CheckCircleIcon sx={{ fontSize: 18 }} />
                    Decoupled Plane Logic
                  </div>
                  <p className="text-xs text-slate-400">
                    Control Plane (Ryu/ONOS) abstracted away from forwarding Data Plane (Open vSwitch / Mininet switches).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3 text-teal-400 font-bold text-sm mb-1">
                    <CheckCircleIcon sx={{ fontSize: 18 }} />
                    Northbound &amp; Southbound APIs
                  </div>
                  <p className="text-xs text-slate-400">
                    OpenFlow 1.3 protocol message handlers, RESTful Northbound applications, and dynamic flow push mechanisms.
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                    <HubIcon sx={{ fontSize: 28 }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">SDN Architecture Blueprint</h3>
                    <p className="text-xs text-slate-400">IEEE 2021-2022 Standard 3-Tier Layering</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Layer 1 */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-cyan-400 mb-1">
                      <span>1. APPLICATION PLANE</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">Northbound REST</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      QoS Schedulers, SFC Orchestrators, Deep Learning Traffic Analyzers, Healthcare Privacy Matchers.
                    </p>
                  </div>

                  {/* Layer 2 */}
                  <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
                    <div className="flex items-center justify-between text-xs font-bold text-teal-300 mb-1">
                      <span>2. CONTROL PLANE</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">Ryu / ONOS / ODL</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Centralized Network Operating System managing global topology graphs, routing flow tables, and event triggers.
                    </p>
                  </div>

                  {/* Layer 3 */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-400 mb-1">
                      <span>3. DATA PLANE (INFRASTRUCTURE)</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">OpenFlow 1.3 / OVS</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Mininet virtual switches (OVS), Fat-Tree hosts, Optical ROADMs, and Airborne mobile nodes.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Simulation OS: Ubuntu 20.04 / 22.04 LTS</span>
                  <span className="text-cyan-400 font-semibold">Python 3.8+</span>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <LanIcon sx={{ fontSize: 14 }} />
                2021 – 2022 Catalogue
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                IEEE SDN Projects 2021-2022 Project Titles
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Explore 10 IEEE Software-Defined Networking project titles with full controller scripts, Mininet topologies, and paper documentation.
              </p>
            </div>

            {/* View Switcher */}
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
              <button
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === "table"
                    ? "bg-cyan-600 text-white shadow"
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
                    ? "bg-cyan-600 text-white shadow"
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
                placeholder="Search SDN titles, controllers (Ryu, ONOS), topologies (Fat-Tree), domains (MEC, NFV)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition"
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
                      ? "bg-cyan-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30"
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
              Showing <strong className="text-cyan-400">{filteredProjects.length}</strong> of{" "}
              {projectsList.length} IEEE SDN projects
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
                    <th className="py-4 px-6 min-w-[340px]">Projects List (IEEE 2021-2022 SDN Titles)</th>
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
                      <td className="py-4 px-4 text-center font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {project.title}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {project.description}
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-2 md:hidden">
                          <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-950/80 text-cyan-300 border border-cyan-800">
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
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 border border-slate-800"
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
                            className="px-3 py-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 border border-cyan-700/50 text-cyan-300 text-xs font-semibold transition"
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
                        No SDN projects match your search query. Try another keyword or select &quot;All Domains&quot;.
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
                  className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
                        S.No: {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{project.year}</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
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
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800"
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
                      className="flex-1 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-700/60 text-cyan-300 text-xs font-bold transition text-center"
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

      {/* SDN Tech Stack & Simulator Matrix */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <SettingsSuggestIcon sx={{ fontSize: 16 }} />
              Testbed &amp; SDN Frameworks
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              SDN Simulation Environment &amp; Protocols
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Our 2021-2022 SDN projects are completely simulated and benchmarked using industry standard controllers, hypervisors, and data plane emulation engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <LanIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Mininet 2.3.0</h3>
              <div className="text-xs text-cyan-400 font-semibold mb-2">Virtual Network Emulator</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Creates realistic OpenFlow networks running genuine kernel and application code on a single Linux kernel with Open vSwitch.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
                <CodeIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Ryu SDN Controller</h3>
              <div className="text-xs text-teal-400 font-semibold mb-2">Python Component Framework</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Component-based SDN framework providing well-defined software API endpoints to build new network management and control apps.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <SpeedIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">OpenFlow 1.3</h3>
              <div className="text-xs text-emerald-400 font-semibold mb-2">Southbound Protocol</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-table pipeline processing, group tables, meter bands for rate-limiting, and packet-in / packet-out telemetry.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <TimelineIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Wireshark &amp; Iperf</h3>
              <div className="text-xs text-sky-400 font-semibold mb-2">Telemetry &amp; Benchmarking</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Capture flow negotiation headers, analyze bisection link throughput, latency jitter, and packet delivery ratio (PDR).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Enquiry & Guidance Form */}
      <section id="enquiry-form" className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950/90 border border-cyan-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                <SdnBrandIcon className="w-3.5 h-3.5" />
                Reserve 2021-2022 SDN Project
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request Base Paper &amp; Live Simulation Demo
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Submit your chosen IEEE SDN 2021-2022 title below to receive the complete Python controller code, Mininet network topology, IEEE PDF paper, and PPT presentation.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/50 text-center">
                <CheckCircleIcon sx={{ fontSize: 48 }} className="text-emerald-400 mb-2" />
                <h3 className="text-lg font-bold text-white">Enquiry Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Our IEEE Networking Project Lead will contact you shortly via phone &amp; WhatsApp with the SDN project deliverables.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20just%20submitted%20my%20enquiry%20for%20IEEE%20SDN%20Projects%202021-2022"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Academic Year
                    </label>
                    <select
                      value={formData.academicYear}
                      onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm"
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
                    Selected SDN Title / Custom Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectRequirements}
                    onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                    placeholder="Enter project title name or specific simulation topology requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
                  />
                </div>

                {/* Captcha */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.captchaChecked}
                      onChange={(e) => setFormData({ ...formData, captchaChecked: e.target.checked })}
                      className="w-4 h-4 rounded text-cyan-600 focus:ring-cyan-500 bg-slate-800 border-slate-700"
                    />
                    <span className="text-xs text-slate-300">
                      I am not a robot (Verification Check)
                    </span>
                  </label>
                  <span className="text-[10px] text-slate-500">reCAPTCHA v3</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-cyan-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Submit IEEE SDN 2021-2022 Project Request
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
              className="bg-slate-900 border border-cyan-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">{selectedProject.year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                {selectedProject.title}
              </h3>

              <div className="space-y-4 text-slate-300 text-xs sm:text-sm">
                <div>
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                    IEEE Research Abstract
                  </h4>
                  <p className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 leading-relaxed text-slate-300">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1.5">
                    Simulation Tooling &amp; Protocols
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 text-cyan-300 border border-slate-800 text-xs font-medium"
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
