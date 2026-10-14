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
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import HubIcon from "@mui/icons-material/Hub";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RecommendIcon from "@mui/icons-material/Recommend";
import CodeIcon from "@mui/icons-material/Code";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TimelineIcon from "@mui/icons-material/Timeline";
import SpeedIcon from "@mui/icons-material/Speed";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// Custom 3D Big Data Logo
const BigdataBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#bdGrad2022)" stroke="#38BDF8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="bdGrad2022" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0F172A" />
        <stop offset="0.5" stopColor="#1E293B" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="14" rx="14" ry="4.5" fill="#38BDF8" fillOpacity="0.85" stroke="#7DD3FC" strokeWidth="1.2" />
    <path d="M10 14v6c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-6" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
    <path d="M10 20v6c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-6" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
    <path d="M10 26v6c0 2.5 6.27 4.5 14 4.5s14-2 14-4.5v-6" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
    <circle cx="16" cy="33" r="2.5" fill="#FACC15" />
    <circle cx="24" cy="36" r="3" fill="#4ADE80" />
    <circle cx="32" cy="33" r="2.5" fill="#F472B6" />
    <line x1="16" y1="33" x2="24" y2="36" stroke="#FDE047" strokeWidth="1.5" />
    <line x1="24" y1="36" x2="32" y2="33" stroke="#4ADE80" strokeWidth="1.5" />
  </svg>
);

