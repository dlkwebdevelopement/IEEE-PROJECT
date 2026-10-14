import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getStoredBlogs, fetchBlogsFromDb } from "../data/blogData";

// Lucide Icons for 3D Modern Aesthetic
import {
  Search,
  Sparkles,
  BookOpen,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Bookmark,
  Share2,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight,
  Filter,
  CheckCircle2,
  MessageSquare,
  Zap,
  Terminal,
  ExternalLink
} from "lucide-react";

const categories = [
  "All",
  "IoT & Protocols",
  "Robotics & Hardware",
  "Digital Electronics",
  "VLSI & Embedded",
  "AI & Deep Learning",
  "Cloud & DevOps",
];

// Topic quick filter suggestions
const popularSearches = ["MQTT", "Motor Drivers", "FPGA", "Boolean", "Medical AI", "Microservices"];

// Color themes based on category for rich 3D card accents
const getCategoryTheme = (category) => {
  switch (category) {
    case "IoT & Protocols":
      return {
        badge: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
        glow: "from-cyan-500/20 to-blue-600/10",
        accent: "text-cyan-500",
        icon: <Zap className="w-4 h-4 text-cyan-500" />
      };
    case "Robotics & Hardware":
      return {
        badge: "bg-amber-500/10 text-amber-600 border-amber-500/30",
        glow: "from-amber-500/20 to-orange-600/10",
        accent: "text-amber-500",
        icon: <Cpu className="w-4 h-4 text-amber-500" />
      };
    case "Digital Electronics":
      return {
        badge: "bg-purple-500/10 text-purple-600 border-purple-500/30",
        glow: "from-purple-500/20 to-indigo-600/10",
        accent: "text-purple-500",
        icon: <Layers className="w-4 h-4 text-purple-500" />
      };
    case "VLSI & Embedded":
      return {
        badge: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
        glow: "from-emerald-500/20 to-teal-600/10",
        accent: "text-emerald-500",
        icon: <Terminal className="w-4 h-4 text-emerald-500" />
      };
    case "AI & Deep Learning":
      return {
        badge: "bg-rose-500/10 text-rose-600 border-rose-500/30",
        glow: "from-rose-500/20 to-pink-600/10",
        accent: "text-rose-500",
        icon: <Sparkles className="w-4 h-4 text-rose-500" />
      };
    default:
      return {
        badge: "bg-orange-500/10 text-[#ff8200] border-orange-500/30",
        glow: "from-orange-500/20 to-amber-600/10",
        accent: "text-[#ff8200]",
        icon: <BookOpen className="w-4 h-4 text-[#ff8200]" />
      };
  }
};

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState(() => getStoredBlogs());
  const [isLoading, setIsLoading] = useState(posts.length === 0);

  useEffect(() => {
    fetchBlogsFromDb().then(data => {
      if (Array.isArray(data) && data.length > 0) {
        setPosts(data);
      }
      setIsLoading(false);
    });
  }, []);

  // Filtered blogs based on search query and category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCat =
        selectedCategory === "All" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const tagsArr = Array.isArray(post.tags) ? post.tags : (post.tags ? [post.tags] : []);
      const matchesSearch =
        !q ||
        (post.title || '').toLowerCase().includes(q) ||
        (post.excerpt || '').toLowerCase().includes(q) ||
        tagsArr.some((t) => String(t).toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [posts, searchQuery, selectedCategory]);

  const featuredPost = Array.isArray(posts) && posts.length > 0 ? posts[0] : null;

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-[#ff8200] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Hero Header with 3D Cybernetic Ambient Glow */}
      <section className="relative bg-gradient-to-b from-[#061426] via-[#091b35] to-[#0d2346] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
        {/* Dynamic 3D Ambient Orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#ff8200]/20 to-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-5">
          
          {/* Glowing Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/20 text-amber-300 text-xs font-black uppercase tracking-wider backdrop-blur-xl shadow-[0_4px_20px_rgba(255,130,0,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff8200] animate-spin-slow" />
            <span>IEEE Engineering Research & Technical Publications</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
          >
            Knowledge Hub &{" "}
            <span className="bg-gradient-to-r from-[#ff8200] via-[#ffa940] to-amber-300 bg-clip-text text-transparent">
              Technical Insights
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Master final year IEEE concepts with in-depth breakdowns of IoT communication protocols, FPGA hardware acceleration, AI neural architectures, and embedded motor systems.
          </motion.p>

          {/* Search Bar with 3D Focus & Popular Tags */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-3 max-w-2xl mx-auto space-y-3"
          >
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ff8200] transition-colors pointer-events-none">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search by topic, protocol, or keyword (e.g. MQTT, FPGA, Motor Driver, CNN)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/[0.08] hover:bg-white/[0.12] focus:bg-white text-white focus:text-slate-900 placeholder:text-slate-400 rounded-2xl border border-white/20 focus:border-[#ff8200] focus:ring-4 focus:ring-orange-500/20 focus:outline-none transition-all text-sm font-semibold shadow-2xl backdrop-blur-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-xs font-bold cursor-pointer transition-all"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Filter Tag Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-400">
              <span className="font-semibold text-slate-400 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#ff8200]" />
                Trending:
              </span>
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.15] text-slate-300 hover:text-white border border-white/10 transition-all font-medium cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Sticky 3D Category Ribbon */}
      <section className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 px-4 sm:px-6 lg:px-8 sticky top-0 z-30 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none w-full">
            {categories.map((cat) => {
              const isSel = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSel
                      ? "bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] text-white shadow-[0_4px_14px_rgba(255,130,0,0.35)] scale-105 border border-amber-300/40"
                      : "bg-slate-100/80 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200/80"
                  }`}
                >
                  <span>{cat}</span>
                  {isSel && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-500 shrink-0 pl-3 border-l border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{filteredPosts.length} Technical Articles</span>
          </div>
        </div>
      </section>

      {/* 4. Main Blog Feed */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* ================= HERO FEATURED PUBLICATION (3D GLASSMORPHIC SHOWCASE) ================= */}
        {selectedCategory === "All" && !searchQuery && featuredPost && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff8200] animate-pulse" />
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <span>Spotlight Research Publication</span>
                </h2>
              </div>
              <span className="text-[11px] font-bold text-[#ff8200] uppercase tracking-wider bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                ⭐ Editor's Choice
              </span>
            </div>

            <article className="relative rounded-3xl bg-gradient-to-br from-white via-slate-50 to-orange-50/20 border-2 border-slate-200/90 hover:border-orange-300 shadow-[0_12px_45px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(255,130,0,0.15)] transition-all duration-300 overflow-hidden group">
              {/* Glowing Corner Accents */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[#ff8200]/20 to-cyan-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff8200] via-[#38bdf8] to-[#0ea5e9]" />

              <div className="p-6 sm:p-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-8 space-y-4">
                  {/* Category Pill & Reading Time */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold">
                    <span className="px-3 py-1 rounded-xl bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{featuredPost.category || "IoT & Protocols"}</span>
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-600 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{featuredPost.readTime || featuredPost.read_time || "6 min read"}</span>
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>IEEE 2025/2026 Aligned</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight group-hover:text-[#ff8200] transition-colors">
                    <Link to={`/blog/${featuredPost.slug}`} className="!no-underline text-inherit">
                      {featuredPost.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {featuredPost.excerpt}
                  </p>

                  {/* Author & Meta Bar */}
                  <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-200/80 text-xs text-slate-500 font-semibold">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#ff8200] to-amber-300 flex items-center justify-center text-white text-[11px] font-black shadow-xs">
                        DLK
                      </div>
                      <span className="text-slate-800 font-bold">{featuredPost.author || "ieeeprojectcentre"}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{featuredPost.date || "July 2026"}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                      <span>{featuredPost.commentsCount || 0} Comments</span>
                    </div>
                  </div>

                  {/* 3D Action Button */}
                  <div className="pt-2">
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-2xl transition-all !no-underline shadow-[0_6px_20px_rgba(255,130,0,0.35)] hover:scale-105 active:scale-95 group/btn"
                    >
                      <span>Explore Technical Article</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right 3D Visual Decorative Orb Showcase */}
                <div className="lg:col-span-4 flex justify-center">
                  <div className="w-full max-w-[280px] p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-[#071324] text-white border border-slate-800 shadow-2xl relative overflow-hidden group/box">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-[#ff8200]/10 pointer-events-none" />
                    
                    {/* Simulated Protocol Packet Diagram */}
                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 border-b border-white/10 pb-2">
                        <span className="flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-[#ff8200]" />
                          <span>IoT Broker Telemetry</span>
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-bold">
                          ACTIVE
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/5 space-y-1.5 font-mono text-[10.5px]">
                        <div className="text-slate-400 flex justify-between">
                          <span>Protocol:</span>
                          <span className="text-cyan-300 font-bold">MQTT v5.0</span>
                        </div>
                        <div className="text-slate-400 flex justify-between">
                          <span>QoS Level:</span>
                          <span className="text-amber-300 font-bold">QoS 2 (Exact)</span>
                        </div>
                        <div className="text-slate-400 flex justify-between">
                          <span>Header Size:</span>
                          <span className="text-emerald-300 font-bold">2 Bytes</span>
                        </div>
                        <div className="text-slate-400 flex justify-between">
                          <span>Latency:</span>
                          <span className="text-purple-300 font-bold">&lt; 12 ms</span>
                        </div>
                      </div>

                      <div className="text-center pt-2">
                        <span className="text-[11px] font-bold text-slate-300 block">
                          Full Architecture & Verilog HDL Flow Inside
                        </span>
                        <Link
                          to={`/blog/${featuredPost.slug}`}
                          className="text-xs font-black text-[#ff8200] hover:text-amber-300 inline-flex items-center gap-1 mt-1 !no-underline"
                        >
                          <span>Read Full Spec</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          </div>
        )}

        {/* ================= ALL TECHNICAL ARTICLES GRID ================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {selectedCategory === "All" ? "Featured Research Articles" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Curated and verified project implementation tutorials for engineering scholars.
              </p>
            </div>

            {selectedCategory !== "All" && (
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-xs font-bold text-[#ff8200] hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-xl border border-orange-200 transition-all cursor-pointer"
              >
                Clear Filter ✕
              </button>
            )}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((sk) => (
                <div key={sk} className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 animate-pulse">
                  <div className="h-5 bg-slate-100 rounded-xl w-1/3" />
                  <div className="h-6 bg-slate-100 rounded-xl w-4/5" />
                  <div className="h-16 bg-slate-100 rounded-xl w-full" />
                  <div className="h-4 bg-slate-100 rounded-xl w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-slate-200 text-slate-500 space-y-3 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#ff8200] flex items-center justify-center mx-auto text-xl border border-amber-200">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-800">No articles matched "{searchQuery}"</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try searching for related keywords like "IoT", "Motor", "FPGA", "Boolean", or "Neural Networks".
              </p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-2 px-5 py-2.5 bg-[#ff8200] text-white rounded-xl text-xs font-bold cursor-pointer hover:bg-[#e06d00] transition-all shadow-md"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, idx) => {
                const theme = getCategoryTheme(post.category);
                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-3xl border border-slate-200/90 hover:border-orange-300 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_40px_rgba(255,130,0,0.12)] transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
                  >
                    {/* Top Glow Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.glow}`} />

                    <div className="space-y-3.5">
                      {/* Category & Read Time Capsule */}
                      <div className="flex items-center justify-between text-xs">
                        <span className={`px-2.5 py-1 rounded-xl text-[11px] font-black border flex items-center gap-1.5 ${theme.badge}`}>
                          {theme.icon}
                          <span>{post.category}</span>
                        </span>
                        <span className="text-slate-400 font-semibold text-[11px] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-black text-slate-900 leading-snug group-hover:text-[#ff8200] transition-colors line-clamp-2">
                        <Link to={`/blog/${post.slug}`} className="!no-underline text-inherit">
                          {post.title}
                        </Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tag Capsules */}
                      {post.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {post.tags.slice(0, 3).map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-[10px] font-bold"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 font-black text-xs text-[#ff8200] group-hover:text-[#e06d00] !no-underline group-hover:translate-x-0.5 transition-all"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>

        {/* ================= 3D FINAL YEAR PROJECT ASSISTANCE BANNER ================= */}
        <section className="relative rounded-3xl bg-gradient-to-r from-[#07192f] via-[#0b2447] to-[#081d38] text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff8200]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-black uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#ff8200]" />
              <span>Direct Implementation Assistance</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Looking to build an IEEE Final Year Project in these domains?
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              Our Chennai development center provides ready-to-run source code, tested hardware kits (ESP32, Arduino, Raspberry Pi, Spartan-7 FPGA), IEEE base papers, and step-by-step viva presentation training.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-[#ff8200] to-[#ea580c] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all !no-underline shadow-[0_4px_16px_rgba(255,130,0,0.4)] hover:scale-105 active:scale-95"
              >
                Request Topic Consultation
              </Link>
              <a
                href="https://wa.me/919840974408"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all !no-underline border border-white/15 hover:scale-105 active:scale-95"
              >
                WhatsApp Technical Advisor
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}
