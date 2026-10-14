import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { API_BASE } from "../api";
import { sendToWhatsApp, submitEnquiryWithWhatsApp, DEFAULT_WHATSAPP_NUMBER } from "../utils/whatsapp";
import { 
  ProgramAvatar, 
  ProgramTechBadges, 
  getProgramMeta 
} from "./ProgramIconBadge";

// Material & Lucide Modern Icons
import {
  Sparkles,
  Layers,
  FileText,
  Send,
  Download,
  Share2,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Calendar,
  Cpu,
  BookOpen,
  Award,
  Terminal,
  ShieldCheck,
  Check,
  Phone,
  Copy,
  ExternalLink,
  Info,
  HelpCircle,
  Clock,
  Code2,
  Database,
  Server
} from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview"); // overview, modules, specs, deliverables

  // Enquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    department: "Computer Science / IT",
    message: "",
    captchaChecked: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Track window scroll for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch project by ID from backend database
  useEffect(() => {
    setIsLoading(true);
    const fetchProject = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?id=${encodeURIComponent(id)}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.title) {
            setProject(data);
            fetchRelated(data.category, data.academic_year, data.id);
            setIsLoading(false);
            return;
          }
        }
      } catch (e) {
        console.warn("Direct ID fetch failed, trying full catalog:", e);
      }

      // Fallback: Fetch all titles and match in memory
      try {
        const resAll = await fetch(`${API_BASE}/project_titles.php`);
        if (resAll.ok) {
          const list = await resAll.json();
          if (Array.isArray(list)) {
            const found = list.find(p => String(p.id) === String(id) || String(p.sno) === String(id));
            if (found) {
              setProject(found);
              fetchRelated(found.category, found.academic_year, found.id);
              setIsLoading(false);
              return;
            }
          }
        }
      } catch (err) {
        console.error("Failed loading project details:", err);
      }
      setIsLoading(false);
    };

    const fetchRelated = async (cat, year, currentId) => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?category=${encodeURIComponent(cat || '')}`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            const filtered = data
              .filter(p => String(p.id) !== String(currentId))
              .slice(0, 4);
            setRelatedProjects(filtered);
          }
        }
      } catch (e) {}
    };

    fetchProject();
  }, [id]);

  const handleCopyTitle = () => {
    if (!project) return;
    navigator.clipboard.writeText(project.title);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleShare = () => {
    if (!project) return;
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: `Check out IEEE Project: ${project.title} at IEEE Project Centre`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      handleCopyTitle();
    }
  };

  const [lastSubmittedPayload, setLastSubmittedPayload] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.captchaChecked) {
      alert("Please verify the security captcha checkbox.");
      return;
    }
    setIsSubmitting(true);
    const submissionPayload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      academicYear: project?.academic_year || "2024 - 2025",
      projectTitle: project?.title || "IEEE Project",
      college: formData.college || "",
      department: formData.department || "",
      message: formData.message || "Requesting code, base paper and fee details",
      source: `Project Detail Page #${project?.id || ""}`
    };

    try {
      await submitEnquiryWithWhatsApp(submissionPayload, {
        openWhatsApp: true,
        whatsappNumber: DEFAULT_WHATSAPP_NUMBER
      });
      setLastSubmittedPayload(submissionPayload);
      setFormSubmitted(true);
    } catch (err) {
      console.warn("Enquiry submission notice:", err);
      setLastSubmittedPayload(submissionPayload);
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById("project-enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Difficulty badge colors
  const getDifficultyColor = (diff) => {
    switch (String(diff).toLowerCase()) {
      case "advanced":
        return "bg-rose-500/15 text-rose-400 border-rose-500/30";
      case "intermediate":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30";
      default:
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#061426] flex flex-col items-center justify-center text-white">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          <div className="w-14 h-14 border-4 border-[#ff8200] border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-300 font-extrabold text-sm tracking-wider uppercase">Loading IEEE Project Details from Database...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#061426] flex flex-col text-white">
        <Navbar />
        <div className="flex-1 max-w-4xl mx-auto px-4 py-20 flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-black text-white">Project Not Found</h1>
          <p className="text-slate-400 text-sm max-w-md">
            The requested IEEE project record could not be retrieved from the database. It may have been updated or relocated.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/2024-2025-java-ieee-projects"
              className="px-5 py-2.5 rounded-xl bg-[#ff8200] hover:bg-[#e06d00] text-white font-bold text-xs uppercase tracking-wider transition-colors !no-underline"
            >
              Browse 2024-2025 Java Projects
            </Link>
            <Link
              to="/bca-ieee-projects-2020-2021-in-chennai"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors !no-underline"
            >
              Browse BCA Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const techStackArray = project.tech_stack
    ? (Array.isArray(project.tech_stack) ? project.tech_stack : project.tech_stack.split(",").map(s => s.trim()))
    : (project.tech ? (Array.isArray(project.tech) ? project.tech : [project.tech]) : ["Java", "MySQL"]);

  const modulesList = Array.isArray(project.modules) && project.modules.length > 0
    ? project.modules
    : [
        { name: "Module 1: Authentication & Role Management", desc: "Granular role-based user onboarding, session tokens, and cryptographic profile validation." },
        { name: "Module 2: Core Processing & Logic Architecture", desc: "Core algorithms and transaction management implementing project specifications." },
        { name: "Module 3: Database Storage & Optimization", desc: "Normalized relational schema with indexed query pipelines safeguarding data integrity." },
        { name: "Module 4: User Experience & Administrative Telemetry", desc: "Interactive frontend dashboards delivering live reports, metrics, and operation controls." }
      ];

  const featuresList = Array.isArray(project.features) && project.features.length > 0
    ? project.features
    : [
        "100% Complete Source Code & Database Script (.sql)",
        "IEEE Base Paper & Reference Architecture",
        "Full Project Report & Documentation (Word & PDF)",
        "PowerPoint Presentation (PPT) for Review Viva",
        "Step-by-Step Software Setup & Execution Video Demo",
        "1-on-1 Online / Offline Technical Guidance & Viva Training"
      ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-[#ff8200] selection:text-white relative">
      {/* 1. Dynamic Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-slate-200/50 backdrop-blur-md">
        <div
          className="h-full bg-gradient-to-r from-[#ff8200] via-[#38bdf8] to-[#ff8200] transition-all duration-150 shadow-[0_0_12px_rgba(255,130,0,0.6)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* 2. Global Navigation Bar */}
      <Navbar />

      {/* 3. Hero Header with 3D Cyber Atmosphere */}
      <header className="relative bg-gradient-to-b from-[#061426] via-[#091b35] to-[#0d2346] text-white pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#ff8200] overflow-hidden shadow-2xl">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#ff8200]/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-6">
          
          {/* Breadcrumb & Quick Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap bg-white/[0.06] backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-slate-300">
              <Link to="/" className="hover:text-[#ff8200] font-medium !no-underline transition-colors text-inherit">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400 font-medium">{project.category || "Projects"}</span>
              <span className="text-slate-500">/</span>
              <span className="text-amber-400 font-bold truncate max-w-[200px] sm:max-w-xs">{project.title}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyTitle}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-200 border border-white/15 transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95"
                title="Copy Title"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Title"}</span>
              </button>

              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-slate-200 border border-white/15 transition-all text-xs cursor-pointer active:scale-95"
                title="Share Project"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Badges Station */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-[#ff8200]/20 text-[#ff8200] border border-[#ff8200]/40 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ff8200]" />
              <span>IEEE ID #{project.id || project.sno}</span>
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>{project.academic_year || "2024 - 2025"}</span>
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{project.domain || "Software Engineering"}</span>
            </span>

            <span className={`px-3 py-1 rounded-full text-xs font-black border ${getDifficultyColor(project.difficulty || 'Intermediate')}`}>
              Level: {project.difficulty || "Intermediate"}
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {project.category || "IEEE Projects"}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight text-white max-w-5xl drop-shadow-md">
            {project.title}
          </h1>

          {/* Short Narrative Excerpt */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl font-normal">
            {project.description || project.abstract}
          </p>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToEnquiry}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider transition-all shadow-[0_6px_25px_rgba(255,130,0,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enquire for Full Project & Code</span>
            </button>

            <a
              href={`https://wa.me/919840971000?text=${encodeURIComponent(`Hi IEEE Project Centre, I am interested in project: "${project.title}" (ID #${project.id || project.sno}). Please send source code details and fee info.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-2 !no-underline"
            >
              <span>WhatsApp Consultation</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="tel:+919840971000"
              className="px-4 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all flex items-center gap-2 !no-underline border border-white/15"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Helpline</span>
            </a>
          </div>

        </div>
      </header>

      {/* 4. Tab Navigation Strip */}
      <div className="bg-white border-b border-slate-200 sticky top-1.5 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto py-2.5">
          {[
            { id: "overview", label: "Overview & Abstract", icon: <BookOpen className="w-4 h-4" /> },
            { id: "modules", label: "Project Modules", icon: <Layers className="w-4 h-4" /> },
            { id: "specs", label: "Tech Stack & Specs", icon: <Terminal className="w-4 h-4" /> },
            { id: "deliverables", label: "Deliverables Included", icon: <Award className="w-4 h-4" /> },
            { id: "enquiry", label: "Request Source Code", icon: <Send className="w-4 h-4 text-[#ff8200]" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id === "enquiry") scrollToEnquiry();
              }}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#061426] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 5. Main Content Layout */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left / Main Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">

            {/* TAB 1: OVERVIEW & ABSTRACT */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.05)] border border-slate-200/90 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-[#ff8200] flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900">Project Abstract & Research Synopsis</h2>
                    <p className="text-xs text-slate-500">IEEE Standards Publication Abstract & Architecture Scope</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyTitle}
                  className="hidden sm:flex text-xs text-slate-500 hover:text-[#ff8200] font-bold items-center gap-1 cursor-pointer transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </button>
              </div>

              <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4">
                <p className="first-letter:text-4xl first-letter:font-black first-letter:text-[#ff8200] first-letter:float-left first-letter:mr-2">
                  {project.abstract || project.description}
                </p>
              </div>

              {/* Quality Standards Guarantee Box */}
              <div className="bg-gradient-to-br from-slate-50 to-orange-50/30 p-5 rounded-2xl border border-orange-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#ff8200] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>IEEE Final Year Standards Guaranteed</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    All code modules are verified against university review requirements, fully documented, and ready for execution.
                  </p>
                </div>
                <button
                  onClick={scrollToEnquiry}
                  className="shrink-0 px-4 py-2 rounded-xl bg-[#ff8200] hover:bg-[#e06d00] text-white text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  Get Synopsis
                </button>
              </div>
            </div>

            {/* TAB 2: PROJECT MODULES BREAKDOWN */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.05)] border border-slate-200/90 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900">System Architecture & Core Modules</h2>
                  <p className="text-xs text-slate-500">Comprehensive functional division of the software workflow</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {modulesList.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-orange-300 hover:shadow-md transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#ff8200] bg-orange-500/10 px-2.5 py-0.5 rounded-full">
                        Module 0{idx + 1}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-sm font-black text-slate-900 group-hover:text-[#ff8200] transition-colors leading-snug">
                      {mod.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TAB 3: TECH STACK & SYSTEM SPECIFICATIONS */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.05)] border border-slate-200/90 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900">Technology Stack & System Requirements</h2>
                  <p className="text-xs text-slate-500">Hardware and software specifications evaluated for deployment</p>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">Programming Languages & Frameworks:</span>
                <div className="flex flex-wrap gap-2">
                  {techStackArray.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-orange-50 hover:text-[#ff8200] text-slate-800 border border-slate-200/80 font-bold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <Code2 className="w-3.5 h-3.5 text-[#ff8200]" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="p-3 w-1/3">Component</th>
                      <th className="p-3">Specification / Configuration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-3 font-bold bg-slate-50/50">Operating System</td>
                      <td className="p-3">Windows 10 / 11 / Linux (Ubuntu 22.04+) / macOS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-slate-50/50">Primary Language / Tech</td>
                      <td className="p-3">{techStackArray.join(", ")}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-slate-50/50">Backend & Database</td>
                      <td className="p-3">MySQL / SQL Server / Oracle / Cloud DB</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-slate-50/50">IDE & Developer Tools</td>
                      <td className="p-3">Eclipse / IntelliJ IDEA / VS Code / NetBeans / Visual Studio</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-slate-50/50">Minimum Hardware</td>
                      <td className="p-3">Intel i3/i5/i7 Processor, 4GB RAM (8GB recommended), 20GB Disk Space</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* TAB 4: DELIVERABLES PACKAGE */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.05)] border border-slate-200/90 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900">Complete Deliverables Package</h2>
                  <p className="text-xs text-slate-500">Everything provided when you obtain this project from IEEE Project Centre</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {featuresList.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200/70 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 block">{feat}</span>
                      <span className="text-[11px] text-slate-500 mt-0.5 block">University-compliant standard deliverable</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TAB 5: LEAD / ENQUIRY SUBMISSION CARD */}
            <div
              id="project-enquiry-section"
              className="bg-gradient-to-br from-[#061426] via-[#091b35] to-[#0d2346] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#ff8200] space-y-6 relative overflow-hidden"
            >
              <div className="space-y-1 relative z-10">
                <span className="text-xs font-black uppercase tracking-wider text-[#ff8200] block">
                  Direct Student Consultation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Request Complete IEEE Project Package
                </h3>
                <p className="text-xs text-slate-300">
                  Fill in your details to receive the full abstract, source code demo access, and pricing for <strong>{project.title}</strong>.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-black text-white">Enquiry Sent to WhatsApp!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your request for <strong>{project.title}</strong> has been logged and WhatsApp chat has been initiated with our senior IEEE technical guide.
                  </p>
                  {lastSubmittedPayload && (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => sendToWhatsApp(lastSubmittedPayload)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#16a34a] text-white text-xs font-black shadow-md transition-all cursor-pointer"
                      >
                        <span>Reopen WhatsApp Chat</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-black text-slate-300 mb-1 uppercase tracking-wider">Your Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-300 mb-1 uppercase tracking-wider">Mobile Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        placeholder="e.g. 9840971000"
                        value={formData.mobile}
                        onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-black text-slate-300 mb-1 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@gmail.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-300 mb-1 uppercase tracking-wider">College / Institution</label>
                      <input
                        type="text"
                        placeholder="e.g. Anna University Campus"
                        value={formData.college}
                        onChange={e => setFormData({ ...formData, college: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-slate-300 mb-1 uppercase tracking-wider">Additional Message or Requirement</label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Need code explanation session and project report..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs font-medium focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="captcha-detail"
                      checked={formData.captchaChecked}
                      onChange={e => setFormData({ ...formData, captchaChecked: e.target.checked })}
                      className="w-4 h-4 rounded text-[#ff8200] focus:ring-orange-500"
                    />
                    <label htmlFor="captcha-detail" className="text-xs text-slate-300 cursor-pointer">
                      I confirm I am a student seeking IEEE project implementation guidance.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-[1.01] active:scale-98 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting Request..." : "Submit Enquiry & Get Instant Details"}
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column / Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">

            {/* Quick Metadata Summary Card */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] border border-slate-200/90 space-y-5">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
                <Info className="w-4 h-4 text-[#ff8200]" />
                <span>Project Summary</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Catalog ID:</span>
                  <span className="font-mono font-black text-slate-900">#{project.id || project.sno}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Academic Year:</span>
                  <span className="font-extrabold text-[#ff8200]">{project.academic_year || "2024 - 2025"}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Category:</span>
                  <span className="font-extrabold text-slate-800">{project.category || "IEEE"}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Difficulty:</span>
                  <span className={`px-2 py-0.5 rounded-md font-bold text-[10.5px] border ${getDifficultyColor(project.difficulty || 'Intermediate')}`}>
                    {project.difficulty || "Intermediate"}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-bold">Domain:</span>
                  <span className="font-extrabold text-blue-700">{project.domain || "General"}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Delivery Time:</span>
                  <span className="font-black text-emerald-600">Immediate / 24 Hours</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToEnquiry}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff8200] to-[#f97316] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm hover:brightness-110 cursor-pointer"
                >
                  Book This Title
                </button>
              </div>
            </div>

            {/* Direct Helpline Contact Card */}
            <div className="bg-gradient-to-br from-[#061426] to-[#0c2445] text-white rounded-3xl p-6 shadow-md border border-white/10 space-y-4">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#ff8200] block">
                Chennai IEEE Project Centre
              </span>
              <h4 className="text-base font-black text-white">Need Immediate Assistance?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our senior project architects for guidance on selection, base paper review, and custom domain modifications.
              </p>

              <div className="space-y-2 pt-2">
                <a
                  href="tel:+919840971000"
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 !no-underline transition-all border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+91 98409 71000</span>
                </a>

                <a
                  href={`https://wa.me/919840971000?text=${encodeURIComponent(`Hi, I am looking at IEEE Project ID #${project.id}: "${project.title}". Please send details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 !no-underline transition-all shadow-sm"
                >
                  <span>WhatsApp Chat Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Related Projects in same Category / Year */}
            {relatedProjects.length > 0 && (
              <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] border border-slate-200/90 space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Sparkles className="w-4 h-4 text-[#ff8200]" />
                  <span>Related IEEE Projects</span>
                </h3>

                <div className="space-y-3">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.id || rel.sno}
                      to={`/project/${rel.id || rel.sno}`}
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-orange-50/50 border border-slate-200/80 hover:border-orange-300 transition-all flex flex-col gap-1.5 group !no-underline block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                          {rel.domain}
                        </span>
                        <span className="text-[10.5px] font-bold text-slate-400">
                          #{rel.id || rel.sno}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold text-slate-800 group-hover:text-[#ff8200] transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Catalog Link */}
            <div className="pt-2 text-center">
              <button
                onClick={() => navigate(-1)}
                className="text-xs font-bold text-slate-500 hover:text-[#ff8200] flex items-center justify-center gap-1.5 mx-auto cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Previous Catalog</span>
              </button>
            </div>

          </div>

        </div>
      </main>

      {/* 6. Global Footer */}
      <Footer />
    </div>
  );
}
