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
import DevicesIcon from "@mui/icons-material/Devices";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
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
  WebIcon,
  AiChipIcon,
  SecurityLockIcon 
} from "./ProgramIconBadge";

// 10 BSc Application Project Years Links
const bscYearLinks = [
  { label: "BSc Projects 2013-2014", path: "/bsc-ieee-projects-2013-2014-in-chennai" },
  { label: "BSc Projects 2014 - 2015", path: "/bsc-ieee-projects-2014-2015-in-chennai" },
  { label: "BSc Projects 2015 - 2016", path: "/bsc-ieee-projects-2015-2016-in-chennai" },
  { label: "BSc Projects 2016 - 2017", path: "/bsc-ieee-projects-2016-2017-in-chennai" },
  { label: "BSc Projects 2017 - 2018", path: "/bsc-ieee-projects-2017-2018-in-chennai" },
  { label: "BSc Projects 2018 - 2019", path: "/bsc-ieee-projects-2018-2019-in-chennai" },
  { label: "BSc Projects 2019 - 2020", path: "/bsc-ieee-projects-2019-2020-in-chennai" },
  { label: "BSc Projects 2020 - 2021", path: "/bsc-ieee-projects-2020-2021-in-chennai", active: true },
  { label: "BSc Projects 2021 - 2022", path: "/bsc-ieee-projects-2021-2022-in-chennai" },
  { label: "BSc Projects 2022 - 2023", path: "/ieee-bsc-project-list-2022-2023" },
];

