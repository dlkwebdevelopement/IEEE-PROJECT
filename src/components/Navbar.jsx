import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import logo1 from "../assets/1-Crore-logo-e1637388598739.png";
import ieeeImg from "../assets/ieee_img.jpg__1320x740_q95_crop_subsampling-2_upscale.jpg.jpeg";
import { API_BASE } from '../api';

/* =========================================================================
   CLEAN 3D SQUIRCLE ICONS (SHADOW-FREE & OUTLINE/ROUND-WHITE FREE)
   Features:
   - Volumetric 3D squircle geometry with smooth curvature
   - Rich satin gradients without harsh highlights or round white spots
   - Zero drop-shadows for a crisp, modern, ultra-clean aesthetic
   - Crisp white / gold embossed iconography
   ========================================================================= */

// 1. 3D NAVY BLUE COMPASS TILE (BEST PROJECT CENTRE)
function Compass3DGlossy({ className = "w-13 h-13" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="compassTileGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#compassTileGrad)" />
      <g>
        {/* Cardinals */}
        <line x1="32" y1="15" x2="32" y2="19" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="45" x2="32" y2="49" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="15" y1="32" x2="19" y2="32" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="45" y1="32" x2="49" y2="32" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        {/* 3D Compass Needles */}
        <polygon points="32,32 40,19 33,31" fill="#ef4444" />
        <polygon points="32,32 40,19 31,33" fill="#f87171" />
        <polygon points="32,32 24,45 31,33" fill="#ffffff" />
        <polygon points="32,32 24,45 33,31" fill="#cbd5e1" />
        {/* Center Golden Jewel */}
        <circle cx="32" cy="32" r="3.5" fill="#fde047" />
      </g>
    </svg>
  );
}

// 2. 3D NAVY BLUE EMAIL TILE (E-MAIL US)
function Email3DGlossy({ className = "w-13 h-13" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="emailTileGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#emailTileGrad)" />
      <g>
        <rect x="17" y="21" width="30" height="22" rx="4" fill="#ffffff" />
        <path d="M17 23 L32 35 L47 23" stroke="#2563eb" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 41 L27 32 M46 41 L37 32" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="35" r="4.2" fill="#fde047" />
        <text x="32" y="37" fontSize="5" fontWeight="bold" fill="#1e3a8a" textAnchor="middle">@</text>
      </g>
    </svg>
  );
}

