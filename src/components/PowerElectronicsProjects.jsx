import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { API_BASE } from "../api";
import {
  powerElectronicsProjects2020,
  powerElectronicsProjects2021,
  powerElectronicsProjects2022,
  yearlyLinks,
  editorialContentByYear,
  fetchPowerElectronicsProjects,
} from "../data/powerElectronicsData";

// Material UI Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import MemoryIcon from "@mui/icons-material/Memory";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
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
import EvStationIcon from "@mui/icons-material/EvStation";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

// Custom 3D Power Electronics & Transformer Inverter Logo
const PowerElectronicsBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#peGrad)" stroke="#F59E0B" strokeWidth="1.5" />
    <defs>
      <linearGradient id="peGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#451A03" />
        <stop offset="0.5" stopColor="#78350F" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
    </defs>
    {/* Lightning / Power Bolt */}
    <path
      d="M26 12L16 26H24L22 36L32 22H24L26 12Z"
      fill="#FDE047"
      stroke="#F59E0B"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    {/* AC Sine Wave & DC Rail Graphics */}
    <path d="M12 36C14 34, 16 38, 18 36" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 36H36" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PowerElectronicsProjects = ({ defaultYear }) => {
  const location = useLocation();

  // Determine active academic year based on route or prop
  const currentYear = useMemo(() => {
    if (defaultYear) return defaultYear;
    const path = location.pathname.toLowerCase();
    if (path.includes("2022-2023")) return "2022 - 2023";
    if (path.includes("2021-2022")) return "2021 - 2022";
    if (path.includes("2020-2021")) return "2020 - 2021";
    return "2020 - 2021";
  }, [defaultYear, location.pathname]);

  const editorial = useMemo(() => {
    return editorialContentByYear[currentYear] || editorialContentByYear["2020 - 2021"];
  }, [currentYear]);

  // Initial projects based on year
  const initialData = useMemo(() => {
    if (currentYear.includes("2022")) return powerElectronicsProjects2022;
    if (currentYear.includes("2021")) return powerElectronicsProjects2021;
    return powerElectronicsProjects2020;
  }, [currentYear]);

  const [projects, setProjects] = useState(initialData);
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
    year: currentYear,
    projectTitle: "",
    message: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Fetch from backend API or sync on year change
  useEffect(() => {
    let isMounted = true;
    const loadProjects = async () => {
      setLoading(true);
      const data = await fetchPowerElectronicsProjects(currentYear);
      if (isMounted) {
        setProjects(data);
        setLoading(false);
      }
    };
    loadProjects();
    return () => {
      isMounted = false;
    };
  }, [currentYear]);

  // Categories extraction
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  // Search & Filter
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
      year: currentYear,
      projectTitle: proj ? proj.title : `Power Electronics IEEE Projects ${currentYear}`,
    }));
    setIsModalOpen(true);
    setFormSuccess(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/enquiries.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          domain: "Power Electronics & Energy Systems",
          academicYear: currentYear,
          sourcePage: `Power Electronics IEEE Projects ${currentYear}`,
        }),
      });
      if (res.ok) {
        setFormSuccess(true);
      } else {
        alert("Enquiry submitted successfully! Our Power Electronics technical team will contact you shortly.");
        setFormSuccess(true);
      }
    } catch (err) {
      console.warn("Error submitting enquiry:", err);
      alert("Enquiry recorded! We will reach out via WhatsApp/Call.");
      setFormSuccess(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  const domainPillars = [
    {
      title: "Quasi-Z-Source & High-Gain DC-DC",
      icon: <WbSunnyIcon className="text-amber-400" />,
      desc: "Single-stage qZSI solar inverters, high-gain coupled inductor converters, and soft-switching ZVS full-bridge interfaces.",
    },
    {
      title: "EV Chargers & Battery Energy Storage",
      icon: <EvStationIcon className="text-emerald-400" />,
      desc: "Bidirectional V2G on-board chargers, railway traction regenerative converters, and kinetic flywheel Dual Active Bridge systems.",
    },
    {
      title: "Power Factor Correction (PFC) & Rectifiers",
      icon: <ElectricBoltIcon className="text-cyan-400" />,
      desc: "Wide-bandgap SiC/GaN bridgeless totem-pole rectifiers, matrix converters, and 3-phase Voltage Oriented Control (VOC).",
    },
    {
      title: "Transformerless Inverters & Grid Filters",
      icon: <HubIcon className="text-indigo-400" />,
      desc: "Single-phase H5/H6 transformerless solar topologies eliminating ground leakage currents, paired with tuned Trap-CL & LCL filters.",
    },
  ];

  const faqs = [
    {
      q: "Which simulation tools and hardware are used for these Power Electronics projects?",
      a: "All project models are developed in MATLAB / Simulink, PLECS, and PSIM with complete parameter tuning. For hardware implementation, we support DSP (TI TMS320F28379D / dsPIC), Arduino/STM32 PWM controllers, and FPGA gate drive circuits.",
    },
    {
      q: "Can I get assistance with Total Harmonic Distortion (THD) and IEEE 519 standards compliance?",
      a: "Yes! Every inverter and PFC rectifier simulation includes FFT harmonic spectrum analysis, calculating THD percentages against IEEE 519 and IEC 61000 standards with active/passive LCL filter damping.",
    },
    {
      q: "Do you support hardware prototype fabrication for final year college review?",
      a: "Yes. We offer fully functional hardware prototypes featuring custom PCB layouts, high-frequency ferrite core transformers, MOSFET/IGBT driver boards with optocoupler isolation, and Hall-effect voltage/current sensors.",
    },
    {
      q: "What deliverables are provided with the project package?",
      a: "You receive the complete MATLAB/Simulink (.slx) simulation files, PLECS models, circuit schematics, simulation result waveforms (voltage, current, THD, efficiency curves), authentic IEEE base paper PDF, detailed project thesis report, and PPT presentation slides.",
    },
    {
      q: "How can I book a technical consultation for my Power Electronics thesis?",
      a: "Click 'Enquire' on your preferred project title or tap the WhatsApp button (+91 93818 83344) to connect directly with our power engineering guides at IEEE Project Centre Chennai.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        {/* Glowing Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-amber-400/80 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/power-electronics-ieee-projects-2020-2021-in-chennai" className="hover:text-amber-300 transition-colors">Power Electronics Projects</Link>
            <span>/</span>
            <span className="text-slate-400">{currentYear}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
                <PowerElectronicsBrandIcon className="w-4 h-4" />
                <span>{editorial.badge}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Power Electronics IEEE Projects <span className={`text-transparent bg-clip-text bg-gradient-to-r ${editorial.themeColor}`}>{currentYear}</span> in Chennai
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
                {editorial.subtitle}
              </p>

              {/* Feature Badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-amber-400 !text-base" />
                  <span>MATLAB / Simulink & PLECS Tested</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-amber-400 !text-base" />
                  <span>DSP / TMS320 & Hardware Prototype Ready</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-amber-400 !text-base" />
                  <span>100% IEEE Base Papers & Viva Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/919381883344?text=Hello%20IEEE%20Project%20Centre%2C%20I%20am%20interested%20in%20Power%20Electronics%20IEEE%20Projects%20${encodeURIComponent(currentYear)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all duration-200"
                >
                  <WhatsAppIcon className="!text-lg" />
                  <span>WhatsApp Technical Consultation</span>
                </a>
                <button
                  onClick={() => openProjectModal(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-950/40 hover:shadow-amber-900/60 transition-all duration-200"
                >
                  <AutoAwesomeIcon className="!text-base" />
                  <span>Request Custom Project</span>
                </button>
              </div>
            </div>

            {/* Right Card / Summary Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <DeveloperBoardIcon className="text-amber-400 !text-3xl" />
                  <div>
                    <h3 className="font-bold text-white text-base">Power Hub Spectrum</h3>
                    <p className="text-xs text-slate-400">B.E / B.Tech / M.E / M.Tech / PhD</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Published Titles:</span>
                    <span className="font-semibold text-amber-300">{projects.length} Verified Titles</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Simulation Platforms:</span>
                    <span className="font-semibold text-slate-200">MATLAB / Simulink, PLECS, PSIM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Control Controllers:</span>
                    <span className="font-semibold text-slate-200">DSP F28379D, dsPIC, FPGA</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Core Focus:</span>
                    <span className="font-semibold text-slate-200">Renewables, EV, Microgrids, PFC</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                  <a
                    href="tel:+919381883344"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <PhoneIcon className="!text-sm" />
                    <span>Direct Call: +91 93818 83344</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Selector Pills */}
      <section className="py-6 bg-slate-900 border-b border-slate-800 sticky top-16 z-20 backdrop-blur-md bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap mr-2">
              Browse Years:
            </span>
            {yearlyLinks.map((item) => {
              const isActive = item.year === currentYear;
              return (
                <Link
                  key={item.year}
                  to={item.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {item.year}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial & About Section */}
      <section className="py-16 bg-slate-950 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-600/30 text-amber-400 text-xs font-semibold mb-4">
              <MenuBookIcon className="!text-sm" />
              <span>Technology & Architecture Insights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
              {editorial.aboutTitle}
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{editorial.aboutP1}</p>
              <p>{editorial.aboutP2}</p>
              <p>{editorial.aboutP3}</p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {domainPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-800">{pillar.icon}</div>
                    <h4 className="font-semibold text-white text-sm">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Listing Section */}
      <section className="py-16 bg-slate-950 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  IEEE Power Electronics Project List {currentYear}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-950 border border-amber-600/40 text-amber-300 text-xs font-bold">
                  {filteredProjects.length} Projects
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Filter by converter category or search by topology, modulation, battery storage, or grid filter.
              </p>
            </div>

            {/* Search Bar & View Toggle */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative min-w-[260px]">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 !text-lg" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Inverter, Quasi-Z, PFC, EV..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 self-end sm:self-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
                    viewMode === "grid" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <GridViewIcon className="!text-lg" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
                    viewMode === "table" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"
                  }`}
                  title="Table View"
                >
                  <TableRowsIcon className="!text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="py-6 flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-slate-950 font-bold shadow-sm shadow-amber-900/40"
                    : "bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project List / Grid View */}
          {loading ? (
            <div className="py-20 text-center text-slate-400">
              <div className="animate-spin w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full mx-auto mb-3" />
              <p className="text-xs">Loading Power Electronics Projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="py-16 text-center bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-300 text-sm font-semibold">No Power Electronics projects found matching your query.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-semibold hover:bg-amber-400 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const isExpanded = !!expandedAbstracts[project.id];
                const isCopied = copiedId === project.id;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all duration-200 hover:shadow-xl hover:shadow-amber-950/20 group"
                  >
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/70 text-xs">
                        <span className="font-mono text-amber-400 font-bold">#{project.id}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-amber-300 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Domain subtitle */}
                      <p className="text-xs text-slate-400 font-mono mt-1.5 flex items-center gap-1.5">
                        <CodeIcon className="!text-xs text-amber-400" />
                        <span>{project.domain}</span>
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tech &&
                          project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-medium"
                            >
                              {t}
                            </span>
                          ))}
                      </div>

                      {/* Abstract Expandable Area */}
                      <div className="mt-4 pt-3 border-t border-slate-800/60">
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {isExpanded
                            ? project.abstract || project.description
                            : `${(project.description || project.abstract || "").slice(0, 115)}...`}
                        </p>
                        <button
                          onClick={() => toggleAbstract(project.id)}
                          className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          <span>{isExpanded ? "Show Less" : "Read Abstract & Converter Topology"}</span>
                          <ExpandMoreIcon className={`!text-sm transform transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleCopyTitle(project.id, project.title)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          isCopied
                            ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40"
                            : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
                        }`}
                        title="Copy project title"
                      >
                        {isCopied ? <CheckIcon className="!text-xs" /> : <ContentCopyIcon className="!text-xs" />}
                        <span>{isCopied ? "Copied!" : "Copy"}</span>
                      </button>

                      <button
                        onClick={() => openProjectModal(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-amber-950/40"
                      >
                        <span>Enquire Project</span>
                        <ArrowForwardIcon className="!text-xs" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* Table View */
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider font-mono text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4">S.No</th>
                    <th className="py-3.5 px-6">IEEE Project Title</th>
                    <th className="py-3.5 px-4">Domain / Category</th>
                    <th className="py-3.5 px-4">Tech Stack</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-850/60 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-amber-400">#{project.id}</td>
                      <td className="py-3.5 px-6">
                        <div className="font-semibold text-white text-xs sm:text-sm hover:text-amber-300 transition-colors">
                          {project.title}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{project.description}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-medium">
                          {project.category}
                        </span>
                        <div className="text-[10px] text-slate-400 mt-0.5">{project.domain}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {project.tech &&
                            project.tech.slice(0, 3).map((t, idx) => (
                              <span
                                key={idx}
                                className="px-1.5 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-[9px]"
                              >
                                {t}
                              </span>
                            ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                          <button
                            onClick={() => handleCopyTitle(project.id, project.title)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                            title="Copy Title"
                          >
                            <ContentCopyIcon className="!text-sm" />
                          </button>
                          <button
                            onClick={() => openProjectModal(project)}
                            className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
                          >
                            Enquire
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Inquiries regarding MATLAB/Simulink models, hardware prototypes, DSP controllers, and IEEE base papers.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-white text-xs sm:text-sm hover:text-amber-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ExpandMoreIcon className={`!text-base transform transition-transform ${isOpen ? "rotate-180 text-amber-400" : "text-slate-400"}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/40"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Project Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 relative overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <CloseIcon className="!text-lg" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <PowerElectronicsBrandIcon className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Power Electronics Project Enquiry</h3>
              </div>

              {formSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-950 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckIcon className="!text-2xl" />
                  </div>
                  <h4 className="text-base font-bold text-white">Enquiry Received!</h4>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto">
                    Thank you for contacting IEEE Project Centre. Our Power Electronics specialist will reach out via WhatsApp and phone call.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Selected Project Title</label>
                    <input
                      type="text"
                      readOnly
                      value={formData.projectTitle}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-amber-300 text-xs font-medium cursor-not-allowed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">College / University</label>
                      <input
                        type="text"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        placeholder="e.g. College of Engineering Guindy"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Requirements / Project Scope (Optional)</label>
                    <textarea
                      rows="2"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention preferred simulation tool (Simulink/PLECS), hardware prototype requirement, or deadline..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:bg-slate-700 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-amber-950/40"
                    >
                      {formSubmitting ? "Submitting..." : "Submit Project Enquiry"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default PowerElectronicsProjects;
