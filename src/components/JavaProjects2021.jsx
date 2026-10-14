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
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
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
import ApiIcon from "@mui/icons-material/Api";
import { 
  ProgramAvatar, 
  ProgramTechBadges, 
  getProgramMeta,
  RoundTechOrb,
  JavaIcon, 
  DatabaseIcon, 
  AndroidIcon, 
  WebIcon,
  AiChipIcon,
  SecurityLockIcon 
} from "./ProgramIconBadge";

// 2021-2022 Project Data by Category (69 Titles across 6 Domains)
const projects2021Data = [
  // --- GENERAL JAVA IEEE PROJECTS (1 - 22) ---
  {
    id: 1,
    title: "Deep Clue: Visual Interpretation of Text-based Deep Stock Prediction",
    domain: "Deep Learning & NLP",
    category: "General Java",
    tech: ["Java", "Deep Learning", "NLP", "Financial Dataset", "MySQL"],
    description: "A visual interpretation and deep learning model analyzing financial text news and social sentiments to forecast stock market dynamics.",
    abstract: "Deep neural networks are widely applied to stock market prediction using unstructured financial news. Deep Clue develops an interactive visual analytics system that explains deep prediction models and correlates textual cues with market price trajectories.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Exploiting the Dynamic Mutual Influence for Predicting Social Event Participation",
    domain: "Social Network Mining",
    category: "General Java",
    tech: ["Java", "Social Graph API", "Influence Modeling", "MySQL"],
    description: "A dynamic mutual influence propagation model predicting individual and group attendance at social events over social network graphs.",
    abstract: "Predicting user participation in event-based social networks requires modeling both static friendship ties and dynamic peer influences. This project introduces a joint mutual influence algorithm that tracks time-decaying invitation response behaviors.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Privacy-Preserving Social Media Data Publishing for Personalized Ranking-Based Recommendation",
    domain: "Data Privacy & Recommendation",
    category: "General Java",
    tech: ["Java", "Differential Privacy", "Matrix Factorization", "Security"],
    description: "A privacy-preserving publishing framework that protects user identity and sensitive rating records while maintaining high recommendation accuracy.",
    abstract: "Publishing social media interaction datasets for recommendation engine research exposes sensitive user habits. We implement a local differential privacy mechanism tailored for personalized ranking-based recommendation systems.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Optimizing Quality for Probabilistic Skyline Computation and Probabilistic Similarity Search",
    domain: "Database & Skyline Query",
    category: "General Java",
    tech: ["Java", "Skyline Algorithms", "Probabilistic DB", "MySQL 5.5"],
    description: "An optimization engine for computing probabilistic skylines and similarity rankings over uncertain multi-dimensional database records.",
    abstract: "In uncertain database environments such as sensor networks and financial feeds, traditional deterministic skyline operators fail. This project develops an efficient pruning and bounding strategy for probabilistic skyline queries.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "A Survey of Location Prediction on Twitter",
    domain: "Location Analytics & Social Media",
    category: "General Java",
    tech: ["Java", "Twitter API", "Geo-Spatial Mining", "Text Parsing"],
    description: "A comprehensive geospatial analysis framework estimating user home locations and tweet origins using content-based linguistic indicators.",
    abstract: "Geotagged social data provides vital insights for disaster relief and urban planning. This project implements a hierarchical location estimation engine combining tweet gazetteer matching and user network proximity.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "Top-k Critical Vertices Query on Shortest Path",
    domain: "Graph Analytics & Algorithms",
    category: "General Java",
    tech: ["Java", "Shortest Path Algorithms", "Graph Indexing", "MySQL"],
    description: "An algorithmic query framework that identifies the top-k most critical vertices whose disruption causes maximum shortest-path latency degradation.",
    abstract: "Network vulnerability assessment requires identifying bottleneck nodes whose failure disrupts shortest path routing. We design index-based pruning algorithms to compute top-k critical shortest path vertices efficiently.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "SIMkNN: A Scalable Method for In-Memory kNN Search over Moving Objects in Road Networks",
    domain: "Spatial-Temporal Computing",
    category: "General Java",
    tech: ["Java", "In-Memory Indexing", "Road Network Grid", "kNN Search"],
    description: "A high-throughput in-memory indexing method enabling continuous k-nearest neighbor searches over fast-moving vehicles in constrained road networks.",
    abstract: "Real-time fleet tracking demands sub-millisecond kNN query responses. SIMkNN combines road segment partitioning and in-memory safe-region computation to evaluate moving object kNN queries with minimal index update overhead.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 8,
    title: "Planning with Spatio-Temporal Search Control Knowledge",
    domain: "Spatial AI & Path Planning",
    category: "General Java",
    tech: ["Java", "AI Search", "Spatio-Temporal Logic", "Heuristics"],
    description: "An automated planning architecture that leverages spatio-temporal search control rules to accelerate complex multi-agent mission planning.",
    abstract: "Classical heuristic planners struggle with complex geometric and temporal constraints. This project incorporates declarative spatio-temporal domain knowledge to drastically prune irrelevant search branches in mission routing.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 9,
    title: "We Like, We Post: A Joint User-Post Approach for Facebook Post Stance Labeling",
    domain: "Sentiment & Stance Mining",
    category: "General Java",
    tech: ["Java", "Stance Detection", "User Modeling", "NLP", "MySQL"],
    description: "A joint machine learning framework that classifies user stance (support, oppose, neutral) on contentious Facebook topics by modeling user historical affinity.",
    abstract: "Stance detection from brief social posts is challenging due to brevity and sarcasm. We implement a collaborative user-post representation model that jointly captures user personality profiles and textual context.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 10,
    title: "New Query Recommendation Method Supporting Exploratory Search Based on Search Goal Shift Graphs",
    domain: "Information Retrieval",
    category: "General Java",
    tech: ["Java", "Query Log Mining", "Goal Shift Graph", "J2EE"],
    description: "A query recommendation system that models dynamic search goal evolutions to guide users during complex exploratory search sessions.",
    abstract: "Users frequently revise search intent when exploring unfamiliar domains. This project builds search goal transition graphs from historical query sessions to recommend diverse and serendipitous search terms.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 11,
    title: "Topology-driven Diversity for Targeted Influence Maximization with Application to User Engagement in Social Networks",
    domain: "Graph Mining & Influence",
    category: "General Java",
    tech: ["Java", "Influence Maximization", "Graph Topology", "Social Analytics"],
    description: "An influence maximization algorithm incorporating topological community diversity to maximize long-term user engagement and viral reach.",
    abstract: "Targeting influential seeds concentrated in a single community limits viral spread. We propose a topology-aware greedy seed selection algorithm that balances influence spread across diverse structural network clusters.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "Characterizing and Predicting Early Reviewers for Effective Product Marketing on E-Commerce Websites",
    domain: "E-Commerce Analytics",
    category: "General Java",
    tech: ["Java", "Predictive Analytics", "Feature Engineering", "MySQL"],
    description: "A predictive analytics engine that identifies influential early product reviewers whose feedback reliably anticipates future product popularity.",
    abstract: "Early product reviews heavily impact e-commerce sales. This project formulates early reviewer identification as a ranking problem, leveraging review timeliness, user historical accuracy, and social helpfulness votes.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Achieving Data Truthfulness and Privacy Preservation in Data Markets",
    domain: "Data Security & Cryptography",
    category: "General Java",
    tech: ["Java", "Homomorphic Encryption", "Signature Verification", "Data Market"],
    description: "A secure electronic data market protocol ensuring data integrity, source truthfulness, and seller privacy during high-value data transactions.",
    abstract: "Data markets require verifying that traded datasets are authentic without disclosing proprietary raw contents prior to payment. We design an identity-based signature and encrypted verification scheme ensuring both data truthfulness and buyer/seller privacy.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 14,
    title: "Top-k Durable Graph Pattern Queries on Temporal Graphs",
    domain: "Temporal Graph Mining",
    category: "General Java",
    tech: ["Java", "Temporal Graphs", "Graph Pattern Matching", "Index Pruning"],
    description: "A query engine that extracts top-k durable graph patterns that persist across continuous time snapshots in dynamic networks.",
    abstract: "Temporal networks exhibit rapid topological changes over time. This project formalizes durable graph pattern queries and presents temporal index structures that filter transient subgraphs to retrieve long-lasting interaction structures.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "Collaboratively Tracking Interests for User Clustering in Streams of Short Texts",
    domain: "Stream Text Mining",
    category: "General Java",
    tech: ["Java", "Streaming Clustering", "Topic Modeling", "Socket Programming"],
    description: "A real-time text stream clustering algorithm that adaptively tracks evolving user interest shifts in high-velocity microblog feeds.",
    abstract: "Short text streams suffer from extreme sparsity and concept drift. We implement a collaborative interest tracking model that dynamically clusters users by updating latent topic distributions over sliding streaming windows.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 16,
    title: "Webpage Depth View ability Prediction using Deep Sequential Neural Networks",
    domain: "Web Analytics & Neural Networks",
    category: "General Java",
    tech: ["Java", "Sequential Neural Networks", "Web Analytics", "DOM Parsing"],
    description: "A deep sequential neural network predicting how deeply users will scroll and engage with individual webpage sections and embedded advertisements.",
    abstract: "Maximizing online ad visibility requires predicting user scroll depth. This project designs a sequential recurrent model analyzing page layout features, content density, and historical browsing speeds to forecast ad impression viewability.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 17,
    title: "Characterizing and Countering Communal Microblogs During Disaster Events",
    domain: "Crisis Informatics & Text Mining",
    category: "General Java",
    tech: ["Java", "Sentiment Analysis", "Disaster Mining", "Classification"],
    description: "An automated crisis informatics system that detects and counters inflammatory or misleading microblogs during natural and civil emergencies.",
    abstract: "Social media during emergencies often spreads rumors and sectarian tension. We construct an NLP-based rumor classification and alert dissemination pipeline that flags malicious posts and promotes verified emergency advisories.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 18,
    title: "Cleaning Antipatterns in an SQL Query Log",
    domain: "Database Optimization & Log Mining",
    category: "General Java",
    tech: ["Java", "SQL Parser", "Antipattern Detection", "Query Rewriter"],
    description: "An automated SQL query optimizer that parses enterprise database query logs, identifies performance antipatterns, and generates optimized rewrite rules.",
    abstract: "Poorly drafted SQL queries degrade enterprise database throughput. This system parses query execution trees, detects redundant joins, missing indexes, and Cartesian products, and recommends automated query refactorings.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 19,
    title: "A Hybrid Approach for Detecting Automated Spammers in Twitter",
    domain: "Cyber Security & Spam Detection",
    category: "General Java",
    tech: ["Java", "Bot Detection", "Feature Extraction", "Machine Learning"],
    description: "A hybrid machine learning framework combining account behavioral heuristics and tweet linguistic analysis to identify sophisticated Twitter bot accounts.",
    abstract: "Automated spam bots manipulate public sentiment and spread malware. We develop a multi-layer classification architecture that integrates URL redirection analysis, tweeting frequency entropy, and follower-following ratio anomalies.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 20,
    title: "Serendipitous Recommendation in E-Commerce Using Innovator-Based Collaborative Filtering",
    domain: "Recommendation Systems",
    category: "General Java",
    tech: ["Java", "Collaborative Filtering", "Serendipity Metrics", "MySQL"],
    description: "An e-commerce recommendation algorithm that identifies early-adopter innovators to suggest novel, surprising, yet highly relevant product items.",
    abstract: "Standard collaborative filtering algorithms produce overly predictable recommendations. This project introduces an innovator-weighting matrix factorization technique that boosts serendipity and catalog exploration without sacrificing precision.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 21,
    title: "Tracking Dynamics of Opinion Behaviors with a Content-based Sequential Opinion Influence Model",
    domain: "Opinion Mining",
    category: "General Java",
    tech: ["Java", "Time-Series Mining", "Opinion Influence", "NLP"],
    description: "A sequential opinion modeling engine that measures how influential users dynamically alter community stance on emerging technological and political topics.",
    abstract: "Public opinion on social platforms evolves continuously through peer debate. We construct a content-based sequential influence model that tracks temporal opinion state transitions and quantifies opinion leader impact.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 22,
    title: "Hash tagger+: Efficient High-Coverage Social Tagging of Streaming News",
    domain: "Information Extraction",
    category: "General Java",
    tech: ["Java", "Hashtag Recommendation", "Streaming Text", "Lucene"],
    description: "A real-time hashtag assignment pipeline that automatically matches streaming breaking news articles with high-coverage social hashtags.",
    abstract: "Connecting mainstream news articles with social media discussions requires automated hashtagging. Hash tagger+ combines semantic similarity and viral trending metrics to generate accurate, high-coverage hashtags for news streams.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },

  // --- JAVA PROJECTS BASED REAL TIME DATASET (23 - 34) ---
  {
    id: 23,
    title: "Analysis and prediction of users Behavior by Mining Twitter Data Using Dataset",
    domain: "Social Media Mining",
    category: "Real-Time Dataset",
    tech: ["Java", "Twitter Dataset", "Behavior Classification", "MySQL"],
    description: "A big data analytics system mining real-time Twitter datasets to classify user behavioral profiles, sentiment trends, and topic preferences.",
    abstract: "Understanding user behavior on social platforms is essential for personalized marketing and threat detection. This project processes real Twitter datasets to extract linguistic, temporal, and interaction features for user habit prediction.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 24,
    title: "Predicting Drug Side Effects Using Data Analytics and the Integration of Multiple Data Sources",
    domain: "Healthcare Informatics",
    category: "Real-Time Dataset",
    tech: ["Java", "Biomedical Dataset", "Data Fusion", "SVM / Naive Bayes"],
    description: "A healthcare predictive pipeline integrating chemical structures, clinical trial logs, and biomedical datasets to forecast adverse drug interactions.",
    abstract: "Undetected adverse drug reactions pose severe health risks. We develop a multi-source data integration model that fuses chemical compound descriptors and patient adverse reporting databases to predict potential drug side effects.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 25,
    title: "An Identifier Heart Disease Based Risk Prediction using Dataset",
    domain: "Medical Predictive Analytics",
    category: "Real-Time Dataset",
    tech: ["Java", "Cleveland Heart Dataset", "Decision Trees", "GUI Swing"],
    description: "A clinical decision support system utilizing standardized cardiac datasets to assess patient heart disease vulnerability with high diagnostic precision.",
    abstract: "Early diagnosis of cardiovascular disease saves lives. This project implements machine learning classifiers on benchmark patient medical records, identifying key diagnostic indicators such as cholesterol, ECG, and blood pressure variance.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 26,
    title: "An Efficient Disease Analysis using Lab Report Datasets",
    domain: "Healthcare Data Mining",
    category: "Real-Time Dataset",
    tech: ["Java", "Lab Report Dataset", "Pattern Extraction", "MySQL"],
    description: "An automated clinical diagnostic tool that parses pathology lab report datasets to classify multi-symptom chronic medical conditions.",
    abstract: "Analyzing complex pathology parameters manually is prone to oversight. We build an automated diagnostic analyzer in Java that matches lab test parameters against historical patient diagnostic outcomes.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 27,
    title: "DRIMUX – Dynamic Rumor Influence Minimization with User Experience in Social Networks",
    domain: "Social Network Security",
    category: "Real-Time Dataset",
    tech: ["Java", "Rumor Mitigation", "User Experience Metric", "Graph Algorithm"],
    description: "A rumor containment algorithm that blocks misinformation spread across social networks while minimizing disruption to benign user social experiences.",
    abstract: "Aggressive link blocking stops rumors but ruins user experience. DRIMUX calculates a dynamic user experience penalty function, selecting optimal blocker nodes that suppress rumor cascades while preserving regular message flow.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 28,
    title: "Online Shopping Product Promotes Recommendation using Dataset",
    domain: "E-Commerce Analytics",
    category: "Real-Time Dataset",
    tech: ["Java", "E-Commerce Logs", "Association Rule Mining", "MySQL"],
    description: "An intelligent e-commerce promotion and recommendation engine utilizing historical transaction logs to predict repeat purchase probability.",
    abstract: "Personalized promotions significantly boost online retail conversions. This project implements Apriori and FP-Growth association algorithms on retail datasets to generate personalized product bundles in real time.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 29,
    title: "Dynamic Creation For Database Prediction Management",
    domain: "Database Architecture",
    category: "Real-Time Dataset",
    tech: ["Java", "Dynamic Schema", "Time-Series Prediction", "JDBC"],
    description: "An adaptive database management system that automatically configures dynamic tables and predictive indexing based on incoming sensor data flows.",
    abstract: "Static relational schemas struggle with unpredictable IoT data structures. We implement a dynamic table generation and predictive memory caching architecture in Java that scales database capacity dynamically.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 30,
    title: "Food Recommendation System using SVM Classification",
    domain: "Machine Learning & Health",
    category: "Real-Time Dataset",
    tech: ["Java", "SVM Classifier", "Nutritional Dataset", "User Profiling"],
    description: "A personalized dietary and food recommendation system utilizing Support Vector Machines to match nutritional needs with recipe datasets.",
    abstract: "Personalized nutrition helps manage chronic lifestyle illnesses. This project classifies user health profiles, caloric requirements, and dietary restrictions to recommend optimal daily meal plans from nutritional food databases.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 31,
    title: "Robust lossless Watermarking of Relational database Based on Circular Histogram Modulation",
    domain: "Database Security",
    category: "Real-Time Dataset",
    tech: ["Java", "Database Watermarking", "Histogram Modulation", "MySQL"],
    description: "A robust and distortion-free relational database watermarking technique that proves database copyright without corrupting data integrity.",
    abstract: "Protecting proprietary database assets against theft requires watermarking that withstands deletion and alteration attacks. We implement circular histogram modulation to embed verifiable watermark bits into numerical database attributes reversibly.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 32,
    title: "Spam Filtering by Semantics-based Text Classification using Dataset",
    domain: "NLP & Text Security",
    category: "Real-Time Dataset",
    tech: ["Java", "Enron Spam Dataset", "Semantic Analysis", "WordNet"],
    description: "A semantics-aware spam filtering engine combining WordNet synset expansion and Bayesian classification to defeat obfuscated spam messages.",
    abstract: "Modern spammers bypass keyword filters using synonyms and misspellings. This project applies WordNet ontological semantics and contextual n-gram extraction on benchmark email corpora to achieve robust spam detection.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 33,
    title: "Recommendation System For Bank Account Holders To Reduce Over Spending",
    domain: "Financial Analytics",
    category: "Real-Time Dataset",
    tech: ["Java", "Banking Transaction Dataset", "Budget Forecasting", "J2EE"],
    description: "A personal financial management advisory system analyzing historical banking statements to flag unnecessary spending habits and suggest savings.",
    abstract: "Overspending is a major challenge for retail banking customers. We design a financial analytics dashboard that categorizes recurring expenditures, forecasts monthly cash flows, and delivers automated budget restraint notifications.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 34,
    title: "Prediction analysis of risk credit using Data Mining Classification Models",
    domain: "FinTech & Risk Scoring",
    category: "Real-Time Dataset",
    tech: ["Java", "Credit Risk Dataset", "Random Forest / C4.5", "MySQL"],
    description: "A comprehensive credit scoring platform evaluating loan applicant financial stability and predicting loan default probabilities.",
    abstract: "Assessing creditworthiness accurately is fundamental to commercial banking risk mitigation. This system implements decision tree and ensemble classification algorithms on historical credit loan datasets to automate loan approvals.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },

  // --- JAVA PROJECTS BASED API FUNCTION (35 - 41) ---
  {
    id: 35,
    title: "Probabilistic Models For Ad View ability Prediction On The Web using API",
    domain: "Web API & Advertising",
    category: "API Function",
    tech: ["Java", "Advertising API", "Probabilistic Scoring", "Web Services"],
    description: "A real-time ad viewability scoring engine integrating web analytics APIs to predict user attention span and ad placement value.",
    abstract: "Online advertisers lose revenue on unseen ad impressions. This project interfaces with live web analytics APIs and uses probabilistic modeling to evaluate viewport placement, scroll dynamics, and ad rendering completeness.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 36,
    title: "Online Multi keyword Ranking Based on the Image with Videos using Flickr API",
    domain: "Multimedia & Flickr API",
    category: "API Function",
    tech: ["Java", "Flickr REST API", "Multi-Keyword Search", "Image Processing"],
    description: "A multimedia retrieval system utilizing the Flickr API to rank and retrieve relevant photos and videos based on multi-keyword query relevance.",
    abstract: "Image retrieval across massive photo repositories demands intelligent tag-content correlation. We build a Java application that queries Flickr APIs, extracts visual color histograms, and re-ranks search results using multi-keyword affinity.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 37,
    title: "Automated Music Video Generation Using Web Image Resource using Flickr API",
    domain: "Multimedia Generation",
    category: "API Function",
    tech: ["Java", "Flickr API", "Audio Beat Detection", "Video Synthesis"],
    description: "An automated multimedia synthesis tool that extracts musical tempo and queries Flickr APIs to generate synchronized image slideshow videos.",
    abstract: "Creating visual accompaniments for audio tracks automatically requires aligning rhythm with imagery. This project analyzes audio beat frequencies and fetches contextually aligned photos from Flickr to render automated music videos.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 38,
    title: "Social-Rank Identifying and Ranking Prevalent News Topics Using Social Media Factors using Twitter API",
    domain: "Twitter API & News Ranking",
    category: "API Function",
    tech: ["Java", "Twitter v2 API", "Social-Rank Algorithm", "Text Mining"],
    description: "A news ranking framework combining Twitter stream APIs and mainstream news feeds to rank breaking stories by social media engagement factors.",
    abstract: "Traditional news outlets rank stories editorially, whereas social media reflects immediate public buzz. Social-Rank connects to live Twitter streams, measuring retweet velocity and sentiment divergence to identify prevalent breaking news.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 39,
    title: "Food Classification System Using Twitter API",
    domain: "Social Media & Image/Text Mining",
    category: "API Function",
    tech: ["Java", "Twitter API", "Food Categorization", "Text Processing"],
    description: "A dietary surveillance tool harvesting real-time tweets via Twitter API to classify public food consumption habits and regional dietary patterns.",
    abstract: "Public health researchers track dietary trends through social media logs. We build a Java pipeline querying Twitter APIs for food mentions, categorizing tweets into food pyramid nutrition groups, and analyzing geographic consumption habits.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 40,
    title: "Towards Real-Time, Country-Level Location Classification of Worldwide Tweet using API",
    domain: "Geo-Location API",
    category: "API Function",
    tech: ["Java", "Twitter Streaming API", "GeoIP Lookup", "Multithreading"],
    description: "A high-performance streaming engine that performs country-level geographic classification on millions of worldwide tweets in real time.",
    abstract: "Most social media messages lack explicit GPS coordinates. This project interfaces with Twitter Streaming APIs and applies gazetteer matching, timezone inference, and language models to resolve tweet origin at country granularity.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 41,
    title: "Analyzing the Behavior of Youth to Sociality Using Social Media Mining using Twitter API",
    domain: "Behavioral Analytics",
    category: "API Function",
    tech: ["Java", "Twitter API", "Behavioral Mining", "Sentiment Engine"],
    description: "A sociological analytics platform investigating adolescent psychological patterns, sociality habits, and online sentiment using Twitter data streams.",
    abstract: "Adolescent mental health and social interaction habits are heavily reflected in online posting patterns. We construct an analytical tool extracting linguistic emotion markers from Twitter streams to quantify social engagement patterns.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },

  // --- MOBILE COMPUTING IEEE PROJECTS (42 - 49) ---
  {
    id: 42,
    title: "A service migration strategy based on multiple attribute decision in mobile edge computing",
    domain: "Mobile Edge Computing",
    category: "Mobile Computing",
    tech: ["Java", "Edge Computing Simulator", "MADM Algorithms", "Sockets"],
    description: "A multi-attribute decision-making service migration strategy ensuring seamless VM handover across mobile edge servers as mobile clients move.",
    abstract: "Mobile edge servers suffer service degradation when users move outside base station coverage. This project models service migration costs, network latency, and server utilization to trigger optimal container migrations across edge nodes.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 43,
    title: "SaW: Video Analysis in Social Media with Web-Based Mobile Grid Computing",
    domain: "Mobile Grid & Video Analysis",
    category: "Mobile Computing",
    tech: ["Java", "Mobile Grid Architecture", "Video Processing", "P2P"],
    description: "A distributed mobile grid framework that shares compute-heavy video analytics tasks across idle smartphone clusters in local peer networks.",
    abstract: "Processing high-resolution social video on standalone smartphones drains battery rapidly. SaW orchestrates a lightweight mobile grid that distributes video frames across nearby peer devices for cooperative video object recognition.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 44,
    title: "MAGA: A Mobility-Aware Computation Offloading Decision for Distributed Mobile Cloud Computing",
    domain: "Mobile Cloud Computing",
    category: "Mobile Computing",
    tech: ["Java", "Genetic Algorithm", "Offloading Decision", "Android/Cloud"],
    description: "A mobility-aware genetic algorithm that optimizes task offloading decisions between mobile handhelds and remote cloud datacenters.",
    abstract: "Offloading intensive tasks to the cloud reduces mobile device battery consumption but introduces latency risks when mobile users traverse network zones. MAGA optimizes computation offloading schedules under stochastic user mobility.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 45,
    title: "Auction-Based Resource Allocation for Sharing Cloudlets in Mobile Cloud Computing",
    domain: "Cloudlet & Resource Allocation",
    category: "Mobile Computing",
    tech: ["Java", "Game Theory", "Auction Mechanism", "Cloudlet Simulator"],
    description: "An economic auction mechanism for allocating competitive bandwidth and compute resources among multiple mobile devices in shared cloudlet environments.",
    abstract: "Cloudlets provide low-latency compute power to nearby mobile users, but resources are strictly finite. We design an incentive-compatible truthful double auction mechanism that maximizes cloudlet social welfare while preventing price collusion.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 46,
    title: "Protecting Location Privacy for Task Allocation in Ad Hoc Mobile Cloud Computing",
    domain: "Location Privacy",
    category: "Mobile Computing",
    tech: ["Java", "Differential Privacy", "Task Allocation", "Mobile Ad-Hoc"],
    description: "A location-privacy-preserving task allocation protocol for ad-hoc mobile cloud systems that obfuscates user coordinates during crowdsourcing.",
    abstract: "Assigning spatial tasks to nearby mobile workers risks exposing worker home locations. This project introduces a geo-indistinguishability perturbation mechanism that assigns spatial tasks efficiently while preserving worker location anonymity.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 47,
    title: "On the Security of a Privacy-Aware Authentication Scheme for Distributed Mobile Cloud Computing Services",
    domain: "Mobile Cloud Security",
    category: "Mobile Computing",
    tech: ["Java", "Cryptographic Protocols", "Elliptic Curve Cryptography", "Auth"],
    description: "A robust and lightweight mutual authentication protocol resolving vulnerabilities in distributed mobile cloud service handshakes.",
    abstract: "Mobile cloud computing requires rapid, untraceable mutual authentication between roaming devices and distributed cloud service providers. We design an improved ECC-based authentication protocol resistant to user impersonation and replay attacks.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 48,
    title: "Providing Task Allocation and Secure Deduplication for Mobile Crowd sensing via Fog Computing",
    domain: "Crowdsensing & Fog Computing",
    category: "Mobile Computing",
    tech: ["Java", "Fog Computing", "Secure Deduplication", "Crowdsensing"],
    description: "A fog-assisted mobile crowdsensing framework that coordinates spatial task distribution and eliminates duplicate encrypted sensory report uploads.",
    abstract: "Mobile crowdsensing generates high volumes of redundant encrypted reports that strain wireless bandwidth. We construct a fog computing layer performing ciphertext deduplication and reputation-aware task assignment without decrypting raw data.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 49,
    title: "A Distributed Truthful Auction Mechanism for Task Allocation in Mobile Cloud Computing",
    domain: "Mobile Task Allocation",
    category: "Mobile Computing",
    tech: ["Java", "Distributed Auction", "Mechanism Design", "CloudSim"],
    description: "A decentralized auction protocol where autonomous mobile nodes bid for distributed compute workloads with guaranteed truthfulness and individual rationality.",
    abstract: "Centralized resource allocators in mobile clouds suffer from single-point bottlenecks. We implement a distributed truthful auction algorithm allowing mobile nodes to discover peers, submit computational bids, and settle task allocations autonomously.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },

  // --- SECURE COMPUTING IEEE PROJECTS (50 - 57) ---
  {
    id: 50,
    title: "Secure Range Search over Encrypted Uncertain IoT Outsourced Data",
    domain: "IoT & Searchable Encryption",
    category: "Secure Computing",
    tech: ["Java", "Searchable Encryption", "IoT Data", "Order-Preserving Hash"],
    description: "A searchable encryption scheme enabling multi-dimensional range queries over encrypted and noisy IoT sensory streams stored on untrusted cloud servers.",
    abstract: "IoT devices collect continuous uncertain sensor readings that must be encrypted before cloud storage. This project develops an asymmetric order-revealing encryption structure allowing range searches over encrypted IoT readings without data leakage.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 51,
    title: "A secure client-side framework for protecting the privacy of health data stored on the cloud",
    domain: "Healthcare Cloud Security",
    category: "Secure Computing",
    tech: ["Java", "Client-Side Encryption", "AES-256 / RSA", "EHR Cloud"],
    description: "A zero-trust client-side encryption framework ensuring patient electronic health records (EHR) remain strictly confidential from cloud host administrators.",
    abstract: "Hosting medical records on public clouds raises serious HIPAA compliance issues. We develop a client-side cryptographic middleware that shards and encrypts patient EHR data locally before uploading, enforcing granular role-based doctor access keys.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 52,
    title: "Secure and Sustainable Load Balancing of Edge Data Centers in Fog Computing",
    domain: "Fog Computing Security",
    category: "Secure Computing",
    tech: ["Java", "Load Balancing", "Green Computing", "Fog Simulator"],
    description: "A secure and energy-aware workload distribution model balancing computational jobs across green edge data centers in fog networks.",
    abstract: "Edge data centers operate on limited renewable energy budgets. This project implements a secure load balancing protocol that distributes encrypted tasks across edge servers while minimizing brown energy consumption and preventing DDoS congestion.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 53,
    title: "Research on Key Combination Management System Based on Identity Authentication",
    domain: "Identity & Key Management",
    category: "Secure Computing",
    tech: ["Java", "Identity-Based Cryptography", "Key Management", "J2EE"],
    description: "A centralized key management architecture combining digital identity certificates with dynamic session key derivation protocols.",
    abstract: "Managing enterprise cryptographic keys across thousands of distributed endpoints is notoriously complex. We design an identity-based key combination management system that automates key generation, revocation, and secure escrow.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 54,
    title: "Efficient Traceable Authorization Search System for Secure Cloud Storage",
    domain: "Cloud Security & Traceability",
    category: "Secure Computing",
    tech: ["Java", "Traceable Search", "Attribute-Based Encryption", "MySQL"],
    description: "An authorized cloud keyword search scheme that traces malicious users who secretly leak search trapdoors to unauthorized third parties.",
    abstract: "Searchable encryption allows authorized users to query encrypted cloud data, but users may illegally share secret trapdoors. This project implements a traceable authorization search system that extracts the leaker's identity from compromised search keys.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 55,
    title: "Comments on “SPAM: A Secure Password Authentication Mechanism for Seamless Handover in Proxy Mobile IPv6 Networks”",
    domain: "Network Security & IPv6",
    category: "Secure Computing",
    tech: ["Java", "PMIPv6 Protocols", "Cryptanalysis", "Socket Simulation"],
    description: "A security analysis and fortified authentication mechanism preventing man-in-the-middle exploits during rapid PMIPv6 mobile handovers.",
    abstract: "Seamless wireless handovers in Proxy Mobile IPv6 networks require ultra-fast authentication. We analyze vulnerabilities in the original SPAM protocol and propose an improved zero-knowledge authentication handshake resistant to replay and forgery attacks.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 56,
    title: "On the Challenges in Designing Identity-Based Privacy-Preserving Authentication Schemes for Mobile Devices",
    domain: "Mobile Authentication",
    category: "Secure Computing",
    tech: ["Java", "Identity Authentication", "Anonymity Protocols", "ECC"],
    description: "A privacy-preserving identity authentication protocol addressing computational constraints and key-escrow limitations on mobile devices.",
    abstract: "Identity-based cryptography eliminates digital certificate overhead on resource-constrained mobile phones. This project implements a pairing-free identity-based authentication scheme ensuring untraceable mobile user privacy.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 57,
    title: "Anonymous and Traceable Group Data Sharing in Cloud Computing",
    domain: "Group Sharing & Traceability",
    category: "Secure Computing",
    tech: ["Java", "Group Signatures", "Dynamic Revocation", "Cloud Storage"],
    description: "A multi-user secure cloud collaboration system providing anonymous document sharing within groups while retaining group manager traceability.",
    abstract: "Collaborative teams sharing encrypted files on public clouds require anonymity against fellow members and the cloud provider. We implement ring signatures with group manager tracing capabilities to enable secure anonymous multi-user cloud sharing.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },

  // --- CLOUD COMPUTING TOPICS (58 - 69) ---
  {
    id: 58,
    title: "An Efficient Multi-User Searchable Encryption Scheme without Query Transformation over Outsourced Encrypted Data",
    domain: "Cloud Encryption",
    category: "Cloud Computing",
    tech: ["Java", "Multi-User Searchable Encryption", "Cloud Storage", "AES/RSA"],
    description: "A multi-user searchable encryption protocol eliminating server-side query transformation bottlenecks over outsourced cloud ciphertexts.",
    abstract: "Traditional multi-user searchable encryption requires the cloud server to transform search queries using expensive proxy re-encryption. This project introduces a lightweight key-derivation structure allowing direct multi-user keyword searching.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 59,
    title: "An Efficient Ranked Multi-Keyword Search for Multiple Data Owners Over Encrypted Cloud Data",
    domain: "Searchable Encryption",
    category: "Cloud Computing",
    tech: ["Java", "Ranked Keyword Search", "Vector Space Model", "Cloud Security"],
    description: "A secure multi-keyword ranked retrieval engine allowing users to query encrypted files uploaded by multiple independent data owners.",
    abstract: "Multi-owner cloud environments require reconciling diverse document encryption keys. We design a unified coordinate matching and secure inner-product computation scheme that ranks multi-owner encrypted search results accurately.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 60,
    title: "Efficient Traceable Authorization Search system cloud storage",
    domain: "Traceable Cloud Storage",
    category: "Cloud Computing",
    tech: ["Java", "Access Control Matrix", "Audit Logging", "Cloud Server"],
    description: "A scalable enterprise cloud authorization protocol that verifies user search permissions and records immutable forensic query audit trails.",
    abstract: "Preventing unauthorized insider searches on corporate cloud repositories is vital for compliance. We build an authorization search engine that enforces time-limited access tokens and provides verifiable search logging.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 61,
    title: "Provably secure and lightweight identity-based authenticated data sharing protocol for cyber-physical cloud environment",
    domain: "Cyber-Physical Cloud",
    category: "Cloud Computing",
    tech: ["Java", "Cyber-Physical Systems", "Identity Authentication", "Lightweight Crypto"],
    description: "A lightweight authenticated data sharing protocol designed for resource-constrained industrial IoT devices connected to cloud control platforms.",
    abstract: "Cyber-physical industrial clouds require rapid sensory data authentication without high compute latency. We construct a provably secure identity-based data exchange protocol using lightweight elliptic curve cryptography.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 62,
    title: "SEPDP Secure and Efficient Privacy Preserving Provable Data Possession in Cloud Storage",
    domain: "Cloud Data Auditing",
    category: "Cloud Computing",
    tech: ["Java", "Provable Data Possession", "Homomorphic Authenticators", "Cloud"],
    description: "A privacy-preserving remote data integrity auditing scheme allowing third-party auditors to verify cloud file possession without downloading files.",
    abstract: "Clients must periodically verify that cloud servers have not corrupted or deleted archived data. SEPDP applies homomorphic verifiable tags to perform zero-knowledge integrity audits across massive cloud file archives.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 63,
    title: "Towards Privacy-Preserving Content-Based Image Retrieval in Cloud Computing",
    domain: "Cloud Image Retrieval",
    category: "Cloud Computing",
    tech: ["Java", "Encrypted Image Retrieval", "Visual Feature Extraction", "Cloud"],
    description: "A secure content-based image retrieval (CBIR) framework executing encrypted color and texture similarity queries directly over cloud photo repositories.",
    abstract: "Outsourcing image collections to public clouds risks visual privacy. This project extracts local visual feature vectors, encrypts them using secure distance-preserving hashes, and allows cloud servers to rank image similarity without decrypting images.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 64,
    title: "Efficient Client-Side Reduplication of Encrypted Data with Public Auditing in Cloud Storage",
    domain: "Cloud Deduplication",
    category: "Cloud Computing",
    tech: ["Java", "Convergent Encryption", "Public Auditing", "Deduplication"],
    description: "A cross-user client-side deduplication protocol eliminating redundant ciphertext storage while supporting third-party data possession auditing.",
    abstract: "Cloud storage providers save petabytes by eliminating duplicate files, but deduplication over encrypted data is difficult. We combine convergent encryption and randomized challenge auditing to achieve secure client-side deduplication.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 65,
    title: "Efficient Retrieval over Documents Encrypted by Attributes in Cloud Computing",
    domain: "Attribute-Based Encryption",
    category: "Cloud Computing",
    tech: ["Java", "CP-ABE", "Keyword Search", "Access Control Tree"],
    description: "A fine-grained ciphertext-policy attribute-based encryption (CP-ABE) scheme integrating fast keyword search over access-controlled cloud documents.",
    abstract: "Access-controlled cloud files traditionally require trial decryption to identify relevant documents. We integrate attribute-based encryption with searchable indices, enabling users matching the access policy to search and retrieve matching documents efficiently.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 66,
    title: "Privacy-Preserving Search Over Encrypted Personal Health Record In Multi-Source Cloud",
    domain: "Multi-Source Cloud Health",
    category: "Cloud Computing",
    tech: ["Java", "Multi-Source Cloud", "PHR Encryption", "Medical Queries"],
    description: "A federated searchable encryption protocol for searching encrypted personal health records aggregated across disparate hospital cloud repositories.",
    abstract: "Personal health records scattered across multiple hospital clouds complicate unified medical querying. This project designs a federated multi-source searchable encryption pipeline allowing authorized medical specialists to query aggregate patient histories securely.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 67,
    title: "Combining Data Owner-Side and Cloud-Side Access Control for Encrypted Cloud Storage",
    domain: "Cloud Access Control",
    category: "Cloud Computing",
    tech: ["Java", "Dual Access Control", "Hybrid Encryption", "Cloud Middleware"],
    description: "A dual-layer access control architecture combining owner-defined cryptographic permissions and cloud-enforced dynamic role policies.",
    abstract: "Relying solely on cloud servers for access control risks insider attacks, while relying solely on owner encryption limits dynamic user revocation. We construct a hybrid access management framework combining owner ciphertext keys and cloud-side token validation.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
  {
    id: 68,
    title: "Publicly Verifiable Boolean Query Over Outsourced Encrypted Data",
    domain: "Encrypted Query Processing",
    category: "Cloud Computing",
    tech: ["Java", "Boolean Queries", "Verifiable Computation", "Cryptographic Accumulator"],
    description: "A verifiable searchable encryption scheme supporting complex Boolean (AND, OR, NOT) search expressions with cryptographic proof of query correctness.",
    abstract: "Untrusted cloud servers may return incomplete or tampered search results to save computational power. We design a verifiable Boolean query engine using cryptographic accumulators that proves result completeness and authenticity to the querying client.",
    year: "2021 - 2022",
    difficulty: "Advanced",
  },
  {
    id: 69,
    title: "Normal cloud model-based algorithm for multi-attribute trusted cloud service selection",
    domain: "Cloud Service Selection",
    category: "Cloud Computing",
    tech: ["Java", "Cloud Model Theory", "QoS Evaluation", "Trust Metrics"],
    description: "A multi-attribute decision algorithm utilizing normal cloud model probability theory to evaluate subjective and objective trust in cloud service providers.",
    abstract: "Selecting reliable cloud providers involves assessing ambiguous Quality of Service (QoS) metrics. This project implements a normal cloud model algorithm that transforms qualitative user feedback and quantitative network performance into unified provider trust scores.",
    year: "2021 - 2022",
    difficulty: "Intermediate",
  },
];

const yearNavigationLinks = [
  { label: "IEEE Java Projects 2024 - 2025", path: "/2024-2025-java-ieee-projects" },
  { label: "IEEE Java Projects 2022 - 2023", path: "/2022-2023-java-ieee-projects" },
  { label: "IEEE Java Projects 2021 - 2022", path: "/java-ieee-projects-2021-2022-in-chennai", active: true },
  { label: "IEEE Java Projects 2020 - 2021", path: "/java-ieee-projects-2020-2021-in-chennai" },
  { label: "IEEE Java Projects 2019 - 2020", path: "/java-ieee-projects-2019-2020-in-chennai" },
  { label: "IEEE Java Projects 2018 - 2019", path: "/java-ieee-projects-2018-2019-in-chennai" },
  { label: "IEEE Java Projects 2017 - 2018", path: "/java-ieee-projects-2017-2018-in-chennai" },
  { label: "IEEE Java Projects 2016 - 2017", path: "/java-ieee-projects-2016-2017-in-chennai" },
  { label: "IEEE Java Projects 2015 - 2016", path: "/java-ieee-projects-2015-2016-in-chennai" },
  { label: "IEEE Java Projects 2014 - 2015", path: "/java-ieee-projects-2014-2015-in-chennai" },
  { label: "IEEE Java Projects 2013 - 2014", path: "/java-ieee-projects-2013-2014-in-chennai" },
];

const domainCategories = [
  { label: "All Domains", value: "All", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
  { label: "General Java", value: "General Java", icon: <CodeIcon sx={{ fontSize: 18 }} /> },
  { label: "Real-Time Dataset", value: "Real-Time Dataset", icon: <StorageIcon sx={{ fontSize: 18 }} /> },
  { label: "API Function", value: "API Function", icon: <ApiIcon sx={{ fontSize: 18 }} /> },
  { label: "Mobile Computing", value: "Mobile Computing", icon: <PhoneAndroidIcon sx={{ fontSize: 18 }} /> },
  { label: "Secure Computing", value: "Secure Computing", icon: <SecurityIcon sx={{ fontSize: 18 }} /> },
  { label: "Cloud Computing", value: "Cloud Computing", icon: <CloudIcon sx={{ fontSize: 18 }} /> },
];

export default function JavaProjects2021() {
  const [projectsList, setProjectsList] = useState(projects2021Data);
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
    projectRequirements: "IEEE Projects",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?year=2021 - 2022`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "General Java",
              category: item.category || "General Java",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["Java", "MySQL"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2021 - 2022",
              difficulty: item.difficulty || "Intermediate",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2021-2022 projects");
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
          message: "Enquiry from Java Projects 2021-2022 Page",
          status: "New"
        })
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
        academicYear: "2021 - 2022",
        projectRequirements: "IEEE Projects",
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
        
        {/* Background Ambient Glows & Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff8200] rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00a8cc] rounded-full blur-[140px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px]"></div>
        </div>

        <div className="max-w-[1360px] mx-auto px-4 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-4">
            <Link to="/" className="hover:text-[#ff8200] transition-colors !no-underline text-slate-300">Home</Link>
            <span>/</span>
            <span className="text-slate-400">IEEE Projects</span>
            <span>/</span>
            <span className="text-[#ff8200] font-semibold">2021 - 2022 Java IEEE Projects</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Content Column */}
            <div className="flex-1 max-w-2xl text-left">
              
              {/* 3D Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffaa40] text-xs font-bold uppercase tracking-wider mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <VerifiedIcon sx={{ fontSize: 16 }} className="text-[#ffaa40]" />
                <span>2021 - 2022 IEEE Transactions Approved</span>
              </div>

              {/* Page Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-4 drop-shadow-md">
                2021 - 2022 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#ffaa00]">JAVA IEEE</span> PROJECTS
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-xl">
                Explore our carefully curated selection of 2021 - 2022 IEEE Java projects. Built across Real-Time Datasets, Twitter/Flickr APIs, Mobile Edge Computing, and Cloud Encryption with complete verified source code, base papers, and 1-on-1 Viva guidance in Chennai.
              </p>

              {/* 3D Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects-2021-catalog"
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] hover:brightness-110 text-white px-7 py-3.5 rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_8px_25px_rgba(255,130,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-98 !no-underline"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Browse 69 Project Titles</span>
                    <ArrowForwardIcon sx={{ fontSize: 18 }} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                </a>
                <a
                  href="https://wa.me/917299951536?text=Hi,%20I%20am%20looking%20for%202021-2022%20Java%20IEEE%20Projects."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] hover:brightness-110 text-white px-7 py-3.5 rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_8px_25px_rgba(16,185,129,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-98 !no-underline"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <WhatsAppIcon sx={{ fontSize: 19 }} />
                    <span>WhatsApp Live Demo</span>
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Round Brand Orbs */}
            <div className="w-full lg:w-auto flex-1 flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-5 sm:gap-6 w-full max-w-[480px]">
                <RoundTechOrb
                  name="Core Java"
                  icon={<JavaIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-orange-500/50 via-amber-500/20 to-transparent"
                  ringColor="border-orange-400/50"
                  shadowColor="rgba(234,88,12,0.45)"
                  labelColor="text-orange-300"
                  duration={3.6}
                  delay={0}
                />
                <RoundTechOrb
                  name="J2EE / Web"
                  icon={<WebIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-sky-500/50 via-cyan-500/20 to-transparent"
                  ringColor="border-sky-400/50"
                  shadowColor="rgba(2,132,199,0.45)"
                  labelColor="text-cyan-300"
                  duration={4.2}
                  delay={0.3}
                />
                <RoundTechOrb
                  name="Security"
                  icon={<SecurityLockIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-emerald-500/50 via-teal-500/20 to-transparent"
                  ringColor="border-emerald-400/50"
                  shadowColor="rgba(16,185,129,0.45)"
                  labelColor="text-emerald-300"
                  duration={3.8}
                  delay={0.6}
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
                  glowGradient="from-lime-500/50 via-green-500/20 to-transparent"
                  ringColor="border-lime-400/50"
                  shadowColor="rgba(132,204,22,0.45)"
                  labelColor="text-lime-300"
                  duration={3.5}
                  delay={0.2}
                />
                <RoundTechOrb
                  name="Data Mining"
                  icon={<AiChipIcon className="w-12 h-12 sm:w-14 sm:h-14" />}
                  glowGradient="from-purple-500/50 via-indigo-500/20 to-transparent"
                  ringColor="border-purple-400/50"
                  shadowColor="rgba(147,51,234,0.45)"
                  labelColor="text-purple-300"
                  duration={4.0}
                  delay={0.7}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Main Body */}
      <div className="max-w-[1360px] mx-auto px-4 lg:px-8 py-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT COLUMN (8 COLS) ================= */}
          <div className="lg:col-span-8 flex flex-col space-y-7" id="projects-2021-catalog">
            
            {/* 3D Year Selector Matrix */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff8200] shadow-[0_0_8px_rgba(255,130,0,0.8)]" />
                  IEEE Java Project Years
                </h3>
                <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-2.5 py-1 rounded-full">
                  12 Years Available
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {yearNavigationLinks.map((yr, idx) => {
                  const isCurrent = yr.active;
                  return (
                    <Link
                      key={idx}
                      to={yr.path}
                      className={`px-3.5 py-2.5 text-xs sm:text-[13px] font-bold rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-1.5 border !no-underline ${
                        isCurrent
                          ? "bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] text-white shadow-[0_4px_14px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] border-amber-300/40 scale-[1.02]"
                          : "bg-slate-50/90 hover:bg-white text-slate-700 hover:text-[#ff8200] border-slate-200 hover:border-orange-200 shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
                      }`}
                    >
                      <span>{yr.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Search & Domain Filter Control Station */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-200/80 space-y-5 relative overflow-hidden">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#0284c7]" />

              {/* Top Row: Search Input + Segmented View Switcher */}
              <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center justify-between">
                <div className="relative flex-1 group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-orange-500/10 text-[#ff8200] flex items-center justify-center transition-colors group-focus-within:bg-[#ff8200] group-focus-within:text-white pointer-events-none">
                    <SearchIcon sx={{ fontSize: 18 }} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search 2021-2022 Java projects by title, domain, or technology..."
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

              {/* Domain Filter Section */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                    Research Domain
                  </span>
                  {activeCategory !== "All" && (
                    <button
                      onClick={() => setActiveCategory("All")}
                      className="text-xs font-bold text-[#ff8200] hover:text-[#e06d00] hover:underline cursor-pointer transition-colors"
                    >
                      Show All Domains ✕
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {domainCategories.map((cat, index) => {
                    const isSelected = activeCategory === cat.value;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(cat.value)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                          isSelected
                            ? "bg-gradient-to-r from-[#001733] via-[#002855] to-[#003875] text-white border-[#002855] shadow-[0_3px_12px_rgba(0,40,85,0.35)] scale-[1.02]"
                            : "bg-slate-50 hover:bg-white text-slate-700 hover:text-[#ff8200] border-slate-200 hover:border-orange-300 shadow-2xs hover:-translate-y-0.5"
                        }`}
                      >
                        {cat.icon}
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Filter Clear Banner */}
              {(activeCategory !== "All" || searchQuery) && (
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-500 bg-slate-50/80 px-4 py-2 rounded-xl border border-slate-200/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Filters active ({filteredProjects.length} matches found)
                  </span>
                  <button
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchQuery("");
                    }}
                    className="text-[#ff8200] hover:underline font-black cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            {/* List Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#1e3a5f] uppercase tracking-tight flex items-center gap-2">
                  <span>IEEE JAVA PROJECT LIST 2021-2022</span>
                  <span className="text-xs bg-orange-100 text-[#ff8200] font-extrabold px-2.5 py-0.5 rounded-full border border-orange-200">
                    {filteredProjects.length} Titles
                  </span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Click "View Abstract" to view complete project summary and architecture</p>
              </div>
            </div>

            {/* ================= TABLE VIEW ================= */}
            {viewMode === "table" && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="bg-gradient-to-r from-[#0a2347] via-[#0f2d59] to-[#14376b] p-4 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                      <span>IEEE Java Project List 2021-2022</span>
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">Click "View Abstract" to view complete project summary and architecture</p>
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
                        <th className="p-3.5">Project Title & Domain</th>
                        <th className="p-3.5 hidden md:table-cell">Technologies</th>
                        <th className="p-3.5 text-center w-48">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredProjects.map((proj, idx) => (
                        <tr
                          key={proj.id}
                          className="hover:bg-orange-50/40 transition-colors group"
                        >
                          <td className="p-3.5 text-center whitespace-nowrap">
                            <div className="flex items-center justify-center gap-2">
                              <span className="font-extrabold text-xs text-slate-400 group-hover:text-[#ff8200] w-6">
                                #{idx + 1}
                              </span>
                              <ProgramAvatar tech={proj.tech} title={proj.title} size="sm" />
                            </div>
                          </td>
                          <td className="p-3.5">
                            <div className="flex flex-col gap-1.5">
                              <Link
                                to={`/project/${proj.id}`}
                                className="font-bold text-slate-900 text-[14px] group-hover:text-[#ff8200] transition-colors leading-snug cursor-pointer !no-underline"
                              >
                                {proj.title}
                              </Link>
                              <div className="flex items-center gap-2">
                                <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-100">
                                  {proj.domain}
                                </span>
                                <span className="text-[11px] text-slate-400 font-medium">
                                  Year: <strong className="text-slate-600">2021 - 2022</strong>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="p-3.5 hidden md:table-cell">
                            <ProgramTechBadges tech={proj.tech} />
                          </td>
                          <td className="p-3.5 text-center whitespace-nowrap">
                            <div className="flex items-center justify-center gap-2">
                              <Link
                                to={`/project/${proj.id}`}
                                className="px-3 py-1.5 bg-[#0a2347] hover:bg-[#14376b] text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:scale-105 active:scale-95 !no-underline flex items-center gap-1"
                              >
                                <span>Details</span>
                                <ArrowForwardIcon sx={{ fontSize: 13 }} />
                              </Link>
                              <button
                                onClick={() => setSelectedProject(proj)}
                                className="px-3.5 py-1.5 bg-gradient-to-r from-[#ff8200] to-[#f97316] hover:brightness-110 text-white text-xs font-bold rounded-xl transition-all shadow-[0_2px_8px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
                              >
                                Abstract
                              </button>
                              <button
                                onClick={() => handleCopyTitle(proj)}
                                className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                                title="Copy Title"
                              >
                                {copiedId === proj.id ? (
                                  <CheckIcon sx={{ fontSize: 16 }} className="text-green-600" />
                                ) : (
                                  <ContentCopyIcon sx={{ fontSize: 16 }} />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {filteredProjects.length === 0 && (
                        <tr>
                          <td colSpan="4" className="p-8 text-center text-slate-500">
                            No projects match your search criteria. Try a different search query or category filter.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ================= GRID VIEW ================= */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProjects.map((proj, idx) => (
                  <div
                    key={proj.id}
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
                          #{idx + 1}
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-[15.5px] sm:text-base mb-2 group-hover:text-[#ff8200] transition-colors leading-snug">
                        <Link to={`/project/${proj.id}`} className="text-inherit hover:text-[#ff8200] !no-underline cursor-pointer">
                          {proj.title}
                        </Link>
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3.5">
                        {proj.description}
                      </p>

                      <div className="pt-2.5 border-t border-slate-100 mb-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Technologies:</span>
                        <ProgramTechBadges tech={proj.tech} />
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <Link
                        to={`/project/${proj.id}`}
                        className="px-3 py-2.5 bg-[#0a2347] hover:bg-[#14376b] text-white text-xs font-bold rounded-xl transition-all text-center shadow-xs hover:scale-102 active:scale-98 !no-underline flex items-center justify-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowForwardIcon sx={{ fontSize: 13 }} />
                      </Link>
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="flex-1 py-2.5 bg-gradient-to-r from-[#ff8200] to-[#f97316] hover:brightness-110 text-white text-xs font-bold rounded-xl transition-all text-center shadow-[0_2px_8px_rgba(255,130,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-102 active:scale-98 cursor-pointer"
                      >
                        View Full Abstract
                      </button>
                      <button
                        onClick={() => handleCopyTitle(proj)}
                        className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                        title="Copy Title"
                      >
                        {copiedId === proj.id ? (
                          <CheckIcon sx={{ fontSize: 16 }} className="text-green-600" />
                        ) : (
                          <ContentCopyIcon sx={{ fontSize: 16 }} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ================= ABOUT JAVA PROJECT SECTION ================= */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-8">
              
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-[#ff8200] text-xs font-extrabold uppercase tracking-wider mb-3">
                  ABOUT JAVA PROJECT
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e3a5f] leading-tight mb-4">
                  2021 - 2022 Java IEEE Projects Overview
                </h2>
                
                <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                  <strong>IEEE Project Centre</strong>, a hub of technological exploration, where we proudly present our carefully curated selection of 2021-2022 Java projects. As a leader in project-based education, we extend a warm invitation to students and professionals to dive into the dynamic world of Java programming within the 2021-2022 timeframe. Our projects are meticulously designed to provide more than theoretical knowledge; they offer a hands-on platform for learning and practical application.
                </p>

                <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                  Whether you’re an aspiring developer or an experienced programmer, our 2021-2022 Java projects offer a unique opportunity to refine your skills, learn industry best practices, and create impactful solutions. Collaborate with our team of experts and industry professionals to unlock the full potential of Java programming. At IEEE Project Centre, we’re dedicated to delivering a transformative learning experience through our Java projects. Join us in exploring the possibilities of Java in the context of 2021-2022 and unlock your potential in the ever-evolving world of programming innovation.
                </p>

                <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                  Java Platform, Enterprise Edition or Java is a Broadly Utilized Figuring Stage for Advancement and Organization of Big Business Programming (System And Web Services). IEEE Provides 2021 2022 Java IEEE Projects Was Once in the Past Known as Java 2 Platform, Enterprise Edition or J2EE. The Stage Utilizes the Protest Arranged Java Programming Dialect. It is a Piece of the Java Programming Stage Family. Java EE Expands the Java Platform, Standard Edition (Java SE), Providing an API for Protest Social Mapping, Disseminated and Multitier Structures, and Web Administrations.
                </p>

                <p className="text-slate-700 text-sm leading-relaxed text-justify">
                  The Stage Consolidates a Plan Construct To a Great Extent With Respect to Measured Parts Running on an Application Server. <strong>Java Project Centers in Chennai</strong> the Stage Underscores Tradition over Setup and Comments for Arrangement. Alternatively, XML can be Utilized to Abrogate Explanations or to Digress from the Stage Defaults.
                </p>
              </div>

              {/* Tools & Web Servers Bento Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#1e3a5f] text-white">
                <div className="flex items-center gap-2 mb-3 text-[#ffaa40]">
                  <SettingsSuggestIcon sx={{ fontSize: 24 }} />
                  <h3 className="text-lg font-bold uppercase tracking-wide">Apparatuses And Web Servers</h3>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  Apparatuses and Web Servers Apparatuses are <strong>Net Beans</strong> and <strong>Eclipse</strong>. At That Point Web Servers, for Example, <strong>Tomcat</strong> and <strong>Glass Fish</strong> and <strong>MySQL 5.5</strong> Is Utilized as Backend for Java.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/10">
                  <div className="p-3 bg-white/10 rounded-xl text-center">
                    <span className="text-xs text-[#ffaa40] font-bold block">IDE</span>
                    <span className="text-sm font-semibold">NetBeans / Eclipse</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl text-center">
                    <span className="text-xs text-[#ffaa40] font-bold block">Servers</span>
                    <span className="text-sm font-semibold">Apache Tomcat</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl text-center">
                    <span className="text-xs text-[#ffaa40] font-bold block">App Server</span>
                    <span className="text-sm font-semibold">GlassFish</span>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl text-center">
                    <span className="text-xs text-[#ffaa40] font-bold block">Database</span>
                    <span className="text-sm font-semibold">MySQL 5.5 / 8.0</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDEBAR (4 COLS) ================= */}
          <div className="lg:col-span-4 sticky top-6 space-y-6">
            
            {/* 3D Reach Us Card */}
            <div className="bg-white rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.06)] border border-slate-200 overflow-hidden" id="enquiry-form-card">
              
              <div className="bg-gradient-to-r from-[#ff8200] via-[#ff9500] to-[#f97316] p-4 text-white text-center shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4)]">
                <h3 className="text-lg font-black tracking-wide uppercase">Reach Us</h3>
                <p className="text-xs text-orange-100 font-medium mb-0">Get 2021-2022 Java Project Documentation</p>
              </div>

              <form onSubmit={handleFormSubmit} className="p-5 space-y-3.5">
                
                {submitted && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-xl text-xs font-medium flex items-center gap-2">
                    <CheckCircleIcon sx={{ fontSize: 18 }} className="text-emerald-600 shrink-0" />
                    <span>Thank you! Your enquiry has been received. Our technical team will reach out shortly.</span>
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
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wider">Academic Year</label>
                  <select
                    value={formData.academicYear}
                    onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-[#ff8200] transition-colors"
                  >
                    <option value="2021 - 2022">2021 - 2022</option>
                    <option value="2022 - 2023">2022 - 2023</option>
                    <option value="2023 - 2024">2023 - 2024</option>
                    <option value="2024 - 2025">2024 - 2025</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wider">Project Type</label>
                  <select
                    value={formData.projectRequirements}
                    onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-2 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-[#ff8200] transition-colors"
                  >
                    <option value="IEEE Projects">IEEE Projects</option>
                    <option value="Application Projects">Application Projects</option>
                    <option value="Final Year Projects">Final Year Projects</option>
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
                  Send Message
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
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Senior Technical Advisor</span>
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

      {/* ================= ABSTRACT MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="bg-gradient-to-r from-[#0a2347] via-[#0f2d59] to-[#14376b] text-white p-5 flex items-start justify-between">
                <div className="pr-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-500/20 text-[#ffaa40] text-xs font-bold uppercase tracking-wider mb-2 border border-orange-400/30">
                    {selectedProject.domain}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <CloseIcon sx={{ fontSize: 20 }} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm">
                <div>
                  <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-1">Project Abstract</h4>
                  <p className="leading-relaxed text-justify bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-2">Technologies & Architecture</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1e3a5f] font-semibold text-xs border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Need Base Paper & Full Source Code?</span>
                    <span className="text-[11px] text-slate-600">Connect with our coordinator for instant project download.</span>
                  </div>
                  <a
                    href={`https://wa.me/917299951536?text=Hi,%20I%20am%20interested%20in%20the%202021-2022%20project:%20${encodeURIComponent(selectedProject.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-gradient-to-r from-[#10b981] to-[#059669] hover:brightness-110 text-white text-xs font-bold rounded-xl shadow-[0_4px_14px_rgba(16,185,129,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all whitespace-nowrap !no-underline flex items-center gap-1.5"
                  >
                    <WhatsAppIcon sx={{ fontSize: 16 }} />
                    <span>Get Base Paper</span>
                  </a>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/project/${selectedProject.id}`}
                  className="px-4 py-2 bg-[#ff8200] hover:bg-[#e06d00] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 !no-underline shadow-sm"
                >
                  <span>Open Full Project Page</span>
                  <ArrowForwardIcon sx={{ fontSize: 14 }} />
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