// 3. 3D NAVY BLUE PHONE TILE (CALL US & DRAWER HELPLINE)
function Phone3DGlossy({ className = "w-13 h-13" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="phoneNavGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#phoneNavGrad)" />
      <g>
        <path d="M22 25 C23 23, 26 23.5, 27.5 26 L29 29 C30 30.5, 29.5 31.5, 28.5 32.5 L27 34 C28.5 37.5, 31.5 40.5, 35 42 L36.5 40.5 C37.5 39.5, 38.5 39, 40 40 L43 41.5 C45.5 43, 46 46, 44 47.5 C40.5 50.5, 34 48.5, 27 41.5 C20 34.5, 18 28, 22 25 Z" fill="#ffffff" />
        <path d="M37 21 C41 23, 44 26, 46 30" stroke="#fde047" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M41 17 C47 20, 51 25, 53 31" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 4. 3D NAVY BLUE HOME SQUIRCLE (NAV HOME PILL)
function Home3DGlossy({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="homeNavTile" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#homeNavTile)" />
      <g>
        <path d="M32 17 L16 30 L19 33 L32 22 L45 33 L48 30 Z" fill="#ffffff" />
        <rect x="39" y="19" width="3.5" height="7" rx="1" fill="#fde047" />
        <path d="M21 30 V46 H43 V30" fill="#ffffff" />
        <path d="M28 46 V36 C28 34, 30 33, 32 33 C34 33, 36 34, 36 36 V46 Z" fill="#0284c7" />
        <circle cx="34.5" cy="41" r="1.2" fill="#fde047" />
      </g>
    </svg>
  );
}

// 5. 3D NAVY BLUE BOOK SQUIRCLE (BOOK COURSES CTA)
function Book3DGlossy({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bookNavTile" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#bookNavTile)" />
      <g>
        <path d="M19 23 C24 21, 29 22, 32 25 C35 22, 40 21, 45 23 V42 C40 40, 35 41, 32 44 C29 41, 24 40, 19 42 Z" fill="#ffffff" />
        <line x1="32" y1="25" x2="32" y2="44" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="28" x2="28" y2="28" stroke="#fde047" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="22" y1="33" x2="29" y2="33" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="35" y1="28" x2="42" y2="28" stroke="#fde047" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="35" y1="33" x2="41" y2="33" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M32 25 V35 L34 33 L36 35 V25" fill="#ef4444" />
      </g>
    </svg>
  );
}

// 7. 3D NAVY BLUE AWARD BADGE TILE (DRAWER ARCHIVE HEADER)
function BadgeAward3DGlossy({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="awardTileNav" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#awardTileNav)" />
      <g>
        <path d="M26 33 L22 47 L28 44 L31 46 L30 35 Z" fill="#ffffff" />
        <path d="M38 33 L42 47 L36 44 L33 46 L34 35 Z" fill="#ffffff" />
        <circle cx="32" cy="27" r="11.5" fill="#ffffff" />
        <circle cx="32" cy="27" r="8.5" fill="#fde047" />
        <polygon points="32,21 33.5,25 38,25 34.5,27.5 36,32 32,29.5 28,32 29.5,27.5 26,25 30.5,25" fill="#d97706" />
      </g>
    </svg>
  );
}

// 8. 3D NAVY BLUE TECH BLOG PEN TILE (DRAWER BLOG CARD)
function BlogPen3DGlossy({ className = "w-9.5 h-9.5" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blogTileNav" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#blogTileNav)" />
      <g>
        <rect x="18" y="17" width="24" height="30" rx="3.5" fill="#ffffff" />
        <line x1="22" y1="24" x2="34" y2="24" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="29" x2="32" y2="29" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="34" x2="30" y2="34" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 18 L47 21 L34 38 L29 40 L31 35 Z" fill="#fde047" stroke="#ffffff" strokeWidth="1" />
      </g>
    </svg>
  );
}

// 9. 3D NAVY BLUE SPARKLE TILE (LATEST 2024-2025 YEAR CARDS)
function Sparkle3DGlossy({ className = "w-9.5 h-9.5" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sparkleNavTile" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#sparkleNavTile)" />
      <g>
        <path d="M32 16 C32 23.5, 33 27, 41 27 C33 27, 32 30.5, 32 38 C32 30.5, 31 27, 23 27 C31 27, 32 23.5, 32 16 Z" fill="#ffffff" />
        <path d="M41 33 C41 36.5, 42 38, 46 38 C42 38, 41 39.5, 41 43 C41 39.5, 40 38, 36 38 C40 38, 41 36.5, 41 33 Z" fill="#fde047" />
        <circle cx="23" cy="20" r="1.8" fill="#fde047" />
      </g>
    </svg>
  );
}

// 10. 3D NAVY BLUE TROPHY TILE (POPULAR 2022-2023 YEAR CARDS)
function Trophy3DGlossy({ className = "w-9.5 h-9.5" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="trophyNavTile" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#trophyNavTile)" />
      <g>
        <path d="M22 20 H42 V29 C42 35, 37 38, 32 38 C27 38, 22 35, 22 29 Z" fill="#ffffff" />
        <path d="M22 22 C17 22, 17 30, 22 30" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M42 22 C47 22, 47 30, 42 30" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="29" y="38" width="6" height="5" fill="#fde047" />
        <rect x="24" y="43" width="16" height="4.5" rx="2" fill="#ffffff" />
        <polygon points="32,24 33.2,26.5 35.8,26.5 33.7,28.2 34.5,30.8 32,29.2 29.5,30.8 30.3,28.2 28.2,26.5 30.8,26.5" fill="#fde047" />
      </g>
    </svg>
  );
}

// 11. 3D NAVY BLUE CALENDAR TILE (ARCHIVE YEAR CARDS)
function Calendar3DGlossy({ className = "w-9.5 h-9.5" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="calNavTile" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#calNavTile)" />
      <g>
        <rect x="18" y="21" width="28" height="26" rx="4" fill="#ffffff" />
        <rect x="18" y="21" width="28" height="8" rx="4" fill="#38bdf8" />
        <rect x="23" y="17" width="3" height="6" rx="1.5" fill="#fde047" />
        <rect x="31" y="17" width="3" height="6" rx="1.5" fill="#fde047" />
        <rect x="39" y="17" width="3" height="6" rx="1.5" fill="#fde047" />
        <circle cx="24" cy="34" r="1.8" fill="#94a3b8" />
        <circle cx="32" cy="34" r="1.8" fill="#94a3b8" />
        <circle cx="40" cy="34" r="1.8" fill="#94a3b8" />
        <circle cx="24" cy="40" r="1.8" fill="#94a3b8" />
        <circle cx="32" cy="40" r="2.2" fill="#38bdf8" />
        <circle cx="40" cy="40" r="1.8" fill="#94a3b8" />
      </g>
    </svg>
  );
}

// 12. 3D SOCIAL TILES (NAVY BLUE THEMED)
function WhatsApp3DGlossy({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="waNavGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#waNavGrad)" />
      <g>
        <path d="M32 17 C23.7 17 17 23.7 17 32 C17 34.8 17.8 37.4 19.1 39.7 L17.5 45.5 L23.5 43.9 C26 45.5 28.9 46.5 32 46.5 C40.3 46.5 47 39.8 47 31.5 C47 23.2 40.3 17 32 17 Z" fill="#ffffff" />
        <path d="M26.5 25 C26 23.8 25.5 23.8 24.8 23.8 C24.2 23.8 23.5 24 23 24.5 C22.5 25.1 21 26.5 21 29.5 C21 32.5 23.2 35.3 23.5 35.7 C23.8 36.1 27.8 42.2 33.9 44.8 C39 47 40 45.8 41.2 45.6 C42.3 45.5 44.8 44.1 45.3 42.6 C45.8 41.1 45.8 39.8 45.7 39.6 C45.5 39.4 45.2 39.3 44.5 39 C43.8 38.6 40.5 37 39.9 36.8 C39.3 36.6 38.8 36.5 38.4 37.1 C37.9 37.8 36.7 39.3 36.3 39.7 C35.9 40.2 35.5 40.2 34.8 39.9 C34.1 39.6 31.9 38.8 29.2 36.4 C27.1 34.5 25.7 32.2 25.3 31.5 C24.9 30.8 25.3 30.4 25.6 30.1 C25.9 29.8 26.3 29.3 26.6 28.9 C27 28.5 27.1 28.2 27.3 27.7 C27.5 27.2 27.4 26.7 27.2 26.4 C27 26.1 26.9 25.9 26.5 25 Z" fill="#22c55e" />
      </g>
    </svg>
  );
}

function Facebook3DGlossy({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fbNavGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#fbNavGrad)" />
      <g>
        <path d="M37 28 H42 V22 H36 C32.5 22 30 24.5 30 28.5 V32 H25 V38 H30 V49 H37 V38 H41.5 L42.5 32 H37 V28.8 C37 28.3 37.4 28 37 28 Z" fill="#ffffff" />
      </g>
    </svg>
  );
}

function TwitterX3DGlossy({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="twNavGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#twNavGrad)" />
      <g>
        <path d="M38.8 20 H44 L32.6 33.1 L46 47 H35.6 L27.4 37.2 L18.1 47 H13 L25.1 33.1 L12 20 H22.6 L30.1 29.1 L38.8 20 Z M37 44 H39.8 L21.2 23 H18.2 L37 44 Z" fill="#ffffff" />
      </g>
    </svg>
  );
}

function YouTube3DGlossy({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ytNavGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#ytNavGrad)" />
      <g>
        <rect x="17" y="22" width="30" height="20" rx="6" fill="#ffffff" />
        <polygon points="29,27 38,32 29,37" fill="#dc2626" />
      </g>
    </svg>
  );
}

function Instagram3DGlossy({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="igNavGrad" x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#1e40af" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect x="5" y="4" width="54" height="54" rx="17" fill="url(#igNavGrad)" />
      <g>
        <rect x="20" y="20" width="24" height="24" rx="7" stroke="#ffffff" strokeWidth="3" fill="none" />
        <circle cx="32" cy="32" r="5.5" stroke="#ffffff" strokeWidth="3" fill="none" />
        <circle cx="39" cy="25" r="1.8" fill="#ffffff" />
      </g>
    </svg>
  );
}

/* =========================================================================
   DEFAULT NAVIGATION DATA & CONFIGURATIONS
   ========================================================================= */

const defaultCategories = [
  "Java IEEE projects",
  "Big Data IEEE projects",
  "Dotnet IEEE projects",
  "NS2 IEEE projects",
  "NS3 IEEE projects",
  "SDN IEEE projects",
  "Matlab IEEE projects",
  "IOT IEEE projects",
  "Embedded Systems projects",
  "Python Projects in Chennai",
  "VLSI IEEE Projects",
  "Raspberry Pi I IEEE Projects",
  "Power Electronics IEEE Projects",
  "CLOUD SIM IEEE PROJECT",
  "Web Application Frameworks"
];

const defaultApplicationProjects = [
  { name: "BCA PROJECTS", hasYears: true },
  { name: "BSC PROJECTS", hasYears: true },
  { name: "MCA PROJECTS", hasYears: true },
  { name: "MSC PROJECTS", hasYears: true },
  { name: "BE Projects in Chennai" },
  { name: "Final Year Projects in Chennai" },
  { name: "BTech Projects in Chennai" },
  { name: "Student Projects in Chennai" },
  { name: "College Projects in Chennai" },
  { name: "ME Projects in Chennai" },
  { name: "MTech Projects in Chennai" },
  { name: "BSc Projects in Chennai" },
  { name: "CSE Projects in Chennai" },
  { name: "ECE Projects in Chennai" },
  { name: "Mini projects in Chennai" },
  { name: "EEE Projects in Chennai" },
  { name: "Bulk Projects in Chennai" },
  { name: "Engineering Projects in Chennai" },
  { name: "Diploma Projects in Chennai" },
  { name: "Matlab Projects in Chennai" },
  { name: "Embedded Projects in Chennai" }
];

const defaultYears = [
  "IEEE 2013 – 2014",
  "IEEE 2014 – 2015",
  "IEEE 2015 – 2016",
  "IEEE 2016 – 2017",
  "IEEE 2017 – 2018",
  "IEEE 2018 – 2019",
  "IEEE 2019 – 2020",
  "IEEE 2020 – 2021",
  "IEEE 2021 – 2022",
  "IEEE 2022 – 2023",
  "IEEE 2024 – 2025"
];

const sidebarYears = [
  { label: "IEEE 2020 – 2021", link: "/bca-ieee-projects-2020-2021-in-chennai" },
  { label: "IEEE 2021 – 2022", link: "/ieee-bca-project-list-2021-2022" },
  { label: "IEEE 2022 – 2023", link: "/2022-2023-java-ieee-projects" },
  { label: "IEEE 2024 – 2025", link: "/2024-2025-java-ieee-projects" },
  { label: "IEEE 2019 – 2020", link: "/2022-2023-java-ieee-projects" },
  { label: "IEEE 2018 – 2019", link: "/2022-2023-java-ieee-projects" },
  { label: "IEEE 2017 – 2018", link: "/2022-2023-java-ieee-projects" },
  { label: "IEEE 2016 – 2017", link: "/2022-2023-java-ieee-projects" },
  { label: "IEEE 2015 – 2016", link: "/2022-2023-java-ieee-projects" },
  { label: "IEEE 2014 – 2015", link: "/2022-2023-java-ieee-projects" },
  { label: "IEEE 2013 – 2014", link: "/2022-2023-java-ieee-projects" }
];

const drawerVariants = {
  hidden: { x: "100%", opacity: 0.8 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 26, 
      stiffness: 220,
      staggerChildren: 0.04,
      delayChildren: 0.08
    } 
  },
  exit: { 
    x: "100%", 
    opacity: 0,
    transition: { duration: 0.22, ease: "easeInOut" } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 28, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 260 } 
  }
};

