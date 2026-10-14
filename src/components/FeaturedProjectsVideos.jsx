import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VerifiedIcon from "@mui/icons-material/Verified";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { API_BASE } from "../api";

// 3D BLUE ICONS FOR FEATURED PROJECTS
function EceChip3DBlue({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="eceFpGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.45" stopColor="#0284c7" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#eceFpGrad)" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="14.5" stroke="#ffffff" strokeOpacity="0.38" strokeWidth="1.5" />
      {/* Microchip body & pins */}
      <line x1="24" y1="14" x2="24" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="14" x2="32" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="14" x2="40" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="46" x2="24" y2="50" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="46" x2="32" y2="50" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="46" x2="40" y2="50" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="24" x2="18" y2="24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="32" x2="18" y2="32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="40" x2="18" y2="40" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="24" x2="50" y2="24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="32" x2="50" y2="32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="40" x2="50" y2="40" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="18" width="28" height="28" rx="6" fill="#ffffff" />
      <rect x="25" y="25" width="14" height="14" rx="3" fill="#0072ff" />
      <circle cx="32" cy="32" r="2.5" fill="#ffffff" />
    </svg>
  );
}

function Robo3DBlue({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="roboFpGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.45" stopColor="#0284c7" />
          <stop offset="1" stopColor="#0052cc" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#roboFpGrad)" />
      <rect x="6.5" y="6.5" width="51" height="51" rx="14.5" stroke="#ffffff" strokeOpacity="0.38" strokeWidth="1.5" />
      {/* Robot Antenna & Head */}
      <line x1="32" y1="13" x2="32" y2="18" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="13" r="2.5" fill="#ffffff" />
      <rect x="19" y="18" width="26" height="20" rx="5" fill="#ffffff" />
      <circle cx="26" cy="27" r="3.5" fill="#0072ff" />
      <circle cx="38" cy="27" r="3.5" fill="#0072ff" />
      <line x1="26" y1="34" x2="38" y2="34" stroke="#0072ff" strokeWidth="2" strokeLinecap="round" />
      {/* Robot Ears */}
      <rect x="15" y="24" width="4" height="8" rx="2" fill="#93c5fd" />
      <rect x="45" y="24" width="4" height="8" rx="2" fill="#93c5fd" />
      {/* Body */}
      <path d="M22 41 H42 V49 C42 50, 41 51, 40 51 H24 C23 51, 22 50, 22 49 Z" fill="#ffffff" />
      <circle cx="28" cy="46" r="1.5" fill="#0072ff" />
      <circle cx="36" cy="46" r="1.5" fill="#0072ff" />
    </svg>
  );
}

const eceProjects = [
  {
    title: "SOLID WASTE MANAGEMENT",
    description: "IoT Garbage Monitoring & Automated Alert System",
    videoId: "jeTQgoxJpHY",
    tags: ["Ultrasonic Sensors", "NodeMCU / ESP8266", "Cloud Telemetry"]
  },
  {
    title: "AGRICULTURAL CROP MONITORING",
    description: "Smart Agriculture & Soil Moisture Telemetry",
    videoId: "TiqJ8cUFaMU",
    tags: ["Soil NPK Sensors", "Wireless Mesh", "Mobile Dashboard"]
  },
  {
    title: "SOLID WASTE MANAGEMENT",
    description: "Smart City Automated Waste Segregation",
    videoId: "gGUVU1iF_x0",
    tags: ["Servo Mechanics", "IR & Moisture Sensors", "Arduino Core"]
  }
];

const roboticsProjects = [
  {
    title: "ROBOTIC CONTROL USING IOT",
    description: "Multi-Terrain Robotic Vehicle with Cloud Surveillance",
    videoId: "4eGSoR5yoTg",
    tags: ["ESP32-CAM", "DC Motor Drivers", "Live Video Stream"]
  },
  {
    title: "WIRELESS GESTURE CONTROLLER",
    description: "MEMS Accelerometer Hand Gesture Robot",
    videoId: "V1H3YI4DRGM",
    tags: ["RF Transmitter/Receiver", "Gesture Recognition", "Microcontroller"]
  },
  {
    title: "WIRELESS GESTURE CONTROLLER",
    description: "Autonomous Obstacle Avoiding Robotic Rover",
    videoId: "4eGSoR5yoTg",
    tags: ["Sonar Sensor Array", "PID Control Logic", "Battery Management"]
  }
];

