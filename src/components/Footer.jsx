import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Logo from '../assets/1-Crore-logo-e1637388598739.png';

/* =========================================================================
   CLEAN 3D BLUE SQUIRCLE ICONS FOR FOOTER (ROUND-WHITE & OUTLINE FREE)
   ========================================================================= */

// Common 3D Blue Squircle Base Definition
const Blue3DGlossFilter = () => (
  <defs>
    <linearGradient id="blueSquircle3D" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#2563eb" />
      <stop offset="50%" stopColor="#1d4ed8" />
      <stop offset="100%" stopColor="#1e3a8a" />
    </linearGradient>
  </defs>
);

// 1. 3D BLUE FACEBOOK SQUIRCLE
function Facebook3DSquircle({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#blueSquircle3D)" />
      <path d="M36 34 H41.5 L42.5 27 H36 V23 C36 21 37 19.8 40 19.8 H42.5 V13.5 C41.5 13.4 39 13.2 36.2 13.2 C30.5 13.2 26.5 16.7 26.5 23 V27 H20.5 V34 H26.5 V50 H36 V34 Z" fill="#ffffff" />
    </svg>
  );
}

// 2. 3D BLUE INSTAGRAM SQUIRCLE
function Instagram3DSquircle({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#blueSquircle3D)" />
      <rect x="18" y="18" width="28" height="28" rx="8" stroke="#ffffff" strokeWidth="3.2" fill="none" />
      <circle cx="32" cy="32" r="7" stroke="#ffffff" strokeWidth="3" fill="none" />
      <circle cx="40.5" cy="23.5" r="2.2" fill="#ffffff" />
    </svg>
  );
}

// 3. 3D BLUE YOUTUBE SQUIRCLE
function YouTube3DSquircle({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#blueSquircle3D)" />
      <path d="M47 24.5 C47 24.5 46.5 21 45 19.5 C43 17.5 41 17.5 40 17.3 C34 17 32 17 32 17 C32 17 30 17 24 17.3 C23 17.5 21 17.5 19 19.5 C17.5 21 17 24.5 17 24.5 C17 24.5 16.5 28.5 16.5 32.5 V35.5 C16.5 39.5 17 43.5 17 43.5 C17 43.5 17.5 47 19 48.5 C21 50.5 23.5 50.5 24.5 50.7 C28 51 32 51 32 51 C32 51 34 51 40 50.7 C41 50.5 43 50.5 45 48.5 C46.5 47 47 43.5 47 43.5 C47 43.5 47.5 39.5 47.5 35.5 V32.5 C47.5 28.5 47 24.5 47 24.5 Z" fill="#ffffff" />
      <polygon points="28,26.5 39,33.5 28,40.5" fill="#0052cc" />
    </svg>
  );
}

// 4. 3D BLUE LINKEDIN SQUIRCLE
function LinkedIn3DSquircle({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#blueSquircle3D)" />
      <circle cx="21" cy="20.5" r="3.2" fill="#ffffff" />
      <rect x="18" y="26" width="6" height="19" rx="2" fill="#ffffff" />
      <path d="M28 26 H34 V29 C35.2 27 37.5 25.5 41 25.5 C46.5 25.5 48.5 29.5 48.5 35.5 V45 H42.5 V36.5 C42.5 34 41.5 32 39 32 C36.5 32 34 34 34 37 V45 H28 V26 Z" fill="#ffffff" />
    </svg>
  );
}

