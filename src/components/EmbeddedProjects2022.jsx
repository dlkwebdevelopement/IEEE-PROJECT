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
import MemoryIcon from "@mui/icons-material/Memory";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import HomeIcon from "@mui/icons-material/Home";
import TrafficIcon from "@mui/icons-material/Traffic";
import SecurityIcon from "@mui/icons-material/Security";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import AndroidIcon from "@mui/icons-material/Android";
import CodeIcon from "@mui/icons-material/Code";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TimelineIcon from "@mui/icons-material/Timeline";
import SpeedIcon from "@mui/icons-material/Speed";
import SmartToyIcon from "@mui/icons-material/SmartToy";

// Custom 3D Embedded Microcontroller / Chip Logo
const EmbeddedBrandIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#embGrad2022)" stroke="#38BDF8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="embGrad2022" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0369A1" />
        <stop offset="0.5" stopColor="#0284C7" />
        <stop offset="1" stopColor="#38BDF8" />
      </linearGradient>
    </defs>
    {/* Microchip Core Die */}
    <rect x="15" y="15" width="18" height="18" rx="3" fill="#082F49" stroke="#7DD3FC" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="3" fill="#38BDF8" />
    {/* Chip Pins Top/Bottom */}
    <line x1="14" y1="4" x2="14" y2="8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="4" x2="24" y2="8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="4" x2="34" y2="8" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="40" x2="14" y2="44" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="40" x2="24" y2="44" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="40" x2="34" y2="44" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    {/* Chip Pins Left/Right */}
    <line x1="4" y1="14" x2="8" y2="14" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="24" x2="8" y2="24" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="34" x2="8" y2="34" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="14" x2="44" y2="14" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="24" x2="44" y2="24" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="34" x2="44" y2="34" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 2022-2023 Embedded Systems Project Dataset (24 Unique Titles across 5 Categories)
