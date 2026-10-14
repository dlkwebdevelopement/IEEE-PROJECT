import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getBlogBySlug, getRelatedBlogs, getStoredBlogs, fetchBlogBySlugFromDb, fetchBlogsFromDb } from "../data/blogData";

// Lucide Modern Icons
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  Terminal,
  MessageSquare,
  Copy,
  Check,
  Send,
  HelpCircle,
  BookOpen,
  Phone,
  ThumbsUp,
  FileText,
  ListOrdered
} from "lucide-react";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Reading progress state
  const [readingProgress, setReadingProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  // Track window scroll for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Retrieve current post from database API or cached store
  const [post, setPost] = useState(() => getBlogBySlug(slug) || null);
  const [allBlogs, setAllBlogs] = useState(() => getStoredBlogs());

  useEffect(() => {
    fetchBlogBySlugFromDb(slug).then(blog => {
      if (blog && blog.title) {
        setPost(blog);
      }
    });
    fetchBlogsFromDb().then(blogs => {
      if (Array.isArray(blogs) && blogs.length > 0) {
        setAllBlogs(blogs);
      }
    });
  }, [slug]);

  const relatedPosts = getRelatedBlogs(post ? post.slug : "");

  // Determine previous and next posts safely
  const currentIndex = allBlogs.findIndex((p) => p.slug === (post ? post.slug : ""));
  const prevPost = allBlogs.length > 0 ? (currentIndex > 0 ? allBlogs[currentIndex - 1] : allBlogs[allBlogs.length - 1]) : null;
  const nextPost = allBlogs.length > 0 ? (currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : allBlogs[0]) : null;

  // Comment Form State
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Comments list
  const [commentsList, setCommentsList] = useState([
    {
      id: 1,
      name: "Sanjay Raj",
      date: "2 days ago",
      text: "The breakdown between MQTT pub/sub and HTTP request-response helped our final year team choose MQTT for our ESP32 smart grid sensor project. Excellent explanation!",
      likes: 12
    },
    {
      id: 2,
      name: "Deepika V",
      date: "1 week ago",
      text: "Is there sample Arduino / Python code available to test this with Mosquitto broker? Loved the QoS level comparison table.",
      likes: 8
    }
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    
    const newComment = {
      id: Date.now(),
      name: commentName.trim(),
      date: "Just now",
      text: commentText.trim(),
      likes: 0
    };

    setCommentsList([newComment, ...commentsList]);
    setIsSubmitted(true);
    setTimeout(() => {
      setCommentName("");
      setCommentEmail("");
      setCommentText("");
      setIsSubmitted(false);
    }, 4000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const copyPageLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#061426] flex flex-col items-center justify-center text-white">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#ff8200] border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-300 font-bold text-sm tracking-wider uppercase">Loading publication from database...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-[#ff8200] selection:text-white relative">
      {/* 1. Dynamic Reading Progress Bar (Fixed to top of window) */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-slate-200/50 backdrop-blur-md">
        <div
          className="h-full bg-gradient-to-r from-[#ff8200] via-[#38bdf8] to-[#ff8200] transition-all duration-150 shadow-[0_0_12px_rgba(255,130,0,0.6)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* 2. Global Navigation Bar */}
      <Navbar />

      {/* 3. Hero Article Header with 3D Cyber Ambient Atmosphere */}
      <header className="relative bg-gradient-to-b from-[#061426] via-[#091b35] to-[#0d2346] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#ff8200]/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-6">
          
          {/* Top Breadcrumb & Share Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap bg-white/[0.06] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-slate-300">
              <Link to="/" className="hover:text-[#ff8200] font-medium !no-underline transition-colors text-inherit">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <Link to="/blogs" className="hover:text-[#ff8200] font-medium !no-underline transition-colors text-inherit">
                Technical Hub
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-[#ff8200] font-bold truncate max-w-[200px] sm:max-w-[340px]">
                {post.category}
              </span>
            </div>

            {/* Share Capsule */}
            <div className="flex items-center gap-2">
              <button
                onClick={copyPageLink}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-white font-bold flex items-center gap-1.5 transition-all cursor-pointer text-xs"
                title="Copy Link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-300" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 font-bold flex items-center gap-1.5 transition-all text-xs !no-underline"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </a>
            </div>
          </div>

          {/* Category & Verified Badge */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-black text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#ff8200]" />
              <span>{post.category}</span>
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/[0.08] border border-white/15 text-slate-300 font-bold text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </span>
            <span className="px-3 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified IEEE Architecture</span>
            </span>
          </div>

          {/* Article Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.2] tracking-tight max-w-5xl">
            {post.title}
          </h1>

          {/* Author Credential Card in Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#ff8200] via-[#ff9500] to-amber-300 flex items-center justify-center text-white font-black text-sm shadow-[0_4px_16px_rgba(255,130,0,0.4)] border border-amber-200/50">
                DLK
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-sm">{post.author}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-black">
                    STAFF
                  </span>
                </div>
                <span className="text-slate-400 text-xs block">
                  Senior Technical Architecture Group • DLK IEEE Centre
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Published on {post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                <span>{commentsList.length} Discussions</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 4. Main Two-Column Reading Layout */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ================= LEFT MAIN ARTICLE BODY (8 COLS) ================= */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* 1. Executive Summary / Key Takeaways Callout Card */}
            <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-500/[0.07] via-white to-blue-500/[0.05] border-2 border-orange-200 shadow-sm space-y-3 overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-black text-[#ff8200] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#ff8200]" />
                <span>Executive Research Abstract</span>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags && post.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-600 text-[11px] font-bold shadow-2xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Comprehensive Introduction */}
            <section className="space-y-4 text-slate-700 leading-relaxed">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#ff8200]" />
                <span>1. Foundational Overview</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
                {post.introduction}
              </p>
            </section>

            {/* 3. Deep-Dive Section Cards */}
            {post.sections && post.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-5 pt-2">
                {/* Section Header with Number Pill */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200/90">
                  <span className="w-8 h-8 rounded-2xl bg-[#001733] text-white flex items-center justify-center text-xs font-black shadow-xs">
                    {`0${sIdx + 2}`}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {section.heading}
                  </h3>
                </div>

                {/* Points Grid / Cards */}
                {section.points && section.points.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-300 shadow-[0_4px_16px_rgba(15,23,42,0.03)] hover:shadow-md transition-all space-y-2 group"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-orange-50 text-[#ff8200] flex items-center justify-center text-xs font-black group-hover:scale-110 transition-transform">
                            ✓
                          </div>
                          <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-[#ff8200] transition-colors">
                            {pt.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {pt.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional Descriptive Text Block */}
                {section.text && (
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line shadow-2xs">
                    {section.text}
                  </div>
                )}
              </section>
            ))}

            {/* 4. Interactive Protocol / Architecture Comparison Shield */}
            <section className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Technical Architecture Specifications
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-amber-300">
                  IEEE Standard: 802.15.4 / RFC 7231
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                When designing final year embedded or software prototypes, picking the correct protocol tier significantly determines system performance, power budget, and packet delivery reliability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 space-y-2">
                  <span className="text-cyan-400 font-bold block text-sm">MQTT Protocol (Broker)</span>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    <div>• Pattern: Publish / Subscribe</div>
                    <div>• Packet Header: 2 Bytes (Ultra-compact)</div>
                    <div>• Network Transport: TCP (Persistent Socket)</div>
                    <div>• Best For: Battery-powered sensors & telemetry</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 space-y-2">
                  <span className="text-amber-400 font-bold block text-sm">HTTP/REST Protocol (API)</span>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    <div>• Pattern: Request / Response</div>
                    <div>• Packet Header: 200+ Bytes (Variable)</div>
                    <div>• Network Transport: TCP (Stateless connection)</div>
                    <div>• Best For: Admin dashboards & cloud APIs</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Final Year Project Assistance Banner */}
            <div className="rounded-3xl bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] p-6 sm:p-8 text-white shadow-[0_8px_30px_rgba(255,130,0,0.3)] space-y-4">
              <div className="space-y-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-black text-[10px] uppercase tracking-wider">
                  Academic Assistance
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Need Full Source Code & Hardware Kit for this Project?
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl">
                  Get complete verified source code, IEEE base papers, circuit wiring diagrams, and live demonstration training directly from our Chennai lab.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-black text-xs uppercase tracking-wider transition-all !no-underline shadow-md hover:scale-105 active:scale-95"
                >
                  Book Project Demo
                </Link>
                <a
                  href="https://wa.me/919840974408"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-black text-xs uppercase tracking-wider transition-all !no-underline border border-white/30 hover:scale-105 active:scale-95"
                >
                  WhatsApp Expert
                </a>
              </div>
            </div>

            {/* 6. Previous / Next Article Navigation Cards */}
            {prevPost && nextPost && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group !no-underline"
                >
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 group-hover:text-[#ff8200] flex items-center gap-1">
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    <span>Previous Technical Guide</span>
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#ff8200] transition-colors line-clamp-2 mt-2">
                    {prevPost.title}
                  </span>
                </Link>

                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group text-right !no-underline"
                >
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 group-hover:text-[#ff8200] flex items-center justify-end gap-1">
                    <span>Next Technical Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-[#ff8200] transition-colors line-clamp-2 mt-2">
                    {nextPost.title}
                  </span>
                </Link>
              </div>
            )}

            {/* 7. Student Discussion & Comments Section */}
            <section className="space-y-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#ff8200]" />
                  <span>Student Discussions & Questions ({commentsList.length})</span>
                </h3>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleCommentSubmit} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h4 className="font-bold text-sm text-slate-800">Leave a Technical Question or Comment</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={commentName}
                      onChange={(e) => setCommentName(e.target.value)}
                      required
                      className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-slate-50 text-xs font-semibold focus:outline-none focus:border-[#ff8200] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@gmail.com"
                      value={commentEmail}
                      onChange={(e) => setCommentEmail(e.target.value)}
                      className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-slate-50 text-xs font-semibold focus:outline-none focus:border-[#ff8200] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Discussion / Query *</label>
                  <textarea
                    placeholder="Ask questions about base papers, implementation tools, or algorithms..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                    rows="3"
                    className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-slate-50 text-xs font-medium focus:outline-none focus:border-[#ff8200] focus:bg-white transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-[#ff8200] hover:to-[#ea580c] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2 hover:scale-105 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Comment</span>
                  </button>

                  {isSubmitted && (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 animate-pulse">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Thank you! Your discussion has been posted.</span>
                    </span>
                  )}
                </div>
              </form>

              {/* Display Comments List */}
              <div className="space-y-3">
                {commentsList.map((c) => (
                  <div key={c.id} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 font-black text-[10px] text-slate-700 flex items-center justify-center">
                          {c.name.charAt(0)}
                        </div>
                        <span className="font-bold text-slate-900">{c.name}</span>
                      </div>
                      <span className="text-slate-400 font-medium">{c.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* ================= RIGHT STICKY 3D SIDEBAR (4 COLS) ================= */}
          <aside className="lg:col-span-4 space-y-6 sticky top-20">
            
            {/* 1. Quick Project Enquiry 3D Widget */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#07172e] to-[#0a2347] text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-black text-[#ff8200] uppercase tracking-wider">
                <Phone className="w-4 h-4" />
                <span>Instant Consultation</span>
              </div>
              <h4 className="text-base font-black text-white leading-snug">
                Need Fast Guidance for Final Year Review?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our technical advisors in Chennai for project titles, IEEE journal papers, and hardware kits.
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href="tel:+919840974408"
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all !no-underline border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ff8200]" />
                  <span>Call: +91 98409 74408</span>
                </a>
                <a
                  href="https://wa.me/919840974408"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#ff8200] hover:bg-[#ea580c] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all !no-underline shadow-md"
                >
                  <span>WhatsApp Chat Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 2. Table of Contents Quick Jump Pill */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-wider">
                <ListOrdered className="w-4 h-4 text-[#ff8200]" />
                <span>In This Article</span>
              </div>
              <nav className="space-y-1.5 text-xs">
                <a href="#overview" className="block text-slate-600 hover:text-[#ff8200] font-semibold transition-colors !no-underline">
                  1. Foundational Overview
                </a>
                {post.sections && post.sections.map((sec, idx) => (
                  <span key={idx} className="block text-slate-600 font-medium truncate">
                    {`${idx + 2}. ${sec.heading}`}
                  </span>
                ))}
              </nav>
            </div>

            {/* 3. Recommended Related Publications */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#ff8200]" />
                  <span>Related Articles</span>
                </h4>
                <Link to="/blogs" className="text-[11px] font-bold text-[#ff8200] hover:underline !no-underline">
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/blog/${rel.slug}`}
                    className="block p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group !no-underline"
                  >
                    <span className="text-[10px] font-extrabold text-cyan-600 uppercase tracking-wider block">
                      {rel.category}
                    </span>
                    <h5 className="font-bold text-xs text-slate-900 group-hover:text-[#ff8200] transition-colors line-clamp-2 mt-1">
                      {rel.title}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium mt-1.5">
                      <span>{rel.readTime}</span>
                      <span>•</span>
                      <span>{rel.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}