// 5. 3D BLUE WHATSAPP SQUIRCLE
function WhatsApp3DSquircle({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#blueSquircle3D)" />
      <path d="M32 15 C22.5 15 15 22.5 15 32 C15 35.2 15.9 38.3 17.5 41 L15 49 L23.5 46.5 C26 48 28.9 49 32 49 C41.5 49 49 41.5 49 32 C49 22.5 41.5 15 32 15 Z" fill="#ffffff" />
      <path d="M39 36 C38.5 37.5 36.5 39 35 39 C34 39 32.5 38.5 29 37 C25 35 22 31 22 30.5 C21.9 30.4 19.5 27 19.5 24 C19.5 21 21 19.5 21.8 18.7 C22.2 18.3 22.8 18.3 23.2 18.3 H24.5 C25 18.3 25.4 18.5 25.6 19.1 C26.2 20.6 27 22.8 27.2 23.1 C27.4 23.5 27.4 23.9 27.1 24.3 L26.3 25.3 C26 25.6 25.7 26 26.1 26.7 C26.8 28 28.5 30 30.5 31.5 C31.2 32 31.8 31.9 32.2 31.4 L33.2 30.1 C33.6 29.6 34 29.7 34.5 29.9 C35 30.1 38.5 31.8 39 32.1 C39.5 32.4 39.8 32.6 39.9 32.9 C40 33.6 39.5 35 39 36 Z" fill="#0052cc" />
    </svg>
  );
}

// 6. 3D BLUE LOCATION PIN SQUIRCLE
function Location3DGlossy({ className = "w-11 h-11" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#blueSquircle3D)" />
      <path d="M32 14 C23.5 14 17 20.5 17 28.5 C17 39.5 32 49 32 49 C32 49 47 39.5 47 28.5 C47 20.5 40.5 14 32 14 Z" fill="#ffffff" />
      <circle cx="32" cy="27.5" r="5.5" fill="#0284c7" />
    </svg>
  );
}

// 7. 3D BLUE PHONE SQUIRCLE
function Phone3DGlossy({ className = "w-9 h-9" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#blueSquircle3D)" />
      <path d="M42 37 C40.5 38.5 37.5 40 35 40 C33.5 40 31.5 39.5 27 36 C22.5 32.5 20 28.5 20 27 C20 24.5 21.5 21.5 23 20 C23.8 19.2 25 19.2 25.8 20.2 L28.5 23.5 C29.2 24.5 29 25.5 28.2 26.2 L27 27.5 C28 29.5 30.5 32 32.5 33 L33.8 31.8 C34.5 31 35.5 30.8 36.5 31.5 L39.8 34.2 C40.8 35 40.8 36.2 40 37 Z" fill="#ffffff" />
    </svg>
  );
}

