import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import VerifiedIcon from "@mui/icons-material/Verified";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// Smooth animated counter component using requestAnimationFrame and easeOutExpo
function AnimatedCounter({ value, duration = 2.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const cleanStr = String(value).trim();
    const match = cleanStr.match(/^([^\d]*)(\d[\d,]*\.?\d*)([^\d]*)$/);

    if (!match) {
      setDisplayValue(cleanStr);
      return;
    }

    const prefix = match[1] || "";
    const numStr = match[2].replace(/,/g, "");
    const suffix = match[3] || "";
    const targetNum = parseFloat(numStr);

    if (isNaN(targetNum)) {
      setDisplayValue(cleanStr);
      return;
    }

    let startTime = null;
    let animationFrame;

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);
      const current = Math.floor(easedProgress * targetNum);

      setDisplayValue(`${prefix}${current.toLocaleString()}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(`${prefix}${targetNum.toLocaleString()}${suffix}`);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

// 3D BLUE ICONS FOR STATS ACHIEVEMENTS
function Trophy3DBlue({ className = "w-13 h-13" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="valTrophyGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.45" stopColor="#0284c7" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#valTrophyGrad)" />
      <rect x="5.5" y="5.5" width="53" height="53" rx="16.5" stroke="#ffffff" strokeOpacity="0.38" strokeWidth="1.5" />
      {/* 3D Trophy Cup */}
      <path d="M22 18 H42 V28 C42 34, 38 38, 32 38 C26 38, 22 34, 22 28 Z" fill="#ffffff" />
      <path d="M22 22 H16 C16 29, 22 30, 22 30" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M42 22 H48 C48 29, 42 30, 42 30" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <rect x="30" y="38" width="4" height="7" fill="#ffffff" />
      <rect x="23" y="45" width="18" height="5" rx="2" fill="#ffffff" />
      <circle cx="32" cy="27" r="3" fill="#0072ff" />
    </svg>
  );
}

function TechBolt3DBlue({ className = "w-13 h-13" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="valBoltGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.45" stopColor="#0284c7" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#valBoltGrad)" />
      <rect x="5.5" y="5.5" width="53" height="53" rx="16.5" stroke="#ffffff" strokeOpacity="0.38" strokeWidth="1.5" />
      {/* 3D Volumetric Energy Bolt */}
      <path d="M34 14 L20 33 H32 L28 50 L44 29 H32 L34 14 Z" fill="#ffffff" />
      <circle cx="32" cy="31" r="2.5" fill="#0072ff" />
    </svg>
  );
}

function HardwareChip3DBlue({ className = "w-13 h-13" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="valChipGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.45" stopColor="#0284c7" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#valChipGrad)" />
      <rect x="5.5" y="5.5" width="53" height="53" rx="16.5" stroke="#ffffff" strokeOpacity="0.38" strokeWidth="1.5" />
      {/* Microchip Pins */}
      <line x1="24" y1="13" x2="24" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="13" x2="32" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="13" x2="40" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="46" x2="24" y2="51" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="46" x2="32" y2="51" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="46" x2="40" y2="51" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="24" x2="18" y2="24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="32" x2="18" y2="32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="40" x2="18" y2="40" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="24" x2="51" y2="24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="32" x2="51" y2="32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="40" x2="51" y2="40" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="18" width="28" height="28" rx="6" fill="#ffffff" />
      <rect x="25" y="25" width="14" height="14" rx="3" fill="#0072ff" />
      <circle cx="32" cy="32" r="3" fill="#ffffff" />
    </svg>
  );
}

function Students3DBlue({ className = "w-13 h-13" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="valStudGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.45" stopColor="#0284c7" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#valStudGrad)" />
      <rect x="5.5" y="5.5" width="53" height="53" rx="16.5" stroke="#ffffff" strokeOpacity="0.38" strokeWidth="1.5" />
      {/* 3D Student / Community Figures */}
      <circle cx="32" cy="23" r="5.5" fill="#ffffff" />
      <path d="M22 44 C22 36, 26 33, 32 33 C38 33, 42 36, 42 44 Z" fill="#ffffff" />
      <circle cx="19" cy="27" r="4" fill="#93c5fd" />
      <path d="M12 44 C12 38, 15 36, 20 36 C19 39, 19 42, 20 44 Z" fill="#93c5fd" />
      <circle cx="45" cy="27" r="4" fill="#93c5fd" />
      <path d="M52 44 C52 38, 49 36, 44 36 C45 39, 45 42, 44 44 Z" fill="#93c5fd" />
    </svg>
  );
}

// 3D BLUE ICONS FOR GUIDING PRINCIPLES
function PrincipleIdea3DBlue({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pIdeaGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="0.5" stopColor="#0072ff" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#pIdeaGrad)" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="14.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Glowing Lightbulb */}
      <path d="M32 17 C25 17, 21 22, 21 28 C21 33, 25 36, 27 39 H37 C39 36, 43 33, 43 28 C43 22, 39 17, 32 17 Z" fill="#ffffff" />
      <rect x="27" y="41" width="10" height="3" rx="1.5" fill="#ffffff" />
      <rect x="29" y="45" width="6" height="2" rx="1" fill="#ffffff" />
      <circle cx="32" cy="28" r="3" fill="#0072ff" />
    </svg>
  );
}

function PrincipleCode3DBlue({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pCodeGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="0.5" stopColor="#0072ff" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#pCodeGrad)" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="14.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Terminal Code Brackets < / > */}
      <path d="M23 26 L17 32 L23 38" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M41 26 L47 32 L41 38" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="35" y1="23" x2="29" y2="41" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function PrincipleShield3DBlue({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pShieldGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="0.5" stopColor="#0072ff" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#pShieldGrad)" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="14.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* 3D Shield with Checkmark */}
      <path d="M32 16 L44 21 V30 C44 38, 38 45, 32 47 C26 45, 20 38, 20 30 V21 L32 16 Z" fill="#ffffff" />
      <path d="M26 31 L30 35 L38 26" stroke="#0072ff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PrincipleCareer3DBlue({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pCareerGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="0.5" stopColor="#0072ff" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#pCareerGrad)" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="14.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Rocket Launch / Upward Arrow */}
      <path d="M32 16 C38 21, 40 28, 38 35 L32 40 L26 35 C24 28, 26 21, 32 16 Z" fill="#ffffff" />
      <circle cx="32" cy="26" r="2.5" fill="#0072ff" />
      <polygon points="32,40 28,46 36,46" fill="#93c5fd" />
    </svg>
  );
}

const statsData = [
  {
    number: "150+",
    label: "Expert Technical Guides",
    subtitle: "IEEE Certified Mentors & Engineers",
    badge: "100% Industry Mentors",
    icon: <Trophy3DBlue className="w-13 h-13" />,
    iconBg: "bg-sky-50/70 border-sky-200 text-[#0284c7]",
    accentGrad: "from-[#0284c7] to-[#0052cc]"
  },
  {
    number: "95+",
    label: "Cutting-Edge Tech Domains",
    subtitle: "AI, IoT, Cloud, Embedded & VLSI",
    badge: "IEEE 2024 - 2025",
    icon: <TechBolt3DBlue className="w-13 h-13" />,
    iconBg: "bg-sky-50/70 border-sky-200 text-[#0284c7]",
    accentGrad: "from-[#0284c7] to-[#0052cc]"
  },
  {
    number: "200+",
    label: "Hardware & Project Labs",
    subtitle: "Kits, Sensors & High-End Servers",
    badge: "Live Hardware Testing",
    icon: <HardwareChip3DBlue className="w-13 h-13" />,
    iconBg: "bg-sky-50/70 border-sky-200 text-[#0284c7]",
    accentGrad: "from-[#0284c7] to-[#0052cc]"
  },
  {
    number: "25,000+",
    label: "Successful Students Guided",
    subtitle: "B.E, B.Tech, M.E, MCA & Ph.D",
    badge: "Best Project Awards",
    icon: <Students3DBlue className="w-13 h-13" />,
    iconBg: "bg-sky-50/70 border-sky-200 text-[#0284c7]",
    accentGrad: "from-[#0284c7] to-[#0052cc]"
  },
];

const corePrinciples = [
  {
    icon: <PrincipleIdea3DBlue className="w-10 h-10" />,
    title: "Originality & Authentic Base Papers",
    description: "Every project is developed strictly following peer-reviewed IEEE Transactions. We provide authentic base papers, detailed block diagrams, and customized synopses."
  },
  {
    icon: <PrincipleCode3DBlue className="w-10 h-10" />,
    title: "Line-by-Line Code Mastery",
    description: "We believe students should understand what they present. Our mentors conduct in-depth sessions explaining algorithm flows, database queries, and hardware circuits."
  },
  {
    icon: <PrincipleShield3DBlue className="w-10 h-10" />,
    title: "100% Guaranteed Error-Free Output",
    description: "No broken demonstrations. We verify complete hardware functionality and live software deployment so you face college review panels with absolute confidence."
  },
  {
    icon: <PrincipleCareer3DBlue className="w-10 h-10" />,
    title: "Viva Voce & Placement Acceleration",
    description: "Equipping you with mock technical questions, viva coaching, and soft skills guidance to turn your final year project into a launchpad for top tech MNC careers."
  }
];

export default function OurValues() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#f1f5f9] text-slate-800 py-8 sm:py-10 lg:py-12 overflow-hidden font-sans select-none border-b border-slate-200/80 shadow-xs">
      
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-sky-100/50 blur-[130px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-amber-100/40 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* =========================================================================
            1. SECTION HEADER
            ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-8 sm:mb-12 flex flex-col items-center"
        >
          <h2 className="font-['Outfit',_sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#102a4d] tracking-tight uppercase leading-tight">
            OUR <span className="text-[#ff8200]">VALUES</span> &amp; IMPACT
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-12 h-[3px] bg-gradient-to-r from-transparent to-[#0284c7] rounded-full"></div>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-sky-400 bg-[#0072ff] shadow-[0_0_12px_rgba(2,132,199,0.75)]"></div>
            <div className="w-12 h-[3px] bg-gradient-to-l from-transparent to-[#ff8200] rounded-full"></div>
          </div>
        </motion.div>

        {/* =========================================================================
            2. 4 ANIMATED COUNTER ACHIEVEMENT CARDS
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/95 rounded-3xl p-6 border-2 border-slate-100 shadow-[0_15px_35px_-10px_rgba(16,42,77,0.08)] hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.accentGrad} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

              <div>
                {/* Micro Badge & Icon Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <span className="text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-sky-50 text-[#0284c7] border border-sky-200">
                    {stat.badge}
                  </span>
                </div>

                {/* Counter Number */}
                <div className="font-['Outfit'] font-black text-3xl sm:text-4xl lg:text-[44px] text-[#102a4d] tracking-tight group-hover:text-[#0052cc] transition-colors leading-none mb-2">
                  <AnimatedCounter value={stat.number} duration={2.2} />
                </div>

                {/* Primary Label */}
                <h3 className="font-['Outfit'] font-bold text-base sm:text-lg text-slate-800 mb-1 leading-snug">
                  {stat.label}
                </h3>

                {/* Subtitle Description */}
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                  {stat.subtitle}
                </p>
              </div>

              {/* Bottom Verified Tick */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0284c7]">
                <CheckCircleIcon sx={{ fontSize: 16 }} className="text-[#0284c7]" />
                <span>Verified Academic Excellence</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================================
            3. CORE INSTITUTIONAL PRINCIPLES (4 INTERACTIVE PILLARS)
            ========================================================================= */}
        <div className="bg-white/95 rounded-3xl border-2 border-slate-100 p-6 sm:p-8 lg:p-10 shadow-[0_15px_40px_-15px_rgba(16,42,77,0.06)] backdrop-blur-md">
          
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#0284c7] tracking-widest uppercase">
              WHY STUDENTS CHOOSE US
            </span>
            <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl text-[#102a4d] mt-1">
              Guiding Principles Behind Every IEEE Project
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePrinciples.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-['Outfit'] font-bold text-base sm:text-lg text-[#102a4d] mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-[#0284c7]">
                  <VerifiedIcon sx={{ fontSize: 14 }} />
                  <span>Anna University &amp; Deemed Spec</span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof / Student Trust Banner */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-sky-50/80 via-blue-50/50 to-orange-50/60 rounded-2xl p-4 sm:p-5 border border-sky-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#102a4d] text-white flex items-center justify-center font-black text-sm shrink-0">
                15+
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#102a4d] text-sm sm:text-base">
                  Over 25,000+ Students Successfully Completed Final Year Reviews
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Covering B.E, B.Tech, M.E, M.Tech, MCA, BCA &amp; Research Scholars across Tamil Nadu.
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102a4d] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-['Outfit'] font-bold transition-all shadow-sm hover:scale-105 active:scale-95 shrink-0 !no-underline cursor-pointer"
            >
              <span>Consult Our Experts</span>
              <AutoAwesomeIcon sx={{ fontSize: 16 }} className="text-[#38bdf8]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