export default function FeaturedProjectsVideos() {
  const [eceData, setEceData] = useState(eceProjects);
  const [roboData, setRoboData] = useState(roboticsProjects);
  const [activeEce, setActiveEce] = useState(0);
  const [activeRobo, setActiveRobo] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`${API_BASE}/videos.php`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const mid = Math.ceil(data.length / 2);
            const firstHalf = data.slice(0, mid).map((v) => ({
              title: v.title,
              description: v.title,
              videoId: v.youtube_id,
              tags: ["Real Hardware Kit", "IoT Sensors", "100% Working Code"]
            }));
            const secondHalf = data.slice(mid).map((v) => ({
              title: v.title,
              description: v.title,
              videoId: v.youtube_id,
              tags: ["Microcontroller Circuit", "Wireless RF", "Full Report & PPT"]
            }));

            if (firstHalf.length > 0) setEceData(firstHalf);
            if (secondHalf.length > 0) setRoboData(secondHalf);
          }
        }
      } catch (err) {
        console.log("PHP backend offline, using default videos.");
      }
    };
    fetchVideos();
  }, []);

  const currentEce = eceData[activeEce] || eceProjects[0];
  const currentRobo = roboData[activeRobo] || roboticsProjects[0];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#f1f5f9] text-slate-800 py-8 sm:py-10 lg:py-12 overflow-hidden font-sans select-none border-b border-slate-200/80 shadow-xs">
      
      {/* Subtle Background Radial Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-sky-100/50 blur-[130px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-amber-100/40 blur-[120px]"></div>
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
            FEATURED <span className="text-[#ff8200]">PROJECTS</span> SHOWCASE
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-12 h-[3px] bg-gradient-to-r from-transparent to-[#0284c7] rounded-full"></div>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-sky-400 bg-[#0072ff] shadow-[0_0_12px_rgba(2,132,199,0.75)]"></div>
            <div className="w-12 h-[3px] bg-gradient-to-l from-transparent to-[#ff8200] rounded-full"></div>
          </div>
        </motion.div>

        {/* =========================================================================
            2. TWO-COLUMN CINEMA CARDS (ECE & ROBOTICS)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* ==================== CARD 1: ECE PROJECT DEMO ==================== */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="bg-white/95 rounded-3xl border-2 border-slate-100 shadow-[0_20px_50px_-15px_rgba(16,42,77,0.1)] p-4 sm:p-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
          >
            {/* Tech Corner Brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-sky-400 pointer-events-none"></div>
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-sky-400 pointer-events-none"></div>

            <div>
              {/* Studio Stage Header Strip */}
              <div className="flex items-center justify-between gap-3 mb-3.5 px-1">
                <div className="flex items-center gap-2.5">
                  <EceChip3DBlue className="w-10 h-10" />
                  <div>
                    <h3 className="font-['Outfit'] font-black text-lg text-[#102a4d] uppercase m-0 leading-none">
                      ECE EMBEDDED PROJECT
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Hardware Demo #{activeEce + 1} of {eceData.length}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border text-xs font-bold uppercase tracking-wider bg-sky-50 text-[#0284c7] border-sky-200">
                  <VerifiedIcon sx={{ fontSize: 14 }} />
                  <span>Verified Output</span>
                </div>
              </div>

              {/* 16:9 Video Screen */}
              <div className="relative w-full pb-[56.25%] bg-slate-950 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <iframe
                  key={currentEce.videoId}
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${currentEce.videoId}?autoplay=0&rel=0`}
                  title={currentEce.description}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Details & Feature Tags */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <h4 className="font-['Outfit'] font-black text-xl text-[#102a4d] uppercase tracking-tight mb-1">
                  {currentEce.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-3">
                  {currentEce.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(currentEce.tags || ["ARM Cortex", "Sensor Suite", "Live Testing"]).map((t, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                      <CheckCircleIcon sx={{ fontSize: 14 }} className="text-[#0284c7]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Controls & YouTube CTA Bar */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {eceData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveEce(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeEce === idx
                        ? "w-6 bg-[#0284c7] shadow-sm"
                        : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows & YouTube Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveEce((prev) => (prev === 0 ? eceData.length - 1 : prev - 1))}
                  className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#102a4d] cursor-pointer shadow-xs transition-colors"
                  title="Previous"
                >
                  <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
                </button>
                <button
                  onClick={() => setActiveEce((prev) => (prev === eceData.length - 1 ? 0 : prev + 1))}
                  className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#102a4d] cursor-pointer shadow-xs transition-colors"
                  title="Next"
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
                </button>

                <a
                  href={`https://www.youtube.com/watch?v=${currentEce.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#ff0000] to-[#cc0000] hover:from-[#e60000] hover:to-[#b30000] text-white text-xs font-['Outfit'] font-black uppercase tracking-wider shadow-sm hover:scale-105 active:scale-95 transition-all !no-underline cursor-pointer"
                >
                  <YouTubeIcon sx={{ fontSize: 18 }} />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ==================== CARD 2: ROBOTICS PROJECT DEMO ==================== */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="bg-white/95 rounded-3xl border-2 border-slate-100 shadow-[0_20px_50px_-15px_rgba(16,42,77,0.1)] p-4 sm:p-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
          >
            {/* Tech Corner Brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-sky-400 pointer-events-none"></div>
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-sky-400 pointer-events-none"></div>

            <div>
              {/* Studio Stage Header Strip */}
              <div className="flex items-center justify-between gap-3 mb-3.5 px-1">
                <div className="flex items-center gap-2.5">
                  <Robo3DBlue className="w-10 h-10" />
                  <div>
                    <h3 className="font-['Outfit'] font-black text-lg text-[#102a4d] uppercase m-0 leading-none">
                      ROBOTICS &amp; IOT PROJECT
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Hardware Demo #{activeRobo + 1} of {roboData.length}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border text-xs font-bold uppercase tracking-wider bg-sky-50 text-[#0284c7] border-sky-200">
                  <VerifiedIcon sx={{ fontSize: 14 }} />
                  <span>Live Robotic Demo</span>
                </div>
              </div>

              {/* 16:9 Video Screen */}
              <div className="relative w-full pb-[56.25%] bg-slate-950 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <iframe
                  key={currentRobo.videoId}
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${currentRobo.videoId}?autoplay=0&rel=0`}
                  title={currentRobo.description}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Details & Feature Tags */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <h4 className="font-['Outfit'] font-black text-xl text-[#102a4d] uppercase tracking-tight mb-1">
                  {currentRobo.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-3">
                  {currentRobo.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(currentRobo.tags || ["Wireless Telemetry", "Motors & Actuators", "Circuit Tested"]).map((t, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                      <CheckCircleIcon sx={{ fontSize: 14 }} className="text-[#0284c7]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Controls & YouTube CTA Bar */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {roboData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveRobo(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeRobo === idx
                        ? "w-6 bg-[#0284c7] shadow-sm"
                        : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows & YouTube Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveRobo((prev) => (prev === 0 ? roboData.length - 1 : prev - 1))}
                  className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#102a4d] cursor-pointer shadow-xs transition-colors"
                  title="Previous"
                >
                  <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
                </button>
                <button
                  onClick={() => setActiveRobo((prev) => (prev === roboData.length - 1 ? 0 : prev + 1))}
                  className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#102a4d] cursor-pointer shadow-xs transition-colors"
                  title="Next"
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
                </button>

                <a
                  href={`https://www.youtube.com/watch?v=${currentRobo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#ff0000] to-[#cc0000] hover:from-[#e60000] hover:to-[#b30000] text-white text-xs font-['Outfit'] font-black uppercase tracking-wider shadow-sm hover:scale-105 active:scale-95 transition-all !no-underline cursor-pointer"
                >
                  <YouTubeIcon sx={{ fontSize: 18 }} />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
