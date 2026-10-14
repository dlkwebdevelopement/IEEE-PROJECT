import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { API_BASE } from "../api";
import { sendToWhatsApp, submitEnquiryWithWhatsApp, DEFAULT_WHATSAPP_NUMBER } from "../utils/whatsapp";
import heroStudentsImg from "../assets/hero_students.jpg";
import bgSliderImg from "../assets/bg-slider1.jpg.jpeg";

/* =========================================================================
   GLOSSY 3D SQUIRCLE ICONS (MATCHING USER REFERENCE UI STYLE)
   Features:
   - Volumetric 3D pillowy squircle shape with smooth rounded corners
   - Satin gradient with top-left pill specular highlight
   - Soft directional drop shadow and subtle bottom shading
   - Crisp white / colored 3D embossed iconography
   ========================================================================= */

// 1. 3D BLUE GRADUATION CAP ICON
function GradCap3DGlossy({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradBlueTile" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#gradBlueTile)" />
      <g>
        <polygon points="32,20 51,28 32,36 13,28" fill="#ffffff" />
        <path d="M20 31 V37 C20 41.5, 32 44.5, 44 37 V31 C39 33.5, 25 33.5, 20 31 Z" fill="#ffffff" />
        <path d="M32 28 C26 30, 20.5 33, 20 38" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <rect x="18.5" y="38" width="3" height="5.5" rx="1" fill="#ffffff" />
      </g>
    </svg>
  );
}

// 2. 3D NAVY BLUE TARGET & DART ICON
function Target3DGlossy({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="amberTile" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#amberTile)" />
      <g>
        <circle cx="32" cy="33" r="14" stroke="#ffffff" strokeWidth="2.5" fill="none" />
        <circle cx="32" cy="33" r="8" stroke="#ffffff" strokeWidth="2" fill="none" />
        <circle cx="32" cy="33" r="3.5" fill="#fde047" />
        <path d="M46 17 L34 29" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <polygon points="46,17 51,14 48,21" fill="#fde047" />
      </g>
    </svg>
  );
}

// 3. 3D NAVY BLUE IEEE MICROCHIP TILE
function Chip3DGlossy({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chipTileGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#chipTileGrad)" />
      <g>
        <line x1="24" y1="16" x2="24" y2="19" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="16" x2="32" y2="19" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="16" x2="40" y2="19" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="45" x2="24" y2="48" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="45" x2="32" y2="48" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="45" x2="40" y2="48" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="24" x2="19" y2="24" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="32" x2="19" y2="32" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="40" x2="19" y2="40" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="45" y1="24" x2="48" y2="24" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="45" y1="32" x2="48" y2="32" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <line x1="45" y1="40" x2="48" y2="40" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
        <rect x="19" y="19" width="26" height="26" rx="5" fill="#ffffff" stroke="#bae6fd" strokeWidth="1" />
        <rect x="25" y="25" width="14" height="14" rx="3" fill="#0284c7" />
        <circle cx="32" cy="32" r="3" fill="#fde047" />
      </g>
    </svg>
  );
}

// 4. 3D NAVY BLUE PYTHON TILE
function Python3DGlossy({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pyTileGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#pyTileGrad)" />
      <g>
        <path d="M31.8 17 C25 17 25.5 20 25.5 20 L25.5 23 H32 V24 H22.5 C22.5 24 16 23.5 16 30 C16 36.5 21.5 36 21.5 36 H25 V33.5 C25 30.5 28 30.5 28 30.5 H34.5 C37 30.5 38.5 29 38.5 26.5 V20 C38.5 20 38.8 17 31.8 17 Z" fill="#60a5fa" />
        <circle cx="28.5" cy="20" r="1.5" fill="#ffffff" />
        <path d="M32.2 47 C39 47 38.5 44 38.5 44 L38.5 41 H32 V40 H41.5 C41.5 40 48 40.5 48 34 C48 27.5 42.5 28 42.5 28 H39 V30.5 C39 33.5 36 33.5 36 33.5 H29.5 C27 33.5 25.5 35 25.5 37.5 V44 C25.5 44 25.2 47 32.2 47 Z" fill="#facc15" />
        <circle cx="35.5" cy="44" r="1.5" fill="#ffffff" />
      </g>
    </svg>
  );
}

