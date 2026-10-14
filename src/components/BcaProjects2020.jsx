import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { API_BASE } from "../api";

// Material UI Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import VerifiedIcon from "@mui/icons-material/Verified";
import TerminalIcon from "@mui/icons-material/Terminal";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DevicesIcon from "@mui/icons-material/Devices";
import { 
  ProgramAvatar, 
  ProgramTechBadges, 
  ProgramLanguageFilterBar, 
  getProgramMeta,
  RoundTechOrb,
  JavaIcon, 
  PythonIcon, 
  PhpIcon, 
  DotNetIcon, 
  VbNetIcon, 
  DatabaseIcon, 
  ReactIcon, 
  AndroidIcon, 
  IotIcon, 
  WebIcon 
} from "./ProgramIconBadge";

// 10 BCA Application Project Years Links
const bcaYearLinks = [
  { label: "BCA Projects 2013-2014", path: "/bca-ieee-projects-2013-2014-in-chennai" },
  { label: "BCA Projects 2014 - 2015", path: "/bca-ieee-projects-2014-2015-in-chennai" },
  { label: "BCA Projects 2015 - 2016", path: "/bca-ieee-projects-2015-2016-in-chennai" },
  { label: "BCA Projects 2016 - 2017", path: "/bca-ieee-projects-2016-2017-in-chennai" },
  { label: "BCA Projects 2017 - 2018", path: "/bca-ieee-projects-2017-2018-in-chennai" },
  { label: "BCA Projects 2018 - 2019", path: "/bca-ieee-projects-2018-2019-in-chennai" },
  { label: "BCA Projects 2019 - 2020", path: "/bca-ieee-projects-2019-2020-in-chennai" },
  { label: "BCA Projects 2020 - 2021", path: "/bca-ieee-projects-2020-2021-in-chennai", active: true },
  { label: "BCA Projects 2021 - 2022", path: "/ieee-bca-project-list-2021-2022" },
  { label: "BCA Projects 2022 - 2023", path: "/ieee-bca-project-list-2022-2023" },
];

