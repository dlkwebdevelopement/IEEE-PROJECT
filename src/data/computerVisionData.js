// Master Dataset & Configuration for Computer Vision, Image Processing & Segmentation Centers in Chennai
import { API_BASE } from "../api";

export const cvFrameworkLinks = [
  { name: "OpenCV", slug: "opencv", path: "/opencv-project-center-in-chennai", badge: "Open Source Vision" },
  { name: "MTCNN", slug: "mtcnn", path: "/mtcnn-project-center-in-chennai", badge: "Face Alignment" },
  { name: "FaceNet", slug: "facenet", path: "/facenet-project-center-in-chennai", badge: "Deep Embeddings" },
  { name: "Dlib", slug: "dlib", path: "/dlib-project-center-in-chennai", badge: "68-Point Landmarks" },
  { name: "Image Classification", slug: "image-classification", path: "/image-classification-project-center-in-chennai", badge: "Deep CNNs" },
  { name: "Object Detection", slug: "object-detection", path: "/object-detection-project-center-in-chennai", badge: "Real-Time BBoxes" },
  { name: "Image Segmentation", slug: "image-segmentation", path: "/image-segmentation-project-center-in-chennai", badge: "Pixel Parsing" },
  { name: "Instance Segmentation", slug: "instance-segmentation", path: "/instance-segmentation-project-center-in-chennai", badge: "Mask R-CNN" },
  { name: "Semantic Segmentation", slug: "semantic-segmentation", path: "/sementic-segmentation-project-center-in-chennai", badge: "Dense U-Net" },
  { name: "YOLO Projects", slug: "yolo", path: "/yolo-project-center-in-chennai", badge: "Single-Shot Vision" },
];

