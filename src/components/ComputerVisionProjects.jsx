import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { API_BASE } from "../api";
import { sendToWhatsApp, submitEnquiryWithWhatsApp, DEFAULT_WHATSAPP_NUMBER } from "../utils/whatsapp";
import {
  cvFrameworkLinks,
  baseCvProjects,
  cvEditorial,
  fetchCvProjects,
} from "../data/computerVisionData";

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
import MenuBookIcon from "@mui/icons-material/MenuBook";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FaceIcon from "@mui/icons-material/Face";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SecurityIcon from "@mui/icons-material/Security";

// Custom SVG Logo for CV Frameworks
const CvBrandIcon = ({ framework, className = "w-6 h-6" }) => {
  if (framework === "opencv") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="14" r="7" stroke="#EF4444" strokeWidth="3" fill="#1E293B" />
        <circle cx="15" cy="30" r="7" stroke="#22C55E" strokeWidth="3" fill="#1E293B" />
        <circle cx="33" cy="30" r="7" stroke="#3B82F6" strokeWidth="3" fill="#1E293B" />
        <circle cx="24" cy="14" r="3" fill="#EF4444" />
        <circle cx="15" cy="30" r="3" fill="#22C55E" />
        <circle cx="33" cy="30" r="3" fill="#3B82F6" />
      </svg>
    );
  }
  if (framework === "mtcnn") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="10" fill="#1E1B4B" />
        <rect x="12" y="12" width="24" height="24" rx="4" stroke="#818CF8" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="20" cy="20" r="2" fill="#818CF8" />
        <circle cx="28" cy="20" r="2" fill="#818CF8" />
        <circle cx="24" cy="24" r="1.5" fill="#38BDF8" />
        <path d="M19 28C21 30 27 30 29 28" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (framework === "facenet") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="10" fill="#064E3B" />
        <circle cx="24" cy="22" r="9" stroke="#34D399" strokeWidth="2" />
        <path d="M12 40 C14 33, 34 33, 36 40" stroke="#34D399" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 21L23 23L27 19" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (framework === "yolo") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="10" fill="#881337" />
        <path d="M16 14L24 24L32 14" stroke="#FB7185" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 24V34" stroke="#FB7185" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (framework === "image-classification") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="10" fill="#1E3A8A" />
        <rect x="12" y="12" width="24" height="24" rx="4" stroke="#60A5FA" strokeWidth="2" />
        <path d="M14 30L20 22L28 32L34 26" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (framework === "object-detection") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="10" fill="#78350F" />
        <rect x="10" y="10" width="28" height="28" rx="3" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="24" cy="24" r="5" fill="#FBBF24" />
      </svg>
    );
  }
  if (framework === "image-segmentation" || framework === "instance-segmentation" || framework === "semantic-segmentation") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="10" fill="#4C1D95" />
        <path d="M14 18 C18 14, 30 14, 34 18 C38 22, 38 30, 34 34 C30 38, 18 38, 14 34 C10 30, 10 22, 14 18 Z" fill="#A78BFA" opacity="0.6" />
        <circle cx="24" cy="26" r="6" stroke="#DDD6FE" strokeWidth="2" />
      </svg>
    );
  }
  // dlib
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#292524" />
      <polygon points="24,8 38,18 34,36 14,36 10,18" stroke="#F59E0B" strokeWidth="2" fill="#1C1917" />
      <circle cx="20" cy="20" r="1.5" fill="#F59E0B" />
      <circle cx="28" cy="20" r="1.5" fill="#F59E0B" />
      <circle cx="24" cy="24" r="1.5" fill="#F59E0B" />
      <circle cx="24" cy="29" r="1.5" fill="#F59E0B" />
    </svg>
  );
};