// 2022-2023 IEEE Big Data Project Dataset (12 Titles)
const bigdataProjects2022Data = [
  {
    id: 1,
    title: "Impacts of public transportation fare reduction policy on urban public transport sharing rate based on big data analysis",
    domain: "Intelligent Transportation & Urban Policy Analytics",
    category: "Transportation & Urban Big Data",
    tech: ["Apache Spark", "Hadoop HDFS", "Python / PySpark", "Urban GPS & Smart Card Data", "Regression & Time-Series"],
    description: "A large-scale urban transit big data analytics pipeline evaluating ridership shift and passenger sharing rate dynamics following public transport fare reduction policies.",
    abstract: "Fare subsidy policies directly impact urban multimodal commuter patterns. This project leverages distributed big data engines (Hadoop & Apache Spark) to ingest massive bus smart-card transactions and GPS trajectory datasets. By applying multivariable econometric modeling and distributed regression algorithms, the system quantifies the exact elasticity of modal split and public transport sharing rates to inform sustainable urban transit planning.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Fast and Parallel Trust Computing Scheme Based on Big Data Analysis for Collaboration Cloud Service",
    domain: "Cloud Computing & Distributed Trust Evaluation",
    category: "Cloud Security & Distributed Systems",
    tech: ["MapReduce / Apache Spark", "Java / Scala", "CloudSim / OpenStack", "Parallel Matrix Factorization", "Trust Evaluation Engine"],
    description: "A parallelized big data trust-computation framework evaluating distributed cloud service provider reputation metrics across massive collaboration logs.",
    abstract: "Evaluating trust across multi-tenant collaboration cloud services requires analyzing massive historical interaction traces with high compute latency. This project develops a fast and parallel trust computing architecture deployed on MapReduce and Spark. By decomposing complex feedback matrices with distributed linear algebra and decay functions, it computes real-time provider trustworthiness ratings with low computation overhead and high attack resilience.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Providing Healthcare-as-a-Service Using Fuzzy Rule-Based Big Data Analytics in Cloud Computing",
    domain: "Health Informatics & Fuzzy Cloud Analytics",
    category: "Healthcare & Medical Analytics",
    tech: ["Hadoop HDFS", "Fuzzy Inference Engine (FIS)", "Apache Mahout / Spark", "MongoDB", "Python / Java"],
    description: "An intelligent Healthcare-as-a-Service (HaaS) cloud analytics platform utilizing fuzzy rule-based reasoning over distributed electronic health records (EHR) to diagnose chronic illnesses.",
    abstract: "Clinical diagnostic decision support requires processing heterogeneous patient vitals, lab reports, and temporal medical records. We construct a cloud-native Healthcare-as-a-Service architecture incorporating distributed fuzzy inference systems on Hadoop and Spark. The fuzzy engine handles uncertainty and imprecision in medical sensor telemetry, delivering accurate real-time cardiovascular and diabetes risk assessments to remote clinicians.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Empirical analysis on key influential factors on cultural hegemony construction based on big data",
    domain: "Social Media Analytics & Natural Language Processing",
    category: "Social Media & NLP Analytics",
    tech: ["Hadoop MapReduce", "NLP Sentiment & Topic Mining", "Python / NLTK", "Elasticsearch", "Gephi Graph Analytics"],
    description: "A distributed big data text-mining and sociological sentiment analytics framework discovering key influential dissemination channels across global digital media.",
    abstract: "Cross-cultural discourse on digital platforms involves millions of unstructured publications and user interactions. This project engineers a big data analytics pipeline using Hadoop and distributed Natural Language Processing (NLP) tools. Employing Latent Dirichlet Allocation (LDA) topic modeling and sentiment diffusion metrics, it extracts core thematic drivers and quantitative influence vectors across international media corpora.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Map Reduce Scheduling for Deadline-Constrained Jobs in Heterogeneous Cloud Computing Systems",
    domain: "Cloud Resource Management & Distributed Scheduling",
    category: "Cloud Security & Distributed Systems",
    tech: ["Hadoop YARN", "MapReduce Scheduler", "Java / CloudSim", "Heterogeneous Cluster Optimizer", "Deadline Constraint Algorithms"],
    description: "An adaptive task scheduling algorithm in Hadoop YARN optimizing slot allocation and data locality for deadline-sensitive MapReduce workloads across heterogeneous clusters.",
    abstract: "Standard FIFO and Fair schedulers in Hadoop do not account for strict execution deadlines or machine heterogeneity, leading to missed SLAs. This project designs a Deadline-Driven MapReduce Job Scheduler (DD-MRS) in Hadoop YARN. By estimating task remaining computation times based on cluster hardware profile and historical phase completion rates, it prioritizes critical execution paths and cuts SLA violations by 38%.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "Data Transfer Scheduling for Maximizing Throughput of Big-Data Computing in Cloud Systems",
    domain: "Data Center Networks & Cloud Throughput Optimization",
    category: "Cloud Security & Distributed Systems",
    tech: ["Apache Spark", "Hadoop HDFS Federation", "Linear Programming Solver", "Java / Python", "Network Flow Monitor"],
    description: "A multi-path concurrent data transfer and replica routing scheduler designed to maximize aggregate shuffle and I/O throughput in distributed big data clouds.",
    abstract: "Big data analytics engines (Hadoop/Spark) suffer throughput bottlenecks during large-scale MapReduce shuffle and cross-rack replication phases. We formulate a concurrent data transfer scheduling framework that models inter-node bandwidth limits as a maximum network flow problem. Dynamic chunk assignment eliminates network hotspot congestion and improves overall big data job completion speed by up to 42%.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Big data analysis technology application in agricultural intelligence decision system",
    domain: "Smart Agriculture & Environmental Decision Support",
    category: "Agriculture & Environmental Intelligence",
    tech: ["Apache Spark MLlib", "IoT Sensor Data Pipeline", "MongoDB", "Random Forest / XGBoost", "Python / Flask"],
    description: "A smart farming predictive decision support platform analyzing multidimensional soil, meteorological, and crop yield big datasets for precision agriculture.",
    abstract: "Modern precision farming generates continuous streams of soil moisture, temperature, drone imagery, and weather telemetry. This project implements a scalable agricultural big data analytics architecture with Apache Spark and MongoDB. By training distributed Random Forest and regression models on historical harvest databases, the system produces actionable crop yield forecasts, automated irrigation schedules, and disease outbreak warnings.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "A big data on private cloud agile provisioning framework based on Open Stack",
    domain: "Private Cloud Infrastructure & DevOps Virtualization",
    category: "Cloud Security & Distributed Systems",
    tech: ["OpenStack (Nova/Sahara)", "Hadoop Ecosystem", "Docker / Ansible", "KVM Virtualization", "Python REST Client"],
    description: "An agile automated provisioning and elasticity framework orchestrating on-demand Hadoop/Spark big data analytics clusters on private OpenStack cloud infrastructure.",
    abstract: "Deploying dedicated big data hardware is cost-prohibitive and lacks operational flexibility. This project constructs an agile big data provisioning framework utilizing OpenStack Sahara and Nova APIs. The solution provisions virtualized Hadoop compute nodes dynamically based on real-time task queue depths, automating cluster scaling, storage tiering, and teardown with zero administrator intervention.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "Study on information recommendation of scientific and technological achievements based on user behaviour modelling and big data mining",
    domain: "Recommender Systems & Knowledge Discovery",
    category: "Recommendation & User Mining",
    tech: ["Apache Mahout / Spark MLlib", "Collaborative Filtering (ALS)", "HDFS / Neo4j", "Python / Java", "User Profiling Engine"],
    description: "A personalized scientific research and patent recommendation engine applying user behavioral mining and hybrid collaborative filtering across academic big data.",
    abstract: "Researchers struggle to discover relevant technological achievements amid exponential publication growth. We implement a big data recommendation engine utilizing Apache Spark Alternating Least Squares (ALS) and graph mining. By capturing implicit behavioral footprints (citations, clickstreams, downloads) alongside keyword semantics, the engine delivers high-precision personalized technology recommendations.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 10,
    title: "Challenges And Opportunities In Analytic-Predictive Environments Of Big Data And Natural Language Processing For Social Network Rating Systems",
    domain: "NLP & Sentiment Predictive Analytics",
    category: "Social Media & NLP Analytics",
    tech: ["Hadoop / Apache Spark", "NLP Sentiment Lexicons (VADER/BERT)", "MongoDB / Cassandra", "Python / Scikit-Learn", "Streaming Ingestion"],
    description: "An end-to-end predictive text analytics and opinion-mining framework resolving sentiment sarcasm and rating biases across large-scale social network reviews.",
    abstract: "Customer rating systems in e-commerce and social networks suffer from ambiguous polarity, slang, and review manipulation. This project builds a distributed NLP big data pipeline on Apache Spark. By combining deep semantic embeddings, aspect-based sentiment extraction, and spam detector classifiers, it accurately predicts true consumer satisfaction indices from unstructured textual streams.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "Big Data Analytics in Intelligent Transportation Systems: A Survey",
    domain: "ITS Architectures & Traffic Flow Mining",
    category: "Transportation & Urban Big Data",
    tech: ["Apache Spark Streaming", "Hadoop HDFS", "Kafka Message Bus", "Python / GeoPandas", "Spatial-Temporal Mining"],
    description: "A comprehensive spatial-temporal big data benchmarking testbed and survey implementation analyzing streaming GPS, vehicular sensor, and traffic camera telemetry.",
    abstract: "Intelligent Transportation Systems (ITS) require real-time processing of high-volume spatial-temporal streams. This project establishes an end-to-end ITS big data analytics testbed integrating Apache Kafka and Spark Streaming. It benchmarks spatial indexing, map-matching, and short-term traffic volume prediction algorithms against city-scale highway loop detector datasets.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 12,
    title: "Server-Based Intelligent Public Transportation System with NFC",
    domain: "Smart Mobility, IoT & NFC Server Infrastructure",
    category: "Transportation & Urban Big Data",
    tech: ["Node.js / Python Backend", "NFC Card Protocol", "MongoDB / MySQL", "GPS Tracking Engine", "REST API & Web Portal"],
    description: "An integrated intelligent public transit ticketing, live fleet tracking, and cashless NFC tap-to-pay transaction processing platform with real-time server synchronizations.",
    abstract: "Conventional paper-based public transit ticketing causes commuter delays and revenue leakages. This project implements a server-based intelligent transit architecture integrating Near Field Communication (NFC) smart cards with cloud databases. Commuters enjoy instant cashless fare deductions at vehicle turnstiles while backend servers aggregate real-time passenger densities and vehicle GPS coordinates for route optimization.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
];

export default function BigdataProjects2022() {
  const [projects, setProjects] = useState(bigdataProjects2022Data);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [expandedAbstracts, setExpandedAbstracts] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  // Modal / Quick Enquiry State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  // Enquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "2022 - 2023",
    projectTitle: "",
    message: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Fetch from backend API if available
  useEffect(() => {
    let isMounted = true;
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/project_titles.php?tech=bigdata&year=2022 - 2023`);
        if (res.ok) {
          const json = await res.json();
          const items = Array.isArray(json) ? json : json.data || [];
          if (items && items.length > 0 && isMounted) {
            const mapped = items.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title_name || item.title || `Big Data Project ${idx + 1}`,
              domain: item.domain || "Big Data & Distributed Computing",
              category: item.category || "Cloud & Big Data Analytics",
              tech: item.tech ? (Array.isArray(item.tech) ? item.tech : item.tech.split(",")) : ["Hadoop", "Spark", "Python", "NoSQL"],
              description: item.description || "IEEE Standard Big Data Project implementation with complete source code and base paper.",
              abstract: item.abstract || "Comprehensive experimental evaluation and distributed architecture modeling using IEEE standard datasets.",
              year: item.academic_year || "2022 - 2023",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjects(mapped);
          }
        }
      } catch (e) {
        console.warn("Using local dataset for Big Data 2022-2023 projects:", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = selectedCategory === "All" || p.category === selectedCategory;
      const term = searchTerm.toLowerCase().trim();
      const matchSearch =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.domain.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        (Array.isArray(p.tech) && p.tech.some((t) => t.toLowerCase().includes(term))) ||
        (p.abstract && p.abstract.toLowerCase().includes(term));
      return matchCat && matchSearch;
    });
  }, [projects, selectedCategory, searchTerm]);

  const toggleAbstract = (id) => {
    setExpandedAbstracts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyTitle = (id, title) => {
    navigator.clipboard.writeText(title);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const openProjectModal = (proj) => {
    setModalProject(proj);
    setFormData((prev) => ({
      ...prev,
      projectTitle: proj ? proj.title : "BigData IEEE Projects 2022-2023",
    }));
    setIsModalOpen(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormSuccess(false);

    try {
      await fetch(`${API_BASE}/enquiries.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          year: formData.year,
          project_title: formData.projectTitle,
          message: formData.message || `Enquiry for Big Data 2022-2023: ${formData.projectTitle}`,
          source: "Big Data Projects 2022-2023 Page",
        }),
      });
      setFormSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "2022 - 2023",
        projectTitle: "",
        message: "",
      });
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSuccess(false);
      }, 2500);
    } catch (err) {
      setFormSuccess(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  const yearTabs = [
    { label: "Bigdata IEEE Projects 2018 - 2019", path: "/bigdata-ieee-projects-2018-2019-in-chennai/", active: false },
    { label: "Bigdata IEEE Projects 2019 - 2020", path: "/bigdata-ieee-projects-2019-2020-in-chennai/", active: false },
    { label: "Bigdata IEEE Projects 2020 - 2021", path: "/ieee-bigdata-project-list-2020-2021/", active: false },
    { label: "Bigdata IEEE Projects 2021 - 2022", path: "/ieee-bigdata-project-list-2021-2022/", active: false },
    { label: "BigData IEEE Projects 2022 - 2023", path: "/ieee-bigdata-project-list-2022-2023/", active: true },
    { label: "IEEE 2024 - 2025 Big Data", path: "/2024-2025-big-data-projects-chennai/", active: false },
  ];

  const faqs = [
    {
      q: "What makes the 2022-2023 IEEE Big Data projects unique?",
      a: "The 2022-2023 titles explore advanced distributed frameworks including Spark Structured Streaming, automated private cloud provisioning with OpenStack, multi-path concurrent shuffle optimization, and fuzzy inference Healthcare-as-a-Service platforms.",
    },
    {
      q: "Will I get full project documentation and PPT presentation for my college reviews?",
      a: "Yes! Every student receives the published IEEE journal base paper PDF, complete modular source code, IEEE format project documentation (Abstract, System Architecture, Algorithms, Comparative Results & Conclusion), PPT presentation, and 1-on-1 viva guidance.",
    },
    {
      q: "Can I run these projects on my personal laptop or cloud VM?",
      a: "Yes. Our engineering mentors assist you in setting up Dockerized containers, local PySpark nodes, or deploying directly to AWS/OpenStack virtual clusters.",
    },
    {
      q: "How can I book a project or request a live demo?",
      a: "Click 'Request Base Paper & Pricing' on any project card or fill out the instant enquiry form. You can also chat directly with our data engineers via WhatsApp at +91 9597793345.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />

      {/* Breadcrumb Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/java-projects" className="hover:text-cyan-400 transition-colors">IEEE Projects</Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">BigData IEEE Projects 2022 - 2023</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-6 shadow-inner shadow-cyan-500/20"
            >
              <BigdataBrandIcon className="w-4 h-4" />
              <span>BigData IEEE Projects 2022 - 2023</span>
              <span className="bg-cyan-400/20 text-cyan-300 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Chennai Center</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              BigData IEEE Projects <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                2022 - 2023 in Chennai
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
            >
              Harness cutting-edge techniques to process, interpret, and derive insights from massive datasets across predictive analytics, distributed cloud scheduling, and real-time processing frameworks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
            >
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">12+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Verified IEEE Titles</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-sky-400">Spark / Hadoop</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Core Ecosystem</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Working Code & Demo</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-amber-400">1-on-1</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Viva & Training</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <button
                onClick={() => openProjectModal(null)}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2"
              >
                <AutoAwesomeIcon className="w-4 h-4" />
                Request Project Details & Base Paper
              </button>
              <a
                href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%20Bigdata%20IEEE%20Projects%202022-2023"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp Consultation
              </a>
              <a
                href="tel:9597793345"
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4" />
                Call: 9597793345
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Year Navigation Tabs */}
      <section className="bg-slate-900 border-b border-slate-800 py-3 sticky top-0 z-30 shadow-md backdrop-blur-md bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap mr-2 flex items-center gap-1">
              <TimelineIcon className="w-4 h-4 text-cyan-400" />
              Big Data Years:
            </span>
            {yearTabs.map((tab, idx) => (
              <Link
                key={idx}
                to={tab.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  tab.active
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30"
                    : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700/60"
                }`}
              >
                {tab.active && <CheckIcon className="w-3.5 h-3.5" />}
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search titles, technologies (Hadoop, Spark, NLP), or domains..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 self-end md:self-auto">
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">View:</span>
              <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center gap-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                    viewMode === "grid"
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <GridViewIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                    viewMode === "table"
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Table / List View"
                >
                  <TableRowsIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">List</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
            <span className="text-xs text-slate-400 font-semibold whitespace-nowrap">Category:</span>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 font-semibold shadow-sm"
                    : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
            <span>
              Showing <strong className="text-cyan-400">{filteredProjects.length}</strong> of {projects.length} IEEE Big Data Projects
            </span>
            {(selectedCategory !== "All" || searchTerm) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                className="text-cyan-400 hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400 text-sm">Loading 2022-2023 Big Data IEEE Projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <SearchIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-300">No matching projects found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              We couldn't find any projects matching "{searchTerm}". Try clearing your search term or exploring all categories.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs flex items-center justify-center">
                        #{project.id}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      IEEE {project.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                    <HubIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Domain: <strong className="text-slate-300">{project.domain}</strong></span>
                  </div>

                  {project.tech && project.tech.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-slate-950 text-slate-300 border border-slate-800 px-2 py-0.5 rounded-md"
                        >
                          {t.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {project.abstract && (
                    <div className="mt-3">
                      <button
                        onClick={() => toggleAbstract(project.id)}
                        className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                      >
                        <span>{expandedAbstracts[project.id] ? "Hide Abstract" : "View IEEE Abstract & Algorithm"}</span>
                        <ExpandMoreIcon
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            expandedAbstracts[project.id] ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedAbstracts[project.id] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 p-3 rounded-xl bg-slate-950/90 border border-slate-800/80 text-[11px] text-slate-300 leading-relaxed"
                          >
                            <div className="font-semibold text-cyan-400 mb-1 flex items-center gap-1">
                              <MenuBookIcon className="w-3 h-3" />
                              Official IEEE Abstract Summary:
                            </div>
                            {project.abstract}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyTitle(project.id, project.title)}
                      className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors text-xs flex items-center gap-1"
                      title="Copy IEEE Title"
                    >
                      {copiedId === project.id ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] text-emerald-400 font-medium">Copied</span>
                        </>
                      ) : (
                        <>
                          <ContentCopyIcon className="w-3.5 h-3.5" />
                          <span className="text-[10px]">Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/919597793345?text=${encodeURIComponent(
                        `Hi IEEE Project Centre, I want base paper and source code details for Big Data Project #${project.id}: "${project.title}"`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-colors text-xs flex items-center gap-1"
                      title="WhatsApp Inquiry"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-semibold">WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => openProjectModal(project)}
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1"
                  >
                    <span>Request Base Paper</span>
                    <ArrowForwardIcon className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4 w-12 text-center">S.No</th>
                    <th className="py-3 px-4">IEEE Project Title & Domain</th>
                    <th className="py-3 px-4 hidden sm:table-cell">Category</th>
                    <th className="py-3 px-4 hidden md:table-cell">Technologies</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 text-center font-bold text-cyan-400">
                        #{project.id}
                      </td>
                      <td className="py-3.5 px-4 max-w-md">
                        <div className="font-semibold text-white hover:text-cyan-300 transition-colors">
                          {project.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                          <HubIcon className="w-3 h-3 text-cyan-400" />
                          <span>{project.domain}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 hidden sm:table-cell">
                        <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-[11px]">
                          {project.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 hidden md:table-cell max-w-xs">
                        <div className="flex flex-wrap gap-1">
                          {project.tech?.slice(0, 3).map((t, idx) => (
                            <span key={idx} className="bg-slate-950 text-slate-300 px-1.5 py-0.5 rounded text-[10px] border border-slate-800">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleCopyTitle(project.id, project.title)}
                            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:text-white"
                            title="Copy Title"
                          >
                            <ContentCopyIcon className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => openProjectModal(project)}
                            className="px-2.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
                          >
                            Get Paper
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Detailed SEO & Content Section */}
        <section className="mt-16 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 text-slate-300 text-sm leading-relaxed">
              <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <StorageIcon className="w-6 h-6 text-cyan-400" />
                  ABOUT BIGDATA IEEE PROJECTS 2022-2023
                </h2>
                
                <p className="mb-4">
                  In Our <strong>IEEE Project Center</strong>, IEEE projects in Big Data explore the vast potential of large-scale data analysis and management. These projects harness cutting-edge techniques to process, interpret, and derive insights from massive datasets. From predictive analytics and data mining to scalable storage solutions and real-time processing frameworks, these endeavors contribute to the advancement of technology, shaping industries and driving innovation in the era of data-driven decision-making.
                </p>

                <p className="mb-4">
                  <strong>IEEE Project Centre</strong>, a realm where innovation and data converge, offering a glimpse into the future of technology through Big Data projects for the years 2022-2023. As advocates of technical excellence among students, enthusiasts, and professionals, we are thrilled to introduce a diverse range of IEEE Big Data projects that are poised to reshape the landscape of data analytics and insights.
                </p>

                <p className="mb-4">
                  In the ever-evolving world of data science, IEEE Big Data projects 2022-2023 stand as a critical phase with emerging tools, advanced algorithms, and transformative applications of Big Data. At IEEE Project Centre, we’ve thoughtfully curated a collection of projects that span a myriad of domains, from predictive analytics and machine learning to natural language processing and real-time data processing.
                </p>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 mt-4">
                  <strong>Our Primary Goal:</strong> To provide you not just with projects, but with immersive learning experiences that empower you to excel in the dynamic Big Data ecosystem.
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-2xl shadow-xl sticky top-20">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <AutoAwesomeIcon className="w-5 h-5 text-cyan-400" />
                  Instant Project Consultation
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Request IEEE base paper PDF, source code pricing, or schedule a free 1-on-1 demo with our senior data engineers.
                </p>

                {formSuccess ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs text-center space-y-2">
                    <CheckCircleIcon className="w-8 h-8 text-emerald-400 mx-auto" />
                    <div className="font-bold text-sm">Enquiry Submitted Successfully!</div>
                    <p>Our Big Data technical team will contact you via WhatsApp / Phone within 15 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">WhatsApp / Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. student@college.edu"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">College / University</label>
                      <input
                        type="text"
                        name="college"
                        placeholder="e.g. Anna University / SRM / VIT"
                        value={formData.college}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">Select / Type Project Title</label>
                      <input
                        type="text"
                        name="projectTitle"
                        placeholder="e.g. Impacts of public transportation fare reduction..."
                        value={formData.projectTitle}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
                    >
                      {formSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircleIcon className="w-4 h-4" />
                          <span>Request Base Paper & Pricing</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions (FAQs) - Big Data Projects
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 flex items-center justify-between gap-2 hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ExpandMoreIcon
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-3.5 text-xs text-slate-400 border-t border-slate-800/80 pt-2.5 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl p-6 shadow-2xl relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-950 border border-slate-800"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <BigdataBrandIcon className="w-4 h-4" />
                <span>IEEE Base Paper & Source Code Request</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {modalProject ? `Project #${modalProject.id}: ${modalProject.title}` : "BigData IEEE Projects 2022-2023"}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Fill your contact details below to get instant download access, base paper PDF, and software requirements.
              </p>

              {formSuccess ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircleIcon className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Thank you! Your request is submitted.</h4>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Vignesh R"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. student@gmail.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">College Name</label>
                    <input
                      type="text"
                      name="college"
                      placeholder="e.g. Anna University"
                      value={formData.college}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Selected IEEE Project</label>
                    <input
                      type="text"
                      name="projectTitle"
                      readOnly
                      value={formData.projectTitle}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-cyan-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
                  >
                    Submit & Get Instant Base Paper
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