export const baseCvProjects = [
  {
    id: 1,
    title: "A System to Filter Unwanted Messages from OSN User Walls",
    domain: "Social Computing & Visual Text Moderation",
    category: "Social Network Moderation",
    tech: ["Python", "Computer Vision", "Text & Image Classification", "OCR Text Extraction", "Rule Engine"],
    description: "An automated flexible message and image filtering system for OSN user walls utilizing computer vision OCR and content moderation rules.",
    abstract: "Online Social Networks (OSNs) lack fine-grained automated filtering to prevent offensive text posts and inappropriate image uploads. This project develops a multi-modal content classifier that extracts text and analyzes image semantics, blocking unauthorized wall postings in real-time.",
  },
  {
    id: 2,
    title: "Sensitive Label Privacy Protection on Social Network Data",
    domain: "Visual Privacy & Graph Anonymization",
    category: "Data Privacy & Anonymization",
    tech: ["Python", "Computer Vision", "Face Masking", "k-Anonymity", "Topological Perturbation"],
    description: "A graph and visual privacy-preserving framework protecting sensitive user labels and profile imagery against re-identification attacks.",
    abstract: "Publishing social network media exposes sensitive user biometric identity to linkage attacks. We design a visual perturbation and label-generalization algorithm that guarantees sensitive privacy while preserving graph utility and image usability.",
  },
  {
    id: 3,
    title: "A Generalized Flow-Based Method for Analysis of Implicit Relationships on Wikipedia",
    domain: "Knowledge Mining & Graph Traversal",
    category: "Knowledge Graphs & Data Mining",
    tech: ["Python", "Visual Graph Analytics", "Max-Flow Min-Cut", "NetworkX", "Graph Traversal"],
    description: "A generalized flow-based network analysis model discovering and visualizing hidden implicit relationships across hyperlinked entity graphs.",
    abstract: "Entity relationship extraction in massive encyclopedic networks requires analyzing multi-hop indirect link structures. This project models a generalized maximum-flow network analysis algorithm to compute connection strengths between distant concepts with minimal graph traversal cost.",
  },
  {
    id: 4,
    title: "Annotating Search Results From Web Databases",
    domain: "Deep Web Mining & Document Vision",
    category: "Deep Web Mining",
    tech: ["Python", "Layout Vision / Pillow", "DOM Layout Parsing", "Visual Wrapper Induction", "Semantic Annotation"],
    description: "A multi-annotator framework that automatically assigns semantic labels to structured data units extracted from deep web database search result pages.",
    abstract: "Deep web databases generate query result pages embedded in diverse HTML presentation templates. We simulate an unsupervised multi-feature visual annotation engine that clusters visual rendering cues and text-proximity patterns to generate semantic labels automatically.",
  },
  {
    id: 5,
    title: "Crowdsourcing Predictors of Behavioral Outcomes",
    domain: "Predictive Analytics & Visual Crowdsourcing",
    category: "Predictive Analytics",
    tech: ["Python", "Visual Analytics", "Prediction Markets", "Credibility Weighting", "Plotly Charts"],
    description: "A decentralized crowdsourcing platform aggregating collective behavioral predictions and visual consensus metrics for decision forecasting.",
    abstract: "Predicting human behavioral decisions benefits from aggregating decentralized crowdsourced visual and statistical opinions. This project implements a reputation-weighted belief aggregation algorithm that eliminates spam contributions under volatile social decision scenarios.",
  },
  {
    id: 6,
    title: "FoCUS Learning to Crawl Web Forums",
    domain: "Focused Web Crawling & Visual Scraping",
    category: "Web Intelligence",
    tech: ["Python", "DOM Tree Vision", "Supervised Page Classification", "URL Regex Mining", "Thread Extraction"],
    description: "A self-learning supervised focused crawler that extracts structured discussion threads from web forums using layout geometry.",
    abstract: "Forum crawling suffers from infinite traps and duplicate URL paths. FoCUS designs a two-stage crawling architecture that learns entry-board layouts and thread patterns to extract target user discussions with high precision and 75% fewer HTTP request hops.",
  },
  {
    id: 7,
    title: "Multiparty Access Control for Online Social Networks Model and Mechanisms",
    domain: "Access Control & Collaborative Vision Security",
    category: "Social Network Moderation",
    tech: ["Python", "Face Detection", "Multiparty Access Control (MPAC)", "Conflict Resolution", "RBAC"],
    description: "A collaborative multiparty access control model resolving authorization conflicts when multiple users are detected in shared uploaded photos.",
    abstract: "When photos involve multiple tagged or recognized individuals, standard single-owner access controls cause privacy violations. This system integrates automatic face detection with a multiparty policy mechanism to balance individual sharing preferences.",
  },
  {
    id: 8,
    title: "Spatial Approximate String Search",
    domain: "Spatial Databases & Geo-Visual Indexing",
    category: "Spatial Query Processing",
    tech: ["Python", "Spatial Inverted Index", "M-Tree / R-Tree", "Levenshtein Distance", "Top-k Geo-Query"],
    description: "An efficient spatial-keyword query engine executing top-k approximate string searches on spatial point-of-interest databases with error tolerance.",
    abstract: "Location-based search services require querying geo-locations accompanied by misspelled or approximate text keywords. We simulate an augmented spatial inverted index that prunes geographical search spaces and computes top-k results within sub-millisecond query windows.",
  },
  {
    id: 9,
    title: "A Load Balancing Model Based on Cloud Partitioning for the Public Cloud",
    domain: "Cloud Partitioning & Visual Telemetry",
    category: "Cloud Computing",
    tech: ["Python", "Cloud Partitioning", "Round Robin / Game Theory", "Visual Dashboard", "VM Dispatcher"],
    description: "A hierarchical load balancer partitioning public cloud datacenters into logical geographical regions to eliminate central dispatcher bottlenecks.",
    abstract: "Centralized load balancers create scaling bottlenecks in hyperscale public cloud infrastructures. This project implements a dynamic cloud partitioning heuristic that monitors local partition capacity and distributes incoming cloudlets hierarchically, boosting throughput by 42%.",
  },
  {
    id: 10,
    title: "Enabling Cloud Storage Auditing With Key-Exposure Resistance",
    domain: "Information Forensics & Cloud Security",
    category: "Information Forensics & Security",
    tech: ["Python", "Forward-Secure Signatures", "Key-Exposure Resistant Auditing", "Homomorphic Authenticators", "TPA"],
    description: "A forward-secure public cloud storage auditing protocol that maintains past audit integrity even if the client's current secret signing key is compromised.",
    abstract: "Traditional third-party auditing schemes collapse if a user's private signing key is leaked. We formulate a key-exposure resistant storage auditing architecture that updates secret keys periodically such that compromised current keys cannot forge audit proofs for preceding time periods.",
  },
  {
    id: 11,
    title: "CAM Cloud-Assisted Privacy Preserving Mobile Health Monitoring",
    domain: "mHealth Telemetry & Cryptography",
    category: "Information Forensics & Security",
    tech: ["Python", "Paillier Homomorphic Encryption", "Biometric Signal Analysis", "Attribute-Based Access", "Telemetry"],
    description: "A privacy-preserving mobile health monitoring framework delegating patient biometric time-series analysis to cloud servers without exposing raw vitals.",
    abstract: "Continuous remote monitoring of patient health data on public clouds raises severe HIPAA privacy risks. CAM implements homomorphic threshold encryption, enabling cloud workers to detect physiological anomalies and trigger medical alerts while keeping vitals completely encrypted.",
  },
  {
    id: 12,
    title: "Overhead of Using Secure Wireless Communications in Mobile Computing",
    domain: "Mobile Computing & Network Security",
    category: "Mobile Computing",
    tech: ["Python", "TLS / IPsec Cryptographic Benchmarking", "Battery Energy Profiling", "Network Delay Models", "Seaborn"],
    description: "An empirical benchmarking and simulation suite evaluating the CPU, battery energy, and latency overhead of cryptographic protocols on mobile devices.",
    abstract: "Deploying military-grade cipher suites on resource-constrained mobile handsets induces significant battery drain and packet transmission latency. This project models cryptographic energy dissipation to identify Pareto-optimal security configurations for mobile cloud offloading.",
  },
  {
    id: 13,
    title: "Two Tales of Privacy in Online Social Networks",
    domain: "Computer Vision & Metadata Privacy",
    category: "Multimedia Privacy",
    tech: ["Python", "OpenCV / Pillow", "EXIF GPS Sanitization", "Facial De-Identification", "Differential Privacy"],
    description: "A dual-layer privacy preservation system safeguarding user photo metadata and facial biometric identity in collaborative social media platforms.",
    abstract: "Photos shared in social networks leak both explicit location EXIF tags and implicit facial biometric identities. We develop a dual-phase privacy protection mechanism that sanitizes sensitive metadata while introducing reversible facial obfuscation.",
  },
  {
    id: 14,
    title: "CloudMoV Cloud-Based Mobile Social TV",
    domain: "Multimedia & Streaming Clouds",
    category: "Multimedia Privacy",
    tech: ["Python", "Adaptive Bitrate Video Streaming", "Social TV Architecture", "Mobile Cloud Offloading", "Cloudlet Sync"],
    description: "A cloud-assisted mobile social TV architecture enabling synchronized live video streaming and real-time social interactions across heterogeneous handsets.",
    abstract: "Viewing live TV broadcasts while chatting with social peers strains mobile wireless networks. CloudMoV designs a cloud-surrogate transrating and synchronization protocol that offloads video transcoding and chat message multicast to edge nodes with zero playback jitter.",
  },
  {
    id: 15,
    title: "Fully Anonymous Profile Matching in Mobile Social Networks",
    domain: "Mobile Social Networks & Privacy",
    category: "Multimedia Privacy",
    tech: ["Python", "Private Set Intersection (PSI)", "Anonymous Handshake", "Homomorphic Matching", "Proximity Discovery"],
    description: "A cryptographic profile matching protocol allowing mobile social network users to discover shared interests with nearby strangers without revealing personal profile data.",
    abstract: "Finding friends with matching personal interests in proximity-based social networks risks disclosing private user preferences to untrusted third parties. We model a Private Set Intersection (PSI) handshake protocol that computes intersection cardinality with zero attribute disclosure.",
  },
];