const embeddedProjects2022Data = [
  {
    id: 1,
    title: "Home Automation Using Android",
    domain: "Smart Home Automation & BLE Microcontroller Switching",
    category: "Home Automation & Smart Appliances",
    tech: ["STM32 / ESP32-S3", "Bluetooth BLE 5.0", "Android App (Flutter / Jetpack Compose)", "Optoisolated Relay Bank", "FreeRTOS"],
    description: "An advanced Bluetooth BLE smart home hub switching domestic electrical appliances from an Android smartphone with real-time feedback.",
    abstract: "Modern smart homes require low-latency wireless appliance management. This project develops an embedded home automation controller using an STM32/ESP32 microcontroller with a Bluetooth BLE 5.0 module and optoisolated solid-state relays. Users effortlessly monitor power states and switch multiple domestic AC appliances from an intuitive Android application.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Android Controlled Wildlife Observation Robot",
    domain: "Surveillance Robotics & Low-Noise Telemetry",
    category: "Robotics & Autonomous Vehicles",
    tech: ["ARM Cortex-M4 / Arduino Mega", "ESP32-CAM HD Video", "Bluetooth / Wi-Fi Dual Link", "L298N Motor Driver", "Android Tele-Op App"],
    description: "A silent reconnaissance rover with an HD video streamer and Android touch controls designed for wildlife exploration without human disturbance.",
    abstract: "Observing endangered animal behaviors requires stealthy, non-invasive robotic rovers. We implement a mobile observation rover featuring silent planetary DC gear motors, an ESP32-CAM wireless video streamer, and multi-sensor telemetry. Researchers pilot the robot via Android joystick controls while viewing live video feeds.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Android Antenna Positioning System",
    domain: "Precision Mechatronics & Stepper Motor Angle Control",
    category: "Industrial & Motor Control",
    tech: ["PIC18F / STM32", "High-Torque Stepper Motor", "A4988 Microstepping Driver", "Bluetooth UART", "Android Azimuth App"],
    description: "A precision closed-loop antenna orienter positioning directional communication dishes to target satellite azimuth coordinates via Android.",
    abstract: "Accurate directional dish antenna orientation maximizes satellite link signal-to-noise ratio. This project creates an automated antenna positioning mount driven by microstepping bipolar motors. Operators input target azimuth and elevation angles on an Android smartphone, and the microcontroller calibrates position using magnetic rotary encoders.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Android Military Spying & Bomb Disposal Robot",
    domain: "Defense Mechatronics & Hazardous Manipulator Arm",
    category: "Robotics & Autonomous Vehicles",
    tech: ["STM32F4 / AVR ATmega2560", "6-DOF Robotic Claw", "Night Vision FPV Camera", "High-Torque Metal Gear Motors", "Android Command Console"],
    description: "A tactical military scout rover with a multi-axis manipulator arm and live night vision streaming to safely inspect and neutralize explosive threats.",
    abstract: "Disarming hazardous ordnance demands reliable remote manipulation. This project implements a heavy-duty scout robot equipped with a 6-axis robotic gripper arm, high-intensity IR night-vision cameras, and wireless Bluetooth/RF transceivers. Defense squads command both vehicular movement and precision grasping from a secure Android tablet.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "Digitally Controlled Home Automation Project",
    domain: "Digital Appliance Management & Surge Protection",
    category: "Home Automation & Smart Appliances",
    tech: ["Microchip PIC16F877A", "Optoisolated Triac Drivers", "Zero-Crossing Circuit", "16x2 LCD Display", "Capacitive Touch Keypad"],
    description: "A solid-state digital home controller providing spark-free AC load switching, timer sequencing, and electrical surge suppression.",
    abstract: "Mechanical relays in home automation suffer from contact bounce and electrical arc degradation. We construct a digital solid-state appliance controller featuring optocoupled triacs and zero-crossing detection. The system delivers microsecond-level load switching with active overload cutoffs and live LCD status reporting.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "Android Controlled Induction Motor with 7 segment display",
    domain: "Industrial Power Electronics & AC Drive Speed Regulation",
    category: "Industrial & Motor Control",
    tech: ["ARM Cortex-M0 / 8051", "TRIAC Phase Angle Control", "Zero-Cross Optical Isolator", "Dual 7-Segment Displays", "Android BLE App"],
    description: "A closed-loop speed regulation system for single-phase AC induction motors with Android digital RPM presets and seven-segment display telemetry.",
    abstract: "Modulating induction motor RPM via digital phase-angle regulation offers superior energy efficiency compared to resistive controls. This project integrates an optical zero-cross sensor and triac driver circuit with an ARM Cortex microcontroller. Speed values selected on an Android app adjust firing angles while updating real-time numeric displays.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Android Controlled Notice Board Project",
    domain: "Wireless Display Telemetry & UART Bulletin Messaging",
    category: "Wireless Display & Communication",
    tech: ["STM32 / ATmega328P", "Bluetooth HC-05", "P10 LED Matrix Display", "Android Message Broadcaster", "EEPROM Buffer"],
    description: "A high-visibility wireless electronic notice board displaying campus bulletins transmitted over Bluetooth from an authorized Android smartphone.",
    abstract: "Digital notice boards eliminate paper waste and enable instant emergency broadcasting. This project develops a wireless bulletin system using high-brightness outdoor P10 LED matrix panels and an embedded microcontroller. Authorized administrators compose messages in an Android application that scroll smoothly in real-time.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "Density based traffic controller with android overriding ability",
    domain: "Intelligent Transportation Systems & Emergency Clearance",
    category: "Traffic & Infrastructure",
    tech: ["ARM Cortex-M3 / STM32", "High-Sensitivity IR Sensor Arrays", "High-Power Signal LED Arrays", "Bluetooth Priority Link", "Android Emergency App"],
    description: "An adaptive 4-way traffic junction automatically timing green signals by measuring vehicular queue density with Android priority override for ambulances.",
    abstract: "Static traffic signal timings result in gridlocks during peak hours. This project engineers a density-responsive traffic controller with multi-stage infrared vehicle queue sensors. The algorithm calculates optimum green-light durations across lanes while allowing emergency vehicles (ambulances/fire trucks) to override signals green from an Android app.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "Hovercraft Controlled By Android",
    domain: "Amphibious Mechatronics & Aerodynamic Cushion Steering",
    category: "Robotics & Autonomous Vehicles",
    tech: ["Arduino Mega / STM32", "High-RPM BLDC Lift & Thrust Motors", "Electronic Speed Controllers (ESC)", "Bluetooth 4.0 BLE", "Android Accelerometer Tilt App"],
    description: "An amphibious hovercraft gliding over water and smooth terrain on a pressurized air cushion, steered by smartphone accelerometer tilt gestures.",
    abstract: "Amphibious robotics provides transport across transitionary wetland environments. We engineer a functional scale hovercraft with high-RPM brushless DC motors generating air-cushion lift and directional thrust. The onboard microcontroller translates phone accelerometer tilt angles into proportional rudder servo angles.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Android Controlled Automobile",
    domain: "Vehicular Tele-operation & Smart Car Navigation",
    category: "Robotics & Autonomous Vehicles",
    tech: ["STM32 / PIC Microcontroller", "L298N Dual H-Bridge Motor Driver", "Ultrasonic Collision Avoidance", "Bluetooth HC-05", "Android Virtual Steering GUI"],
    description: "A smartphone-piloted robotic automobile testbed featuring proportional acceleration, active reverse braking, and automated obstacle avoidance.",
    abstract: "Wireless tele-operation is foundational to autonomous vehicle development. This project designs a 4-wheel robotic automobile controlled over Bluetooth from an Android device. The smartphone GUI features virtual accelerator sliders and responsive steering controls with automatic ultrasonic emergency braking.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 11,
    title: "Android Controlled Pick And Place Robotic Arm Vehicle Project",
    domain: "Mobile Manipulation & Industrial Logistics",
    category: "Robotics & Autonomous Vehicles",
    tech: ["ATmega2560 / STM32", "4-DOF Robotic Gripper Arm", "Metal Gear DC Drive Motors", "Bluetooth BLE", "Android Dual Joystick App"],
    description: "A mobile robotic transporter combining an articulated servo gripper arm with an all-terrain vehicle base commanded via Android.",
    abstract: "Hazardous material transport requires unmanned mobile manipulators. This project builds a pick-and-place robot mounted on a high-torque chassis. The Android controller provides dual touchpads to simultaneously steer the rover and actuate the multi-axis servo mechanical claw.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "Android Controlled Robotic Arm",
    domain: "Articulated Robotic Joint Servo Positioning",
    category: "Robotics & Autonomous Vehicles",
    tech: ["STM32 / PIC18F", "High-Torque MG996R Servos", "PWM Pulse Generator", "Bluetooth UART", "Android Multi-Axis GUI"],
    description: "A tabletop 4-degree-of-freedom articulated robotic arm with multi-axis joint interpolation controlled via an Android touchscreen interface.",
    abstract: "Precision servo control powers robotic automation lines. This project implements a 4-axis articulated robotic manipulator. The microcontroller generates microsecond PWM pulses to coordinate base rotation, shoulder pitch, elbow pitch, and gripper clamping based on Android slider coordinates.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Programmable Sequential Load Operation Controlled By Android Application Project",
    domain: "Industrial Automation & Sequential Power Staging",
    category: "Industrial & Motor Control",
    tech: ["ARM Cortex-M0 / 8051", "Multi-Channel Relay Array", "DS3231 Real-Time Clock", "Bluetooth BLE", "Android Sequence Programmer App"],
    description: "An automated industrial scheduler enabling factory managers to configure timed multi-channel load switching sequences from an Android phone.",
    abstract: "Simultaneous startup of heavy machinery causes massive grid inrush currents. This project creates a programmable multi-channel sequence timer using an ARM microcontroller and precision RTC. Plant engineers configure start delays and cyclic duty cycles via an Android smartphone.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 14,
    title: "Android Password Based Remote Door Opener System Project",
    domain: "Electronic Access Control & Encrypted Solenoid Lock",
    category: "Wireless Security & Access Control",
    tech: ["STM32 / PIC Microcontroller", "12V Solenoid Deadbolt Lock", "Bluetooth HC-05", "Android Cryptographic Keypad", "Piezo Alarm"],
    description: "A high-security smart door lock system that actuates electronic deadbolts only upon verifying encrypted PINs entered on authorized Android devices.",
    abstract: "Smart electronic access improves residential and commercial security. This project builds an automated door lock featuring a high-force solenoid deadbolt and microcontroller. The lock engages only when a matching cryptographic passkey is transmitted from an authorized Android smartphone.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 15,
    title: "Android Controlled Remote Password Security",
    domain: "Anti-Brute Force Authentication & Intrusion Prevention",
    category: "Wireless Security & Access Control",
    tech: ["PIC18F / AVR", "Internal EEPROM Security Key", "Bluetooth Link", "Intrusion Attempt Counter", "Android App"],
    description: "A wireless security gatekeeper with anti-tamper lockout mechanisms and remote smartphone passcode authentication.",
    abstract: "Securing restricted infrastructure demands defense against unauthorized access attempts. This project develops an embedded security module where credentials entered on Android are validated. Three consecutive incorrect attempts trigger an alarm and lock out the system for a predefined timeout.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 16,
    title: "Android Controlled Railway Level Gate Control",
    domain: "Railway Safety & Automated Road Barrier Crossing",
    category: "Traffic & Infrastructure",
    tech: ["STM32 / 8051", "Track Laser / IR Probes", "High-Torque Servo Barrier Gate", "Acoustic Warning Sirens", "Android Station Master Console"],
    description: "An automated railway crossing system with acoustic flashers, obstacle clearance sensors, and wireless station master emergency override via Android.",
    abstract: "Unmanned level crossings pose immense safety hazards. This project engineers an automated railway crossing system with bidirectional track sensors that detect train arrival, lower motorized gate barriers, and sound sirens. Station controllers maintain manual override capabilities via an Android console.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 17,
    title: "Android Controlled Remote AC Power Control",
    domain: "AC Solid-State Phase Modulation & Energy Efficiency",
    category: "Home Automation & Smart Appliances",
    tech: ["ARM Cortex-M0 / PIC16F", "MOC3021 Opto-TRIAC", "Zero-Crossing Detection Circuit", "Android Linear Slider", "Embedded C"],
    description: "A high-efficiency AC power regulator enabling Android devices to smoothly modulate fan speeds and light brightness across 100 fine levels.",
    abstract: "Digital phase modulation provides energy-efficient AC power regulation without heat losses. We develop an optoisolated triac power controller synchronized with AC zero crossings. An Android slider seamlessly adjusts firing delays to modulate delivered AC power.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 18,
    title: "Robot Controlled By Android Application",
    domain: "Differential Drive Robotics & Wireless Joystick Navigation",
    category: "Robotics & Autonomous Vehicles",
    tech: ["STM32 / ATmega328P", "L293D Dual H-Bridge Driver", "Bluetooth HC-05", "Android Gyroscope & Joystick GUI", "Rechargeable Li-Ion Pack"],
    description: "A nimble differential-drive robotic rover steered in all directions (Forward, Backward, Left, Right, 360 Spin) via an Android application.",
    abstract: "Wireless mobile robotics provides versatile platforms for inspection and logistics. In this project, a dual-motor differential drive rover is controlled via Bluetooth character packets from an Android smartphone with smooth PWM velocity modulation.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 19,
    title: "Home Appliance Control Using Android Application Project",
    domain: "Smart Home Management & 8-Channel Relay Switching",
    category: "Home Automation & Smart Appliances",
    tech: ["PIC16F877A / STM32", "8-Channel Optoisolated Relays", "Bluetooth BLE Module", "Android Smart Home App", "OLED Display"],
    description: "A multi-channel appliance switching hub controlling up to 8 independent domestic loads with instant state feedback on an OLED screen.",
    abstract: "Consolidated home automation empowers users to manage multiple high-power electrical loads from a single interface. This project features an 8-channel relay board driven by a microcontroller. An Android application provides toggle controls with state updates displayed on an onboard OLED panel.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 20,
    title: "Android Controlled Fire Fighter Robot",
    domain: "Disaster Response Robotics & Flame Extinguishing",
    category: "Robotics & Autonomous Vehicles",
    tech: ["STM32 / ATmega32", "Infrared Flame Sensor Array", "Submersible DC Water Pump", "Extinguisher Water Cannon", "Android Tele-Operation"],
    description: "A disaster response firefighting rover equipped with optical flame sensors, a high-pressure water cannon, and remote Android steering.",
    abstract: "Industrial fire outbreaks present extreme hazards to emergency personnel. This project builds a compact firefighting robot carrying an onboard water reservoir and DC pump nozzle. The robot navigates toward fire hotspots under Android command and sprays pressurized water extinguishing the blaze.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 21,
    title: "Android Controlled Based Spy Robot With Night Vision Camera",
    domain: "Defense Reconnaissance & Infrared Night Vision",
    category: "Robotics & Autonomous Vehicles",
    tech: ["STM32F4 / PIC", "IR Night Vision Wireless Cam", "Bluetooth BLE / 2.4GHz RF", "High-Torque DC Gear Motors", "Android Video Receiver"],
    description: "A covert reconnaissance robot equipped with infrared night-vision optics streaming live covert audio-visuals to an Android mobile device.",
    abstract: "Tactical night scouting requires covert operation and zero-light vision. This project presents a robotic scout rover equipped with high-intensity infrared illumination and a wireless camera transmitting clear video in complete darkness, steered remotely via Android.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 22,
    title: "Voice Based Notice Board Using Android",
    domain: "Speech Recognition & Speech-to-Text Electronic Display",
    category: "Wireless Display & Communication",
    tech: ["STM32 / Arduino", "Google Speech-to-Text API", "Bluetooth Serial Link", "P10 Scrolling LED Display", "Voice Command Parser"],
    description: "A voice-activated electronic notice board converting spoken audio into scrolling alphanumeric text on high-brightness LED matrices.",
    abstract: "Voice input speeds up emergency message broadcasting. This project integrates Android speech recognition with an embedded LED display. Spoken sentences are converted to text strings on the phone and wirelessly transmitted to a microcontroller driving large scrolling LED boards.",
    year: "2022 - 2023",
    difficulty: "Intermediate",
  },
  {
    id: 23,
    title: "Android Circuit Breaker",
    domain: "Industrial Electrical Safety & Authenticated Remote Trip",
    category: "Industrial & Motor Control",
    tech: ["STM32 / 8051", "High-Current AC Contactor Relay", "ACS712 Current Sensor", "Bluetooth Module", "Android Maintenance Security App"],
    description: "An intelligent digital circuit breaker providing password-authenticated remote line trip and reconnection for electrical maintenance technicians.",
    abstract: "Electrical linemen face life-threatening shock hazards if lines are accidentally energized during maintenance. This project develops an authenticated smart circuit breaker. Technicians trip and lock power lines remotely from their smartphone with personal PIN protection.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
  {
    id: 24,
    title: "Traffic Density Control With Android Override Using Avr",
    domain: "Intelligent Traffic Regulation & Emergency Routing",
    category: "Traffic & Infrastructure",
    tech: ["AVR ATmega32", "Photodiode IR Sensor Matrix", "Dynamic Signal Controller", "Android Bluetooth Link", "Embedded C"],
    description: "A smart AVR microcontroller traffic management system optimizing green light durations according to real-time lane density with Android emergency clearance.",
    abstract: "Traffic congestion wastes time and fuel in metropolitan areas. In this project, an AVR microcontroller calculates real-time vehicle density at a 4-way intersection using IR sensor pairs. The algorithm dynamically adjusts green signal time slots while providing emergency clearance override through an Android application.",
    year: "2022 - 2023",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "Embedded Projects 2022 - 2023", path: "/embedded-ieee-projects-2022-2023", active: true },
  { label: "Embedded Projects 2021 - 2022", path: "/embedded-systems-projects-2021-2022-chennai" },
  { label: "Embedded Projects 2020 - 2021", path: "/embedded-systems-projects-2020-2021-chennai" },
  { label: "Embedded Projects 2019 - 2020", path: "/embedded-systems-domain-2019-2020-chennai" },
  { label: "Embedded Projects 2018 - 2019", path: "/embedded-systems-projects-2018-2019-chennai" },
  { label: "Embedded Projects 2017 - 2018", path: "/embedded-systems-projects-2017-2018-chennai" },
  { label: "Embedded Projects 2016 - 2017", path: "/embedded-systems-projects-2016-2017-chennai" },
  { label: "Embedded Projects 2015 - 2016", path: "/embedded-systems-projects-2015-2016-chennai" },
  { label: "Embedded Projects 2014 - 2015", path: "/http-dhanamfoundationindia-coembedded-ieee-projects-2014-2015-in-chennai" },
  { label: "Embedded Projects 2013 - 2014", path: "/embedded-systems-projects-2013-2014-chennai" },
];

const domainCategories = [
  { label: "All Domains", value: "All", icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
  { label: "Robotics & Autonomous Vehicles", value: "Robotics & Autonomous Vehicles", icon: <SmartToyIcon sx={{ fontSize: 18 }} /> },
  { label: "Home Automation & Smart Appliances", value: "Home Automation & Smart Appliances", icon: <HomeIcon sx={{ fontSize: 18 }} /> },
  { label: "Industrial & Motor Control", value: "Industrial & Motor Control", icon: <ElectricBoltIcon sx={{ fontSize: 18 }} /> },
  { label: "Traffic & Infrastructure", value: "Traffic & Infrastructure", icon: <TrafficIcon sx={{ fontSize: 18 }} /> },
  { label: "Wireless Security & Access Control", value: "Wireless Security & Access Control", icon: <SecurityIcon sx={{ fontSize: 18 }} /> },
  { label: "Wireless Display & Communication", value: "Wireless Display & Communication", icon: <BluetoothIcon sx={{ fontSize: 18 }} /> },
];

export default function EmbeddedProjects2022() {
  const [projectsList, setProjectsList] = useState(embeddedProjects2022Data);
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
    projectRequirements: "Embedded Systems Projects 2022-2023 in Chennai",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=embedded&year=2022 - 2023`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "Embedded Systems & Microcontrollers",
              category: item.category || "Robotics & Autonomous Vehicles",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["STM32", "ESP32", "PIC", "Bluetooth", "Android App"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2022 - 2023",
              difficulty: item.difficulty || "Intermediate",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2022-2023 Embedded projects");
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!formData.captchaChecked) {
      alert("Please verify the human verification checkbox.");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      academic_year: formData.academicYear,
      project_requirements: formData.projectRequirements,
    };

    fetch(`${API_BASE}/enquiries.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        setSubmitted(true);
      });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs & Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <EmbeddedBrandIcon className="w-4 h-4" />
              Embedded Systems Projects 2022 – 2023
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
              ARM Cortex-M4 • ESP32 • PIC • FreeRTOS • Android BLE • Sensor Hubs
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            2022 – 2023 Embedded System Projects{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
              in Chennai
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mb-8 leading-relaxed">
            Build state-of-the-art embedded systems and Android-interfaced robotic controllers with customized circuit schematics, ARM Cortex firmware, physical hardware testing, and complete IEEE project documentation in Chennai.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects-directory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <SearchIcon sx={{ fontSize: 20 }} />
              Browse 2022-2023 Embedded Titles
            </a>
            <a
              href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%202022-2023%20Embedded%20Systems%20Projects%20in%20Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon sx={{ fontSize: 20 }} />
              WhatsApp Embedded Expert
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
              <div className="text-2xl font-black text-sky-400">24+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Embedded 2022 Titles</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-cyan-400">STM32 / ESP32 / ARM</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Microcontroller Hardware Kits</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-blue-400">Android BLE App</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Wireless Smart Interfaces</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Hardware + Code + Base Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Matrix Navigation */}
      <section className="py-6 bg-slate-900/90 border-b border-slate-800 sticky top-16 z-30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap pl-1">
              Embedded Release Archives:
            </span>
            {yearNavigationLinks.map((yearLink, index) => (
              <Link
                key={index}
                to={yearLink.path}
                className={`text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 border ${
                  yearLink.active
                    ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white border-sky-400 shadow-md shadow-sky-600/30"
                    : "bg-slate-950/60 text-slate-300 border-slate-800 hover:border-sky-500/50 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {yearLink.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Embedded System Project 2022 - 2023 Section */}
      <section className="py-16 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
                <AutoAwesomeIcon sx={{ fontSize: 14 }} />
                Hardware-Software Co-Design
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
                ABOUT EMBEDDED SYSTEM PROJECT
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <blockquote className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-sky-400 text-sky-200 font-medium italic">
                  “A Precise Definition of Embedded Systems is Not Easy. Simply Stated, all Computing Systems other than General Purpose Computer (with Monitor, Keyboard, Etc.) are Embedded Systems.”
                </blockquote>

                <p>
                  Embedded system projects epitomize innovation at the intersection of hardware and software. These projects involve designing and implementing functional systems within constrained environments. From IoT devices and wearable technology to automotive systems and industrial automation, Embedded System Projects showcase creativity and problem-solving.
                </p>

                <p>
                  <strong>IEEE Project Centre</strong>, a hub of creativity and technology convergence, where possibilities unfold in the realm of Embedded System Projects for the years 2022-2023. As champions of technical brilliance among students, enthusiasts, and professionals, we are delighted to introduce a wide array of IEEE Embedded System Projects that are poised to redefine the landscape of innovation and hardware integration.
                </p>

                <p>
                  In the swiftly advancing world of embedded systems, IEEE EMBEDDED SYSTEM 2022-2023 mark a pivotal phase with emerging technologies, advanced microcontrollers, and transformative applications. At IEEE Project Centre, we’ve meticulously curated a range of projects encompassing diverse domains, from robotics and IoT devices to real-time control systems and wearable gadgets. Our primary aim is to provide you not just with projects, but with immersive learning experiences that equip you to excel in the dynamic field of Embedded Systems.
                </p>
              </div>
            </div>

            {/* Feature Highlights Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-sky-950/40 border border-sky-500/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400">
                    <PrecisionManufacturingIcon sx={{ fontSize: 28 }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">2022-2023 Embedded Deliverables</h3>
                    <p className="text-xs text-slate-400">Complete Hardware &amp; Firmware Kit</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-sky-400 mb-1">
                      <span>1. PHYSICAL HARDWARE CIRCUIT</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">STM32 / ESP32 / PIC</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Assembled microcontrollers, sensors, motor drivers, Bluetooth modules, and power supplies.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30">
                    <div className="flex items-center justify-between text-xs font-bold text-cyan-300 mb-1">
                      <span>2. EMBEDDED C / RTOS FIRMWARE</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">Keil / STM32CubeIDE</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Cleanly commented firmware source code, hex file generation, UART protocol drivers, and Android APK interface.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-blue-400 mb-1">
                      <span>3. IEEE PAPERS &amp; PPT SLIDES</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">Complete Reports</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Circuit diagrams, Proteus simulation files, thesis documentation, and project defense PowerPoint slides.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Directory Section */}
      <section id="projects-directory" className="py-16 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
                <CodeIcon sx={{ fontSize: 14 }} />
                2022-2023 Project Catalog
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Embedded System Projects List (2022-2023)
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-2xl">
                Explore Android-controlled rovers, smart home automation, industrial power electronics, and intelligent infrastructure systems.
              </p>
            </div>

            {/* View Mode & Count */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-400">
                Showing <strong className="text-sky-400">{filteredProjects.length}</strong> Titles
              </span>
              <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800">
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition ${
                    viewMode === "table" ? "bg-sky-600 text-white shadow" : "text-slate-400 hover:text-white"
                  }`}
                  title="Table View"
                >
                  <TableRowsIcon sx={{ fontSize: 16 }} />
                  Table
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition ${
                    viewMode === "grid" ? "bg-sky-600 text-white shadow" : "text-slate-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <GridViewIcon sx={{ fontSize: 16 }} />
                  Cards
                </button>
              </div>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="space-y-4 mb-8">
            <div className="relative">
              <SearchIcon sx={{ fontSize: 20 }} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search embedded projects by title, microcontroller (STM32, PIC, ARM), or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-white text-sm placeholder-slate-500 transition outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
              {domainCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                    activeCategory === cat.value
                      ? "bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/25"
                      : "bg-slate-950/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects View: Table Mode */}
          {viewMode === "table" ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900/90 text-slate-300 uppercase text-[11px] font-bold tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-4 px-4 sm:px-6 w-16 text-center">S.No</th>
                      <th className="py-4 px-4 sm:px-6">Project Title &amp; Domain</th>
                      <th className="py-4 px-4 sm:px-6 hidden md:table-cell">Hardware &amp; Tech Stack</th>
                      <th className="py-4 px-4 sm:px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredProjects.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-12 text-center text-slate-500">
                          No embedded projects found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredProjects.map((project, idx) => (
                        <tr
                          key={project.id}
                          className="hover:bg-slate-900/50 transition-colors group cursor-pointer"
                          onClick={() => setSelectedProject(project)}
                        >
                          <td className="py-4 px-4 sm:px-6 text-center font-mono text-xs text-sky-400 font-bold">
                            #{idx + 1}
                          </td>
                          <td className="py-4 px-4 sm:px-6">
                            <div className="font-bold text-white group-hover:text-sky-300 transition-colors">
                              {project.title}
                            </div>
                            <div className="text-xs text-slate-400 mt-1 flex flex-wrap items-center gap-2">
                              <span className="text-sky-400/90 font-medium">{project.domain}</span>
                              <span className="text-slate-600">•</span>
                              <span className="text-slate-400">{project.category}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 hidden md:table-cell">
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((t, i) => (
                                <span
                                  key={i}
                                  className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 text-center" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => setSelectedProject(project)}
                                className="px-3 py-1.5 rounded-lg bg-sky-950 border border-sky-500/40 text-sky-300 hover:bg-sky-600 hover:text-white text-xs font-semibold transition"
                              >
                                View Details
                              </button>
                              <button
                                onClick={() => handleCopyTitle(project.title, project.id)}
                                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
                                title="Copy Title"
                              >
                                {copiedId === project.id ? (
                                  <CheckCircleIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
                                ) : (
                                  <ContentCopyIcon sx={{ fontSize: 16 }} />
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
          ) : (
            /* Projects View: Grid Cards Mode */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.length === 0 ? (
                <div className="col-span-full py-12 text-center text-slate-500">
                  No embedded projects found matching your search.
                </div>
              ) : (
                filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-2xl bg-slate-950 border border-slate-800/90 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-500/30">
                          #{idx + 1}
                        </span>
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2 leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs font-medium text-sky-400/90 mb-3">{project.domain}</p>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 py-2 rounded-lg bg-sky-950/80 hover:bg-sky-600 border border-sky-500/30 hover:border-sky-500 text-sky-300 hover:text-white text-xs font-semibold transition text-center"
                        >
                          View Details &amp; Abstract
                        </button>
                        <button
                          onClick={() => handleCopyTitle(project.title, project.id)}
                          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition"
                          title="Copy Title"
                        >
                          {copiedId === project.id ? (
                            <CheckCircleIcon sx={{ fontSize: 16 }} className="text-emerald-400" />
                          ) : (
                            <ContentCopyIcon sx={{ fontSize: 16 }} />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition"
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded-md border border-sky-500/30">
                  {selectedProject.year}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                {selectedProject.title}
              </h3>

              <p className="text-sm font-semibold text-sky-400 mb-6">{selectedProject.domain}</p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    System Abstract
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                    {selectedProject.abstract}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Hardware &amp; Software Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-lg bg-sky-950/60 border border-sky-500/30 text-sky-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20want%20to%20develop%20the%202022-2023%20Embedded%20project:%20${encodeURIComponent(
                    selectedProject.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition"
                >
                  <WhatsAppIcon sx={{ fontSize: 18 }} />
                  Enquire on WhatsApp
                </a>
                <button
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      projectRequirements: `Enquiry for: ${selectedProject.title} (Embedded 2022-2023)`,
                    }));
                    setSelectedProject(null);
                    const el = document.getElementById("enquiry-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition"
                >
                  Book This Project
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Embedded Project Guidance & Architecture Section */}
      <section className="py-16 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
              <SettingsSuggestIcon sx={{ fontSize: 14 }} />
              Professional Mentorship
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Choose IEEE Project Centre for 2022-2023 Embedded Projects?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              From hardware-software co-design to real-time operating systems and thesis defense guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <MemoryIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ARM Cortex &amp; RTOS</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hands-on development across STM32 ARM Cortex-M4/M7, ESP32-S3, PIC18F, and FreeRTOS preemptive multitasking kernels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <AndroidIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Wireless Android Apps</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Native Android Bluetooth and BLE dashboard applications with telemetry graphs, touchpads, and multi-relay controls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <SpeedIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">100% Real Hardware Kits</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero simulation compromises. Every project includes fully assembled physical hardware, schematic files, and base papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Enquiry & Booking Form */}
      <section id="enquiry-section" className="py-16 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-500/30">
                Enrollment &amp; Project Booking
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                Get Started on Your 2022-2023 Embedded Project
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Fill out the form below to receive physical circuit kits, complete firmware source code, and mentorship in Chennai.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center"
              >
                <CheckCircleIcon sx={{ fontSize: 48 }} className="text-emerald-400 mb-3" />
                <h3 className="text-xl font-bold text-white">Thank You for Reaching Out!</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Our Embedded Systems Technical Lead will contact you shortly via phone &amp; WhatsApp with hardware deliverables.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold transition"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arun Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. arun@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Mobile / WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Academic Year
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={formData.academicYear}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-sm outline-none cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Requirement / Title Interest
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectRequirements}
                    onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-sky-500 text-white text-sm outline-none transition"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="emb2022-captcha"
                    required
                    checked={formData.captchaChecked}
                    onChange={(e) => setFormData({ ...formData, captchaChecked: e.target.checked })}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-sky-600 focus:ring-sky-500"
                  />
                  <label htmlFor="emb2022-captcha" className="text-xs text-slate-400">
                    I verify that I am a student or researcher requesting project development guidance.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-600/20 transition transform hover:-translate-y-0.5"
                >
                  Submit Project Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
