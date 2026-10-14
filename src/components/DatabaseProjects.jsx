import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { API_BASE } from "../api";
import { sendToWhatsApp, submitEnquiryWithWhatsApp, DEFAULT_WHATSAPP_NUMBER } from "../utils/whatsapp";
import {
  dbFrameworkLinks,
  databaseProjects,
  databaseEditorial,
  fetchDatabaseProjects,
} from "../data/databaseProjectsData";

// Material UI Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StorageIcon from "@mui/icons-material/Storage";
import HubIcon from "@mui/icons-material/Hub";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import CloudIcon from "@mui/icons-material/Cloud";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import SchoolIcon from "@mui/icons-material/School";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// Custom Brand SVG Logos for Databases
const DatabaseBrandIcon = ({ db, className = "w-6 h-6" }) => {
  if (db === "sqlite") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#035388" />
        <ellipse cx="24" cy="14" rx="14" ry="5" fill="#0EA5E9" />
        <path d="M10 14V24C10 26.8 16.3 29 24 29C31.7 29 38 26.8 38 24V14" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
        <path d="M10 24V34C10 36.8 16.3 39 24 39C31.7 39 38 36.8 38 34V24" stroke="#7DD3FC" strokeWidth="2.5" fill="none" />
        <path d="M18 20L30 28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (db === "mongodb") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#022C22" />
        <path
          d="M24 6C24 6 15 15 15 25.5C15 31.8 19.2 37.2 23.5 39.8V42H24.5V39.8C28.8 37.2 33 31.8 33 25.5C33 15 24 6 24 6Z"
          fill="url(#mongoGrad)"
        />
        <path
          d="M24 7V39C24 39 20 35 20 27C20 18 24 7 24 7Z"
          fill="#10B981"
          opacity="0.8"
        />
        <defs>
          <linearGradient id="mongoGrad" x1="15" y1="6" x2="33" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  // PostgreSQL (Slonik stylized elephant emblem)
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#1E293B" />
      <path
        d="M26 10C18 10 13 15 13 22C13 27 16 30 18 32V38H22V33C23 33.2 24.5 33.5 26 33.5C32 33.5 36 29.5 36 22C36 15 32 10 26 10Z"
        fill="#336791"
      />
      <circle cx="21" cy="20" r="2.5" fill="#FFFFFF" />
      <path d="M18 32C15 34 12 33 11 30" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 18C29 18 31 20 31 23" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

const DatabaseProjects = ({ defaultDb = "sqlite" }) => {
  const location = useLocation();

  // Determine active database from route or prop
  const currentDb = useMemo(() => {
    if (defaultDb) return defaultDb.toLowerCase();
    const path = location.pathname.toLowerCase();
    if (path.includes("mongodb")) return "mongodb";
    if (path.includes("postgresql")) return "postgresql";
    if (path.includes("sqlite")) return "sqlite";
    return "sqlite";
  }, [defaultDb, location.pathname]);

  const editorial = useMemo(() => {
    return databaseEditorial[currentDb] || databaseEditorial.sqlite;
  }, [currentDb]);

  const [projects, setProjects] = useState(databaseProjects);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [expandedAbstracts, setExpandedAbstracts] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  // Modal State
  const [selectedProjectForModal, setSelectedProjectForModal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    notes: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync projects with API or fallback
  useEffect(() => {
    let isMounted = true;
    const loadProjects = async () => {
      setLoading(true);
      const data = await fetchDatabaseProjects(currentDb);
      if (isMounted) {
        setProjects(data);
        setLoading(false);
      }
    };
    loadProjects();
    return () => {
      isMounted = false;
    };
  }, [currentDb]);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category || p.domain).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [projects]);

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.domain?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" ||
        p.category === selectedCategory ||
        p.domain === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [projects, searchTerm, selectedCategory]);

  const toggleAbstract = (id) => {
    setExpandedAbstracts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyTitle = (id, title) => {
    navigator.clipboard.writeText(title);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const openEnquiryModal = (project) => {
    setSelectedProjectForModal(project);
    setModalOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const payload = {
      name: formData.name,
      mobile: formData.phone,
      email: formData.email,
      college: formData.college,
      department: formData.department,
      projectTitle: selectedProjectForModal?.title || `${currentDb.toUpperCase()} Project Enquiry`,
      domain: `${currentDb.toUpperCase()} Database Architecture`,
      message: formData.notes,
      source: `Database Project Center - ${currentDb.toUpperCase()}`
    };

    try {
      await submitEnquiryWithWhatsApp(payload, {
        openWhatsApp: true,
        whatsappNumber: DEFAULT_WHATSAPP_NUMBER
      });
    } catch {
      // ignore network errors for UI success
    }
    setSubmitting(false);
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", college: "", department: "", notes: "" });
    }, 2500);
  };

  const activeMeta = useMemo(() => {
    return (
      dbFrameworkLinks.find((f) => f.slug === currentDb) ||
      dbFrameworkLinks[0]
    );
  }, [currentDb]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Top Banner Navigation */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <StorageIcon className="text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
                Database Project Centers:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {dbFrameworkLinks.map((item) => {
                const isActive = item.slug === currentDb;
                return (
                  <Link
                    key={item.slug}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-cyan-400 shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400"
                        : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-600"
                    }`}
                  >
                    <DatabaseBrandIcon db={item.slug} className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/60 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 animate-pulse">
              <DatabaseBrandIcon db={currentDb} className="w-5 h-5" />
              <span>{activeMeta.badge} • IEEE Project Center in Chennai</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              {editorial.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-cyan-400 mb-6">
              {editorial.heroSubtitle}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
              {editorial.introLead}
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919751800789?text=Hi%20IEEE%20Project%20Center,%20I%20am%20interested%20in%20Database%20Projects%20in%20Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Instant Query</span>
              </a>
              <button
                onClick={() => openEnquiryModal({ title: `${currentDb.toUpperCase()} Project Guidance` })}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-slate-100 bg-slate-800/90 border border-slate-700 hover:bg-slate-700/90 hover:border-slate-600 shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <PhoneIcon className="w-5 h-5 text-cyan-400" />
                <span>Request Project Demo & Quote</span>
              </button>
            </div>

            {/* Guarantees Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-800/80 text-left">
              {[
                { title: "100% Execution", desc: "Live running demo guaranteed" },
                { title: "Complete Source Code", desc: "Clean schema, queries & UI" },
                { title: "IEEE Base Papers", desc: "Standard IEEE journal references" },
                { title: "Viva & PPT Support", desc: "Complete documentation assistance" },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start space-x-2.5">
                  <CheckCircleIcon className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[11px] text-slate-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Editorial Sections */}
      <section className="py-12 bg-slate-900/40 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Rich Editorial Copy */}
            <div className="lg:col-span-8 space-y-8">
              {editorial.sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-xl"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                    <span className="w-2 h-6 rounded bg-gradient-to-b from-cyan-500 to-blue-600 inline-block" />
                    <span>{sec.title}</span>
                  </h2>

                  {sec.content && (
                    <p className="text-slate-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                      {sec.content}
                    </p>
                  )}

                  {sec.points && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      {sec.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90"
                        >
                          <div className="font-semibold text-cyan-300 text-sm mb-1 flex items-center space-x-2">
                            <CheckIcon className="w-4 h-4 text-cyan-400" />
                            <span>{pt.title}</span>
                          </div>
                          <div className="text-xs text-slate-300 leading-relaxed">
                            {pt.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column: Database Capabilities & Why Choose Us */}
            <div className="lg:col-span-4 space-y-6">
              {/* Feature Highlights */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                  <AutoAwesomeIcon className="w-5 h-5 text-cyan-400" />
                  <span>Key Architectural Features</span>
                </h3>
                <div className="space-y-3">
                  {editorial.features?.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/60"
                    >
                      <div className="text-xs font-semibold text-cyan-300 mb-0.5">
                        {feat.title}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-relaxed">
                        {feat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-xl text-center">
                <h3 className="text-lg font-bold text-white mb-2">Need Immediate Guidance?</h3>
                <p className="text-xs text-slate-300 mb-4">
                  Talk to our senior database architects and IEEE project specialists today.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+919751800789"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    <span>Call +91 97518 00789</span>
                  </a>
                  <a
                    href="https://wa.me/919751800789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-medium text-xs transition-colors border border-emerald-500/30"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Listing Section */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
              <CodeIcon className="w-4 h-4" />
              <span>Available IEEE Projects List</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {currentDb.toUpperCase()} IEEE Project Titles
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Showing {filteredProjects.length} projects tailored with {currentDb.toUpperCase()} database architectures.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-colors ${
                viewMode === "grid"
                  ? "bg-cyan-600 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              title="Grid View"
            >
              <GridViewIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Cards</span>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`p-2 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-colors ${
                viewMode === "table"
                  ? "bg-cyan-600 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              title="Table View"
            >
              <TableRowsIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Table</span>
            </button>
          </div>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-8">
          <div className="md:col-span-7 relative">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search ${currentDb.toUpperCase()} titles, domains, technologies...`}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="md:col-span-5 flex overflow-x-auto pb-1 md:pb-0 gap-1.5 no-scrollbar">
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  selectedCategory === cat
                    ? "bg-cyan-600 text-white shadow"
                    : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode Content */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <StorageIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-300">No Projects Found</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search query or reset category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-cyan-600 text-white text-xs font-semibold hover:bg-cyan-500"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p, idx) => {
              const techList =
                (p.tech && p.tech[currentDb]) ||
                (Array.isArray(p.tech) ? p.tech : ["Python", "SQL", "Database"]);
              const isAbstractExpanded = expandedAbstracts[p.id];
              const isCopied = copiedId === p.id;

              return (
                <div
                  key={p.id || idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10 group"
                >
                  <div>
                    {/* Card Header: SNo and Domain */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/20">
                        #{p.id || idx + 1}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-medium border border-slate-700 truncate max-w-[200px]">
                        {p.domain || p.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-3">
                      {p.title}
                    </h3>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {techList.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-950 text-cyan-400/90 text-[11px] font-mono border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {/* Abstract Accordion */}
                    {p.abstract && (
                      <div className="mb-4">
                        <button
                          onClick={() => toggleAbstract(p.id)}
                          className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                        >
                          <span>{isAbstractExpanded ? "Hide Abstract" : "Read IEEE Abstract"}</span>
                          <ExpandMoreIcon
                            className={`w-4 h-4 transform transition-transform ${
                              isAbstractExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isAbstractExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 text-xs text-slate-400 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 leading-relaxed"
                            >
                              {p.abstract}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleCopyTitle(p.id, p.title)}
                      className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                      title="Copy Project Title"
                    >
                      {isCopied ? (
                        <CheckIcon className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <ContentCopyIcon className="w-4 h-4" />
                      )}
                    </button>

                    <div className="flex items-center space-x-2">
                      <a
                        href={`https://wa.me/919751800789?text=Hi%20IEEE%20Project%20Center,%20I%20am%20interested%20in:%20${encodeURIComponent(
                          p.title
                        )}%20(${currentDb.toUpperCase()})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/60 transition-colors"
                        title="Enquire on WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => openEnquiryModal(p)}
                        className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold shadow transition-all"
                      >
                        Get Code & Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Table View */
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 w-12 text-center">S.No</th>
                  <th className="py-3.5 px-4">Project Title & Abstract</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Domain</th>
                  <th className="py-3.5 px-4 hidden lg:table-cell">Technologies ({currentDb.toUpperCase()})</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredProjects.map((p, idx) => {
                  const techList =
                    (p.tech && p.tech[currentDb]) ||
                    (Array.isArray(p.tech) ? p.tech : ["Python", "SQL", "Database"]);
                  const isCopied = copiedId === p.id;
                  const isAbstractExpanded = expandedAbstracts[p.id];

                  return (
                    <tr key={p.id || idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-4 text-center font-mono text-cyan-400 font-bold">
                        {p.id || idx + 1}
                      </td>
                      <td className="py-4 px-4 max-w-md">
                        <div className="font-bold text-white text-sm sm:text-base mb-1">
                          {p.title}
                        </div>
                        <div className="text-xs text-slate-400 line-clamp-2 mb-1.5">
                          {p.description}
                        </div>
                        {p.abstract && (
                          <div>
                            <button
                              onClick={() => toggleAbstract(p.id)}
                              className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300"
                            >
                              {isAbstractExpanded ? "Hide Abstract" : "View Abstract"}
                            </button>
                            {isAbstractExpanded && (
                              <div className="mt-2 text-xs text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800 leading-relaxed">
                                {p.abstract}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs border border-slate-700 whitespace-nowrap">
                          {p.domain || p.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {techList.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-1.5 py-0.5 rounded bg-slate-950 text-cyan-400 text-[10px] font-mono border border-slate-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end space-x-1.5">
                          <button
                            onClick={() => handleCopyTitle(p.id, p.title)}
                            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                            title="Copy Title"
                          >
                            {isCopied ? (
                              <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <ContentCopyIcon className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <button
                            onClick={() => openEnquiryModal(p)}
                            className="px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
                          >
                            Enquire
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Modal for Quote and Project Demo */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-white"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <StorageIcon className="w-4 h-4" />
                <span>Instant IEEE Project Enquiry</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {selectedProjectForModal?.title || "Database Project Consultation"}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Receive complete source code, base papers, PPT, viva explanation questions, and execution setup guide.
              </p>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircleIcon className="w-16 h-16 text-emerald-400 mx-auto mb-3 animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Thank You!</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Our technical coordinator will contact you on WhatsApp / Phone within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="student@gmail.com"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        College Name
                      </label>
                      <input
                        type="text"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        placeholder="e.g. Anna University"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Degree & Department
                      </label>
                      <input
                        type="text"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        placeholder="B.E. CSE / IT / MCA"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg transition-all"
                  >
                    {submitting ? "Submitting Enquiry..." : "Submit Project Request"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cross-Link Database & Tech Hubs */}
      <section className="py-12 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            Explore More IEEE Technologies & Frameworks in Chennai
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: "Python Web Frameworks", path: "/django-project-center-in-chennai" },
              { name: "Computer Vision & AI", path: "/opencv-project-center-in-chennai" },
              { name: "CloudSim Projects", path: "/2024-2025-cloud-sim-ieee-project-chennai" },
              { name: "Raspberry Pi & IoT", path: "/raspberry-pi-ieee-projects-2020-2021-in-chennai" },
              { name: "Power Electronics", path: "/power-electronics-ieee-projects-2020-2021-in-chennai" },
              { name: "VLSI IEEE Projects", path: "/vlsi-ieee-project-2022-2023" },
            ].map((hub, idx) => (
              <Link
                key={idx}
                to={hub.path}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 text-center transition-all group"
              >
                <div className="text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                  {hub.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatabaseProjects;
