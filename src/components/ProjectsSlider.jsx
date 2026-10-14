import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VerifiedIcon from "@mui/icons-material/Verified";
import BoltIcon from "@mui/icons-material/Bolt";
import LaunchIcon from "@mui/icons-material/Launch";

import embeddedImg from "../assets/ECE.png";
import javaImg from "../assets/JAVA.png";
import webImg from "../assets/WEB.png";
import dotnetImg from "../assets/.NET.png";
import cloudImg from "../assets/CLOUD.png";
import { API_BASE } from "../api";

/* =========================================================================
   3D MULTI-COLOR VOLUMETRIC ICONS (HIGH-END 3D SHADING & DEPTH)
   ========================================================================= */

// 0. EXACT 3D SQUIRCLE SHIELD CHECK ICON (MATCHING USER REFERENCE IMAGE)
export function ShieldCheckSquircleIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={`shrink-0 drop-shadow-[0_4px_10px_rgba(37,99,235,0.38)] ${className}`} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="userSquircleBg" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="35%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      {/* 3D Rounded Squircle Tile */}
      <rect x="2" y="2" width="44" height="44" rx="14" fill="url(#userSquircleBg)" />
      {/* Top Specular Inner Rim */}
      <rect x="3" y="3" width="42" height="42" rx="13" stroke="#ffffff" strokeOpacity="0.32" strokeWidth="1.5" />
      {/* Solid White Shield */}
      <path
        d="M24 10.5 L34 14 V22.5 C34 29 29.5 35 24 37 C18.5 35 14 29 14 22.5 V14 L24 10.5 Z"
        fill="#ffffff"
      />
      {/* Vibrant Royal Blue Checkmark inside Shield */}
      <path
        d="M19 23.5 L22.5 27 L29 19.5"
        stroke="#2563eb"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 1. 3D ECE / EMBEDDED SYSTEMS MICROCHIP ICON (BLUE PALETTE)
function Ece3DIcon({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="ece3dShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0052cc" floodOpacity="0.25" />
        </filter>
        <linearGradient id="eceSubstrate3D" x1="10" y1="10" x2="62" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="bluePin3D" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="coreHeatSink3D" x1="20" y1="20" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* 3D Blue Connector Pins */}
      <rect x="21" y="3" width="5.5" height="8" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="33.2" y="3" width="5.5" height="8" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="45.5" y="3" width="5.5" height="8" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="21" y="61" width="5.5" height="8" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="33.2" y="61" width="5.5" height="8" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="45.5" y="61" width="5.5" height="8" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="3" y="21" width="8" height="5.5" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="3" y="33.2" width="8" height="5.5" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="3" y="45.5" width="8" height="5.5" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="61" y="21" width="8" height="5.5" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="61" y="33.2" width="8" height="5.5" rx="1.5" fill="url(#bluePin3D)" />
      <rect x="61" y="45.5" width="8" height="5.5" rx="1.5" fill="url(#bluePin3D)" />

      {/* 3D Chip Substrate Body (Crisp White with Royal Blue Stroke) */}
      <rect x="9" y="9" width="54" height="54" rx="12" fill="url(#eceSubstrate3D)" stroke="#2563eb" strokeWidth="2" filter="url(#ece3dShadow)" />
      
      {/* Internal Metallic Circuit Lines in Royal Blue */}
      <path d="M21 14V22M36 14V22M51 14V22M21 50V58M36 50V58M51 50V58M14 21H22M14 36H22M14 51H22M50 21H58M50 36H58M50 51H58" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" />
      
      {/* Raised Silicon Core */}
      <rect x="22" y="22" width="28" height="28" rx="7" fill="url(#coreHeatSink3D)" stroke="#93c5fd" strokeWidth="2" />
      
      {/* 3D Core Lens */}
      <circle cx="36" cy="36" r="7" fill="#ffffff" opacity="0.95" />
      <circle cx="36" cy="36" r="4.5" fill="#0052cc" />
      
      {/* 3D Status LED Indicators (Cyan and Sky Blue) */}
      <circle cx="26" cy="26" r="2.5" fill="#38bdf8" stroke="#bae6fd" strokeWidth="0.8" />
      <circle cx="46" cy="46" r="2.5" fill="#60a5fa" stroke="#dbeafe" strokeWidth="0.8" />
      <circle cx="46" cy="26" r="2" fill="#ffffff" />
    </svg>
  );
}