// Complete 45 Projects List for 2020-2021 BSc
const bscProjects2020List = [
  { sno: 1, title: "Insurance Management System", domain: "FinTech & Policy Management", tech: "Web Application / MySQL / PHP", description: "Automated insurance policy issuance, claims processing, premium calculators, and digital policyholder records." },
  { sno: 2, title: "Warm House Management System", domain: "Smart Living & Automation", tech: "IoT / Web / Database", description: "Smart home automation system regulating ambient room temperatures, HVAC energy efficiency, and security alerts." },
  { sno: 3, title: "Web Based Healthcare Portal", domain: "Healthcare IT & Telemedicine", tech: "PHP / MySQL / HTML5", description: "Telehealth consultation platform connecting patients with specialized clinicians for virtual appointments and prescription management." },
  { sno: 4, title: "Atm Reporting System", domain: "Banking & Financial Reporting", tech: "Java / SQL Server / Swing", description: "Cash withdrawal transaction logger, fraud transaction detection, and ATM terminal cash replenishment monitoring tool." },
  { sno: 5, title: "Cargo Management System", domain: "Logistics & Supply Chain", tech: "VB.NET / SQL Server", description: "Freight shipment tracking, cargo container load distribution, and multi-modal transit billing management." },
  { sno: 7, title: "Courier Management System", domain: "Delivery Tracking & Parcel ERP", tech: "ASP.NET / SQL Server", description: "End-to-end parcel consignment logistics platform offering real-time tracking IDs and dispatch route management." },
  { sno: 8, title: "Credit Card Fraud Detection", domain: "Data Mining & Cyber Security", tech: "Python / Machine Learning / SQL", description: "Anomaly detection algorithm flagging suspicious banking card transactions using behavior classification techniques." },
  { sno: 9, title: "File Transfer Using Cryptography", domain: "Information Security & Cryptography", tech: "Java / AES-256 / Sockets", description: "Secure peer-to-peer file transfer channel using AES encryption and digital signatures to prevent man-in-the-middle attacks." },
  { sno: 10, title: "Vendor Information System For Shipping", domain: "Supply Chain & Vendor ERP", tech: "Java / Web Services / MySQL", description: "Maritime vendor procurement portal managing shipping supplier quotations, compliance records, and voyage expenses." },
  { sno: 11, title: "Sales And Inventory Management System", domain: "Retail & Stock Management", tech: "VB.NET / SQL Server", description: "Retail POS software generating automated purchase orders when stock reaches critical replenishment thresholds." },
  { sno: 12, title: "Supermarket Management System", domain: "POS & Inventory ERP", tech: "ASP.NET / C# / SQL Server", description: "Fast barcode checkout, product category organization, daily sales revenue reconciliation, and customer discount vouchers." },
  { sno: 13, title: "Student And Teacher Interaction System", domain: "EdTech & Learning Portals", tech: "PHP / MySQL / Web", description: "Academic interaction portal featuring course assignment submissions, grading rubrics, and doubt clearance chat." },
  { sno: 14, title: "Civil Registry Management System", domain: "e-Governance & Public Records", tech: "Java / J2EE / Oracle", description: "Municipal governance portal digitizing birth certificates, citizenship documents, and demographic statistical reports." },
  { sno: 15, title: "Bus Reservation System & Online Bus Ticket Booking System", domain: "Transportation & Booking", tech: "ASP.NET / SQL Server", description: "Intercity bus ticket reservation platform with live seat layout picker, schedule lookup, and electronic ticket SMS delivery." },
  { sno: 16, title: "Hostel Management System Project", domain: "Accommodation & Campus ERP", tech: "PHP / MySQL / Web", description: "Student residential hostel room allocation, mess menu management, biometric gate pass issuance, and fee tracking." },
  { sno: 17, title: "E-Healthcare Diagnostic Center", domain: "Medical Lab Automation", tech: "Java / MySQL / Swing", description: "Diagnostic pathology lab workflow tracking sample collection barcoding, pathologist test reports, and billing." },
  { sno: 18, title: "Employee Leave & Attendance Management System", domain: "HR & Enterprise Solutions", tech: "ASP.NET / C# / SQL", description: "Leave request approvals, biometric attendance logging, and salary leave deduction computation software." },
  { sno: 19, title: "Secure Cloud Storage with Deduplication", domain: "Cloud Computing & Security", tech: "Java / Cloud Storage / SHA-256", description: "Bandwidth-saving cloud storage platform eliminating duplicate files securely while maintaining file ownership privacy." },
  { sno: 20, title: "Online Examination System with Anti-Cheat", domain: "EdTech & Online Testing", tech: "PHP / JavaScript / MySQL", description: "Online quiz and exam engine featuring automated answer evaluation, timed test windows, and randomized question banks." },
  { sno: 21, title: "Blood Bank Management Information System", domain: "Healthcare & Emergency Systems", tech: "Web Application / MySQL", description: "Emergency blood donor network matching recipient blood groups with available cold-storage blood units in local hospitals." },
  { sno: 22, title: "Intrusion Detection System for Web Applications", domain: "Cyber Security & Networking", tech: "Java / Packet Sniffer / Rule Engine", description: "Real-time network traffic monitor detecting SQL injection, Cross-Site Scripting (XSS), and brute force authentication attacks." },
  { sno: 23, title: "Vehicle Parking Management System", domain: "Smart City & IoT", tech: "VB.NET / RFID / SQL Server", description: "Automated parking lot slot sensor tracker issuing entry barcode tickets and computing parking duration fees." },
  { sno: 24, title: "Digital Watermarking for Copyright Protection", domain: "Multimedia & Security", tech: "Java / Image Processing / DWT", description: "Imperceptible digital watermark embedding inside multimedia images to protect intellectual property rights." },
  { sno: 25, title: "Pharmacy Store & Inventory Management", domain: "Retail Healthcare & ERP", tech: "ASP.NET / SQL Server", description: "Drug expiry date monitoring, automated reordering, prescription validation, and customer billing system." },
  { sno: 26, title: "Real Estate Property Portal", domain: "Real Estate & Commerce", tech: "PHP / MySQL / Google Maps API", description: "Property listing directory with interactive location filters, photographic virtual tours, and agent contact scheduling." },
  { sno: 27, title: "Online Job Recruitment & Placement Portal", domain: "Employment & HR Tech", tech: "Java / J2EE / MySQL", description: "Resume parser and job matching portal enabling candidates to apply for openings and recruiters to shortlist applicants." },
  { sno: 28, title: "Water Billing & Supply Management System", domain: "Municipal Utilities ERP", tech: "VB.NET / SQL Server", description: "Municipal water meter consumption reader computing tiered billing rates and managing repair service tickets." },
  { sno: 29, title: "Online Food Delivery & Restaurant System", domain: "FoodTech & E-Commerce", tech: "Web Application / React / PHP", description: "Restaurant menu catalog, cart management, delivery boy GPS dispatch, and customer order status tracking." },
  { sno: 30, title: "College Placement Training & Record System", domain: "Campus Recruitment ERP", tech: "ASP.NET / SQL Server", description: "Campus placement drive coordination tracking student eligibility criteria, company interview rounds, and offer letters." },
  { sno: 31, title: "Toll Plaza Automation & Fee Collection", domain: "Smart Highways & Billing", tech: "Java / RFID Gateway / SQL", description: "Highway toll booth barrier automation reading RFID tags and deducting toll charges electronically without queue delays." },
  { sno: 32, title: "Electricity Billing Management System", domain: "Energy Utilities ERP", tech: "PHP / MySQL / Web", description: "Electric meter consumer billing portal calculating commercial and domestic tariff slabs with online receipt printing." },
  { sno: 33, title: "Gym & Fitness Club Management System", domain: "Wellness ERP & Membership", tech: "VB.NET / SQL Server", description: "Gym membership subscription tracker managing trainer assignments, dietary charts, and renewal reminders." },
  { sno: 34, title: "Cyber Café Billing & Time Management", domain: "Internet Kiosk Utilities", tech: "Java / Socket Programming", description: "Client desktop session lock and billing calculator computing computer usage duration and printing session invoices." },
  { sno: 35, title: "Online Auction & Bidding System", domain: "E-Commerce & Bidding", tech: "ASP.NET / C# / SQL Server", description: "Real-time reverse and forward auction bidding floor with automated high-bid tracking and winner notification." },
  { sno: 36, title: "Mobile Service Center Repair Management", domain: "Customer Service ERP", tech: "PHP / MySQL / Web", description: "Mobile phone repair ticket status portal managing spare parts inventory, technician assignments, and service warranties." },
  { sno: 37, title: "School Bus Tracking System", domain: "Transportation & Safety", tech: "Web Application / GPS Simulation", description: "Student school transit route supervisor providing parents with estimated arrival alerts and bus speed warnings." },
  { sno: 38, title: "Waste Management & Sanitation Monitoring", domain: "Environmental & Smart City", tech: "Java / IoT Sensors / MySQL", description: "Municipal dustbin fill-level sensor monitor planning optimal garbage collection truck routes dynamically." },
  { sno: 39, title: "Online Book Store with Recommendation Engine", domain: "E-Commerce & Recommendation", tech: "ASP.NET / Machine Learning / SQL", description: "Digital bookstore recommending literary titles using collaborative filtering based on customer purchase affinities." },
  { sno: 40, title: "Railway Cargo Booking & Fleet Allocation", domain: "Rail Logistics & Freight", tech: "Java / J2EE / Oracle", description: "Freight train cargo parcel booking and wagon allocation scheduler optimizing locomotive hauling capacity." },
  { sno: 41, title: "Dairy Farm Milk Collection & Processing ERP", domain: "Agriculture & Dairy ERP", tech: "VB.NET / SQL Server", description: "Rural dairy collection center software measuring milk fat content, farmer payout billing, and storage refrigeration." },
  { sno: 42, title: "Automated Timetable Generation System", domain: "Institutional AI & Optimization", tech: "Java / Genetic Algorithm", description: "Genetic algorithm scheduler resolving teacher conflict constraints and creating conflict-free college class schedules." },
  { sno: 43, title: "Blood Sample Tracking with Barcode Security", domain: "Healthcare IT & Security", tech: "PHP / Barcode / MySQL", description: "Diagnostic specimen chain-of-custody tracking verifying patient blood sample integrity between clinic and testing lab." },
  { sno: 44, title: "Asset Tracking & Maintenance System", domain: "Enterprise Asset Management", tech: "ASP.NET / C# / SQL", description: "Corporate IT equipment lifecycle tracker logging depreciation values, service warranty renewals, and scrap records." },
  { sno: 45, title: "Airline Flight Delay Prediction & Scheduling", domain: "Aviation Analytics & AI", tech: "Java / Python / Machine Learning", description: "Machine learning model predicting flight departure delays based on weather data and airport congestion patterns." },
];

