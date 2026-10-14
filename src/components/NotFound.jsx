import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Home,
  ArrowLeft,
  Search,
  Compass,
  Code2,
  Cpu,
  Database,
  Wifi,
  Sparkles,
  BookOpen,
  PhoneCall,
  ChevronRight,
  ShieldAlert,
  Layers,
  HelpCircle,
  FolderGit2
} from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const popularCategories = [
    {
      title: "Java IEEE Projects",
      desc: "Cloud, Cybersecurity & Distributed Systems",
      path: "/2024-2025-java-ieee-projects",
      icon: <Code2 className="w-5 h-5 text-amber-500" />,
      color: "from-amber-500/10 to-orange-500/5 hover:border-amber-500/40",
      badge: "2024-2025"
    },
    {
      title: "Computer Vision & AI",
      desc: "YOLO, Object Detection & Segmentation",
      path: "/yolo-project-center-in-chennai",
      icon: <Sparkles className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-500/10 to-blue-500/5 hover:border-indigo-500/40",
      badge: "Trending"
    },
    {
      title: "IoT & Embedded Systems",
      desc: "Raspberry Pi, Sensors & Smart Telemetry",
      path: "/iot-projects-2024-2025-in-chennai",
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-500/10 to-teal-500/5 hover:border-emerald-500/40",
      badge: "Hardware"
    },
    {
      title: "Database Architectures",
      desc: "MongoDB, PostgreSQL & SQLite Projects",
      path: "/mongodb-project-center-in-chennai",
      icon: <Database className="w-5 h-5 text-cyan-500" />,
      color: "from-cyan-500/10 to-blue-500/5 hover:border-cyan-500/40",
      badge: "Fullstack"
    },
    {
      title: "Python Frameworks",
      desc: "Django, Flask & Deep Learning Stacks",
      path: "/python-framework-projects-in-chennai",
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      color: "from-blue-500/10 to-cyan-500/5 hover:border-blue-500/40",
      badge: "Popular"
    },
    {
      title: "Technical Blogs & Guides",
      desc: "Project source codes, synopses & PPTs",
      path: "/blogs",
      icon: <BookOpen className="w-5 h-5 text-purple-500" />,
      color: "from-purple-500/10 to-pink-500/5 hover:border-purple-500/40",
      badge: "Knowledge"
    }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const q = searchQuery.toLowerCase();
    if (q.includes("java")) {
      navigate("/2024-2025-java-ieee-projects");
    } else if (q.includes("python") || q.includes("django") || q.includes("flask")) {
      navigate("/python-framework-projects-in-chennai");
    } else if (q.includes("iot") || q.includes("internet of things")) {
      navigate("/iot-projects-2024-2025-in-chennai");
    } else if (q.includes("embedded") || q.includes("raspberry")) {
      navigate("/raspberry-pi-project-center-in-chennai");
    } else if (q.includes("database") || q.includes("sql") || q.includes("mongo") || q.includes("postgres")) {
      navigate("/mongodb-project-center-in-chennai");
    } else if (q.includes("yolo") || q.includes("vision") || q.includes("detect")) {
      navigate("/yolo-project-center-in-chennai");
    } else if (q.includes("contact") || q.includes("enquiry") || q.includes("help")) {
      navigate("/contact");
    } else if (q.includes("admin") || q.includes("dashboard")) {
      navigate("/admin");
    } else if (q.includes("blog") || q.includes("article")) {
      navigate("/blogs");
    } else {
      navigate(`/blogs`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <Navbar />

      {/* Main 404 Hero Section */}
      <main className="flex-grow">
        {/* Glow Hero Banner */}
        <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: "linear-gradient(135deg, #071d49, #0f3780 50%, #08a6a6)" }}>
          {/* Ambient Background Circles */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            {/* Animated 404 Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-semibold mb-6 shadow-inner"
            >
              <ShieldAlert className="w-4 h-4 text-cyan-300" />
              HTTP 404 &bull; Page Not Found
            </motion.div>

            {/* Huge 404 Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-teal-300 tracking-tight leading-none mb-4 drop-shadow-sm"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
            >
              Oops! Looks like this page went off the grid.
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-cyan-100/90 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              The project page or resource you are looking for might have been moved, renamed, or temporarily unavailable. Explore our verified IEEE project domains below or use the quick search.
            </motion.p>

            {/* Quick Search Form */}
            <motion.form
              onSubmit={handleSearchSubmit}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl mx-auto flex items-center bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/30 mb-8"
            >
              <div className="pl-3 pr-2 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search domain (e.g., Java, YOLO, IoT, Python, Database)..."
                className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 text-sm sm:text-base px-2 py-2"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Find</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.form>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm"
            >
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-medium transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>

              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold shadow-lg hover:shadow-cyan-400/30 transition-all"
              >
                <Home className="w-4 h-4" />
                Return to Homepage
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-medium transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                Need Assistance?
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Popular IEEE Project Hubs Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5" />
                Explore Active Catalogs
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Popular IEEE Project Domains
              </h3>
              <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
                Jump directly into our latest real-time IEEE academic project titles and complete source code repositories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCategories.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-slate-100 group-hover:bg-blue-50 transition-colors">
                        {item.icon}
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors pt-2 border-t border-slate-100"
                  >
                    <span>Browse Projects</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Quick Links Footer Bar */}
            <div className="mt-12 bg-gradient-to-r from-blue-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="p-3 rounded-xl bg-cyan-400/20 text-cyan-300 hidden sm:block">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Looking for Custom Project Development?</h4>
                  <p className="text-sm text-cyan-200/80">Get customized IEEE project code, documentation, and viva training support.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold text-sm transition-all shadow-md"
                >
                  Contact Us
                </Link>
                <Link
                  to="/admin"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20"
                >
                  Admin Portal
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
