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
import SensorsIcon from "@mui/icons-material/Sensors";
import RouterIcon from "@mui/icons-material/Router";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ContactlessIcon from "@mui/icons-material/Contactless";
import CodeIcon from "@mui/icons-material/Code";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TimelineIcon from "@mui/icons-material/Timeline";
import SpeedIcon from "@mui/icons-material/Speed";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudIcon from "@mui/icons-material/Cloud";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

// Custom 3D IoT (Internet of Things) Logo
const IotBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="url(#iotGrad2022)" stroke="#10B981" strokeWidth="1.5" />
    <defs>
      <linearGradient id="iotGrad2022" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#047857" />
        <stop offset="0.5" stopColor="#059669" />
        <stop offset="1" stopColor="#10B981" />
      </linearGradient>
    </defs>
    {/* Microcontroller & Wireless Connectivity Waves */}
    <rect x="16" y="16" width="16" height="16" rx="3" fill="#064E3B" stroke="#34D399" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="3" fill="#6EE7B7" />
    {/* Concentric Signal Arcs */}
    <path d="M12 12C18 6 30 6 36 12" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 15C19 10 29 10 33 15" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 36C18 42 30 42 36 36" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
    {/* Sensor Node Endpoints */}
    <circle cx="10" cy="24" r="2" fill="#34D399" />
    <circle cx="38" cy="24" r="2" fill="#34D399" />
    <line x1="12" y1="24" x2="16" y2="24" stroke="#6EE7B7" strokeWidth="1.5" />
    <line x1="32" y1="24" x2="36" y2="24" stroke="#6EE7B7" strokeWidth="1.5" />
  </svg>
);

