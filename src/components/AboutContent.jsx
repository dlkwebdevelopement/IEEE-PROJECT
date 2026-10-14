import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// 3D BLUE STATS ICONS
function StatExp3DIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="statExpGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="0.5" stopColor="#0072ff" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#statExpGrad)" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="14.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Calendar / Ribbon */}
      <rect x="18" y="20" width="28" height="26" rx="5" fill="#ffffff" />
      <path d="M18 20 H46 V27 H18 Z" fill="#0284c7" />
      <circle cx="25" cy="16" r="2.5" fill="#ffffff" />
      <circle cx="39" cy="16" r="2.5" fill="#ffffff" />
      <circle cx="25" cy="33" r="2" fill="#0052cc" />
      <circle cx="32" cy="33" r="2" fill="#0052cc" />
      <circle cx="39" cy="33" r="2" fill="#0052cc" />
      <circle cx="25" cy="39" r="2" fill="#0052cc" />
      <circle cx="32" cy="39" r="2" fill="#0052cc" />
    </svg>
  );
}

function StatProjects3DIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="statProjGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="0.5" stopColor="#0072ff" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#statProjGrad)" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="14.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Rocket Launch */}
      <path d="M32 15 C39 21, 41 29, 39 37 L32 43 L25 37 C23 29, 25 21, 32 15 Z" fill="#ffffff" />
      <circle cx="32" cy="27" r="3" fill="#0052cc" />
      <path d="M25 37 L19 41 L21 34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M39 37 L45 41 L43 34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polygon points="32,43 28,49 36,49" fill="#38bdf8" />
    </svg>
  );
}

function StatGuarantee3DIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="statGuarGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="0.5" stopColor="#0072ff" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#statGuarGrad)" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="14.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Shield with Checkmark */}
      <path d="M32 15 L44 20 V29 C44 38, 38 45, 32 48 C26 45, 20 38, 20 29 V20 L32 15 Z" fill="#ffffff" />
      <path d="M26 30 L30 34 L38 25" stroke="#0072ff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatDomains3DIcon({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="statDomGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="0.5" stopColor="#0072ff" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#statDomGrad)" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="14.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Tech Cube Isometric */}
      <polygon points="32,17 45,24 32,31 19,24" fill="#ffffff" />
      <polygon points="19,24 32,31 32,46 19,39" fill="#93c5fd" />
      <polygon points="32,31 45,24 45,39 32,46" fill="#60a5fa" />
      <circle cx="32" cy="31" r="2.5" fill="#0052cc" />
    </svg>
  );
}

// 3D BLUE PILLAR ICONS (LARGE VOLUMETRIC TILES)
function PillarRealtime3D({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pillarRealGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.4" stopColor="#0284c7" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#pillarRealGrad)" />
      <rect x="5.5" y="5.5" width="53" height="53" rx="16.5" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" />
      {/* Volumetric Electric Bolt */}
      <path d="M34 14 L20 33 H32 L28 50 L44 29 H32 L34 14 Z" fill="#ffffff" />
      <path d="M34 14 L20 33 H32 L28 50 L44 29 H32 L34 14 Z" stroke="#93c5fd" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="32" cy="31" r="2" fill="#0284c7" />
    </svg>
  );
}

