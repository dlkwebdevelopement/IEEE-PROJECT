import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VerifiedIcon from "@mui/icons-material/Verified";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const techVideos = [
  {
    id: "java",
    title: "JAVA",
    subtitle: "Enterprise Systems & Cloud",
    description: "Real-time Java enterprise architectures, microservices, Spring Boot, and cloud IEEE project implementations with complete database workflows.",
    videoId: "TiqJ8cUFaMU",
    category: "Enterprise Software",
    duration: "12:45 Mins",
    features: ["Spring Boot & Microservices", "MySQL / MongoDB Integration", "100% Real-Time Source Code"],
    accent: "from-[#0284c7] to-[#0052cc]",
    badgeBg: "bg-sky-50 text-[#0284c7] border-sky-200"
  },
  {
    id: "python",
    title: "PYTHON",
    subtitle: "AI, ML & Neural Networks",
    description: "Hands-on walkthrough of modern Python workflows, computer vision, natural language processing, deep learning models, and automated pipelines.",
    videoId: "Es0eHDHksiM",
    category: "AI & Data Science",
    duration: "15:20 Mins",
    features: ["TensorFlow & PyTorch Models", "Computer Vision / OpenCV", "High Accuracy Classification"],
    accent: "from-[#0284c7] to-[#0052cc]",
    badgeBg: "bg-sky-50 text-[#0284c7] border-sky-200"
  },
  {
    id: "data-science",
    title: "DATA SCIENCE",
    subtitle: "Big Data & Predictive Analytics",
    description: "Statistical data modeling, pattern recognition, predictive analytics algorithms, and real-world dataset mining for high-accuracy decision systems.",
    videoId: "AWcD3pIGJjI",
    category: "Big Data & Analytics",
    duration: "14:10 Mins",
    features: ["Predictive Machine Learning", "Exploratory Data Mining", "Interactive Visual Dashboards"],
    accent: "from-[#0284c7] to-[#0052cc]",
    badgeBg: "bg-sky-50 text-[#0284c7] border-sky-200"
  },
  {
    id: "dotnet",
    title: "DOTNET",
    subtitle: "C# .NET Core & Web Solutions",
    description: "Enterprise .NET Core architecture breakdown, secure authentication, high-performance RESTful APIs, and full-stack multi-tier application engineering.",
    videoId: "G9HMQfnek1I",
    category: "Enterprise .NET",
    duration: "11:30 Mins",
    features: ["ASP.NET Core & MVC", "Entity Framework & SQL Server", "Secure Token Authentication"],
    accent: "from-[#0284c7] to-[#0052cc]",
    badgeBg: "bg-sky-50 text-[#0284c7] border-sky-200"
  },
  {
    id: "embedded",
    title: "EMBEDDED SYSTEM",
    subtitle: "IoT Telemetry & Microcontrollers",
    description: "Live demonstration of microcontroller circuits, wireless IoT sensors, hardware communication telemetry, firmware code, and cloud dashboards.",
    videoId: "RWJw0G_hztc",
    category: "Hardware & IoT",
    duration: "16:40 Mins",
    features: ["ARM / Arduino / NodeMCU", "Sensor Signal Telemetry", "Real-Time Cloud Dashboard"],
    accent: "from-[#0284c7] to-[#0072ff]",
    badgeBg: "bg-sky-50 text-[#0284c7] border-sky-200"
  },
  {
    id: "matlab",
    title: "MATLAB",
    subtitle: "Signal Processing & Simulink",
    description: "Comprehensive mathematical simulation workflows, DSP algorithms, biomedical image processing, and electrical power system modeling in Simulink.",
    videoId: "mDsEsqE9MJ4",
    category: "Simulation & Modeling",
    duration: "13:15 Mins",
    features: ["Simulink Power Grid Modeling", "DSP & Biomedical Filtering", "Mathematical Wave Analysis"],
    accent: "from-[#0284c7] to-[#0052cc]",
    badgeBg: "bg-sky-50 text-[#0284c7] border-sky-200"
  },
];

