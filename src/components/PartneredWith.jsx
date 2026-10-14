import React from "react";
import { motion } from "framer-motion";
import VerifiedIcon from "@mui/icons-material/Verified";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HandshakeIcon from "@mui/icons-material/Handshake";

// Partner Logos
import partner1 from "../assets/New_Project_-_2025-02-22T110003.548-removebg-preview.png";
import partner2 from "../assets/New_Project_-_2025-02-22T110332.862-removebg-preview-Copy.png";
import partner3 from "../assets/New-Project-100.png";
import partner4 from "../assets/pmkvy.png";

const partnerList = [
  {
    logo: partner4,
    title: "PMKVY",
    subtitle: "Pradhan Mantri Kaushal Vikas Yojana",
    tag: "Govt. of India Initiative"
  },
  {
    logo: partner1,
    title: "Skill India",
    subtitle: "National Skill Development Mission",
    tag: "Certified Training Partner"
  },
  {
    logo: partner2,
    title: "1 Crore Projects",
    subtitle: "Academic Research Alliance",
    tag: "IEEE Implementation Partner"
  },
  {
    logo: partner3,
    title: "MSME & ISO",
    subtitle: "Quality Assured Certifications",
    tag: "Industry Standard Compliant"
  }
];

export default function PartneredWith() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#ffffff] text-slate-800 py-8 sm:py-10 lg:py-12 overflow-hidden font-sans select-none border-b border-slate-200/80">
      
      {/* Ambient Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-sky-50/70 blur-[140px]"></div>
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
          <h2 className="font-['Outfit',_sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-[#102a4d] tracking-tight uppercase leading-tight">
            WE ARE <span className="text-[#ff8200]">PARTNERED WITH</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-12 h-[3px] bg-gradient-to-r from-transparent to-[#0284c7] rounded-full"></div>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-sky-400 bg-[#0072ff] shadow-[0_0_12px_rgba(2,132,199,0.75)]"></div>
            <div className="w-12 h-[3px] bg-gradient-to-l from-transparent to-[#ff8200] rounded-full"></div>
          </div>
        </motion.div>

        {/* =========================================================================
            2. 4 PARTNER 3D ROUND ORBS WITH BLUE OUTLINE (ENLARGED, NO GLOW)
            ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 justify-items-center items-center">
          {partnerList.map((partner, index) => {
            // Alternate float animations for natural staggered 3D floating effect
            const floatClass = index % 3 === 0 ? "animate-float-slow" : index % 3 === 1 ? "animate-float-medium" : "animate-float-reverse";
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group flex flex-col items-center justify-center cursor-pointer select-none"
                title={`${partner.title} - ${partner.subtitle}`}
              >
                {/* 3D Floating & Tilt Container */}
                <div className={`relative ${floatClass} group-hover:pause transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2.5`}>
                  
                  {/* 3D Round Sphere / Medallion Disc with Crisp Blue Outline (Enlarged Size) */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f8fafc] p-3 sm:p-4 md:p-5 flex items-center justify-center border-4 border-[#0284c7] group-hover:border-[#0072ff] shadow-[0_14px_32px_-6px_rgba(16,42,77,0.18),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-6px_12px_rgba(16,42,77,0.06)] transition-all duration-500 overflow-hidden">
                    
                    {/* Subtle 3D Glass Specular Reflection Highlight */}
                    <div className="absolute top-0 left-4 right-4 h-1/2 bg-gradient-to-b from-white/90 via-white/30 to-transparent rounded-t-full pointer-events-none"></div>

                    {/* Enlarged Partner Logo Image */}
                    <img 
                      src={partner.logo} 
                      alt={partner.title} 
                      className="relative z-10 max-w-[88%] max-h-[85%] object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 3D Floor Shadow */}
                <div className="w-28 sm:w-36 h-3 rounded-full bg-slate-400/20 blur-sm mt-4 transition-all duration-500 group-hover:w-24 group-hover:opacity-40"></div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            3. ACCREDITATION & CERTIFICATE TRUST RIBBON
            ========================================================================= */}
        <div className="bg-white/95 rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <VerifiedIcon sx={{ fontSize: 22 }} className="text-[#0284c7] shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-[#102a4d]">
              All students receive industry-recognized IEEE Course Completion &amp; Project Experience Certificates.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <CheckCircleIcon sx={{ fontSize: 16 }} className="text-[#0284c7]" />
              <span>ISO 9001:2015 Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircleIcon sx={{ fontSize: 16 }} className="text-[#0284c7]" />
              <span>Skill India Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircleIcon sx={{ fontSize: 16 }} className="text-[#0284c7]" />
              <span>Anna University Aligned</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
