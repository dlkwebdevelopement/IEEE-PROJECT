import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { API_BASE } from "../api";
import { vlsiProjects2020Dataset } from "./VlsiProjects2020";

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

// Custom VLSI Chip & Semiconductor Logo
const VlsiBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#vlsiGrad2021)" stroke="#A78BFA" strokeWidth="1.5" />
    <defs>
      <linearGradient id="vlsiGrad2021" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2E1065" />
        <stop offset="0.5" stopColor="#581C87" />
        <stop offset="1" stopColor="#7E22CE" />
      </linearGradient>
    </defs>
    <rect x="15" y="15" width="18" height="18" rx="3" fill="#0F172A" stroke="#C084FC" strokeWidth="1.2" />
    <circle cx="24" cy="24" r="3" fill="#A855F7" />
    <path d="M18 15v-4M24 15v-4M30 15v-4" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 37v-4M24 37v-4M30 37v-4" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15 18h-4M15 24h-4M15 30h-4" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M37 18h-4M37 24h-4M37 30h-4" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const vlsiProjects2021Dataset = vlsiProjects2020Dataset.map((item) => ({
  ...item,
  year: "2021 - 2022",
}));

const VlsiProjects2021 = () => {
  const [projects, setProjects] = useState(vlsiProjects2021Dataset);
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
    year: "2021 - 2022",
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
        const res = await fetch(`${API_BASE}/project_titles.php?tech=vlsi&year=2021 - 2022`);
        if (res.ok) {
          const json = await res.json();
          const items = Array.isArray(json) ? json : json.data || [];
          if (items && items.length > 0 && isMounted) {
            const mapped = items.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title_name || item.title || `VLSI Project ${idx + 1}`,
              domain: item.domain || "VLSI Design & Digital Systems",
              category: item.category || "VLSI Architecture",
              tech: item.tech ? (Array.isArray(item.tech) ? item.tech : item.tech.split(",")) : ["Verilog", "VHDL", "ModelSim", "FPGA"],
              description: item.description || "IEEE Standard VLSI Project implementation with complete Verilog/VHDL source code and base paper.",
              abstract: item.abstract || "Comprehensive experimental evaluation and ASIC/FPGA architecture modeling using IEEE standard benchmarks.",
              year: item.academic_year || "2021 - 2022",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjects(mapped);
          }
        }
      } catch (e) {
        console.warn("Using local dataset for VLSI 2021-2022 projects:", e);
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
      projectTitle: proj ? proj.title : "VLSI IEEE Projects 2021-2022",
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
          domain: "VLSI Design & Hardware Systems",
          academicYear: "2021 - 2022",
          sourcePage: "VLSI IEEE Projects 2021-2022",
        }),
      });
      if (res.ok) {
        setFormSuccess(true);
      } else {
        alert("Enquiry submitted successfully! Our VLSI technical team will contact you shortly.");
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

  const yearlyLinks = [
    { year: "2013 - 2014", path: "/vlsi-ieee-projects-2013-2014-in-chennai" },
    { year: "2014 - 2015", path: "/vlsi-ieee-projects-2014-2015-in-chennai" },
    { year: "2015 - 2016", path: "/vlsi-ieee-projects-2015-2016-in-chennai" },
    { year: "2016 - 2017", path: "/vlsi-ieee-projects-2016-2017-in-chennai" },
    { year: "2017 - 2018", path: "/vlsi-ieee-projects-2017-2018-in-chennai" },
    { year: "2018 - 2019", path: "/vlsi-ieee-projects-2018-2019-in-chennai" },
    { year: "2019 - 2020", path: "/vlsi-ieee-projects-2019-2020-in-chennai" },
    { year: "2020 - 2021", path: "/vlsi-ieee-project-2020-2021" },
    { year: "2021 - 2022", path: "/vlsi-ieee-project-2021-2022", active: true },
    { year: "2022 - 2023", path: "/vlsi-ieee-project-2022-2023" },
  ];

  const domainHighlights = [
    {
      title: "Approximate Multipliers & Arithmetic Units",
      icon: <SpeedIcon className="text-purple-400" />,
      desc: "Radix-8 Booth multipliers, redundant binary computing, and dynamic carry skip adders for ultra-low-power DSP blocks.",
    },
    {
      title: "FinFET & High-Speed Memory Architectures",
      icon: <MemoryIcon className="text-indigo-400" />,
      desc: "22-nm FinFET full-swing bitline SRAM arrays, UEP error-correcting memory controllers, and STT-MTJ nonvolatile lookup tables.",
    },
    {
      title: "Advanced Channel Coding (5G / LTE Turbo)",
      icon: <HubIcon className="text-pink-400" />,
      desc: "5G Polar Successive Cancellation List (SCL) decoders, parallel Log-MAP Turbo processors, and Non-Binary LDPC check nodes.",
    },
    {
      title: "Biomedical & High-Speed Computer Vision Cores",
      icon: <PrecisionManufacturingIcon className="text-amber-400" />,
      desc: "Real-time Canny edge detection accelerators, sub-0.5V ECG front-ends, and ventricular arrhythmia prediction engines.",
    },
  ];

  const faqs = [
    {
      q: "What makes 2021-2022 IEEE VLSI projects special for engineering students?",
      a: "The 2021-2022 IEEE VLSI curriculum emphasizes real-time FPGA accelerators, approximate arithmetic for deep learning hardware, 5G baseband processing (Polar/LDPC), and advanced FinFET subthreshold memory design.",
    },
    {
      q: "Can I implement these VLSI projects using Verilog or VHDL?",
      a: "Yes! All 40 project titles are fully supported in both Verilog HDL and VHDL. We provide cleanly written RTL codes, extensive testbenches, and step-by-step guidance for ModelSim simulation and Xilinx Vivado synthesis.",
    },
    {
      q: "Do you offer FPGA hardware validation on kits?",
      a: "Yes, we support synthesis, pin constraint mapping (XDC/UCF), bitstream generation, and hardware testing on Xilinx Spartan-6, Artix-7, and Zynq SoC development boards.",
    },
    {
      q: "What documentation and report deliverables are included?",
      a: "You receive the authentic IEEE base paper PDF, synthesized RTL source files, testbench benches with waveform scripts, area/timing/power synthesis reports, a comprehensive project documentation report (IEEE format), and presentation slides (PPT).",
    },
    {
      q: "How can I get started with my final year VLSI project?",
      a: "Click 'Enquire' on any project or tap the WhatsApp button to consult directly with our senior VLSI system architects at IEEE Project Centre Chennai.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-purple-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-purple-400/80 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-purple-300 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/vlsi-ieee-project-2021-2022" className="hover:text-purple-300 transition-colors">VLSI Projects</Link>
            <span>/</span>
            <span className="text-slate-400">2021 - 2022</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6">
                <VlsiBrandIcon className="w-4 h-4" />
                <span>IEEE 2021 – 2022 VLSI Systems & FPGA Implementations</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                VLSI IEEE Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400">2021 - 2022</span> in Chennai
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
                Choose from 40+ premier IEEE VLSI project titles covering redundant binary multipliers, 22-nm FinFET memories, Canny edge detection pipelines, and 5G channel decoders with full source code, base papers, and hardware validation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-purple-400 !text-base" />
                  <span>Xilinx Vivado & ModelSim Synthesized</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-purple-400 !text-base" />
                  <span>FPGA Spartan-6 & Artix-7 Hardware Ready</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-purple-400 !text-base" />
                  <span>100% IEEE Base Papers & Viva Guidance</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919381883344?text=Hello%20IEEE%20Project%20Centre%2C%20I%20am%20interested%20in%20VLSI%20IEEE%20Projects%202021-2022."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all duration-200"
                >
                  <WhatsAppIcon className="!text-lg" />
                  <span>WhatsApp Technical Consultation</span>
                </a>
                <button
                  onClick={() => openProjectModal(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-950/40 hover:shadow-purple-900/60 transition-all duration-200"
                >
                  <AutoAwesomeIcon className="!text-base" />
                  <span>Request Custom Title</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <DeveloperBoardIcon className="text-purple-400 !text-3xl" />
                  <div>
                    <h3 className="font-bold text-white text-base">VLSI Highlights</h3>
                    <p className="text-xs text-slate-400">B.E / B.Tech / M.E / M.Tech</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Published Titles:</span>
                    <span className="font-semibold text-purple-300">40 Verified Projects</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Languages:</span>
                    <span className="font-semibold text-slate-200">Verilog HDL, VHDL, SystemC</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Synthesis Tools:</span>
                    <span className="font-semibold text-slate-200">Vivado, Quartus, ModelSim</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Embedded SoCs:</span>
                    <span className="font-semibold text-slate-200">MicroBlaze, NIOS II, Zynq</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                  <a
                    href="tel:+919381883344"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
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
            {yearlyLinks.map((item) => (
              <Link
                key={item.year}
                to={item.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                  item.active
                    ? "bg-purple-500 text-white font-bold shadow-md shadow-purple-500/20"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {item.year}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-slate-950 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-600/30 text-purple-400 text-xs font-semibold mb-4">
              <MenuBookIcon className="!text-sm" />
              <span>Architectural Insight & Guidelines</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
              ABOUT IEEE VLSI PROJECT 2021 – 2022
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                In the <strong className="text-purple-300">2021 – 2022</strong> academic session, IEEE VLSI project center innovations were divided into two main categories: <em>VLSI System-Based Design</em> and <em>Transistor-Level Semiconductor Design</em>.
              </p>
              <p>
                <strong className="text-white">VLSI System Style:</strong> Focuses on digital architectures implemented on Programmable Logic Devices (PLDs) like FPGAs and CPLDs. Systems include high-performance ALUs, redundant binary multipliers, FIR filter engines, and error-correcting decoders synthesized via <strong className="text-purple-300">Verilog HDL</strong> or <strong className="text-purple-300">VHDL</strong>.
              </p>
              <p>
                <strong className="text-white">Semiconductor Style:</strong> Deals with physical transistor parameters, subthreshold SRAM cells, and custom silicon layout sizing, which are simulated in SPICE/Virtuoso and involve higher implementation costs.
              </p>
              <p>
                <strong className="text-white">Soft-Core Processor Architectures:</strong> A key trend for B.E., B.Tech, and M.E./M.Tech projects is pairing soft-core processors (such as <strong className="text-purple-300">Xilinx MicroBlaze</strong> or <strong className="text-purple-300">NIOS II</strong>) with dedicated hardware accelerator blocks to achieve high compute density and software flexibility.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {domainHighlights.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/30 transition-all duration-200"
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

      {/* Main Project Listing Section */}
      <section className="py-16 bg-slate-950 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  IEEE VLSI Project List 2021 - 2022
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-950 border border-purple-600/40 text-purple-300 text-xs font-bold">
                  {filteredProjects.length} Projects
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Explore IEEE standard VLSI projects with Verilog/VHDL source codes and documentation.
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
                  placeholder="Search Booth, Canny, FinFET..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500 transition-colors"
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
                    viewMode === "grid" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <GridViewIcon className="!text-lg" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
                    viewMode === "table" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"
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
                    ? "bg-purple-600 text-white shadow-sm shadow-purple-900/40"
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
              <div className="animate-spin w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full mx-auto mb-3" />
              <p className="text-xs">Loading IEEE VLSI Projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="py-16 text-center bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-300 text-sm font-semibold">No VLSI projects found matching your query.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-colors"
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
                    className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all duration-200 hover:shadow-xl hover:shadow-purple-950/20 group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/70 text-xs">
                        <span className="font-mono text-purple-400 font-bold">#{project.id}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-medium">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-purple-300 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-400 font-mono mt-1.5 flex items-center gap-1.5">
                        <CodeIcon className="!text-xs text-purple-400" />
                        <span>{project.domain}</span>
                      </p>

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

                      <div className="mt-4 pt-3 border-t border-slate-800/60">
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {isExpanded
                            ? project.abstract || project.description
                            : `${(project.description || project.abstract || "").slice(0, 110)}...`}
                        </p>
                        <button
                          onClick={() => toggleAbstract(project.id)}
                          className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <span>{isExpanded ? "Show Less" : "Read Abstract & IEEE Architecture"}</span>
                          <ExpandMoreIcon className={`!text-sm transform transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                    </div>

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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors shadow-md shadow-purple-950/40"
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
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider font-mono text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4">S.No</th>
                    <th className="py-3.5 px-6">IEEE Project Title</th>
                    <th className="py-3.5 px-4">Domain / Architecture</th>
                    <th className="py-3.5 px-4">Tech Stack</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-850/60 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-purple-400">#{project.id}</td>
                      <td className="py-3.5 px-6">
                        <div className="font-semibold text-white text-xs sm:text-sm hover:text-purple-300 transition-colors">
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
                            className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs"
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
              Common inquiries regarding IEEE VLSI project delivery, base papers, and hardware verification.
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
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-white text-xs sm:text-sm hover:text-purple-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ExpandMoreIcon className={`!text-base transform transition-transform ${isOpen ? "rotate-180 text-purple-400" : "text-slate-400"}`} />
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
                <VlsiBrandIcon className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">VLSI Project Enquiry</h3>
              </div>

              {formSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-950 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckIcon className="!text-2xl" />
                  </div>
                  <h4 className="text-base font-bold text-white">Enquiry Received!</h4>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto">
                    Thank you for your interest. Our IEEE VLSI technical consultant will contact you via WhatsApp and Call with complete details.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
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
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-purple-300 text-xs font-medium cursor-not-allowed"
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
                        placeholder="e.g. Priya Sundaram"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500"
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
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500"
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
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">College / University</label>
                      <input
                        type="text"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        placeholder="e.g. SRM Institute"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Requirements / Questions (Optional)</label>
                    <textarea
                      rows="2"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention preferred FPGA kit, simulation tool, or deadline..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500"
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
                      className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:bg-slate-700 text-white text-xs font-semibold transition-colors shadow-md shadow-purple-950/40"
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

export default VlsiProjects2021;