export default function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Track active section based on current route or homepage scroll position (ScrollSpy)
  useEffect(() => {
    if (location.pathname !== "/") {
      const p = location.pathname.toLowerCase();
      if (p.includes("blog")) {
        setActiveSection("blogs");
      } else if (p.includes("ieee-projects") || p.includes("java")) {
        setActiveSection("ieee-projects");
      } else if (p.includes("bca") || p.includes("bsc") || p.includes("application")) {
        setActiveSection("application-projects");
      } else if (p.includes("diploma")) {
        setActiveSection("diploma-projects");
      } else if (p.includes("contact")) {
        setActiveSection("project-center");
      } else {
        setActiveSection("home");
      }
      return;
    }

    const sectionMap = [
      { id: "contact", section: "project-center" },
      { id: "technology", section: "python-project" },
      { id: "about", section: "application-projects" },
      { id: "projects", section: "ieee-projects" },
      { id: "home", section: "home" },
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of sectionMap) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.section);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleSectionClick = (e, sectionId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Lock body scroll and listen for Escape key when sidebar is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSidebarOpen]);
  
  const defaultGroupedCategories = {
    "IEEE Projects": defaultCategories.map(c => ({ name: c })),
    "Application Projects": defaultApplicationProjects,
    "Diploma Projects": [{ name: "Mechanical" }, { name: "Electrical" }, { name: "Computer Science" }, { name: "Electronics" }],
    "Mechanical Projects": [{ name: "Design" }, { name: "Thermal" }, { name: "Manufacturing" }, { name: "Automobile" }],
    "Bio Medical Projects": [{ name: "Image Processing" }, { name: "Signal Processing" }, { name: "Biometrics" }, { name: "Robotics" }],
    "EIE / ICE Projects": [{ name: "Instrumentation" }, { name: "Control Systems" }, { name: "Process Control" }, { name: "Automation" }],
    "Arts & Science Projects": [{ name: "B.Sc" }, { name: "B.C.A" }, { name: "M.Sc" }, { name: "M.C.A" }, { name: "B.Com" }, { name: "B.B.A" }, { name: "M.B.A" }, { name: "M.Com" }],
    "Domain": [{ name: "Data Science" }, { name: "Machine Learning" }, { name: "Blockchain" }],
    "Python Project": [{ name: "Core Python" }, { name: "Django / Flask" }],
    "Project center": [{ name: "Chennai" }, { name: "Coimbatore" }, { name: "Madurai" }]
  };

  const applicationYears = [
    "IEEE 2020-2021",
    "IEEE 2021-2022",
    "IEEE 2022 – 2023"
  ];

  const isYearCategory = (catName) => {
    const norm = (catName || '').trim().toUpperCase();
    return (
      norm === "BCA PROJECTS" ||
      norm === "BSC PROJECTS" ||
      norm === "MCA PROJECTS" ||
      norm === "MSC PROJECTS" ||
      norm === "BCA" ||
      norm === "BSC" ||
      norm === "MCA" ||
      norm === "MSC"
    );
  };

  const getFlyoutYearLink = (categoryName, yearStr) => {
    const normCat = (categoryName || '').trim().toUpperCase();
    const yClean = (yearStr || '').replace(/\s+/g, '').replace(/–/g, '-');

    if (normCat.includes("BCA")) {
      if (yClean.includes("2020-2021")) return "/bca-ieee-projects-2020-2021-in-chennai";
      if (yClean.includes("2021-2022")) return "/ieee-bca-project-list-2021-2022";
      if (yClean.includes("2022-2023")) return "/2022-2023-java-ieee-projects";
      return "/2022-2023-java-ieee-projects";
    }

    if (normCat.includes("BSC")) {
      if (yClean.includes("2020-2021")) return "/bsc-ieee-projects-2020-2021-in-chennai";
      if (yClean.includes("2021-2022")) return "/ieee-bca-project-list-2021-2022";
      if (yClean.includes("2022-2023")) return "/2022-2023-java-ieee-projects";
      return "/2022-2023-java-ieee-projects";
    }

    if (yClean.includes("2020-2021")) return "/bca-ieee-projects-2020-2021-in-chennai";
    if (yClean.includes("2021-2022")) return "/ieee-bca-project-list-2021-2022";
    return "/2024-2025-java-ieee-projects";
  };

  // Dynamic categories object
  const [groupedCategories, setGroupedCategories] = useState(defaultGroupedCategories);
  const [years, setYears] = useState(defaultYears);
  const [isBackendConnected, setIsBackendConnected] = useState(false);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

  // Fetch dynamic navbar items from Backend API (Laravel / Standalone PHP)
  useEffect(() => {
    let isMounted = true;

    const fetchNavbarCategories = async () => {
      // Endpoints to attempt in order of preference
      const cleanBase = (API_BASE || '').replace(/\/+$/, '');
      const baseWithoutApi = cleanBase.replace(/\/api\/?$/, '');

      const candidateUrls = [
        `${cleanBase}/navbar.php`,
        `${cleanBase}/navbar`,
        baseWithoutApi ? `${baseWithoutApi}/backend/api/navbar.php` : null,
        baseWithoutApi ? `${baseWithoutApi}/navbar.php` : null,
      ].filter(Boolean);

      for (const url of candidateUrls) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const json = await response.json();
            if (!isMounted) return;

            // Handle wrapped response: { data: { categories: ..., years: ... } } or direct { categories: ..., years: ... }
            const data = (json && json.data && typeof json.data === 'object' && !Array.isArray(json.data)) 
              ? json.data 
              : json;

            let categoriesFound = false;

            if (data && data.categories && typeof data.categories === 'object') {
              setGroupedCategories(prev => {
                const updated = { ...prev };
                Object.keys(data.categories).forEach(menuKey => {
                  const backendItems = data.categories[menuKey];
                  if (!Array.isArray(backendItems) || backendItems.length === 0) return;

                  categoriesFound = true;

                  if (menuKey === "Application Projects") {
                    const list = defaultApplicationProjects.map(d => ({ ...d }));
                    backendItems.forEach(b => {
                      const bName = typeof b === 'string' ? b : b.name;
                      if (!bName) return;
                      const existingIndex = list.findIndex(
                        item => item.name.trim().toLowerCase() === bName.trim().toLowerCase()
                      );
                      if (existingIndex >= 0) {
                        list[existingIndex] = { ...list[existingIndex], ...(typeof b === 'object' ? b : { name: bName }) };
                      } else {
                        list.push(typeof b === 'object' ? b : { name: bName });
                      }
                    });
                    updated[menuKey] = list;
                  } else {
                    updated[menuKey] = backendItems.map(item =>
                      typeof item === 'string' ? { name: item } : item
                    );
                  }
                });
                return updated;
              });
            }

            if (data && data.years && Array.isArray(data.years) && data.years.length > 0) {
              const parsedYears = data.years
                .map(yr => (typeof yr === 'string' ? yr : (yr.year_label || yr.name || '')))
                .filter(Boolean);
              if (parsedYears.length > 0) {
                setYears(parsedYears);
              }
            }

            setIsBackendConnected(true);
            return; // Successfully connected to backend API
          }
        } catch (error) {
          // Continue to next fallback candidate URL
        }
      }

      if (isMounted) {
        setIsBackendConnected(false);
        console.warn(
          "Backend API is not reachable at", API_BASE, 
          "- Running in standalone fallback mode with default navbar categories."
        );
      }
    };

    fetchNavbarCategories();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="font-sans w-full relative z-[100]">
      {/* =========================================================================
          TOP BAR - CRISP CLEAN LIGHT UI (NO SHADOWS, NO ROUND WHITE REFLECTIONS)
          ========================================================================= */}
      <div className="w-full bg-white border-b border-slate-200 relative z-[101]">
        <div className="flex justify-between items-center px-3 sm:px-6 lg:px-8 py-2 lg:py-2.5 max-w-[1440px] mx-auto">
          
          {/* Brand Logos (Left - Prominent & Crisp) */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 py-0.5">
            <Link to="/" className="!no-underline flex items-center group">
              <img 
                src={ieeeImg} 
                alt="IEEE Project Centre" 
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <div className="h-9 w-[1.5px] bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-1.5 group">
              <img 
                src={logo1} 
                alt="1 Crore Projects" 
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <SchoolIcon className="text-[#0284c7] -mt-3 -ml-2 hidden sm:block" sx={{ fontSize: 24 }} />
            </div>
          </div>

          {/* Top Contact Actions (Right - Clean 3D Squircle Icons Without Shadows or White Highlights) */}
          <div className="hidden lg:flex gap-5 xl:gap-8 items-center">
            
            {/* Item 1: Best Project Centre */}
            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Compass3DGlossy className="w-13 h-13 xl:w-14 xl:h-14" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] xl:text-[16.5px] text-slate-900 font-black leading-tight tracking-tight group-hover:text-[#0284c7] transition-colors">
                  Best Project Centre
                </span>
                <span className="text-[12px] xl:text-[13px] font-bold text-[#0284c7] mt-0.5 leading-tight flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] inline-block animate-pulse" />
                  IEEE Projects in Chennai
                </span>
              </div>
            </div>

            {/* Item 2: Email Us */}
            <a 
              href="mailto:satheeshkumar@dlktech.co.in" 
              className="flex items-center gap-3.5 group cursor-pointer !no-underline"
            >
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Email3DGlossy className="w-13 h-13 xl:w-14 xl:h-14" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] xl:text-[11.5px] font-black text-[#ea580c] uppercase tracking-wider leading-none mb-1">
                  E-Mail Us :
                </span>
                <span className="text-[14px] xl:text-[15px] text-slate-900 font-black group-hover:text-[#ea580c] transition-colors leading-tight">
                  satheeshkumar@dlktech.co.in
                </span>
              </div>
            </a>

            {/* Item 3: Call Us */}
            <a 
              href="tel:7299981536" 
              className="flex items-center gap-3.5 group cursor-pointer !no-underline"
            >
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Phone3DGlossy className="w-13 h-13 xl:w-14 xl:h-14" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] xl:text-[11.5px] font-black text-emerald-600 uppercase tracking-wider leading-none mb-1">
                  CALL US :
                </span>
                <span className="text-[17px] xl:text-[18.5px] text-slate-900 font-black group-hover:text-[#10b981] transition-colors leading-tight tracking-tight">
                  +91 72999 81536
                </span>
              </div>
            </a>
            
          </div>
        </div>
      </div>

      {/* =========================================================================
          NAV BAR - DEEP CYBER NAVY WITH CLEAN FLAT ACCENTS (SHADOW REMOVED)
          ========================================================================= */}
      <nav className="w-full bg-gradient-to-r from-[#071933] via-[#0a2347] to-[#071830] relative z-[105] border-b border-cyan-500/20">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 text-white flex justify-between items-center h-13 xl:h-14">
          <ul className="hidden lg:flex gap-1 xl:gap-2.5 2xl:gap-4.5 text-[12px] xl:text-[12.5px] 2xl:text-[13.5px] font-semibold items-center mb-0 pl-0 h-full">
            
            {/* Active Pill for Home */}
            <li className="flex items-center h-full">
              <Link 
                to="/" 
                onClick={(e) => handleSectionClick(e, "home")}
                className={`flex items-center gap-1.5 h-8.5 xl:h-9 px-3.5 xl:px-4 rounded-full transition-all duration-300 !no-underline mr-0.5 xl:mr-1 ${
                  activeSection === "home"
                    ? "bg-gradient-to-r from-[#0062ff] via-[#0284c7] to-[#00c6ff] text-white font-bold border border-cyan-300/30"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`}
              >
                <Home3DGlossy className="w-5 h-5 shrink-0" />
                <span>Home</span>
              </Link>
            </li>

            {/* IEEE Projects Mega Dropdown (Active Section Aware) */}
            <li className="group flex items-center cursor-pointer whitespace-nowrap h-full relative px-0.5 xl:px-1">
              <div 
                onClick={(e) => handleSectionClick(e, "projects")}
                className={`flex items-center h-8.5 xl:h-9 px-2.5 xl:px-3 rounded-full transition-all duration-300 ${
                  activeSection === "ieee-projects"
                    ? "bg-gradient-to-r from-[#0062ff] via-[#0284c7] to-[#00c6ff] text-white font-bold border border-cyan-300/30"
                    : "text-slate-200 hover:text-[#00e5ff] hover:bg-white/10"
                }`}
              >
                <span>IEEE Projects</span>
                <span className="ml-1 text-[9px] xl:text-[10px] opacity-75 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </div>
              
              {/* Dropdown Flyout (Clean Border, Overflow Visible for Nested Submenus) */}
              <div className="absolute top-full left-0 hidden group-hover:block bg-white text-slate-800 rounded-2xl border border-slate-200 min-w-[270px] z-[70] shadow-xl overflow-visible">
                <div className="h-1 bg-gradient-to-r from-[#0284c7] via-[#ff8200] to-[#ea580c] w-full rounded-t-2xl" />
                <ul className="py-2 mb-0 pl-0">
                  {(groupedCategories["IEEE Projects"] || []).map((category, index) => {
                    const isOpen = hoveredSubCategory === `ieee-${index}`;
                    return (
                      <li 
                        key={index} 
                        className={`nav-subgroup group/sub relative ${isOpen ? 'is-open' : ''}`}
                        onMouseEnter={() => setHoveredSubCategory(`ieee-${index}`)}
                        onMouseLeave={() => setHoveredSubCategory(null)}
                      >
                        <div className={`nav-sub-item px-4 py-2.5 text-[13px] font-semibold transition-colors duration-150 cursor-pointer flex justify-between items-center border-b border-slate-100 last:border-0 ${
                          isOpen ? "bg-[#ff8200] text-white" : "text-slate-700 hover:bg-[#ff8200] hover:text-white"
                        }`}>
                          <span>{category.name}</span>
                          <span className={`nav-sub-arrow text-[16px] leading-none transition-all ${
                            isOpen ? "text-white" : "text-slate-400 group-hover/sub:text-white"
                          }`}>›</span>
                        </div>
                        
                        {/* Secondary Dropdown (Years) */}
                        <div className={`nav-subflyout absolute top-0 left-full bg-white text-slate-800 rounded-2xl border border-slate-200 min-w-[200px] z-[80] ml-1 overflow-hidden shadow-2xl ${isOpen ? '!block' : 'hidden group-hover/sub:block'}`}>
                          <div className="h-1 bg-gradient-to-r from-[#ff8200] to-[#ea580c] w-full" />
                          <ul className="py-2 mb-0 pl-0">
                            {years.map((year, yIndex) => {
                              let targetLink = "#";
                              const catLower = ((category && category.name) || "").toLowerCase();
                              const yClean = (year || "").replace(/\s+/g, "").replace(/–/g, "-");

                              if (catLower.includes("java")) {
                                if (yClean.includes("2024-2025")) targetLink = "/2024-2025-java-ieee-projects";
                                else if (yClean.includes("2022-2023")) targetLink = "/2022-2023-java-ieee-projects";
                                else targetLink = `/2022-2023-java-ieee-projects?year=${encodeURIComponent(year)}`;
                              } else if (catLower.includes("bigdata") || catLower.includes("big data")) {
                                if (yClean.includes("2024-2025")) targetLink = "/2024-2025-big-data-projects-chennai";
                                else if (yClean.includes("2022-2023")) targetLink = "/ieee-bigdata-project-list-2022-2023";
                                else if (yClean.includes("2021-2022")) targetLink = "/ieee-bigdata-project-list-2021-2022";
                                else if (yClean.includes("2020-2021")) targetLink = "/ieee-bigdata-project-list-2020-2021";
                                else if (yClean.includes("2019-2020")) targetLink = "/bigdata-ieee-projects-2019-2020-in-chennai";
                                else if (yClean.includes("2018-2019")) targetLink = "/bigdata-ieee-projects-2018-2019-in-chennai";
                                else targetLink = "/2024-2025-big-data-projects-chennai";
                              } else if (catLower.includes("bca")) {
                                if (yClean.includes("2020-2021")) targetLink = "/bca-ieee-projects-2020-2021-in-chennai";
                                else if (yClean.includes("2021-2022")) targetLink = "/ieee-bca-project-list-2021-2022";
                                else targetLink = "/2024-2025-java-ieee-projects";
                              } else if (catLower.includes("bsc")) {
                                if (yClean.includes("2020-2021")) targetLink = "/bsc-ieee-projects-2020-2021-in-chennai";
                                else targetLink = "/2024-2025-java-ieee-projects";
                              } else {
                                targetLink = `/2024-2025-java-ieee-projects?category=${encodeURIComponent(category.name || "")}&year=${encodeURIComponent(year)}`;
                              }

                              return (
                                <li key={yIndex}>
                                  <Link 
                                    to={targetLink}
                                    className="block px-4 py-2 text-[13px] font-semibold hover:bg-orange-50 hover:text-[#ff8200] transition-colors cursor-pointer border-b border-slate-100 last:border-0 !no-underline text-slate-700"
                                  >
                                    {year}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            {/* Application Projects Dropdown with Secondary Year Flyouts */}
            <li className="group flex items-center cursor-pointer whitespace-nowrap h-full relative px-0.5 xl:px-1">
              <div 
                onClick={(e) => handleSectionClick(e, "about")}
                className={`flex items-center h-8.5 xl:h-9 px-2.5 xl:px-3 rounded-full transition-all duration-300 ${
                  activeSection === "application-projects"
                    ? "bg-gradient-to-r from-[#0062ff] via-[#0284c7] to-[#00c6ff] text-white font-bold border border-cyan-300/30"
                    : "text-slate-200 hover:text-[#ff8200] hover:bg-white/10"
                }`}
              >
                <span>Application Projects</span>
                <span className="ml-1 text-[9px] xl:text-[10px] opacity-75 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white text-slate-800 rounded-2xl border border-slate-200 min-w-[270px] z-[70] shadow-xl overflow-visible">
                <div className="h-1 bg-gradient-to-r from-[#0284c7] via-[#ff8200] to-[#ea580c] w-full rounded-t-2xl" />
                <ul className="py-2 mb-0 pl-0">
                  {(groupedCategories["Application Projects"] || defaultApplicationProjects).map((cat, idx) => {
                    const hasYears = Boolean(cat.hasYears || isYearCategory(cat.name));
                    const isOpen = hoveredSubCategory === `app-${idx}`;
                    return (
                      <li 
                        key={idx} 
                        className={`nav-subgroup group/sub relative ${isOpen ? 'is-open' : ''}`}
                        onMouseEnter={() => setHoveredSubCategory(`app-${idx}`)}
                        onMouseLeave={() => setHoveredSubCategory(null)}
                      >
                        <div className={`nav-sub-item px-4 py-2 text-[13px] font-semibold transition-colors duration-150 cursor-pointer flex justify-between items-center border-b border-slate-100 last:border-0 ${
                          isOpen ? "bg-[#ff8200] text-white" : "text-slate-700 hover:bg-[#ff8200] hover:text-white"
                        }`}>
                          <span>{cat.name}</span>
                          {hasYears && (
                            <span className={`nav-sub-arrow text-[16px] leading-none font-bold ml-2 transition-all ${
                              isOpen ? "text-white" : "text-[#ea580c] group-hover/sub:text-white"
                            }`}>›</span>
                          )}
                        </div>

                        {/* Secondary Dropdown (Years Flyout) */}
                        {hasYears && (
                          <div className={`nav-subflyout absolute top-0 left-full bg-white text-slate-800 rounded-2xl border border-slate-200 min-w-[200px] z-[80] ml-1 overflow-hidden shadow-2xl ${isOpen ? '!block' : 'hidden group-hover/sub:block'}`}>
                            <div className="h-1 bg-gradient-to-r from-[#ff8200] to-[#ea580c] w-full" />
                            <ul className="py-2 mb-0 pl-0">
                              {(years && years.length > 0 ? years : applicationYears).map((year, yIndex) => {
                                const targetLink = getFlyoutYearLink(cat.name, year);
                                return (
                                  <li key={yIndex}>
                                    <Link 
                                      to={targetLink}
                                      className="block px-4 py-2 text-[13px] font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#ff8200] transition-colors cursor-pointer border-b border-slate-100 last:border-0 !no-underline"
                                    >
                                      {year}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            {/* Diploma Projects Dropdown */}
            <li className="group flex items-center cursor-pointer whitespace-nowrap h-full relative px-0.5 xl:px-1">
              <div 
                className={`flex items-center h-8.5 xl:h-9 px-2.5 xl:px-3 rounded-full transition-all duration-300 ${
                  activeSection === "diploma-projects"
                    ? "bg-gradient-to-r from-[#0062ff] via-[#0284c7] to-[#00c6ff] text-white font-bold border border-cyan-300/30"
                    : "text-slate-200 hover:text-[#ff8200] hover:bg-white/10"
                }`}
              >
                <span>Diploma Projects</span>
                <span className="ml-1 text-[9px] xl:text-[10px] opacity-75 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white text-slate-800 rounded-2xl border border-slate-200 min-w-[230px] z-[70] shadow-xl overflow-visible">
                <div className="h-1 bg-gradient-to-r from-[#0284c7] via-[#ff8200] to-[#ea580c] w-full rounded-t-2xl" />
                <ul className="py-2 mb-0 pl-0">
                  {(groupedCategories["Diploma Projects"] || defaultGroupedCategories["Diploma Projects"]).map((cat, idx) => {
                    const isOpen = hoveredSubCategory === `diploma-${idx}`;
                    return (
                      <li 
                        key={idx} 
                        className={`nav-subgroup group/sub relative ${isOpen ? 'is-open' : ''}`}
                        onMouseEnter={() => setHoveredSubCategory(`diploma-${idx}`)}
                        onMouseLeave={() => setHoveredSubCategory(null)}
                      >
                        <div className={`nav-sub-item px-4 py-2 text-[13px] font-semibold transition-colors duration-150 cursor-pointer flex justify-between items-center border-b border-slate-100 last:border-0 ${
                          isOpen ? "bg-[#ff8200] text-white" : "text-slate-700 hover:bg-[#ff8200] hover:text-white"
                        }`}>
                          <span>{cat.name}</span>
                          <span className={`nav-sub-arrow text-[16px] leading-none font-bold ml-2 transition-all ${
                            isOpen ? "text-white" : "text-[#ea580c] group-hover/sub:text-white"
                          }`}>›</span>
                        </div>
                        {/* Secondary Dropdown (Years Flyout) */}
                        <div className={`nav-subflyout absolute top-0 left-full bg-white text-slate-800 rounded-2xl border border-slate-200 min-w-[200px] z-[80] ml-1 overflow-hidden shadow-2xl ${isOpen ? '!block' : 'hidden group-hover/sub:block'}`}>
                          <div className="h-1 bg-gradient-to-r from-[#ff8200] to-[#ea580c] w-full" />
                          <ul className="py-2 mb-0 pl-0">
                            {(years && years.length > 0 ? years : applicationYears).map((year, yIndex) => (
                              <li key={yIndex}>
                                <Link 
                                  to={`/2024-2025-java-ieee-projects?category=${encodeURIComponent(cat.name || "Diploma")}`}
                                  className="block px-4 py-2 text-[13px] font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#ff8200] transition-colors cursor-pointer border-b border-slate-100 last:border-0 !no-underline"
                                >
                                  {year}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            {/* Training (Active Section Aware) */}
            <li className="flex items-center cursor-pointer whitespace-nowrap h-full px-0.5 xl:px-1">
              <div 
                onClick={(e) => handleSectionClick(e, "technology")}
                className={`flex items-center h-8.5 xl:h-9 px-2.5 xl:px-3 rounded-full transition-all duration-300 ${
                  activeSection === "training"
                    ? "bg-gradient-to-r from-[#0062ff] via-[#0284c7] to-[#00c6ff] text-white font-bold border border-cyan-300/30"
                    : "text-slate-200 hover:text-[#ff8200] hover:bg-white/10"
                }`}
              >
                <span>Training</span>
              </div>
            </li>

            {/* Domain Dropdown */}
            <li className="group flex items-center cursor-pointer whitespace-nowrap h-full relative px-0.5 xl:px-1">
              <div 
                onClick={(e) => handleSectionClick(e, "about")}
                className={`flex items-center h-8.5 xl:h-9 px-2.5 xl:px-3 rounded-full transition-all duration-300 ${
                  activeSection === "domain"
                    ? "bg-gradient-to-r from-[#0062ff] via-[#0284c7] to-[#00c6ff] text-white font-bold border border-cyan-300/30"
                    : "text-slate-200 hover:text-[#ff8200] hover:bg-white/10"
                }`}
              >
                <span>Domain</span>
                <span className="ml-1 text-[9px] xl:text-[10px] opacity-75 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white text-slate-800 rounded-2xl border border-slate-200 min-w-[210px] z-50 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-[#0284c7] via-[#ff8200] to-[#ea580c] w-full" />
                <ul className="py-2 mb-0 pl-0">
                  {(groupedCategories["Domain"] || defaultGroupedCategories["Domain"]).map((item, i) => {
                    const itemName = typeof item === 'string' ? item : item.name;
                    return (
                      <li key={i}>
                        <Link
                          to={`/2024-2025-java-ieee-projects?domain=${encodeURIComponent(itemName)}`}
                          className="block px-4 py-2.5 text-[13px] font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#ff8200] transition-colors cursor-pointer border-b border-slate-100 last:border-0 !no-underline"
                        >
                          {itemName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            {/* Python Project Dropdown */}
            <li className="group flex items-center cursor-pointer whitespace-nowrap h-full relative px-0.5 xl:px-1">
              <div 
                onClick={(e) => handleSectionClick(e, "technology")}
                className={`flex items-center h-8.5 xl:h-9 px-2.5 xl:px-3 rounded-full transition-all duration-300 ${
                  activeSection === "python-project"
                    ? "bg-gradient-to-r from-[#0062ff] via-[#0284c7] to-[#00c6ff] text-white font-bold border border-cyan-300/30"
                    : "text-slate-200 hover:text-[#ff8200] hover:bg-white/10"
                }`}
              >
                <span>Python Project</span>
                <span className="ml-1 text-[9px] xl:text-[10px] opacity-75 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </div>
              <div className="absolute top-full right-0 xl:left-0 hidden group-hover:block bg-white text-slate-800 rounded-2xl border border-slate-200 min-w-[210px] z-50 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-[#0284c7] via-[#ff8200] to-[#ea580c] w-full" />
                <ul className="py-2 mb-0 pl-0">
                  {(groupedCategories["Python Project"] || defaultGroupedCategories["Python Project"]).map((item, i) => {
                    const itemName = typeof item === 'string' ? item : item.name;
                    return (
                      <li key={i}>
                        <Link
                          to={`/2024-2025-java-ieee-projects?category=${encodeURIComponent(itemName)}`}
                          className="block px-4 py-2.5 text-[13px] font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#ff8200] transition-colors cursor-pointer border-b border-slate-100 last:border-0 !no-underline"
                        >
                          {itemName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            {/* Project center Dropdown */}
            <li className="group flex items-center cursor-pointer whitespace-nowrap h-full relative px-0.5 xl:px-1">
              <div 
                onClick={(e) => handleSectionClick(e, "contact")}
                className={`flex items-center h-8.5 xl:h-9 px-2.5 xl:px-3 rounded-full transition-all duration-300 ${
                  activeSection === "project-center"
                    ? "bg-gradient-to-r from-[#0062ff] via-[#0284c7] to-[#00c6ff] text-white font-bold border border-cyan-300/30"
                    : "text-slate-200 hover:text-[#ff8200] hover:bg-white/10"
                }`}
              >
                <span>Project center</span>
                <span className="ml-1 text-[9px] xl:text-[10px] opacity-75 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </div>
              <div className="absolute top-full right-0 hidden group-hover:block bg-white text-slate-800 rounded-2xl border border-slate-200 min-w-[210px] z-50 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-[#0284c7] via-[#ff8200] to-[#ea580c] w-full" />
                <ul className="py-2 mb-0 pl-0">
                  {(groupedCategories["Project center"] || defaultGroupedCategories["Project center"]).map((item, i) => {
                    const itemName = typeof item === 'string' ? item : item.name;
                    return (
                      <li key={i}>
                        <Link
                          to={`/contact?city=${encodeURIComponent(itemName)}`}
                          className="block px-4 py-2.5 text-[13px] font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#ff8200] transition-colors cursor-pointer border-b border-slate-100 last:border-0 !no-underline"
                        >
                          {itemName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

          </ul>

          {/* Mobile branding */}
          <div className="lg:hidden py-3 flex items-center">
            <span className="text-white text-base font-bold tracking-wide">IEEE Project Centre</span>
          </div>

          {/* Right Action Icons & Responsive CTA Buttons (Shadows Removed) */}
          <div className="flex gap-2 sm:gap-2.5 xl:gap-3 shrink-0 items-center">
            {/* 3D Book Courses Button (Round Shape) */}
            <Link 
              to="/contact"
              className="hidden lg:flex bg-gradient-to-r from-[#ff8200] via-[#ea580c] to-[#f97316] hover:brightness-110 text-white px-4 xl:px-5 py-2 rounded-full text-[12px] xl:text-[13px] font-black items-center gap-2 border border-amber-300/30 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 !no-underline"
            >
              <Book3DGlossy className="w-5 h-5 shrink-0" />
              <span>Book Courses</span>
            </Link>

            {/* Drawer Menu Button */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="w-9 h-9 xl:w-9.5 xl:h-9.5 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 border border-white/15"
              title="Open Navigation Menu"
              aria-label="Open Navigation Menu"
            >
              <MenuIcon sx={{ fontSize: 20 }} />
            </button>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          RIGHT-SIDE DRAWER (CLEAN 3D SQUIRCLE ICONS, SHADOWS REMOVED)
          ========================================================================= */}
      <AnimatePresence>
        {isSidebarOpen && (
          <div className="fixed inset-0 z-[120] flex justify-end">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/75"
            />

            {/* Sliding Drawer Container */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-[320px] sm:w-[370px] max-w-[88vw] h-full bg-gradient-to-b from-[#08172e] via-[#0c2347] to-[#061224] text-white border-l border-white/10 flex flex-col justify-between overflow-hidden z-10"
            >
              {/* Header with 3D Brand Badge & Close Button */}
              <div className="flex items-center justify-between p-4 sm:p-5 pb-3.5 border-b border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent shrink-0">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 transition-transform duration-300 hover:scale-105">
                    <BadgeAward3DGlossy className="w-10 h-10 sm:w-11 sm:h-11" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-[16px] sm:text-[17px] tracking-tight leading-tight flex items-center gap-1.5">
                      IEEE Projects
                      <span className="text-[9.5px] uppercase font-black px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ff8200] to-[#ea580c] text-white border border-white/20">
                        Archive
                      </span>
                    </div>
                    <p className="text-slate-300 text-[11px] sm:text-[11.5px] font-medium mb-0">
                      Browse by Academic Year
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-500/20 text-white/80 hover:text-red-400 border border-white/15 hover:border-red-400/50 flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Close menu"
                >
                  <CloseIcon sx={{ fontSize: 20 }} />
                </button>
              </div>

              {/* Scrollable Year Cards */}
              <div className="px-3.5 sm:px-4 py-3 sm:py-4 flex flex-col space-y-2 overflow-y-auto overflow-x-hidden flex-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                
                {/* Blogs Shortcut Card */}
                <motion.div variants={itemVariants}>
                  <Link
                    to="/blogs"
                    onClick={() => setIsSidebarOpen(false)}
                    className="group relative flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-purple-500/20 via-indigo-500/15 to-purple-500/10 text-white font-bold border border-purple-400/30 hover:border-purple-400/60 hover:bg-purple-500/25 transition-all duration-300 !no-underline hover:scale-[1.01]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <BlogPen3DGlossy className="w-9.5 h-9.5 sm:w-10 sm:h-10" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] sm:text-[15px] font-extrabold text-white tracking-wide">
                          Technical Blogs & Insights
                        </span>
                        <span className="text-[10px] text-purple-200 font-semibold">
                          IoT, MQTT, FPGA & Deep Learning
                        </span>
                      </div>
                    </div>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white border border-white/20">
                      NEW
                    </span>
                  </Link>
                </motion.div>

                {sidebarYears.map((item, index) => {
                  const isLinkActive = location.pathname === item.link;
                  const isLatest = item.label.includes("2024") || item.label.includes("2025");
                  const isPopular = item.label.includes("2022") || item.label.includes("2023");

                  return (
                    <motion.div key={index} variants={itemVariants}>
                      <Link
                        to={item.link}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`group relative flex items-center justify-between p-2.5 sm:p-3 rounded-2xl transition-all duration-300 !no-underline border ${
                          isLinkActive
                            ? "bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] text-white font-bold border-amber-300/60 translate-x-1 scale-[1.01]"
                            : "bg-gradient-to-r from-white/[0.05] to-white/[0.02] text-slate-100 hover:text-white border-white/10 hover:border-amber-400/40 hover:bg-gradient-to-r hover:from-white/[0.12] hover:to-white/[0.05] hover:translate-x-1.5"
                        }`}
                        style={{ textDecoration: "none" }}
                      >
                        {/* Left: 3D Squircle Icon & Year Label */}
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                            {isLatest ? (
                              <Sparkle3DGlossy className="w-9.5 h-9.5 sm:w-10 sm:h-10" />
                            ) : isPopular ? (
                              <Trophy3DGlossy className="w-9.5 h-9.5 sm:w-10 sm:h-10" />
                            ) : (
                              <Calendar3DGlossy className="w-9.5 h-9.5 sm:w-10 sm:h-10" />
                            )}
                          </div>

                          <div className="flex flex-col">
                            <span
                              className={`font-sans text-[14px] sm:text-[15px] tracking-wide transition-colors ${
                                isLinkActive
                                  ? "text-white font-extrabold"
                                  : "text-slate-100 font-semibold group-hover:text-white"
                              }`}
                            >
                              {item.label}
                            </span>
                            {isLatest && !isLinkActive && (
                              <span className="text-[9.5px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping inline-block" />
                                Latest Titles
                              </span>
                            )}
                            {isPopular && !isLinkActive && (
                              <span className="text-[9.5px] text-cyan-400 font-semibold uppercase tracking-wider">
                                Popular Projects
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right: Chevron Arrow / Badge */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          {isLatest && (
                            <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md bg-gradient-to-r from-red-500 to-amber-500 text-white border border-white/20">
                              NEW
                            </span>
                          )}
                          
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              isLinkActive
                                ? "bg-white/25 text-white"
                                : "bg-white/5 text-slate-400 group-hover:bg-[#ff8200] group-hover:text-white group-hover:translate-x-1"
                            }`}
                          >
                            <ChevronRightIcon sx={{ fontSize: 18 }} />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Support & Social Squircles */}
              <div className="px-4 sm:px-5 pt-3.5 pb-5 border-t border-white/10 bg-gradient-to-t from-black/50 via-[#071326]/80 to-transparent shrink-0 space-y-3">
                {/* Helpline Card */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="shrink-0 transition-transform duration-300 hover:scale-105">
                      <Phone3DGlossy className="w-9.5 h-9.5 sm:w-10 sm:h-10" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                        Quick Helpline
                      </div>
                      <a 
                        href="tel:+917299981536" 
                        className="text-[13px] font-black text-white hover:text-[#10b981] transition-colors !no-underline block leading-tight"
                      >
                        +91 72999 81536
                      </a>
                    </div>
                  </div>
                  <a
                    href="tel:+917299981536"
                    className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-white text-[11px] font-extrabold uppercase hover:scale-105 active:scale-95 transition-all !no-underline flex items-center gap-1 border border-emerald-300/30"
                  >
                    Call
                  </a>
                </div>

                {/* Floating Social Squircles */}
                <div>
                  <div className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 text-center mb-2">
                    Connect With Us
                  </div>
                  <div className="flex items-center justify-center gap-2.5">
                    <a
                      href="https://wa.me/917299981536"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer !no-underline"
                      aria-label="WhatsApp"
                    >
                      <WhatsApp3DGlossy className="w-10 h-10 sm:w-10.5 sm:h-10.5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer !no-underline"
                      aria-label="Facebook"
                    >
                      <Facebook3DGlossy className="w-10 h-10 sm:w-10.5 sm:h-10.5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer !no-underline"
                      aria-label="Twitter"
                    >
                      <TwitterX3DGlossy className="w-10 h-10 sm:w-10.5 sm:h-10.5" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer !no-underline"
                      aria-label="YouTube"
                    >
                      <YouTube3DGlossy className="w-10 h-10 sm:w-10.5 sm:h-10.5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer !no-underline"
                      aria-label="Instagram"
                    >
                      <Instagram3DGlossy className="w-10 h-10 sm:w-10.5 sm:h-10.5" />
                    </a>
                  </div>
                </div>

                {/* Backend Connection Status Badge */}
                <div className="flex items-center justify-center gap-2 pt-1 border-t border-white/5">
                  <span className={`w-2 h-2 rounded-full ${isBackendConnected ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {isBackendConnected ? "Backend Connected" : "Offline / Default Mode"}
                  </span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
