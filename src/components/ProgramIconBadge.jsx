import React from "react";
import { motion } from "framer-motion";

// ================= REAL HIGH-FIDELITY OFFICIAL BRAND SVG ICONS =================

// 1. Official Oracle Java Coffee Cup Logo (Rich Royal Blue Cup, Red & Orange Steam, Golden Saucer)
export const JavaIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Steam vapors */}
    <path d="M21.5 5C19 8 19.5 10.5 22 13C24.5 15.5 24 17.5 21.5 20" stroke="#EA2D2E" strokeWidth="2.4" strokeLinecap="round"/>
    <path d="M27.5 7C25 10 25.5 12.5 28 14.5C30.5 16.5 30 18.5 27.5 20" stroke="#F89820" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M16 11C14.5 13 15 15 17 17C18.5 18.5 18 19.5 16.5 20.5" stroke="#EA2D2E" strokeWidth="1.8" strokeLinecap="round"/>
    {/* Coffee Cup Body */}
    <path d="M13 22H33.5C33.5 22 34 32.5 23 32.5C12.5 32.5 13 22 13 22Z" fill="#5382A1"/>
    {/* Cup Handle */}
    <path d="M31.5 23.5C36 23.5 38.5 25.5 38.5 28C38.5 30.5 36 31.5 32 31.5" stroke="#5382A1" strokeWidth="3" strokeLinecap="round"/>
    {/* Saucer / Lower Curve */}
    <path d="M9 36C15 40 31 40 37 36" stroke="#F89820" strokeWidth="3.2" strokeLinecap="round"/>
    <path d="M13 39.5C17.5 42.5 28.5 42.5 33 39.5" stroke="#5382A1" strokeWidth="3.2" strokeLinecap="round"/>
  </svg>
);

// 2. Official Python Dual-Snake Logo (Authentic Python Blue #3776AB & Python Yellow #FFD438 with Eye Dots)
export const PythonIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top Snake (Python Blue) */}
    <path d="M23.6 4C15 4 15.4 7.6 15.4 7.6L15.5 11.5H23.8V12.8H11.8C11.8 12.8 4.2 12 4.2 20.5C4.2 29 11 28.6 11 28.6H15.5V25.2C15.5 21.2 19 21.2 19 21.2H27.5C30.8 21.2 32.8 19 32.8 15.8V7.6C32.8 7.6 33.2 4 23.6 4ZM19.8 7.6C21 7.6 22 8.6 22 9.8C22 11 21 12 19.8 12C18.6 12 17.6 11 17.6 9.8C17.6 8.6 18.6 7.6 19.8 7.6Z" fill="#3776AB"/>
    {/* Bottom Snake (Python Yellow) */}
    <path d="M24.4 44C33 44 32.6 40.4 32.6 40.4L32.5 36.5H24.2V35.2H36.2C36.2 35.2 43.8 36 43.8 27.5C43.8 19 37 19.4 37 19.4H32.5V22.8C32.5 26.8 29 26.8 29 26.8H20.5C17.2 26.8 15.2 29 15.2 32.2V40.4C15.2 40.4 14.8 44 24.4 44ZM28.2 40.4C27 40.4 26 39.4 26 38.2C26 37 27 36 28.2 36C29.4 36 30.4 37 30.4 38.2C30.4 39.4 29.4 40.4 28.2 40.4Z" fill="#FFD438"/>
  </svg>
);

// 3. Official PHP Logo (Authentic Purple-Blue Pill with Official "php" Lettering)
export const PhpIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="22" ry="14" fill="url(#realPhpGrad)" stroke="#6C7EB7" strokeWidth="1.5"/>
    <defs>
      <linearGradient id="realPhpGrad" x1="4" y1="12" x2="44" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8892BF"/>
        <stop offset="1" stopColor="#4F5B93"/>
      </linearGradient>
    </defs>
    {/* PHP Letters */}
    <path d="M12.5 28L14.2 19.5H18C20.2 19.5 21.5 20.4 21.2 22.2C20.8 24.3 19.3 25.4 17.2 25.4H15L14.5 28H12.5ZM15.4 23.7H17.1C18.2 23.7 19.1 23.2 19.3 22.2C19.5 21.4 18.8 21.1 17.8 21.1H16L15.4 23.7Z" fill="white"/>
    <path d="M22 28L23.7 19.5H25.7L24.8 24H27.8L28.7 19.5H30.7L29 28H27L27.9 25.6H24.9L24 28H22Z" fill="white"/>
    <path d="M31.5 28L33.2 19.5H37C39.2 19.5 40.5 20.4 40.2 22.2C39.8 24.3 38.3 25.4 36.2 25.4H34L33.5 28H31.5ZM34.4 23.7H36.1C37.2 23.7 38.1 23.2 38.3 22.2C38.5 21.4 37.8 21.1 36.8 21.1H35L34.4 23.7Z" fill="white"/>
  </svg>
);