// Complete 45 Projects List for 2020-2021
const bcaProjects2020List = [
  { sno: 1, title: "E Panchayat Management Information System", domain: "e-Governance & Web Portal", tech: "PHP / MySQL / Web", description: "Automated village administrative operations, certificates generation, taxation records, and citizen complaint logging portal." },
  { sno: 2, title: "Online Mobile Phone Shop An Asp.Net Project", domain: "E-Commerce Systems", tech: "ASP.NET / C# / SQL Server", description: "Full-featured web store for purchasing mobile devices with dynamic catalog filtering, cart, and payment gateway simulation." },
  { sno: 3, title: "Cab Service Management System Project In Asp.Net", domain: "Transportation & Booking", tech: "ASP.NET / SQL Server", description: "Real-time taxi reservation platform with route calculation, driver allotment, and fare receipt generation." },
  { sno: 4, title: "Sports Management System", domain: "Sports Organization & Events", tech: "Java / MySQL / Web", description: "Platform for scheduling tournaments, managing team player profiles, referee assignments, and leaderboard updates." },
  { sno: 5, title: "Ad Agency Management Software Vb.Net", domain: "Media & Advertising ERP", tech: "VB.NET / SQL Server", description: "ERP solution for advertising companies managing client campaign contracts, media space billing, and artist commissions." },
  { sno: 7, title: "Civil Registration", domain: "Public Records & Governance", tech: "ASP.NET / SQL Server", description: "Official citizen registry tracking births, marriages, and demographic records with authenticated digital certificates." },
  { sno: 8, title: "Pet Shop Management System", domain: "Retail & Inventory Control", tech: "VB.NET / MySQL", description: "Point-of-sale and inventory system for pet supplies, animal health records, and customer loyalty management." },
  { sno: 9, title: "HR Information Reporting Systems", domain: "Human Resources Management", tech: "Web Application / SQL", description: "Comprehensive HR analytics platform delivering employee attendance reports, payroll breakdowns, and performance KPIs." },
  { sno: 10, title: "Institute Management System", domain: "Education Administration", tech: "Java / PHP / MySQL", description: "Integrated university ERP handling student admissions, fee payments, attendance logging, and timetable scheduling." },
  { sno: 11, title: "Gas Agency Management System", domain: "Distribution & Billing ERP", tech: "VB.NET / ASP.NET / SQL", description: "LPG distribution tracker overseeing domestic cylinder bookings, consumer subscriptions, and delivery boy routes." },
  { sno: 12, title: "Online Tax Management", domain: "FinTech & Tax Calculation", tech: "Web / Java / SQL", description: "Tax calculation and automated e-filing system adhering to standard income tax slabs with deduction estimators." },
  { sno: 13, title: "Ragam Web Application Project Using Asp Net", domain: "Music & Cultural Portal", tech: "ASP.NET / C# / SQL Server", description: "Music streaming and cultural festival repository cataloging classical ragas, artists, and event schedules." },
  { sno: 14, title: "Event Management Software System", domain: "Hospitality & Event Booking", tech: "PHP / Java / MySQL", description: "Corporate and wedding event coordinator handling vendor contracts, budget sheets, and guest RSVP tracking." },
  { sno: 15, title: "Design And Analysis Workforce Management Erp System", domain: "Enterprise Resource Planning", tech: "Java / J2EE / Oracle", description: "Enterprise manpower optimization engine scheduling shifts, computing overtime, and analyzing worker productivity." },
  { sno: 16, title: "Employiee Information System Using Asp.Net", domain: "Staff Management & Payroll", tech: "ASP.NET / SQL Server", description: "Centralized employee database managing appraisal reviews, leave applications, and digital payslips." },
  { sno: 17, title: "Reality Shows Organization", domain: "Media Production Management", tech: "Web Application / MySQL", description: "Audition scheduling, contestant scorecard compilation, and audience SMS voting aggregation portal." },
  { sno: 18, title: "E Sanatorium", domain: "Healthcare & Patient Records", tech: "PHP / MySQL / Web", description: "Sanatorium management system overseeing long-term recovery patient diets, medical rounds, and room allocations." },
  { sno: 19, title: "Digital Portico", domain: "Digital Archiving & Portals", tech: "Web / ASP.NET / C#", description: "Knowledge curation portal archiving research documents, historical artifacts, and academic lecture notes." },
  { sno: 20, title: "Mp3stego Hiding Text In Mp3 Files", domain: "Cyber Security & Steganography", tech: "Java / Audio Stego / Cryptography", description: "Cryptographic steganography application embedding confidential text payloads within MP3 audio bitstreams imperceptibly." },
  { sno: 21, title: "Hotel Management Software Applications", domain: "Hospitality ERP & Room Booking", tech: "VB.NET / SQL Server", description: "Desktop ERP controlling room check-ins, dining bills, housekeeping schedules, and guest checkout receipts." },
  { sno: 22, title: "Corporate Address Book Asp.Net Project", domain: "Enterprise Directory Services", tech: "ASP.NET / C# / SQL Server", description: "Internal company corporate contacts directory with role-based search, hierarchical organizational trees, and phone extensions." },
  { sno: 23, title: "Web Based Community Meeting", domain: "Collaboration & Video Conferncing", tech: "Web Sockets / MySQL", description: "Virtual meeting room system supporting agenda sharing, minute-of-meeting generation, and threaded participant discussions." },
  { sno: 24, title: "My Personal Ontology", domain: "Knowledge Engineering & AI", tech: "Java / Semantic Web / XML", description: "Personal semantic knowledge graph organizing daily activities, contacts, and bookmarks using OWL and RDF standards." },
  { sno: 25, title: "Social Sharing Like Sites", domain: "Social Networking Systems", tech: "PHP / MySQL / AJAX", description: "Interactive community feed platform allowing users to share media posts, write comments, and react with likes in real-time." },
  { sno: 26, title: "Sms Application", domain: "Telecommunication & GSM Services", tech: "Java / GSM Gateway API", description: "Bulk messaging utility connecting with GSM modems via serial ports for automated notification dispatch." },
  { sno: 27, title: "Jewellery Management System", domain: "Retail & Inventory ERP", tech: "VB.NET / SQL Server", description: "Precious metals and gemstones retail software tracking making charges, purity certificates, and billing VAT." },
  { sno: 28, title: "Epaper Management System", domain: "Digital Media & Publishing", tech: "PHP / MySQL / Web", description: "Daily newspaper clipping and interactive digital edition reader categorized by city edition and page number." },
  { sno: 29, title: "Budget Management System", domain: "Finance & Accounting Systems", tech: "ASP.NET / SQL Server", description: "Personal and organizational financial tracker setting category-wise spending limits and highlighting budget deficits." },
  { sno: 30, title: "Smat Knowledge Provider", domain: "E-Learning & Knowledge Sharing", tech: "Web / Java / MySQL", description: "Crowdsourced Q&A academic platform pairing novice student inquiries with expert solutions and upvotes." },
  { sno: 31, title: "Library Management System Project", domain: "Institutional Library ERP", tech: "Java / Swing / MySQL", description: "Desktop library software managing book barcode cataloging, membership cards, issue/return cycles, and overdue fines." },
  { sno: 32, title: "Online Library Management System", domain: "Web-based Digital Library", tech: "PHP / MySQL / Web", description: "Web-based repository enabling digital book reservations, PDF downloads, and publisher inventory checks." },
  { sno: 33, title: "E-Post Office", domain: "Postal Automation & Tracking", tech: "ASP.NET / SQL Server", description: "National postal counter automation system tracking registered parcels, money order dispatches, and stamp balances." },
  { sno: 34, title: "Employiee Entery", domain: "Biometric & Attendance Monitoring", tech: "VB.NET / Access Control", description: "Access control station logging visitor passes and employee shift times with time-card reports." },
  { sno: 35, title: "Web Based Driving School Application", domain: "Training & Slot Scheduling", tech: "PHP / MySQL / Web", description: "Driving academy portal coordinating student instructor schedules, RTO license test bookings, and fee installments." },
  { sno: 36, title: "Trade Service Engine", domain: "FinTech & Trade Processing", tech: "Java / Web Services", description: "B2B financial trade settlement engine validating letters of credit and international commercial transactions." },
  { sno: 37, title: "Citizen Card System", domain: "Smart Identity & e-Governance", tech: "ASP.NET / Smart Card API", description: "Unified smart card credential unifying healthcare, municipal utility billing, and identity authentication." },
  { sno: 38, title: "Health Maintenance System", domain: "Medical & Health Records", tech: "Java / MySQL / Web", description: "Electronic Health Record (EHR) database managing doctor consultations, lab reports, and prescription histories." },
  { sno: 39, title: "Secure Division", domain: "Network Security & Cryptography", tech: "Java / AES / Socket Security", description: "Encrypted file partition tool splitting files into secure cryptographic shares across decentralized network nodes." },
  { sno: 40, title: "Techno Task Manager", domain: "Project Management & Collaboration", tech: "Web / React / PHP", description: "Agile task board managing sprint backlogs, bug tracking, and developer assignment burn-down charts." },
  { sno: 41, title: "Property Management System", domain: "Real Estate & Asset ERP", tech: "ASP.NET / SQL Server", description: "Real estate leasing portal handling tenant agreements, maintenance requests, and monthly rent receivables." },
  { sno: 42, title: "Prison Management System", domain: "Law Enforcement & Inmate Records", tech: "VB.NET / SQL Server", description: "Correctional facility management tracking inmate biometrics, court hearing dates, and visitor authorizations." },
  { sno: 43, title: "Education Loan System", domain: "Banking & Loan Verification", tech: "ASP.NET / C# / SQL Server", description: "Bank credit platform verifying student university admissions, collateral appraisals, and EMI repayment plans." },
  { sno: 44, title: "Business Empowerment Tool", domain: "Business Analytics & CRM", tech: "Java / MySQL / Web", description: "Small business CRM delivering customer purchase trend reports, sales pipelines, and lead conversion rates." },
  { sno: 45, title: "Airline Management System", domain: "Aviation & Flight Reservation", tech: "Java / J2EE / Oracle", description: "Global distribution reservation platform for flight schedule queries, seat selection, and baggage allowance check." },
];

