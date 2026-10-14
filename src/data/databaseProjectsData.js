// IEEE Database Projects (SQLite, MongoDB, PostgreSQL) Master Dataset & Bridge
import { API_BASE } from "../api";

export const dbFrameworkLinks = [
  {
    slug: "sqlite",
    name: "SQLite Projects",
    path: "/sqlite-project-center-in-chennai",
    badge: "Embedded & Zero-Config RDBMS",
    tagline: "Ultra-Lightweight, Self-Contained Serverless Relational Database",
    color: "from-blue-600 to-cyan-600",
    accent: "blue",
  },
  {
    slug: "mongodb",
    name: "MongoDB Projects",
    path: "/mongodb-project-center-in-chennai",
    badge: "NoSQL & Document Database",
    tagline: "High-Performance, Horizontally Scalable JSON/BSON Data Architecture",
    color: "from-emerald-600 to-teal-600",
    accent: "emerald",
  },
  {
    slug: "postgresql",
    name: "PostgreSQL Projects",
    path: "/postgresql-project-center-in-chennai",
    badge: "Enterprise Object-Relational RDBMS",
    tagline: "Advanced SQL, JSONB, Spatial PostGIS & High-Concurrency Systems",
    color: "from-indigo-600 to-blue-700",
    accent: "indigo",
  },
];