// 4. Official Microsoft .NET / C# Brand Logo (Rich Purple Circle with Crisp White .NET)
export const DotNetIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#realNetGrad)" stroke="#9333EA" strokeWidth="1.2"/>
    <defs>
      <linearGradient id="realNetGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7C3AED"/>
        <stop offset="1" stopColor="#512BD4"/>
      </linearGradient>
    </defs>
    {/* Dot */}
    <circle cx="11" cy="29" r="2.6" fill="white"/>
    {/* N */}
    <path d="M15.5 17.5H18.8L24.5 26.8V17.5H27.5V30.5H24.5L18.5 21.2V30.5H15.5V17.5Z" fill="white"/>
    {/* E */}
    <path d="M29.5 17.5H37.5V20H32.2V22.8H37V25.2H32.2V28H37.5V30.5H29.5V17.5Z" fill="white"/>
    {/* T */}
    <path d="M37 17.5H45V20H42.5V30.5H39.5V20H37V17.5Z" fill="white"/>
  </svg>
);

// 5. VB.NET Icon (Official Microsoft Visual Basic Diamond & Ribbon)
export const VbNetIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#realVbGrad)" stroke="#38BDF8" strokeWidth="1.2"/>
    <defs>
      <linearGradient id="realVbGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7"/>
        <stop offset="1" stopColor="#0369A1"/>
      </linearGradient>
    </defs>
    <text x="14" y="32" fill="white" fontSize="18" fontWeight="900" fontFamily="system-ui, sans-serif">VB</text>
    <text x="34" y="24" fill="#38BDF8" fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif">NET</text>
  </svg>
);

// 6. Official MySQL Logo (Signature Dolphin Sakila + Deep Blue / Warm Orange Brand)
export const DatabaseIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#realMysqlGrad)" stroke="#0284C7" strokeWidth="1.2"/>
    <defs>
      <linearGradient id="realMysqlGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00758F"/>
        <stop offset="1" stopColor="#004D5E"/>
      </linearGradient>
    </defs>
    {/* Leaping Dolphin (Sakila) in Orange */}
    <path d="M34 11C31.5 9.5 26.5 9.2 21.5 12C16.5 15 13.5 19 12.5 24C11.5 29 13.5 33 15.5 34C15 31 15.5 28 17.5 25C15.5 25.5 14 27 13.5 29C14.5 22 19.5 17 25.5 15C21.5 17 19.5 21 19.5 24C20.5 22 22.5 20 25 19C28.5 17.5 32.5 18 34.5 21C36 18 36.5 14 34 11Z" fill="#F29111"/>
    <path d="M21.5 25C23.5 22 26.5 21 29.5 21.5C31 21.8 32.5 23 33 24.5C30.5 23.5 27.5 24 25 26C23.5 27 22.5 29 22 31C22.5 29 23.5 28 24.5 27.5C22.5 29 22 31.5 22.5 34C20.5 33 18.5 29 19.5 26C20 25.5 20.7 25.2 21.5 25Z" fill="white"/>
    {/* Label: MYSQL */}
    <text x="24" y="42" textAnchor="middle" fill="#F29111" fontSize="9" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1">MYSQL</text>
  </svg>
);

