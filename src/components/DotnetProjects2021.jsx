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
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import CodeIcon from "@mui/icons-material/Code";
import VerifiedIcon from "@mui/icons-material/Verified";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StorageIcon from "@mui/icons-material/Storage";
import DevicesIcon from "@mui/icons-material/Devices";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HubIcon from "@mui/icons-material/Hub";
import { 
  ProgramAvatar, 
  ProgramTechBadges, 
  getProgramMeta,
  RoundTechOrb,
  DotNetIcon,
  DatabaseIcon, 
  AndroidIcon, 
  WebIcon,
  AiChipIcon,
  SecurityLockIcon 
} from "./ProgramIconBadge";

// 2021-2022 DotNet Project Data (46 Projects across 4 domains)
const dotnetProjects2021Data = [
  // --- DOMAIN 1: General DotNet / Data Mining & Graph Mining (18 Projects) ---
  {
    id: 1,
    title: "Location Inference for Non-geotagged Tweets in User Timelines",
    domain: "Social Mining & NLP",
    category: "Data Mining & Graphs",
    tech: ["C#", "ASP.NET MVC", "NLP Tokenizer", "Spatial Classifier", "SQL Server"],
    description: "An intelligent text mining model in .NET that predicts geographic locations of un-geotagged tweets through temporal tweet timeline semantics.",
    abstract: "A vast majority of social media messages lack explicit GPS coordinates. This project creates a timeline-based location inference system in ASP.NET that analyzes user vocabulary shifts, topical check-ins, and temporal cues to predict user location with high precision.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Modelling and Predicting Community Structure Changes in Time Evolving Social Networks",
    domain: "Social Graph Analytics",
    category: "Data Mining & Graphs",
    tech: ["C#", ".NET Core", "Graph Mining", "Temporal Community Tracker", "SQL Server"],
    description: "A dynamic graph mining engine in .NET modeling the evolutionary growth, splitting, and merging of online community structures over time.",
    abstract: "Online communities continuously transform via member migrations. We construct a temporal graph mining tool in C# that models transition probability matrices to forecast structural changes and faction splits across evolving networks.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Private Graph: Privacy-Preserving Spectral Analysis of Encrypted Graphs in the Cloud",
    domain: "Graph Privacy & Cloud",
    category: "Data Mining & Graphs",
    tech: ["C#", ".NET Framework", "Homomorphic Encryption", "Spectral Graph Theory", "Azure"],
    description: "A privacy-preserving spectral graph analysis protocol enabling eigenvalue and eigenvector calculations over encrypted cloud-hosted adjacency graphs.",
    abstract: "Outsourcing graph computation poses severe privacy risks to confidential social or biological graphs. We develop 'Private Graph' in .NET using homomorphic cryptography to execute spectral clustering without deciphering sensitive edge weights.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "On Spatial-Aware Community Search",
    domain: "Spatial Databases",
    category: "Data Mining & Graphs",
    tech: ["C#", "Spatial LINQ", "R-Tree Indexing", "Community Query Engine", "SQL Server"],
    description: "A fast spatial community query system in .NET that finds densely connected social graph subgraphs whose members are geographically clustered.",
    abstract: "Locating socially cohesive groups located within a target geographic vicinity is crucial for event planning and marketing. This project develops an index-driven spatial community search engine in C# optimizing cohesive subgraph retrieval.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "On Generalizing Collective Spatial Keyword Queries",
    domain: "Spatial-Keyword Search",
    category: "Data Mining & Graphs",
    tech: ["C#", "ASP.NET Core", "IR-Tree", "Spatial Keyword Index", "SQL Server"],
    description: "An advanced spatial query engine retrieving optimal sets of points-of-interest collectively covering query keywords within minimum geographic boundary distance.",
    abstract: "Collective spatial keyword queries locate groups of points (e.g., hotel, gym, cafe) that satisfy user text requirements within short travel radius. We propose an exact heuristic tree-traversal indexing algorithm in .NET delivering instant search results.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "Relationship between Variants of One-Class Nearest Neighbors and Creating their Accurate Ensembles",
    domain: "Machine Learning & Classification",
    category: "Data Mining & Graphs",
    tech: ["C#", ".NET Core", "One-Class Classification", "Ensemble Learning", "WPF/GUI"],
    description: "A systematic investigation and ensemble framework for One-Class Nearest Neighbor classifiers tailored for anomaly and outlier detection.",
    abstract: "Detecting anomalies when only positive training instances are present is a key challenge. We design a robust ensemble builder in .NET combining distance-weighted and density-based one-class NN variants to achieve superior intrusion and fraud detection.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Influence Maximization on Social Graphs: A Survey",
    domain: "Social Network Analysis",
    category: "Data Mining & Graphs",
    tech: ["C#", "ASP.NET MVC", "Independent Cascade Model", "Greedy/Lazy Propagation", "SQL Server"],
    description: "A scalable simulation platform in .NET implementing influence propagation models to identify top-k seed nodes maximizing viral diffusion.",
    abstract: "Selecting optimal seed nodes to trigger maximal adoption in viral marketing is NP-hard. We build an interactive social graph simulation suite in C# implementing Linear Threshold and Independent Cascade models for large-scale graph dissemination.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "Mining Summaries for Knowledge Graph Search",
    domain: "Knowledge Graphs & Semantic Web",
    category: "Data Mining & Graphs",
    tech: ["C#", "RDF / SPARQL Engine", "Graph Summarization", "Entity Ranking", "SQL Server"],
    description: "An automatic summary generation pipeline in .NET that extracts concise, informative subgraph summaries from large knowledge bases.",
    abstract: "Knowledge graph queries often yield overwhelmingly dense subgraphs. This project implements an entity-centric graph summarization engine in ASP.NET that ranks and presents top salient relationship paths for user exploration.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "Supervised Search Result Diversification via Subtopic Attention",
    domain: "Information Retrieval & NLP",
    category: "Data Mining & Graphs",
    tech: ["C#", ".NET Core", "Subtopic Attention Model", "IR Ranking", "SQL Server"],
    description: "A supervised learning-to-rank system in .NET that diversifies search engine result pages by balancing topical relevance with intent subtopic coverage.",
    abstract: "Ambiguous search queries require diversified result lists to maximize user satisfaction. We develop a subtopic attention ranker in C# that re-orders search hits to eliminate redundant information while covering multiple user intents.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Approximate Order-Sensitive k-NN Queries over Correlated High-Dimensional Data",
    domain: "High-Dimensional Indexing",
    category: "Data Mining & Graphs",
    tech: ["C#", ".NET Core", "Locality-Sensitive Hashing", "k-NN Query Processor", "LINQ"],
    description: "An efficient indexing technique in .NET for approximate order-sensitive nearest neighbor queries across correlated high-dimensional feature vectors.",
    abstract: "High-dimensional multimedia search suffers from the curse of dimensionality. We construct an order-sensitive LSH index in C# that preserves relative attribute rankings and guarantees sub-millisecond retrieval with high recall accuracy.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "Online Product Quantization",
    domain: "Vector Quantization & Search",
    category: "Data Mining & Graphs",
    tech: ["C#", ".NET Framework", "Product Quantization", "Online Codebook Learning", "SQL"],
    description: "An adaptive online product quantization system in .NET that updates vector codebooks in real time to index continuous data streams.",
    abstract: "Standard product quantization requires stationary training sets and fails on non-stationary streaming data. We implement an online streaming codebook update algorithm in .NET that compresses continuous vector streams with minimal reconstruction error.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "Uncertain Graph Scarification",
    domain: "Probabilistic Graph Mining",
    category: "Data Mining & Graphs",
    tech: ["C#", "Graph Sparsification", "Probabilistic Algorithms", "Memory Optimization"],
    description: "A graph scarification/sparsification algorithm in .NET that preserves shortest-path distance metrics in large uncertain graphs while reducing edge complexity.",
    abstract: "Uncertain graphs with probabilistic edges are computationally expensive to query. This project introduces a spectral sparsification algorithm in C# that reduces graph density by up to 80% while preserving connectivity distributions.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 13,
    title: "A General Framework for Implicit and Explicit Social Recommendation",
    domain: "Recommender Systems",
    category: "Data Mining & Graphs",
    tech: ["C#", "ASP.NET Core", "Matrix Factorization", "Social Trust Graph", "SQL Server"],
    description: "A hybrid recommendation engine in ASP.NET combining explicit rating matrices and implicit social trust signals to resolve cold-start issues.",
    abstract: "Traditional collaborative filtering suffers from data sparsity and cold-start. We build a dual-factor recommendation framework in .NET that fuses user-item rating histories with trust relations in social networks to deliver accurate recommendations.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 14,
    title: "Finding Optimal Skyline Product Combinations under Price Promotion",
    domain: "E-Commerce Optimization",
    category: "Data Mining & Graphs",
    tech: ["C#", "ASP.NET MVC", "Skyline Query Engine", "Dynamic Programming", "SQL Server"],
    description: "An optimization system in .NET finding Pareto-optimal product bundles under promotional discounts and customer preference constraints.",
    abstract: "Skyline queries identify non-dominated products across multiple attributes. This project develops a combinatorial skyline search algorithm in C# that evaluates bundled promotional discounts to find optimal purchase combinations for shoppers.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 15,
    title: "Adaptive Cost-Sensitive Online Classification",
    domain: "Online Machine Learning",
    category: "Data Mining & Graphs",
    tech: ["C#", ".NET Core", "Cost-Sensitive Perceptron", "Streaming Classifier", "SQL"],
    description: "An online adaptive classification model in .NET designed for imbalanced streaming datasets with asymmetric misclassification penalties.",
    abstract: "In fraud detection and medical diagnosis, false negatives are far more costly than false positives. We construct a cost-sensitive online learning framework in C# that dynamically tunes classification thresholds as data streams arrive.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 16,
    title: "Efficient Mining of Frequent Patterns on Uncertain Graphs",
    domain: "Data Mining & Uncertain Data",
    category: "Data Mining & Graphs",
    tech: ["C#", "Frequent Subgraph Mining", "Expected Support Index", "SQL Server"],
    description: "A fast subgraph mining algorithm in .NET that extracts frequent patterns from probabilistic graphs using prune-and-bound strategies.",
    abstract: "Uncertain graph datasets arise in PPI networks and sensor topologies. This project implements an expected support calculation algorithm in C# with branch-and-bound pruning to discover frequent subgraph motifs efficiently.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 17,
    title: "NAIS: Neural Attentive Item Similarity Model for Recommendation",
    domain: "Deep Learning & Recommendations",
    category: "Data Mining & Graphs",
    tech: ["C#", "Accord.NET / ML.NET", "Attention Mechanism", "Item-to-Item Similarity", "SQL"],
    description: "An attention-based item similarity model in .NET that learns distinct importance weights for historical user interactions in recommendation lists.",
    abstract: "Item-based collaborative filtering treats all historical purchases with uniform importance. We implement the NAIS neural attentive architecture in .NET to dynamically weight past items according to target candidate relevance.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 18,
    title: "Similarity Measures for SQL Query Clustering",
    domain: "Database Optimization & Analytics",
    category: "Data Mining & Graphs",
    tech: ["C#", "SQL Parser (TSqlParser)", "AST Tree Kernel", "Query Clustering", "SQL Server"],
    description: "A syntax-and-semantic query clustering tool in .NET that groups recurring database queries for caching, workload indexing, and automated tuning.",
    abstract: "Database workload tuning requires grouping queries with similar structural and semantic patterns. We design an Abstract Syntax Tree (AST) similarity measure in C# that clusters high-throughput SQL logs into canonical templates.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },

  // --- DOMAIN 2: Mobile Computing IEEE Projects Topics (8 Projects) ---
  {
    id: 19,
    title: "Reward or Penalty: Aligning Incentives of Stakeholders in Crowd sourcing",
    domain: "Mobile Crowdsourcing",
    category: "Mobile Computing",
    tech: ["C#", "ASP.NET Core", "Game Theory Mechanism", "Reputation System", "SQL Server"],
    description: "An incentive mechanism in .NET leveraging dynamic rewards and penalty contracts to guarantee high-quality worker contributions in crowdsourcing.",
    abstract: "Mobile crowdsensing requires motivating smartphone participants to contribute accurate sensor measurements. We build a game-theoretic incentive engine in ASP.NET that adjusts monetary rewards and penalty stakes based on verifiable task quality.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 20,
    title: "COAST: A Cooperative Storage Framework for Mobile Transparent Computing Using Device-to-Device Data Sharing",
    domain: "Mobile Transparent Computing",
    category: "Mobile Computing",
    tech: ["C#", ".NET Core", "D2D Protocols", "Distributed Cache", "TCP/Socket IO"],
    description: "A distributed mobile cache architecture in .NET enabling nearby handheld devices to share local storage via peer-to-peer cooperative caching.",
    abstract: "Mobile transparent computing separates storage from computing endpoints. We construct COAST in .NET—a cooperative device-to-device storage sharing protocol that reduces cellular backhaul traffic and optimizes local data retrieval speeds.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 21,
    title: "Achieving Load Balance for Parallel Data Access on Distributed File Systems",
    domain: "Distributed Storage & Load Balancing",
    category: "Mobile Computing",
    tech: ["C#", "ASP.NET Core", "Consistent Hashing", "Parallel I/O Scheduler", "SQL Server"],
    description: "A dynamic chunk placement and replica scheduler in .NET that eliminates hotspot bottlenecks in high-throughput distributed file systems.",
    abstract: "Concurrent data reads across mobile edge nodes can cause severe storage skew. We present a dynamic load-balanced replica allocator in C# using consistent hashing and real-time node capacity monitoring to optimize parallel file retrieval.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 22,
    title: "Profit-Driven Dynamic Cloud Pricing for Multi-server Systems Considering User Perceived Value",
    domain: "Cloud Economics & Pricing",
    category: "Mobile Computing",
    tech: ["C#", "ASP.NET MVC", "Dynamic Pricing Engine", "Queuing Theory", "SQL Server"],
    description: "A revenue maximization pricing algorithm in .NET for cloud providers that dynamically adjusts VM hourly pricing based on SLA constraints and user demand.",
    abstract: "Cloud service providers must balance server utilization against customer churn. We construct a multi-server dynamic pricing framework in C# that models user willingness-to-pay and system response times to maximize operator profit.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 23,
    title: "Transparency service model for data security in cloud computing",
    domain: "Cloud Data Transparency",
    category: "Mobile Computing",
    tech: ["C#", "ASP.NET Core", "Cryptographic Audit Trail", "Immutable Logs", "SQL Server"],
    description: "A transparent auditing framework in .NET that generates cryptographically verifiable activity records of cloud provider data handling operations.",
    abstract: "Enterprises demand visibility into how cloud vendors store, replicate, and access their sensitive assets. This project builds a transparent service layer in .NET that logs provider actions with tamper-evident digital signatures.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 24,
    title: "Energy Theft Detection in Multi-Tenant Data Centers with Digital Protective Relay Deployment",
    domain: "Green Computing & IoT",
    category: "Mobile Computing",
    tech: ["C#", ".NET Core", "Relay Telemetry Analysis", "Power Waveform Anomaly", "SQL Server"],
    description: "A smart telemetry anomaly detection system in .NET that identifies illicit energy theft and power manipulation in multi-tenant data facilities.",
    abstract: "Multi-tenant data centers suffer significant financial loss from power diversion and rogue server racks. We design an anomaly detection pipeline in C# monitoring digital protective relay metrics to isolate unauthorized power consumption in real time.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 25,
    title: "Security and QoS guarantee-based resource allocation within cloud computing environment",
    domain: "QoS & Cloud Resource Scheduling",
    category: "Mobile Computing",
    tech: ["C#", ".NET Framework", "Multi-Objective Optimization", "QoS Constraint Solver", "SQL"],
    description: "A security-aware virtual machine allocation engine in .NET guaranteeing Quality-of-Service SLAs while mitigating co-resident side-channel risks.",
    abstract: "Co-locating multi-tenant workloads in cloud environments exposes tasks to cache-timing attacks. We propose a QoS-constrained VM scheduler in .NET that balances CPU/memory guarantees with strict tenant isolation policies.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 26,
    title: "reduction Based Mobile Data Offloading in Mobile Cloud Computing",
    domain: "Mobile Data Offloading",
    category: "Mobile Computing",
    tech: ["C#", "ASP.NET Web API", "Data Compression", "Offloading Decision Engine", "SQL"],
    description: "An intelligent computational offloading scheduler in .NET that reduces mobile cellular bandwidth consumption via payload reduction and WiFi handoffs.",
    abstract: "Offloading intensive tasks from mobile handsets to cloud nodes consumes high uplink energy. This project creates an adaptive data reduction and opportunistic offloading controller in .NET that compresses computation payloads prior to transmission.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },

  // --- DOMAIN 3: Secure Computing IEEE Projects Topics (8 Projects) ---
  {
    id: 27,
    title: "SecSDN-Cloud: Defeating Vulnerable Attacks Through Secure Software-Defined Networks",
    domain: "SDN & Cloud Security",
    category: "Secure Computing",
    tech: ["C#", ".NET Core", "OpenFlow Controller Emulator", "Flow Rule Validator", "SQL Server"],
    description: "A programmable security architecture in .NET defending Software-Defined Cloud Networks from flow table poisoning and unauthorized controller hijacking.",
    abstract: "Centralized SDN controllers represent single points of vulnerability in cloud datacenters. We develop SecSDN-Cloud in .NET to enforce cryptographically authenticated flow updates and isolate suspicious routing behaviors automatically.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 28,
    title: "Network-based detection of mobile malware exhibiting obfuscated or silent network behavior",
    domain: "Malware Forensics & Traffic Analysis",
    category: "Secure Computing",
    tech: ["C#", "Packet Capture (.NET PCAP)", "Statistical Flow Feature Extractor", "ML.NET"],
    description: "A network traffic analyzer in .NET that detects covert Command-and-Control communications generated by obfuscated mobile malware.",
    abstract: "Sophisticated mobile malware evades on-device antivirus by sleeping or using code obfuscation. We construct a deep network flow analyzer in C# that identifies anomalous periodic beacons and encrypted botnet channels without decrypting payloads.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 29,
    title: "Improving Privacy and Security in Decentralizing Multi-Authority Attribute-Based Encryption in Cloud Computing",
    domain: "Attribute-Based Encryption (ABE)",
    category: "Secure Computing",
    tech: ["C#", ".NET Core", "Multi-Authority CP-ABE", "Bilinear Pairing", "SQL Server"],
    description: "A decentralized CP-ABE access control scheme in .NET that eliminates central authority key escrow while protecting user identity privacy.",
    abstract: "Single-authority ABE architectures suffer from key escrow and single-point failure vulnerabilities. We implement a multi-authority decentralized CP-ABE cryptosystem in C# where multiple attribute issuing authorities generate decoupled private key components.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 30,
    title: "Secure and Efficient Product Information Retrieval in Cloud Computing",
    domain: "Encrypted Information Retrieval",
    category: "Secure Computing",
    tech: ["C#", "ASP.NET MVC", "Searchable Encryption", "Product Search Index", "SQL Server"],
    description: "A privacy-preserving multi-attribute product search system in ASP.NET allowing consumers to query encrypted product catalogs on public clouds.",
    abstract: "E-commerce vendors outsourcing inventory databases to third-party clouds must guard proprietary pricing and supplier records. We design a secure inverted-index retrieval system in .NET that supports multi-keyword ranking over ciphertext without leakage.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 31,
    title: "Transparency service model for data security in cloud computing",
    domain: "Cloud Auditing & Zero-Trust",
    category: "Secure Computing",
    tech: ["C#", "ASP.NET Core", "Zero-Knowledge Proofs", "Audit Verification", "SQL Server"],
    description: "An interactive zero-knowledge proof framework in .NET verifying that cloud storage servers maintain correct file permissions and encryption keys.",
    abstract: "Data owners require mathematical guarantees that cloud infrastructure enforces security configurations faithfully. This project builds a transparency audit service in .NET delivering non-repudiation audit proofs for all data lifecycle events.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 32,
    title: "Secured outsourcing towards a cloud computing environment based on DNA cryptography",
    domain: "Bio-Cryptography & Cloud Security",
    category: "Secure Computing",
    tech: ["C#", ".NET Framework", "DNA Encoding Algorithm", "Amino Acid Transposition", "SQL"],
    description: "A biological computation cryptosystem in .NET implementing DNA nucleotide base encoding and pseudo-random biological primer keys for secure cloud outsourcing.",
    abstract: "Modern cyber threats demand novel non-binary cryptographic paradigms. We construct a DNA cryptography engine in C# that translates plaintext data into oligonucleotide codon sequences and applies biological transposition matrices for unbreakable cloud security.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 33,
    title: "Secure and Efficient Privacy-Preserving Cipher text Retrieval in Connected Vehicular Cloud Computing",
    domain: "Vehicular Cloud Security",
    category: "Secure Computing",
    tech: ["C#", ".NET Core", "VANET Simulator", "Order-Preserving Encryption", "SQL Server"],
    description: "A lightweight encrypted search protocol in .NET designed for vehicular cloud networks with dynamic road-side units and high vehicular mobility.",
    abstract: "Connected vehicles generate massive telemetry streams that must be searched securely on vehicular clouds. We introduce an efficient ciphertext retrieval mechanism in C# optimized for low-latency vehicle queries without exposing driver trajectory logs.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 34,
    title: "Data security in cloud computing using AES under HEROKU cloud",
    domain: "Cloud Cryptography & SaaS",
    category: "Secure Computing",
    tech: ["C#", "ASP.NET Core", "AES-256 GCM", "Heroku/Cloud Host", "SQL Server"],
    description: "An end-to-end enterprise document encryption portal in ASP.NET Core utilizing AES-256 with Galois/Counter Mode deployed onto cloud PaaS platforms.",
    abstract: "Enterprise file exchanges across public cloud hosting require authenticated encryption. We implement an AES-256 GCM document repository in ASP.NET Core with automatic key lifecycle management, granular user permissions, and secure file viewing.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },

  // --- DOMAIN 4: Cloud Computing Topics (12 Projects) ---
  {
    id: 35,
    title: "Privacy-Preserving Search over Encrypted Personal Health Record In Multi-Source Cloud",
    domain: "Healthcare Cloud Security",
    category: "Cloud Computing",
    tech: ["C#", "ASP.NET Core", "Multi-Source Searchable Encryption", "EHR Schema", "SQL Server"],
    description: "A secure electronic health record portal in .NET allowing authorized doctors to execute conjunctive medical searches across disparate clinic cloud silos.",
    abstract: "Electronic health records from multiple hospitals reside across multi-source clouds. We construct a multi-keyword searchable encryption scheme in ASP.NET that ensures patient diagnostic data remains end-to-end encrypted while supporting fast clinical queries.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 36,
    title: "Decentralized attribute-based encryption and data sharing scheme in cloud storage",
    domain: "Decentralized ABE Storage",
    category: "Cloud Computing",
    tech: ["C#", ".NET Core", "Decentralized Key Authorities", "Dynamic Attribute Revocation", "SQL"],
    description: "A collaborative cloud data sharing system in .NET where multiple independent organizations manage access attributes without a master root key.",
    abstract: "Traditional cloud access control breaks down in cross-enterprise collaborations. We build a decentralized ABE data sharing pipeline in .NET enabling dynamic user revocation and multi-tenant policy enforcement without central coordinator bottlenecks.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 37,
    title: "Privacy-preserving and Dynamic Multi-attribute Conjunctive Keyword Search over Encrypted Cloud Data",
    domain: "Encrypted Keyword Search",
    category: "Cloud Computing",
    tech: ["C#", "ASP.NET MVC", "Dynamic Index Update", "Conjunctive Trapdoor", "SQL Server"],
    description: "A dynamic searchable encryption engine in .NET supporting multi-attribute queries, forward secrecy, and instant document insertions and deletions.",
    abstract: "Searching encrypted cloud datasets dynamically while preventing information leakage from document updates is challenging. This project develops a dynamic inverted index in C# supporting fast multi-keyword conjunctive search with verified update security.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 38,
    title: "An Efficient and Privacy-Preserving Biometric Identification Scheme in Cloud Computing",
    domain: "Biometric Cloud Authentication",
    category: "Cloud Computing",
    tech: ["C#", ".NET Core", "Homomorphic Distance Computation", "Fingerprint/Iris Vectors", "SQL"],
    description: "A biometric identification cloud service in .NET executing Euclidean and Hamming distance comparisons over encrypted fingerprint vectors.",
    abstract: "Biometric templates cannot be changed once compromised. We construct a secure biometric matching framework in C# that computes Euclidean distances on homomorphically encrypted biometric templates in the cloud without ever exposing raw biometric images.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 39,
    title: "Privacy Preservation for Outsourced Medical Data With Flexible Access Control",
    domain: "Medical Cloud & Access Policies",
    category: "Cloud Computing",
    tech: ["C#", "ASP.NET Core", "Hierarchical Access Trees", "Role-Based CP-ABE", "SQL Server"],
    description: "A flexible access control platform in ASP.NET Core for outsourced patient data with emergency break-glass access policies.",
    abstract: "Medical data security demands nuanced access policies, allowing researchers statistical queries while granting attending physicians full emergency access. We develop a hierarchical policy engine in .NET with break-glass authorization mechanisms.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 40,
    title: "File-centric Multi-Key Aggregate Keyword Searchable Encryption for Industrial Internet of Things",
    domain: "IIoT & Searchable Encryption",
    category: "Cloud Computing",
    tech: ["C#", ".NET Core", "Aggregate Cryptographic Keys", "Industrial Telemetry", "SQL Server"],
    description: "A multi-key aggregate searchable encryption scheme in .NET that aggregates search authorization across millions of industrial IoT telemetry logs.",
    abstract: "Industrial IoT edge gateways upload massive encrypted telemetry files to cloud repositories. This project builds a Key-Aggregate Searchable Encryption (KASE) module in C# allowing engineers to query diverse file batches with a single compact search token.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 41,
    title: "Cloud-Based Approximate Constrained Shortest Distance Queries Over Encrypted Graphs With Privacy Protection",
    domain: "Encrypted Graph Routing",
    category: "Cloud Computing",
    tech: ["C#", ".NET Core", "Encrypted Distance Oracle", "Graph Landmark Index", "SQL Server"],
    description: "A secure shortest distance query engine in .NET computing constrained routing queries over encrypted road network graphs in cloud infrastructure.",
    abstract: "Navigation service providers outsourcing digital road maps to clouds risk exposing proprietary topology and user travel routes. We design an encrypted distance oracle in C# that resolves constrained shortest path queries within sub-percent approximation bounds.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 42,
    title: "Secure and Efficient Attribute-Based Access Control for Multiauthority Cloud Storage",
    domain: "Multi-Authority Storage",
    category: "Cloud Computing",
    tech: ["C#", "ASP.NET MVC", "Multi-Authority Cryptosystem", "Access Matrix Solver", "SQL Server"],
    description: "A scalable attribute-based access system in .NET that partitions authority across governmental, enterprise, and academic attribute providers.",
    abstract: "In federated multi-authority cloud systems, users receive credential attributes from independent organizations. We develop a decentralized attribute verification protocol in ASP.NET that verifies complex boolean policy trees efficiently.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 43,
    title: "Searchable Encryption over Feature-Rich Data",
    domain: "Feature-Rich Data Retrieval",
    category: "Cloud Computing",
    tech: ["C#", ".NET Core", "Multi-Dimensional Range Tree", "Encrypted Spatial-Textual Index", "SQL"],
    description: "A generalized searchable encryption architecture in .NET indexing multidimensional numeric ranges, text tokens, and categorical attributes over ciphertext.",
    abstract: "Modern cloud datasets feature structured numbers, timestamps, and unstructured text simultaneously. We implement an expressive searchable encryption framework in C# that supports composite range and keyword queries over encrypted records.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 44,
    title: "Enabling Efficient User Revocation in Identity-based Cloud Storage Auditing for Shared Big Data",
    domain: "Identity Auditing & User Revocation",
    category: "Cloud Computing",
    tech: ["C#", ".NET Core", "Identity-Based Auditing", "Proxy Re-Signature", "SQL Server"],
    description: "A group cloud storage auditing protocol in .NET that seamlessly re-authenticates shared data blocks when group members are revoked without re-signing entire files.",
    abstract: "When a team member leaves a cloud project, shared files must be resigned to prevent unauthorized modifications. We propose a proxy re-signing protocol in C# allowing cloud auditors to verify data integrity while automatically resigning blocks from revoked users.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 45,
    title: "Towards Shared Ownership in the Cloud",
    domain: "Collaborative Cloud Ownership",
    category: "Cloud Computing",
    tech: ["C#", "ASP.NET Core", "Threshold Cryptography", "Co-Ownership Policy", "SQL Server"],
    description: "A shared ownership cryptographic architecture in .NET requiring consensus thresholds among multiple co-owners before altering or releasing shared assets.",
    abstract: "Single-owner cloud paradigms fail when digital assets are co-created by multiple entities. This project builds a threshold cryptography access manager in ASP.NET Core that requires m-of-n digital authorizations to execute critical cloud operations.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 46,
    title: "A New Lightweight Symmetric Searchable Encryption Scheme for String Identification",
    domain: "Lightweight Symmetric Encryption",
    category: "Cloud Computing",
    tech: ["C#", ".NET Framework", "Lightweight Symmetric Search", "Substring Matcher", "SQL Server"],
    description: "A high-speed, lightweight symmetric searchable encryption scheme in .NET optimized for substring search and low-memory cloud deployments.",
    abstract: "Asymmetric searchable encryption suffers from heavy pairing computations. We propose a ultra-fast symmetric searchable encryption scheme in C# utilizing lightweight hash chains and bitwise masks to identify encrypted strings in microsecond cycles.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
];

const yearNavigationLinks = [
  { label: "IEEE Dotnet Projects 2024 - 2025", path: "/2024-2025-dotnet-projects-chennai" },
  { label: "IEEE Dotnet Projects 2022 - 2023", path: "/2022-2023-dot-net-ieee-application-projects" },
  { label: "IEEE Dotnet Projects 2021 - 2022", path: "/dotnet-ieee-projects-2021-2022-in-chennai", active: true },
  { label: "IEEE Dotnet Projects 2020 - 2021", path: "/dotnet-ieee-projects-2020-2021-in-chennai" },
  { label: "IEEE Dotnet Projects 2019 - 2020", path: "/dotnet-ieee-projects-2019-2020-in-chennai" },
  { label: "IEEE Dotnet Projects 2018 - 2019", path: "/dotnet-ieee-projects-2018-2019-in-chennai" },
  { label: "IEEE Dotnet Projects 2017 - 2018", path: "/dotnet-ieee-projects-2017-2018-in-chennai" },
  { label: "IEEE Dotnet Projects 2016 - 2017", path: "/dotnet-ieee-projects-2016-2017-in-chennai" },
  { label: "IEEE Dotnet Projects 2015 - 2016", path: "/dotnet-ieee-projects-2015-2016-in-chennai" },
  { label: "IEEE Dotnet Projects 2014 - 2015", path: "/dotnet-ieee-projects-2014-2015-in-chennai" },
  { label: "IEEE Dotnet Projects 2013 - 2014", path: "/dotnet-ieee-projects-2013-2014-in-chennai" },
];

const domainCategories = [
  { label: "All Domains", value: "All", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
  { label: "Data Mining & Graphs", value: "Data Mining & Graphs", icon: <StorageIcon sx={{ fontSize: 18 }} /> },
  { label: "Mobile Computing", value: "Mobile Computing", icon: <DevicesIcon sx={{ fontSize: 18 }} /> },
  { label: "Secure Computing", value: "Secure Computing", icon: <SecurityLockIcon sx={{ fontSize: 18 }} /> },
  { label: "Cloud Computing", value: "Cloud Computing", icon: <CloudIcon sx={{ fontSize: 18 }} /> },
];

export default function DotnetProjects2021() {
  const [projectsList, setProjectsList] = useState(dotnetProjects2021Data);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("table");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    academicYear: "2021 - 2022",
    projectRequirements: "Dotnet IEEE Projects 2021-2022",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=dotnet&year=2021 - 2022`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "Data Mining & Graphs",
              category: item.category || "Data Mining & Graphs",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["C#", ".NET Core", "SQL Server"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2021 - 2022",
              difficulty: item.difficulty || "Intermediate",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2021-2022 dotnet projects");
      }
    };
    fetchDynamicProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsList.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projectsList, activeCategory, searchQuery]);

  const handleCopyTitle = (proj) => {
    navigator.clipboard.writeText(proj.title);
    setCopiedId(proj.id);
    setTimeout(() => setCopiedId(null), 2000);
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
        }),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          academicYear: "2021 - 2022",
          projectRequirements: "Dotnet IEEE Projects 2021-2022",
          captchaChecked: false,
        });
      }, 4000);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Submission failed. Please reach us directly via Phone or WhatsApp.");
    }
  };

  const domainCountMap = useMemo(() => {
    const counts = { All: projectsList.length };
    domainCategories.forEach((cat) => {
      if (cat.value !== "All") {
        counts[cat.value] = projectsList.filter((p) => p.category === cat.value).length;
      }
    });
    return counts;
  }, [projectsList]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Floating Gradient Orbs */}
      <div className="absolute top-16 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-96 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-md">
            <DotNetIcon className="w-4 h-4 text-cyan-400" />
            <span>IEEE DotNet Projects 2021 - 2022</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-slate-300">Chennai Academic Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl mx-auto">
            IEEE DotNet Projects{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              2021 - 2022
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to IEEE Project Centre—explore 46+ verified IEEE 2021-2022 DotNet research projects spanning 
            Data Mining &amp; Graph Analytics, Mobile Computing, Secure Computing, and Enterprise Cloud Cryptography with ASP.NET &amp; C#.
          </p>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <CheckCircleIcon className="text-emerald-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">46 Verified IEEE Projects</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <SecurityIcon className="text-cyan-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">ASP.NET MVC &amp; Core C#</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
              <CloudIcon className="text-indigo-400" sx={{ fontSize: 20 }} />
              <span className="text-slate-300">Cloud Storage &amp; Cryptography</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- 12-YEAR DOTNET ARCHIVE MATRIX --- */}
      <section className="py-8 bg-slate-900/40 border-b border-slate-800/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <AutoAwesomeIcon className="text-cyan-400" sx={{ fontSize: 20 }} />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Browse DotNet Projects By Academic Year
              </h2>
            </div>
            <span className="text-xs text-slate-400">Complete 2013 – 2025 Archive</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {yearNavigationLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className={`flex items-center justify-center text-center px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  item.active
                    ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400/50 shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-850"
                }`}
              >
                {item.label.replace("IEEE Dotnet Projects ", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT DOTNET SECTION (AS REQUESTED) --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="space-y-4 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-medium uppercase tracking-wider">
                About DotNet Project
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Enterprise-Grade IEEE DotNet Architecture &amp; Security Highlights
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Welcome to IEEE Project Centre, a hub of technological exploration and learning, where we proudly present our carefully curated selection of 2021-2022 DotNet IEEE projects. As technology continues to evolve, we extend an enthusiastic invitation to students and professionals to dive into the dynamic world of DotNet programming within the context of IEEE standards. Our projects are meticulously designed to provide more than theoretical knowledge; they offer a hands-on platform for learning and practical application.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our 2021-2022 DotNet IEEE projects offer a unique opportunity to enhance your skills, learn industry best practices, and create impactful solutions. Collaborate with our team of experts and industry professionals to unlock the full potential of DotNet programming. At IEEE Project Centre, we’re dedicated to delivering a transformative learning experience through our DotNet projects. Join us in exploring the possibilities of DotNet within the context of IEEE standards, and unlock your potential in the ever-evolving world of programming innovation.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                DOT NET Development Arrangements are Best Known for the Security they give to the Greater and Huge Applications. IEEE Project Centers Provide 2021 2022 DOT NET IEEE Application Projects. Improvement Organization, we have a Significant Information of Applying the Security Highlights Accessible with .NET Structure.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic">
                They have Connected them in Particular in the Mind Boggling Dot Net Applications that Incorporate Installment Entryway, Administration Examination, Immense Databases, Ongoing Mass Applications, .Net Web Regulatory Modules, Substantial Asset Administration Instruments, .Net Based B2C Entries, Refined Correspondence Channels and on Various Endeavor Frameworks. IEEE DOT NET PROJECTS IN CHENNAI it is a Prevalent View that ASP .Net is the Essential of all other Ensuing Programming Dialects. Being a Custom Application Improvement Organization, We Make a Point to Convey it Considerably More Adequately to You with our Capable Strategy for Work and our Institutionalized Approach.
              </p>
            </div>

            {/* 3D Round Tech Showcase Orbs */}
            <div className="w-full lg:w-96 flex-shrink-0 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <RoundTechOrb programKey="dotnet" size={54} />
                <span className="text-xs font-semibold text-white">ASP.NET Core &amp; C#</span>
                <span className="text-[11px] text-slate-400">Enterprise Backend</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <RoundTechOrb programKey="sqlserver" size={54} />
                <span className="text-xs font-semibold text-white">SQL Server 2019</span>
                <span className="text-[11px] text-slate-400">Relational Database</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <RoundTechOrb programKey="cloud" size={54} />
                <span className="text-xs font-semibold text-white">Azure Cloud Storage</span>
                <span className="text-[11px] text-slate-400">Encrypted Blob/Audit</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500/40 transition">
                <RoundTechOrb programKey="cybersecurity" size={54} />
                <span className="text-xs font-semibold text-white">Bio &amp; ABE Cryptography</span>
                <span className="text-[11px] text-slate-400">DNA &amp; AES-256 GCM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DOMAIN FILTER TABS & SEARCH STATION --- */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
          {/* Domain Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 items-center">
            {domainCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === category.value
                    ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-950/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {domainCountMap[category.value] || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Search Bar & View Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-72">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" sx={{ fontSize: 18 }} />
              <input
                type="text"
                placeholder="Search 46+ DotNet projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-700 text-slate-200 pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode("table")}
                className={`p-1.5 rounded-lg transition ${
                  viewMode === "table" ? "bg-cyan-600 text-white" : "text-slate-400 hover:text-white"
                }`}
                title="Table View"
              >
                <TableRowsIcon sx={{ fontSize: 18 }} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition ${
                  viewMode === "grid" ? "bg-cyan-600 text-white" : "text-slate-400 hover:text-white"
                }`}
                title="Grid View"
              >
                <GridViewIcon sx={{ fontSize: 18 }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS CATALOG LISTING --- */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>IEEE 2021-2022 DotNet Project Titles</span>
            <span className="text-xs font-normal text-cyan-400 bg-cyan-950/70 border border-cyan-800 px-2 py-0.5 rounded-full">
              Showing {filteredProjects.length} Titles
            </span>
          </h3>
          <span className="text-xs text-slate-400">Click row or card for abstract details</span>
        </div>

        {viewMode === "table" ? (
          /* Table View */
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl backdrop-blur-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/90 text-slate-300 font-semibold uppercase text-[11px] tracking-wider">
                  <th className="py-3.5 px-4 w-12 text-center">S.No</th>
                  <th className="py-3.5 px-6">IEEE Project Title</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Domain / Category</th>
                  <th className="py-3.5 px-4 hidden lg:table-cell">Key Tech Stack</th>
                  <th className="py-3.5 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredProjects.map((proj, idx) => (
                  <tr
                    key={proj.id}
                    className="hover:bg-slate-850/80 transition group cursor-pointer"
                    onClick={() => setSelectedProject(proj)}
                  >
                    <td className="py-3 px-4 text-center font-bold text-slate-400 group-hover:text-cyan-400">
                      {idx + 1}
                    </td>
                    <td className="py-3 px-6">
                      <div className="font-semibold text-white group-hover:text-cyan-300 transition">
                        {proj.title}
                      </div>
                      <div className="text-[11px] text-slate-400 block md:hidden mt-1">
                        <span className="text-cyan-400">{proj.domain}</span> • {proj.tech.slice(0, 2).join(", ")}
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell text-slate-300 font-medium">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] text-cyan-300">
                        {proj.domain}
                      </span>
                    </td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {proj.tech.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedProject(proj)}
                          className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/30 transition"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => handleCopyTitle(proj)}
                          className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-white border border-slate-800 transition"
                          title="Copy Title"
                        >
                          {copiedId === proj.id ? (
                            <CheckIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
                          ) : (
                            <ContentCopyIcon sx={{ fontSize: 16 }} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj, idx) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      S.No #{idx + 1}
                    </span>
                    <span className="text-[11px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {proj.category}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition line-clamp-2">
                    {proj.title}
                  </h4>

                  <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400">{proj.domain}</span>
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleCopyTitle(proj)}
                      className="p-1 rounded bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                      title="Copy Title"
                    >
                      {copiedId === proj.id ? (
                        <CheckIcon sx={{ fontSize: 14 }} className="text-emerald-400" />
                      ) : (
                        <ContentCopyIcon sx={{ fontSize: 14 }} />
                      )}
                    </button>
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="text-xs font-semibold text-cyan-400 flex items-center gap-1 hover:underline"
                    >
                      <span>Read More</span>
                      <ArrowForwardIcon sx={{ fontSize: 14 }} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- ENQUIRY & CONTACT FORM SECTION --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Why IEEE Project Centre */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AutoAwesomeIcon className="text-cyan-400" />
                <span>Why IEEE Project Centre for DotNet?</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Complete Source Code &amp; Database:</strong> 100% executable ASP.NET &amp; C# source codes with pre-configured SQL Server schema script.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>IEEE Standard Documentation:</strong> Project report, synopsis, PPT presentation, IEEE base paper, and system design diagrams included.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>1-on-1 Code Execution Training:</strong> Detailed line-by-line project explanation in Visual Studio 2019 / 2022 by industry developers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleIcon className="text-cyan-400 mt-0.5 flex-shrink-0" sx={{ fontSize: 18 }} />
                  <span>
                    <strong>Review &amp; Viva Voce Support:</strong> Comprehensive viva question bank, architecture walkthroughs, and mock review preparation.
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919597793345?text=Hello%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%20IEEE%20Dotnet%20Projects%202021-2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition"
                >
                  <WhatsAppIcon sx={{ fontSize: 18 }} />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="tel:+919597793345"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition border border-slate-700"
                >
                  <PhoneIcon sx={{ fontSize: 18 }} />
                  <span>Call Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Booking / Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">Book Your DotNet Project Title</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill the form below to reserve your selected 2021-2022 DotNet project title or request custom project development.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                  <CheckCircleIcon sx={{ fontSize: 40 }} />
                  <h4 className="font-bold text-lg">Thank You! Your Enquiry Was Received</h4>
                  <p className="text-xs text-slate-300">
                    Our senior technical team will get in touch with your project abstract and demo link within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. anand@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Mobile / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Academic Year</label>
                      <input
                        type="text"
                        readOnly
                        value={formData.academicYear}
                        className="w-full bg-slate-950/60 border border-slate-800 text-slate-400 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Project Title / Requirements</label>
                    <textarea
                      rows={3}
                      value={formData.projectRequirements}
                      onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:outline-none transition"
                    />
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <input
                      type="checkbox"
                      id="captcha"
                      checked={formData.captchaChecked}
                      onChange={(e) => setFormData({ ...formData, captchaChecked: e.target.checked })}
                      className="w-4 h-4 rounded text-cyan-600 bg-slate-900 border-slate-700 focus:ring-0"
                    />
                    <label htmlFor="captcha" className="text-xs text-slate-300 cursor-pointer select-none">
                      I am not a robot (Security Verification)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition duration-200"
                  >
                    Submit Project Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL FOR PROJECT ABSTRACT & DETAILS --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </button>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {selectedProject.domain}
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    IEEE {selectedProject.year}
                  </span>
                  <span className="text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800">
                    {selectedProject.difficulty}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {selectedProject.title}
                </h3>

                <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                    Abstract Overview
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Technologies &amp; Libraries
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-slate-800/80 text-xs font-medium text-cyan-300 border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        projectRequirements: `Enquiry for: ${selectedProject.title} (${selectedProject.year})`,
                      }));
                      setSelectedProject(null);
                      const element = document.getElementById("enquiry-form");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition text-center"
                  >
                    Select This Title &amp; Enquire
                  </button>
                  <a
                    href={`https://wa.me/919597793345?text=Hello%20IEEE%20Project%20Centre,%20I%20want%20source%20code%20and%20base%20paper%20for:%20${encodeURIComponent(
                      selectedProject.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition"
                  >
                    <WhatsAppIcon sx={{ fontSize: 18 }} />
                    <span>WhatsApp Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