export default function TechnologyVideos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = techVideos[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? techVideos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === techVideos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="technology" className="relative w-full bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#f1f5f9] text-slate-800 py-8 sm:py-10 lg:py-12 overflow-hidden font-sans select-none border-b border-slate-200/80 shadow-xs">
      
      {/* Subtle Background Radial Highlights */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-sky-100/50 blur-[130px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-amber-100/40 blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-blue-50/60 blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* =========================================================================
            1. SECTION HEADER
            ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 flex flex-col items-center"
        >
          <h2 className="font-['Outfit',_sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#102a4d] tracking-tight uppercase leading-tight">
            OUR <span className="text-[#ff8200]">TECHNOLOGY</span> VIDEOS
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-12 h-[3px] bg-gradient-to-r from-transparent to-[#0284c7] rounded-full"></div>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-sky-400 bg-[#0072ff] shadow-[0_0_12px_rgba(2,132,199,0.75)]"></div>
            <div className="w-12 h-[3px] bg-gradient-to-l from-transparent to-[#ff8200] rounded-full"></div>
          </div>
        </motion.div>

        {/* =========================================================================
            2. TECHNOLOGY QUICK-SELECT PILLS (SINGLE LINE ROW - NO WRAP)
            ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full flex items-center justify-start sm:justify-center flex-nowrap overflow-x-auto py-2 px-2 gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-10 max-w-6xl mx-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {techVideos.map((tech, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={tech.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative shrink-0 whitespace-nowrap flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl font-['Outfit'] font-bold text-xs sm:text-[13px] md:text-sm tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#102a4d] to-[#0052cc] border border-blue-800 text-white shadow-lg shadow-blue-900/20 scale-102"
                    : "bg-white/90 border border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-300 hover:text-[#0052cc] shadow-sm"
                }`}
              >
                {isActive ? (
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff8200] opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff8200] shadow-[0_0_8px_#ff8200]"></span>
                  </span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-sky-400 shrink-0 transition-colors" />
                )}
                <span>{tech.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* =========================================================================
            3. CINEMA STUDIO 2-COLUMN STAGE (PLAYER + INTERACTIVE PLAYLIST)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* =====================================================================
              LEFT COLUMN: MAIN 16:9 CINEMA SCREEN & PROJECT TAKEAWAYS
              ===================================================================== */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white/95 rounded-3xl border-2 border-slate-100 shadow-[0_20px_50px_-15px_rgba(16,42,77,0.1)] p-4 sm:p-6 backdrop-blur-md relative overflow-hidden"
            >
              {/* Subtle Tech Corner Brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-sky-400 pointer-events-none"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-sky-400 pointer-events-none"></div>

              {/* Studio Top Control Strip */}
              <div className="flex items-center justify-between gap-3 mb-3.5 px-1">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                  <span className="font-mono text-xs font-black text-slate-800 tracking-wider uppercase">
                    STUDIO DEMO
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-semibold text-slate-500">
                    1080p Full HD
                  </span>
                </div>

                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border text-xs font-bold uppercase tracking-wider ${activeVideo.badgeBg}`}>
                  <VerifiedIcon sx={{ fontSize: 14 }} />
                  <span>{activeVideo.category}</span>
                </div>
              </div>

              {/* 16:9 Cinema Screen */}
              <div className="relative w-full pb-[56.25%] bg-slate-950 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <iframe
                  key={activeVideo.videoId}
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=0&rel=0`}
                  title={`${activeVideo.title} Project Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Title & Description */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl text-[#102a4d] uppercase tracking-tight m-0">
                      {activeVideo.title} : <span className="text-[#0284c7] font-bold">{activeVideo.subtitle}</span>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1.5 mb-0 leading-relaxed">
                      {activeVideo.description}
                    </p>
                  </div>

                  {/* Previous / Next Controls */}
                  <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-[#0052cc] hover:border-[#0052cc] flex items-center justify-center text-[#102a4d] hover:text-white transition-all cursor-pointer shadow-xs"
                      title="Previous Video"
                    >
                      <ArrowBackIosNewIcon sx={{ fontSize: 15 }} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-[#0052cc] hover:border-[#0052cc] flex items-center justify-center text-[#102a4d] hover:text-white transition-all cursor-pointer shadow-xs"
                      title="Next Video"
                    >
                      <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                    </button>
                  </div>
                </div>

                {/* Key Takeaways & Feature Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-1">
                  {activeVideo.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
                      <CheckCircleIcon sx={{ fontSize: 15 }} className="text-[#0284c7] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Bar */}
                <div className="flex flex-wrap items-center gap-3 mt-2 pt-3 border-t border-slate-100">
                  <a
                    href={`https://www.youtube.com/watch?v=${activeVideo.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff0000] to-[#cc0000] hover:from-[#e60000] hover:to-[#b30000] text-white text-xs sm:text-sm font-['Outfit'] font-black uppercase tracking-wider transition-all shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/40 hover:scale-105 active:scale-95 !no-underline cursor-pointer"
                  >
                    <YouTubeIcon sx={{ fontSize: 22 }} />
                    <span>Watch On YouTube</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-sky-50 border border-sky-300 text-[#0052cc] font-['Outfit'] font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer !no-underline"
                  >
                    <AutoAwesomeIcon sx={{ fontSize: 16 }} className="text-[#0284c7]" />
                    <span>Get Source Code &amp; Abstract</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: INTERACTIVE DOMAIN PLAYLIST DECK
              ===================================================================== */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-3">
            
            <div className="bg-white/95 rounded-3xl border-2 border-slate-100 shadow-[0_15px_40px_-15px_rgba(16,42,77,0.08)] p-4 sm:p-5 backdrop-blur-md">
              
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#0052cc]" />
                  <h4 className="font-['Outfit'] font-black text-base sm:text-lg text-[#102a4d] uppercase m-0">
                    Technology Playlist
                  </h4>
                </div>
                <span className="text-xs font-bold text-slate-500">
                  {activeIndex + 1} / {techVideos.length}
                </span>
              </div>

              {/* Playlist Cards List */}
              <div className="flex flex-col gap-2.5">
                {techVideos.map((tech, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={tech.id}
                      onClick={() => setActiveIndex(index)}
                      className={`group w-full text-left rounded-2xl p-2.5 border-2 transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                        isActive
                          ? "bg-gradient-to-r from-sky-50 to-blue-50/80 border-[#0072ff] shadow-md shadow-blue-500/15"
                          : "bg-white border-slate-200/80 hover:border-sky-300 hover:bg-slate-50/70"
                      }`}
                    >
                      {/* Mini Thumbnail with Play Overlay */}
                      <div className="relative w-24 sm:w-28 pb-[18%] sm:pb-[16%] rounded-xl overflow-hidden bg-slate-950 shrink-0 shadow-xs">
                        <img
                          src={`https://img.youtube.com/vi/${tech.videoId}/mqdefault.jpg`}
                          alt={tech.title}
                          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
                            isActive ? "scale-105" : "group-hover:scale-105 opacity-85 group-hover:opacity-100"
                          }`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                            isActive ? "bg-[#0072ff] text-white scale-110" : "bg-white/90 text-slate-800 group-hover:bg-[#0072ff] group-hover:text-white"
                          }`}>
                            <PlayArrowIcon sx={{ fontSize: 14 }} className="translate-x-[0.5px]" />
                          </div>
                        </div>
                      </div>

                      {/* Info & Soundwave Indicator */}
                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className={`font-['Outfit'] font-black text-sm uppercase truncate transition-colors ${
                            isActive ? "text-[#0052cc]" : "text-[#102a4d] group-hover:text-[#0052cc]"
                          }`}>
                            {tech.title}
                          </span>
                          
                          {/* Equalizer Soundwave / Live Status */}
                          {isActive ? (
                            <div className="flex items-end gap-0.5 h-3 shrink-0">
                              <span className="w-1 h-3 bg-[#0072ff] animate-pulse rounded-full"></span>
                              <span className="w-1 h-2 bg-[#0284c7] animate-pulse [animation-delay:150ms] rounded-full"></span>
                              <span className="w-1 h-3.5 bg-[#0072ff] animate-pulse [animation-delay:300ms] rounded-full"></span>
                            </div>
                          ) : (
                            <span className="text-[10px] font-bold text-slate-400">
                              {tech.duration}
                            </span>
                          )}
                        </div>

                        <span className="text-xs text-slate-500 font-medium truncate">
                          {tech.subtitle}
                        </span>

                        <span className="text-[10px] font-bold text-[#0284c7] uppercase mt-0.5">
                          {tech.category}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