// 7. Official Google Android Bugdroid Logo (#3DDC84 Green)
export const AndroidIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Antennas */}
    <path d="M16 9L13.5 4M32 9L34.5 4" stroke="#3DDC84" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Head Dome */}
    <path d="M12 21C12 14.37 17.37 9 24 9C30.63 9 36 14.37 36 21H12Z" fill="#3DDC84"/>
    {/* Eyes */}
    <circle cx="18.5" cy="15.5" r="1.8" fill="white"/>
    <circle cx="29.5" cy="15.5" r="1.8" fill="white"/>
    {/* Body */}
    <path d="M12 23.5H36V36C36 38.2 34.2 40 32 40H16C13.8 40 12 38.2 12 36V23.5Z" fill="#3DDC84"/>
    {/* Arms */}
    <rect x="7" y="23.5" width="3.5" height="11" rx="1.75" fill="#3DDC84"/>
    <rect x="37.5" y="23.5" width="3.5" height="11" rx="1.75" fill="#3DDC84"/>
    {/* Legs */}
    <rect x="17" y="39" width="3.5" height="6" rx="1.75" fill="#3DDC84"/>
    <rect x="27.5" y="39" width="3.5" height="6" rx="1.75" fill="#3DDC84"/>
  </svg>
);

// 8. Official React Atom Logo (#61DAFB Cyan with Nucleus)
export const ReactIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="4.5" fill="#61DAFB"/>
    <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2.2"/>
    <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(60 24 24)" stroke="#61DAFB" strokeWidth="2.2"/>
    <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(120 24 24)" stroke="#61DAFB" strokeWidth="2.2"/>
  </svg>
);

// 9. Official Spring Boot Leaf Logo (#6DB33F Green)
export const SpringIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#realSpringGrad)" stroke="#4ADE80" strokeWidth="1.2"/>
    <defs>
      <linearGradient id="realSpringGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6DB33F"/>
        <stop offset="1" stopColor="#437725"/>
      </linearGradient>
    </defs>
    <path d="M34 14C34 14 26 14 20 20C15 25 14 31 16 34C19 36 25 35 30 30C36 24 34 14 34 14Z" fill="white"/>
    <path d="M22 28C24 23 29 19 34 14" stroke="#6DB33F" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// 10. Authentic Smart IoT Microcontroller Hardware Chip (Arduino/ESP32 Teal & Gold)
export const IotIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#realIotGrad)" stroke="#2DD4BF" strokeWidth="1.2"/>
    <defs>
      <linearGradient id="realIotGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0D9488"/>
        <stop offset="1" stopColor="#115E59"/>
      </linearGradient>
    </defs>
    <rect x="14" y="14" width="20" height="20" rx="3.5" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.6"/>
    <path d="M18 9V14M24 9V14M30 9V14M18 34V39M24 34V39M30 34V39M9 18H14M9 24H14M9 30H14M34 18H39M34 24H39M34 30H39" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M20 22C21.2 20.8 22.8 20 24 20C25.2 20 26.8 20.8 28 22" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 19C19 17 21.5 16 24 16C26.5 16 29 17 31 19" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="27" r="2" fill="#22D3EE"/>
  </svg>
);

// 11. Authentic AI Brain & Neural Synapse Chip
export const AiChipIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#realAiGrad)" stroke="#C084FC" strokeWidth="1.2"/>
    <defs>
      <linearGradient id="realAiGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6"/>
        <stop offset="1" stopColor="#581C87"/>
      </linearGradient>
    </defs>
    {/* Neural nodes */}
    <circle cx="24" cy="14" r="3.2" fill="#38BDF8"/>
    <circle cx="15" cy="23" r="3.2" fill="#F472B6"/>
    <circle cx="33" cy="23" r="3.2" fill="#F472B6"/>
    <circle cx="19" cy="33" r="3.2" fill="#34D399"/>
    <circle cx="29" cy="33" r="3.2" fill="#34D399"/>
    <circle cx="24" cy="24" r="2.5" fill="#FBBF24"/>
    {/* Synaptic traces */}
    <path d="M24 14L15 23M24 14L33 23M15 23L19 33M33 23L29 33M15 23L33 23M19 33L29 33M24 14L24 24M15 23L24 24M33 23L24 24" stroke="white" strokeWidth="1.8" strokeOpacity="0.85"/>
  </svg>
);

// 12. Authentic Cyber Security & Cryptography Shield
export const SecurityLockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#realSecGrad)" stroke="#34D399" strokeWidth="1.2"/>
    <defs>
      <linearGradient id="realSecGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#059669"/>
        <stop offset="1" stopColor="#064E3B"/>
      </linearGradient>
    </defs>
    <path d="M24 10L34 14.5V23C34 29.5 29.5 35 24 37C18.5 35 14 29.5 14 23V14.5L24 10Z" fill="#10B981" stroke="#6EE7B7" strokeWidth="1.8"/>
    <rect x="20" y="23" width="8" height="7" rx="1.5" fill="#FBBF24"/>
    <path d="M21.5 23V20C21.5 18.5 22.5 17.5 24 17.5C25.5 17.5 26.5 18.5 26.5 20V23" stroke="#FEF08A" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