export const cvEditorial = {
  opencv: {
    slug: "opencv",
    name: "OpenCV",
    title: "OpenCV in Image Processing",
    heading: "OpenCV Project Center in Chennai",
    badge: "Open Source Computer Vision Library",
    themeGradient: "from-blue-400 via-cyan-300 to-indigo-400",
    primaryColor: "cyan",
    accentBg: "bg-cyan-950/60 border-cyan-500/30 text-cyan-300",
    buttonBg: "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-950/40",
    intro: "IEEE Project Center in Chennai is committed to delivering state-of-the-art solutions in the realm of image processing, with a particular emphasis on the OpenCV project center in Chennai. Our team of professionals is fervently dedicated to harnessing the capabilities of OpenCV to elevate and optimize image processing across diverse applications.",
    sectionTitle: "OpenCV in Image Processing",
    sectionIntro: "OpenCV, also known as Open Source Computer Vision Library, forms the foundation of our image processing endeavors. With the aid of OpenCV, we unlock a realm of possibilities in computer vision, facilitating real-time image analysis, object detection, facial recognition, and various other applications. Our team possesses profound knowledge of OpenCV’s capabilities and harnesses it to develop robust and efficient solutions across diverse industries.",
    whyPoints: [
      {
        title: "Expertise",
        desc: "Our team consists of highly skilled professionals who possess extensive expertise in the field of image processing and OpenCV.",
      },
      {
        title: "Innovation",
        desc: "We are driven by innovation, continuously seeking novel applications of OpenCV to address real-world challenges and achieve meaningful outcomes.",
      },
      {
        title: "Real-time Solutions",
        desc: "As our name suggests, we possess specialized expertise in IEEE project development in Chennai. We deeply comprehend the significance of delivering projects that align with the requirements of today’s rapidly evolving and dynamic landscape.",
      },
      {
        title: "Collaborative Approach",
        desc: "We emphasize collaborative partnerships, working closely with our clients to ensure that our solutions align seamlessly with their goals and expectations.",
      },
    ],
  },
  mtcnn: {
    slug: "mtcnn",
    name: "MTCNN",
    title: "MTCNN in Image Processing",
    heading: "MTCNN Project Center in Chennai",
    badge: "Multi-Task Cascaded Convolutional Networks",
    themeGradient: "from-indigo-400 via-purple-300 to-pink-400",
    primaryColor: "indigo",
    accentBg: "bg-indigo-950/60 border-indigo-500/30 text-indigo-300",
    buttonBg: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-950/40",
    intro: "At the IEEE Project Center in Chennai, we are honored to be recognized as a prominent entity in the domain of IEEE Project Development in Chennai. Our steadfast dedication to achieving excellence, fostering innovation, and nurturing practical expertise distinguishes us as a reliable partner in transforming your ideas into reality.",
    sectionTitle: "About MTCNN in Image Processing: Unveiling the Power of MTCNN",
    sectionIntro: "In the dynamic realm of Image Processing in Chennai, MTCNN (Multi-task Cascaded Convolutional Networks) emerges as an influential tool for face detection and alignment. As a prominent player in the tech industry, we harness the potential of MTCNN to augment a wide range of applications, ranging from bolstering security systems to enriching the immersive experiences of augmented reality.",
    keyFeatures: [
      {
        title: "Precision",
        desc: "MTCNN demonstrates exceptional proficiency in accurately detecting and aligning faces, delivering reliable results across various scenarios.",
      },
      {
        title: "Speed",
        desc: "Our projects harness the speed advantage of MTCNN, enabling real-time applications without compromising accuracy.",
      },
      {
        title: "Versatility",
        desc: "MTCNN seamlessly adapts to a wide array of applications, including facial recognition, emotion analysis, and identity verification.",
      },
    ],
    whyPoints: [
      {
        title: "Expertise",
        desc: "Our team of seasoned professionals brings with them a wealth of experience and a deep understanding of the latest technologies, ensuring that you benefit from their expertise.",
      },
      {
        title: "Tailored Solutions",
        desc: "At the IEEE Project Center in Chennai, we recognize that every project is unique, and therefore, we offer tailored solutions to meet your specific requirements.",
      },
      {
        title: "Timely Delivery",
        desc: "We place great importance on meeting deadlines. You can rest assured that your project will be delivered on time while maintaining a high standard of quality.",
      },
    ],
  },
  facenet: {
    slug: "facenet",
    name: "FaceNet",
    title: "FaceNet in Image Processing",
    heading: "FaceNet Project Center in Chennai",
    badge: "128-D Triplet Loss Face Embeddings",
    themeGradient: "from-emerald-400 via-teal-300 to-cyan-400",
    primaryColor: "emerald",
    accentBg: "bg-emerald-950/60 border-emerald-500/30 text-emerald-300",
    buttonBg: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/40",
    intro: "Welcome to the IEEE Project Center in Chennai. At the IEEE Project Center in Chennai, we are dedicated to exploring innovative advancements in the field of image processing. Our commitment to excellence has led us to cultivate expertise in FaceNet Projects in Chennai, a groundbreaking technology that pushes the boundaries of facial recognition and analysis.",
    sectionTitle: "FaceNet in Image Processing: Unveiling the Power of Face Recognition",
    sectionIntro: "Within the dynamic landscape of image processing in Chennai, FaceNet has emerged as a revolutionary technology. At its core, FaceNet is a deep learning model specifically designed for advanced facial recognition and verification. Its uniqueness lies in mapping facial features into a high-dimensional space, creating a distinctive embedding for each face. This cutting-edge approach facilitates highly accurate and efficient face matching, making FaceNet an invaluable tool with applications ranging from enhancing security systems to delivering personalized user experiences.",
    whyPoints: [
      {
        title: "Expertise You Can Trust",
        desc: "The IEEE Project Center is a leading authority in the field of image processing with a particular focus on real-time applications. With unparalleled expertise, our team comprises talented individuals who are passionately dedicated to transforming innovative ideas into tangible solutions.",
      },
      {
        title: "Customized Solutions",
        desc: "Each project is unique, and at the IEEE Project Center in Chennai, we recognize and appreciate this. Our approach involves close collaboration with our clients to thoroughly understand their specific needs and goals, ensuring our projects exceed expectations.",
      },
      {
        title: "Cutting-Edge Facilities",
        desc: "The IEEE Project Center in Chennai boasts state-of-the-art facilities that provide an ideal environment for innovation. With access to the latest tools and GPU clusters, we nurture creativity and foster the development of groundbreaking projects.",
      },
    ],
  },
  dlib: {
    slug: "dlib",
    name: "Dlib",
    title: "Dlib in Image Processing",
    heading: "Dlib Project Center in Chennai",
    badge: "C++ / Python Machine Learning & Landmark Library",
    themeGradient: "from-amber-400 via-orange-300 to-rose-400",
    primaryColor: "amber",
    accentBg: "bg-amber-950/60 border-amber-500/30 text-amber-300",
    buttonBg: "bg-amber-600 hover:bg-amber-500 shadow-amber-950/40",
    intro: "At the IEEE Project Center in Chennai, we are committed to pushing the boundaries of innovation in the field of Dlib image processing in Chennai. Our dedication to excellence is showcased through our projects, where we leverage the power of cutting-edge technologies to develop real-time solutions that leave a lasting impact.",
    sectionTitle: "About Dlib in Image Processing: Introduction to Dlib",
    sectionIntro: "Dlib is recognized as a versatile and powerful open-source library that demonstrates excellence in various applications, particularly in the field of image processing. At the IEEE Project Center in Chennai, we harness the capabilities of Dlib to enhance the precision, speed, and efficiency of our image processing projects.",
    keyFeatures: [
      {
        title: "Facial Recognition",
        desc: "Utilize Dlib’s facial recognition algorithms for accurate and rapid identification of faces in images and video streams.",
      },
      {
        title: "Object Detection",
        desc: "Implement robust object detection using Dlib’s HOG and CNN object detection tools, ensuring high accuracy in identifying and localizing objects.",
      },
      {
        title: "Landmark Detection",
        desc: "Leverage Dlib’s 68-point landmark detection capabilities to precisely locate and analyze key points on faces (eyes, nose, mouth, jawline).",
      },
      {
        title: "Machine Learning",
        desc: "Harness the power of machine learning with Dlib to develop intelligent, adaptive, and real-time image processing solutions.",
      },
    ],
    whyPoints: [
      {
        title: "Expertise",
        desc: "Our team of skilled professionals has extensive experience in implementing Dlib for image processing projects, guaranteeing the highest standards of quality.",
      },
      {
        title: "Innovation",
        desc: "At the IEEE Project Center in Chennai, we are driven by innovation and constantly explore new possibilities in image processing.",
      },
      {
        title: "Client-Centric Approach",
        desc: "At IEEE Project Center, we craft customized solutions precisely aligned with your academic and research objectives.",
      },
      {
        title: "State-of-the-Art Facilities",
        desc: "Our center in Chennai is furnished with cutting-edge facilities, creating a conducive environment for fostering creativity and encouraging collaboration.",
      },
    ],
  },
  "image-classification": {
    slug: "image-classification",
    name: "Image Classification",
    title: "Image Classification in Computer Vision",
    heading: "Image Classification Project Center in Chennai",
    badge: "Deep Learning CNN Image Classification",
    themeGradient: "from-blue-500 via-indigo-400 to-cyan-400",
    primaryColor: "blue",
    accentBg: "bg-blue-950/60 border-blue-500/30 text-blue-300",
    buttonBg: "bg-blue-600 hover:bg-blue-500 shadow-blue-950/40",
    intro: "Welcome to the IEEE Project Center in Chennai – Your Gateway to Image Classification in Computer Vision! At the IEEE Project Center, our fervor lies in stretching the limits of technology and equipping individuals and businesses with the newest breakthroughs in computer vision.",
    sectionTitle: "Who We Are & Our Mission",
    sectionIntro: "Our team of professionals at the IEEE Project Center in Chennai is committed to delivering superior solutions in real-time image classification, harnessing the capabilities of artificial intelligence and machine learning in Chennai. Our goal is to be a catalyst in the realm of computer vision, providing inventive and pragmatic solutions that foster positive changes across diverse industries. We are committed to bridging the chasm between theoretical understanding and practical application, guaranteeing that our clients and learners can fully exploit the capabilities of image classification.",
    keyFeatures: [
      {
        title: "Image Classification in Computer Vision",
        desc: "The IEEE Project Center in Chennai is dedicated to cutting-edge image classification techniques. Whether you’re delving into image recognition, object detection, or semantic segmentation, our proficient team is equipped to provide tailored solutions.",
      },
      {
        title: "Industry Applications",
        desc: "Our image classification services have versatile applications across various industries such as healthcare, retail, manufacturing, and beyond, streamlining processes and fortifying security.",
      },
      {
        title: "Training and Workshops",
        desc: "Unveil the intricacies of image classification in computer vision with our extensive training programs and workshops tailored to accommodate all skill levels in Chennai.",
      },
    ],
    whyPoints: [
      {
        title: "Anomaly Detection",
        desc: "Expertise ranging from detecting subtle anomalies in medical X-rays/MRIs to enhancing product quality control in smart manufacturing.",
      },
      {
        title: "Hands-on Practical Training",
        desc: "Benefit from the expertise of industry leaders, acquire practical experience and stay at the forefront of the ever-evolving landscape of computer vision.",
      },
    ],
  },
  "object-detection": {
    slug: "object-detection",
    name: "Object Detection",
    title: "Object Detection in Computer Vision",
    heading: "Object Detection Project Center in Chennai",
    badge: "Real-Time Object Detection & Localization",
    themeGradient: "from-amber-400 via-orange-300 to-yellow-400",
    primaryColor: "amber",
    accentBg: "bg-amber-950/60 border-amber-500/30 text-amber-300",
    buttonBg: "bg-amber-600 hover:bg-amber-500 shadow-amber-950/40",
    intro: "Welcome to the IEEE Project Center, your leading hub for groundbreaking projects within the realm of Object Detection Projects in Chennai. Our objective is to offer practical, hands-on experience to aspiring professionals and students, equipping them with the necessary skills and expertise to thrive in the dynamic domain of Object Detection.",
    sectionTitle: "Object Detection in Computer Vision: What is Object Detection?",
    sectionIntro: "Object Detection stands as a vital element of Computer Vision, entailing the identification and localization of objects within images or video streams. Its significance extends to applications like autonomous vehicles, surveillance, medical imaging, and beyond. At the IEEE Project Center, we delve deeply into the nuances of Object Detection, offering thorough training and project opportunities.",
    keyFeatures: [
      {
        title: "Traditional Methods",
        desc: "Discover classical methods such as Haar cascades, HOG + SVM classifiers, and feature-based keypoint approaches.",
      },
      {
        title: "Deep Learning Architectures",
        desc: "Delve into cutting-edge deep learning architectures like YOLO (You Only Look Once), SSD (Single Shot Multibox Detector), and Faster R-CNN.",
      },
      {
        title: "Real-World Industrial Vision",
        desc: "Deploy models for traffic monitoring, autonomous driving perception, retail inventory counting, and thermal surveillance.",
      },
    ],
    whyPoints: [
      {
        title: "Hands-on Experience",
        desc: "Acquire practical, hands-on experience through real-world projects designed to simulate industry scenarios.",
      },
      {
        title: "Industry-Relevant Curriculum",
        desc: "Our curriculum is developed collaboratively with industry experts to ensure its alignment with current industry trends and requirements.",
      },
      {
        title: "State-of-the-Art Facilities",
        desc: "Experience an enriching learning atmosphere furnished with cutting-edge GPU tools, cameras, and development boards.",
      },
    ],
  },
  "image-segmentation": {
    slug: "image-segmentation",
    name: "Image Segmentation",
    title: "Image Segmentation in Computer Vision",
    heading: "Image Segmentation Project Center in Chennai",
    badge: "Pixel-Level Scene Parsing & Segmentation",
    themeGradient: "from-purple-400 via-violet-300 to-pink-400",
    primaryColor: "purple",
    accentBg: "bg-purple-950/60 border-purple-500/30 text-purple-300",
    buttonBg: "bg-purple-600 hover:bg-purple-500 shadow-purple-950/40",
    intro: "At the IEEE Project Center, we are driven by a passion for innovation and a commitment to delivering cutting-edge solutions. This dedication is evident in our emphasis on leading image segmentation projects in Chennai, a powerful technique that holds significant importance across various domains.",
    sectionTitle: "What is Image Segmentation?",
    sectionIntro: "Image segmentation involves dividing an image into meaningful segments to analyze and comprehend its content. This technique finds extensive applications in fields such as computer vision, medical imaging, autonomous vehicles, and beyond. At the IEEE Project Center, we excel in leveraging the capabilities of image segmentation to provide groundbreaking solutions.",
    keyFeatures: [
      {
        title: "Medical Imaging Solutions",
        desc: "Enhancing diagnostic accuracy through precise organ segmentation, automated tumor detection, and lesion boundary analysis.",
      },
      {
        title: "Autonomous Vehicles",
        desc: "Object detection, road surface detection, and tracking for improved navigational safety and environmental understanding.",
      },
      {
        title: "Retail Analytics",
        desc: "Customer behavior analysis through people counting and tracking, alongside shelf and product segmentation for inventory management.",
      },
    ],
    whyPoints: [
      {
        title: "Expert Team",
        desc: "Our team comprises highly skilled professionals with extensive image segmentation and associated technologies expertise.",
      },
      {
        title: "Cutting-Edge Technology",
        desc: "We remain at the forefront by embracing the latest advancements in image processing, deep neural networks, and computer vision.",
      },
      {
        title: "Collaborative Approach",
        desc: "We collaborate closely with our clients, ensuring a cooperative process that aligns with their objectives and expectations.",
      },
    ],
  },
  "instance-segmentation": {
    slug: "instance-segmentation",
    name: "Instance Segmentation",
    title: "Instance Segmentation in Computer Vision",
    heading: "Instance Segmentation Project Center in Chennai",
    badge: "Instance-Aware Object Delineation & Masking",
    themeGradient: "from-emerald-400 via-teal-300 to-cyan-400",
    primaryColor: "emerald",
    accentBg: "bg-emerald-950/60 border-emerald-500/30 text-emerald-300",
    buttonBg: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/40",
    intro: "Welcome to the IEEE Project Center in Chennai, your ultimate hub for pioneering projects and solutions. Here, we are deeply committed to fostering innovation and achieving excellence in the realm of real-time projects. With a team of seasoned experts, we are devoted to delivering hands-on, practical experiences that enable individuals and businesses to flourish in the continuously evolving technological terrain.",
    sectionTitle: "What is Instance Segmentation & Why It Matters",
    sectionIntro: "Instance segmentation is an advanced computer vision technique aimed at identifying and delineating individual objects within an image. Unlike conventional image segmentation methods, instance segmentation takes it a step further by distinguishing between separate instances of the same object class. This sophisticated approach plays a crucial role in diverse applications, spanning from autonomous vehicles to medical imaging. At the IEEE Project Center in Chennai, we delve deeply into the complexities of instance segmentation, investigating its myriad applications and pushing the limits of its capabilities.",
    keyFeatures: [
      {
        title: "Autonomous Navigation Systems",
        desc: "Utilizing instance segmentation to achieve precise multi-object detection in real-time, thereby augmenting the capabilities of autonomous vehicles.",
      },
      {
        title: "Medical Image Analysis",
        desc: "Harnessing instance segmentation to accurately identify, count, and separate individual cellular structures and lesions in medical histology slides.",
      },
      {
        title: "Retail Analytics & Tracking",
        desc: "Employing instance segmentation to track individual customer paths and product interactions, optimizing store layouts and shopping experiences.",
      },
    ],
    whyPoints: [
      {
        title: "Pixel-Level Mask Precision",
        desc: "Generate polygon contour masks for each detected entity using Mask R-CNN, YOLACT, and Segment Anything (SAM) architectures.",
      },
      {
        title: "Hands-on Development Support",
        desc: "Learn from top mentors who guide you through dataset annotation (COCO format), loss function tuning, and model deployment.",
      },
    ],
  },
  "semantic-segmentation": {
    slug: "semantic-segmentation",
    name: "Semantic Segmentation",
    title: "Semantic Segmentation in Computer Vision",
    heading: "Semantic Segmentation Project Center in Chennai",
    badge: "Dense Pixel Classification & Scene Understanding",
    themeGradient: "from-teal-400 via-emerald-300 to-sky-400",
    primaryColor: "teal",
    accentBg: "bg-teal-950/60 border-teal-500/30 text-teal-300",
    buttonBg: "bg-teal-600 hover:bg-teal-500 shadow-teal-950/40",
    intro: "At the IEEE Project Center, our passion lies in pushing the boundaries of technology and equipping individuals with state-of-the-art skills. Driven by our commitment to excellence, Semantic Segmentation Projects in Chennai, we provide distinctive and impactful projects that not only enrich your learning journey but also advance the field of computer vision.",
    sectionTitle: "Why Semantic Segmentation Matters & Real-world Applications",
    sectionIntro: "Semantic segmentation is pivotal across diverse fields such as medical imaging, autonomous vehicles, and augmented reality. This technique facilitates machines in grasping the context of an image by assigning a class label to every individual pixel, rendering it indispensable for a broad spectrum of applications. Discover our array of projects that utilize semantic segmentation to address real-world challenges ranging from medical image analysis to smart city planning.",
    keyFeatures: [
      {
        title: "Dense Pixel Classification",
        desc: "Classify every single pixel into meaningful categories (road, sidewalk, sky, vehicle, building, person).",
      },
      {
        title: "Encoder-Decoder Architectures",
        desc: "Master state-of-the-art networks including U-Net, SegNet, DeepLabV3+ with Atrous Spatial Pyramid Pooling (ASPP), and SegFormer.",
      },
      {
        title: "Smart Cities & Remote Sensing",
        desc: "Urban land cover mapping, satellite crop health segmentation, and flood extent monitoring.",
      },
    ],
    whyPoints: [
      {
        title: "Hands-on Real-Time Learning",
        desc: "Our team of seasoned mentors leads you through the complexities of semantic segmentation, guaranteeing practical skills directly applicable to the industry.",
      },
      {
        title: "State-of-the-Art Facilities",
        desc: "Engage in a learning environment enriched with cutting-edge technology, GPU servers, and benchmark vision datasets.",
      },
      {
        title: "Industry-Relevant Projects",
        desc: "Acquire hands-on experience by participating in projects with tangible real-world applications, providing a competitive advantage in the job market.",
      },
    ],
  },
  yolo: {
    slug: "yolo",
    name: "YOLO",
    title: "YOLO (You Only Look Once) in Image Segmentation & Detection",
    heading: "YOLO Project Center in Chennai",
    badge: "Ultra-Fast Single-Shot Real-Time Vision",
    themeGradient: "from-rose-400 via-orange-300 to-amber-400",
    primaryColor: "rose",
    accentBg: "bg-rose-950/60 border-rose-500/30 text-rose-300",
    buttonBg: "bg-rose-600 hover:bg-rose-500 shadow-rose-950/40",
    intro: "Welcome to the IEEE Project Center in Chennai, your top-tier destination for pioneering projects and immersive experiences in the realm of technology. Fueled by our dedication to excellence and innovation, we strive to provide real-time solutions that create tangible impacts.",
    sectionTitle: "What is YOLO (You Only Look Once) in Image Segmentation?",
    sectionIntro: "In the dynamic field of image processing, YOLO (You Only Look Once) emerges as a groundbreaking approach to object detection and segmentation. YOLO represents more than just an algorithm; it signifies a paradigm shift in how computers perceive and interpret images in real time. Unlike conventional methods that analyze images iteratively, YOLO Projects in Chennai processes the entire image at once in a single forward pass, rendering it remarkably efficient and ideal for applications requiring both extreme speed and high precision.",
    keyFeatures: [
      {
        title: "Real-Time Speed",
        desc: "YOLO conducts real-time image processing at 60+ FPS, positioning it as one of the swiftest object detection and segmentation algorithms accessible.",
      },
      {
        title: "Single-Pass Accuracy",
        desc: "The single-pass unified regression method guarantees high precision in detecting, classifying, and segmenting objects within images.",
      },
      {
        title: "Versatility & Edge Deployment",
        desc: "YOLO is capable of managing hundreds of object categories, adaptable to mobile devices, Raspberry Pi, Jetson Nano, and cloud servers.",
      },
    ],
    whyPoints: [
      {
        title: "Expert Guidance",
        desc: "Our team of seasoned professionals and industry experts mentors you through every phase of your project, ensuring a thorough grasp of YOLO (v5, v7, v8, v9, v10, v11) and its segmentation heads.",
      },
      {
        title: "State-of-the-Art Infrastructure",
        desc: "Our facilities boast high-performance NVIDIA GPU hardware, creating an optimal learning environment to train custom YOLO models.",
      },
      {
        title: "Industry-Relevant Projects",
        desc: "Our projects are meticulously crafted to simulate real-world scenarios (automatic number plate recognition, safety helmet detection, drone tracking).",
      },
    ],
  },
};

