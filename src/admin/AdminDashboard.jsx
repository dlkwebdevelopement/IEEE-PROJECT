import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE } from '../api';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { blogPosts as initialBlogPosts, getStoredBlogs, saveAdminBlogs } from '../data/blogData';

// Lucide Icons for Ultra-Modern 3D CMS
import {
  Sparkles,
  Layers,
  FileText,
  Send,
  Compass,
  Image as ImageIcon,
  Video,
  Cpu,
  Award,
  Star,
  Handshake,
  BookOpen,
  Edit3,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
  Search,
  Check,
  RefreshCw,
  X,
  AlertTriangle,
  ArrowUpRight,
  Filter,
  CheckCircle2,
  XCircle,
  Database,
  Eye,
  Code,
  Wifi,
  Shield,
  Activity,
  Brain,
  Bot,
  CheckCircle,
  ListOrdered,
  AlignLeft,
  HelpCircle
} from 'lucide-react';

// =========================================================================
// INITIAL RICH DEMO DATASETS (GUARANTEES ZERO EMPTY STATE DURING DEV / OFFLINE)
// =========================================================================
const initialProjectTitles = [
  {
    id: 101,
    title: 'AI-Driven Smart Grid Fault Detection & Self-Healing Telemetry',
    domain: 'AI & IoT',
    category: 'IoT Projects',
    academic_year: '2024 - 2025',
    tech_stack: 'Python, ESP32, TensorFlow, MQTT',
    difficulty: 'Advanced',
    description: 'Autonomous smart grid power surge monitoring and transformer fault isolation using distributed edge IoT sensors and deep neural network classification.'
  },
  {
    id: 102,
    title: 'Blockchain Enabled Secure Electronic Health Record (EHR) Auditing System',
    domain: 'Blockchain & Cloud',
    category: 'Cloud Computing',
    academic_year: '2024 - 2025',
    tech_stack: 'Solidity, Ethereum, React, Node.js',
    difficulty: 'Intermediate',
    description: 'Decentralized and tamper-evident patient health ledger granting verifiable role-based access control with zero-knowledge cryptography.'
  },
  {
    id: 103,
    title: 'Deep Learning Convolutional Neural Network for Early Diabetic Retinopathy Screening',
    domain: 'Deep Learning',
    category: 'Medical AI',
    academic_year: '2024 - 2025',
    tech_stack: 'PyTorch, OpenCV, Flask, CUDA',
    difficulty: 'Advanced',
    description: 'High accuracy fundus imaging classification pipeline detecting microaneurysms and retinal hemorrhages with explainable Grad-CAM heatmaps.'
  },
  {
    id: 104,
    title: 'Dual-Axis Solar Photovoltaic Tracking System with Real-Time Web Telemetry',
    domain: 'Embedded Systems',
    category: 'Renewable Energy',
    academic_year: '2024 - 2025',
    tech_stack: 'Arduino UNO, LDR Sensors, Servo Motors, ESP8266',
    difficulty: 'Intermediate',
    description: 'Closed-loop astronomical solar tracker maximizing incident solar irradiance by 38% compared to static fixed photovoltaic arrays.'
  },
  {
    id: 105,
    title: 'Privacy-Preserving Federated Learning for Multi-Hospital Cancer Diagnosis',
    domain: 'Artificial Intelligence',
    category: 'Privacy & Security',
    academic_year: '2024 - 2025',
    tech_stack: 'PyTorch, Flower FL, Docker, Python 3.11',
    difficulty: 'Advanced',
    description: 'Collaborative distributed training of histological biopsy classification models without centralizing confidential patient healthcare records.'
  },
  {
    id: 106,
    title: 'FPGA Hardware Acceleration for Real-Time AES-256 Cryptographic Engine',
    domain: 'VLSI Design',
    category: 'Hardware Security',
    academic_year: '2024 - 2025',
    tech_stack: 'Verilog HDL, Xilinx Vivado, Spartan-7 FPGA',
    difficulty: 'Advanced',
    description: 'Pipelined 128-bit round transformation architecture achieving gigabit throughput for ultra-low latency hardware secure network enclaves.'
  }
];

const initialProjects = [
  {
    id: 1,
    title: 'Advanced AI & Machine Learning Final Year Suite',
    description: 'Comprehensive Deep Learning, Computer Vision, and Generative AI projects aligned with IEEE standards.',
    link: '/courses',
    image_url: '/images/course-3.jpg',
    icon_name: 'Cpu'
  },
  {
    id: 2,
    title: 'Internet of Things & Embedded Smart Automation',
    description: 'Industrial automation, smart sensor mesh networks, and edge microcontrollers programmed with ESP32 and ARM.',
    link: '/courses',
    image_url: '/images/course-2.jpg',
    icon_name: 'Wifi'
  },
  {
    id: 3,
    title: 'Cloud Computing & Cyber Defense Frameworks',
    description: 'Zero-trust architecture, microservice container orchestration, and blockchain-secured distributed identity systems.',
    link: '/courses',
    image_url: '/images/course-1.jpg',
    icon_name: 'Shield'
  },
  {
    id: 4,
    title: 'Robotics & Autonomous Vehicle Navigation',
    description: 'LiDAR mapping, SLAM algorithms, ROS2 integration, and obstacle avoidance for self-driving rovers.',
    link: '/courses',
    image_url: '/images/course-2.jpg',
    icon_name: 'Bot'
  }
];

const initialEnquiries = [
  {
    id: 1,
    name: 'Kavitha R',
    email: 'kavitha.r@gmail.com',
    mobile: '+91 98401 23456',
    department: 'CSE',
    year: 'Final Year',
    project_title: 'AI Medical Diagnostics CNN',
    message: 'Interested in 2025 IEEE Python Deep Learning project with hardware demo and publication support.',
    status: 'new',
    created_at: '2026-09-08 14:20:00'
  },
  {
    id: 2,
    name: 'Vignesh Kumar',
    email: 'vignesh.k@outlook.com',
    mobile: '+91 97910 87654',
    department: 'ECE',
    year: 'Final Year',
    project_title: 'IoT Smart Microgrid Telemetry',
    message: 'Need quotation for hardware kit, PCB fabrication and journal paper assistance.',
    status: 'contacted',
    created_at: '2026-09-07 11:45:00'
  },
  {
    id: 3,
    name: 'Aishwarya M',
    email: 'aishwarya.m@yahoo.com',
    mobile: '+91 94440 98765',
    department: 'IT',
    year: 'Final Year',
    project_title: 'Blockchain Cloud Ledger',
    message: 'Looking for full source code explanation, PPT documentation and live review demo.',
    status: 'resolved',
    created_at: '2026-09-06 09:30:00'
  }
];

const initialPageSections = [
  {
    id: 1,
    page_slug: 'java-projects',
    section_key: 'about_java',
    title: 'About Java IEEE Projects',
    content: '<p>Our Java IEEE Projects deliver enterprise-grade web, mobile, and cloud software built using Java 17/21, Spring Boot, Hibernate, and MySQL.</p>'
  },
  {
    id: 2,
    page_slug: 'java-projects',
    section_key: 'tools_servers',
    title: 'Java Tools & Deployment Servers',
    content: '<p>Standard development stack includes Eclipse IDE, IntelliJ IDEA, Apache Tomcat, MySQL Workbench, and Postman API testing suite.</p>'
  },
  {
    id: 3,
    page_slug: 'blogs',
    section_key: 'blog_header',
    title: 'IEEE Project Centre Insights & Technical Guides',
    content: '<p>Read our curated articles on IoT, Deep Learning, Embedded Systems, and hardware architectures authored by senior technical architects.</p>'
  }
];

const initialVideos = [
  {
    id: 1,
    title: 'Java Cloud Storage & Secure File Sharing Architecture Demo',
    youtube_id: 'dQw4w9WgXcQ',
    duration: '14:20',
    tags: 'Java, Cloud, Spring Boot'
  },
  {
    id: 2,
    title: 'IoT ESP32 Smart Agriculture with Cloud Dashboard Walkthrough',
    youtube_id: 'dQw4w9WgXcQ',
    duration: '18:45',
    tags: 'IoT, ESP32, MQTT'
  },
  {
    id: 3,
    title: 'Python Deep Learning Medical Imaging U-Net Implementation',
    youtube_id: 'dQw4w9WgXcQ',
    duration: '22:10',
    tags: 'Python, PyTorch, AI'
  }
];

const initialTechs = [
  { id: 1, title: 'Python & Data Science', courses_count: '150+ Projects', icon_name: 'Code' },
  { id: 2, title: 'Java & Spring Boot', courses_count: '120+ Projects', icon_name: 'Cpu' },
  { id: 3, title: 'Embedded & IoT Systems', courses_count: '95+ Projects', icon_name: 'Wifi' },
  { id: 4, title: 'Artificial Intelligence & Deep Learning', courses_count: '110+ Projects', icon_name: 'Brain' },
  { id: 5, title: 'VLSI & MATLAB Design', courses_count: '80+ Projects', icon_name: 'Activity' },
  { id: 6, title: 'Cloud & Cyber Security', courses_count: '70+ Projects', icon_name: 'Shield' }
];

const initialValues = [
  { id: 1, title: '100% Working Code Guarantee', description: 'Every final year project is tested and demoed live with complete source code.', icon_name: 'CheckCircle' },
  { id: 2, title: 'IEEE Transaction Aligned', description: 'Based directly on current year IEEE research publications and novel architectures.', icon_name: 'Award' },
  { id: 3, title: 'Full Hardware Kits & PCB', description: 'Pre-assembled and tested microcontrollers, sensors, and actuator modules included.', icon_name: 'Cpu' },
  { id: 4, title: 'Viva & Publication Support', description: 'Comprehensive PPT slides, documentation reports, and Scopus/UGC paper drafting.', icon_name: 'BookOpen' }
];

const initialTestimonials = [
  {
    id: 1,
    name: 'Suresh Babu',
    role: 'B.E. Computer Science, Anna University',
    review_text: 'Excellent guidance on our IEEE AI project. The code review and documentation support was top notch, cleared external viva with S-Grade!',
    rating: '5'
  },
  {
    id: 2,
    name: 'Priyanka Sundar',
    role: 'B.Tech IT, SRM Institute of Science & Tech',
    review_text: 'DLK team explained every line of the Cloud microservice codebase and gave hands-on deployment training. Highly recommended!',
    rating: '5'
  },
  {
    id: 3,
    name: 'Mohamed Faisal',
    role: 'B.E. ECE, Sri Venkateswara College of Engg',
    review_text: 'Got the hardware prototype running on day 2. The PCB layout and sensor calibration was verified thoroughly before submission.',
    rating: '5'
  }
];