// 13. Authentic Cloud & World Web Icon
export const WebIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#realWebGrad)" stroke="#38BDF8" strokeWidth="1.2"/>
    <defs>
      <linearGradient id="realWebGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7"/>
        <stop offset="1" stopColor="#075985"/>
      </linearGradient>
    </defs>
    <path d="M34 27C36 27 37.5 25.5 37.5 23.5C37.5 21.7 36.2 20.3 34.5 20.1C34 16.8 31.2 14.5 27.8 14.5C25 14.5 22.6 16.1 21.8 18.5C21.2 18.2 20.6 18 20 18C18 18 16.5 19.5 16.5 21.5C16.5 21.8 16.6 22.1 16.7 22.4C15.1 23 14 24.5 14 26.2C14 28.5 15.8 30.5 18 30.5H33.5C35.5 30.5 37 29 37 27" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ================= 3D ROUND TECH ORB (ROUND UI POD) =================
export const RoundTechOrb = ({
  name,
  icon,
  glowGradient = "from-orange-500/40 via-amber-500/20 to-transparent",
  ringColor = "border-orange-400/50",
  shadowColor = "rgba(234,88,12,0.45)",
  labelColor = "text-orange-300",
  duration = 4.0,
  delay = 0,
}) => (
  <motion.div
    animate={{ y: [-6, 6, -6] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.12, y: -10 }}
    className="flex flex-col items-center gap-2 group cursor-pointer"
  >
    {/* Outer 3D Circular Floating Sphere */}
    <div
      className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 rounded-full p-[2px] bg-gradient-to-tr ${ringColor} shadow-[0_10px_28px_${shadowColor},inset_0_1px_3px_rgba(255,255,255,0.4)] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_16px_36px_${shadowColor}]`}
    >
      {/* Ambient Pulsing Glow Behind Orb */}
      <div
        className={`absolute -inset-1.5 rounded-full bg-gradient-to-tr ${glowGradient} opacity-50 blur-md group-hover:opacity-90 group-hover:blur-lg transition-all duration-300 pointer-events-none`}
      />

      {/* Inner Round Pod */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-b from-slate-900/95 via-slate-950/90 to-[#001733] border border-white/20 flex items-center justify-center p-3 sm:p-3.5 backdrop-blur-xl shadow-inner">
        <div className="filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-full h-full">
          {icon}
        </div>
      </div>
    </div>

    {/* Round Capsule Label */}
    <span
      className={`px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm group-hover:bg-white/20 group-hover:border-white/40 transition-all ${labelColor}`}
    >
      {name}
    </span>
  </motion.div>
);

// ================= PROGRAM RECOGNITION HELPERS =================

export function getProgramMeta(techStr = "", titleStr = "") {
  const t = `${techStr} ${titleStr}`.toLowerCase();

  if (t.includes("asp.net") || t.includes("asp net") || t.includes("c#") || t.includes("csharp")) {
    return {
      key: "dotnet",
      name: "ASP.NET / C#",
      badgeText: ".NET / C#",
      gradient: "from-[#5b21b6] via-[#7c3aed] to-[#9333ea]",
      border: "border-purple-400/40",
      bgLight: "bg-purple-50 text-purple-700 border-purple-200",
      accentColor: "#7c3aed",
      icon: <DotNetIcon className="w-5 h-5 text-white" />,
      miniIcon: <DotNetIcon className="w-3.5 h-3.5 text-purple-600" />,
      shadow: "shadow-[0_4px_14px_rgba(124,58,237,0.35)]",
    };
  }
  if (t.includes("vb.net") || t.includes("vb net") || t.includes("visual basic")) {
    return {
      key: "vbnet",
      name: "VB.NET",
      badgeText: "VB.NET",
      gradient: "from-[#0369a1] via-[#0284c7] to-[#0ea5e9]",
      border: "border-sky-400/40",
      bgLight: "bg-sky-50 text-sky-700 border-sky-200",
      accentColor: "#0284c7",
      icon: <VbNetIcon className="w-5 h-5 text-white" />,
      miniIcon: <VbNetIcon className="w-3.5 h-3.5 text-sky-600" />,
      shadow: "shadow-[0_4px_14px_rgba(2,132,199,0.35)]",
    };
  }
  if (t.includes("python") || t.includes("machine learning") || t.includes("data mining") || t.includes("nlp") || t.includes("stego")) {
    return {
      key: "python",
      name: "Python",
      badgeText: "Python",
      gradient: "from-[#0e7490] via-[#0284c7] to-[#eab308]",
      border: "border-cyan-400/40",
      bgLight: "bg-sky-50 text-sky-800 border-sky-200",
      accentColor: "#0284c7",
      icon: <PythonIcon className="w-5 h-5" />,
      miniIcon: <PythonIcon className="w-3.5 h-3.5" />,
      shadow: "shadow-[0_4px_14px_rgba(2,132,199,0.35)]",
    };
  }
  if (t.includes("php")) {
    return {
      key: "php",
      name: "PHP / MySQL",
      badgeText: "PHP",
      gradient: "from-[#4338ca] via-[#6366f1] to-[#818cf8]",
      border: "border-indigo-400/40",
      bgLight: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accentColor: "#6366f1",
      icon: <PhpIcon className="w-5 h-5 text-white" />,
      miniIcon: <PhpIcon className="w-3.5 h-3.5 text-indigo-600" />,
      shadow: "shadow-[0_4px_14px_rgba(99,102,241,0.35)]",
    };
  }
  if (t.includes("java") || t.includes("j2ee") || t.includes("spring") || t.includes("swing")) {
    return {
      key: "java",
      name: "Java / J2EE",
      badgeText: "Java",
      gradient: "from-[#c2410c] via-[#ea580c] to-[#f59e0b]",
      border: "border-orange-400/40",
      bgLight: "bg-orange-50 text-orange-800 border-orange-200",
      accentColor: "#ea580c",
      icon: <JavaIcon className="w-5 h-5" />,
      miniIcon: <JavaIcon className="w-3.5 h-3.5" />,
      shadow: "shadow-[0_4px_14px_rgba(234,88,12,0.35)]",
    };
  }
  if (t.includes("iot") || t.includes("rfid") || t.includes("gsm") || t.includes("smart card") || t.includes("embedded") || t.includes("hardware")) {
    return {
      key: "iot",
      name: "Smart IoT & Embedded",
      badgeText: "Smart IoT",
      gradient: "from-[#0f766e] via-[#0d9488] to-[#14b8a6]",
      border: "border-teal-400/40",
      bgLight: "bg-teal-50 text-teal-700 border-teal-200",
      accentColor: "#0d9488",
      icon: <IotIcon className="w-5 h-5 text-white" />,
      miniIcon: <IotIcon className="w-3.5 h-3.5 text-teal-600" />,
      shadow: "shadow-[0_4px_14px_rgba(13,148,136,0.35)]",
    };
  }
  if (t.includes("android")) {
    return {
      key: "android",
      name: "Android Mobile",
      badgeText: "Android",
      gradient: "from-[#15803d] via-[#16a34a] to-[#22c55e]",
      border: "border-emerald-400/40",
      bgLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accentColor: "#16a34a",
      icon: <AndroidIcon className="w-5 h-5 text-white" />,
      miniIcon: <AndroidIcon className="w-3.5 h-3.5 text-emerald-600" />,
      shadow: "shadow-[0_4px_14px_rgba(22,163,74,0.35)]",
    };
  }
  return {
    key: "web",
    name: "Web Application",
    badgeText: "Web ERP",
    gradient: "from-[#0369a1] via-[#0284c7] to-[#06b6d4]",
    border: "border-cyan-400/40",
    bgLight: "bg-cyan-50 text-cyan-800 border-cyan-200",
    accentColor: "#0284c7",
    icon: <WebIcon className="w-5 h-5 text-white" />,
    miniIcon: <WebIcon className="w-3.5 h-3.5 text-cyan-600" />,
    shadow: "shadow-[0_4px_14px_rgba(2,132,199,0.35)]",
  };
}

// Map individual tech chip to icon and styling
export function getChipIconAndStyle(item = "") {
  const val = item.trim().toLowerCase();
  
  if (val.includes("php")) {
    return { icon: <PhpIcon className="w-3 h-3 text-[#6366f1]" />, bg: "bg-indigo-50 text-indigo-700 border-indigo-200" };
  }
  if (val.includes("asp.net") || val.includes("asp net") || val.includes("c#") || val.includes(".net")) {
    return { icon: <DotNetIcon className="w-3 h-3 text-[#7c3aed]" />, bg: "bg-purple-50 text-purple-700 border-purple-200" };
  }
  if (val.includes("vb.net") || val.includes("vb net")) {
    return { icon: <VbNetIcon className="w-3 h-3 text-[#0284c7]" />, bg: "bg-sky-50 text-sky-700 border-sky-200" };
  }
  if (val.includes("java") || val.includes("j2ee") || val.includes("spring")) {
    return { icon: <JavaIcon className="w-3 h-3" />, bg: "bg-orange-50 text-orange-800 border-orange-200" };
  }
  if (val.includes("python") || val.includes("ml") || val.includes("machine learning")) {
    return { icon: <PythonIcon className="w-3 h-3" />, bg: "bg-blue-50 text-blue-700 border-blue-200" };
  }
  if (val.includes("mysql") || val.includes("sql") || val.includes("database") || val.includes("oracle")) {
    return { icon: <DatabaseIcon className="w-3 h-3 text-cyan-600" />, bg: "bg-cyan-50 text-cyan-800 border-cyan-200" };
  }
  if (val.includes("react")) {
    return { icon: <ReactIcon className="w-3 h-3 text-sky-600" />, bg: "bg-sky-50 text-sky-700 border-sky-200" };
  }
  if (val.includes("iot") || val.includes("rfid") || val.includes("gsm")) {
    return { icon: <IotIcon className="w-3 h-3 text-teal-600" />, bg: "bg-teal-50 text-teal-700 border-teal-200" };
  }
  if (val.includes("crypto") || val.includes("aes") || val.includes("security") || val.includes("stego")) {
    return { icon: <SecurityLockIcon className="w-3 h-3 text-emerald-600" />, bg: "bg-emerald-50 text-emerald-700 border-emerald-200" };
  }
  if (val.includes("android")) {
    return { icon: <AndroidIcon className="w-3 h-3 text-green-600" />, bg: "bg-green-50 text-green-700 border-green-200" };
  }
  return { icon: <WebIcon className="w-3 h-3 text-slate-500" />, bg: "bg-slate-100 text-slate-700 border-slate-200" };
}

// Parse string or array of tech into individual pills with icons
export function ProgramTechBadges({ tech, limit = 4 }) {
  let tokens = [];
  if (Array.isArray(tech)) {
    tokens = tech;
  } else if (typeof tech === "string") {
    tokens = tech.split(/[/,]/).map((s) => s.trim()).filter(Boolean);
  }

  const displayTokens = tokens.slice(0, limit);
  const remaining = tokens.length - limit;

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {displayTokens.map((tok, idx) => {
        const { icon, bg } = getChipIconAndStyle(tok);
        return (
          <span
            key={idx}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-bold border transition-all hover:scale-105 ${bg}`}
          >
            {icon}
            <span>{tok}</span>
          </span>
        );
      })}
      {remaining > 0 && (
        <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-bold border border-slate-200">
          +{remaining}
        </span>
      )}
    </div>
  );
}

