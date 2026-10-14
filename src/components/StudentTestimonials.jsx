import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

// Thumbnails
import javaTraining from "../assets/java-training.jpg.jpeg";
import javaTraining1 from "../assets/java-training1.jpg.jpeg";
import javaTraining2 from "../assets/java-training2.jpg.jpeg";
import javaTraining3 from "../assets/java-training3.jpg.jpeg";
import javaTraining4 from "../assets/java-training4.jpg.jpeg";
import realTimeProject from "../assets/real-time-project-training.jpg.jpeg";

// Review Images
import rev1 from "../assets/1-13-1.jpg.jpeg";
import rev2 from "../assets/2-8-1.jpg.jpeg";
import rev3 from "../assets/3-5-1.jpg.jpeg";
import rev4 from "../assets/4-5-1.jpg.jpeg";
import rev5 from "../assets/5-7-1.jpg.jpeg";
import rev6 from "../assets/6-3-1.jpg.jpeg";
import rev7 from "../assets/7-3-1.jpg.jpeg";
import rev8 from "../assets/8-3-1.jpg.jpeg";
import rev9 from "../assets/9-3-1.jpg.jpeg";
import rev10 from "../assets/10-2-1-Copy.jpg.jpeg";

const testimonials = [
  { id: 1, name: "Suresh & Team", degree: "B.E ECE Student", project: "IoT Garbage Monitoring System", videoId: "oy2aGT3X84k", image: javaTraining2, rating: 5 },
  { id: 2, name: "Priyanka R.", degree: "B.Tech IT Student", project: "AI Disease Prediction System", videoId: "PmF8Rb53gUY", image: javaTraining1, rating: 5 },
  { id: 3, name: "Karthik K.", degree: "B.E CSE Student", project: "Cloud Security & Cryptography", videoId: "iI3z_knlAuU", image: javaTraining, rating: 5 },
  { id: 4, name: "Dinesh & Group", degree: "M.E Embedded Systems", project: "Robotic Surveillance Rover", videoId: "oy2aGT3X84k", image: realTimeProject, rating: 5 },
  { id: 5, name: "Ananya M.", degree: "MCA Student", project: "Full Stack Web Application", videoId: "ChrJos_BkPU", image: javaTraining4, rating: 5 },
  { id: 6, name: "Vigneshwaran", degree: "B.E EEE Student", project: "Smart Solar Grid Inverter", videoId: "LgJQ4NohGHs", image: javaTraining3, rating: 5 },
];

const reviewImages = [rev1, rev2, rev3, rev4, rev5, rev6, rev7, rev8, rev9, rev10];