export default function BscProjects2020() {
  const [searchQuery, setSearchQuery] = useState("");
  const [projectsList, setProjectsList] = useState(bscProjects2020List);
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
    projectRequirements: "BSc Application Projects",
    selectedProjectTitle: "",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?year=2020 - 2021&category=BSC PROJECTS`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              sno: item.sno || idx + 1,
              title: item.title,
              domain: item.domain || "BSc Application",
              tech: item.tech_stack || "Web / Database",
              description: item.description || item.title,
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        // Fallback to static list
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
          message: `Enquiry from BSc Projects 2020-2021 Page. Interested in: ${formData.selectedProjectTitle || "General BSc Projects"}`,
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
        projectRequirements: "BSc Application Projects",
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
      <div className="relative bg-gradient-to-br from-[#0a192f] via-[#0d2346] to-[#071328] text-white pt-8 pb-14 overflow-hidden border-b-4 border-[#ff8200]">
        {/* Background Ambient Glows & Tech Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff8200] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00a8cc] rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px]" />
        </div>

        <div className="max-w-[1360px] mx-auto px-4 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-4">
            <Link to="/" className="hover:text-[#ff8200] transition-colors !no-underline text-slate-300 flex items-center gap-1">
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-slate-400">Application Projects</span>
            <span>/</span>
            <span className="text-[#ff8200] font-semibold">BSc Application Projects 2020 - 2021</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Column: Focused Headline & Clean CTA */}
            <div className="flex-1 max-w-xl">
              
              {/* 3D Certification Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-teal-500/15 via-cyan-500/15 to-transparent backdrop-blur-xl border border-teal-400/40 text-teal-300 text-xs font-black uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                <VerifiedIcon sx={{ fontSize: 16 }} className="text-teal-400 drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                <span>BSC COMPUTER SCIENCE // 2020 - 2021</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[1.12] mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                BSC IEEE PROJECTS 2020-2021 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8200] via-[#ffaa40] to-[#ffd166] drop-shadow-[0_0_25px_rgba(255,130,0,0.55)]">IN CHENNAI</span>
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
                    <span>Explore 45+ BSc Projects</span>
                    <ArrowForwardIcon sx={{ fontSize: 18 }} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                </a>
                <a
                  href="https://wa.me/917299981536?text=Hi,%20I%20am%20interested%20in%20BSc%20Application%20Projects%202020-2021."
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
                  name="Python"
                  icon={<PythonIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-sky-500/50 via-blue-500/20 to-transparent"
                  ringColor="border-sky-400/50"
                  shadowColor="rgba(2,132,199,0.45)"
                  labelColor="text-sky-300"
                  duration={4.2}
                  delay={0}
                />
                <RoundTechOrb
                  name="Java"
                  icon={<JavaIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-orange-500/50 via-amber-500/20 to-transparent"
                  ringColor="border-orange-400/50"
                  shadowColor="rgba(234,88,12,0.45)"
                  labelColor="text-orange-300"
                  duration={3.6}
                  delay={0.3}
                />
                <RoundTechOrb
                  name="Smart IoT"
                  icon={<IotIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-teal-500/50 via-emerald-500/20 to-transparent"
                  ringColor="border-teal-400/50"
                  shadowColor="rgba(13,148,136,0.45)"
                  labelColor="text-teal-300"
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
                  name="AI & ML"
                  icon={<AiChipIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-purple-500/50 via-pink-500/20 to-transparent"
                  ringColor="border-purple-400/50"
                  shadowColor="rgba(168,85,247,0.45)"
                  labelColor="text-purple-300"
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
            
            {/* 3D Year Selector Matrix (10 BSc Application Years) */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff8200] shadow-[0_0_8px_rgba(255,130,0,0.8)]" />
                  BSc Application Projects By Year
                </h3>
                <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-2.5 py-1 rounded-full">
                  10 Academic Years
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {bscYearLinks.map((yr, idx) => {
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
                    placeholder="Search 2020-2021 BSc projects by title or tech (e.g. Healthcare, ATM, Cryptography, Java)..."
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
                      <span>BSc Projects (2020 - 2021) Catalog</span>
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
                                  className="font-bold text-slate-900 text-[14.5px] sm:text-[15.5px] group-hover:text-[#ff8200] transition-colors leading-snug hover:underline"
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
                                  className="px-2.5 py-1.5 bg-slate-900 hover:bg-[#061426] text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:scale-105"
                                >
                                  Details ↗
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

                        <Link
                          to={`/project/${proj.id || proj.sno}`}
                          className="font-bold text-slate-900 text-[15.5px] sm:text-base mb-2 group-hover:text-[#ff8200] transition-colors leading-snug block hover:underline"
                        >
                          {proj.title}
                        </Link>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3.5">
                          {proj.description || "Complete executable project with database script, documentation, and viva prep support."}
                        </p>

                        <div className="pt-2.5 border-t border-slate-100 mb-4">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Stack & Frameworks:</span>
                          <ProgramTechBadges tech={proj.tech} />
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                        <Link
                          to={`/project/${proj.id || proj.sno}`}
                          className="px-3 py-2 bg-slate-900 hover:bg-[#061426] text-white text-xs font-bold rounded-xl transition-all hover:scale-102 flex items-center gap-1 shadow-sm text-center"
                        >
                          Details ↗
                        </Link>
                        <button
                          onClick={() => handleSelectForEnquiry(proj)}
                          className="flex-1 py-2.5 bg-gradient-to-r from-[#ff8200] to-[#f97316] hover:brightness-110 text-white text-xs font-bold rounded-xl transition-all text-center shadow-[0_2px_8px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-102 active:scale-98 cursor-pointer"
                        >
                          Enquire Project
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

            {/* "ABOUT IEEE BSC PROJECT" Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#ff8200] mb-2">
                <MenuBookIcon sx={{ fontSize: 18 }} />
                <span>Overview & Insights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1e3a5f] uppercase tracking-tight mb-5 border-b pb-3 border-slate-100">
                ABOUT IEEE BSC PROJECT (2020-2021)
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  Embark on a journey into innovation with our 2020-2021 BSc Application Projects catalog. At IEEE Project Centre, we invite you to explore a curated selection of projects spanning essential computing domains, from healthcare telemedicine portals and banking financial reporting to logistics tracking and cryptography.
                </p>
                <p>
                  Our projects are specifically tailored to meet the academic requirements of BSc Computer Science, BSc Information Technology, and diploma programs. Every project includes source code, complete system architecture diagrams, and comprehensive viva coaching by senior technical staff.
                </p>
              </div>

              {/* Highlights Bento in About section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
                <div className="p-4 bg-orange-50/70 border border-orange-100 rounded-2xl shadow-2xs">
                  <div className="font-extrabold text-[#ff8200] text-lg mb-1">45+ Projects</div>
                  <div className="text-xs text-slate-600 font-medium">Diverse application domains in Java, PHP, ASP.NET, and Python.</div>
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
                <h3 className="text-lg font-black uppercase tracking-wide">Why Choose IEEE Project Centre for BSc Projects?</h3>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed mb-5">
                We provide end-to-end guidance from topic selection to final viva voce. Each BSc application project comes equipped with fully commented code, comprehensive software requirements specification (SRS), system design architecture, and customized features tailored for your curriculum.
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
                    <option value="BSc Application Projects">BSc Application Projects</option>
                    <option value="BCA Application Projects">BCA Application Projects</option>
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
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2.5 flex-wrap">
                <Link
                  to={`/project/${selectedProject.id || selectedProject.sno}`}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#061426] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open Full Project Page ↗</span>
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