// 3D Program Avatar for Table / Card Header
export function ProgramAvatar({ tech = "", title = "", size = "md" }) {
  const meta = getProgramMeta(tech, title);
  const sizeClasses = size === "lg" 
    ? "w-12 h-12 rounded-2xl p-2.5" 
    : size === "sm" 
    ? "w-8 h-8 rounded-xl p-1.5" 
    : "w-10 h-10 rounded-2xl p-2";

  return (
    <div
      title={meta.name}
      className={`relative shrink-0 flex items-center justify-center bg-gradient-to-tr ${meta.gradient} ${sizeClasses} shadow-md hover:scale-110 transition-transform duration-200 border border-white/30`}
    >
      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-50 blur-xs pointer-events-none" />
      <div className="relative z-10 flex items-center justify-center">
        {meta.icon}
      </div>
      <span className="sr-only">{meta.name}</span>
    </div>
  );
}

// 3D Programming Language Filter Bar
export function ProgramLanguageFilterBar({ activeProgram, onSelectProgram }) {
  const programs = [
    {
      key: "all",
      label: "All Stacks",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="3" y="3" width="7" height="7" rx="1.5"/>
          <rect x="14" y="3" width="7" height="7" rx="1.5"/>
          <rect x="14" y="14" width="7" height="7" rx="1.5"/>
          <rect x="3" y="14" width="7" height="7" rx="1.5"/>
        </svg>
      ),
      activeGradient: "from-slate-900 via-slate-800 to-slate-900 text-white shadow-[0_4px_14px_rgba(15,23,42,0.35)] border-slate-900",
      inactiveColor: "bg-slate-100/90 text-slate-700 hover:bg-slate-200/80 border-slate-200",
    },
    {
      key: "php",
      label: "PHP / MySQL",
      icon: <PhpIcon className="w-4 h-4" />,
      activeGradient: "from-[#4338ca] via-[#6366f1] to-[#818cf8] text-white shadow-[0_4px_14px_rgba(99,102,241,0.4)] border-indigo-400",
      inactiveColor: "bg-indigo-50/70 text-indigo-900 hover:bg-indigo-100/80 border-indigo-200/80",
    },
    {
      key: "java",
      label: "Java / J2EE",
      icon: <JavaIcon className="w-4 h-4" />,
      activeGradient: "from-[#c2410c] via-[#ea580c] to-[#f59e0b] text-white shadow-[0_4px_14px_rgba(234,88,12,0.4)] border-orange-400",
      inactiveColor: "bg-orange-50/70 text-orange-900 hover:bg-orange-100/80 border-orange-200/80",
    },
    {
      key: "dotnet",
      label: "ASP.NET / C#",
      icon: <DotNetIcon className="w-4 h-4" />,
      activeGradient: "from-[#5b21b6] via-[#7c3aed] to-[#9333ea] text-white shadow-[0_4px_14px_rgba(124,58,237,0.4)] border-purple-400",
      inactiveColor: "bg-purple-50/70 text-purple-900 hover:bg-purple-100/80 border-purple-200/80",
    },
    {
      key: "vbnet",
      label: "VB.NET",
      icon: <VbNetIcon className="w-4 h-4" />,
      activeGradient: "from-[#0369a1] via-[#0284c7] to-[#0ea5e9] text-white shadow-[0_4px_14px_rgba(2,132,199,0.4)] border-sky-400",
      inactiveColor: "bg-sky-50/70 text-sky-900 hover:bg-sky-100/80 border-sky-200/80",
    },
    {
      key: "python",
      label: "Python & ML",
      icon: <PythonIcon className="w-4 h-4" />,
      activeGradient: "from-[#0e7490] via-[#0284c7] to-[#eab308] text-white shadow-[0_4px_14px_rgba(2,132,199,0.4)] border-cyan-400",
      inactiveColor: "bg-cyan-50/70 text-cyan-900 hover:bg-cyan-100/80 border-cyan-200/80",
    },
    {
      key: "iot",
      label: "IoT & Smart",
      icon: <IotIcon className="w-4 h-4" />,
      activeGradient: "from-[#0f766e] via-[#0d9488] to-[#14b8a6] text-white shadow-[0_4px_14px_rgba(13,148,136,0.4)] border-teal-400",
      inactiveColor: "bg-teal-50/70 text-teal-900 hover:bg-teal-100/80 border-teal-200/80",
    },
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff8200] shadow-[0_0_6px_rgba(255,130,0,0.8)]" />
          Technology Stack
        </span>
        {activeProgram !== "all" && (
          <button
            onClick={() => onSelectProgram("all")}
            className="text-xs font-bold text-[#ff8200] hover:text-[#e06d00] hover:underline cursor-pointer transition-colors"
          >
            Reset Stack ✕
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {programs.map((p) => {
          const isActive = activeProgram === p.key;
          return (
            <button
              key={p.key}
              onClick={() => onSelectProgram(p.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                isActive
                  ? `bg-gradient-to-r ${p.activeGradient} scale-[1.03]`
                  : `${p.inactiveColor} hover:shadow-xs hover:-translate-y-0.5`
              }`}
            >
              <span className="shrink-0 flex items-center justify-center">{p.icon}</span>
              <span>{p.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