// 2. 3D JAVA PROJECTS VOLUMETRIC COFFEE CUP & STEAM ICON (BLUE PALETTE)
function Java3DIcon({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="java3dShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0052cc" floodOpacity="0.25" />
        </filter>
        <linearGradient id="javaCupBody3D" x1="14" y1="28" x2="52" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="javaCupSpecular" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="javaCoffee3D" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="70%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
        <linearGradient id="steam3D1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0052cc" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="steam3D2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="60%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="saucer3D" x1="14" y1="58" x2="58" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* Volumetric Saucer Base with 3D Depth */}
      <ellipse cx="36" cy="62" rx="24" ry="5.5" fill="#0f172a" opacity="0.15" />
      <ellipse cx="36" cy="60" rx="24" ry="5.5" fill="url(#saucer3D)" stroke="#bfdbfe" strokeWidth="1" />
      <ellipse cx="36" cy="59" rx="16" ry="3.5" fill="#1d4ed8" />

      {/* 3D Volumetric Luminous Blue Steam Waves */}
      <path d="M33 7 C30 14, 38 18, 34 27" stroke="url(#steam3D1)" strokeWidth="3.5" strokeLinecap="round" filter="url(#java3dShadow)" />
      <path d="M42 10 C39 17, 47 21, 43 28" stroke="url(#steam3D2)" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 14 C22 19, 29 23, 27 28" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />

      {/* Coffee Cup Handle with 3D Bevel */}
      <path d="M50 34 C60 34, 60 46, 50 48" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M50 34 C58 34, 58 46, 50 48" stroke="#cbd5e1" strokeWidth="2.2" strokeLinecap="round" />

      {/* Ceramic Porcelain Mug Body */}
      <path d="M18 30 H54 V43 C54 51.5, 46 56, 36 56 C26 56, 18 51.5, 18 43 Z" fill="url(#javaCupBody3D)" stroke="#ffffff" strokeWidth="1.5" filter="url(#java3dShadow)" />
      
      {/* 3D Curved Specular Highlight Reflection */}
      <path d="M21 31 C22 36, 22 47, 24 51 C22 49, 20 44, 20 33 Z" fill="url(#javaCupSpecular)" />

      {/* Inner Blue Ocean Coffee Pool with 3D Depth */}
      <ellipse cx="36" cy="30" rx="18" ry="4.5" fill="url(#javaCoffee3D)" stroke="#bfdbfe" strokeWidth="1.2" />
      <ellipse cx="36" cy="29.5" rx="14" ry="2.5" fill="#38bdf8" opacity="0.5" />

      {/* Royal Blue 3D Emblem on Cup Front */}
      <circle cx="36" cy="43" r="5.5" fill="#0052cc" opacity="0.15" />
      <circle cx="36" cy="43" r="4" fill="#0052cc" />
      <path d="M34 43.5 L36 41 L38 43.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 3. 3D WEB DEVELOPMENT HOLOGRAPHIC BROWSER & GLOBE ICON (BLUE PALETTE)
function Web3DIcon({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="web3dShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="5" stdDeviation="3" floodColor="#0052cc" floodOpacity="0.25" />
        </filter>
        <linearGradient id="webWindow3D" x1="8" y1="8" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="globeGrad3D" x1="22" y1="24" x2="50" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>

      {/* 3D Browser Window Frame with Drop Shadow */}
      <rect x="8" y="10" width="56" height="52" rx="11" fill="url(#webWindow3D)" stroke="#2563eb" strokeWidth="2" filter="url(#web3dShadow)" />
      <line x1="8" y1="24" x2="64" y2="24" stroke="#2563eb" strokeWidth="1.5" />

      {/* 3D Window Control Jewels in Blue & Ice Blue */}
      <circle cx="16" cy="17" r="3.2" fill="#93c5fd" />
      <circle cx="15.2" cy="16.2" r="1" fill="#ffffff" />
      <circle cx="25" cy="17" r="3.2" fill="#38bdf8" />
      <circle cx="24.2" cy="16.2" r="1" fill="#ffffff" />
      <circle cx="34" cy="17" r="3.2" fill="#2563eb" />
      <circle cx="33.2" cy="16.2" r="1" fill="#ffffff" />

      {/* 3D Luminous Wireframe Globe */}
      <circle cx="36" cy="44" r="14" fill="url(#globeGrad3D)" stroke="#93c5fd" strokeWidth="1.8" />
      <ellipse cx="36" cy="44" rx="7.5" ry="14" stroke="#ffffff" strokeWidth="1.3" />
      <line x1="22" y1="44" x2="50" y2="44" stroke="#ffffff" strokeWidth="1.3" />
      <line x1="25" y1="36" x2="47" y2="36" stroke="#bae6fd" strokeWidth="1.2" />
      <line x1="25" y1="52" x2="47" y2="52" stroke="#bae6fd" strokeWidth="1.2" />

      {/* Floating 3D Code Brackets in Cyan & Royal Blue */}
      <path d="M14 39 L8 44 L14 49" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 39 L64 44 L58 49" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 4. 3D .NET FRAMEWORK CRYSTALLINE PRISM ICON (BLUE PALETTE)
function Dotnet3DIcon({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="dotnet3dShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="5" stdDeviation="3.5" floodColor="#0052cc" floodOpacity="0.3" />
        </filter>
        <linearGradient id="dotnetHex3D" x1="12" y1="8" x2="60" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="dotnetInnerCore3D" x1="24" y1="24" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="50%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* Outer 3D Hexagonal Crystal Shield */}
      <polygon points="36,4 66,20 66,52 36,68 6,52 6,20" fill="url(#dotnetHex3D)" stroke="#2563eb" strokeWidth="2.5" filter="url(#dotnet3dShadow)" />
      
      {/* Inner Chamber Facet */}
      <polygon points="36,13 57,25 57,47 36,59 15,47 15,25" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.8" />

      {/* Floating 3D Quartz Cube Core */}
      <rect x="25" y="25" width="22" height="22" rx="5" fill="url(#dotnetInnerCore3D)" stroke="#ffffff" strokeWidth="1.8" />
      
      {/* Illuminated Bus Pulse Lines */}
      <line x1="36" y1="13" x2="36" y2="25" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="36" y1="47" x2="36" y2="59" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="36" x2="25" y2="36" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="47" y1="36" x2="57" y2="36" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round" />

      {/* Center Core Node */}
      <circle cx="36" cy="36" r="4.5" fill="#ffffff" />
      <circle cx="36" cy="36" r="2.5" fill="#2563eb" />
    </svg>
  );
}

// 5. 3D CLOUD COMPUTING MULTI-TIER STORAGE ICON (BLUE PALETTE)
function Cloud3DIcon({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="cloud3dShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0052cc" floodOpacity="0.25" />
        </filter>
        <linearGradient id="cloudBody3D" x1="14" y1="6" x2="58" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f0f9ff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>

      {/* Volumetric 3D Cloud Top */}
      <path
        d="M52 35 C58 35, 63 30.5, 63 25 C63 19.8, 59 15.5, 54 15 C52 8.5, 46 4, 38.5 4 C30.5 4, 24 9, 22.5 16 C17.5 16.5, 13 20.5, 13 26 C13 31.5, 17.5 35, 22.5 35 Z"
        fill="url(#cloudBody3D)"
        stroke="#2563eb"
        strokeWidth="2"
        filter="url(#cloud3dShadow)"
      />
      <path d="M26 14 C28 8, 35 6, 42 6 C47 6, 51 9, 52 14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

      {/* Database Tier 2 (Bottom Disc) */}
      <path d="M16 52 C16 47 25 45 36 45 C47 45 56 47 56 52 V59 C56 64 47 66 36 66 C25 66 16 64 16 59 Z" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="1.8" />
      <ellipse cx="36" cy="52" rx="20" ry="5.5" fill="#2563eb" stroke="#93c5fd" strokeWidth="1.2" />
      <circle cx="22" cy="59" r="2.2" fill="#38bdf8" />
      <circle cx="28" cy="59" r="2.2" fill="#ffffff" />

      {/* Database Tier 1 (Middle Disc) */}
      <path d="M16 39 C16 34 25 32 36 32 C47 32 56 34 56 39 V46 C56 51 47 53 36 53 C25 53 16 51 16 46 Z" fill="#2563eb" stroke="#38bdf8" strokeWidth="1.8" />
      <ellipse cx="36" cy="39" rx="20" ry="5.5" fill="#38bdf8" stroke="#bae6fd" strokeWidth="1.2" />
      <circle cx="22" cy="46" r="2.2" fill="#ffffff" />
      <circle cx="28" cy="46" r="2.2" fill="#93c5fd" />

      {/* Dynamic 3D Sync Arrow */}
      <path d="M54 26 L58 30 L50 30" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 6. DYNAMIC GENERAL TECH 3D CUBE (FOR CUSTOM TITLES - BLUE PALETTE)
function TechCube3DIcon({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="cube3dShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="5" stdDeviation="3.5" floodColor="#0052cc" floodOpacity="0.25" />
        </filter>
        <linearGradient id="cubeTop3D" x1="36" y1="6" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id="cubeLeft3D" x1="6" y1="22" x2="36" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="cubeRight3D" x1="36" y1="22" x2="66" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <g filter="url(#cube3dShadow)">
        <polygon points="36,6 66,22 36,38 6,22" fill="url(#cubeTop3D)" stroke="#bae6fd" strokeWidth="1.8" />
        <polygon points="6,22 36,38 36,66 6,50" fill="url(#cubeLeft3D)" stroke="#38bdf8" strokeWidth="1.8" />
        <polygon points="36,38 66,22 66,50 36,66" fill="url(#cubeRight3D)" stroke="#2563eb" strokeWidth="1.8" />
      </g>
      <circle cx="36" cy="22" r="3.5" fill="#ffffff" />
      <circle cx="36" cy="38" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
    </svg>
  );
}

/* =========================================================================
   ASSET MAPPER & DOMAIN METADATA (LIGHT UI PALETTE)
   ========================================================================= */

const localImageMap = {
  "ECE PROJECTS": embeddedImg,
  "JAVA PROJECTS": javaImg,
  "WEB DEVELOPMENT": webImg,
  "DOTNET PROJECTS": dotnetImg,
  "CLOUD COMPUTING": cloudImg,
  "/assets/ECE.png": embeddedImg,
  "/assets/JAVA.png": javaImg,
  "/assets/WEB.png": webImg,
  "/assets/.NET.png": dotnetImg,
  "/assets/CLOUD.png": cloudImg,
  "assets/ECE.png": embeddedImg,
  "assets/JAVA.png": javaImg,
  "assets/WEB.png": webImg,
  "assets/.NET.png": dotnetImg,
  "assets/CLOUD.png": cloudImg,
  "ECE.png": embeddedImg,
  "JAVA.png": javaImg,
  "WEB.png": webImg,
  ".NET.png": dotnetImg,
  "CLOUD.png": cloudImg
};

export const resolveProjectImage = (urlOrTitle = "", fallbackTitle = "") => {
  const combined = `${urlOrTitle} ${fallbackTitle}`.toLowerCase();
  if (combined.includes("ece") || combined.includes("embedded") || combined.includes("robotics")) return embeddedImg;
  if (combined.includes("java") || combined.includes("spring")) return javaImg;
  if (combined.includes("web") || combined.includes("php") || combined.includes("react")) return webImg;
  if (combined.includes("dotnet") || combined.includes(".net") || combined.includes("c#")) return dotnetImg;
  if (combined.includes("cloud") || combined.includes("aws") || combined.includes("azure")) return cloudImg;
  return localImageMap[urlOrTitle] || localImageMap[fallbackTitle] || javaImg;
};

const domainMeta = {
  "ECE PROJECTS": {
    badge: "EMBEDDED & HARDWARE",
    tagline: "Robotics, IoT & Microcontrollers",
    accentColor: "#0052cc",
    accentGrad: "from-[#0052cc] via-[#2563eb] to-[#38bdf8]",
    pillBg: "bg-blue-50 text-[#0052cc] border-blue-200/80",
    iconContainer: "bg-gradient-to-b from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] border-t-2 border-white/50 shadow-[0_14px_30px_rgba(37,99,235,0.38)] rounded-[22px]",
    icon: <Ece3DIcon className="w-14 h-14 sm:w-16 sm:h-16" />,
    tags: ["ARM / Arduino / NodeMCU", "IoT & Sensor Networks", "IEEE 2024 - 2025", "Hardware Tested Kit"]
  },
  "JAVA PROJECTS": {
    badge: "ENTERPRISE & CLOUD",
    tagline: "Spring Boot, Microservices & Architecture",
    accentColor: "#0052cc",
    accentGrad: "from-[#0052cc] via-[#2563eb] to-[#38bdf8]",
    pillBg: "bg-blue-50 text-[#0052cc] border-blue-200/80",
    iconContainer: "bg-gradient-to-b from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] border-t-2 border-white/50 shadow-[0_14px_30px_rgba(37,99,235,0.38)] rounded-[22px]",
    icon: <Java3DIcon className="w-14 h-14 sm:w-16 sm:h-16" />,
    tags: ["Java 21 / Spring Boot", "MySQL & Microservices", "IEEE Transactions", "Full Source Code"]
  },
  "WEB DEVELOPMENT": {
    badge: "FULL STACK & WEB APPS",
    tagline: "React, Node.js, Python & Cloud Web",
    accentColor: "#0052cc",
    accentGrad: "from-[#0052cc] via-[#2563eb] to-[#38bdf8]",
    pillBg: "bg-blue-50 text-[#0052cc] border-blue-200/80",
    iconContainer: "bg-gradient-to-b from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] border-t-2 border-white/50 shadow-[0_14px_30px_rgba(37,99,235,0.38)] rounded-[22px]",
    icon: <Web3DIcon className="w-14 h-14 sm:w-16 sm:h-16" />,
    tags: ["React / Node.js / PHP", "Modern UI & Responsive", "Live Cloud Hosting", "Full API Integration"]
  },
  "DOTNET PROJECTS": {
    badge: "MICROSOFT ENTERPRISE",
    tagline: "ASP.NET Core & Tiered Architectures",
    accentColor: "#0052cc",
    accentGrad: "from-[#0052cc] via-[#2563eb] to-[#38bdf8]",
    pillBg: "bg-blue-50 text-[#0052cc] border-blue-200/80",
    iconContainer: "bg-gradient-to-b from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] border-t-2 border-white/50 shadow-[0_14px_30px_rgba(37,99,235,0.38)] rounded-[22px]",
    icon: <Dotnet3DIcon className="w-14 h-14 sm:w-16 sm:h-16" />,
    tags: ["C# / ASP.NET Core", "SQL Server / Entity", "Enterprise Scalable", "Full Documentation"]
  },
  "CLOUD COMPUTING": {
    badge: "DISTRIBUTED SYSTEMS",
    tagline: "Big Data, Cryptography & Cloud Storage",
    accentColor: "#0052cc",
    accentGrad: "from-[#0052cc] via-[#2563eb] to-[#38bdf8]",
    pillBg: "bg-blue-50 text-[#0052cc] border-blue-200/80",
    iconContainer: "bg-gradient-to-b from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] border-t-2 border-white/50 shadow-[0_14px_30px_rgba(37,99,235,0.38)] rounded-[22px]",
    icon: <Cloud3DIcon className="w-14 h-14 sm:w-16 sm:h-16" />,
    tags: ["AWS / Azure / GCP", "Cryptography & Privacy", "Distributed Big Data", "High Scalability"]
  }
};

const defaultSlides = [
  {
    title: "ECE PROJECTS",
    description: "ECE Final Year projects Students ideas Embedded-IEEE Final Year Project Training, ECE Final Year Project Training, ECE Mini Projects in Chennai, B.E ECE Application Based Projects In Chennai and Latest Embedded Systems Technologies, final year projects in chennai, final year engineering projects for embedded system and final year projects for diploma. We also provide projects to M.Tech Embedded Projects for ME Embedded Final Year Projects with real hardware demonstration.",
    link: "https://ieeeprojectcentre.in/embedded-application-projects-in-chennai/",
    image: embeddedImg
  },
  {
    title: "JAVA PROJECTS",
    description: "Java is the object oriented, high-level programming language and design neutral platform developed by Sun Microsystems. Java IEEE final year projects offer platform independence, multi-threading, cloud connectivity, and enterprise-grade architecture. Perfect for students aiming for placements in top MNC software companies with full real-time code implementation.",
    link: "https://ieeeprojectcentre.in/java-ieee-projects-in-chennai/",
    image: javaImg
  },
  {
    title: "WEB DEVELOPMENT",
    description: "Web development refers to the design, building, markup and coding involved in web applications, including frontend UI, web client and server scripting, security, and cloud deployment. Modern final year IEEE web projects are built using React, Node.js, Python, PHP, and high-performance databases tailored for engineering specifications.",
    link: "https://ieeeprojectcentre.in/web-designing-training-in-chennai/",
    image: webImg
  },
  {
    title: "DOTNET PROJECTS",
    description: ".NET Framework and ASP.NET Core project architectures built into scalable assemblies utilized by modern enterprise environments. These IEEE projects incorporate high performance, secure transactions, SQL Server databases, and clean multi-tier architectures designed for engineering and master's degree final year viva reviews.",
    link: "https://ieeeprojectcentre.in/dotnet-ieee-projects-in-chennai/",
    image: dotnetImg
  },
  {
    title: "CLOUD COMPUTING",
    description: "Cloud Computing is the next-generation paradigm where software, databases, and heavy computing loads are managed within secure remote server clusters. Students gain hands-on expertise in cloud data privacy, encrypted storage, virtualization, and distributed microservices with complete documentation and viva assistance.",
    link: "https://ieeeprojectcentre.in/cloud-computing-projects-in-chennai/",
    image: cloudImg
  }
];

export default function ProjectsSlider() {
  const [slides, setSlides] = useState(defaultSlides);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper to retrieve matching metadata or generate dynamic fallback
  const getDomainMeta = (title) => {
    const cleanTitle = (title || "").toUpperCase().trim();
    if (domainMeta[cleanTitle]) return domainMeta[cleanTitle];

    if (cleanTitle.includes("ECE") || cleanTitle.includes("EMBEDDED") || cleanTitle.includes("IOT")) {
      return domainMeta["ECE PROJECTS"];
    }
    if (cleanTitle.includes("JAVA") || cleanTitle.includes("SPRING")) {
      return domainMeta["JAVA PROJECTS"];
    }
    if (cleanTitle.includes("WEB") || cleanTitle.includes("PHP") || cleanTitle.includes("HTML")) {
      return domainMeta["WEB DEVELOPMENT"];
    }
    if (cleanTitle.includes("DOTNET") || cleanTitle.includes(".NET") || cleanTitle.includes("C#")) {
      return domainMeta["DOTNET PROJECTS"];
    }
    if (cleanTitle.includes("CLOUD")) {
      return domainMeta["CLOUD COMPUTING"];
    }

    return {
      badge: "IEEE FINAL YEAR DOMAIN",
      tagline: "Innovative Engineering Project",
      accentColor: "#0052cc",
      accentGrad: "from-[#0052cc] via-[#2563eb] to-[#38bdf8]",
      pillBg: "bg-blue-50 text-[#0052cc] border-blue-200/80",
      iconContainer: "bg-gradient-to-b from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] border-t-2 border-white/50 shadow-[0_14px_30px_rgba(37,99,235,0.38)] rounded-[22px]",
      icon: <TechCube3DIcon className="w-14 h-14 sm:w-16 sm:h-16" />,
      tags: ["IEEE Standard 2024-2025", "Complete Source Code", "PPT & Project Report", "Viva Voce Guidance"]
    };
  };

  // Fetch dynamic slides from backend if available
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE}/projects.php`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            const mappedSlides = data.map((item) => {
              const resolvedImage = resolveProjectImage(item.image_url, item.title);
              const matchingDefault = defaultSlides.find(
                (s) => s.title.toLowerCase().trim() === (item.title || "").toLowerCase().trim()
              );
              const resolvedDescription =
                item.description && !item.description.endsWith("...") && item.description.length > 80
                  ? item.description
                  : matchingDefault
                  ? matchingDefault.description
                  : item.description;

              return {
                title: item.title,
                description: resolvedDescription,
                link: item.link || "https://ieeeprojectcentre.in/",
                image: resolvedImage
              };
            });
            setSlides(mappedSlides);
          }
        }
      } catch (error) {
        console.log("Using default fallback slides because PHP backend isn't running:", error);
      }
    };

    fetchProjects();
  }, []);

  // Continuous Auto-scroll every 5 seconds (5000ms), resets countdown on manual change
  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, slides.length]);

  const currentSlide = slides[currentIndex] || defaultSlides[0];
  const currentMeta = getDomainMeta(currentSlide.title);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section 
      id="projects" 
      className="relative w-full bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#f1f5f9] text-slate-800 py-8 sm:py-10 lg:py-12 overflow-hidden font-sans select-none shadow-sm"
    >
      {/* =========================================================================
          LIGHT AMBIENT BACKGROUND: SUBTLE GRID & SOFT SKY ORBS (NO LINES)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Tech Grid Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] bg-[size:30px_30px]"></div>

        {/* Soft Radiant Light Glow Orbs */}
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-sky-200/40 blur-[130px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-blue-100/50 blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-cyan-100/30 blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">

        {/* =========================================================================
            1. SECTION HEADER (CLEAN MODERN TYPOGRAPHY - NO UNDERLINES)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7 sm:mb-10 flex flex-col items-center"
        >
          {/* Headline */}
          <h2 className="font-['Outfit',_sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#102a4d] tracking-tight uppercase leading-tight">
            OUR BEST IEEE PROJECTS{" "}
            <span className="text-[#ff8200]">
              IN CHENNAI
            </span>
          </h2>

          {/* 3D Title Accent Divider */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-12 h-[3px] bg-gradient-to-r from-transparent to-[#0284c7] rounded-full"></div>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-sky-400 bg-[#0072ff] shadow-[0_0_12px_rgba(2,132,199,0.75)]"></div>
            <div className="w-12 h-[3px] bg-gradient-to-l from-transparent to-[#ff8200] rounded-full"></div>
          </div>
        </motion.div>

        {/* =========================================================================
            2. INTERACTIVE DOMAIN SELECTOR TABS (CLEAN FLAT MODERN PILLS - NO 3D)
            ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full flex items-center justify-start sm:justify-center flex-nowrap overflow-x-auto py-2 px-2 gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-11 max-w-6xl mx-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative shrink-0 whitespace-nowrap flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl font-['Outfit'] font-bold text-xs sm:text-[13px] md:text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0052cc] border border-[#0052cc] text-white shadow-md shadow-blue-500/25"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:text-[#0052cc]"
                }`}
              >
                {isActive ? (
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#0052cc] shrink-0 transition-colors" />
                )}
                <span>{slide.title}</span>
              </button>
            );
          })}
        </motion.div>


        {/* =========================================================================
            3. MAIN SHOWCASE (OPEN SEAMLESS LAYOUT - NO BG CARD / CORNER BRACKETS)
            ========================================================================= */}
        <div className="relative w-full py-2 sm:py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* =====================================================================
                  LEFT CONTENT COLUMN: 3D ICON BADGE, TITLE, SPECS & CTAS
                  ===================================================================== */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* Domain Pill & Tagline */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-bold text-xs tracking-wider uppercase shadow-sm ${currentMeta.pillBg}`}>
                    <ShieldCheckSquircleIcon className="w-4 h-4" />
                    <span>{currentMeta.badge}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    {currentMeta.tagline}
                  </span>
                </div>

                {/* 3D Icon + Bold Title Layout */}
                <div className="flex items-center gap-4 sm:gap-5 mb-3">
                  {/* 3D Squircle Container */}
                  <div className={`w-18 h-18 sm:w-20 sm:h-20 ${currentMeta.iconContainer} flex items-center justify-center shrink-0 hover:scale-105 transition-transform`}>
                    {currentMeta.icon}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-['Outfit',_sans-serif] text-3xl sm:text-4xl lg:text-[46px] font-black text-[#102a4d] uppercase tracking-tight leading-none">
                      {currentSlide.title}
                    </h3>
                    <span className="font-['Outfit'] font-bold text-xs sm:text-sm text-[#0052cc] tracking-wider uppercase mt-1.5 flex items-center gap-1.5">
                      <ShieldCheckSquircleIcon className="w-4 h-4" />
                      100% Real-Time Certified Implementation
                    </span>
                  </div>
                </div>

                {/* Description Text (No Underlines) */}
                <div
                  className="text-slate-600 font-medium text-sm sm:text-base lg:text-[16px] leading-relaxed text-justify mb-6 mt-3 [&>p]:mb-2.5 [&>a]:text-[#0052cc] [&>a]:no-underline hover:[&>a]:underline [&>a]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: currentSlide.description }}
                />

                {/* Feature Highlights Grid with Exact 3D Squircle Shield Check Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-7">
                  {currentMeta.tags.map((tag, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                      <ShieldCheckSquircleIcon className="w-6 h-6 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 w-full">
                  {/* Primary CTA: Explore Titles */}
                  <a
                    href={currentSlide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#0052cc] to-[#0284c7] hover:from-[#0041a8] hover:to-[#02699e] active:scale-95 text-white font-['Outfit'] font-black text-sm sm:text-[15px] tracking-wide flex items-center gap-2.5 shadow-lg shadow-blue-500/25 hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>View IEEE Titles &amp; Modules</span>
                    <LaunchIcon sx={{ fontSize: 18 }} />
                  </a>

                  {/* Secondary CTA: Get Project Abstract */}
                  <button
                    onClick={() => {
                      const el = document.getElementById("enquiry-form") || document.getElementById("contact");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="px-6 py-3 rounded-full bg-white hover:bg-sky-50 border-2 border-blue-400/80 text-[#102a4d] hover:text-[#0052cc] font-['Outfit'] font-bold text-sm sm:text-[15px] tracking-wide flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <AutoAwesomeIcon sx={{ fontSize: 18 }} className="text-[#0052cc]" />
                    <span>Get Free Abstract &amp; PPT</span>
                  </button>
                </div>

              </div>

              {/* =====================================================================
                  RIGHT SHOWCASE COLUMN: TAGS OUT OF IMAGE (TOP & DOWN), NO OUTLINE
                  ===================================================================== */}
              <div className="lg:col-span-5 flex justify-center items-center relative my-4 lg:my-0">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 w-full max-w-[520px] flex flex-col items-center"
                >
                  {/* Soft Radiant Ambient Backdrop Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-sky-400/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

                  {/* Top Tag (Out of Image, No Outline) */}
                  <div className="w-full flex items-center justify-between mb-2.5 px-1 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cc] text-xs font-['Outfit'] font-bold tracking-wide shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#0052cc] animate-pulse" />
                      <span>IEEE Certified 2025</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 font-['Outfit']">
                      Certified Project Module
                    </span>
                  </div>

                  {/* Clean Frameless Project Image (NO Outline, 100% Unobscured) */}
                  <div className="relative z-10 w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,82,204,0.18)]">
                    <img
                      src={resolveProjectImage(currentSlide.image, currentSlide.title)}
                      alt={currentSlide.title}
                      onError={(e) => {
                        const fallback = resolveProjectImage("", currentSlide.title);
                        if (e.target.src !== fallback) {
                          e.target.src = fallback;
                        }
                      }}
                      className="w-full h-auto max-h-[360px] sm:max-h-[410px] object-cover hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Down Tag (Out of Image, No Outline) */}
                  <div className="w-full flex items-center justify-between mt-2.5 px-1 z-10">
                    <div className="flex items-center gap-2">
                      <ShieldCheckSquircleIcon className="w-5 h-5 shrink-0" />
                      <span className="font-['Outfit'] font-bold text-xs sm:text-sm text-[#102a4d] tracking-wide">
                        {currentSlide.title}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#0052cc] bg-blue-50 px-3 py-1 rounded-full shadow-xs">
                      Hardware Tested Kit
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* =========================================================================
              4. SLIDER CONTROLS: PREV / NEXT ARROWS & INDICATORS (PLAY REMOVED)
              ========================================================================= */}
          <div className="flex items-center justify-center gap-5 sm:gap-6 mt-10 sm:mt-12">
            {/* Previous Slide Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#0052cc] border border-slate-200 text-[#102a4d] hover:text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
            </button>

            {/* Pagination Indicators (Active Pill + Dots) */}
            <div className="flex items-center gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? "w-8 bg-gradient-to-r from-[#0052cc] via-[#2563eb] to-[#38bdf8] shadow-md shadow-blue-500/30"
                      : "w-2.5 bg-slate-300 hover:bg-sky-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Slide Button */}
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#0052cc] border border-slate-200 text-[#102a4d] hover:text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}