export default function BcaProjects2020() {
  const [searchQuery, setSearchQuery] = useState("");
  const [projectsList, setProjectsList] = useState(bcaProjects2020List);
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'grid'
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null); // For 3D Abstract Modal
  const [copiedId, setCopiedId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    academicYear: "2020 - 2021",
    projectRequirements: "BCA Application Projects",
    selectedProjectTitle: "",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?year=2020 - 2021&category=BCA PROJECTS`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              sno: item.sno || idx + 1,
              title: item.title,
              domain: item.domain || "BCA Application",
              tech: item.tech_stack || "Web / Database",
              description: item.description || item.title,
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        // Keep default fallback projects
      }
    };
    fetchDynamicProjects();
  }, []);

  // Extract distinct domains for filter chips
  const domainFilters = useMemo(() => {
    const list = Array.from(new Set(projectsList.map(p => p.domain).filter(Boolean)));
    return ["All", ...list.slice(0, 6)];
  }, [projectsList]);

  // Filtered Projects based on search input, domain, and programming language
  const filteredProjects = useMemo(() => {
    return projectsList.filter((item) => {
      const matchesDomain = selectedDomain === "All" || item.domain === selectedDomain;
      const meta = getProgramMeta(item.tech, item.title);
      const matchesProgram = selectedProgram === "all" || meta.key === selectedProgram;
      if (!matchesDomain || !matchesProgram) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(query) ||
        item.sno.toString().includes(query) ||
        (item.domain && item.domain.toLowerCase().includes(query)) ||
        (item.tech && item.tech.toLowerCase().includes(query))
      );
    });
  }, [projectsList, searchQuery, selectedDomain, selectedProgram]);

  const handleCopyTitle = (proj) => {
    navigator.clipboard.writeText(proj.title);
    setCopiedId(proj.sno);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSelectForEnquiry = (proj) => {
    setFormData((prev) => ({
      ...prev,
      selectedProjectTitle: proj.title,
    }));
    // Smooth scroll to enquiry form
    const formElement = document.getElementById("enquiry-form-card");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.captchaChecked) {
      alert("Please verify the security captcha checkbox.");
      return;
    }
    try {
      await fetch(`${API_BASE}/enquiries.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          academic_year: formData.academicYear,
          project_requirements: formData.projectRequirements,
          message: `Enquiry from BCA Projects 2020-2021 Page. Interested in: ${formData.selectedProjectTitle || "General BCA Projects"}`,
          status: "New",
        }),
      });
    } catch (err) {
      console.warn("Could not post enquiry to backend:", err);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        academicYear: "2020 - 2021",
        projectRequirements: "BCA Application Projects",
        selectedProjectTitle: "",
        captchaChecked: false,
      });
    }, 4000);
  };

  return (
    <div className="font-sans bg-[#f8fafc] min-h-screen flex flex-col text-slate-800 antialiased selection:bg-[#ff8200] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Premium 3D Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#061224] via-[#0b1e3f] to-[#040c1a] text-white pt-8 pb-14 overflow-hidden border-b-4 border-[#ff8200] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Animated Cyber Grid, Radiant Halos & Particle Tracks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top glowing amber accent strip */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ff8200] to-transparent opacity-80" />
          
          {/* Cyber matrix grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf810_1px,transparent_1px),linear-gradient(to_bottom,#38bdf810_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          {/* Multi-layered Neon Ambient Aura Orbs */}
          <div className="absolute -top-24 -right-12 w-[500px] h-[500px] bg-[#ff8200]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-12 w-[550px] h-[550px] bg-[#00e5ff]/18 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-[#7c3aed]/12 rounded-full blur-[140px] pointer-events-none" />
          
          {/* Subtle Decorative Circuit Curves */}
          <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none" viewBox="0 0 1440 600" fill="none">
            <path d="M-100 300 C 300 150, 700 450, 1100 220 C 1300 100, 1500 300, 1600 250" stroke="url(#heroCyanGradBca)" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M-50 480 C 400 250, 800 500, 1200 320 C 1400 220, 1550 380, 1650 340" stroke="url(#heroOrangeGradBca)" strokeWidth="1.5" />
            <defs>
              <linearGradient id="heroCyanGradBca" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="heroOrangeGradBca" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff8200" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[1380px] mx-auto px-4 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-xs font-medium text-slate-300 mb-5 shadow-xs">
            <Link to="/" className="hover:text-[#ff8200] transition-colors !no-underline text-slate-300 flex items-center gap-1.5 font-semibold">
              <SchoolIcon sx={{ fontSize: 14 }} className="text-[#ffaa40]" />
              <span>Home</span>
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">Application Projects</span>
            <span className="text-slate-500">/</span>
            <span className="text-[#ffaa40] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffaa40] animate-pulse" />
              BCA 2020 - 2021
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Column: Focused Headline & Clean CTA */}
            <div className="flex-1 max-w-xl">
              
              {/* 3D Certification Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-transparent backdrop-blur-xl border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                <VerifiedIcon sx={{ fontSize: 16 }} className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                <span>BCA APPLICATION PROJECTS 2020 - 2021</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[1.12] mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                BCA IEEE PROJECTS 2020-2021 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8200] via-[#ffaa40] to-[#ffd166] drop-shadow-[0_0_25px_rgba(255,130,0,0.55)]">IN CHENNAI</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-lg">
                Verified IEEE final year application projects with complete source code, database architecture, and live faculty execution guidance.
              </p>

              {/* 3D Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#projects-catalog-section"
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#ea580c] hover:brightness-110 text-white px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_8px_25px_rgba(255,130,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-98 !no-underline"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Explore 45+ BCA Projects</span>
                    <ArrowForwardIcon sx={{ fontSize: 18 }} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                </a>
                <a
                  href="https://wa.me/917299981536?text=Hi,%20I%20am%20interested%20in%20BCA%20Application%20Projects%202020-2021."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] hover:brightness-110 text-white px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_8px_25px_rgba(16,185,129,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-98 !no-underline"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <WhatsAppIcon sx={{ fontSize: 19 }} />
                    <span>WhatsApp Live Demo</span>
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: ONLY ROUND 3D REAL BRAND ICONS */}
            <div className="w-full lg:w-auto flex-1 flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-5 sm:gap-6 w-full max-w-[480px]">
                <RoundTechOrb
                  name="Java"
                  icon={<JavaIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-orange-500/50 via-amber-500/20 to-transparent"
                  ringColor="border-orange-400/50"
                  shadowColor="rgba(234,88,12,0.45)"
                  labelColor="text-orange-300"
                  duration={3.6}
                  delay={0}
                />
                <RoundTechOrb
                  name="Python"
                  icon={<PythonIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-sky-500/50 via-blue-500/20 to-transparent"
                  ringColor="border-sky-400/50"
                  shadowColor="rgba(2,132,199,0.45)"
                  labelColor="text-sky-300"
                  duration={4.2}
                  delay={0.3}
                />
                <RoundTechOrb
                  name="ASP.NET"
                  icon={<DotNetIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-purple-500/50 via-indigo-500/20 to-transparent"
                  ringColor="border-purple-400/50"
                  shadowColor="rgba(147,51,234,0.45)"
                  labelColor="text-purple-300"
                  duration={3.8}
                  delay={0.6}
                />
                <RoundTechOrb
                  name="PHP"
                  icon={<PhpIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-indigo-500/50 via-blue-500/20 to-transparent"
                  ringColor="border-indigo-400/50"
                  shadowColor="rgba(99,102,241,0.45)"
                  labelColor="text-indigo-300"
                  duration={4.0}
                  delay={0.2}
                />
                <RoundTechOrb
                  name="MySQL"
                  icon={<DatabaseIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-cyan-500/50 via-teal-500/20 to-transparent"
                  ringColor="border-cyan-400/50"
                  shadowColor="rgba(0,117,143,0.45)"
                  labelColor="text-cyan-300"
                  duration={4.4}
                  delay={0.5}
                />
                <RoundTechOrb
                  name="Android"
                  icon={<AndroidIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-emerald-500/50 via-green-500/20 to-transparent"
                  ringColor="border-emerald-400/50"
                  shadowColor="rgba(16,185,129,0.45)"
                  labelColor="text-emerald-300"
                  duration={3.5}
                  delay={0.7}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Main Body Container */}
      <div className="max-w-[1360px] mx-auto px-4 lg:px-8 py-8 w-full flex-1" id="projects-catalog-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT CONTENT COLUMN (8 COLS) ================= */}
          <div className="lg:col-span-8 flex flex-col space-y-7">
            
            {/* 3D Year Selector Matrix (10 BCA Application Years) */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff8200] shadow-[0_0_8px_rgba(255,130,0,0.8)]" />
                  BCA Application Projects By Year
                </h3>
                <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-2.5 py-1 rounded-full">
                  10 Academic Years
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {bcaYearLinks.map((yr, idx) => {
                  const isCurrent = yr.active;
                  return (
                    <Link
                      key={idx}
                      to={yr.path}
                      className={`py-2.5 px-3.5 rounded-xl text-xs sm:text-[13px] font-bold text-center transition-all duration-200 !no-underline flex items-center justify-center gap-1.5 ${
                        isCurrent
                          ? "bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] text-white shadow-[0_4px_14px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-amber-300/40 scale-[1.02]"
                          : "bg-slate-50/90 hover:bg-white text-slate-700 hover:text-[#ff8200] border border-slate-200 hover:border-orange-200 shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
                      }`}
                    >
                      <CalendarMonthIcon sx={{ fontSize: 15 }} className={isCurrent ? "text-white" : "text-slate-400"} />
                      <span>{yr.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Live Search, View Mode Switcher & Domain Filter Chips */}
            {/* Search & Domain Filter Control Station */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-200/80 space-y-5 relative overflow-hidden">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#0284c7]" />

              {/* 1. Top Row: Search Input + Segmented View Switcher */}
              <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center justify-between">
                <div className="relative flex-1 group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-orange-500/10 text-[#ff8200] flex items-center justify-center transition-colors group-focus-within:bg-[#ff8200] group-focus-within:text-white pointer-events-none">
                    <SearchIcon sx={{ fontSize: 18 }} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search 2020-2021 BCA projects by title or tech (e.g. Panchayat, Mobile Shop, Java, PHP)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-13 pr-10 py-3 text-sm font-medium bg-slate-50/80 hover:bg-white border-2 border-slate-200/90 rounded-2xl focus:outline-none focus:border-[#ff8200] focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all text-slate-800 placeholder:text-slate-400 shadow-inner"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-xs font-black transition-colors cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Table / Grid Switcher & Count Pill */}
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                  <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-xs font-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{filteredProjects.length} Available</span>
                  </span>

                  <div className="flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80 shadow-inner">
                    <button
                      onClick={() => setViewMode("table")}
                      className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-xs font-black cursor-pointer ${
                        viewMode === "table"
                          ? "bg-white text-[#ff8200] shadow-[0_2px_8px_rgba(0,0,0,0.08)] scale-[1.02]"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                    >
                      <TableRowsIcon sx={{ fontSize: 17 }} />
                      <span>Table</span>
                    </button>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-xs font-black cursor-pointer ${
                        viewMode === "grid"
                          ? "bg-white text-[#ff8200] shadow-[0_2px_8px_rgba(0,0,0,0.08)] scale-[1.02]"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                    >
                      <GridViewIcon sx={{ fontSize: 17 }} />
                      <span>Grid</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. Program Language Filter Bar */}
              <div className="pt-3 border-t border-slate-100">
                <ProgramLanguageFilterBar
                  activeProgram={selectedProgram}
                  onSelectProgram={setSelectedProgram}
                />
              </div>

              {/* 3. Domain Filter Section */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                    Project Domain
                  </span>
                  {selectedDomain !== "All" && (
                    <button
                      onClick={() => setSelectedDomain("All")}
                      className="text-xs font-bold text-[#ff8200] hover:text-[#e06d00] hover:underline cursor-pointer transition-colors"
                    >
                      Show All Domains ✕
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {domainFilters.map((d, dIdx) => {
                    const isSel = selectedDomain === d;
                    return (
                      <button
                        key={dIdx}
                        onClick={() => setSelectedDomain(d)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border ${
                          isSel
                            ? "bg-gradient-to-r from-[#001733] via-[#002855] to-[#003875] text-white border-[#002855] shadow-[0_3px_12px_rgba(0,40,85,0.35)] scale-[1.02]"
                            : "bg-slate-50 hover:bg-white text-slate-700 hover:text-[#ff8200] border-slate-200 hover:border-orange-300 shadow-2xs hover:-translate-y-0.5"
                        }`}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Filter Clear Banner (if filtered) */}
              {(selectedProgram !== "all" || selectedDomain !== "All" || searchQuery) && (
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-500 bg-slate-50/80 px-4 py-2 rounded-xl border border-slate-200/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Filters active ({filteredProjects.length} matches found)
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProgram("all");
                      setSelectedDomain("All");
                      setSearchQuery("");
                    }}
                    className="text-[#ff8200] hover:underline font-black cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            {/* ================= VIEW 1: 3D TABLE VIEW ================= */}
            {viewMode === "table" && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="bg-gradient-to-r from-[#0a2347] via-[#0f2d59] to-[#14376b] p-4 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                      <span>BCA Projects (2020 - 2021) Catalog</span>
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">Click "Enquire" or "View Abstract" to request project package</p>
                  </div>
                  <span className="text-xs bg-white/10 text-amber-300 font-extrabold px-3 py-1.5 rounded-full border border-white/15">
                    {filteredProjects.length} Projects Available
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-slate-100/90 text-slate-700 text-xs uppercase font-extrabold tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="p-3.5 w-24 text-center">Program</th>
                        <th className="p-3.5">Project Title & Tech Stack</th>
                        <th className="p-3.5 text-center w-52">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredProjects.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="p-8 text-center text-slate-500">
                            No projects found matching your search and filter criteria. Try selecting "All Stacks" or clearing your search.
                          </td>
                        </tr>
                      ) : (
                        filteredProjects.map((proj) => (
                          <tr
                            key={proj.sno}
                            className="hover:bg-orange-50/40 transition-colors group"
                          >
                            <td className="p-3.5 text-center whitespace-nowrap">
                              <div className="flex items-center justify-center gap-2">
                                <span className="font-extrabold text-xs text-slate-400 group-hover:text-[#ff8200] w-6">
                                  #{proj.sno}
                                </span>
                                <ProgramAvatar tech={proj.tech} title={proj.title} size="sm" />
                              </div>
                            </td>
                            <td className="p-3.5">
                              <div className="flex flex-col gap-1.5">
                                <Link
                                  to={`/project/${proj.id || proj.sno}`}
                                  className="font-bold text-slate-900 text-[14.5px] sm:text-[15.5px] group-hover:text-[#ff8200] transition-colors leading-snug cursor-pointer !no-underline"
                                >
                                  {proj.title}
                                </Link>
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-100">
                                    {proj.domain}
                                  </span>
                                  <ProgramTechBadges tech={proj.tech} />
                                </div>
                              </div>
                            </td>
                            <td className="p-3.5 text-center whitespace-nowrap">
                              <div className="flex items-center justify-center gap-2">
                                <Link
                                  to={`/project/${proj.id || proj.sno}`}
                                  className="px-2.5 py-1.5 bg-[#0a2347] hover:bg-[#14376b] text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:scale-105 active:scale-95 !no-underline flex items-center gap-1"
                                >
                                  <span>Details</span>
                                  <ArrowForwardIcon sx={{ fontSize: 13 }} />
                                </Link>
                                <button
                                  onClick={() => handleSelectForEnquiry(proj)}
                                  className="px-3 py-1.5 bg-gradient-to-r from-[#ff8200] to-[#f97316] hover:brightness-110 text-white text-xs font-bold rounded-xl transition-all shadow-[0_2px_8px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                  Enquire
                                </button>
                                <button
                                  onClick={() => setSelectedProject(proj)}
                                  className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                                >
                                  Abstract
                                </button>
                                <button
                                  onClick={() => handleCopyTitle(proj)}
                                  className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                                  title="Copy Title"
                                >
                                  {copiedId === proj.sno ? (
                                    <CheckIcon sx={{ fontSize: 17 }} className="text-green-600" />
                                  ) : (
                                    <ContentCopyIcon sx={{ fontSize: 17 }} />
                                  )}
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ================= VIEW 2: 3D CARD GRID VIEW ================= */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProjects.length === 0 ? (
                  <div className="col-span-2 bg-white rounded-2xl p-8 border border-slate-200 text-center text-slate-500">
                    No projects found matching your search and filter criteria. Try selecting "All Stacks" or clearing your search.
                  </div>
                ) : (
                  filteredProjects.map((proj) => (
                    <div
                      key={proj.sno}
                      className="bg-white rounded-2xl p-5 border border-slate-200 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-orange-300 transition-all flex flex-col justify-between group relative overflow-hidden"
                    >
                      <div>
                        {/* Top: 3D Program Avatar + Domain + S.No */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2.5">
                            <ProgramAvatar tech={proj.tech} title={proj.title} size="md" />
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                                {getProgramMeta(proj.tech, proj.title).badgeText}
                              </span>
                              <span className="inline-block px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-100">
                                {proj.domain}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-black text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                            #{proj.sno}
                          </span>
                        </div>

                        <h4 className="font-bold text-slate-900 text-[15.5px] sm:text-base mb-2 group-hover:text-[#ff8200] transition-colors leading-snug">
                          <Link to={`/project/${proj.id || proj.sno}`} className="text-inherit hover:text-[#ff8200] !no-underline cursor-pointer">
                            {proj.title}
                          </Link>
                        </h4>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3.5">
                          {proj.description || "Complete executable project with database script, documentation, and viva prep support."}
                        </p>

                        <div className="pt-2.5 border-t border-slate-100 mb-4">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Stack & Frameworks:</span>
                          <ProgramTechBadges tech={proj.tech} />
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <Link
                          to={`/project/${proj.id || proj.sno}`}
                          className="px-3 py-2 bg-[#0a2347] hover:bg-[#14376b] text-white text-xs font-bold rounded-xl transition-all text-center shadow-xs hover:scale-102 active:scale-98 !no-underline flex items-center justify-center gap-1"
                        >
                          <span>Details</span>
                          <ArrowForwardIcon sx={{ fontSize: 13 }} />
                        </Link>
                        <button
                          onClick={() => handleSelectForEnquiry(proj)}
                          className="flex-1 py-2.5 bg-gradient-to-r from-[#ff8200] to-[#f97316] hover:brightness-110 text-white text-xs font-bold rounded-xl transition-all text-center shadow-[0_2px_8px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-102 active:scale-98 cursor-pointer"
                        >
                          Enquire
                        </button>
                        <button
                          onClick={() => setSelectedProject(proj)}
                          className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                        >
                          Abstract
                        </button>
                        <button
                          onClick={() => handleCopyTitle(proj)}
                          className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                          title="Copy Title"
                        >
                          {copiedId === proj.sno ? (
                            <CheckIcon sx={{ fontSize: 17 }} className="text-green-600" />
                          ) : (
                            <ContentCopyIcon sx={{ fontSize: 17 }} />
                          )}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* "ABOUT IEEE BCA PROJECT" Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#ff8200] mb-2">
                <MenuBookIcon sx={{ fontSize: 18 }} />
                <span>Overview & Insights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1e3a5f] uppercase tracking-tight mb-5 border-b pb-3 border-slate-100">
                ABOUT IEEE BCA PROJECT
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  Embark on a journey into innovation as we step back in time to the years 2020-2021, a period marked by groundbreaking advancements in BCA Application projects. At IEEE Project Centre, we invite you to explore a thoughtfully curated selection of these transformative projects that played a pivotal role in shaping the landscape of software development and application design. Nestled at the forefront of technological innovation, our center serves as a platform for BCA students and aspiring software developers to immerse themselves in the remarkable projects that defined this era.
                </p>
                <p>
                  The years 2020-2021 witnessed a significant surge in creativity and innovation in the field of software development. Projects during this period spanned diverse domains, including web and mobile application development, database management, and software testing. These projects not only set the stage for the future but also laid the foundation for the digital age we live in today. At IEEE Project Centre, we are dedicated to preserving and celebrating this technological heritage. Through hands-on learning experiences guided by seasoned mentors, our aim is not only to honor the accomplishments of this period but also to inspire today’s learners to build upon this strong foundation and drive the future of technology.
                </p>
              </div>

              {/* Highlights Bento in About section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
                <div className="p-4 bg-orange-50/70 border border-orange-100 rounded-2xl shadow-2xs">
                  <div className="font-extrabold text-[#ff8200] text-lg mb-1">45+ Projects</div>
                  <div className="text-xs text-slate-600 font-medium">Diverse application domains in ASP.NET, VB.NET, Java, and PHP.</div>
                </div>
                <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-2xl shadow-2xs">
                  <div className="font-extrabold text-[#1e3a5f] text-lg mb-1">100% Executable</div>
                  <div className="text-xs text-slate-600 font-medium">Tested source code with verified database schemas and test cases.</div>
                </div>
                <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl shadow-2xs">
                  <div className="font-extrabold text-emerald-600 text-lg mb-1">Full Guidance</div>
                  <div className="text-xs text-slate-600 font-medium">Complete documentation, SRS, design diagrams, PPTs, and viva prep.</div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Info Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d2346] to-[#1e3a5f] text-white shadow-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-[#ffaa40]">
                <TerminalIcon sx={{ fontSize: 24 }} />
                <h3 className="text-lg font-black uppercase tracking-wide">Why Choose IEEE Project Centre for BCA Projects?</h3>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed mb-5">
                We provide end-to-end guidance from topic selection to final viva voce. Each BCA application project comes equipped with fully commented code, comprehensive software requirements specification (SRS), system design architecture, and customized features tailored for your curriculum.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10">
                <div className="p-3 bg-white/10 rounded-xl text-center backdrop-blur-xs">
                  <span className="text-xs text-[#ffaa40] font-bold block">Source Code</span>
                  <span className="text-sm font-semibold">100% Executable</span>
                </div>
                <div className="p-3 bg-white/10 rounded-xl text-center backdrop-blur-xs">
                  <span className="text-xs text-[#ffaa40] font-bold block">Documentation</span>
                  <span className="text-sm font-semibold">IEEE Standard</span>
                </div>
                <div className="p-3 bg-white/10 rounded-xl text-center backdrop-blur-xs">
                  <span className="text-xs text-[#ffaa40] font-bold block">Support</span>
                  <span className="text-sm font-semibold">Live Training & Viva</span>
                </div>
                <div className="p-3 bg-white/10 rounded-xl text-center backdrop-blur-xs">
                  <span className="text-xs text-[#ffaa40] font-bold block">Centres</span>
                  <span className="text-sm font-semibold">Chennai (Vadapalani & Tambaram)</span>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDEBAR (4 COLS) ================= */}
          <div className="lg:col-span-4 sticky top-6 space-y-6">
            
            {/* 3D Reach Us Card */}
            <div className="bg-white rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.06)] border border-slate-200 overflow-hidden" id="enquiry-form-card">
              <div className="bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] p-4 text-white text-center shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4)]">
                <h3 className="text-lg font-black tracking-wide uppercase">Quick Enquiry</h3>
                <p className="text-xs text-orange-100 font-medium mb-0">Get Complete Project Code & Demo</p>
              </div>

              <form onSubmit={handleFormSubmit} className="p-5 space-y-3.5">
                {submitted && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-xl text-xs font-medium flex items-center gap-2">
                    <CheckCircleIcon sx={{ fontSize: 18 }} className="text-emerald-600 shrink-0" />
                    <span>Thank you! Your enquiry has been received. Our technical team will reach out shortly.</span>
                  </div>
                )}

                {formData.selectedProjectTitle && (
                  <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-200 text-xs">
                    <span className="text-slate-500 block font-bold text-[10px] uppercase">Selected Project:</span>
                    <strong className="text-[#1e3a5f] text-[13px] block mt-0.5 leading-snug">{formData.selectedProjectTitle}</strong>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, selectedProjectTitle: "" }))}
                      className="text-red-500 text-[10.5px] font-bold block mt-1.5 hover:opacity-80 transition-opacity !no-underline cursor-pointer"
                    >
                      Clear Selection ✕
                    </button>
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-100 transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-100 transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#ff8200] focus:ring-2 focus:ring-orange-100 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wider">Current Academic Year</label>
                  <select
                    value={formData.academicYear}
                    onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-[#ff8200] transition-colors"
                  >
                    <option value="2020 - 2021">2020 - 2021</option>
                    <option value="2021 - 2022">2021 - 2022</option>
                    <option value="2022 - 2023">2022 - 2023</option>
                    <option value="2023 - 2024">2023 - 2024</option>
                    <option value="2024 - 2025">2024 - 2025</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wider">Project Requirement</label>
                  <select
                    value={formData.projectRequirements}
                    onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-[#ff8200] transition-colors"
                  >
                    <option value="BCA Application Projects">BCA Application Projects</option>
                    <option value="BSc Application Projects">BSc Application Projects</option>
                    <option value="Final Year Projects">Final Year Projects</option>
                    <option value="IEEE Projects">IEEE Projects</option>
                    <option value="Mini Projects">Mini Projects</option>
                    <option value="Internship Training">Internship Training</option>
                  </select>
                </div>

                {/* reCAPTCHA */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.captchaChecked}
                      onChange={(e) => setFormData({ ...formData, captchaChecked: e.target.checked })}
                      className="w-5 h-5 rounded border-slate-300 text-[#00a8cc] focus:ring-0 cursor-pointer"
                    />
                    <span className="text-xs font-semibold text-slate-700">I'm not a robot</span>
                  </label>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA"
                      className="w-6 h-6 object-contain opacity-70"
                    />
                    <span className="text-[8px] text-slate-400 font-medium">reCAPTCHA</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_4px_15px_rgba(255,130,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Submit Project Enquiry
                </button>
              </form>
            </div>

            {/* 3D Specialist Helpline Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-[0_4px_18px_rgba(0,0,0,0.04)] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.6),0_4px_12px_rgba(16,185,129,0.4)]">
                  <PhoneIcon sx={{ fontSize: 20 }} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Call Senior Advisor</span>
                  <a href="tel:+917299981536" className="text-[14px] font-black text-slate-800 hover:text-[#10b981] transition-colors !no-underline block">
                    +91 72999 81536
                  </a>
                </div>
              </div>
              <a
                href="tel:+917299981536"
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-extrabold uppercase shadow-sm hover:scale-105 transition-all !no-underline"
              >
                Call
              </a>
            </div>

            {/* 3D Chennai Centres Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-[0_4px_18px_rgba(0,0,0,0.04)] space-y-3">
              <div className="flex items-center gap-2 text-[#1e3a5f]">
                <LocationOnIcon sx={{ fontSize: 20 }} className="text-[#ff8200]" />
                <h4 className="font-extrabold text-sm uppercase tracking-wider">Our Chennai Centres</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our state-of-the-art software centres for live demo execution and 1-on-1 viva guidance:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-800 block font-bold">Vadapalani Branch:</strong>
                  <span className="text-slate-600">No. 68 & 70, Ground Floor, Raahat Plaza, Vadapalani, Chennai.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-800 block font-bold">Tambaram Branch:</strong>
                  <span className="text-slate-600">Opposite Railway Station, Sanatorium, Tambaram, Chennai.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ================= 3D PROJECT DETAIL MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0a2347] via-[#0f2d59] to-[#14376b] p-5 text-white flex justify-between items-start gap-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wider mb-2 border border-cyan-400/30">
                    {selectedProject.domain}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                >
                  <CloseIcon sx={{ fontSize: 18 }} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm">
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                    Technology Stack
                  </h4>
                  <span className="inline-block px-3 py-1 rounded-lg bg-orange-50 text-[#ff8200] font-bold text-xs border border-orange-100">
                    {selectedProject.tech}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                    Project Overview
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon sx={{ fontSize: 15 }} className="text-emerald-500" />
                    <span>Complete executable code with MySQL/SQL Server database script</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon sx={{ fontSize: 15 }} className="text-emerald-500" />
                    <span>IEEE standard project documentation and software requirements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon sx={{ fontSize: 15 }} className="text-emerald-500" />
                    <span>Presentation slides (PPT) and viva voce Q&A preparation guide</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
                <Link
                  to={`/project/${selectedProject.id || selectedProject.sno}`}
                  className="px-4 py-2 rounded-xl bg-[#0a2347] hover:bg-[#14376b] text-white text-xs font-bold transition-all flex items-center gap-1.5 !no-underline shadow-sm"
                >
                  <span>Open Full Project Page</span>
                  <ArrowForwardIcon sx={{ fontSize: 13 }} />
                </Link>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyTitle(selectedProject)}
                    className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-white text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedId === selectedProject.sno ? (
                      <>
                        <CheckIcon sx={{ fontSize: 16 }} className="text-green-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <ContentCopyIcon sx={{ fontSize: 16 }} />
                        <span>Copy Title</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      handleSelectForEnquiry(selectedProject);
                      setSelectedProject(null);
                    }}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#ff8200] to-[#f97316] text-white text-xs font-extrabold uppercase tracking-wider shadow-[0_2px_8px_rgba(255,130,0,0.35)] hover:brightness-110 transition-all cursor-pointer"
                  >
                    Enquire for this Title
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Global Footer */}
      <Footer />
    </div>
  );
}