export const databaseProjects = [
  {
    id: 1,
    title: "A System to Filter Unwanted Messages from OSN User Walls",
    domain: "Social Networks & Wall Filtering",
    category: "Online Social Networks & Content Filtering",
    tech: {
      sqlite: ["Python / Android", "SQLite3 (FTS5)", "Rule-Based Machine Learning", "Content Filtering"],
      mongodb: ["Node.js / Express", "MongoDB (Text Indexing)", "Aggregation Pipeline", "OSN Wall Moderation"],
      postgresql: ["Python / Django", "PostgreSQL (pg_trgm & Full-Text Search)", "GIN Indexes", "Wall Security Filter"],
    },
    description: "An automated message filtering system using machine learning classification and customizable user wall rule sets.",
    abstract: "Online Social Networks (OSNs) allow users direct interaction by posting messages on public walls. However, malicious or unwanted messages can degrade user experience. We present an automated content filtering framework that combines Short Text Classification (STC) with user-defined Rule-Based Content Filtering (RBCF) stored and indexed efficiently across database engines.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 2,
    title: "Sensitive Label Privacy Protection on Social Network Data",
    domain: "Data Privacy & Graph Anonymization",
    category: "Privacy Preservation & Security",
    tech: {
      sqlite: ["Python", "SQLite3", "l-diversity & k-degree Anonymization", "Graph Privacy"],
      mongodb: ["Node.js", "MongoDB", "Document-level Field Masking", "Sensitive Node Redaction"],
      postgresql: ["Python / FastAPI", "PostgreSQL (Row-Level Security)", "Differential Privacy", "Graph Analytics"],
    },
    description: "A graph anonymization model guarding sensitive user attribute labels while preserving structural topological utility for analytics.",
    abstract: "Publishing social network graphs without redacting sensitive node labels compromises individual privacy. We develop an anonymization system incorporating l-diversity and sensitive label protection algorithms that modify vertex linkage minimally while shielding sensitive node attributes against neighborhood re-identification attacks.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 3,
    title: "A Generalized Flow-Based Method for Analysis of Implicit Relationships on Wikipedia",
    domain: "Knowledge Graphs & Implicit Link Analytics",
    category: "Information Retrieval & Web Mining",
    tech: {
      sqlite: ["Python", "SQLite3 Graph Store", "Maximum Flow / Min-Cut", "Implicit Link Mining"],
      mongodb: ["Node.js", "MongoDB GraphLookup", "BSON Entity Graph", "Network Flow Analytics"],
      postgresql: ["Python", "PostgreSQL (Recursive CTEs & Apache AGE)", "Ford-Fulkerson Algorithm", "Wikipedia Graph"],
    },
    description: "A generalized maximum flow calculation model quantifying non-trivial and implicit semantic connections across Wikipedia entities.",
    abstract: "Uncovering latent associations across large-scale knowledge bases like Wikipedia is essential for semantic search and recommendation systems. We formulate a generalized flow-based network analysis framework that constructs an entity graph and measures relationship capacity, discovering hidden correlations that traditional hyperlink traversals fail to detect.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 4,
    title: "Annotating Search Results From Web Databases",
    domain: "Web Database Integration & Search Results Annotation",
    category: "Web Databases & Data Integration",
    tech: {
      sqlite: ["Python", "SQLite3", "HTML DOM Parsing", "Schema Matching & Annotation"],
      mongodb: ["Node.js", "MongoDB GridFS & BSON", "Deep Web Wrapper Induction", "Semantic Extraction"],
      postgresql: ["Python / Django", "PostgreSQL (JSONB & HSTORE)", "Multi-Attribute Alignment", "Web Annotation"],
    },
    description: "An automatic multi-annotator system assigning semantic schema labels to structured search results extracted from deep web databases.",
    abstract: "Search engines interfacing with deep web databases return structured results formatted for human rendering rather than machine comprehension. This project develops an automatic search result annotator that integrates visual alignments, data type matches, and schema alignment models to convert dynamic web pages into queryable structured data records.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 5,
    title: "Crowdsourcing Predictors of Behavioral Outcomes",
    domain: "Crowdsourcing Analytics & Behavioral Modeling",
    category: "Crowdsourcing & Predictive Modeling",
    tech: {
      sqlite: ["Python", "SQLite3", "Crowd Aggregation Algorithms", "Predictive Regression"],
      mongodb: ["Node.js", "MongoDB (TimeSeries Collections)", "Crowd Consensus Engine", "Behavioral Analytics"],
      postgresql: ["Python / Flask", "PostgreSQL (Window Functions)", "Bayesian Truth Serum", "Outcome Forecasting"],
    },
    description: "A collaborative predictive engine gathering distributed human judgments to forecast real-world behavioral outcomes accurately.",
    abstract: "Predicting individual and group behavioral responses is challenging due to cognitive biases. This system employs crowdsourcing methodologies, combining distributed participant evaluations with statistical aggregation and Bayesian filtering to generate accurate forecasts for market decisions, public health, and social dynamics.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 6,
    title: "FoCUS Learning to Crawl Web Forums",
    domain: "Forum Crawling & Focused Web Scraping",
    category: "Web Scraping & Focused Crawlers",
    tech: {
      sqlite: ["Python Scrapy", "SQLite3 (URL Queue & Bloom Filter)", "Forum Navigation Graph", "SVM Classifier"],
      mongodb: ["Node.js Puppeteer", "MongoDB (Uncapped Collections)", "Thread Deduplication", "FoCUS Crawler"],
      postgresql: ["Python", "PostgreSQL (JSONB Storage & Triggers)", "DOM Tree Traversal", "Forum Indexer"],
    },
    description: "A supervised learning focused crawler (FoCUS) that discovers forum thread structure and extracts discussions with minimal redundant requests.",
    abstract: "Web forums contain rich collective intelligence but are notoriously difficult to crawl due to complex page pagination and duplicate thread paths. FoCUS applies a supervised learning pipeline that builds a forum navigation graph and predicts high-value discussion thread URLs, achieving superior crawl coverage and drastically reduced HTTP bandwidth overhead.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 7,
    title: "Multiparty Access Control for Online Social Networks Model and Mechanisms",
    domain: "Access Control & Collaborative Privacy",
    category: "Access Control & Security Policies",
    tech: {
      sqlite: ["Python", "SQLite3", "Voting & Policy Consensus", "Attribute-Based Access Control"],
      mongodb: ["Node.js / Express", "MongoDB RBAC", "Co-Ownership JSON Schema", "Multiparty Policy Engine"],
      postgresql: ["Python / FastAPI", "PostgreSQL (Row-Level Security & ACLs)", "Conflict Resolution Matrix", "OSN Security"],
    },
    description: "A multi-owner collaborative access control model resolving sharing permission conflicts over co-owned social media artifacts.",
    abstract: "When photos, statuses, or notes in social networks involve multiple tagged individuals, standard single-owner access controls fail to protect collective privacy. We formulate a Multiparty Access Control (MPAC) framework with flexible voting schemes and automated conflict resolution mechanisms to enforce collaborative privacy policies.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 8,
    title: "Spatial Approximate String Search",
    domain: "Spatial Databases & Geo-Textual Indexing",
    category: "Spatial Databases & Information Retrieval",
    tech: {
      sqlite: ["Python / C++", "SQLite3 (R*Tree + FTS5 Modules)", "Spatial-Keyword Index (SKI)", "Edit Distance Search"],
      mongodb: ["Node.js", "MongoDB (2dsphere + Text Compound Index)", "$geoNear & $text Pipeline", "Geo-Search"],
      postgresql: ["Python", "PostgreSQL (PostGIS + pg_trgm)", "GiST / SP-GiST Indexes", "Spatial String Matcher"],
    },
    description: "A high-performance geo-textual query engine executing spatial queries with tolerance for typo and spelling variations in location names.",
    abstract: "Location-based services require finding Points of Interest (POIs) that satisfy both spatial proximity and string keyword relevance, even in the presence of typographical errors. We engineer a Spatial Approximate String Search (SASS) system that combines spatial index structures (R-trees / GiST) with q-gram inverted indexes to deliver sub-millisecond retrieval.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 9,
    title: "A Load Balancing Model Based on Cloud Partitioning for the Public Cloud",
    domain: "Cloud Computing & Distributed Systems",
    category: "Cloud Partitioning & Distributed Load Balancing",
    tech: {
      sqlite: ["Python", "SQLite3 Local State Tracker", "Partition State Table", "Round-Robin / Min-Min Scheduling"],
      mongodb: ["Node.js", "MongoDB Sharded Cluster", "Dynamic Partition Telemetry", "Workload Balancer"],
      postgresql: ["Python / Go", "PostgreSQL (TimescaleDB / Partitioning)", "Game-Theoretic Load Balancing", "Cloud Orchestration"],
    },
    description: "A scalable cloud partitioning architecture that dynamically segments public cloud infrastructure to balance heavy heterogeneous task loads.",
    abstract: "Public cloud datacenters handle millions of concurrent user transactions across geo-distributed server farms. This project builds a cloud partitioning model that divides the public cloud into autonomous sub-zones. A master load balancer assigns incoming tasks based on dynamic partition status, dramatically cutting response times and preventing server hotspots.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 10,
    title: "Enabling Cloud Storage Auditing With Key-Exposure Resistance",
    domain: "Information Forensics & Cloud Security",
    category: "Cloud Auditing & Key-Exposure Resistance",
    tech: {
      sqlite: ["Python", "SQLite3 Audit Ledger", "Key-Evolving Cryptography", "Merkle Hash Tree Verification"],
      mongodb: ["Node.js", "MongoDB Audit Trails", "Homomorphic Verifiable Tags", "Key-Exposure Defense"],
      postgresql: ["Python / Rust", "PostgreSQL Cryptographic Nonce Ledger", "Bilinear Pairing", "TPA Cloud Auditor"],
    },
    description: "A resilient cloud data possession auditing protocol safeguarding past verification signatures even if the user's secret key is compromised.",
    abstract: "Standard cloud auditing schemes assume the user's private key remains perpetually secure. When key exposure occurs, all previous cloud data integrity proofs become invalid. We design a key-evolving public auditing protocol with key-exposure resilience, ensuring that compromising a secret key at time period T does not compromise data integrity proofs generated before period T.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 11,
    title: "CAM Cloud-Assisted Privacy Preserving Mobile Health Monitoring",
    domain: "e-Health Security & Mobile Forensics",
    category: "e-Health Data Encryption & Secure Analytics",
    tech: {
      sqlite: ["Android / Java", "SQLite3 Encrypted (SQLCipher)", "Symmetric Key Derivation", "Mobile Sensor Logging"],
      mongodb: ["Node.js", "MongoDB Client-Side Field Level Encryption (CSFLE)", "BSON Health Telemetry", "CAM Architecture"],
      postgresql: ["Python / Django", "PostgreSQL (pgcrypto & Paillier Homomorphic Encryption)", "HIPAA Compliance", "mHealth Cloud"],
    },
    description: "A cloud-assisted mobile health monitoring architecture executing real-time disease detection over encrypted vital sign telemetry streams.",
    abstract: "Mobile health (mHealth) systems capture continuous patient telemetry (ECG, blood pressure, glucose) and send it to cloud diagnostics servers. CAM provides a privacy-preserving protocol where patient biometric vectors are encrypted before transmission. The cloud processes medical diagnostic algorithms over ciphertext without exposing sensitive medical records to unauthorized entities.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 12,
    title: "Overhead of Using Secure Wireless Communications in Mobile Computing",
    domain: "Mobile Computing & Network Profiling",
    category: "Mobile Computing & Secure Wireless Protocols",
    tech: {
      sqlite: ["Android / Kotlin", "SQLite3 Benchmark Database", "TLS/SSL Overhead Measurement", "Battery & CPU Profiler"],
      mongodb: ["Node.js", "MongoDB Telemetry Logs", "Network Throughput Aggregation", "Cryptographic Benchmark"],
      postgresql: ["Python / FastAPI", "PostgreSQL Time-Series Tables", "Statistical Latency Modeling", "Wireless Security Analyzer"],
    },
    description: "An empirical benchmarking suite quantifying CPU, memory, power, and latency overheads of modern cryptographic handshakes in mobile devices.",
    abstract: "Securing wireless communications via TLS, IPsec, and WPA3 introduces noticeable computational latency and battery drain on resource-constrained mobile hardware. This project conducts deep empirical profiling across encryption ciphers (AES-GCM, ChaCha20-Poly1305, RSA vs ECDSA) to determine optimal security vs energy trade-offs for mobile enterprise environments.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 13,
    title: "Two Tales of Privacy in Online Social Networks",
    domain: "Multimedia & Social Network Privacy",
    category: "Social Network Privacy & Media Protection",
    tech: {
      sqlite: ["Python", "SQLite3", "Exif Metadata Stripping", "Social Graph Privacy Evaluation"],
      mongodb: ["Node.js", "MongoDB GridFS", "Image Perceptual Hashing", "Media Privacy Framework"],
      postgresql: ["Python / Flask", "PostgreSQL (JSONB & Blob Storage)", "Dual-Layer Anonymization", "Photo Access Control"],
    },
    description: "A comprehensive dual-layer privacy protection system safeguarding both textual user profile metadata and multimedia photo uploads.",
    abstract: "Privacy risks in social networks stem from two distinct vectors: textual relational profiles and multimedia content (photos containing faces, geolocation, and timestamps). We engineer a dual privacy preserving framework that anonymizes social interaction graphs while actively stripping biometric and metadata footprints from shared multimedia images.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 14,
    title: "CloudMoV Cloud-based Mobile Social TV",
    domain: "Multimedia & Cloud Social Video Streaming",
    category: "Multimedia Streaming & Mobile Cloud Synchronization",
    tech: {
      sqlite: ["Android / Java", "SQLite3 Media Cache", "Real-Time Chat & Video Sync", "Low-Latency Buffering"],
      mongodb: ["Node.js / Socket.io", "MongoDB Pub/Sub & Change Streams", "Social Interaction Store", "CloudMoV Architecture"],
      postgresql: ["Python / WebSockets", "PostgreSQL (LISTEN/NOTIFY)", "Transcoding Orchestrator", "Social Video Platform"],
    },
    description: "A cloud-orchestrated mobile social television platform enabling synchronized live video playback and interactive co-viewing chats.",
    abstract: "Watching live video broadcasts on mobile devices is increasingly social, with viewers chatting and sharing reactions in real time. CloudMoV bridges mobile bandwidth heterogeneity and social synchronization by utilizing cloud transcoding proxies and distributed pub/sub channels that synchronize video streams and social feeds with sub-second latency across mobile peers.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
  {
    id: 15,
    title: "Fully Anonymous Profile Matching in Mobile Social Networks",
    domain: "Multimedia & Mobile Social Networking",
    category: "Mobile Social Networks & Anonymous Profile Matching",
    tech: {
      sqlite: ["Android / Kotlin", "SQLite3 Encrypted Database", "Private Set Intersection (PSI)", "Proximity Discovery"],
      mongodb: ["Node.js", "MongoDB Geospatial Index", "Homomorphic Inner Product Matching", "Anonymous Matchmaker"],
      postgresql: ["Python / FastAPI", "PostgreSQL (pgcrypto & Bloom Filters)", "Zero-Knowledge Proofs", "Social Network Discovery"],
    },
    description: "A cryptographic profile matching protocol discovering mutual friends and shared interests in physical proximity without revealing identities.",
    abstract: "Proximity-based mobile social networks allow nearby smartphone users to discover shared interests and mutual acquaintances. However, broadcasting personal profiles over wireless links exposes sensitive lifestyle data to eavesdroppers. We implement a Fully Anonymous Profile Matching (FAPM) protocol based on Private Set Intersection (PSI) and homomorphic encryption, ensuring zero leakage of non-matching attributes.",
    frameworks: ["sqlite", "mongodb", "postgresql"],
  },
];

export const databaseEditorial = {
  sqlite: {
    heroTitle: "ABOUT SQLITE PROJECTS",
    heroSubtitle: "Welcome to the IEEE Project Center in Chennai",
    introLead:
      "At the IEEE Project Center in Chennai, our dedication lies in furnishing state-of-the-art solutions for your project requirements. With a focus on innovation and real-time applications, we endeavor to provide top-notch projects that adhere to industry standards.",
    sections: [
      {
        title: "Our Expertise in SQLite",
        content:
          "Within the domain of database management, the IEEE Project Center in Chennai specializes in leveraging SQLite, a robust and lightweight relational database management system. Renowned for its simplicity, efficiency, and seamless integration, SQLite Projects in Chennai stands as an excellent choice for a myriad of applications, ranging from mobile to web development at the IEEE Project Center.\n\nOur team of experts possesses deep expertise in harnessing the capabilities of SQLite to guarantee optimal performance, reliability, and scalability for your projects. Whether you’re developing a small-scale application or a complex system, we have the proficiency to effectively implement SQLite Projects in Chennai.",
      },
      {
        title: "Services We Offer",
        content:
          "We provide comprehensive project development services from start to finish, utilizing the capabilities of SQLite to craft robust and efficient solutions. Our seasoned team adheres to industry best practices, ensuring timely delivery and adherence to budget constraints for your project.",
      },
      {
        title: "Consultation and Support",
        content:
          "The IEEE Project Center offers thorough consultation and support services. Whether you have specific inquiries about integrating SQLite into your project or require guidance on database design, our experts are readily available to assist you.",
      },
      {
        title: "Why Choose IEEE Project Center for SQLite?",
        points: [
          {
            title: "Expertise",
            desc: "Our team comprises adept professionals with vast experience in project development and SQLite database management.",
          },
          {
            title: "Innovation",
            desc: "We remain abreast of the latest industry trends and technologies to guarantee that your projects are constructed using cutting-edge solutions.",
          },
          {
            title: "Customer-Centric Approach",
            desc: "Your satisfaction is paramount to us. We collaborate closely with our clients to comprehend their distinct requirements and provide customized solutions.",
          },
        ],
      },
      {
        title: "Contact Us",
        content:
          "Are you prepared to begin your project journey with the IEEE Project Center in Chennai? Don’t hesitate to reach out to us to discuss your ideas, obtain a quote, or arrange a consultation. We eagerly anticipate transforming your vision into reality.",
      },
    ],
    features: [
      { title: "Zero Configuration", desc: "No server setup, daemon processes, or administrative overhead required." },
      { title: "ACID Compliant", desc: "Full atomic, consistent, isolated, and durable transactions even during crashes." },
      { title: "Single-File Storage", desc: "Entire relational database stored cleanly in a cross-platform disk file." },
      { title: "Full-Text Search (FTS5)", desc: "Lightning fast tokenized keyword search and ranking built right in." },
      { title: "R*Tree Spatial Index", desc: "Native multi-dimensional indexing for geospatial and range queries." },
      { title: "Mobile & Edge Ready", desc: "Standard embedded engine for Android, iOS, IoT, and desktop applications." },
    ],
  },
  mongodb: {
    heroTitle: "ABOUT MONGODB PROJECTS",
    heroSubtitle: "Welcome to the IEEE Project Center",
    introLead:
      "Welcome to the IEEE Project Center, your ultimate hub for pioneering projects and practical applications. We pride ourselves on being a frontrunner in the tech industry, offering hands-on, real-time project experiences to aspiring developers and professionals alike. Our dedication is to narrow the divide between theoretical knowledge and practical implementation.",
    sections: [
      {
        title: "Our Expertise in MongoDB",
        content:
          "At IEEE Project Center, we excel in leveraging the capabilities of MongoDB, a cutting-edge NoSQL database that transforms data management. MongoDB provides unparalleled flexibility, scalability, and seamless integration, positioning it as the preferred choice for contemporary applications.",
      },
      {
        title: "Why MongoDB?",
        content:
          "With MongoDB’s document-oriented storage, handling complex data structures for storage and retrieval becomes effortless. This simplifies working with data in a manner that mirrors your application code, eliminating object-relational impedance mismatch and accelerating real-time development.",
      },
      {
        title: "Our MongoDB Projects Portfolio",
        content:
          "Discover our portfolio of projects at the IEEE Project Center in Chennai, where MongoDB serves as the core. Ranging from e-commerce solutions to data analytics platforms, our projects exemplify the versatility and reliability of MongoDB in real-world applications.",
      },
      {
        title: "Why Choose IEEE Project Center?",
        points: [
          {
            title: "Hands-On NoSQL Mastery",
            desc: "Learn schema design, sharding, replication sets, and indexing directly on enterprise datasets.",
          },
          {
            title: "Real-Time Aggregation Pipelines",
            desc: "Build high-throughput analytics engines using MongoDB's expressive stage-based aggregations.",
          },
          {
            title: "Full-Stack Web & Cloud Integration",
            desc: "Seamlessly connect MongoDB with Node.js, Express, React, Python FastAPI, and Spring Boot.",
          },
        ],
      },
      {
        title: "Contact Us",
        content:
          "Are you prepared to begin your journey with the IEEE Project Center? Reach out to us today to explore your project ideas, training programs, or any inquiries you may have. Join us in the transformation of theoretical knowledge into practical expertise!",
      },
    ],
    features: [
      { title: "BSON Document Store", desc: "Flexible polymorphic JSON schemas matching native OOP object models." },
      { title: "Horizontal Scalability", desc: "Automated data partitioning and sharding across distributed clusters." },
      { title: "Aggregation Framework", desc: "Powerful multi-stage data processing, transformation, and analytics pipeline." },
      { title: "Geospatial 2dsphere", desc: "Comprehensive location queries, distance calculations, and polygon indexing." },
      { title: "Change Streams", desc: "Real-time pub/sub notifications for dynamic live reactive web applications." },
      { title: "Atlas Cloud Ecosystem", desc: "Seamless deployment across AWS, GCP, and Azure with enterprise security." },
    ],
  },
  postgresql: {
    heroTitle: "ABOUT POSTGRESQL PROJECTS",
    heroSubtitle: "Welcome to the IEEE Project Center in Chennai",
    introLead:
      "Welcome to the IEEE Project Center in Chennai, your ultimate destination for pioneering projects and immersive learning experiences. At our center, we prioritize real-time application development and offer a platform for enthusiasts and professionals to elevate their skills.",
    sections: [
      {
        title: "About Us",
        content:
          "At the IEEE Project Center, we recognize the significance of practical knowledge in the constantly evolving realm of technology. Our mission is to narrow the gap between theoretical comprehension and practical implementation at the IEEE Project Center in Chennai. With a committed team of experts and industry professionals, we endeavor to cultivate an environment that nurtures innovation and excellence.",
      },
      {
        title: "PostgreSQL in Database",
        content:
          "Within the domain of databases, PostgreSQL emerges as a robust and open-source solution. Our projects harness the capabilities of PostgreSQL to furnish scalable, secure, and high-performance database solutions at the IEEE Project Center in Chennai. Whether you’re a novice delving into the realm of databases or an experienced developer seeking advanced projects, our center offers the resources and guidance required for your journey.",
      },
      {
        title: "Key Features of PostgreSQL at IEEE Project Center",
        points: [
          {
            title: "Scalability",
            desc: "PostgreSQL provides scalability to manage expanding datasets and growing demands, rendering it a favored option for dynamic projects.",
          },
          {
            title: "Security",
            desc: "We prioritize the security of your data. PostgreSQL’s advanced security features guarantee that your projects are safeguarded against unauthorized access and threats.",
          },
          {
            title: "Flexibility",
            desc: "With its support for various data types, indexing options, and advanced querying capabilities, PostgreSQL offers the flexibility required to address diverse project requirements.",
          },
          {
            title: "Performance",
            desc: "Real-time applications necessitate high performance, and PostgreSQL delivers precisely that. We meticulously optimize projects to leverage the complete potential of PostgreSQL’s performance capabilities.",
          },
        ],
      },
      {
        title: "Our PostgreSQL Projects Portfolio",
        content:
          "Discover our wide array of projects demonstrating the integration of PostgreSQL in Chennai. Ranging from e-commerce platforms to data analytics solutions, our projects encompass a broad spectrum of industries and use cases.",
      },
      {
        title: "Featured Case Studies",
        points: [
          {
            title: "E-commerce Platform with PostgreSQL Integration",
            desc: "Construct a scalable and secure e-commerce platform with PostgreSQL serving as the backend database, guaranteeing seamless transactions and efficient data management.",
          },
          {
            title: "Data Analytics Dashboard powered by PostgreSQL",
            desc: "Immerse yourself in the realm of data analytics by crafting a dynamic dashboard that leverages PostgreSQL to store and retrieve data for insightful visualizations.",
          },
        ],
      },
      {
        title: "Why Choose IEEE Project Center?",
        points: [
          {
            title: "Hands-On Learning",
            desc: "Acquire practical experience through hands-on projects that prioritize real-world applications.",
          },
          {
            title: "Expert Guidance",
            desc: "Benefit from the guidance of our experienced mentors who will lead you through the entire project development process.",
          },
          {
            title: "Industry-Relevant Projects",
            desc: "Our projects are meticulously crafted to align with industry trends, guaranteeing that you acquire highly sought-after skills.",
          },
        ],
      },
      {
        title: "Join Us Today",
        content:
          "Come join us at the IEEE Project Center in Chennai, and let’s embark on a journey of learning, innovation, and success together!",
      },
    ],
    features: [
      { title: "Strict ACID & MVCC", desc: "Multi-Version Concurrency Control enabling high read/write concurrency." },
      { title: "Native JSONB & HSTORE", desc: "Semi-structured NoSQL flexibility with relational indexing and speed." },
      { title: "PostGIS Spatial Engine", desc: "Industry benchmark for geographical and geospatial location analytics." },
      { title: "Extensible Architecture", desc: "Custom datatypes, procedural languages (PL/pgSQL, PL/Python), and extensions." },
      { title: "Advanced Indexing", desc: "B-tree, Hash, GiST, SP-GiST, GIN, and BRIN indexes for big data speed." },
      { title: "Row-Level Security (RLS)", desc: "Fine-grained enterprise authorization and column encryption standards." },
    ],
  },
};

export const fetchDatabaseProjects = async (dbSlug = "sqlite") => {
  try {
    const res = await fetch(`${API_BASE}/projects?category=database&sub=${encodeURIComponent(dbSlug)}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch {
    // fallback gracefully to curated database projects
  }
  return databaseProjects;
};