/**
 * Fetch projects by computer vision framework with local dataset fallback.
 */
export const fetchCvProjects = async (framework = "opencv") => {
  const norm = (framework || "opencv").toLowerCase();
  try {
    const res = await fetch(`${API_BASE}/project_titles.php?tech=${norm}`);
    if (res.ok) {
      const json = await res.json();
      const items = Array.isArray(json) ? json : json.data || [];
      if (items && items.length > 0) {
        return items.map((item, idx) => ({
          id: item.id || idx + 1,
          title: item.title_name || item.title || `${framework} Project ${idx + 1}`,
          domain: item.domain || "Computer Vision & Image Processing",
          category: item.category || "Image Processing & AI",
          tech: item.tech ? (Array.isArray(item.tech) ? item.tech : item.tech.split(",")) : ["Python", norm.toUpperCase(), "OpenCV", "Deep Learning"],
          description: item.description || `IEEE Computer Vision Project implementation using ${norm} with complete source code and base paper.`,
          abstract: item.abstract || `Comprehensive experimental evaluation and simulation analysis using ${norm}.`,
          framework: framework,
        }));
      }
    }
  } catch (err) {
    console.warn(`Database API fetch fallback for ${framework}:`, err);
  }

  return baseCvProjects.map((p) => ({ ...p, framework }));
};