export default function StudentTestimonials() {
  const [testData] = useState(testimonials);
  const [currentPage, setCurrentPage] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [reviewPage, setReviewPage] = useState(0);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const reviewsPerPage = 4;
  const totalReviewPages = Math.ceil(reviewImages.length / reviewsPerPage);

  // Auto-scroll for videos
  useEffect(() => {
    if (playingVideoId !== null) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [playingVideoId, totalPages]);

  // Auto-scroll for reviews (paused if user is viewing full view)
  useEffect(() => {
    if (selectedReviewIndex !== null) return;
    const timer = setInterval(() => {
      setReviewPage((prev) => (prev === totalReviewPages - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [selectedReviewIndex, totalReviewPages]);

  // Keyboard navigation for full view modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedReviewIndex === null) return;
      if (e.key === "Escape") setSelectedReviewIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedReviewIndex((prev) => (prev === 0 ? reviewImages.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedReviewIndex((prev) => (prev === reviewImages.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedReviewIndex]);

  const currentVideos = testData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const currentReviews = reviewImages.slice(
    reviewPage * reviewsPerPage,
    (reviewPage + 1) * reviewsPerPage
  );

  return (
    <section className="relative w-full bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#ffffff] text-slate-800 py-8 sm:py-10 lg:py-12 overflow-hidden font-sans select-none border-b border-slate-200/80">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0284c712_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-sky-100/40 blur-[130px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-amber-100/30 blur-[120px]"></div>
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
            STUDENT <span className="text-[#ff8200]">TESTIMONIALS</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-12 h-[3px] bg-gradient-to-r from-transparent to-[#0284c7] rounded-full"></div>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-sky-400 bg-[#0072ff] shadow-[0_0_12px_rgba(2,132,199,0.75)]"></div>
            <div className="w-12 h-[3px] bg-gradient-to-l from-transparent to-[#ff8200] rounded-full"></div>
          </div>
        </motion.div>

        {/* =========================================================================
            2. VIDEO TESTIMONIALS CARDS (3-COLUMN GRID)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <AnimatePresence>
            {currentVideos.map((testItem) => (
              <motion.div
                key={testItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 rounded-3xl border-2 border-slate-100 shadow-[0_15px_35px_-10px_rgba(16,42,77,0.08)] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
              >
                {/* 16:9 Video / Thumbnail Container */}
                <div 
                  className="relative w-full pb-[56.25%] bg-slate-950 cursor-pointer overflow-hidden"
                  onClick={() => setPlayingVideoId(testItem.id)}
                >
                  {playingVideoId === testItem.id ? (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${testItem.videoId}?autoplay=1&rel=0`}
                      title={`Student Testimonial ${testItem.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img 
                        src={testItem.image} 
                        alt={`Testimonial ${testItem.name}`} 
                        className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-[#ff0000] text-slate-900 group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                          <PlayArrowIcon sx={{ fontSize: 28 }} className="ml-0.5" />
                        </div>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <VerifiedIcon sx={{ fontSize: 13 }} className="text-[#00e5ff]" />
                        <span>Verified Student</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Card Meta Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Star Ratings */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, sIdx) => (
                        <StarIcon key={sIdx} sx={{ fontSize: 16 }} className="text-[#facc15]" />
                      ))}
                      <span className="text-xs font-bold text-slate-500 ml-1">5.0 Star</span>
                    </div>

                    <h4 className="font-['Outfit'] font-black text-xl text-[#102a4d] mb-0.5">
                      {testItem.name}
                    </h4>
                    <span className="text-xs font-bold text-[#0284c7] block mb-2">
                      {testItem.degree}
                    </span>

                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-0">
                      Project: <span className="font-semibold text-slate-800">&quot;{testItem.project}&quot;</span>
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>100% Practical Training</span>
                    <span className="text-[#0284c7]">College 1st Class</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Video Pagination Controls */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <button
            onClick={() => {
              setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
              setPlayingVideoId(null);
            }}
            className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#102a4d] cursor-pointer shadow-xs transition-colors"
            aria-label="Previous page"
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentPage(idx);
                setPlayingVideoId(null);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentPage === idx ? "w-7 bg-[#0284c7]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Page ${idx + 1}`}
            />
          ))}

          <button
            onClick={() => {
              setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
              setPlayingVideoId(null);
            }}
            className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#102a4d] cursor-pointer shadow-xs transition-colors"
            aria-label="Next page"
          >
            <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
          </button>
        </div>

        {/* =========================================================================
            3. WRITTEN FEEDBACK & CERTIFICATE REVIEWS GALLERY
            ========================================================================= */}
        <div className="w-full mt-2 sm:mt-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
            <div>
              <span className="text-xs font-bold text-[#0284c7] tracking-widest uppercase">
                STUDENT FEEDBACK LETTERS
              </span>
              <h3 className="font-['Outfit'] font-black text-xl sm:text-2xl text-[#102a4d] mt-0.5">
                Handwritten Student Reviews &amp; Awards
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 mr-2">
                Page {reviewPage + 1} of {totalReviewPages}
              </span>
              <button
                onClick={() => setReviewPage((prev) => (prev === 0 ? totalReviewPages - 1 : prev - 1))}
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#102a4d] cursor-pointer shadow-xs transition-colors"
                aria-label="Previous Reviews"
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
              </button>
              <button
                onClick={() => setReviewPage((prev) => (prev === totalReviewPages - 1 ? 0 : prev + 1))}
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#102a4d] cursor-pointer shadow-xs transition-colors"
                aria-label="Next Reviews"
              >
                <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
              </button>
            </div>
          </div>

          {/* Reviews Grid - Only 9:16 Images Shown (No Cards, Clickable for Full View) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8">
            {currentReviews.map((img, idx) => {
              const globalIdx = reviewPage * reviewsPerPage + idx;
              return (
                <motion.div 
                  key={globalIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="w-full flex items-center justify-center cursor-pointer group"
                  onClick={() => setSelectedReviewIndex(globalIdx)}
                >
                  <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] bg-slate-900 border border-slate-200">
                    <img 
                      src={img} 
                      alt={`Student Review ${globalIdx + 1}`} 
                      className="w-full h-full aspect-[9/16] object-contain bg-slate-950/60 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Hover Overlay with "Full View" Badge */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 px-3.5 py-1.5 rounded-full bg-white/95 text-[#102a4d] text-xs font-black flex items-center gap-1.5 shadow-xl backdrop-blur-sm">
                        <ZoomInIcon sx={{ fontSize: 18 }} className="text-[#0284c7]" />
                        <span>Full View</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination Indicators for Reviews */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalReviewPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setReviewPage(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  reviewPage === idx ? "w-6 bg-[#ff8200]" : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to review page ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* =========================================================================
            4. FULL VIEW LIGHTBOX MODAL FOR STUDENT REVIEWS
            ========================================================================= */}
        <AnimatePresence>
          {selectedReviewIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedReviewIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-h-[94vh] max-w-[95vw] sm:max-w-[480px] w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Bar */}
                <div className="w-full flex items-center justify-between pb-3 px-1 text-white">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full border border-white/20">
                      Review {selectedReviewIndex + 1} of {reviewImages.length}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <VerifiedIcon sx={{ fontSize: 15 }} /> Verified
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedReviewIndex(null)}
                    className="w-9 h-9 rounded-full bg-white/20 hover:bg-red-500 text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                    aria-label="Close full view"
                  >
                    <CloseIcon sx={{ fontSize: 20 }} />
                  </button>
                </div>

                {/* Full Image Box in 9:16 Frame */}
                <div className="relative w-full max-h-[82vh] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/20 flex items-center justify-center">
                  <img
                    src={reviewImages[selectedReviewIndex]}
                    alt={`Student Review Full View ${selectedReviewIndex + 1}`}
                    className="w-full h-full object-contain"
                  />

                  {/* Previous Review Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedReviewIndex((prev) =>
                        prev === 0 ? reviewImages.length - 1 : prev - 1
                      );
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#0284c7] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-xl"
                    aria-label="Previous review"
                  >
                    <ArrowBackIosNewIcon sx={{ fontSize: 16 }} className="ml-1" />
                  </button>

                  {/* Next Review Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedReviewIndex((prev) =>
                        prev === reviewImages.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#ff8200] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-xl"
                    aria-label="Next review"
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
                  </button>
                </div>

                {/* Navigation Hint */}
                <div className="text-center text-xs text-slate-300 mt-2.5">
                  Use arrow keys or buttons to navigate • Click outside or press Esc to close
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