function PillarDocs3D({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pillarDocGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.4" stopColor="#0284c7" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#pillarDocGrad)" />
      <rect x="5.5" y="5.5" width="53" height="53" rx="16.5" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" />
      {/* IEEE Document Sheet with Folded Corner */}
      <path d="M20 16 H38 L46 24 V48 H20 Z" fill="#ffffff" />
      <polygon points="38,16 46,24 38,24" fill="#93c5fd" />
      <line x1="26" y1="28" x2="36" y2="28" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="34" x2="40" y2="34" stroke="#0072ff" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="40" x2="35" y2="40" stroke="#0052cc" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function PillarViva3D({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pillarVivaGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.4" stopColor="#0284c7" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#pillarVivaGrad)" />
      <rect x="5.5" y="5.5" width="53" height="53" rx="16.5" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" />
      {/* 3D Graduation Mortarboard & Upward Arrow */}
      <polygon points="32,18 48,25 32,32 16,25" fill="#ffffff" />
      <path d="M22 28 V36 C22 40, 32 43, 42 36 V28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M42 27 V35" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
      {/* Upward Growth Arrow */}
      <path d="M25 46 L33 38 L37 42 L45 34" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="45,34 40,34 45,39" fill="#38bdf8" />
    </svg>
  );
}

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState("all");
  const [showFullDetails, setShowFullDetails] = useState(false);

  const stats = [
    { number: "15+", label: "Years Experience", desc: "Guiding students in Chennai", icon: <StatExp3DIcon className="w-10 h-10 mx-auto mb-2.5" /> },
    { number: "10,000+", label: "Projects Delivered", desc: "CSE, ECE, EEE & MCA", icon: <StatProjects3DIcon className="w-10 h-10 mx-auto mb-2.5" /> },
    { number: "100%", label: "Guaranteed Output", desc: "Zero-error live execution", icon: <StatGuarantee3DIcon className="w-10 h-10 mx-auto mb-2.5" /> },
    { number: "50+", label: "Tech Domains", desc: "IEEE 2024 - 2025 Standards", icon: <StatDomains3DIcon className="w-10 h-10 mx-auto mb-2.5" /> }
  ];

  const corePillars = [
    {
      icon: <PillarRealtime3D className="w-13 h-13" />,
      title: "100% Real-Time Execution",
      badge: "ZERO ERROR GUARANTEE",
      description: "Every project is tested live on hardware and software environments. Students receive fully functional code, libraries, and hands-on demonstrations before final college reviews."
    },
    {
      icon: <PillarDocs3D className="w-13 h-13" />,
      title: "Complete Documentation Kit",
      badge: "IEEE BASE PAPERS",
      description: "Comprehensive package including authentic IEEE base papers, customized abstracts, system architecture diagrams, high-standard reports (80-120 pages), and viva presentation slides."
    },
    {
      icon: <PillarViva3D className="w-13 h-13" />,
      title: "Placement & Viva Voce Training",
      badge: "CAREER ENHANCEMENT",
      description: "Line-by-line source code explanation, mock interview scheduling, aptitude tips, and soft skills guidance to ensure top scores in college evaluations and MNC placement rounds."
    }
  ];

  const departmentHighlights = [
    {
      id: "cse",
      title: "CSE & IT Technologies",
      degrees: "B.E | B.Tech | M.E | M.Tech | MCA | B.Sc | M.Sc",
      domains: ["Java 21 & Spring Boot", "Python & Data Science", "Machine Learning & AI", "Cloud Computing & AWS", "Full Stack Web & React", "Cyber Security & NS2/NS3"],
      accent: "border-sky-300 bg-sky-50/50 text-[#0284c7]"
    },
    {
      id: "ece",
      title: "ECE & Hardware Engineering",
      degrees: "B.E ECE | M.E Embedded | Diploma",
      domains: ["Embedded Systems & ARM", "IoT & Wireless Sensor Networks", "Robotics & Automation", "Arduino & Raspberry Pi", "VLSI & FPGA Design", "Matlab & Image Processing"],
      accent: "border-emerald-300 bg-emerald-50/50 text-emerald-700"
    },
    {
      id: "eee",
      title: "EEE & Power Electronics",
      degrees: "B.E EEE | M.E Power Systems",
      domains: ["Power Electronics & Drives", "Renewable Energy & Solar", "Smart Grid & Transmission", "Electric Vehicles (EV) Tech", "Matlab Simulink Systems", "Industrial Automation"],
      accent: "border-amber-300 bg-amber-50/50 text-amber-800"
    }
  ];

  const filteredDepts = activeTab === "all" ? departmentHighlights : departmentHighlights.filter(d => d.id === activeTab);

  return (
    <section id="about" className="relative w-full bg-white text-slate-800 py-8 sm:py-12 overflow-hidden font-sans border-b border-slate-200">
      
      {/* Subtle Background Radial Highlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* =========================================================================
            1. SECTION HEADER
            ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 flex flex-col items-center"
        >
          <h2 className="font-['Outfit',_sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#102a4d] tracking-tight uppercase leading-tight">
            IEEE Project Center - <span className="text-[#ff8200]">1 Crore Projects</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-12 h-[3px] bg-gradient-to-r from-transparent to-[#0284c7] rounded-full"></div>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-sky-400 bg-[#0072ff] shadow-[0_0_12px_rgba(2,132,199,0.75)]"></div>
            <div className="w-12 h-[3px] bg-gradient-to-l from-transparent to-[#ff8200] rounded-full"></div>
          </div>
        </motion.div>

        {/* =========================================================================
            2. STATS COUNTER ROW
            ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8"
        >
          {stats.map((stat, sIdx) => (
            <div 
              key={sIdx}
              className="bg-gradient-to-br from-slate-50 via-white to-sky-50/40 border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md hover:border-sky-300 transition-all group flex flex-col items-center justify-center"
            >
              {stat.icon}
              <div className="font-['Outfit'] font-black text-2xl sm:text-3xl lg:text-4xl text-[#102a4d] group-hover:text-[#0052cc] transition-colors leading-none mb-1.5">
                {stat.number}
              </div>
              <div className="font-bold text-slate-800 text-xs sm:text-sm mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                {stat.desc}
              </div>
            </div>
          ))}
        </motion.div>

        {/* =========================================================================
            3. CORE HIGHLIGHT PILLARS (3-COLUMN CARDS)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-6 sm:mb-8">
          {corePillars.map((pillar, pIdx) => (
            <motion.div
              key={pIdx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pIdx * 0.15 }}
              className="bg-white rounded-2xl border-2 border-slate-100 p-6 sm:p-7 shadow-[0_10px_30px_rgba(16,42,77,0.06)] hover:shadow-lg hover:border-sky-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="group-hover:scale-105 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-sky-50 text-[#0284c7] border border-sky-200">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-[#102a4d] mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
              
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-[#0284c7] font-bold text-xs sm:text-sm gap-1.5 group cursor-pointer">
                <span>Certified Project Assistance</span>
                <CheckCircleIcon sx={{ fontSize: 16 }} className="text-[#0284c7]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================================
            4. DEPARTMENTAL DOMAINS SHOWCASE TABS
            ========================================================================= */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 shadow-xs">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#ff8200] tracking-wider uppercase">ACADEMIC SCOPE &amp; ELIGIBILITY</span>
              <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl text-[#102a4d]">
                Projects Tailored for Every Department
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "all" ? "bg-[#102a4d] text-white shadow-xs" : "bg-white text-slate-700 hover:bg-slate-200"
                }`}
              >
                All Departments
              </button>
              <button
                onClick={() => setActiveTab("cse")}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "cse" ? "bg-[#0284c7] text-white shadow-xs" : "bg-white text-slate-700 hover:bg-slate-200"
                }`}
              >
                CSE &amp; IT
              </button>
              <button
                onClick={() => setActiveTab("ece")}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "ece" ? "bg-emerald-600 text-white shadow-xs" : "bg-white text-slate-700 hover:bg-slate-200"
                }`}
              >
                ECE &amp; Embedded
              </button>
              <button
                onClick={() => setActiveTab("eee")}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "eee" ? "bg-amber-600 text-white shadow-xs" : "bg-white text-slate-700 hover:bg-slate-200"
                }`}
              >
                EEE &amp; Power
              </button>
            </div>
          </div>

          {/* Department Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredDepts.map((dept, dIdx) => (
              <div 
                key={dIdx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-sky-300 transition-colors"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-md text-xs font-bold mb-3 bg-slate-100 text-slate-700">
                    {dept.degrees}
                  </div>
                  <h4 className="font-['Outfit'] font-bold text-xl text-[#102a4d] mb-4">
                    {dept.title}
                  </h4>
                  <div className="space-y-2 mb-6">
                    {dept.domains.map((dom, domIdx) => (
                      <div key={domIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                        <span>{dom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0052cc]">
                  <span>IEEE 2024 - 2025 Papers</span>
                  <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            5. FULL SEO KNOWLEDGE BASE & OVERVIEW (ORGANIZED & EXPANDABLE)
            ========================================================================= */}
        <div className="bg-white rounded-3xl border-2 border-slate-100 p-6 sm:p-8 lg:p-10 shadow-xs mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-[#0284c7] tracking-wider uppercase">COMPLETE ACADEMIC INSIGHTS</span>
              <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl text-[#102a4d]">
                About Our IEEE Project Center in Chennai
              </h3>
            </div>
            
            <button
              onClick={() => setShowFullDetails(!showFullDetails)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-sky-50 text-[#102a4d] hover:text-[#0052cc] font-['Outfit'] font-bold text-xs sm:text-sm transition-all cursor-pointer self-start sm:self-auto border border-slate-200"
            >
              <span>{showFullDetails ? "Show Condensed View" : "Read Full Academic Scope & SEO Details"}</span>
              <AutoAwesomeIcon sx={{ fontSize: 16 }} className="text-[#0284c7]" />
            </button>
          </div>

          {/* Core Primary Overview */}
          <div className="prose max-w-none text-slate-700 font-medium leading-relaxed text-justify space-y-4 mb-4">
            <p className="text-base sm:text-[17px] leading-loose text-slate-700">
              <strong className="text-[#1d4671] font-bold">IEEE Project centre</strong> is the premier Projects Development Center in Chennai. We offer 2024–2025 and 2021–2022 IEEE Final Year projects for Engineering college students in Java, Dotnet, Python, Android, NS2/NS3, Embedded System, Robotics, VLSI, and IoT technologies. We also provide comprehensive training and development services for B.E, B.Tech, M.E, M.Tech, B.Sc, M.Sc, BCA, MCA, MS, and MBA students across Chennai and surrounding institutions.
            </p>

            <p className="text-base sm:text-[16.5px] leading-relaxed text-slate-600">
              We have a wide range of concepts &amp; Real Time Projects for students. You will get an opportunity to work on live industrial projects, understand the underlying algorithms, and master cutting-edge software architecture. Timely completion of the project and in-depth conceptual clarity ensure that you not only learn about your project domain but also understand the advanced technologies, including <a href="https://luzfundoria.org/" target="_blank" rel="noopener noreferrer" className="text-[#ff8200] font-bold">Luz Fundoria</a> platforms and open-source frameworks.
            </p>
          </div>

          {/* Expandable Extended SEO & Branch Details */}
          <AnimatePresence>
            {showFullDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden space-y-4 pt-4 border-t border-slate-100 text-slate-600 text-sm sm:text-[15px] leading-relaxed text-justify"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80 mb-4">
                  <div>
                    <h4 className="font-bold text-[#102a4d] text-base mb-2">100% Guaranteed Project Output</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      IEEE Project Center is No.1 in providing 100% Guaranteed Project Output without any errors. As one of the best final year engineering college project centers in Chennai, we deliver best-in-class career-oriented and real-time Final Year Projects for B.E, B.Tech, M.E, M.Tech, MCA, B.Sc &amp; M.Sc students.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102a4d] text-base mb-2">Experienced Faculty &amp; Bulk Projects</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Our experienced faculty members handle special mentoring sessions for beginners, diploma candidates, and final year students. We also support colleges with bulk projects delivered seamlessly with complete source code, reports, and remote/team-viewer support.
                    </p>
                  </div>
                </div>

                <p>
                  <strong className="text-[#102a4d] font-bold">Placement Training</strong> – It includes Aptitude guidance, scheduling Mock Interviews, and Soft Skills guidance for career enhancement. Our trainees have consistently received the Best Project Award from their reputed colleges for years. Our role goes far beyond mere completion of the project; we equip you for technical interviews and viva success.
                </p>

                <p>
                  <strong className="text-[#102a4d] font-bold">Electrical and Electronics Engineering (EEE)</strong> – Our curriculum covers electrical machines, power transmission and distribution, power electronics, MATLAB-based stability and load flow analysis, and biomedical electronics. Core values are live project development, conceptual training, and guaranteed career advancement.
                </p>

                <p>
                  <strong className="text-[#102a4d] font-bold">Electronics and Communication Engineering (ECE)</strong> – We provide both hardware and software project development for ECE students in Chennai. From Embedded systems and VLSI to Robotics, Wireless Sensor Networks, and IoT, we ensure practical hands-on experience on physical microcontrollers (ARM, PIC, Arduino, NodeMCU, Raspberry Pi).
                </p>

                <p>
                  <strong className="text-[#102a4d] font-bold">Computer Science &amp; Engineering (CSE)</strong> – Software engineering projects transforming ideas into robust applications in Java, .NET, Python, Web Development, NS2/NS3 network simulations, and database management systems (SQL Server, MySQL, MongoDB).
                </p>

                <p>
                  <strong className="text-[#102a4d] font-bold">The Institute of Electrical and Electronics Engineers (IEEE)</strong> publishes nearly one-third of the world&apos;s technical literature in electrical engineering, computer science, and electronics. IEEE Project Centre leverages these standards to prepare final year students, M.E/M.Tech candidates, and Ph.D. scholars with original research abstracts and publication-grade implementations.
                </p>

                <p>
                  <strong className="text-[#102a4d] font-bold">Mini Projects</strong> – Mini projects assigned at the end of semesters strengthen fundamental conceptual clarity. We provide mini project guidance in Arduino, MATLAB, IoT, Embedded, NS2, VLSI, and Web applications for B.Tech, B.Sc, BCA, and MCA students in Chennai.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Hint */}
          <div className="text-center mt-4">
            <button
              onClick={() => setShowFullDetails(!showFullDetails)}
              className="text-[#0052cc] hover:text-[#ff8200] font-bold text-xs sm:text-sm cursor-pointer"
            >
              {showFullDetails ? "Collapse detailed information" : "Click here to read full academic details and syllabus"}
            </button>
          </div>
        </div>

        {/* =========================================================================
            6. STUDENT PROJECT JOURNEY (4-STEP WORKFLOW)
            ========================================================================= */}
        <div className="bg-gradient-to-r from-[#102a4d] to-[#0052cc] rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#ff8200] tracking-widest uppercase">OUR PROVEN 4-STEP PROCESS</span>
            <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl lg:text-4xl text-white mt-1">
              How We Guide You to Project Success
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Domain & Title Selection", desc: "Select verified IEEE base papers and customized abstracts matching your college guidelines." },
              { step: "02", title: "Architecture & Design", desc: "System architecture diagrams, algorithm design, and Review 1 presentation preparation." },
              { step: "03", title: "Live Code & Hardware Demo", desc: "Hands-on coding, simulation, and hardware assembly with zero-error execution." },
              { step: "04", title: "Report, PPT & Viva Voce", desc: "Bound project report (80-120 pages), presentation slides, and line-by-line viva coaching." }
            ].map((stepItem, idx) => (
              <div key={idx} className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-sm">
                <div className="font-['Outfit'] font-black text-3xl text-[#ff8200] mb-2">
                  {stepItem.step}
                </div>
                <h4 className="font-bold text-white text-base sm:text-lg mb-2 leading-snug">
                  {stepItem.title}
                </h4>
                <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons in Banner */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff8200] to-[#ff5500] hover:from-[#e67500] hover:to-[#e64d00] text-white font-['Outfit'] font-black text-sm tracking-wide shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Get Free IEEE Project Guidance Today
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-['Outfit'] font-bold text-sm tracking-wide transition-all cursor-pointer"
            >
              Explore Domains &amp; Technologies
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