// 8. 3D BLUE EMAIL SQUIRCLE
function Email3DGlossy({ className = "w-9 h-9" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#blueSquircle3D)" />
      <rect x="16" y="20" width="32" height="24" rx="4" fill="#ffffff" />
      <path d="M16 22 L32 34 L48 22" stroke="#0052cc" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// 9. 3D TECH CUBE SQUIRCLE (FOR DOMAINS HEADER)
function TechCube3DIcon({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#blueSquircle3D)" />
      <polygon points="32,16 46,24 32,32 18,24" fill="#ffffff" />
      <polygon points="18,24 32,32 32,48 18,40" fill="#93c5fd" />
      <polygon points="32,32 46,24 46,40 32,48" fill="#60a5fa" />
    </svg>
  );
}

// 10. 3D GRAD CAP SQUIRCLE (FOR SERVICES HEADER)
function GradCap3DIcon({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#blueSquircle3D)" />
      <polygon points="32,18 48,26 32,34 16,26" fill="#ffffff" />
      <path d="M22 29 V37 C22 41, 32 44, 42 37 V29" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="42" cy="30" r="1.5" fill="#38bdf8" />
    </svg>
  );
}

// 11. 3D OFFICE BUILDING SQUIRCLE (FOR REACH US HEADER)
function OfficeBuilding3DIcon({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Blue3DGlossFilter />
      <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#blueSquircle3D)" />
      <rect x="18" y="18" width="18" height="30" rx="3" fill="#ffffff" />
      <rect x="36" y="24" width="14" height="24" rx="2" fill="#93c5fd" />
      <rect x="22" y="23" width="3" height="3" fill="#0052cc" />
      <rect x="29" y="23" width="3" height="3" fill="#0052cc" />
      <rect x="22" y="30" width="3" height="3" fill="#0052cc" />
      <rect x="29" y="30" width="3" height="3" fill="#0052cc" />
      <rect x="22" y="37" width="3" height="3" fill="#0052cc" />
      <rect x="29" y="37" width="3" height="3" fill="#0052cc" />
      <rect x="24" y="43" width="6" height="5" fill="#003580" />
    </svg>
  );
}

/* =========================================================================
   DATA DEFINITIONS
   ========================================================================= */

const locations = [
  {
    tag: "Chennai HQ",
    name: "1 Crore Projects — Head Office",
    lines: ["Door No: 68 & 70, No: 172, Ground Floor", "Rahaat Plaza (Opp. Vijaya Hospital)", "Vadapalani, Chennai – 600026"],
    phone: "+91 97518 00789",
    displayPhone: "+91 97518 00789 / 72999 51536",
    email: "satheeshkumar@dlktech.co.in",
    timing: "Mon – Sat: 9:30 AM – 7:30 PM"
  },
  {
    tag: "Kumbakonam",
    name: "DLK Technologies Pvt Ltd",
    lines: ["No.7/158, Pillaiyar Gurumoorthy Nagar", "Ammachatram, Kumbakonam", "Tamil Nadu – 612103"],
    phone: "+91 72999 51536",
    displayPhone: "+91 72999 51536",
    email: "satheeshkumar@dlktech.co.in",
    timing: "Mon – Sat: 9:30 AM – 6:30 PM"
  },
  {
    tag: "Bahrain (GCC)",
    name: "Dhanam Technologies W.L.L",
    lines: ["Flat No: 1653, Building No: 1565", "Road No: 1722, Block No: 317, Diplomatic Area", "Manama Municipality, Kingdom of Bahrain"],
    phone: "+973 3900 0000",
    displayPhone: "+973 3900 0000 / +91 72999 51536",
    email: "info@dhanamtech.com",
    timing: "Sun – Thu: 8:30 AM – 5:30 PM"
  },
];

const projectDomains = [
  { label: "Big Data & Distributed Computing", href: "/bigdata-ieee-projects-2018-2019-in-chennai" },
  { label: "AI & Machine Learning IEEE Projects", href: "#" },
  { label: "IoT & Raspberry Pi Robotics Projects", href: "/ieee-2022-2023-raspberry-pi-projects-in-chennai" },
  { label: "Python & Deep Learning Systems", href: "#" },
  { label: "Cloud Computing & Cyber Security", href: "/ieee-cloud-sim-project-list-2022-2023-in-chennai" },
  { label: "Java Full Stack Web Applications", href: "/2024-2025-java-ieee-projects" },
  { label: "VLSI & Digital Signal Processing", href: "/vlsi-ieee-project-2022-2023" },
  { label: "Power Electronics & EV Systems", href: "/2022-2023-power-electronics-projects" },
];

const studentServices = [
  { label: "Technical Blogs & IoT Protocols", href: "/blogs" },
  { label: "100% IEEE Base Paper Implementation", href: "#" },
  { label: "Source Code & PPT Documentation", href: "#" },
  { label: "Viva Voice & Publication Support", href: "#" },
  { label: "Hardware Kit Demo & Courier", href: "#" },
  { label: "PhD / MS Thesis Research Guidance", href: "#" },
];

const socials = [
  { Component: Facebook3DSquircle, label: "Facebook", href: "https://facebook.com" },
  { Component: Instagram3DSquircle, label: "Instagram", href: "https://instagram.com" },
  { Component: YouTube3DSquircle, label: "YouTube", href: "https://youtube.com" },
  { Component: LinkedIn3DSquircle, label: "LinkedIn", href: "https://linkedin.com" },
  { Component: WhatsApp3DSquircle, label: "WhatsApp", href: "https://wa.me/919751800789" },
];

/* =========================================================================
   MAIN FOOTER COMPONENT
   ========================================================================= */

export default function Footer() {
  const [activeLoc, setActiveLoc] = useState(0);
  const loc = locations[activeLoc];

  return (
    <footer className="relative bg-[#020617] text-white pt-16 pb-8 border-t border-sky-500/20 overflow-hidden font-['Outfit',_sans-serif]">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            1. TOP CTA HERO BANNER (3D GLASSMORPHIC STRIP)
            ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-6 sm:p-8 md:p-10 mb-14 bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-blue-900/80 border border-sky-400/30 backdrop-blur-xl shadow-2xl shadow-blue-950/50 overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/2 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-xs sm:text-sm font-black text-sky-300 uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                IEEE 2025–2026 Admissions Open
              </span>
              <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                Transform Your Academic Project Into <span className="bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#60a5fa] bg-clip-text text-transparent">IEEE Excellence</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-2 font-medium">
                Get guaranteed base paper implementation, end-to-end source code, hardware circuit fabrication, and personal viva guidance by 15+ years experienced IEEE experts.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <motion.a
                href="https://wa.me/919751800789?text=Hi%2C%20I%20want%20to%20book%20my%20IEEE%202025%20Project%20Title"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#25d366] to-[#16a34a] text-white font-black text-sm sm:text-base shadow-lg shadow-green-600/30 hover:shadow-green-500/50 transition-all no-underline cursor-pointer"
              >
                <span>WhatsApp Expert</span>
                <ArrowOutwardIcon sx={{ fontSize: 18 }} />
              </motion.a>

              <motion.a
                href="tel:+919751800789"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all no-underline cursor-pointer"
              >
                <span>Call Helpline</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            2. MAIN 4-COLUMN FOOTER GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* ---------------- COLUMN 1: BRAND BIO & SOCIAL ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-between space-y-6"
          >
            <div>
              {/* Brand Logo */}
              <a href="/" className="inline-block mb-4 no-underline">
                <img 
                  src={Logo} 
                  alt="1 Crore Projects - Best IEEE Project Centre" 
                  className="h-12 sm:h-14 w-auto object-contain brightness-110 drop-shadow-[0_2px_12px_rgba(2,132,199,0.5)]"
                />
              </a>

              <p className="text-slate-300 text-sm sm:text-[14.5px] leading-relaxed font-normal mb-4">
                India's premier ISO certified IEEE project center guiding <strong>BE, B.Tech, ME, M.Tech, MCA, and PhD scholars</strong> across AI, Machine Learning, Embedded IoT, Robotics, VLSI, and Cloud systems.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.08] border border-sky-400/30 text-xs sm:text-sm font-bold text-sky-200 shadow-xs">
                  <VerifiedIcon sx={{ fontSize: 16 }} className="text-[#00e5ff]" />
                  <span>ISO 9001:2015</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.08] border border-sky-400/30 text-xs sm:text-sm font-bold text-sky-200 shadow-xs">
                  <VerifiedIcon sx={{ fontSize: 16 }} className="text-[#00e5ff]" />
                  <span>Govt. Registered</span>
                </span>
              </div>
            </div>

            {/* 3D Social Media Icons */}
            <div>
              <span className="text-xs sm:text-sm font-extrabold text-slate-300 uppercase tracking-widest block mb-3">
                Follow &amp; Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {socials.map(({ Component, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                    className="cursor-pointer shadow-md rounded-2xl transition-all duration-300 no-underline"
                  >
                    <Component className="w-11 h-11" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---------------- COLUMN 2: POPULAR PROJECT DOMAINS ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <TechCube3DIcon className="w-8 h-8 shrink-0" />
              <h4 className="font-['Outfit'] font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                IEEE Domains 2025
              </h4>
            </div>

            <ul className="space-y-2 list-none p-0 m-0">
              {projectDomains.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-slate-300 hover:text-[#00f0ff] py-1 transition-all duration-200 no-underline"
                  >
                    <ChevronRightIcon sx={{ fontSize: 16 }} className="text-[#0284c7] group-hover:text-[#00f0ff] group-hover:translate-x-1.5 transition-all duration-200 shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ---------------- COLUMN 3: STUDENT SERVICES & GUIDANCE ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <GradCap3DIcon className="w-8 h-8 shrink-0" />
              <h4 className="font-['Outfit'] font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                Student Services
              </h4>
            </div>

            <ul className="space-y-2 list-none p-0 m-0">
              {studentServices.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-slate-300 hover:text-[#00f0ff] py-1 transition-all duration-200 no-underline"
                  >
                    <ChevronRightIcon sx={{ fontSize: 16 }} className="text-[#0284c7] group-hover:text-[#00f0ff] group-hover:translate-x-1.5 transition-all duration-200 shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ---------------- COLUMN 4: BRANCH OFFICES & REACH US ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <OfficeBuilding3DIcon className="w-8 h-8 shrink-0" />
              <h4 className="font-['Outfit'] font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                Reach Our Offices
              </h4>
            </div>

            {/* City Selection Tabs - Kept on the Same Row */}
            <div className="flex flex-nowrap items-center gap-1 sm:gap-1.5 mb-3.5 w-full">
              {locations.map((l, i) => (
                <button
                  key={l.tag}
                  onClick={() => setActiveLoc(i)}
                  className={`flex-1 text-center whitespace-nowrap px-1.5 sm:px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs md:text-[13px] font-extrabold transition-all duration-300 cursor-pointer ${
                    i === activeLoc
                      ? "bg-gradient-to-r from-[#ff8200] to-[#f97316] text-white shadow-md shadow-orange-500/25 border border-orange-400/50"
                      : "bg-white/[0.06] text-slate-300 hover:text-white hover:bg-white/[0.12] border border-white/5"
                  }`}
                >
                  {l.tag}
                </button>
              ))}
            </div>

            {/* 3D Glassmorphic Location Card */}
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl p-4 sm:p-5 border border-white/15 backdrop-blur-xl mb-3.5 shadow-xl hover:border-sky-400/40 transition-all">
              <div className="flex items-start gap-3">
                <Location3DGlossy className="w-11 h-11 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-['Outfit'] font-black text-sm sm:text-base text-white mb-1 leading-snug">
                    {loc.name}
                  </h5>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300 mb-2 font-medium">
                    {loc.lines.join(", ")}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-sky-400">
                    <AccessTimeIcon sx={{ fontSize: 15 }} className="text-[#00e5ff]" />
                    <span>{loc.timing}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contacts with 3D Squircles */}
            <div className="space-y-2">
              <a
                href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3 text-sm sm:text-[15px] text-slate-200 hover:text-[#00f0ff] transition-all p-1.5 rounded-xl hover:bg-white/[0.05] no-underline group"
              >
                <Phone3DGlossy className="w-9 h-9 shrink-0 group-hover:scale-105 transition-transform" />
                <span className="font-extrabold text-sm sm:text-[15px]">{loc.displayPhone}</span>
              </a>

              <a
                href={`mailto:${loc.email}`}
                className="flex items-center gap-3 text-sm sm:text-[15px] text-slate-200 hover:text-[#00f0ff] transition-all p-1.5 rounded-xl hover:bg-white/[0.05] no-underline group"
              >
                <Email3DGlossy className="w-9 h-9 shrink-0 group-hover:scale-105 transition-transform" />
                <span className="font-semibold text-sm sm:text-[14.5px]">{loc.email}</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* =========================================================================
            3. BOTTOM TRUST BAR & COPYRIGHT
            ========================================================================= */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-medium">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <span>© {new Date().getFullYear()} <strong className="text-white font-extrabold">DLK Technologies Pvt. Ltd.</strong> All rights reserved.</span>
          </div>

          {/* City Indicators */}
          <div className="flex items-center gap-4 text-xs sm:text-sm font-bold">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              Chennai HQ
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff8200] shadow-[0_0_8px_#ff8200]" />
              Kumbakonam
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_8px_#0284c7]" />
              Bahrain (GCC)
            </span>
          </div>

          {/* Quick Policy Links */}
          <div className="flex items-center gap-3.5 text-xs sm:text-sm">
            <a href="#privacy" className="text-slate-400 hover:text-white transition-colors no-underline font-medium">
              Privacy Policy
            </a>
            <span className="text-slate-600">•</span>
            <a href="#terms" className="text-slate-400 hover:text-white transition-colors no-underline font-medium">
              Terms &amp; Conditions
            </a>
            <span className="text-slate-600">•</span>
            <a href="#sitemap" className="text-slate-400 hover:text-white transition-colors no-underline font-medium">
              Sitemap
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}