const initialPartners = [
  { id: 1, name: 'IEEE Computer Society', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg' },
  { id: 2, name: 'Computer Society of India (CSI)', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Computer_Society_of_India_logo.png' },
  { id: 3, name: 'ISO 9001:2015 Certified Organization', logo_url: '/images/partner-iso.png' }
];

// =========================================================================
// REUSABLE 3D PAGINATION CONTROLS
// =========================================================================
function PaginationControls({ currentPage, totalItems, perPage, onPageChange, onPerPageChange }) {
  const totalPages = Math.ceil(totalItems / perPage) || 1;
  if (totalItems === 0) return null;

  const startItem = (currentPage - 1) * perPage + 1;
  const endItem = Math.min(currentPage * perPage, totalItems);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-t border-slate-200/90 text-xs font-semibold text-slate-600 rounded-b-2xl shadow-inner">
      {/* Range Info & Per-Page Selector */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-slate-600">
          Showing <strong className="text-slate-900 font-bold">{startItem}</strong> to <strong className="text-slate-900 font-bold">{endItem}</strong> of <strong className="text-[#ff8200] font-black">{totalItems}</strong> records
        </span>
        <div className="flex items-center gap-1.5 ml-1 sm:ml-3 pl-3 border-l border-slate-200">
          <span className="text-slate-400 font-medium">Per Page:</span>
          <select
            value={perPage}
            onChange={(e) => onPerPageChange(Number(e.target.value))}
            className="px-2.5 py-1 bg-white border border-slate-200/90 rounded-lg text-xs font-bold text-slate-800 shadow-xs focus:border-[#ff8200] focus:ring-2 focus:ring-orange-500/10 focus:outline-none cursor-pointer"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      {/* Next / Previous & Number Pills */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-3 py-1.5 rounded-xl border border-slate-200/90 bg-white text-slate-700 font-bold hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 shadow-2xs cursor-pointer active:scale-95"
          title="Previous Page"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Prev</span>
        </button>

        {getPageNumbers().map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`w-8 h-8 rounded-xl font-black text-xs transition-all duration-200 cursor-pointer flex items-center justify-center ${
              num === currentPage
                ? "bg-gradient-to-tr from-[#ff8200] via-[#ff9500] to-[#f97316] text-white shadow-[0_4px_12px_rgba(255,130,0,0.4)] scale-105 border border-amber-300/50"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 shadow-2xs"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-3 py-1.5 rounded-xl border border-slate-200/90 bg-white text-slate-700 font-bold hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 shadow-2xs cursor-pointer active:scale-95"
          title="Next Page"
        >
          <span>Next</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Project Titles');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [backendOnline, setBackendOnline] = useState(null);
  const [checkingBackend, setCheckingBackend] = useState(false);
  const formRef = useRef(null);

  // Data States
  const [projects, setProjects] = useState(initialProjects);
  const [projectTitles, setProjectTitles] = useState(initialProjectTitles);
  const [blogs, setBlogs] = useState(() => getStoredBlogs());
  const [pageSections, setPageSections] = useState(initialPageSections);
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [navCats, setNavCats] = useState([
    'Artificial Intelligence', 'Machine Learning', 'Internet of Things', 'Cloud Computing', 'Cyber Security', 'Robotics & Embedded'
  ]);
  const [navYears, setNavYears] = useState(['2024 - 2025', '2023 - 2024', '2022 - 2023', '2021 - 2022']);
  const [hero, setHero] = useState([{
    title: 'IEEE FINAL YEAR PROJECTS IN CHENNAI',
    subtitle: 'Join Chennai\'s Premier IEEE Project Development Centre for Final Year B.E, B.Tech, M.E, MCA & Polytechnic Students.'
  }]);
  const [videos, setVideos] = useState(initialVideos);
  const [techs, setTechs] = useState(initialTechs);
  const [values, setValues] = useState(initialValues);
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [partners, setPartners] = useState(initialPartners);

  // Form States
  const [projData, setProjData] = useState({ title: '', description: '', link: '', image_url: '', icon_name: 'MemoryIcon' });
  // Default structure for Project Titles (modules and deliverables)
  const defaultTitleForm = {
    title: '',
    domain: 'Core Java / OSN',
    category: 'General Java',
    academic_year: '2024 - 2025',
    tech_stack: 'Java 17, Spring Boot, MySQL',
    difficulty: 'Intermediate',
    description: '',
    abstract: '',
    modules: [
      { name: 'System Analysis & Requirements Capture', desc: 'Functional specifications, stakeholder use cases, and boundary constraints definition.' },
      { name: 'Core Architecture & Logic Engine', desc: 'Backend service orchestration, algorithms, and secure business rules execution.' },
      { name: 'Database & Persistent Storage', desc: 'Normalized schema design, secure connection pooling, and optimized transactions.' },
      { name: 'Presentation & Telemetry Dashboard', desc: 'Interactive responsive user interface, audit logs, and status visualization.' }
    ],
    features: [
      '100% Complete Source Code & MySQL Database Script',
      'IEEE Base Paper & Reference Architecture',
      'Full Project Report & Documentation (Word & PDF)',
      'PowerPoint Presentation (PPT) for Review Viva',
      'Step-by-Step Software Setup & Execution Guide',
      '1-on-1 Online / Offline Technical Guidance'
    ]
  };

  const [titleData, setTitleData] = useState(defaultTitleForm);
  
  // Default structure for Technical Blog details and dynamic section builder
  const defaultBlogForm = {
    title: '',
    slug: '',
    category: 'IoT & Protocols',
    author: 'ieeeprojectcentre',
    read_time: '6 min read',
    excerpt: '',
    introduction: '',
    tags: 'IoT, Networking, Protocols',
    sections: [
      {
        heading: 'Architecture & Protocol Principles',
        points: [
          {
            title: 'Foundational Protocol Mechanics',
            desc: 'Real-time telemetry and efficient message transmission across distributed sensor networks.'
          },
          {
            title: 'Payload Efficiency',
            desc: 'Compact serialization minimizing bandwidth and processor cycle consumption on edge microcontrollers.'
          }
        ]
      }
    ]
  };

  const [blogData, setBlogData] = useState(defaultBlogForm);
  const [sectionData, setSectionData] = useState({
    page_slug: 'java-projects',
    section_key: 'about_java',
    title: 'About Java Projects',
    content: ''
  });
  const [navData, setNavData] = useState({ name: '', type: 'category', parent_menu: 'IEEE Projects' });
  const [heroData, setHeroForm] = useState({ title: '', subtitle: '', button_text: '', image_url: '' });
  const [videoData, setVideoData] = useState({ title: '', duration: '', youtube_id: '', tags: 'ECE' });
  const [techData, setTechData] = useState({ title: '', courses_count: '', icon_name: '' });
  const [valueData, setValueData] = useState({ title: '', description: '', icon_name: '' });
  const [testData, setTestForm] = useState({ name: '', role: '', review_text: '', rating: '5' });
  const [partnerData, setPartnerData] = useState({ name: '', logo_url: '' });

  // Filter & Search States
  const [searchQueries, setSearchQueries] = useState({});
  const [titleYearFilter, setTitleYearFilter] = useState('All');
  const [titleCatFilter, setTitleCatFilter] = useState('All');
  const [blogCatFilter, setBlogCatFilter] = useState('All');
  const [enquiryStatusFilter, setEnquiryStatusFilter] = useState('All');

  // Editing ID
  const [editingId, setEditingId] = useState(null);

  // Pagination State per Tab (Page & PerPage)
  const [pagination, setPagination] = useState({
    'Project Titles': { page: 1, perPage: 10 },
    'Projects Slider': { page: 1, perPage: 10 },
    'Technical Blogs': { page: 1, perPage: 10 },
    'Enquiries / Leads': { page: 1, perPage: 10 },
    'Page Content': { page: 1, perPage: 10 },
    'Featured Videos': { page: 1, perPage: 10 },
    'Testimonials': { page: 1, perPage: 10 },
    'Partners': { page: 1, perPage: 10 },
    'Technologies': { page: 1, perPage: 10 },
    'Core Values': { page: 1, perPage: 10 },
  });

  const getPage = (tab) => pagination[tab]?.page || 1;
  const getPerPage = (tab) => pagination[tab]?.perPage || 10;
  const setPage = (tab, newPage) => {
    setPagination(prev => ({
      ...prev,
      [tab]: { ...(prev[tab] || { perPage: 10 }), page: newPage }
    }));
  };
  const setPerPage = (tab, newPerPage) => {
    setPagination(prev => ({
      ...prev,
      [tab]: { page: 1, perPage: newPerPage }
    }));
  };

  // Tabs with luxury 3D icon config and counts
  const tabs = [
    { name: 'Project Titles', icon: <FileText className="w-4 h-4 text-amber-400" />, count: projectTitles.length, gradient: 'from-amber-500 to-orange-600' },
    { name: 'Projects Slider', icon: <Layers className="w-4 h-4 text-blue-400" />, count: projects.length, gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Technical Blogs', icon: <BookOpen className="w-4 h-4 text-emerald-400" />, count: blogs.length, gradient: 'from-emerald-500 to-teal-600', isNew: true },
    { name: 'Enquiries / Leads', icon: <Send className="w-4 h-4 text-orange-400" />, count: enquiries.length, gradient: 'from-orange-500 to-red-600' },
    { name: 'Page Content', icon: <Sparkles className="w-4 h-4 text-violet-400" />, count: pageSections.length, gradient: 'from-purple-500 to-indigo-600' },
    { name: 'Navbar Menu', icon: <Compass className="w-4 h-4 text-cyan-400" />, count: navCats.length + navYears.length, gradient: 'from-cyan-500 to-blue-600' },
    { name: 'Hero Banner', icon: <ImageIcon className="w-4 h-4 text-rose-400" />, count: hero.length, gradient: 'from-rose-500 to-pink-600' },
    { name: 'Featured Videos', icon: <Video className="w-4 h-4 text-red-400" />, count: videos.length, gradient: 'from-red-500 to-rose-600' },
    { name: 'Technologies', icon: <Cpu className="w-4 h-4 text-teal-400" />, count: techs.length, gradient: 'from-teal-500 to-cyan-600' },
    { name: 'Core Values', icon: <Award className="w-4 h-4 text-amber-300" />, count: values.length, gradient: 'from-amber-400 to-yellow-600' },
    { name: 'Testimonials', icon: <Star className="w-4 h-4 text-yellow-300" />, count: testimonials.length, gradient: 'from-yellow-400 to-amber-500' },
    { name: 'Partners', icon: <Handshake className="w-4 h-4 text-emerald-300" />, count: partners.length, gradient: 'from-emerald-400 to-teal-600' },
  ];

  useEffect(() => {
    fetchAllData();
  }, []);

  const showSuccess = (msg) => {
    setSuccess(msg);
    setError('');
    setTimeout(() => setSuccess(''), 4500);
  };

  const showError = (msg) => {
    setError(msg);
    setSuccess('');
  };

  const checkBackendHealth = async () => {
    setCheckingBackend(true);
    try {
      const res = await fetch(`${API_BASE}/projects.php`);
      if (res.ok) {
        setBackendOnline(true);
        showSuccess('Backend API is active and healthy!');
        return true;
      } else {
        setBackendOnline(false);
        return false;
      }
    } catch {
      setBackendOnline(false);
      return false;
    } finally {
      setCheckingBackend(false);
    }
  };

  const parseErrorMessage = async (res, defaultMsg) => {
    try {
      const data = await res.json();
      if (data) {
        if (data.message && data.errors && typeof data.errors === 'object') {
          const detailed = Object.entries(data.errors)
            .map(([field, errs]) => `${field}: ${Array.isArray(errs) ? errs.join(', ') : errs}`)
            .join(' | ');
          return `${data.message} (${detailed})`;
        }
        if (data.message) return data.message;
        if (data.error) return typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
      }
    } catch {
      // response was not JSON or empty
    }
    return `${defaultMsg} (HTTP ${res.status}: ${res.statusText || 'Server Error'})`;
  };

  const fetchAllData = async () => {
    try {
      const endpoints = [
        { key: 'projects', url: `${API_BASE}/projects.php` },
        { key: 'projectTitles', url: `${API_BASE}/project_titles.php` },
        { key: 'blogs', url: `${API_BASE}/blogs.php` },
        { key: 'pageSections', url: `${API_BASE}/page_sections.php` },
        { key: 'enquiries', url: `${API_BASE}/enquiries.php` },
        { key: 'navbar', url: `${API_BASE}/navbar.php` },
        { key: 'hero', url: `${API_BASE}/hero.php` },
        { key: 'videos', url: `${API_BASE}/videos.php` },
        { key: 'techs', url: `${API_BASE}/technologies.php` },
        { key: 'values', url: `${API_BASE}/values.php` },
        { key: 'testimonials', url: `${API_BASE}/testimonials.php` },
        { key: 'partners', url: `${API_BASE}/partners.php` },
      ];

      let anySuccess = false;
      for (let ep of endpoints) {
        try {
          const res = await fetch(ep.url);
          if (res.ok) {
            anySuccess = true;
            const data = await res.json();
            const raw = data && data.data ? data.data : data;

            if (ep.key === 'navbar') {
              let cats = [];
              if (data.categories) {
                Object.values(data.categories).forEach(arr => {
                  cats = cats.concat(arr);
                });
              }
              setNavCats(cats);
              setNavYears(data.years || []);
            } else if (ep.key === 'projects') setProjects(Array.isArray(raw) ? raw : []);
            else if (ep.key === 'projectTitles') setProjectTitles(Array.isArray(raw) ? raw : []);
            else if (ep.key === 'blogs') {
              if (Array.isArray(raw) && raw.length > 0) {
                setBlogs(raw);
                saveAdminBlogs(raw);
              }
            }
            else if (ep.key === 'pageSections') setPageSections(Array.isArray(raw) ? raw : []);
            else if (ep.key === 'enquiries') setEnquiries(Array.isArray(raw) ? raw : []);
            else if (ep.key === 'hero') setHero(raw ? (Array.isArray(raw) ? raw : [raw]) : []);
            else if (ep.key === 'videos') setVideos(Array.isArray(raw) ? raw : []);
            else if (ep.key === 'techs') setTechs(Array.isArray(raw) ? raw : []);
            else if (ep.key === 'values') setValues(Array.isArray(raw) ? raw : []);
            else if (ep.key === 'testimonials') setTestimonials(Array.isArray(raw) ? raw : []);
            else if (ep.key === 'partners') setPartners(Array.isArray(raw) ? raw : []);
          }
        } catch (e) {
          // keep local state if unreachable
        }
      }
      setBackendOnline(anySuccess);
    } catch (err) {
      setBackendOnline(false);
    }
  };

  const handlePost = async (url, data, onSuccess, localFallback) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setBackendOnline(true);
        fetchAllData();
        onSuccess();
        showSuccess('Item successfully created.');
        return;
      } else {
        const errorText = await parseErrorMessage(res, 'Failed to save data');
        showError(errorText);
      }
    } catch (err) {
      setBackendOnline(false);
      // Fallback local update so admin is not blocked during dev
      if (localFallback) {
        localFallback();
        onSuccess();
        showSuccess('Item created locally (backend currently offline).');
        return;
      }
      showError(`Backend connection failed: ${err.message}.`);
    }
  };

  const handlePut = async (url, data, onSuccess, localFallback) => {
    try {
      const payload = { ...data, id: editingId };
      const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setBackendOnline(true);
        fetchAllData();
        onSuccess();
        setEditingId(null);
        showSuccess('Item successfully updated.');
        return;
      } else {
        const errorText = await parseErrorMessage(res, 'Failed to update data');
        showError(errorText);
      }
    } catch (err) {
      setBackendOnline(false);
      if (localFallback) {
        localFallback();
        onSuccess();
        setEditingId(null);
        showSuccess('Item updated locally (backend currently offline).');
        return;
      }
      showError(`Backend connection failed: ${err.message}.`);
    }
  };

  const handleDelete = async (url, payload, localFallback) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return;
    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setBackendOnline(true);
        fetchAllData();
        showSuccess('Item deleted successfully.');
        return;
      } else {
        const errorText = await parseErrorMessage(res, 'Failed to delete item');
        showError(errorText);
      }
    } catch (err) {
      setBackendOnline(false);
      if (localFallback) {
        localFallback();
        showSuccess('Item deleted locally.');
        return;
      }
      showError(`Backend connection failed: ${err.message}.`);
    }
  };

  const resetForm = (tab) => {
    setEditingId(null);
    if (tab === 'Projects Slider') setProjData({ title: '', description: '', link: '', image_url: '', icon_name: 'MemoryIcon' });
    else if (tab === 'Project Titles') setTitleData(defaultTitleForm);
    else if (tab === 'Technical Blogs') setBlogData(defaultBlogForm);
    else if (tab === 'Page Content') setSectionData({ page_slug: 'java-projects', section_key: 'about_java', title: 'About Java Projects', content: '' });
    else if (tab === 'Navbar Menu') setNavData({ name: '', type: 'category', parent_menu: 'IEEE Projects' });
    else if (tab === 'Hero Banner') setHeroForm({ title: '', subtitle: '', button_text: '', image_url: '' });
    else if (tab === 'Featured Videos') setVideoData({ title: '', duration: '', youtube_id: '', tags: 'ECE' });
    else if (tab === 'Technologies') setTechData({ title: '', courses_count: '', icon_name: '' });
    else if (tab === 'Core Values') setValueData({ title: '', description: '', icon_name: '' });
    else if (tab === 'Testimonials') setTestForm({ name: '', role: '', review_text: '', rating: '5' });
    else if (tab === 'Partners') setPartnerData({ name: '', logo_url: '' });
  };

  const startEdit = (id, dataSetter, data) => {
    setEditingId(id);
    dataSetter(data);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // =========================================================================
  // PROJECT TITLE DETAILS & DYNAMIC MODULES/DELIVERABLES HANDLERS
  // =========================================================================
  const startEditTitle = (item) => {
    setEditingId(item.id);
    const modules = Array.isArray(item.modules) && item.modules.length > 0 ? item.modules : [
      { name: 'System Analysis & Requirements Capture', desc: `Specifications and scope analysis for ${item.title}` },
      { name: 'Core Architecture Engine', desc: `Processing pipeline and business logic using ${item.tech_stack || 'standard frameworks'}` },
      { name: 'Database & Persistent Storage', desc: 'Normalized schema design, secure connection pooling, and optimized transactions.' },
      { name: 'Presentation & Telemetry Dashboard', desc: 'Interactive responsive user interface, audit logs, and status visualization.' }
    ];
    const features = Array.isArray(item.features) && item.features.length > 0 ? item.features : [
      '100% Complete Source Code & MySQL Database Script',
      'IEEE Base Paper & Reference Architecture',
      'Full Project Report & Documentation (Word & PDF)',
      'PowerPoint Presentation (PPT) for Review Viva',
      'Step-by-Step Software Setup & Execution Guide',
      '1-on-1 Online / Offline Technical Guidance'
    ];

    setTitleData({
      id: item.id,
      title: item.title || '',
      domain: item.domain || 'General Java',
      category: item.category || 'General Java',
      academic_year: item.academic_year || '2024 - 2025',
      tech_stack: item.tech_stack || '',
      difficulty: item.difficulty || 'Intermediate',
      description: item.description || '',
      abstract: item.abstract || '',
      modules,
      features
    });

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const addTitleModule = () => {
    setTitleData(prev => ({
      ...prev,
      modules: [...(prev.modules || []), { name: '', desc: '' }]
    }));
  };

  const removeTitleModule = (index) => {
    setTitleData(prev => ({
      ...prev,
      modules: (prev.modules || []).filter((_, i) => i !== index)
    }));
  };

  const updateTitleModule = (index, field, value) => {
    setTitleData(prev => {
      const updated = [...(prev.modules || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, modules: updated };
    });
  };

  const addTitleFeature = () => {
    setTitleData(prev => ({
      ...prev,
      features: [...(prev.features || []), '']
    }));
  };

  const removeTitleFeature = (index) => {
    setTitleData(prev => ({
      ...prev,
      features: (prev.features || []).filter((_, i) => i !== index)
    }));
  };

  const updateTitleFeature = (index, value) => {
    setTitleData(prev => {
      const updated = [...(prev.features || [])];
      updated[index] = value;
      return { ...prev, features: updated };
    });
  };

  // =========================================================================
  // TECHNICAL BLOG DETAILS & DYNAMIC SECTION/POINT BUILDER HANDLERS
  // =========================================================================
  const startEditBlog = (b) => {
    setEditingId(b.id);
    const tagsStr = Array.isArray(b.tags) ? b.tags.join(', ') : (b.tags || '');

    let parsedSections = [];
    if (Array.isArray(b.sections) && b.sections.length > 0) {
      parsedSections = b.sections.map(s => ({
        heading: s.heading || '',
        points: Array.isArray(s.points) && s.points.length > 0
          ? s.points.map(p => ({ title: p.title || '', desc: p.desc || p.description || '' }))
          : (s.text ? [{ title: 'Section Overview', desc: s.text }] : [{ title: '', desc: '' }])
      }));
    } else if (typeof b.sections === 'string') {
      try {
        const parsed = JSON.parse(b.sections);
        if (Array.isArray(parsed)) {
          parsedSections = parsed.map(s => ({
            heading: s.heading || '',
            points: Array.isArray(s.points)
              ? s.points.map(p => ({ title: p.title || '', desc: p.desc || p.description || '' }))
              : [{ title: '', desc: '' }]
          }));
        }
      } catch (e) {}
    }

    if (parsedSections.length === 0) {
      parsedSections = [
        {
          heading: 'Core Architecture & Technical Overview',
          points: [{ title: 'Primary Architecture', desc: b.excerpt || '' }]
        }
      ];
    }

    setBlogData({
      id: b.id,
      title: b.title || '',
      slug: b.slug || '',
      category: b.category || 'IoT & Protocols',
      author: b.author || 'ieeeprojectcentre',
      read_time: b.readTime || b.read_time || '6 min read',
      excerpt: b.excerpt || '',
      introduction: b.introduction || '',
      tags: tagsStr,
      sections: parsedSections
    });

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const addBlogSection = () => {
    setBlogData(prev => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          heading: `Section ${prev.sections.length + 1}: Key Specifications`,
          points: [{ title: '', desc: '' }]
        }
      ]
    }));
  };

  const removeBlogSection = (sIdx) => {
    setBlogData(prev => {
      const filtered = prev.sections.filter((_, i) => i !== sIdx);
      return {
        ...prev,
        sections: filtered.length > 0 ? filtered : [{ heading: 'Section 1: General Details', points: [{ title: '', desc: '' }] }]
      };
    });
  };

  const updateBlogSectionHeading = (sIdx, val) => {
    setBlogData(prev => {
      const copy = [...prev.sections];
      copy[sIdx] = { ...copy[sIdx], heading: val };
      return { ...prev, sections: copy };
    });
  };

  const addBlogPoint = (sIdx) => {
    setBlogData(prev => {
      const copy = [...prev.sections];
      const curPoints = copy[sIdx].points ? [...copy[sIdx].points] : [];
      curPoints.push({ title: '', desc: '' });
      copy[sIdx] = { ...copy[sIdx], points: curPoints };
      return { ...prev, sections: copy };
    });
  };

  const removeBlogPoint = (sIdx, pIdx) => {
    setBlogData(prev => {
      const copy = [...prev.sections];
      const curPoints = (copy[sIdx].points || []).filter((_, i) => i !== pIdx);
      copy[sIdx] = { ...copy[sIdx], points: curPoints };
      return { ...prev, sections: copy };
    });
  };

  const updateBlogPoint = (sIdx, pIdx, field, val) => {
    setBlogData(prev => {
      const copy = [...prev.sections];
      const curPoints = [...(copy[sIdx].points || [])];
      curPoints[pIdx] = { ...curPoints[pIdx], [field]: val };
      copy[sIdx] = { ...copy[sIdx], points: curPoints };
      return { ...prev, sections: copy };
    });
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    if (!blogData.title.trim()) {
      showError('Article title is required.');
      return;
    }

    const formattedTags = typeof blogData.tags === 'string'
      ? blogData.tags.split(',').map(t => t.trim()).filter(Boolean)
      : (blogData.tags || []);

    const generatedSlug = (blogData.slug || blogData.title)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const payload = {
      ...blogData,
      slug: generatedSlug,
      readTime: blogData.read_time || '6 min read',
      tags: formattedTags,
      sections: blogData.sections
    };

    const action = editingId ? handlePut : handlePost;
    action(
      `${API_BASE}/blogs.php`,
      payload,
      () => resetForm('Technical Blogs'),
      () => {
        let updatedList;
        if (editingId) {
          updatedList = blogs.map(b => b.id === editingId ? { ...b, ...payload } : b);
        } else {
          const newPost = {
            id: Date.now(),
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            commentsCount: 0,
            ...payload
          };
          updatedList = [newPost, ...blogs];
        }
        setBlogs(updatedList);
        saveAdminBlogs(updatedList);
        resetForm('Technical Blogs');
        showSuccess(editingId ? 'Blog details and section data updated successfully!' : 'Technical blog publication created successfully!');
      }
    );
  };

  const handleBlogDelete = (b) => {
    handleDelete(
      `${API_BASE}/blogs.php`,
      { id: b.id },
      () => {
        const updated = blogs.filter(item => item.id !== b.id);
        setBlogs(updated);
        saveAdminBlogs(updated);
        showSuccess('Blog publication deleted successfully.');
      }
    );
  };

  const updateSearchQuery = (tab, val) => {
    setSearchQueries(prev => ({ ...prev, [tab]: val }));
    setPage(tab, 1); // Reset to page 1 on search
  };

  // =========================================================================
  // FILTERED & PAGINATED LISTS
  // =========================================================================

  // 1. Project Titles
  const filteredProjectTitles = useMemo(() => {
    const q = (searchQueries['Project Titles'] || '').toLowerCase();
    return projectTitles.filter(item => {
      const matchYear = titleYearFilter === 'All' || item.academic_year === titleYearFilter;
      const matchCat = titleCatFilter === 'All' || item.category === titleCatFilter;
      const matchSearch = (item.title || '').toLowerCase().includes(q) || (item.domain || '').toLowerCase().includes(q) || (item.tech_stack || '').toLowerCase().includes(q);
      return matchYear && matchCat && matchSearch;
    });
  }, [projectTitles, titleYearFilter, titleCatFilter, searchQueries]);

  const paginatedTitles = useMemo(() => {
    const page = getPage('Project Titles');
    const perPage = getPerPage('Project Titles');
    return filteredProjectTitles.slice((page - 1) * perPage, page * perPage);
  }, [filteredProjectTitles, pagination]);

  // 2. Technical Blogs
  const filteredBlogs = useMemo(() => {
    const q = (searchQueries['Technical Blogs'] || '').toLowerCase();
    return blogs.filter(b => {
      const matchCat = blogCatFilter === 'All' || b.category === blogCatFilter;
      const matchSearch = (b.title || '').toLowerCase().includes(q) || (b.excerpt || '').toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [blogs, blogCatFilter, searchQueries]);

  const paginatedBlogs = useMemo(() => {
    const page = getPage('Technical Blogs');
    const perPage = getPerPage('Technical Blogs');
    return filteredBlogs.slice((page - 1) * perPage, page * perPage);
  }, [filteredBlogs, pagination]);

  // 3. Projects Slider
  const filteredProjects = useMemo(() => {
    const q = (searchQueries['Projects Slider'] || '').toLowerCase();
    return projects.filter(p => !q || (p.title || '').toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q));
  }, [projects, searchQueries]);

  const paginatedProjects = useMemo(() => {
    const page = getPage('Projects Slider');
    const perPage = getPerPage('Projects Slider');
    return filteredProjects.slice((page - 1) * perPage, page * perPage);
  }, [filteredProjects, pagination]);

  // 4. Enquiries
  const filteredEnquiries = useMemo(() => {
    const q = (searchQueries['Enquiries / Leads'] || '').toLowerCase();
    return enquiries.filter(item => {
      const matchStatus = enquiryStatusFilter === 'All' || item.status === enquiryStatusFilter;
      const matchSearch = (item.name || '').toLowerCase().includes(q) || (item.email || '').toLowerCase().includes(q) || (item.mobile || '').toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }, [enquiries, enquiryStatusFilter, searchQueries]);

  const paginatedEnquiries = useMemo(() => {
    const page = getPage('Enquiries / Leads');
    const perPage = getPerPage('Enquiries / Leads');
    return filteredEnquiries.slice((page - 1) * perPage, page * perPage);
  }, [filteredEnquiries, pagination]);

  // 5. Page Sections
  const filteredSections = useMemo(() => {
    const q = (searchQueries['Page Content'] || '').toLowerCase();
    return pageSections.filter(s => !q || (s.title || '').toLowerCase().includes(q) || (s.section_key || '').toLowerCase().includes(q));
  }, [pageSections, searchQueries]);

  const paginatedSections = useMemo(() => {
    const page = getPage('Page Content');
    const perPage = getPerPage('Page Content');
    return filteredSections.slice((page - 1) * perPage, page * perPage);
  }, [filteredSections, pagination]);

  // 6. Featured Videos
  const filteredVideos = useMemo(() => {
    const q = (searchQueries['Featured Videos'] || '').toLowerCase();
    return videos.filter(v => !q || (v.title || '').toLowerCase().includes(q) || (v.youtube_id || '').toLowerCase().includes(q) || (v.tags || '').toLowerCase().includes(q));
  }, [videos, searchQueries]);

  const paginatedVideos = useMemo(() => {
    const page = getPage('Featured Videos');
    const perPage = getPerPage('Featured Videos');
    return filteredVideos.slice((page - 1) * perPage, page * perPage);
  }, [filteredVideos, pagination]);

  // 7. Technologies
  const filteredTechs = useMemo(() => {
    const q = (searchQueries['Technologies'] || '').toLowerCase();
    return techs.filter(t => !q || (t.title || '').toLowerCase().includes(q) || (t.courses_count || '').toLowerCase().includes(q));
  }, [techs, searchQueries]);

  const paginatedTechs = useMemo(() => {
    const page = getPage('Technologies');
    const perPage = getPerPage('Technologies');
    return filteredTechs.slice((page - 1) * perPage, page * perPage);
  }, [filteredTechs, pagination]);

  // 8. Core Values
  const filteredValues = useMemo(() => {
    const q = (searchQueries['Core Values'] || '').toLowerCase();
    return values.filter(v => !q || (v.title || '').toLowerCase().includes(q) || (v.description || '').toLowerCase().includes(q));
  }, [values, searchQueries]);

  const paginatedValues = useMemo(() => {
    const page = getPage('Core Values');
    const perPage = getPerPage('Core Values');
    return filteredValues.slice((page - 1) * perPage, page * perPage);
  }, [filteredValues, pagination]);

  // 9. Testimonials
  const filteredTestimonials = useMemo(() => {
    const q = (searchQueries['Testimonials'] || '').toLowerCase();
    return testimonials.filter(t => !q || (t.name || '').toLowerCase().includes(q) || (t.role || '').toLowerCase().includes(q) || (t.review_text || '').toLowerCase().includes(q));
  }, [testimonials, searchQueries]);

  const paginatedTestimonials = useMemo(() => {
    const page = getPage('Testimonials');
    const perPage = getPerPage('Testimonials');
    return filteredTestimonials.slice((page - 1) * perPage, page * perPage);
  }, [filteredTestimonials, pagination]);

  // 10. Partners
  const filteredPartners = useMemo(() => {
    const q = (searchQueries['Partners'] || '').toLowerCase();
    return partners.filter(p => !q || (p.name || '').toLowerCase().includes(q));
  }, [partners, searchQueries]);

  const paginatedPartners = useMemo(() => {
    const page = getPage('Partners');
    const perPage = getPerPage('Partners');
    return filteredPartners.slice((page - 1) * perPage, page * perPage);
  }, [filteredPartners, pagination]);

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans antialiased text-slate-800 selection:bg-[#ff8200] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. LUXURY 3D CMS HEADER */}
      {/* ========================================================================= */}
      <header className="bg-gradient-to-r from-[#07172e] via-[#0d2244] to-[#0a1b35] text-white shadow-xl border-b-2 border-[#ff8200] sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ff8200] via-[#ff9500] to-amber-300 flex items-center justify-center text-white shadow-[0_4px_16px_rgba(255,130,0,0.5),inset_0_1.5px_2px_rgba(255,255,255,0.7)] border border-amber-200/50 shrink-0">
              <Sparkles className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#ff8200] text-white font-black text-[10px] px-2 py-0.5 rounded uppercase tracking-wider shadow-xs">
                  ADMIN 3.0
                </span>
                <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2 leading-none">
                  <span>IEEE Project Centre</span>
                  <span className="text-slate-400 text-xs font-normal hidden md:inline">| CMS Control Station</span>
                </h1>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">Full CRUD Engine, Instant Search & Multi-Entity Pagination</p>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            {/* Backend Connectivity Status Pill */}
            <div className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-inner border ${
              backendOnline === true
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : backendOnline === false
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                : 'bg-slate-700/60 text-slate-300 border-slate-600'
            }`}>
              <span className={`w-2 h-2 rounded-full ${
                backendOnline === true ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : backendOnline === false ? 'bg-rose-400 animate-pulse' : 'bg-slate-400'
              }`}></span>
              <span className="hidden sm:inline">
                {backendOnline === true ? 'API Server Online' : backendOnline === false ? 'API Server Offline' : 'Checking API...'}
              </span>
            </div>

            <button
              onClick={checkBackendHealth}
              disabled={checkingBackend}
              title="Test API Connection"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 border border-white/10"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${checkingBackend ? 'animate-spin text-amber-400' : ''}`} />
              <span className="hidden sm:inline">{checkingBackend ? 'Pinging...' : 'Test API'}</span>
            </button>

            <Link
              to="/"
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white text-xs font-black transition-all flex items-center gap-1.5 !no-underline shadow-[0_2px_12px_rgba(255,130,0,0.4)] hover:scale-105 active:scale-95"
            >
              <span>View Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. MAIN WORKSPACE */}
      {/* ========================================================================= */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-6 space-y-6">
        
        {/* Top 3D Metric Spheres & Stat Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.04)] flex items-center justify-between group hover:shadow-md transition-all">
            <div>
              <span className="text-[10.5px] text-slate-500 font-black uppercase tracking-wider block">Project Titles</span>
              <span className="text-2xl font-black text-slate-900 mt-1 block">{projectTitles.length}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/80 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.04)] flex items-center justify-between group hover:shadow-md transition-all">
            <div>
              <span className="text-[10.5px] text-slate-500 font-black uppercase tracking-wider block">Slider Projs</span>
              <span className="text-2xl font-black text-slate-900 mt-1 block">{projects.length}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/80 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.04)] flex items-center justify-between group hover:shadow-md transition-all">
            <div>
              <span className="text-[10.5px] text-slate-500 font-black uppercase tracking-wider block">Tech Blogs</span>
              <span className="text-2xl font-black text-emerald-600 mt-1 block">{blogs.length}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/80 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.04)] flex items-center justify-between group hover:shadow-md transition-all">
            <div>
              <span className="text-[10.5px] text-slate-500 font-black uppercase tracking-wider block">Leads / Enquiries</span>
              <span className="text-2xl font-black text-[#ff8200] mt-1 block">{enquiries.length}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-200/80 group-hover:scale-110 transition-transform">
              <Send className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.04)] flex items-center justify-between group hover:shadow-md transition-all">
            <div>
              <span className="text-[10.5px] text-slate-500 font-black uppercase tracking-wider block">Videos</span>
              <span className="text-2xl font-black text-slate-900 mt-1 block">{videos.length}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-200/80 group-hover:scale-110 transition-transform">
              <Video className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.04)] flex items-center justify-between group hover:shadow-md transition-all">
            <div>
              <span className="text-[10.5px] text-slate-500 font-black uppercase tracking-wider block">Testimonials</span>
              <span className="text-2xl font-black text-slate-900 mt-1 block">{testimonials.length}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-yellow-50 text-amber-600 flex items-center justify-center border border-yellow-200/80 group-hover:scale-110 transition-transform">
              <Star className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Workspace Card with Sidebar + Main Content */}
        <div className="bg-white shadow-[0_12px_45px_rgba(15,23,42,0.06)] rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col md:flex-row min-h-[820px]">
          
          {/* ========================================================================= */}
          {/* LEFT 3D NAVIGATION SIDEBAR */}
          {/* ========================================================================= */}
          <div className="w-full md:w-68 bg-gradient-to-b from-[#0e213b] via-[#0b1c33] to-[#071324] text-white p-4 shrink-0 flex flex-col justify-between border-r border-slate-800">
            <div>
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-wider px-3 mb-3 flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#ff8200]" />
                <span>Management Modules</span>
              </div>

              <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-white/10">
                {tabs.map(tab => {
                  const isActive = activeTab === tab.name;
                  return (
                    <button
                      key={tab.name}
                      onClick={() => { setActiveTab(tab.name); resetForm(tab.name); }}
                      className={`text-left px-3.5 py-2.5 rounded-2xl font-bold text-xs transition-all duration-200 flex items-center justify-between cursor-pointer group border ${
                        isActive
                          ? 'bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] text-white shadow-[0_4px_16px_rgba(255,130,0,0.4)] border-amber-300/40 translate-x-1'
                          : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border-white/5 hover:border-white/15'
                      }`}
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <span className={`p-1.5 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-300'}`}>
                          {tab.icon}
                        </span>
                        <span className="truncate">{tab.name}</span>
                        {tab.isNew && (
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-emerald-500 text-white leading-none">
                            NEW
                          </span>
                        )}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                        isActive ? 'bg-black/25 text-white' : 'bg-white/10 text-slate-400'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Help/Support Widget in Sidebar */}
            <div className="mt-4 pt-4 border-t border-white/10 p-3 rounded-2xl bg-white/[0.03]">
              <div className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>API Endpoint:</span>
              </div>
              <code className="text-[10px] text-amber-300 font-mono block mt-1 truncate bg-black/30 px-2 py-1 rounded">
                {API_BASE}
              </code>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT MAIN WORKSPACE CONTENT */}
          {/* ========================================================================= */}
          <div className="flex-1 p-6 lg:p-8 overflow-y-auto max-h-[85vh] space-y-6">
            
            {/* Header with Title, Mode Badge, and Add/Reset Action */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-200/80 pb-4">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                  <span>{activeTab}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Manage, create, update, and paginate database records with real-time sync.</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {editingId ? (
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-amber-300 shadow-sm animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                      <span>Editing Record #{editingId}</span>
                    </span>
                    <button
                      onClick={() => resetForm(activeTab)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Cancel Edit ✕
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      resetForm(activeTab);
                      if (formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-[#ff8200] hover:to-[#ea580c] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create New</span>
                  </button>
                )}
              </div>
            </div>

            {/* Error & Success Feedback Alerts */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-rose-50 border border-rose-200/80 text-rose-900 p-4 rounded-2xl text-xs font-semibold shadow-xs flex justify-between items-center"
                >
                  <div className="flex items-center gap-2.5">
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <div>
                      <strong className="text-rose-950">Error: </strong>
                      <span>{error}</span>
                    </div>
                  </div>
                  <button onClick={() => setError('')} className="text-rose-400 hover:text-rose-800 p-1 cursor-pointer">
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-emerald-50 border border-emerald-200/80 text-emerald-900 p-4 rounded-2xl text-xs font-semibold shadow-xs flex justify-between items-center"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <strong className="text-emerald-950">Success: </strong>
                      <span>{success}</span>
                    </div>
                  </div>
                  <button onClick={() => setSuccess('')} className="text-emerald-400 hover:text-emerald-800 p-1 cursor-pointer">
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ========================================================================= */}
            {/* TAB 1: PROJECT TITLES (CRUD + NEXT/PREV PAGINATION) */}
            {/* ========================================================================= */}
            {activeTab === 'Project Titles' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Form Column */}
                <div
                  ref={formRef}
                  className={`col-span-1 lg:col-span-5 p-6 rounded-3xl border transition-all duration-300 shadow-sm ${
                    editingId
                      ? 'bg-amber-50/40 border-amber-300 shadow-[0_8px_30px_rgba(245,158,11,0.12)] ring-4 ring-amber-500/10'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${editingId ? 'bg-amber-500 animate-pulse' : 'bg-[#ff8200]'}`} />
                      <span>{editingId ? 'Edit Project Title' : 'Create New Project Title'}</span>
                    </h3>
                    {editingId && (
                      <button type="button" onClick={() => resetForm('Project Titles')} className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer">
                        Cancel
                      </button>
                    )}
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const action = editingId ? handlePut : handlePost;
                      action(
                        `${API_BASE}/project_titles.php`,
                        titleData,
                        () => resetForm('Project Titles'),
                        () => {
                          // Local state fallback
                          if (editingId) {
                            setProjectTitles(prev => prev.map(t => t.id === editingId ? { ...t, ...titleData } : t));
                          } else {
                            const newId = Date.now();
                            setProjectTitles(prev => [{ id: newId, ...titleData }, ...prev]);
                          }
                        }
                      );
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Project Title *</label>
                      <input
                        type="text"
                        placeholder="e.g. A System to Filter Unwanted Messages..."
                        value={titleData.title}
                        onChange={e => setTitleData({...titleData, title: e.target.value})}
                        className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold focus:ring-4 focus:ring-orange-500/10 focus:border-[#ff8200] focus:outline-none transition-all shadow-inner"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Academic Year *</label>
                        <select
                          value={titleData.academic_year}
                          onChange={e => setTitleData({...titleData, academic_year: e.target.value})}
                          className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-bold text-slate-800"
                        >
                          <option value="2024 - 2025">2024 - 2025</option>
                          <option value="2023 - 2024">2023 - 2024</option>
                          <option value="2022 - 2023">2022 - 2023</option>
                          <option value="2021 - 2022">2021 - 2022</option>
                          <option value="2020 - 2021">2020 - 2021</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Category *</label>
                        <select
                          value={titleData.category}
                          onChange={e => setTitleData({...titleData, category: e.target.value})}
                          className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-bold text-slate-800"
                        >
                          <option value="General Java">General Java</option>
                          <option value="Cloud Computing">Cloud Computing</option>
                          <option value="Security & Forensics">Security & Forensics</option>
                          <option value="Mobile Computing">Mobile Computing</option>
                          <option value="Multimedia">Multimedia</option>
                          <option value="BCA PROJECTS">BCA PROJECTS</option>
                          <option value="BSC PROJECTS">BSC PROJECTS</option>
                          <option value="IoT Projects">IoT Projects</option>
                          <option value="AI & Deep Learning">AI & Deep Learning</option>
                          <option value="Python Projects">Python Projects</option>
                          <option value="Embedded Systems">Embedded Systems</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Domain / Area *</label>
                        <input
                          type="text"
                          placeholder="e.g. Core Java / OSN, Cloud"
                          value={titleData.domain}
                          onChange={e => setTitleData({...titleData, domain: e.target.value})}
                          className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold focus:border-[#ff8200] focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Difficulty Level</label>
                        <select
                          value={titleData.difficulty}
                          onChange={e => setTitleData({...titleData, difficulty: e.target.value})}
                          className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-bold text-slate-800"
                        >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Tech Stack</label>
                      <input
                        type="text"
                        placeholder="e.g. Java 17, Spring Boot, MySQL, AES-256"
                        value={titleData.tech_stack}
                        onChange={e => setTitleData({...titleData, tech_stack: e.target.value})}
                        className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold focus:border-[#ff8200] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Short Description</label>
                      <textarea
                        placeholder="Brief summary..."
                        value={titleData.description}
                        onChange={e => setTitleData({...titleData, description: e.target.value})}
                        className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-medium focus:border-[#ff8200] focus:outline-none"
                        rows="2"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Abstract (Rich Text)</label>
                      <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                        <CKEditor
                          key={editingId || 'new_title'}
                          editor={ClassicEditor}
                          data={titleData.abstract || ''}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setTitleData(prev => ({...prev, abstract: data}));
                          }}
                        />
                      </div>
                    </div>

                    {/* Dynamic Modules Builder for Project Details Page */}
                    <div className="pt-2 border-t border-slate-200/80 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="block text-[11px] font-black text-slate-800 uppercase tracking-wider">
                            Core Modules (Details Page)
                          </label>
                          <span className="text-[10px] text-slate-400">Architectural modules displayed on public project page</span>
                        </div>
                        <button
                          type="button"
                          onClick={addTitleModule}
                          className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer shadow-xs"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add Module</span>
                        </button>
                      </div>

                      <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                        {(titleData.modules || []).map((mod, mIdx) => (
                          <div key={mIdx} className="p-3 bg-white border border-slate-200 rounded-xl space-y-2 shadow-2xs relative">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] font-black uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                Module #{mIdx + 1}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeTitleModule(mIdx)}
                                className="text-rose-500 hover:text-rose-700 text-[10px] font-bold p-0.5"
                                title="Delete Module"
                              >
                                ✕
                              </button>
                            </div>
                            <input
                              type="text"
                              placeholder="Module Name (e.g. Data Preprocessing & Cleansing)"
                              value={mod.name || ''}
                              onChange={(e) => updateTitleModule(mIdx, 'name', e.target.value)}
                              className="w-full border border-slate-200 p-2 rounded-lg text-xs font-semibold text-slate-800 focus:border-[#ff8200] focus:outline-none"
                            />
                            <textarea
                              placeholder="Module Description & Functionality..."
                              value={mod.desc || ''}
                              onChange={(e) => updateTitleModule(mIdx, 'desc', e.target.value)}
                              className="w-full border border-slate-200 p-2 rounded-lg text-xs text-slate-600 focus:border-[#ff8200] focus:outline-none"
                              rows="2"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables / Features Builder for Project Details Page */}
                    <div className="pt-2 border-t border-slate-200/80 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="block text-[11px] font-black text-slate-800 uppercase tracking-wider">
                            Included Deliverables
                          </label>
                          <span className="text-[10px] text-slate-400">Package deliverables provided with project</span>
                        </div>
                        <button
                          type="button"
                          onClick={addTitleFeature}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer shadow-xs"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add Item</span>
                        </button>
                      </div>

                      <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                        {(titleData.features || []).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <input
                              type="text"
                              value={feat}
                              onChange={(e) => updateTitleFeature(fIdx, e.target.value)}
                              className="flex-1 border border-slate-200 p-2 rounded-lg text-xs font-medium text-slate-700 focus:border-[#ff8200] focus:outline-none bg-white"
                              placeholder="e.g. 100% Complete Source Code & Script"
                            />
                            <button
                              type="button"
                              onClick={() => removeTitleFeature(fIdx)}
                              className="text-rose-500 hover:text-rose-700 text-xs px-1.5 py-1"
                              title="Delete Item"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white p-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
                    >
                      {editingId ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Update Project Title (Save Changes)</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Create Project Title</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Table Column with Search & Next/Prev Controls */}
                <div className="col-span-1 lg:col-span-7 flex flex-col space-y-4">
                  
                  {/* Search & Filter Station */}
                  <div className="flex flex-col sm:flex-row gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 items-center justify-between shadow-2xs">
                    <div className="relative w-full sm:w-60">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search title, domain or stack..."
                        value={searchQueries['Project Titles'] || ''}
                        onChange={e => updateSearchQuery('Project Titles', e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-slate-200/90 rounded-xl bg-white text-xs font-medium focus:ring-2 focus:ring-orange-500/10 focus:border-[#ff8200] focus:outline-none"
                      />
                    </div>

                    <div className="flex gap-2 w-full sm:w-auto">
                      <select
                        value={titleYearFilter}
                        onChange={e => { setTitleYearFilter(e.target.value); setPage('Project Titles', 1); }}
                        className="border border-slate-200 p-2 rounded-xl bg-white text-xs font-bold text-slate-700"
                      >
                        <option value="All">All Years</option>
                        <option value="2024 - 2025">2024 - 2025</option>
                        <option value="2023 - 2024">2023 - 2024</option>
                        <option value="2022 - 2023">2022 - 2023</option>
                        <option value="2021 - 2022">2021 - 2022</option>
                        <option value="2020 - 2021">2020 - 2021</option>
                      </select>

                      <select
                        value={titleCatFilter}
                        onChange={e => { setTitleCatFilter(e.target.value); setPage('Project Titles', 1); }}
                        className="border border-slate-200 p-2 rounded-xl bg-white text-xs font-bold text-slate-700"
                      >
                        <option value="All">All Categories</option>
                        <option value="General Java">General Java</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="Security & Forensics">Security & Forensics</option>
                        <option value="Mobile Computing">Mobile Computing</option>
                        <option value="Multimedia">Multimedia</option>
                        <option value="BCA PROJECTS">BCA PROJECTS</option>
                        <option value="BSC PROJECTS">BSC PROJECTS</option>
                        <option value="IoT Projects">IoT Projects</option>
                        <option value="AI & Deep Learning">AI & Deep Learning</option>
                      </select>
                    </div>
                  </div>

                  {/* 3D Table Container */}
                  <div className="overflow-x-auto border border-slate-200/90 bg-white rounded-2xl shadow-sm">
                    <table className="min-w-full text-xs">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 text-left">Title & Domain</th>
                          <th className="p-3.5 text-left">Year</th>
                          <th className="p-3.5 text-left">Category</th>
                          <th className="p-3.5 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {paginatedTitles.map(item => (
                          <tr
                            key={item.id}
                            className={`hover:bg-orange-50/40 transition-colors ${
                              editingId === item.id ? 'bg-amber-50 border-l-4 border-amber-500' : ''
                            }`}
                          >
                            <td className="p-3.5">
                              <div className="font-bold text-slate-900 leading-snug">{item.title}</div>
                              <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-2">
                                <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-semibold">{item.domain}</span>
                                {item.tech_stack && <span className="text-slate-400 truncate max-w-xs">{item.tech_stack}</span>}
                              </div>
                            </td>
                            <td className="p-3.5 whitespace-nowrap font-bold text-slate-700">{item.academic_year}</td>
                            <td className="p-3.5 whitespace-nowrap">
                              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200/80 text-[10.5px]">
                                {item.category}
                              </span>
                            </td>
                            <td className="p-3.5 text-center whitespace-nowrap">
                              <div className="flex items-center justify-center gap-1.5">
                                <Link
                                  to={`/project/${item.id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 shadow-2xs hover:scale-105 active:scale-95 !no-underline"
                                  title="View Public Project Details Page"
                                >
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                  <span>View Live</span>
                                </Link>
                                <button
                                  onClick={() => startEditTitle(item)}
                                  className="text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 shadow-2xs hover:scale-105 active:scale-95"
                                  title="Edit Record"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                  <span>Edit</span>
                                </button>
                                <button
                                  onClick={() => handleDelete(
                                    `${API_BASE}/project_titles.php`,
                                    { id: item.id },
                                    () => setProjectTitles(prev => prev.filter(t => t.id !== item.id))
                                  )}
                                  className="text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 shadow-2xs hover:scale-105 active:scale-95"
                                  title="Delete Record"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                  <span>Delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {paginatedTitles.length === 0 && (
                          <tr>
                            <td colSpan="4" className="p-10 text-center text-slate-500 font-medium">
                              No project titles found matching your search and filter criteria.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>

                    {/* Pagination Bar */}
                    <PaginationControls
                      currentPage={getPage('Project Titles')}
                      totalItems={filteredProjectTitles.length}
                      perPage={getPerPage('Project Titles')}
                      onPageChange={(p) => setPage('Project Titles', p)}
                      onPerPageChange={(pp) => setPerPage('Project Titles', pp)}
                    />
                  </div>

                </div>

              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 2: TECHNICAL BLOGS (FULL CRUD + SECTION TITLE & DATA UI BUILDER + NEXT/PREV) */}
            {/* ========================================================================= */}
            {activeTab === 'Technical Blogs' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Form Column (6 Cols) */}
                <div
                  ref={formRef}
                  className={`col-span-1 lg:col-span-6 p-6 sm:p-7 rounded-3xl border transition-all duration-300 shadow-sm ${
                    editingId
                      ? 'bg-amber-50/40 border-amber-300 shadow-[0_8px_30px_rgba(245,158,11,0.12)] ring-4 ring-amber-500/10'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex flex-wrap justify-between items-center gap-3 mb-5 pb-4 border-b border-slate-200/80">
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${editingId ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                        <span>{editingId ? 'Edit Blog Publication & Details' : 'Create Technical Blog Publication'}</span>
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        Configure metadata, overview abstract, and interactive section data points.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {editingId && (
                        <>
                          <Link
                            to={`/blog/${blogData.slug || ''}`}
                            target="_blank"
                            className="text-xs bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 !no-underline shadow-2xs"
                          >
                            <Eye className="w-3.5 h-3.5 text-emerald-700" />
                            <span>View Live ↗</span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => resetForm('Technical Blogs')}
                            className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1.5 rounded-xl font-bold transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <form onSubmit={handleBlogSubmit} className="space-y-6">
                    {/* SECTION 1: CORE ARTICLE DETAILS */}
                    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                      <div className="flex items-center gap-2 text-xs font-black text-slate-700 uppercase tracking-wider">
                        <FileText className="w-4 h-4 text-emerald-600" />
                        <span>1. Publication Details</span>
                      </div>

                      <div>
                        <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">
                          Article Title *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. MQTT / HTTP Protocols: Enabling Communication In IoT"
                          value={blogData.title}
                          onChange={e => setBlogData({...blogData, title: e.target.value})}
                          className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:outline-none"
                          required
                        />
                        <div className="mt-1.5 flex items-center gap-2 text-[10.5px] text-slate-400 font-mono">
                          <span>URL Slug:</span>
                          <span className="text-emerald-700 font-bold">
                            /blog/{blogData.slug || (blogData.title ? blogData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : 'sample-slug')}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Category *</label>
                          <select
                            value={blogData.category}
                            onChange={e => setBlogData({...blogData, category: e.target.value})}
                            className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-bold text-slate-800 focus:border-emerald-500 focus:outline-none"
                          >
                            <option value="IoT & Protocols">IoT & Protocols</option>
                            <option value="Hardware & Robotics">Hardware & Robotics</option>
                            <option value="Electronics & VLSI">Electronics & VLSI</option>
                            <option value="Hardware & FPGA">Hardware & FPGA</option>
                            <option value="AI & Data Science">AI & Data Science</option>
                            <option value="Cloud & Security">Cloud & Security</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Read Time</label>
                          <input
                            type="text"
                            placeholder="e.g. 6 min read"
                            value={blogData.read_time}
                            onChange={e => setBlogData({...blogData, read_time: e.target.value})}
                            className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Author Name</label>
                          <input
                            type="text"
                            placeholder="e.g. ieeeprojectcentre"
                            value={blogData.author}
                            onChange={e => setBlogData({...blogData, author: e.target.value})}
                            className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Tags (comma-separated)</label>
                          <input
                            type="text"
                            placeholder="IoT, MQTT, HTTP, Embedded"
                            value={blogData.tags}
                            onChange={e => setBlogData({...blogData, tags: e.target.value})}
                            className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold focus:border-emerald-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2: ABSTRACT & INTRODUCTION */}
                    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                      <div className="flex items-center gap-2 text-xs font-black text-slate-700 uppercase tracking-wider">
                        <AlignLeft className="w-4 h-4 text-emerald-600" />
                        <span>2. Overview & Details Introduction</span>
                      </div>

                      <div>
                        <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">
                          Excerpt (Card Summary) *
                        </label>
                        <textarea
                          placeholder="Brief 1-2 sentence executive abstract displayed on the blog catalog card..."
                          value={blogData.excerpt}
                          onChange={e => setBlogData({...blogData, excerpt: e.target.value})}
                          className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-medium focus:border-emerald-500 focus:outline-none"
                          rows="2"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">
                          Article Introduction (Foundational Overview on Details Page) *
                        </label>
                        <textarea
                          placeholder="Detailed introductory narrative rendered under '1. Foundational Overview' on the blog details page..."
                          value={blogData.introduction}
                          onChange={e => setBlogData({...blogData, introduction: e.target.value})}
                          className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-medium focus:border-emerald-500 focus:outline-none"
                          rows="3"
                          required
                        />
                      </div>
                    </div>

                    {/* SECTION 3: DYNAMIC SECTION TITLE AND DATA UI BUILDER */}
                    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-emerald-600" />
                          <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
                            3. Section Title & Data Points Builder
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10.5px] font-black border border-emerald-200">
                            {blogData.sections.length} Sections
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={addBlogSection}
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white font-black text-xs transition-all shadow-xs cursor-pointer flex items-center gap-1.5 active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add New Section</span>
                        </button>
                      </div>

                      <div className="space-y-4">
                        {blogData.sections.map((section, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-white border-2 border-slate-200 hover:border-emerald-300 transition-colors shadow-2xs space-y-3"
                          >
                            {/* Section Header Row */}
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2 flex-1">
                                <span className="w-7 h-7 rounded-xl bg-[#001733] text-white flex items-center justify-center text-xs font-black shrink-0 shadow-2xs">
                                  {`0${sIdx + 2}`}
                                </span>
                                <div className="flex-1">
                                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-0.5">
                                    Section Title / Heading *
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="e.g. What are MQTT and HTTP Protocols?"
                                    value={section.heading}
                                    onChange={e => updateBlogSectionHeading(sIdx, e.target.value)}
                                    className="w-full border border-slate-300 focus:border-emerald-500 p-2 rounded-xl bg-white text-xs font-bold text-slate-800 focus:outline-none"
                                    required
                                  />
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => removeBlogSection(sIdx)}
                                className="text-rose-500 hover:text-rose-700 p-1.5 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer shrink-0 mt-3"
                                title="Remove this entire section"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Data Points List (Data UI) */}
                            <div className="mt-3 pl-2 sm:pl-4 border-l-2 border-emerald-200 space-y-3">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[11px] font-extrabold text-slate-600 flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                  <span>Data Points & Feature Cards ({section.points ? section.points.length : 0})</span>
                                </span>

                                <button
                                  type="button"
                                  onClick={() => addBlogPoint(sIdx)}
                                  className="text-[11px] bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                                >
                                  <Plus className="w-3 h-3" />
                                  <span>Add Data Point</span>
                                </button>
                              </div>

                              {/* Render Data Points */}
                              <div className="space-y-2.5">
                                {(section.points || []).map((pt, pIdx) => (
                                  <div
                                    key={pIdx}
                                    className="p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs space-y-2 relative"
                                  >
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="text-[10px] font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                        Data Point #{pIdx + 1}
                                      </span>

                                      <button
                                        type="button"
                                        onClick={() => removeBlogPoint(sIdx, pIdx)}
                                        className="text-[11px] text-slate-400 hover:text-rose-600 transition-colors cursor-pointer flex items-center gap-1"
                                        title="Delete this point"
                                      >
                                        <X className="w-3.5 h-3.5" />
                                        <span>Remove</span>
                                      </button>
                                    </div>

                                    <div>
                                      <input
                                        type="text"
                                        placeholder="Point Title / Subheading (e.g. MQTT Publish/Subscribe)"
                                        value={pt.title}
                                        onChange={e => updateBlogPoint(sIdx, pIdx, 'title', e.target.value)}
                                        className="w-full border border-slate-200 focus:border-emerald-500 p-1.5 rounded-lg text-xs font-bold text-slate-800 focus:outline-none"
                                        required
                                      />
                                    </div>

                                    <div>
                                      <textarea
                                        placeholder="Point Data / Technical Description (e.g. Operates over TCP/IP and relies on a broker...)"
                                        value={pt.desc}
                                        onChange={e => updateBlogPoint(sIdx, pIdx, 'desc', e.target.value)}
                                        className="w-full border border-slate-200 focus:border-emerald-500 p-1.5 rounded-lg text-xs font-normal text-slate-700 focus:outline-none"
                                        rows="2"
                                        required
                                      />
                                    </div>
                                  </div>
                                ))}

                                {(!section.points || section.points.length === 0) && (
                                  <div className="p-3 text-center border border-dashed border-slate-300 rounded-xl">
                                    <button
                                      type="button"
                                      onClick={() => addBlogPoint(sIdx)}
                                      className="text-xs text-emerald-600 font-bold hover:underline"
                                    >
                                      + Add First Data Point to this Section
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:brightness-110 text-white p-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
                    >
                      {editingId ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Update Blog Article & Live Details</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Publish Technical Blog Publication</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Table Column (6 Cols) */}
                <div className="col-span-1 lg:col-span-6 flex flex-col space-y-4">
                  
                  {/* Search & Filter Bar */}
                  <div className="flex flex-col sm:flex-row gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 items-center justify-between shadow-2xs">
                    <div className="relative w-full sm:w-64">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search publications..."
                        value={searchQueries['Technical Blogs'] || ''}
                        onChange={e => updateSearchQuery('Technical Blogs', e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-slate-200/90 rounded-xl bg-white text-xs font-medium focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <select
                        value={blogCatFilter}
                        onChange={e => { setBlogCatFilter(e.target.value); setPage('Technical Blogs', 1); }}
                        className="border border-slate-200 p-2 rounded-xl bg-white text-xs font-bold text-slate-700 w-full sm:w-auto"
                      >
                        <option value="All">All Categories</option>
                        <option value="IoT & Protocols">IoT & Protocols</option>
                        <option value="Hardware & Robotics">Hardware & Robotics</option>
                        <option value="Electronics & VLSI">Electronics & VLSI</option>
                        <option value="Hardware & FPGA">Hardware & FPGA</option>
                        <option value="AI & Data Science">AI & Data Science</option>
                        <option value="Cloud & Security">Cloud & Security</option>
                      </select>

                      <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-xl shrink-0">
                        {filteredBlogs.length} Total
                      </span>
                    </div>
                  </div>

                  {/* 3D Modern Table */}
                  <div className="overflow-x-auto border border-slate-200/90 bg-white rounded-2xl shadow-sm">
                    <table className="min-w-full text-xs">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 text-left">Publication & Overview</th>
                          <th className="p-3.5 text-left">Category & Sections</th>
                          <th className="p-3.5 text-left">Date</th>
                          <th className="p-3.5 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {paginatedBlogs.map(b => {
                          const sectionsCount = (b.sections || []).length;
                          const pointsCount = (b.sections || []).reduce(
                            (acc, s) => acc + ((s.points && s.points.length) || 0),
                            0
                          );

                          return (
                            <tr
                              key={b.id}
                              className={`hover:bg-emerald-50/30 transition-colors ${
                                editingId === b.id ? 'bg-amber-50 border-l-4 border-amber-500' : ''
                              }`}
                            >
                              <td className="p-3.5">
                                <div className="font-bold text-slate-900 leading-snug">{b.title}</div>
                                <div className="text-[11px] text-slate-500 line-clamp-1 mt-1">{b.excerpt}</div>
                                <div className="text-[10px] text-emerald-700 font-mono mt-1 font-semibold">
                                  slug: {b.slug}
                                </div>
                              </td>
                              <td className="p-3.5 whitespace-nowrap">
                                <div className="space-y-1">
                                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 text-[10.5px] inline-block">
                                    {b.category}
                                  </span>
                                  <div className="text-[10px] font-extrabold text-slate-500 flex items-center gap-1">
                                    <Layers className="w-3 h-3 text-slate-400" />
                                    <span>{sectionsCount} Sec • {pointsCount} Pts</span>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3.5 whitespace-nowrap text-slate-500 font-medium">{b.date}</td>
                              <td className="p-3.5 text-center whitespace-nowrap">
                                <div className="flex items-center justify-center gap-1.5">
                                  <Link
                                    to={`/blog/${b.slug}`}
                                    target="_blank"
                                    className="text-slate-600 bg-slate-100 hover:bg-slate-200 p-1.5 rounded-lg transition-all !no-underline flex items-center gap-1 text-[11px] font-bold"
                                    title="View Public Details Page"
                                  >
                                    <Eye className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">Live ↗</span>
                                  </Link>
                                  <button
                                    onClick={() => startEditBlog(b)}
                                    className="text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 text-[11px]"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                    <span>Edit</span>
                                  </button>
                                  <button
                                    onClick={() => handleBlogDelete(b)}
                                    className="text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 text-[11px]"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    <span>Delete</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                        {paginatedBlogs.length === 0 && (
                          <tr>
                            <td colSpan="4" className="p-10 text-center text-slate-500 font-medium">
                              No blog publications found matching your filter criteria.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>

                    {/* Pagination Bar */}
                    <PaginationControls
                      currentPage={getPage('Technical Blogs')}
                      totalItems={filteredBlogs.length}
                      perPage={getPerPage('Technical Blogs')}
                      onPageChange={(p) => setPage('Technical Blogs', p)}
                      onPerPageChange={(pp) => setPerPage('Technical Blogs', pp)}
                    />
                  </div>

                </div>

              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 3: PROJECTS SLIDER (CRUD + NEXT/PREV PAGINATION) */}
            {/* ========================================================================= */}
            {activeTab === 'Projects Slider' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div
                  ref={formRef}
                  className={`col-span-1 lg:col-span-5 p-6 rounded-3xl border transition-all duration-300 shadow-sm ${
                    editingId
                      ? 'bg-amber-50/40 border-amber-300 ring-4 ring-amber-500/10'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${editingId ? 'bg-amber-500 animate-pulse' : 'bg-blue-500'}`} />
                      <span>{editingId ? 'Edit Slider Project' : 'Add Slider Project'}</span>
                    </h3>
                    {editingId && (
                      <button type="button" onClick={() => resetForm('Projects Slider')} className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer">
                        Cancel
                      </button>
                    )}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const action = editingId ? handlePut : handlePost;
                      action(
                        `${API_BASE}/projects.php`,
                        projData,
                        () => resetForm('Projects Slider'),
                        () => {
                          if (editingId) {
                            setProjects(prev => prev.map(p => p.id === editingId ? { ...p, ...projData } : p));
                          } else {
                            setProjects(prev => [{ id: Date.now(), ...projData }, ...prev]);
                          }
                        }
                      );
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Project Title *</label>
                      <input type="text" placeholder="e.g. ECE PROJECTS" value={projData.title} onChange={e => setProjData({...projData, title: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold focus:border-blue-500 focus:outline-none" required />
                    </div>
                    
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Rich Text Description *</label>
                      <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                        <CKEditor
                          key={editingId || 'new_project'}
                          editor={ClassicEditor}
                          data={projData.description || ''}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setProjData(prev => ({...prev, description: data}));
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Link URL</label>
                      <input type="text" placeholder="https://..." value={projData.link || ''} onChange={e => setProjData({...projData, link: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" />
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Icon / Badge Identifier</label>
                      <input type="text" placeholder="MemoryIcon, CodeIcon, CloudIcon..." value={projData.icon_name || ''} onChange={e => setProjData({...projData, icon_name: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" />
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white p-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2">
                      {editingId ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Update Slider Project</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Save Slider Project</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div className="col-span-1 lg:col-span-7 flex flex-col space-y-4">
                  <div className="overflow-x-auto border border-slate-200/90 bg-white rounded-2xl shadow-sm">
                    <table className="min-w-full text-xs">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 text-left">Title</th>
                          <th className="p-3.5 text-left">Icon Identifier</th>
                          <th className="p-3.5 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {paginatedProjects.map(p => (
                          <tr key={p.id} className={`hover:bg-blue-50/30 transition-colors ${editingId === p.id ? 'bg-amber-50' : ''}`}>
                            <td className="p-3.5 font-bold text-slate-900">{p.title}</td>
                            <td className="p-3.5 text-slate-500 font-mono text-[11px]">{p.icon_name || 'N/A'}</td>
                            <td className="p-3.5 text-center whitespace-nowrap">
                              <button onClick={() => startEdit(p.id, setProjData, p)} className="text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg font-bold mr-2 transition-all cursor-pointer">
                                Edit
                              </button>
                              <button onClick={() => handleDelete(`${API_BASE}/projects.php`, {id: p.id}, () => setProjects(prev => prev.filter(item => item.id !== p.id)))} className="text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                        {paginatedProjects.length === 0 && (
                          <tr><td colSpan="3" className="p-8 text-center text-slate-500 font-medium">No projects found.</td></tr>
                        )}
                      </tbody>
                    </table>

                    <PaginationControls
                      currentPage={getPage('Projects Slider')}
                      totalItems={filteredProjects.length}
                      perPage={getPerPage('Projects Slider')}
                      onPageChange={(p) => setPage('Projects Slider', p)}
                      onPerPageChange={(pp) => setPerPage('Projects Slider', pp)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 4: ENQUIRIES / LEADS (CRUD + NEXT/PREV PAGINATION) */}
            {/* ========================================================================= */}
            {activeTab === 'Enquiries / Leads' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 items-center justify-between">
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search student name, email, mobile..."
                      value={searchQueries['Enquiries / Leads'] || ''}
                      onChange={e => updateSearchQuery('Enquiries / Leads', e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl bg-white text-xs font-medium"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">Status:</span>
                    <select
                      value={enquiryStatusFilter}
                      onChange={e => { setEnquiryStatusFilter(e.target.value); setPage('Enquiries / Leads', 1); }}
                      className="border border-slate-200 p-2 rounded-xl bg-white text-xs font-bold text-slate-700"
                    >
                      <option value="All">All Statuses</option>
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Converted">Converted</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto border border-slate-200/90 bg-white rounded-2xl shadow-sm">
                  <table className="min-w-full text-xs">
                    <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="p-3.5 text-left">Student Info</th>
                        <th className="p-3.5 text-left">Contact</th>
                        <th className="p-3.5 text-left">Requirement</th>
                        <th className="p-3.5 text-left">Status</th>
                        <th className="p-3.5 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {paginatedEnquiries.map(item => (
                        <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">{item.name}</td>
                          <td className="p-3.5 font-mono text-[11px] text-slate-600">
                            <div>{item.mobile}</div>
                            <div className="text-slate-400">{item.email}</div>
                          </td>
                          <td className="p-3.5 text-slate-700 max-w-xs truncate">{item.project_requirements || item.message || 'General IEEE'}</td>
                          <td className="p-3.5">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                              item.status === 'Converted' ? 'bg-emerald-100 text-emerald-800' :
                              item.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                              'bg-amber-100 text-amber-800'
                            }`}>
                              {item.status || 'New'}
                            </span>
                          </td>
                          <td className="p-3.5 text-center whitespace-nowrap">
                            <button
                              onClick={() => handleDelete(
                                `${API_BASE}/enquiries.php`,
                                { id: item.id },
                                () => setEnquiries(prev => prev.filter(e => e.id !== item.id))
                              )}
                              className="text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                      {paginatedEnquiries.length === 0 && (
                        <tr><td colSpan="5" className="p-8 text-center text-slate-500 font-medium">No enquiries recorded yet.</td></tr>
                      )}
                    </tbody>
                  </table>

                  <PaginationControls
                    currentPage={getPage('Enquiries / Leads')}
                    totalItems={filteredEnquiries.length}
                    perPage={getPerPage('Enquiries / Leads')}
                    onPageChange={(p) => setPage('Enquiries / Leads', p)}
                    onPerPageChange={(pp) => setPerPage('Enquiries / Leads', pp)}
                  />
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 5: PAGE CONTENT (CRUD + NEXT/PREV PAGINATION) */}
            {/* ========================================================================= */}
            {activeTab === 'Page Content' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div
                  ref={formRef}
                  className={`col-span-1 lg:col-span-5 p-6 rounded-3xl border transition-all duration-300 shadow-sm ${
                    editingId ? 'bg-amber-50/40 border-amber-300 ring-4 ring-amber-500/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${editingId ? 'bg-amber-500 animate-pulse' : 'bg-purple-500'}`} />
                      <span>{editingId ? 'Edit Page Section' : 'Create Page Section'}</span>
                    </h3>
                    {editingId && (
                      <button type="button" onClick={() => resetForm('Page Content')} className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer">
                        Cancel
                      </button>
                    )}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const action = editingId ? handlePut : handlePost;
                      action(
                        `${API_BASE}/page_sections.php`,
                        sectionData,
                        () => resetForm('Page Content'),
                        () => {
                          if (editingId) {
                            setPageSections(prev => prev.map(s => s.id === editingId ? { ...s, ...sectionData } : s));
                          } else {
                            setPageSections(prev => [{ id: Date.now(), ...sectionData }, ...prev]);
                          }
                        }
                      );
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Page Identifier (Slug) *</label>
                      <select value={sectionData.page_slug} onChange={e => setSectionData({...sectionData, page_slug: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-bold text-slate-800">
                        <option value="java-projects">Java Projects (2024-2025)</option>
                        <option value="java-2022">Java Projects (2022-2023)</option>
                        <option value="home">Homepage</option>
                        <option value="contact">Contact Page</option>
                        <option value="blogs">Blogs Page</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Section Key *</label>
                      <input type="text" placeholder="e.g. about_java, tools_servers" value={sectionData.section_key} onChange={e => setSectionData({...sectionData, section_key: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" required />
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Section Title *</label>
                      <input type="text" placeholder="e.g. About Java Projects" value={sectionData.title} onChange={e => setSectionData({...sectionData, title: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" required />
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Rich Text Content *</label>
                      <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                        <CKEditor
                          key={editingId || 'new_section'}
                          editor={ClassicEditor}
                          data={sectionData.content || ''}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setSectionData(prev => ({...prev, content: data}));
                          }}
                        />
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white p-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2">
                      {editingId ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Update Page Section</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Save Page Section</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div className="col-span-1 lg:col-span-7 flex flex-col space-y-4">
                  <div className="overflow-x-auto border border-slate-200/90 bg-white rounded-2xl shadow-sm">
                    <table className="min-w-full text-xs">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 text-left">Page Slug</th>
                          <th className="p-3.5 text-left">Section Title</th>
                          <th className="p-3.5 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {paginatedSections.map(s => (
                          <tr key={s.id} className={`hover:bg-slate-50 transition-colors ${editingId === s.id ? 'bg-amber-50' : ''}`}>
                            <td className="p-3.5 font-mono text-[11px] font-bold text-blue-700">{s.page_slug}</td>
                            <td className="p-3.5 font-bold text-slate-900">{s.title}</td>
                            <td className="p-3.5 text-center whitespace-nowrap">
                              <button onClick={() => startEdit(s.id, setSectionData, s)} className="text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg font-bold mr-2 transition-all cursor-pointer">
                                Edit
                              </button>
                              <button onClick={() => handleDelete(`${API_BASE}/page_sections.php`, {id: s.id}, () => setPageSections(prev => prev.filter(item => item.id !== s.id)))} className="text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                        {paginatedSections.length === 0 && (
                          <tr><td colSpan="3" className="p-8 text-center text-slate-500 font-medium">No page sections found.</td></tr>
                        )}
                      </tbody>
                    </table>

                    <PaginationControls
                      currentPage={getPage('Page Content')}
                      totalItems={filteredSections.length}
                      perPage={getPerPage('Page Content')}
                      onPageChange={(p) => setPage('Page Content', p)}
                      onPerPageChange={(pp) => setPerPage('Page Content', pp)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 6: NAVBAR MENU */}
            {/* ========================================================================= */}
            {activeTab === 'Navbar Menu' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="col-span-1 lg:col-span-5 bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <h3 className="font-extrabold text-base text-slate-900 mb-4">Add Menu Item / Category</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handlePost(`${API_BASE}/navbar.php`, navData, () => resetForm('Navbar Menu'), () => {
                        setNavCats(prev => [{ name: navData.name }, ...prev]);
                      });
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Item Name *</label>
                      <input type="text" placeholder="e.g. Artificial Intelligence" value={navData.name} onChange={e => setNavData({...navData, name: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" required />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Parent Menu *</label>
                      <select value={navData.parent_menu} onChange={e => setNavData({...navData, parent_menu: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-bold text-slate-800">
                        <option value="IEEE Projects">IEEE Projects</option>
                        <option value="Application Projects">Application Projects</option>
                        <option value="Diploma Projects">Diploma Projects</option>
                        <option value="Domain">Domain</option>
                        <option value="Python Project">Python Project</option>
                      </select>
                    </div>
                    <button className="w-full bg-[#ff8200] hover:bg-[#e67500] text-white p-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" />
                      <span>Add Menu Item</span>
                    </button>
                  </form>
                </div>

                <div className="col-span-1 lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
                  <h4 className="font-bold text-sm text-slate-800">Existing Navbar Categories ({navCats.length})</h4>
                  <div className="flex flex-wrap gap-2 max-h-96 overflow-y-auto p-2">
                    {navCats.map((cat, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 flex items-center gap-1.5">
                        <span>{typeof cat === 'string' ? cat : cat.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 7: HERO BANNER */}
            {/* ========================================================================= */}
            {activeTab === 'Hero Banner' && (
              <div className="max-w-2xl bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-extrabold text-base text-slate-900">Hero Section Configuration</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handlePost(`${API_BASE}/hero.php`, heroData, () => showSuccess('Hero configuration saved.'));
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Main Headline *</label>
                    <input type="text" placeholder="e.g. IEEE FINAL YEAR PROJECTS IN CHENNAI" value={heroData.title} onChange={e => setHeroForm({...heroData, title: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" required />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Subtitle Description</label>
                    <textarea placeholder="Supporting text..." value={heroData.subtitle} onChange={e => setHeroForm({...heroData, subtitle: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-medium" rows="3" />
                  </div>
                  <button className="w-full bg-[#ff8200] hover:bg-[#e67500] text-white p-3.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-md cursor-pointer">
                    Save Hero Content
                  </button>
                </form>
              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 8: FEATURED VIDEOS */}
            {/* ========================================================================= */}
            {/* ========================================================================= */}
            {/* TAB 8: FEATURED VIDEOS (CRUD + NEXT/PREV PAGINATION) */}
            {/* ========================================================================= */}
            {activeTab === 'Featured Videos' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div
                  ref={formRef}
                  className={`col-span-1 lg:col-span-5 p-6 rounded-3xl border transition-all duration-300 shadow-sm ${
                    editingId ? 'bg-amber-50/40 border-amber-300 ring-4 ring-amber-500/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${editingId ? 'bg-amber-500 animate-pulse' : 'bg-red-500'}`} />
                      <span>{editingId ? 'Edit Featured Video' : 'Add Project Video'}</span>
                    </h3>
                    {editingId && (
                      <button type="button" onClick={() => resetForm('Featured Videos')} className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer">
                        Cancel
                      </button>
                    )}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const action = editingId ? handlePut : handlePost;
                      action(
                        `${API_BASE}/videos.php`,
                        videoData,
                        () => resetForm('Featured Videos'),
                        () => {
                          if (editingId) setVideos(prev => prev.map(v => v.id === editingId ? { ...v, ...videoData } : v));
                          else setVideos(prev => [{ id: Date.now(), ...videoData }, ...prev]);
                        }
                      );
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Video Title *</label>
                      <input type="text" placeholder="e.g. Java Cloud Storage Demo" value={videoData.title} onChange={e => setVideoData({...videoData, title: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" required />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">YouTube ID / Embed URL *</label>
                      <input type="text" placeholder="e.g. dQw4w9WgXcQ" value={videoData.youtube_id} onChange={e => setVideoData({...videoData, youtube_id: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" required />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Duration</label>
                        <input type="text" placeholder="e.g. 14:20" value={videoData.duration || ''} onChange={e => setVideoData({...videoData, duration: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Tags / Dept</label>
                        <input type="text" placeholder="e.g. Java, Cloud" value={videoData.tags || ''} onChange={e => setVideoData({...videoData, tags: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" />
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:brightness-110 text-white p-3.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all flex items-center justify-center gap-2">
                      {editingId ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Update Video Record</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Save Project Video</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div className="col-span-1 lg:col-span-7 flex flex-col space-y-4">
                  {/* Search bar */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search videos by title, YouTube ID or tags..."
                      value={searchQueries['Featured Videos'] || ''}
                      onChange={e => updateSearchQuery('Featured Videos', e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 shadow-xs"
                    />
                  </div>

                  <div className="border border-slate-200 bg-white rounded-2xl overflow-x-auto shadow-sm">
                    <table className="min-w-full text-xs">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 text-left">Video Title</th>
                          <th className="p-3.5 text-left">YouTube ID</th>
                          <th className="p-3.5 text-left">Tags</th>
                          <th className="p-3.5 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {paginatedVideos.map(v => (
                          <tr key={v.id} className={`hover:bg-slate-50 transition-colors ${editingId === v.id ? 'bg-amber-50' : ''}`}>
                            <td className="p-3.5 font-bold text-slate-900">{v.title}</td>
                            <td className="p-3.5 font-mono text-[11px] text-slate-600">{v.youtube_id}</td>
                            <td className="p-3.5 text-slate-500 font-medium">{v.tags || '-'}</td>
                            <td className="p-3.5 text-center whitespace-nowrap">
                              <button onClick={() => startEdit(v.id, setVideoData, v)} className="text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg font-bold mr-2 transition-all cursor-pointer">
                                Edit
                              </button>
                              <button onClick={() => handleDelete(`${API_BASE}/videos.php`, {id: v.id}, () => setVideos(prev => prev.filter(item => item.id !== v.id)))} className="text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                        {paginatedVideos.length === 0 && (
                          <tr><td colSpan="4" className="p-8 text-center text-slate-500 font-medium">No video records found.</td></tr>
                        )}
                      </tbody>
                    </table>

                    <PaginationControls
                      currentPage={getPage('Featured Videos')}
                      totalItems={filteredVideos.length}
                      perPage={getPerPage('Featured Videos')}
                      onPageChange={(p) => setPage('Featured Videos', p)}
                      onPerPageChange={(pp) => setPerPage('Featured Videos', pp)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 9: TECHNOLOGIES (CRUD + NEXT/PREV PAGINATION) */}
            {/* ========================================================================= */}
            {activeTab === 'Technologies' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div
                  ref={formRef}
                  className={`col-span-1 lg:col-span-5 p-6 rounded-3xl border transition-all duration-300 shadow-sm ${
                    editingId ? 'bg-amber-50/40 border-amber-300 ring-4 ring-amber-500/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${editingId ? 'bg-amber-500 animate-pulse' : 'bg-teal-500'}`} />
                      <span>{editingId ? 'Edit Technology' : 'Add Technology Stack'}</span>
                    </h3>
                    {editingId && (
                      <button type="button" onClick={() => resetForm('Technologies')} className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer">
                        Cancel
                      </button>
                    )}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const action = editingId ? handlePut : handlePost;
                      action(
                        `${API_BASE}/technologies.php`,
                        techData,
                        () => resetForm('Technologies'),
                        () => {
                          if (editingId) setTechs(prev => prev.map(t => t.id === editingId ? { ...t, ...techData } : t));
                          else setTechs(prev => [{ id: Date.now(), ...techData }, ...prev]);
                        }
                      );
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Technology Title *</label>
                      <input type="text" placeholder="e.g. Python & Data Science" value={techData.title} onChange={e => setTechData({...techData, title: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" required />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Courses / Projects Badge</label>
                      <input type="text" placeholder="e.g. 150+ Projects" value={techData.courses_count} onChange={e => setTechData({...techData, courses_count: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Icon Identifier</label>
                      <select value={techData.icon_name || 'Code'} onChange={e => setTechData({...techData, icon_name: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-bold text-slate-800">
                        <option value="Code">Code / Python</option>
                        <option value="Cpu">Cpu / Hardware</option>
                        <option value="Wifi">Wifi / IoT</option>
                        <option value="Brain">Brain / AI</option>
                        <option value="Shield">Shield / Security</option>
                        <option value="Activity">Activity / Signal</option>
                      </select>
                    </div>
                    <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:brightness-110 text-white p-3.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all flex items-center justify-center gap-2">
                      {editingId ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Update Technology</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Save Technology</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div className="col-span-1 lg:col-span-7 flex flex-col space-y-4">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search technologies..."
                      value={searchQueries['Technologies'] || ''}
                      onChange={e => updateSearchQuery('Technologies', e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 shadow-xs"
                    />
                  </div>

                  <div className="border border-slate-200 bg-white rounded-2xl overflow-x-auto shadow-sm">
                    <table className="min-w-full text-xs">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 text-left">Tech Stack</th>
                          <th className="p-3.5 text-left">Count / Badge</th>
                          <th className="p-3.5 text-left">Icon</th>
                          <th className="p-3.5 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {paginatedTechs.map(t => (
                          <tr key={t.id} className={`hover:bg-slate-50 transition-colors ${editingId === t.id ? 'bg-amber-50' : ''}`}>
                            <td className="p-3.5 font-bold text-slate-900">{t.title}</td>
                            <td className="p-3.5 font-bold text-teal-700">{t.courses_count || '-'}</td>
                            <td className="p-3.5 font-mono text-[11px] text-slate-500">{t.icon_name || 'Code'}</td>
                            <td className="p-3.5 text-center whitespace-nowrap">
                              <button onClick={() => startEdit(t.id, setTechData, t)} className="text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg font-bold mr-2 transition-all cursor-pointer">
                                Edit
                              </button>
                              <button onClick={() => handleDelete(`${API_BASE}/technologies.php`, {id: t.id}, () => setTechs(prev => prev.filter(item => item.id !== t.id)))} className="text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                        {paginatedTechs.length === 0 && (
                          <tr><td colSpan="4" className="p-8 text-center text-slate-500 font-medium">No technologies found.</td></tr>
                        )}
                      </tbody>
                    </table>

                    <PaginationControls
                      currentPage={getPage('Technologies')}
                      totalItems={filteredTechs.length}
                      perPage={getPerPage('Technologies')}
                      onPageChange={(p) => setPage('Technologies', p)}
                      onPerPageChange={(pp) => setPerPage('Technologies', pp)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 10: CORE VALUES (CRUD + NEXT/PREV PAGINATION) */}
            {/* ========================================================================= */}
            {activeTab === 'Core Values' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div
                  ref={formRef}
                  className={`col-span-1 lg:col-span-5 p-6 rounded-3xl border transition-all duration-300 shadow-sm ${
                    editingId ? 'bg-amber-50/40 border-amber-300 ring-4 ring-amber-500/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${editingId ? 'bg-amber-500 animate-pulse' : 'bg-amber-500'}`} />
                      <span>{editingId ? 'Edit Core Value' : 'Add Core Value'}</span>
                    </h3>
                    {editingId && (
                      <button type="button" onClick={() => resetForm('Core Values')} className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer">
                        Cancel
                      </button>
                    )}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const action = editingId ? handlePut : handlePost;
                      action(
                        `${API_BASE}/core_values.php`,
                        valueData,
                        () => resetForm('Core Values'),
                        () => {
                          if (editingId) setValues(prev => prev.map(v => v.id === editingId ? { ...v, ...valueData } : v));
                          else setValues(prev => [{ id: Date.now(), ...valueData }, ...prev]);
                        }
                      );
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Value Headline *</label>
                      <input type="text" placeholder="e.g. 100% Working Code Guarantee" value={valueData.title} onChange={e => setValueData({...valueData, title: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" required />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Description</label>
                      <textarea placeholder="Supporting explanation..." value={valueData.description} onChange={e => setValueData({...valueData, description: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-medium" rows="3" />
                    </div>
                    <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:brightness-110 text-white p-3.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all flex items-center justify-center gap-2">
                      {editingId ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Update Core Value</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Save Core Value</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div className="col-span-1 lg:col-span-7 flex flex-col space-y-4">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search values..."
                      value={searchQueries['Core Values'] || ''}
                      onChange={e => updateSearchQuery('Core Values', e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
                    />
                  </div>

                  <div className="border border-slate-200 bg-white rounded-2xl overflow-x-auto shadow-sm">
                    <table className="min-w-full text-xs">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 text-left">Value Headline</th>
                          <th className="p-3.5 text-left">Description</th>
                          <th className="p-3.5 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {paginatedValues.map(v => (
                          <tr key={v.id} className={`hover:bg-slate-50 transition-colors ${editingId === v.id ? 'bg-amber-50' : ''}`}>
                            <td className="p-3.5 font-bold text-slate-900">{v.title}</td>
                            <td className="p-3.5 text-slate-600 line-clamp-2 max-w-xs">{v.description}</td>
                            <td className="p-3.5 text-center whitespace-nowrap">
                              <button onClick={() => startEdit(v.id, setValueData, v)} className="text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg font-bold mr-2 transition-all cursor-pointer">
                                Edit
                              </button>
                              <button onClick={() => handleDelete(`${API_BASE}/core_values.php`, {id: v.id}, () => setValues(prev => prev.filter(item => item.id !== v.id)))} className="text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                        {paginatedValues.length === 0 && (
                          <tr><td colSpan="3" className="p-8 text-center text-slate-500 font-medium">No values found.</td></tr>
                        )}
                      </tbody>
                    </table>

                    <PaginationControls
                      currentPage={getPage('Core Values')}
                      totalItems={filteredValues.length}
                      perPage={getPerPage('Core Values')}
                      onPageChange={(p) => setPage('Core Values', p)}
                      onPerPageChange={(pp) => setPerPage('Core Values', pp)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 11: TESTIMONIALS (CRUD + NEXT/PREV PAGINATION) */}
            {/* ========================================================================= */}
            {activeTab === 'Testimonials' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div
                  ref={formRef}
                  className={`col-span-1 lg:col-span-5 p-6 rounded-3xl border transition-all duration-300 shadow-sm ${
                    editingId ? 'bg-amber-50/40 border-amber-300 ring-4 ring-amber-500/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${editingId ? 'bg-amber-500 animate-pulse' : 'bg-yellow-500'}`} />
                      <span>{editingId ? 'Edit Student Review' : 'Add Student Testimonial'}</span>
                    </h3>
                    {editingId && (
                      <button type="button" onClick={() => resetForm('Testimonials')} className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer">
                        Cancel
                      </button>
                    )}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const action = editingId ? handlePut : handlePost;
                      action(
                        `${API_BASE}/testimonials.php`,
                        testData,
                        () => resetForm('Testimonials'),
                        () => {
                          if (editingId) setTestimonials(prev => prev.map(t => t.id === editingId ? { ...t, ...testData } : t));
                          else setTestimonials(prev => [{ id: Date.now(), ...testData }, ...prev]);
                        }
                      );
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Student Name *</label>
                      <input type="text" placeholder="e.g. Suresh Babu" value={testData.name} onChange={e => setTestForm({...testData, name: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" required />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">College / Degree Role</label>
                      <input type="text" placeholder="e.g. B.E. CSE, Anna University" value={testData.role} onChange={e => setTestForm({...testData, role: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Star Rating (1 to 5)</label>
                      <select value={testData.rating || '5'} onChange={e => setTestForm({...testData, rating: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-bold text-slate-800">
                        <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                        <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                        <option value="3">⭐⭐⭐ (3 Stars)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Review Comments *</label>
                      <textarea placeholder="Write student experience..." value={testData.review_text} onChange={e => setTestForm({...testData, review_text: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-medium" rows="3" required />
                    </div>
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:brightness-110 text-white p-3.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all flex items-center justify-center gap-2">
                      {editingId ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Update Review</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Save Testimonial</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div className="col-span-1 lg:col-span-7 flex flex-col space-y-4">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search testimonials..."
                      value={searchQueries['Testimonials'] || ''}
                      onChange={e => updateSearchQuery('Testimonials', e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-yellow-500 shadow-xs"
                    />
                  </div>

                  <div className="border border-slate-200 bg-white rounded-2xl overflow-x-auto shadow-sm">
                    <table className="min-w-full text-xs">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 text-left">Student</th>
                          <th className="p-3.5 text-left">College / Role</th>
                          <th className="p-3.5 text-left">Rating</th>
                          <th className="p-3.5 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {paginatedTestimonials.map(t => (
                          <tr key={t.id} className={`hover:bg-slate-50 transition-colors ${editingId === t.id ? 'bg-amber-50' : ''}`}>
                            <td className="p-3.5 font-bold text-slate-900">{t.name}</td>
                            <td className="p-3.5 text-slate-600">{t.role || '-'}</td>
                            <td className="p-3.5 text-amber-500 font-bold">★ {t.rating || '5'}/5</td>
                            <td className="p-3.5 text-center whitespace-nowrap">
                              <button onClick={() => startEdit(t.id, setTestForm, t)} className="text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg font-bold mr-2 transition-all cursor-pointer">
                                Edit
                              </button>
                              <button onClick={() => handleDelete(`${API_BASE}/testimonials.php`, {id: t.id}, () => setTestimonials(prev => prev.filter(item => item.id !== t.id)))} className="text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                        {paginatedTestimonials.length === 0 && (
                          <tr><td colSpan="4" className="p-8 text-center text-slate-500 font-medium">No testimonials found.</td></tr>
                        )}
                      </tbody>
                    </table>

                    <PaginationControls
                      currentPage={getPage('Testimonials')}
                      totalItems={filteredTestimonials.length}
                      perPage={getPerPage('Testimonials')}
                      onPageChange={(p) => setPage('Testimonials', p)}
                      onPerPageChange={(pp) => setPerPage('Testimonials', pp)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* TAB 12: PARTNERS (CRUD + NEXT/PREV PAGINATION) */}
            {/* ========================================================================= */}
            {activeTab === 'Partners' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div
                  ref={formRef}
                  className={`col-span-1 lg:col-span-5 p-6 rounded-3xl border transition-all duration-300 shadow-sm ${
                    editingId ? 'bg-amber-50/40 border-amber-300 ring-4 ring-amber-500/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${editingId ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                      <span>{editingId ? 'Edit Partner / Accreditation' : 'Add Partner Organization'}</span>
                    </h3>
                    {editingId && (
                      <button type="button" onClick={() => resetForm('Partners')} className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer">
                        Cancel
                      </button>
                    )}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const action = editingId ? handlePut : handlePost;
                      action(
                        `${API_BASE}/partners.php`,
                        partnerData,
                        () => resetForm('Partners'),
                        () => {
                          if (editingId) setPartners(prev => prev.map(p => p.id === editingId ? { ...p, ...partnerData } : p));
                          else setPartners(prev => [{ id: Date.now(), ...partnerData }, ...prev]);
                        }
                      );
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Organization Name *</label>
                      <input type="text" placeholder="e.g. IEEE Computer Society" value={partnerData.name} onChange={e => setPartnerData({...partnerData, name: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" required />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1 uppercase tracking-wider">Logo URL / Image Path</label>
                      <input type="text" placeholder="e.g. https://... or /images/logo.png" value={partnerData.logo_url} onChange={e => setPartnerData({...partnerData, logo_url: e.target.value})} className="w-full border-2 border-slate-200 p-2.5 rounded-xl bg-white text-xs font-semibold" />
                    </div>
                    <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white p-3.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-md cursor-pointer transition-all flex items-center justify-center gap-2">
                      {editingId ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Update Partner Record</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Save Partner</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                <div className="col-span-1 lg:col-span-7 flex flex-col space-y-4">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search partners..."
                      value={searchQueries['Partners'] || ''}
                      onChange={e => updateSearchQuery('Partners', e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-xs"
                    />
                  </div>

                  <div className="border border-slate-200 bg-white rounded-2xl overflow-x-auto shadow-sm">
                    <table className="min-w-full text-xs">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-black tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="p-3.5 text-left">Organization Name</th>
                          <th className="p-3.5 text-left">Logo Preview</th>
                          <th className="p-3.5 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {paginatedPartners.map(p => (
                          <tr key={p.id} className={`hover:bg-slate-50 transition-colors ${editingId === p.id ? 'bg-amber-50' : ''}`}>
                            <td className="p-3.5 font-bold text-slate-900">{p.name}</td>
                            <td className="p-3.5 text-slate-500 font-mono text-[11px] truncate max-w-xs">{p.logo_url || '-'}</td>
                            <td className="p-3.5 text-center whitespace-nowrap">
                              <button onClick={() => startEdit(p.id, setPartnerData, p)} className="text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg font-bold mr-2 transition-all cursor-pointer">
                                Edit
                              </button>
                              <button onClick={() => handleDelete(`${API_BASE}/partners.php`, {id: p.id}, () => setPartners(prev => prev.filter(item => item.id !== p.id)))} className="text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                        {paginatedPartners.length === 0 && (
                          <tr><td colSpan="3" className="p-8 text-center text-slate-500 font-medium">No partner organizations found.</td></tr>
                        )}
                      </tbody>
                    </table>

                    <PaginationControls
                      currentPage={getPage('Partners')}
                      totalItems={filteredPartners.length}
                      perPage={getPerPage('Partners')}
                      onPageChange={(p) => setPage('Partners', p)}
                      onPerPageChange={(pp) => setPerPage('Partners', pp)}
                    />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