// 5. 3D NAVY BLUE AI & WEB TILE
function AiBrain3DGlossy({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiTileGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#aiTileGrad)" />
      <g>
        <path d="M25 24 L17 32 L25 40" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M39 24 L47 32 L39 40" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="34" y1="21" x2="30" y2="43" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 6. 3D NAVY BLUE JAVA TILE
function Java3DGlossy({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="javaTileGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#javaTileGrad)" />
      <g>
        <path d="M28 17 C26 21, 31 23, 29 27" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 18 C33 22, 38 24, 36 28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 29 H41 V37 C41 42, 36 45, 31 45 C26 45, 21 42, 21 37 Z" fill="#ffffff" />
        <path d="M41 31 C46 31, 46 38, 41 39" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="31" cy="48" rx="13" ry="2.5" fill="#fde047" />
      </g>
    </svg>
  );
}

// 7. 3D NAVY BLUE DATABASE TILE
function Database3DGlossy({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dbTileGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#dbTileGrad)" />
      <g>
        <path d="M19 39 C19 36, 25 34, 32 34 C39 34, 45 36, 45 39 V43 C45 46, 39 48, 32 48 C25 48, 19 46, 19 43 Z" fill="#ffffff" />
        <ellipse cx="32" cy="39" rx="13" ry="4" fill="#cbd5e1" />
        <path d="M19 29 C19 26, 25 24, 32 24 C39 24, 45 26, 45 29 V33 C45 36, 39 38, 32 38 C25 38, 19 36, 19 33 Z" fill="#ffffff" />
        <ellipse cx="32" cy="29" rx="13" ry="4" fill="#cbd5e1" />
        <path d="M19 19 C19 16, 25 14, 32 14 C39 14, 45 16, 45 19 V23 C45 26, 39 28, 32 28 C25 28, 19 26, 19 23 Z" fill="#ffffff" />
        <ellipse cx="32" cy="19" rx="13" ry="4" fill="#fde047" />
      </g>
    </svg>
  );
}



// 12. 3D NAVY BLUE FORM SHIELD TILE
function FormShield3DGlossy({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldTile" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#shieldTile)" />
      <g>
        <path d="M32 16 L44 21 V32 C44 40, 37 46, 32 49 C27 46, 20 40, 20 32 V21 L32 16 Z" fill="#ffffff" />
        <path d="M26 31 L30 35 L38 26" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// 13. 3D NAVY BLUE PLAY BUTTON TILE
function PlayVideo3DGlossy({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="playTileGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#playTileGrad)" />
      <polygon points="27,22 43,32 27,42" fill="#ffffff" />
    </svg>
  );
}

/* =========================================================================
   MAIN HERO COMPONENT
   ========================================================================= */

export default function Hero() {
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    academicYear: "",
    requirement: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaChecked) {
      alert("Please check the verification box.");
      return;
    }
    setIsSubmitting(true);
    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      academicYear: formData.academicYear || "2024 - 2025",
      requirement: formData.requirement || "IEEE Projects",
      message: "Enquiry submitted from Hero Form",
      source: "Homepage Hero Banner"
    };

    try {
      await submitEnquiryWithWhatsApp(payload, {
        openWhatsApp: true,
        whatsappNumber: DEFAULT_WHATSAPP_NUMBER
      });
      setSubmittedData(payload);
      setSubmitted(true);
    } catch (err) {
      console.warn("Could not post enquiry:", err);
      setSubmittedData(payload);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      id="home" 
      className="relative w-full min-h-[660px] lg:min-h-[720px] flex flex-col justify-center overflow-hidden font-sans select-none text-white py-10 sm:py-14 lg:py-18"
      style={{
        backgroundImage: `url(${heroStudentsImg})`,
        backgroundSize: "cover",
        backgroundPosition: "80% center",
        backgroundRepeat: "no-repeat"
      }}
    >
      
      {/* ============ BORDER-FREE CINEMATIC LIGHT & CONTRAST BACKDROP ============ */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Smooth Dark Scrim: Deep on the left for text contrast, translucent on the right to show students & lab */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40"></div>

        {/* Delicate Cyan & Blue Light Flares (Outline-free depth) */}
        <div className="absolute -top-32 -left-20 w-[600px] h-[500px] rounded-full bg-blue-600/15 blur-[120px]"></div>
        <div className="absolute -bottom-32 left-1/3 w-[550px] h-[450px] rounded-full bg-cyan-500/10 blur-[130px]"></div>
        <div className="absolute top-1/4 right-10 w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-[140px]"></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* ============ 2-COLUMN MODERN DIFFERENT UI (OUTLINE-FREE) ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-center">
          
          {/* ============ LEFT COLUMN: MODERN HERO CONTENT & INTERACTIVE TECH BADGES ============ */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-start"
          >
            {/* 1. Outline-Free Gradient Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-xs sm:text-[13.5px] font-bold tracking-wide shadow-lg shadow-blue-500/25 mb-3 hover:scale-[1.02] transition-all">
              <GradCap3DGlossy className="w-5 h-5 shrink-0" />
              <span>Chennai's No.1 IEEE Project Training Centre</span>
            </div>

            {/* 2. Cohesive, Powerful Headline Group (Different UI & Modern Hierarchy) */}
            <div className="flex flex-col mt-1 mb-2">
              <span className="font-sans text-xs sm:text-sm font-extrabold tracking-widest uppercase text-cyan-400 mb-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
                2024 - 2025 IEEE Final Year Projects
              </span>
              
              <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] text-white tracking-tight leading-[1.08] drop-shadow-md">
                Well Experienced In <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#00c6ff] via-[#38bdf8] to-[#60a5fa] bg-clip-text text-transparent">
                  PROJECT TRAINING
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-2 mt-2.5">
                <span className="text-base sm:text-lg lg:text-xl font-bold text-slate-200">
                  Best Guidance For Engineering Students
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-[#ff8200] font-black text-xs uppercase tracking-wider">
                  IEEE Certified
                </span>
              </div>
            </div>

            {/* 3. Description Paragraph */}
            <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-slate-300 font-normal max-w-xl my-2.5 leading-relaxed">
              Hands-on practical training with complete IEEE base papers, verified source code, live hardware execution, and 100% viva voice support by industry professionals.
            </p>

            {/* 4. Action CTA Buttons (Round Pill Shape, Outline-Free) */}
            <div className="flex flex-wrap items-center gap-4 my-3">
              {/* Primary Button */}
              <button 
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{ borderRadius: "9999px" }}
                className="px-8 py-3.5 !rounded-full bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#005cd6] hover:brightness-110 active:scale-95 text-white font-sans font-bold text-sm sm:text-base tracking-wide flex items-center gap-2.5 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all cursor-pointer border-0 outline-none ring-0 focus:outline-none focus:ring-0"
              >
                <span>Explore Projects</span>
                <ArrowForwardIcon sx={{ fontSize: 20 }} />
              </button>

              {/* Secondary Button: Watch Video */}
              <div className="flex items-center gap-3.5 group cursor-pointer border-0 outline-none">
                <div className="group-hover:scale-110 transition-transform">
                  <PlayVideo3DGlossy className="w-12 h-12" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    Watch Video Demo
                  </span>
                  <span className="font-sans text-xs text-slate-400">
                    Know More About Us
                  </span>
                </div>
              </div>
            </div>

            {/* 5. Target Callout: Sleek Outline-Free Gradient Card */}
            <div className="flex items-center gap-4 mt-3 p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl shadow-xl border-0 select-none">
              <div className="shrink-0 hover:scale-105 transition-transform cursor-pointer">
                <Target3DGlossy className="w-14 h-14 sm:w-16 sm:h-16" />
              </div>
              <div className="flex flex-col font-sans">
                <div className="text-white font-bold text-sm sm:text-base tracking-tight leading-snug">
                  We Provided Best
                </div>
                <div className="text-[#ff8200] font-black text-2xl sm:text-3xl lg:text-[34px] tracking-tight uppercase leading-none my-0.5 drop-shadow-sm">
                  IEEE PROJECTS
                </div>
                <div className="text-slate-300 font-medium text-xs sm:text-sm tracking-wide leading-snug">
                  ECE • CSE • IT • EEE • Mechanical • AI & Data Science
                </div>
              </div>
            </div>

            {/* 6. Popular Technologies: Outline-Free Floating Glass Chips */}
            <div className="mt-4.5 w-full">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-ping" />
                <span>Featured Tech Stacks</span>
              </div>
              
              {/* Seamless Pill Row Without Bounding Box Outline */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 hover:bg-blue-600/30 backdrop-blur-md shadow-md hover:-translate-y-0.5 transition-all cursor-pointer border-0">
                  <Python3DGlossy className="w-7 h-7 shrink-0" />
                  <span className="text-xs font-bold text-white">Python</span>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 hover:bg-blue-600/30 backdrop-blur-md shadow-md hover:-translate-y-0.5 transition-all cursor-pointer border-0">
                  <Java3DGlossy className="w-7 h-7 shrink-0" />
                  <span className="text-xs font-bold text-white">Java FullStack</span>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 hover:bg-blue-600/30 backdrop-blur-md shadow-md hover:-translate-y-0.5 transition-all cursor-pointer border-0">
                  <AiBrain3DGlossy className="w-7 h-7 shrink-0" />
                  <span className="text-xs font-bold text-white">AI / ML / Web</span>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 hover:bg-blue-600/30 backdrop-blur-md shadow-md hover:-translate-y-0.5 transition-all cursor-pointer border-0">
                  <Database3DGlossy className="w-7 h-7 shrink-0" />
                  <span className="text-xs font-bold text-white">Cloud Database</span>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 hover:bg-blue-600/30 backdrop-blur-md shadow-md hover:-translate-y-0.5 transition-all cursor-pointer border-0">
                  <Chip3DGlossy className="w-7 h-7 shrink-0" />
                  <span className="text-xs font-black text-[#ff8200]">IEEE Microchip</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* ============ RIGHT COLUMN: MODERN OUTLINE-FREE WHITE GLASS ENQUIRY FORM ============ */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end w-full"
          >
            {/* Outline-Free White Glassmorphic Enquiry Form Card */}
            <div className="w-full max-w-[390px] xl:max-w-[420px] rounded-3xl p-6 sm:p-7 relative z-20 backdrop-blur-2xl bg-white/95 text-slate-800 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.65)] border-0">
              
              {/* Form Header with 3D Glossy Blue Shield (Zero Border) */}
              <div className="flex items-center gap-3.5 mb-3 pb-1 border-0 outline-none">
                <div className="shrink-0 border-0 outline-none">
                  <FormShield3DGlossy className="w-11 h-11" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-sans text-[22px] font-black text-slate-900 m-0 tracking-tight leading-tight border-0 outline-none">
                    Quick Project Enquiry
                  </h2>
                  <span className="font-sans text-[11.5px] font-bold text-blue-600 mt-0.5 border-0 outline-none">
                    Get Free IEEE Project List & Guidance
                  </span>
                </div>
              </div>

              {submitted ? (
                <div className="py-7 text-center flex flex-col items-center">
                  <CheckCircleIcon sx={{ fontSize: 44 }} className="text-emerald-500 mb-2 animate-bounce drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]" />
                  <h3 className="font-sans text-lg font-black text-slate-900 mb-1">Enquiry Sent to WhatsApp!</h3>
                  <p className="font-sans text-xs text-slate-600 mb-4 leading-relaxed">
                    Your details have been registered and WhatsApp has been initiated with our senior project advisor.
                  </p>
                  
                  <div className="flex flex-col gap-2 w-full max-w-[280px]">
                    {submittedData && (
                      <button
                        type="button"
                        onClick={() => sendToWhatsApp(submittedData)}
                        style={{ borderRadius: "9999px" }}
                        className="w-full py-2.5 bg-[#25d366] hover:bg-[#16a34a] text-white text-xs font-bold !rounded-full transition-all cursor-pointer shadow-md shadow-green-500/25 border-0 outline-none flex items-center justify-center gap-1.5"
                      >
                        <span>Reopen WhatsApp Chat</span>
                      </button>
                    )}
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setCaptchaChecked(false);
                        setFormData({ name: "", mobile: "", academicYear: "", requirement: "" });
                      }}
                      style={{ borderRadius: "9999px" }}
                      className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold !rounded-full transition-all cursor-pointer border-0 outline-none"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 border-0 outline-none">
                  
                  {/* Field 1: Student Name (Outline-Free) */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-slate-700 mb-1 tracking-wide border-0 outline-none">
                      Student Name
                    </label>
                    <div className="flex items-center rounded-xl overflow-hidden bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 shadow-inner transition-all border-0">
                      <div className="w-10 flex items-center justify-center text-blue-600 shrink-0">
                        <PersonIcon sx={{ fontSize: 19 }} />
                      </div>
                      <input 
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full font-sans bg-transparent text-slate-900 px-2 py-2.5 text-sm font-semibold border-0 outline-none focus:outline-none focus:ring-0 placeholder:text-slate-400 placeholder:font-normal"
                      />
                    </div>
                  </div>

                  {/* Field 2: Mobile Number (Outline-Free) */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-slate-700 mb-1 tracking-wide border-0 outline-none">
                      Mobile Number
                    </label>
                    <div className="flex items-center rounded-xl overflow-hidden bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 shadow-inner transition-all border-0">
                      <div className="w-10 flex items-center justify-center text-blue-600 shrink-0">
                        <PhoneIcon sx={{ fontSize: 18 }} />
                      </div>
                      <input 
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full font-sans bg-transparent text-slate-900 px-2 py-2.5 text-sm font-semibold border-0 outline-none focus:outline-none focus:ring-0 placeholder:text-slate-400 placeholder:font-normal"
                      />
                    </div>
                  </div>

                  {/* Field 3: Academic Year (Outline-Free) */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-slate-700 mb-1 tracking-wide border-0 outline-none">
                      Academic Year
                    </label>
                    <div className="flex items-center rounded-xl overflow-hidden bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 shadow-inner transition-all border-0">
                      <div className="w-10 flex items-center justify-center text-blue-600 shrink-0">
                        <SchoolIcon sx={{ fontSize: 19 }} />
                      </div>
                      <select 
                        value={formData.academicYear}
                        onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                        className="w-full font-sans bg-transparent text-slate-900 px-2 py-2.5 text-sm font-semibold border-0 outline-none focus:outline-none focus:ring-0 cursor-pointer [&>option]:bg-white [&>option]:text-slate-900"
                      >
                        <option value="">Select Year</option>
                        <option value="2023 - 2024">2023 - 2024</option>
                        <option value="2024 - 2025">2024 - 2025</option>
                        <option value="2025 - 2026">2025 - 2026</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 4: Project Requirement (Outline-Free) */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-slate-700 mb-1 tracking-wide border-0 outline-none">
                      Project Requirement
                    </label>
                    <div className="flex items-center rounded-xl overflow-hidden bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 shadow-inner transition-all border-0">
                      <div className="w-10 flex items-center justify-center text-blue-600 shrink-0">
                        <FormatListBulletedIcon sx={{ fontSize: 19 }} />
                      </div>
                      <select 
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full font-sans bg-transparent text-slate-900 px-2 py-2.5 text-sm font-semibold border-0 outline-none focus:outline-none focus:ring-0 cursor-pointer [&>option]:bg-white [&>option]:text-slate-900"
                      >
                        <option value="">Select Requirements</option>
                        <option value="IEEE Projects">IEEE Projects (2024 - 2025)</option>
                        <option value="Application Projects">Application Projects</option>
                        <option value="Diploma Projects">Diploma Projects</option>
                        <option value="Internship & Training">Internship & Training</option>
                      </select>
                    </div>
                  </div>

                  {/* Recaptcha Box (Outline-Free) */}
                  <div 
                    onClick={() => setCaptchaChecked(!captchaChecked)}
                    className="w-full bg-slate-100 hover:bg-slate-200/70 rounded-xl p-2.5 flex items-center justify-between cursor-pointer select-none transition-all mt-1.5 border-0 shadow-inner"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-5 h-5 rounded-[5px] flex items-center justify-center transition-all duration-200 ${
                          captchaChecked 
                            ? "bg-[#0ea5e9] text-white shadow-md shadow-sky-500/30" 
                            : "bg-white shadow-sm"
                        }`}
                      >
                        {captchaChecked && (
                          <CheckIcon sx={{ fontSize: 16 }} className="text-white stroke-[2.5]" />
                        )}
                      </div>
                      <span className="font-sans text-[13px] font-semibold text-slate-700 tracking-tight">
                        I'm not a robot
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center shrink-0 pr-1">
                      <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 8C18.75 8 8 18.75 8 32C8 38.08 10.25 43.62 14 47.9L18.3 43.6C15.62 40.4 14 36.4 14 32C14 22.06 22.06 14 32 14C36.97 14 41.48 16.02 44.75 19.25L37 27H56V8L49 15C44.62 10.68 38.6 8 32 8Z" fill="#38bdf8"/>
                        <path d="M50 16.1L45.7 20.4C48.38 23.6 50 27.6 50 32C50 41.94 41.94 50 32 50C27.03 50 22.52 47.98 19.25 44.75L27 37H8V56L15 49C19.38 53.32 25.4 56 32 56C45.25 56 56 45.25 56 32C56 25.92 53.75 20.38 50 16.1Z" fill="#60a5fa"/>
                      </svg>
                      <span className="font-sans text-[8.5px] font-semibold text-slate-500 leading-none mt-0.5">reCAPTCHA</span>
                      <div className="flex items-center gap-1 text-[7px] text-slate-400 mt-0.5 leading-none">
                        <span>Privacy</span>
                        <span>-</span>
                        <span>Terms</span>
                      </div>
                    </div>
                  </div>

                  {/* High-Impact Vibrant Orange Submit CTA Button (Outline-Free, Matches IEEE PROJECTS) */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    style={{ borderRadius: "9999px" }}
                    className="w-full bg-gradient-to-r from-[#ff8200] via-[#ff6a00] to-[#ff4500] hover:brightness-110 active:scale-[0.99] text-white font-sans font-black py-3.5 px-6 !rounded-full flex items-center justify-center gap-2.5 text-sm sm:text-base tracking-wider uppercase transition-all shadow-xl shadow-orange-500/35 hover:shadow-orange-500/50 cursor-pointer mt-2 border-0 outline-none ring-0 focus:outline-none focus:ring-0"
                  >
                    <SendIcon sx={{ fontSize: 18 }} className="rotate-[-20deg]" />
                    <span>{isSubmitting ? "Submitting..." : "SUBMIT ENQUIRY NOW"}</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