// 2022-2023 IEEE IoT Project Dataset (25 Titles across 6 Categories)
const iotProjects2022Data = [
  {
    id: 1,
    title: "A CYBER-PHYSICAL SYSTEM FOR ENVIRONMENTAL MONITORING",
    domain: "Cyber-Physical Systems & Atmospheric Telemetry",
    category: "Smart Environment & Sensor Networks",
    tech: ["ESP32", "MQ-135 / BME280 Sensors", "MQTT Protocol", "AWS IoT Core", "Node-RED Dashboard"],
    description: "A distributed cyber-physical mesh monitoring air quality indexes, toxic gas thresholds, and humidity variations with edge alert generation.",
    abstract: "Environmental pollution and climate telemetry demand continuous, low-latency sampling. This project builds a cyber-physical IoT telemetry network using ESP32 nodes interfaced with particulate and gas sensors. Telemetry packets are encrypted and streamed via lightweight MQTT to a cloud database with automated threshold-triggered SMS alarms.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "AN INTEGRATED CLOUD-BASED SMART HOME MANAGEMENT SYSTEM WITH COMMUNITY HIERARCHY",
    domain: "Smart Home Automation & Hierarchical Community Management",
    category: "Home Automation & Smart Building",
    tech: ["NodeMCU ESP8266", "Firebase Realtime DB", "Relay Actuators", "Flutter Mobile App", "REST API"],
    description: "A multi-tier residential IoT management hub allowing independent room-level automation while feeding communal energy metrics to gated society dashboards.",
    abstract: "Smart home solutions often lack integration with larger residential township infrastructures. We design a hierarchical cloud-based smart home manager in ESP8266 where homeowners control lighting, HVAC, and appliances while community administrators receive aggregated utility telemetry and emergency evacuation triggers.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "AUTONOMOUS GAS DETECTION AND MAPPING WITH UNMANNED AERIAL VEHICLES",
    domain: "Drone Telemetry & Gas Plume Concentration Mapping",
    category: "Robotics & Aerial IoT",
    tech: ["Raspberry Pi 4", "Pixhawk Flight Controller", "MQ-4 / MQ-7 Gas Sensors", "GPS Neo-6M", "Python OpenCV"],
    description: "An autonomous UAV quadcopter scanning industrial disaster zones to map toxic gas concentration heatmaps in real-time.",
    abstract: "Hazardous gas leaks in petrochemical facilities threaten first responders. This project integrates an autonomous drone system with high-sensitivity gas sensor arrays and GPS positioning. The airborne Raspberry Pi telemetry unit generates real-time 3D spatial gas dispersion heatmaps transmitted to emergency ground stations over LoRa/Wi-Fi.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "CHARACTERIZATION OF AN UNDERWATER POSITIONING SYSTEM BASED ON GPS SURFACE NODES",
    domain: "Underwater Acoustic Localization & Surface Buoys",
    category: "Smart Environment & Sensor Networks",
    tech: ["Arduino Mega", "Acoustic Transceivers", "GPS Surface Buoy Nodes", "Time of Flight (ToF)", "MATLAB Analysis"],
    description: "An acoustic underwater localization framework using surface buoy GPS nodes to position submerged autonomous underwater vehicles (AUVs).",
    abstract: "GPS signals cannot penetrate water columns. This project implements an inverted acoustic positioning system using surface floating buoy nodes equipped with GPS. Submerged sensor units calculate sub-surface coordinates using Time of Arrival (ToA) trilateration relative to synchronized surface beacon coordinates.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "CO-GPS ENERGY EFFICIENT GPS SENSING WITH CLOUD OFFLOADING",
    domain: "Low-Power GNSS Sensing & Cloud Signal Processing",
    category: "Location Tracking & GNSS",
    tech: ["ESP32-S3", "Raw GNSS Snapshot Logger", "Cloud Ephemeris Solver", "Co-GPS Protocol", "Python Backend"],
    description: "An ultra-low-power GPS logging architecture capturing milliseconds of raw satellite snapshots and offloading ephemeris computation to cloud servers.",
    abstract: "Continuous on-chip GPS positioning drains IoT battery packs rapidly. We develop Co-GPS, an energy-harvesting sensing scheme where the microcontroller captures sub-millisecond raw IF satellite snapshots without decoding ephemeris. The computational decoding is offloaded to cloud servers, extending IoT device battery lifetime by over 10x.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "CLASSIFYING A PERSONS DEGREE OF ACCESSIBILITY FROM NATURAL BODY LANGUAGE DURING SOCIAL HUMAN–ROBOT INTERACTIONS",
    domain: "Social Robotics & Body Pose Estimation",
    category: "Robotics & Assistive Tech",
    tech: ["Raspberry Pi 4", "Intel RealSense Depth Cam", "MediaPipe Pose", "Random Forest Classifier", "ROS2"],
    description: "An assistive companion robot perception pipeline evaluating pedestrian body language and accessibility comfort to initiate helpful interactions.",
    abstract: "Service robots operating in healthcare must recognize human willingness to interact before approaching. This project implements a real-time vision-based pose classifier on a Raspberry Pi companion robot that extracts skeletal joint angles and head orientation to compute human accessibility comfort indices in public spaces.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "EMBEDDED CONTROL SYSTEM FOR SMART WALKING ASSISTANCE DEVICE",
    domain: "Assistive Mechatronics & Gait Rehabilitation",
    category: "Robotics & Assistive Tech",
    tech: ["STM32 / Arduino", "Ultrasonic & LiDAR ToF", "MPU6050 Gyroscope", "Haptic Feedback Motors", "Bluetooth BLE"],
    description: "An active assistive smart cane and exoskeleton system providing haptic tactile obstacle warnings and automated emergency fall notifications.",
    abstract: "Elderly and mobility-impaired individuals require adaptive navigation assistance. This project designs a smart walking stick embedded with LiDAR obstacle rangefinders, tilt angle accelerometers, and haptic vibration motors. In the event of a sudden fall, the onboard microcontroller dispatches real-time GPS coordinates to emergency contacts via GSM.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "ENHANCED FINGERPRINTING AND TRAJECTORY PREDICTION FOR IOT LOCALIZATION IN SMART BUILDINGS",
    domain: "Indoor Positioning & Wi-Fi RSSI Fingerprinting",
    category: "Location Tracking & GNSS",
    tech: ["ESP32 Beacon Array", "Wi-Fi RSSI Fingerprinting", "Kalman Filter Trajectory", "KNN Regression", "Python Server"],
    description: "An indoor sub-meter positioning system fusing Wi-Fi RSSI signal fingerprints with Kalman filtering for predictive pedestrian navigation inside malls and hospitals.",
    abstract: "Indoor environments experience severe multipath fading that degrades traditional trilateration. This project develops an enhanced indoor positioning engine using Wi-Fi RSSI fingerprinting and dynamic Kalman filter trajectory smoothing across smart building ESP32 beacon arrays to achieve sub-meter localization accuracy.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "FACE RECOGNITION AND SPOOFING DETECTION SYSTEM ADAPTED TO VISUALLY-IMPAIRED PEOPLE",
    domain: "Assistive Edge AI & Anti-Spoofing Biometrics",
    category: "Robotics & Assistive Tech",
    tech: ["Raspberry Pi 4", "Pi Camera V2", "FaceNet Deep Learning", "Liveness Detection", "Text-to-Speech Engine"],
    description: "Wearable smart glasses for visually impaired individuals identifying familiar acquaintances and auditory-announcing names while blocking 2D photo spoofing.",
    abstract: "Visually impaired individuals face social barriers in recognizing people around them. We construct a wearable camera system on Raspberry Pi that captures facial images, verifies optical liveness against photo spoofing attacks, matches facial encodings, and announces recognized friend identities via bone-conduction headphones.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "HIGH-PRECISION VEHICLE NAVIGATION IN URBAN ENVIRONMENTS USING AN MEMS IMU AND SINGLE-FREQUENCY GPS RECEIVER",
    domain: "Vehicular Dead Reckoning & Sensor Fusion",
    category: "Intelligent Vehicles & VANET",
    tech: ["ARM Cortex-M4", "MEMS IMU (9-DOF)", "Ublox NEO-M8N GPS", "Extended Kalman Filter (EKF)", "CAN Bus"],
    description: "A continuous vehicular dead-reckoning navigation system sustaining high precision positioning during urban canyon GPS blackout tunnels.",
    abstract: "Urban skyscrapers cause severe GPS multipath reflections and satellite dropouts. This project builds a sensor fusion navigation unit integrating a 9-axis MEMS IMU with single-frequency GPS using an Extended Kalman Filter (EKF) to maintain uninterrupted centimeter-level vehicle trajectory estimation inside tunnels.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "MEASUREMENT SYSTEM WITH ACCELEROMETER INTEGRATED RFID TAG FOR INFRASTRUCTURE HEALTH MONITORING",
    domain: "Structural Health Monitoring & Passive RFID Telemetry",
    category: "Wearables & RFID Telemetry",
    tech: ["UHF RFID Reader", "MEMS Accelerometer Tag", "Energy Harvesting Circuit", "Vibration FFT Analyzer", "MATLAB"],
    description: "A wireless structural health monitoring network using accelerometer-integrated passive RFID tags to detect micro-cracks and bridge vibration resonance.",
    abstract: "Continuous bridge and high-rise structural monitoring requires batteryless sensor nodes. We develop a vibration monitoring system utilizing passive UHF RFID sensor tags integrated with 3-axis accelerometers that power up from reader RF energy, sample structural strain vibrations, and backscatter telemetry to monitoring gateways.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "NON-INTRUSIVE PLANNING THE ROADSIDE INFRASTRUCTURE FOR VEHICULAR NETWORKS",
    domain: "V2X Communication & RSU Deployment Optimization",
    category: "Intelligent Vehicles & VANET",
    tech: ["NS-3 / SUMO Simulator", "802.11p (DSRC)", "Genetic Algorithm RSU Placement", "Python Graph Engine", "OpenStreetMap"],
    description: "A simulation optimization framework strategically positioning Roadside Units (RSUs) along arterial road networks to maximize V2X connected car coverage.",
    abstract: "Deploying V2X Roadside Units (RSUs) across metropolitan cities involves high capital expenditures. This project develops a non-intrusive RSU placement optimizer in NS-3 and SUMO that uses traffic density flow matrices and Genetic Algorithms to achieve 98% vehicular communication coverage with minimal RSU installations.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 13,
    title: "IoT Localization for Bistatic Passive UHF RFID Systems with 3D Radiation Pattern",
    domain: "3D RFID Angle of Arrival & Spatial Tracking",
    category: "Wearables & RFID Telemetry",
    tech: ["Bistatic UHF RFID Reader", "Phase Difference of Arrival (PDoA)", "3D Radiation Modeling", "Python / NumPy", "RFID Tags"],
    description: "A 3D spatial RFID localization system computing tag spatial coordinates in warehouse environments by modeling antenna radiation phase differentials.",
    abstract: "Accurate item tracking in logistics warehouses requires 3D position awareness without active batteries. This project models a bistatic passive UHF RFID localization architecture. By evaluating phase difference of arrival (PDoA) and antenna 3D radiation directivity patterns, the algorithm locates tagged inventory items with centimeter precision.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 14,
    title: "NONLINEAR COORDINATED STEERING AND BRAKING CONTROL OF VISIONBASED AUTONOMOUS VEHICLES IN EMERGENCY OBSTACLE AVOIDANCE",
    domain: "Autonomous Driving Control & Emergency Collision Avoidance",
    category: "Intelligent Vehicles & VANET",
    tech: ["Raspberry Pi / Jetson", "Stereo Vision Camera", "Model Predictive Control (MPC)", "Electronic Braking Actuator", "Python"],
    description: "A coordinated steering and electronic braking controller for vision-guided self-driving vehicles executing high-speed emergency obstacle swerves.",
    abstract: "Emergency obstacle avoidance at highway speeds requires joint lateral and longitudinal stability control. This project designs a Model Predictive Control (MPC) system on an autonomous vehicular chassis that coordinates steering angle actuators and regenerative braking to execute collision-free evasion maneuvers without spinning out.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "PREFETCHING-BASED DATA DISSEMINATION IN VEHICULAR CLOUD SYSTEMS",
    domain: "Vehicular Edge Cloud & Content Caching",
    category: "Intelligent Vehicles & VANET",
    tech: ["SUMO / NS3", "Vehicular Edge Caching", "Markov Content Predictor", "V2V / V2I Dissemination", "Python"],
    description: "A predictive content prefetching protocol caching high-definition traffic maps and media streams at upcoming edge roadside servers along vehicle routes.",
    abstract: "Intermittent vehicular connectivity causes high latency during navigation map streaming. We propose a prefetching-based vehicular cloud dissemination scheme that predicts vehicle travel trajectories via Markov models and proactively stages content chunks at upcoming RSUs, reducing content delivery delays by 60%.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 16,
    title: "SIZING AND ANALYSIS OF RENEWABLE ENERGY AND BATTERY SYSTEMS IN RESIDENTIAL MICROGRIDS",
    domain: "Smart Microgrid & Renewable Energy Management",
    category: "Smart Energy & Microgrid",
    tech: ["Arduino Mega", "Solar PV / Battery Sensors", "Current/Voltage CT Transducers", "MATLAB Simulink", "ThingsBoard Dashboard"],
    description: "An IoT-connected residential microgrid controller optimizing solar photovoltaic harvesting, battery state-of-charge (SoC), and grid bi-directional metering.",
    abstract: "Residential solar microgrids require balanced energy dispatch to prevent battery degradation and peak utility surcharges. This project develops an intelligent energy manager using Arduino and current sensors that monitors solar generation, battery State of Charge, and dynamically switches residential loads between solar, battery, and the main grid.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 17,
    title: "SMART CONFIGURATION OF SMART ENVIRONMENTS",
    domain: "Zero-Configuration IoT & Context-Aware Actuation",
    category: "Home Automation & Smart Building",
    tech: ["ESP32 Mesh", "BLE Proximity Beacons", "Context-Aware Rule Engine", "MQTT Broker", "Web Dashboard"],
    description: "A zero-configuration smart space architecture automatically adapting lighting, temperature, and device privileges based on approaching user beacon profiles.",
    abstract: "Configuring heterogeneous IoT smart devices manually is cumbersome for end users. We propose a self-configuring smart environment protocol where ESP32 room gateways detect user BLE smart wearables and automatically load customized personalization profiles for ambient lighting and temperature without manual app intervention.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 18,
    title: "SMART ELECTRICITY METER DATA INTELLIGENCE FOR FUTURE ENERGY SYSTEMS A SURVEY",
    domain: "Smart Energy Metering & Non-Intrusive Load Monitoring (NILM)",
    category: "Smart Energy & Microgrid",
    tech: ["ESP32", "PZEM-004T Energy Meter", "NILM Disaggregation Algorithm", "MQTT Telemetry", "Grafana Dashboard"],
    description: "An IoT smart energy meter utilizing Non-Intrusive Load Monitoring (NILM) to disaggregate individual appliance power draw from a single metering point.",
    abstract: "Modern smart grids require granular consumer load intelligence without installing sensors on every appliance. This project implements an IoT smart electricity meter using ESP32 and PZEM-004T transducers that streams high-frequency power consumption telemetry and uses machine learning to classify individual appliance usage patterns.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 19,
    title: "TEACH ME–SHOW ME”—END-USER PERSONALIZATION OF A SMART HOME AND COMPANION ROBOT",
    domain: "End-User Programming & Social Robot Personalization",
    category: "Robotics & Assistive Tech",
    tech: ["Raspberry Pi", "Voice Command Recognition", "Action-Trigger Rule Engine", "Motorised Robot Base", "Python"],
    description: "A 'Show-and-Teach' interactive companion robot allowing non-technical users to program automated home routines via vocal commands and physical demonstrations.",
    abstract: "Home automation routines are often rigid and difficult for non-technical elderly users to customize. We design an interactive companion robot on Raspberry Pi that learns new household assistance behaviors through intuitive voice demonstrations and gestures, mapping user intent directly into IoT device control rules.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 20,
    title: "TOWARD A WEARABLE RFID SYSTEM FOR REAL-TIME ACTIVITY RECOGNITION USING RADIO PATTERNS",
    domain: "Wearable Activity Recognition & RF Scattering Analysis",
    category: "Wearables & RFID Telemetry",
    tech: ["UHF RFID Reader Tag Array", "Radio RSSI Pattern Analyzer", "CNN Activity Classifier", "Python Backend", "Real-Time GUI"],
    description: "A passive wearable RFID tag array woven into garments recognizing human physical activities (walking, sitting, falling) through RF scattering signatures.",
    abstract: "Wearable health sensors often require bulky batteries that impede user comfort. This project designs a battery-free activity recognition system using passive RFID tags attached to clothing. Human body movements modulate backscattered RF phase and RSSI patterns, which are classified by a Convolutional Neural Network into daily activities in real time.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 21,
    title: "VEHICLE-ASSISTED DEVICE-TO-DEVICE DATA DELIVERY FOR SMART GRID",
    domain: "V2G Communication & Smart Grid Neighborhood Mesh",
    category: "Smart Energy & Microgrid",
    tech: ["NS-3 Simulator", "D2D Communication", "Smart Grid AMI Protocol", "Vehicle-to-Grid Routing", "Python"],
    description: "A opportunistic store-carry-forward data mule routing scheme using moving electric vehicles to collect smart electricity meter data in rural areas.",
    abstract: "Rural smart grids lack cellular communication infrastructure for automated meter reading. We model a vehicle-assisted Device-to-Device (D2D) data mule collection protocol in NS-3 where transit electric vehicles collect smart meter data packets over DSRC/Wi-Fi and offload them to utility substation gateways during charging stops.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 22,
    title: "A TIME SYNCHRONIZATION TECHNIQUE FOR COAP-BASED HOME AUTOMATION SYSTEMS",
    domain: "Constrained Application Protocol (CoAP) & Microsecond Sync",
    category: "Home Automation & Smart Building",
    tech: ["ESP32 / Contiki-NG", "CoAP Protocol", "Lightweight Time Sync (LTS)", "UDP / IPv6 (6LoWPAN)", "Wireshark Telemetry"],
    description: "A microsecond-accurate time synchronization protocol tailored for low-power CoAP home automation sensor nodes over 6LoWPAN mesh networks.",
    abstract: "Coordinated sensor sampling and scheduled actuation in smart homes require strict time synchronization. Traditional NTP imposes excessive message overhead on battery-constrained nodes. We design a lightweight time synchronization mechanism in CoAP that synchronizes cluster nodes within 50 microseconds while reducing network traffic by 75%.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 23,
    title: "REAL-TIME GLOBAL LOCALIZATION OF ROBOTIC CARS IN LANE LEVEL VIA LANE MARKING DETECTION AND SHAPE REGISTRATION",
    domain: "Robotic Car Localization & Computer Vision Lane Mapping",
    category: "Intelligent Vehicles & VANET",
    tech: ["Raspberry Pi / Jetson Nano", "Wide-Angle HD Camera", "OpenCV Lane Extraction", "Point Cloud Registration", "ROS2"],
    description: "A lane-level centimeter localization system for robotic cars matching camera-detected road lane contours against lightweight vector map databases.",
    abstract: "Autonomous vehicles need lane-level localization that standard GPS cannot deliver. This project develops a real-time visual localization engine on a robotic car testbed. The system extracts road lane markings using perspective transforms and performs point-set shape registration against offline vector maps to achieve robust centimeter-accurate lane positioning.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 24,
    title: "AUTONOMOUS WEARABLE SYSTEM FOR VITAL SIGNS MEASUREMENT WITH ENERGY-HARVESTING MODULE",
    domain: "Self-Powered Medical Wearables & Thermoelectric Energy",
    category: "Wearables & RFID Telemetry",
    tech: ["ESP32-PICO", "Thermoelectric Generator (TEG)", "MAX30102 Pulse Oximeter", "BLE Telemetry", "Android App"],
    description: "A self-powered wearable health band harvesting body heat via thermoelectric generators to measure pulse rate and blood oxygen continuously.",
    abstract: "Frequent battery recharging limits the clinical utility of chronic patient monitoring wearables. We build an autonomous wearable vital signs band powered by body-heat thermoelectric generation (TEG) and supercapacitor storage. The system samples photoplethysmography (PPG) signals and transmits periodic SpO2 and heart-rate telemetry over BLE.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 25,
    title: "GENERATION OF A PRECISE AND EFFICIENT LANE-LEVEL ROAD MAP FOR INTELLIGENT VEHICLE SYSTEMS",
    domain: "HD Map Generation & Crowdsourced Vehicular Probes",
    category: "Intelligent Vehicles & VANET",
    tech: ["Python / GIS", "Crowdsourced GPS Trajectory Clustering", "Spline Fitting", "OpenDRIVE Exporter", "CARLA Simulator"],
    description: "An automated pipeline creating centimeter-precision High-Definition (HD) lane-level road network maps from aggregated consumer vehicle GPS traces.",
    abstract: "HD maps for autonomous driving are traditionally expensive to survey with mobile LiDAR rigs. This project designs a map generation algorithm in Python that clusters dense consumer vehicle trajectory traces, extracts roadway centerlines via B-spline fitting, and generates lane-level OpenDRIVE maps compatible with autonomous driving simulators.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "IEEE IoT Projects 2024 - 2025", path: "/2024-2025-iot-projects-chennai" },
  { label: "IEEE IoT Projects 2022 - 2023", path: "/iot-2022-2023-project-centers-chennai", active: true },
  { label: "IEEE IoT Projects 2021 - 2022", path: "/2021-2022-iot-projects-chennai" },
  { label: "IEEE IoT Projects 2020 - 2021", path: "/2020-2021-iot-projects-chennai" },
  { label: "IEEE IoT Projects 2019 - 2020", path: "/2019-2020-iot-projects-chennai" },
  { label: "IEEE IoT Projects 2018 - 2019", path: "/2018-2019-iot-projects-chennai" },
];

const domainCategories = [
  { label: "All Domains", value: "All", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
  { label: "Smart Environment & Sensor Networks", value: "Smart Environment & Sensor Networks", icon: <SensorsIcon sx={{ fontSize: 18 }} /> },
  { label: "Home Automation & Smart Building", value: "Home Automation & Smart Building", icon: <HomeIcon sx={{ fontSize: 18 }} /> },
  { label: "Intelligent Vehicles & VANET", value: "Intelligent Vehicles & VANET", icon: <DirectionsCarIcon sx={{ fontSize: 18 }} /> },
  { label: "Robotics & Assistive Tech", value: "Robotics & Assistive Tech", icon: <SmartToyIcon sx={{ fontSize: 18 }} /> },
  { label: "Wearables & RFID Telemetry", value: "Wearables & RFID Telemetry", icon: <ContactlessIcon sx={{ fontSize: 18 }} /> },
  { label: "Smart Energy & Microgrid", value: "Smart Energy & Microgrid", icon: <ElectricBoltIcon sx={{ fontSize: 18 }} /> },
];

export default function IotProjects2022() {
  const [projectsList, setProjectsList] = useState(iotProjects2022Data);
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
    academicYear: "2022 - 2023",
    projectRequirements: "IEEE IoT Projects 2022-2023 in Chennai",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=iot&year=2022 - 2023`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "Internet of Things & Connected Systems",
              category: item.category || "Smart Environment & Sensor Networks",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["ESP32", "Raspberry Pi", "Sensors", "Cloud Telemetry", "Python"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2022 - 2023",
              difficulty: item.difficulty || "Advanced",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2022-2023 IoT projects");
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

  const handleCopyTitle = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.captchaChecked) {
      alert("Please check the captcha verification box before submitting!");
      return;
    }
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        academic_year: formData.academicYear,
        project_requirements: formData.projectRequirements,
      };

      const res = await fetch(`${API_BASE}/enquiries.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Server submission error. Please reach out via WhatsApp or direct call.");
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-4 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs & Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <IotBrandIcon className="w-4 h-4" />
              IEEE IoT Projects 2022 – 2023
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
              Smart Cities • Assistive Robotics • Connected Vehicles • Microgrids • RFID Telemetry
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            IEEE IoT Projects{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              2022 – 2023
            </span>{" "}
            in Chennai
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mb-8 leading-relaxed">
            Discover pioneering Internet of Things (IoT) hardware innovations across Smart Home Automation, Unmanned Aerial Vehicles, Connected Autonomous Driving, Structural Health Monitoring, and Self-Powered Wearables with complete hardware circuits and source code.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects-directory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <SearchIcon sx={{ fontSize: 20 }} />
              Browse 2022-2023 IoT Titles
            </a>
            <a
              href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%20IEEE%20IoT%20Projects%202022-2023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon sx={{ fontSize: 20 }} />
              WhatsApp IoT Expert
            </a>
            <a
              href="tel:+919597793345"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition"
            >
              <PhoneIcon sx={{ fontSize: 18 }} />
              +91 9597793345
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-emerald-400">25+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">IEEE IoT 2022 Titles</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-teal-400">ESP32 / STM32</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Embedded Controller Kits</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-cyan-400">CoAP / MQTT</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">IoT Network Protocols</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-yellow-400">100%</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Hardware + Code + Report</div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Matrix Navigation */}
      <section className="py-6 bg-slate-900/90 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap pl-1">
              IoT Release Archives:
            </span>
            {yearNavigationLinks.map((yearLink, index) => (
              <Link
                key={index}
                to={yearLink.path}
                className={`text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 border ${
                  yearLink.active
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30"
                    : "bg-slate-950/60 text-slate-300 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {yearLink.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About IEEE 2022-2023 IoT Projects Section */}
      <section className="py-16 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                <AutoAwesomeIcon sx={{ fontSize: 14 }} />
                Connectivity &amp; Innovation
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
                ABOUT IEEE IOT PROJECT
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  IEEE Projects Provide 2022 2023 IOT IEEE Projects Association Of Physical Objects Or Things With Physics, Computer Code Programming, Device Circuits, And Sanctionative The Property For Exchanging Knowledge Between The Manufacturer Or In Operation Personnel Or Connected Devices Is Named As Web Of Things Or Shortly Termed As IOT.With The Advancement In Technology, The Potency, Accuracy, Simple Mistreatment Numerous Ways Like Remote Patient Health Observance System, The Energy Meter Reading System Over The Net, Then On Has Been Improved. Allow Us To Discuss A Couple Of Few New IOT Comes For B.Tech And M.Tech Engineering Students. But, Primarily We Have A Tendency To Should Grasp What Square Measure IOT Comes.
                </p>
                <p>
                  <strong>IEEE Project Centre, a catalyst for innovation where technology meets connectivity in the realm of IoT Projects for the years 2022-2023.</strong> As leaders in nurturing technical excellence among students, enthusiasts, and professionals, we’re excited to introduce a diverse range of IEEE IoT Projects that are set to redefine the landscape of the Internet of Things.
                </p>
                <p>
                  In the rapidly evolving landscape of IoT, IEEE IoT Projects 2022-2023 mark a pivotal phase with emerging technologies, advanced protocols, and transformative applications of connected devices. At IEEE Project Centre, we’ve carefully curated a collection of projects spanning a multitude of domains, from smart cities and wearable technology to industrial automation and healthcare solutions. Our primary goal is to provide you with not only projects, but immersive learning experiences that empower you to excel in the dynamic IoT ecosystem.
                </p>
                <p>
                  The Internet Of Things Comes Or IOT 2022 2023 Project Centers Chennai. Comes Area Unit Being Developed In Varied Fields Like Media, Environmental Observation, Infrastructure Management, Producing, Energy Management System, Medical System, Home Automation, And Transportation Systems. There Area Unit A Number Of Advanced Trends And Characteristics Of IOT Comes Like Intelligence, Design, Complex, Size Concerns.
                </p>
                <p>
                  Allow Us To Discuss Concerning New IOT Comes For B.Tech And M.Tech Engineering Students. There Area Unit Various IOT Comes For College Kids Like Underground Cable Fault Distance Police Investigation And Show Over The Net, Energy Meter Reading System Over The Net, Observation Of Generator Or Electrical Device Health Remotely Over The Net, Observation Of Patient Vital Sign Remotely Over The Net, Golem Applications Primarily Based Home Automation Through WLAN, And So On.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3 text-emerald-400 font-bold text-sm mb-1">
                    <CheckCircleIcon sx={{ fontSize: 18 }} />
                    Hardware Kit &amp; Schematics
                  </div>
                  <p className="text-xs text-slate-400">
                    Full hardware components delivered with breadboard circuits, custom PCB Gerber files, and pinout diagrams.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3 text-teal-400 font-bold text-sm mb-1">
                    <CheckCircleIcon sx={{ fontSize: 18 }} />
                    Cloud Telemetry &amp; Actuation
                  </div>
                  <p className="text-xs text-slate-400">
                    Live dashboards on AWS IoT Core, ThingsBoard, and Firebase with real-time graphs and remote relays.
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/40 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                    <MemoryIcon sx={{ fontSize: 28 }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">IoT System Architecture</h3>
                    <p className="text-xs text-slate-400">IEEE 2022-2023 End-to-End Stack</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-400 mb-1">
                      <span>1. PERCEPTION LAYER (EDGE SENSING)</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Sensors &amp; MCUs</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      UHF RFID tags, MAX30102 PPG, MQ gas sensors, IMUs, GPS receivers, and TEG energy harvesting modules.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                    <div className="flex items-center justify-between text-xs font-bold text-teal-300 mb-1">
                      <span>2. NETWORK &amp; TRANSPORT LAYER</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">CoAP / MQTT / DSRC</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      6LoWPAN mesh, IEEE 802.11p V2X, Bluetooth Low Energy (BLE), and lightweight CoAP microsecond synchronization.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-cyan-400 mb-1">
                      <span>3. APPLICATION &amp; CLOUD ANALYTICS</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">AWS / ThingsBoard</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Smart grid disaggregation, vehicular trajectory prediction, autonomous lane registration, and companion robotics.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Development Kits: ESP32 / STM32 / RPi 4</span>
                  <span className="text-emerald-400 font-semibold">C++ / Python / ROS2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Directory */}
      <section id="projects-directory" className="py-16 bg-slate-900/60 border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <SensorsIcon sx={{ fontSize: 14 }} />
                2022 – 2023 Catalogue
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                IEEE IOT PROJECT LIST 2022-2023
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Explore 25 IEEE Internet of Things project titles with complete hardware blueprints, embedded firmware, cloud servers, and IEEE papers.
              </p>
            </div>

            {/* View Switcher */}
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
              <button
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === "table"
                    ? "bg-emerald-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <TableRowsIcon sx={{ fontSize: 16 }} />
                <span>Table View</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === "grid"
                    ? "bg-emerald-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <GridViewIcon sx={{ fontSize: 16 }} />
                <span>Grid Cards</span>
              </button>
            </div>
          </div>

          {/* Search & Category Filter Station */}
          <div className="space-y-4 mb-8">
            {/* Search Bar */}
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" sx={{ fontSize: 20 }} />
              <input
                type="text"
                placeholder="Search IoT titles, domains (Vehicular, Robotics, RFID, Microgrid), sensors, or protocols (CoAP, MQTT)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-800 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
              {domainCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition border ${
                    activeCategory === cat.value
                      ? "bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30"
                      : "bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-xs text-slate-400 mb-4 flex items-center justify-between">
            <span>
              Showing <strong className="text-emerald-400">{filteredProjects.length}</strong> of{" "}
              {projectsList.length} IEEE IoT projects
            </span>
            {searchQuery && (
              <span className="text-amber-400">
                Filtered by &quot;{searchQuery}&quot;
              </span>
            )}
          </div>

          {/* Table View */}
          {viewMode === "table" ? (
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-900/90 text-xs uppercase font-bold text-slate-400 border-b border-slate-800 tracking-wider">
                  <tr>
                    <th className="py-4 px-4 w-16 text-center">S.No</th>
                    <th className="py-4 px-6 min-w-[340px]">Projects List (IEEE 2022-2023 IoT Titles)</th>
                    <th className="py-4 px-4 hidden md:table-cell">Domain / Category</th>
                    <th className="py-4 px-4 hidden lg:table-cell">Tooling Stack</th>
                    <th className="py-4 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-normal">
                  {filteredProjects.map((project, index) => (
                    <tr
                      key={project.id}
                      className="hover:bg-slate-900/50 transition-colors group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <td className="py-4 px-4 text-center font-bold text-slate-500 group-hover:text-emerald-400 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-semibold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                          {project.title}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {project.description}
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-2 md:hidden">
                          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                            {project.category}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900 border border-slate-700 text-slate-300">
                          {project.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {project.tech.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-900/90 text-emerald-300 border border-slate-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="px-3 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/50 text-emerald-300 text-xs font-semibold transition"
                            title="View Abstract & Deliverables"
                          >
                            Abstract
                          </button>
                          <button
                            onClick={() => handleCopyTitle(project.title, project.id)}
                            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition"
                            title="Copy Title"
                          >
                            {copiedId === project.id ? (
                              <CheckIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
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
                      <td colSpan={5} className="py-12 text-center text-slate-500">
                        No IoT projects match your search query. Try another keyword or select &quot;All Domains&quot;.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300">
                        S.No: {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{project.year}</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Domain Category
                      </div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-xs bg-slate-900 border border-slate-700 text-slate-300">
                        {project.category}
                      </span>
                    </div>

                    <div className="mb-6">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Technology Stack
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-emerald-300 border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/60 text-emerald-300 text-xs font-bold transition text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleCopyTitle(project.title, project.id)}
                      className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition"
                      title="Copy Title"
                    >
                      {copiedId === project.id ? (
                        <CheckIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
                      ) : (
                        <ContentCopyIcon sx={{ fontSize: 16 }} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* IoT Hardware & Cloud Architecture Showcase */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <SettingsSuggestIcon sx={{ fontSize: 16 }} />
              IoT Prototyping &amp; Protocols
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Embedded Systems, Microcontrollers &amp; Cloud Gateways
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Our 2022-2023 IoT projects integrate low-power microcontroller hardware with industrial IoT communication protocols and real-time cloud analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <MemoryIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">ESP32 &amp; NodeMCU</h3>
              <div className="text-xs text-emerald-400 font-semibold mb-2">Wi-Fi &amp; Bluetooth SoC</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dual-core Tensilica microcontrollers executing sensor acquisition, local cryptographic encryption, and edge computing logic.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
                <RouterIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">MQTT &amp; CoAP Gateways</h3>
              <div className="text-xs text-teal-400 font-semibold mb-2">Lightweight Messaging</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Publish-Subscribe broker architecture (Mosquitto/HiveMQ) ensuring ultra-low bandwidth consumption and reliable QoS delivery.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <CloudIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Cloud IoT Dashboards</h3>
              <div className="text-xs text-cyan-400 font-semibold mb-2">AWS IoT / ThingsBoard</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live sensor graphs, automated threshold triggers, SMS/Email alerts, and bidirectional device actuators.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <ContactlessIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">UHF RFID &amp; Wearables</h3>
              <div className="text-xs text-indigo-400 font-semibold mb-2">Passive RFID &amp; Energy Harvesting</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Battery-free tag arrays, PDoA spatial tracking, structural health vibration transducers, and self-powered TEG sensors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Enquiry & Guidance Form */}
      <section id="enquiry-form" className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950/90 border border-emerald-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                <IotBrandIcon className="w-3.5 h-3.5" />
                Reserve 2022-2023 IoT Project
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request Base Paper &amp; Live Hardware Demo
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Submit your chosen IEEE IoT 2022-2023 title below to receive the complete firmware code, circuit connection diagram, hardware components list, IEEE PDF paper, and PPT presentation.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 text-center">
                <CheckCircleIcon sx={{ fontSize: 48 }} className="text-emerald-400 mb-2" />
                <h3 className="text-lg font-bold text-white">Enquiry Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Our IoT &amp; Embedded Systems Project Lead will contact you shortly via phone &amp; WhatsApp with the project deliverables.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20just%20submitted%20my%20enquiry%20for%20IEEE%20IoT%20Projects%202022-2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                  >
                    <WhatsAppIcon sx={{ fontSize: 18 }} />
                    Direct WhatsApp Support
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Alex Daniel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Academic Year
                    </label>
                    <select
                      value={formData.academicYear}
                      onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 text-sm"
                    >
                      <option value="2024 - 2025">2024 - 2025</option>
                      <option value="2022 - 2023">2022 - 2023</option>
                      <option value="2021 - 2022">2021 - 2022</option>
                      <option value="2020 - 2021">2020 - 2021</option>
                      <option value="2019 - 2020">2019 - 2020</option>
                      <option value="2018 - 2019">2018 - 2019</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Selected IoT Title / Custom Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectRequirements}
                    onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                    placeholder="Enter project title name or specific sensor/hardware requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>

                {/* Captcha */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.captchaChecked}
                      onChange={(e) => setFormData({ ...formData, captchaChecked: e.target.checked })}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-800 border-slate-700"
                    />
                    <span className="text-xs text-slate-300">
                      I am not a robot (Verification Check)
                    </span>
                  </label>
                  <span className="text-[10px] text-slate-500">reCAPTCHA v3</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Submit 2022-2023 IoT Project Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Abstract Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-emerald-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">{selectedProject.year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                {selectedProject.title}
              </h3>

              <div className="space-y-4 text-slate-300 text-xs sm:text-sm">
                <div>
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    IEEE Research Abstract
                  </h4>
                  <p className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 leading-relaxed text-slate-300">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1.5">
                    Hardware, Protocols &amp; Tooling
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 text-emerald-300 border border-slate-800 text-xs font-medium"
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
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm transition text-center"
                  >
                    Select This Title &amp; Enquire
                  </button>
                  <a
                    href={`https://wa.me/919597793345?text=Hello%20IEEE%20Project%20Centre,%20I%20want%20IoT%20source%20code%20and%20hardware%20details%20for:%20${encodeURIComponent(
                      selectedProject.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition"
                  >
                    <WhatsAppIcon sx={{ fontSize: 18 }} />
                    <span>WhatsApp IoT Demo</span>
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