const ComputerVisionProjects = ({ defaultFramework = "opencv" }) => {
  const location = useLocation();

  // Determine active framework from route or prop
  const currentFramework = useMemo(() => {
    if (defaultFramework) return defaultFramework.toLowerCase();
    const path = location.pathname.toLowerCase();
    if (path.includes("yolo")) return "yolo";
    if (path.includes("instance-segmentation")) return "instance-segmentation";
    if (path.includes("semantic-segmentation") || path.includes("sementic-segmentation")) return "semantic-segmentation";
    if (path.includes("image-segmentation")) return "image-segmentation";
    if (path.includes("object-detection")) return "object-detection";
    if (path.includes("image-classification")) return "image-classification";
    if (path.includes("dlib") || path.includes("dilib")) return "dlib";
    if (path.includes("facenet")) return "facenet";
    if (path.includes("mtcnn")) return "mtcnn";
    if (path.includes("opencv")) return "opencv";
    return "opencv";
  }, [defaultFramework, location.pathname]);

  const editorial = useMemo(() => {
    return cvEditorial[currentFramework] || cvEditorial.opencv;
  }, [currentFramework]);

  // Initial projects based on framework
  const initialData = useMemo(() => {
    return baseCvProjects.map((item) => ({
      ...item,
      framework: editorial.name,
      tech: item.tech.map((t) => (t === "OpenCV" ? editorial.name : t)),
    }));
  }, [editorial]);

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
    framework: editorial.name,
    projectTitle: "",
    message: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Fetch or sync projects on framework change
  useEffect(() => {
    let isMounted = true;
    const loadProjects = async () => {
      setLoading(true);
      const data = await fetchCvProjects(currentFramework);
      if (isMounted) {
        setProjects(data);
        setLoading(false);
      }
    };
    loadProjects();
    return () => {
      isMounted = false;
    };
  }, [currentFramework]);

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
      framework: editorial.name,
      projectTitle: proj ? proj.title : `${editorial.name} Image Processing Projects Chennai`,
    }));
    setIsModalOpen(true);
    setFormSuccess(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    const payload = {
      name: formData.name,
      mobile: formData.phone,
      email: formData.email,
      college: formData.college,
      academicYear: "2024 - 2025",
      projectTitle: formData.projectTitle,
      domain: `${editorial.name} Image Processing & AI`,
      message: formData.message,
      source: `${editorial.heading}`
    };

    try {
      await submitEnquiryWithWhatsApp(payload, {
        openWhatsApp: true,
        whatsappNumber: DEFAULT_WHATSAPP_NUMBER
      });
      setFormSuccess(true);
    } catch (err) {
      console.warn("Error submitting enquiry:", err);
      setFormSuccess(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  const faqs = [
    {
      q: `What is the significance of ${editorial.name} in IEEE Image Processing Projects?`,
      a: `${editorial.name} provides high-performance real-time algorithms for object detection, facial recognition, landmark localization, and biometric verification, guaranteeing high accuracy and low computational latency for academic project defense.`,
    },
    {
      q: "What deliverables are provided with the project package?",
      a: "You receive clean Python source code with environment requirements, benchmark dataset weights/models, IEEE base paper PDF, system requirements documentation, PPT presentation slides, and live execution support.",
    },
    {
      q: "Can I integrate custom cameras, Raspberry Pi, or web interfaces?",
      a: "Yes! All projects can be connected to USB Webcams, IP RTSP streams, Raspberry Pi Camera modules, or integrated into Flask, Django, Streamlit, or Gradio web dashboards.",
    },
    {
      q: "How can I schedule a live demo or technical consultation in Chennai?",
      a: "Click 'Enquire Project' on any project title or connect directly with our computer vision research guides on WhatsApp (+91 93818 83344) or visit our Chennai centers.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-cyan-400/80 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Image Processing Projects</span>
            <span>/</span>
            <span className="text-slate-300">{editorial.name} Projects</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold mb-6 ${editorial.accentBg}`}>
                <CvBrandIcon framework={currentFramework} className="w-4 h-4" />
                <span>{editorial.badge}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {editorial.heading}
              </h1>
              <p className="mt-3 text-lg font-medium text-cyan-400">
                {editorial.title}
              </p>
              <p className="mt-3 text-base text-slate-300 max-w-3xl leading-relaxed">
                {editorial.intro}
              </p>

              {/* Feature Badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-emerald-400 !text-base" />
                  <span>Real-Time Face Detection & Recognition</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-cyan-400 !text-base" />
                  <span>GPU Acceleration & Deep Embeddings</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-medium">
                  <CheckCircleIcon className="text-purple-400 !text-base" />
                  <span>Full Python Code, Base Papers & Documentation</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/919381883344?text=Hello%20IEEE%20Project%20Centre%2C%20I%20am%20interested%20in%20${encodeURIComponent(editorial.name)}%20Image%20Processing%20Projects%20Chennai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all duration-200"
                >
                  <WhatsAppIcon className="!text-lg" />
                  <span>WhatsApp Technical Consultation</span>
                </a>
                <button
                  onClick={() => openProjectModal(null)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-lg transition-all duration-200 ${editorial.buttonBg}`}
                >
                  <AutoAwesomeIcon className="!text-base" />
                  <span>Request Custom {editorial.name} Project</span>
                </button>
              </div>
            </div>

            {/* Right Card / Summary Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <CvBrandIcon framework={currentFramework} className="w-10 h-10" />
                  <div>
                    <h3 className="font-bold text-white text-base">{editorial.name} CV Lab</h3>
                    <p className="text-xs text-slate-400">Chennai Computer Vision Center</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Published Titles:</span>
                    <span className="font-semibold text-cyan-300">{projects.length} Verified Titles</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Supported Libraries:</span>
                    <span className="font-semibold text-slate-200">OpenCV, MTCNN, FaceNet, Dlib</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Programming Language:</span>
                    <span className="font-semibold text-emerald-400">Python 3.9 / 3.10 / C++</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Deliverables:</span>
                    <span className="font-semibold text-slate-200">Source Code, Models, Base Paper</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                  <a
                    href="tel:+919381883344"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
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

      {/* CV Framework Switcher Navigation Bar */}
      <section className="py-4 bg-slate-900 border-b border-slate-800 sticky top-16 z-20 backdrop-blur-md bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-700">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap mr-2">
              Vision Libraries:
            </span>
            {cvFrameworkLinks.map((item) => {
              const isActive = item.slug === currentFramework;
              return (
                <Link
                  key={item.slug}
                  to={item.path}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-2 ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  <CvBrandIcon framework={item.slug} className="w-3.5 h-3.5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial / About Content Section */}
      <section className="py-16 bg-slate-950 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-600/30 text-cyan-400 text-xs font-semibold mb-4">
              <MenuBookIcon className="!text-sm" />
              <span>ABOUT {editorial.name.toUpperCase()} IN IMAGE PROCESSING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
              {editorial.sectionTitle || editorial.title}
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{editorial.sectionIntro || editorial.intro}</p>
            </div>

            {/* Key Features Grid if available */}
            {editorial.keyFeatures && (
              <div className="mt-8">
                <h3 className="text-lg font-bold text-white mb-4">Key Features of {editorial.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {editorial.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200"
                    >
                      <h4 className="font-bold text-cyan-300 text-sm mb-2">{feat.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us Points */}
            {editorial.whyPoints && (
              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 shadow-xl">
                <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <AutoAwesomeIcon className="text-cyan-400 !text-base" />
                  <span>Why Choose IEEE Project Center for {editorial.name}?</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {editorial.whyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                      <CheckCircleIcon className="text-cyan-400 !text-base mt-0.5" />
                      <div>
                        <strong className="text-white block text-xs sm:text-sm">{point.title}:</strong>
                        <span className="text-slate-300 text-xs">{point.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                  {editorial.name} IEEE Project List
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-600/40 text-cyan-300 text-xs font-bold">
                  {filteredProjects.length} Titles
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Filter by research domain or search by computer vision algorithms, face alignment models, or encryption policies.
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
                  placeholder={`Search ${editorial.name} projects...`}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
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
                    viewMode === "grid" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <GridViewIcon className="!text-lg" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
                    viewMode === "table" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"
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
                    ? "bg-cyan-600 text-white shadow-sm shadow-cyan-900/40"
                    : "bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards / Grid View */}
          {loading ? (
            <div className="py-20 text-center text-slate-400">
              <div className="animate-spin w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto mb-3" />
              <p className="text-xs">Loading {editorial.name} Projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="py-16 text-center bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-300 text-sm font-semibold">No {editorial.name} projects found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-cyan-600 text-white text-xs font-semibold hover:bg-cyan-500 transition-colors"
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
                    className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-950/20 group"
                  >
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/70 text-xs">
                        <span className="font-mono text-cyan-400 font-bold">#{project.id}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Domain subtitle */}
                      <p className="text-xs text-slate-400 font-mono mt-1.5 flex items-center gap-1.5">
                        <CodeIcon className="!text-xs text-cyan-400" />
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
                          className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>{isExpanded ? "Show Less" : "Read Abstract & Pipeline"}</span>
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shadow-md shadow-cyan-950/40"
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
                      <td className="py-3.5 px-4 font-mono font-bold text-cyan-400">#{project.id}</td>
                      <td className="py-3.5 px-6">
                        <div className="font-semibold text-white text-xs sm:text-sm hover:text-cyan-300 transition-colors">
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
                            className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs"
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
              Common questions regarding {editorial.name} model accuracy, facial dataset formatting, and IEEE base papers in Chennai.
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
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-white text-xs sm:text-sm hover:text-cyan-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ExpandMoreIcon className={`!text-base transform transition-transform ${isOpen ? "rotate-180 text-cyan-400" : "text-slate-400"}`} />
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
                <CvBrandIcon framework={currentFramework} className="w-6 h-6" />
                <h3 className="text-lg font-bold text-white">{editorial.name} Project Consultation</h3>
              </div>

              {formSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-950 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckIcon className="!text-2xl" />
                  </div>
                  <h4 className="text-base font-bold text-white">Enquiry Received!</h4>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto">
                    Thank you for reaching out to IEEE Project Center Chennai. Our {editorial.name} image processing specialist will contact you via WhatsApp and phone call.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors"
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
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 text-xs font-medium cursor-not-allowed"
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
                        placeholder="e.g. Vignesh Waran"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
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
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
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
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">College / University</label>
                      <input
                        type="text"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        placeholder="e.g. Anna University"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Customization Requirements (Optional)</label>
                    <textarea
                      rows="2"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify camera models, custom datasets, accuracy thresholds..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
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
                      className="px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 text-white text-xs font-semibold transition-colors shadow-md shadow-cyan-950/40"
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

export default ComputerVisionProjects;
