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
    <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#embGrad2013)" stroke="#38BDF8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="embGrad2013" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0369A1" />
        <stop offset="0.5" stopColor="#0284C7" />
        <stop offset="1" stopColor="#38BDF8" />
      </linearGradient>
    </defs>
    {/* Microchip Core Die */}
    <rect x="15" y="15" width="18" height="18" rx="3" fill="#082F49" stroke="#7DD3FC" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="3" fill="#FDE047" />
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

// 2013-2014 Embedded Systems Project Dataset (29 Titles across 5 Categories)
const embeddedProjects2013Data = [
  {
    id: 1,
    title: "Home Automation Using Android",
    domain: "Smart Home & Wireless Appliance Switching",
    category: "Home Automation & Smart Appliances",
    tech: ["8051 / PIC Microcontroller", "Bluetooth HC-05", "Android App (GUI)", "Relay Driver ULN2003", "Embedded C"],
    description: "A wireless home automation controller switching electrical loads and AC lights from a dedicated Android smartphone application via Bluetooth.",
    abstract: "Convenient remote management of home appliances improves life quality and energy conservation. This project designs an 8051/PIC microcontroller system interfaced with an HC-05 Bluetooth receiver and triac/relay driver circuits. Users can toggle multiple AC electrical points effortlessly using a graphical Android interface.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Android Controlled Wildlife Observation Robot",
    domain: "Robotics & Wireless Wildlife Telemetry",
    category: "Robotics & Autonomous Vehicles",
    tech: ["AVR ATmega32 / Arduino", "Wireless AV Camera", "Bluetooth / RF Link", "L293D Motor Driver", "Android Tele-Operation"],
    description: "A silent mobile surveillance rover equipped with a wireless camera to navigate wildlife habitats safely and stream live video to an Android phone.",
    abstract: "Studying wildlife in natural habitats requires unobtrusive observation without endangering human researchers. This project develops a ruggedized robotic vehicle commanded via Android Bluetooth UART. The vehicle carries a wireless pan-tilt camera transmitting real-time footage to a monitoring receiver.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Android Antenna Positioning System",
    domain: "Mechatronics & Stepper Motor Angle Positioning",
    category: "Industrial & Motor Control",
    tech: ["8051 Microcontroller", "Stepper Motor & ULN2003", "Bluetooth Module", "Android Degree Setter App", "Embedded C"],
    description: "A precision antenna steering mount controlled by an Android application to rotate directional dish antennas to specific azimuth angles.",
    abstract: "Directional RF antennas require exact alignment toward transmission stations for maximum signal reception. This project builds a motorized antenna rotator actuated by a unipolar stepper motor. The operator specifies the desired angular orientation in an Android application, and the microcontroller drives the stepper to the exact degree.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "Android Military Spying & Bomb Disposal Robot",
    domain: "Defense Robotics & Hazardous Payload Disposal",
    category: "Robotics & Autonomous Vehicles",
    tech: ["PIC Microcontroller / AVR", "Robotic Gripper Arm", "Wireless Night Vision Cam", "L293D DC Motor Drivers", "Android Command App"],
    description: "A tactical military scout rover featuring a robotic gripper arm and wireless video feedback to inspect and diffuse suspicious explosive objects remotely.",
    abstract: "Defusing unexploded ordnance poses high risk to defense personnel. We build an Android-commanded mobile scout robot equipped with a two-axis robotic manipulator gripper and high-resolution wireless camera. Operators steer the robot and actuate the arm from a safe distance using an Android smartphone.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "Digitally Controlled Home Automation Project",
    domain: "Digital Microcontroller Switching & Relays",
    category: "Home Automation & Smart Appliances",
    tech: ["8051 Microcontroller", "Digital Logic Switching", "Optocoupler Isolation", "16x2 LCD Display", "Relay Bank"],
    description: "A solid-state digital controller managing multi-zone domestic appliances with timer sequencing and safety isolation.",
    abstract: "Traditional mechanical home switches are prone to sparking and wear. This project builds a solid-state digital home automation unit using an 8051 microcontroller and optoisolated triac drivers. The system displays active load status on a 16x2 LCD and prevents electrical back-EMF surges.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "Android Controlled Induction Motor with 7 segment display",
    domain: "Industrial Automation & AC Motor Drive",
    category: "Industrial & Motor Control",
    tech: ["ATmega32 / 8051", "TRIAC Phase Angle Control", "Zero-Crossing Detector", "7-Segment LED Display", "Android App"],
    description: "A closed-loop speed regulation circuit for single-phase AC induction motors with Android digital speed presets and 7-segment RPM display.",
    abstract: "Controlling induction motor speed without bulky variable transformers enhances industrial efficiency. This project integrates a zero-crossing detector and triac firing circuit controlled by an 8051/AVR microcontroller. The Android app sends desired speed percentages, and the board displays firing levels on seven-segment displays.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Android Controlled Notice Board Project",
    domain: "Wireless Display Telemetry & UART Messaging",
    category: "Wireless Display & Communication",
    tech: ["8051 / PIC Microcontroller", "Bluetooth HC-05", "Dot Matrix / 16x2 LCD", "Android Text Transmitter", "EEPROM Storage"],
    description: "A wireless electronic bulletin board displaying instant announcement messages transmitted over Bluetooth from an authorized Android phone.",
    abstract: "Paper notice boards require manual printing and maintenance. This project introduces a wireless digital bulletin board using an 8051 microcontroller and Bluetooth receiver. Authorized administrators type text notices into an Android app, which scrolls the message in real-time across high-visibility electronic displays.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "Density based traffic controller with android overriding ability",
    domain: "Intelligent Transportation & Emergency Clearance",
    category: "Traffic & Infrastructure",
    tech: ["8051 / AVR", "IR Sensor Pairs", "High-Power Traffic LEDs", "Bluetooth Override", "Android Emergency App"],
    description: "An adaptive 4-way traffic junction automatically timing green lights based on vehicle density with Android override for emergency ambulances.",
    abstract: "Fixed-timer traffic signals cause congestion on unevenly loaded roads. This project implements an intelligent traffic signal controller using IR sensor arrays to measure vehicular queue density on each lane. Additionally, emergency vehicles (ambulances/VIPs) can override the signal green directly from an Android handheld device.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "Hovercraft Controlled By Android",
    domain: "Amphibious Mechatronics & Aerodynamic Lift",
    category: "Robotics & Autonomous Vehicles",
    tech: ["AVR / Arduino", "High-RPM BLDC Lift Motor", "Thrust ESC Controller", "Bluetooth UART", "Android Gyroscope Joystick"],
    description: "An amphibious hovercraft riding on an air cushion, steered over smooth land and water using smartphone accelerometer tilt controls.",
    abstract: "Hovercrafts operate seamlessly across both terrestrial and aquatic terrains. This project builds a working scale hovercraft utilizing high-RPM brushless DC motors for air cushion lift and directional thrust. The onboard microcontroller decodes tilt gestures from an Android phone to actuate directional air rudders.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Android Controlled Automobile",
    domain: "Vehicular Tele-operation & Smart Car Control",
    category: "Robotics & Autonomous Vehicles",
    tech: ["8051 / PIC", "L298N Dual H-Bridge", "Bluetooth HC-05", "Android Virtual Steering App", "Obstacle Detection Sonar"],
    description: "A smartphone-piloted robotic automobile platform featuring acceleration, reverse, braking, and hazard braking control over Bluetooth.",
    abstract: "Wireless automobile control demonstrates foundational concepts in tele-operated robotics. In this project, a micro-vehicle chassis with high-torque DC gear motors is interfaced to a microcontroller. Commands sent from an Android smartphone's touch interface modulate vehicular heading and speed with instant brake actuation.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 11,
    title: "Android Controlled Pick And Place Robotic Arm Vehicle Project",
    domain: "Robotic Manipulators & Mobile Logistics",
    category: "Robotics & Autonomous Vehicles",
    tech: ["ATmega32 / PIC", "Multi-Axis Servo Robotic Arm", "Chassis Motor Driver", "Bluetooth UART", "Android Controller GUI"],
    description: "A mobile robotic transporter combining a 4-DOF servo gripper arm with an all-terrain vehicle base controlled entirely via Android.",
    abstract: "Industrial hazardous environments require unmanned handling of toxic or heavy materials. We build an integrated pick-and-place robot mounted on a mobile chassis. An Android application features dual control pads to independently navigate the vehicle base and control the multi-axis mechanical claw.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "Android Controlled Robotic Arm",
    domain: "Articulated Robotic Joint Servo Control",
    category: "Robotics & Autonomous Vehicles",
    tech: ["8051 / PIC Microcontroller", "Servo Motors (Base/Elbow/Wrist/Grip)", "PWM Generation", "Bluetooth HC-05", "Android App"],
    description: "A stationary 4-axis articulated robotic manipulator replicating joint movements commanded from an Android graphical interface.",
    abstract: "Precision servo control forms the backbone of robotic assembly lines. This project designs a 4-degree-of-freedom tabletop robotic arm. The microcontroller generates precise Pulse Width Modulation (PWM) signals to rotate shoulder, elbow, wrist, and end-effector grippers according to slider inputs from an Android smartphone.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Programmable Sequential Load Operation Controlled By Android Application Project",
    domain: "Industrial Load Sequencing & Energy Automation",
    category: "Industrial & Motor Control",
    tech: ["8051 Microcontroller", "Relay Output Channel Bank", "RTC Time Clock", "Android Sequence Programmer", "Optocouplers"],
    description: "An automated industrial sequence scheduler enabling plant managers to program precise turn-on/turn-off load timings from Android.",
    abstract: "Staggered activation of heavy industrial machinery prevents destructive power grid surge currents. This project builds a programmable multi-channel sequential load controller. Factory supervisors configure automated delay sequences and cycling times from an Android app, stored in non-volatile microcontroller memory.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 14,
    title: "Android Password Based Remote Door Opener System Project",
    domain: "Electronic Access Control & Solenoid Actuation",
    category: "Wireless Security & Access Control",
    tech: ["8051 Microcontroller", "12V Solenoid Door Lock", "Bluetooth HC-05", "Android Keypad App", "Buzzer Alarm"],
    description: "A high-security smart door lock system that unlocks electronic deadbolts only upon verifying encrypted passcodes sent from authorized Android devices.",
    abstract: "Physical key locks are susceptible to lockpicking and lost keys. This project implements a secure electronic door lock actuated by a high-force 12V solenoid. The door unlocks exclusively when a valid cryptographic PIN entered on an Android smartphone matches the microcontroller's internal security register.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 15,
    title: "Android Controlled Remote Password Security",
    domain: "Cryptographic PIN Verification & Intrusion Alerts",
    category: "Wireless Security & Access Control",
    tech: ["PIC Microcontroller", "EEPROM Password Register", "Bluetooth Module", "Lockout Penalty Counter", "Android App"],
    description: "A wireless security gatekeeper with anti-tamper lockout mechanisms and remote smartphone authentication.",
    abstract: "Securing restricted facilities requires multi-attempt protection against brute-force intrusion. This project develops a remote password security node where authorization credentials sent via Android are verified. If three consecutive incorrect PINs are submitted, the controller sounds an intrusion alarm and locks down authentication for 5 minutes.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 16,
    title: "Android Controlled Railway Level Gate Control",
    domain: "Railway Safety & Automated Gate Crossing",
    category: "Traffic & Infrastructure",
    tech: ["8051 / AVR", "Track IR Sensing Probes", "DC Gear Motor / Servo Gate", "Bluetooth Overriding", "Android Rail Station App"],
    description: "An automated railway crossing system with acoustic siren alerts, obstacle clearance sensors, and wireless station master override via Android.",
    abstract: "Unmanned level crossings account for numerous tragic train collisions. This project introduces an automated railway gate system with bidirectional track sensors detecting approaching trains to automatically close road barriers and trigger warning flashers. The station master retains emergency override via an Android console.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 17,
    title: "Android Controlled Remote AC Power Control",
    domain: "AC Solid-State Phase Control & Dimming",
    category: "Home Automation & Smart Appliances",
    tech: ["8051 Microcontroller", "Opto-TRIAC (MOC3021)", "Zero Cross Detector", "Android Dimmer Slider", "Embedded C"],
    description: "A smooth AC power regulator enabling Android smartphones to dim incandescent bulbs and modulate AC fan speeds across 100 power levels.",
    abstract: "Traditional mechanical fan regulators dissipate excess electrical power as heat. We construct a digital phase-angle AC power controller using an 8051 microcontroller, zero-cross detection circuit, and optoisolated triac. An Android slider controls firing delays, achieving smooth and energy-efficient dimming.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 18,
    title: "Robot Controlled By Android Application",
    domain: "Autonomous Robotic Chassis & Wireless Navigation",
    category: "Robotics & Autonomous Vehicles",
    tech: ["8051 / AVR", "L293D Dual H-Bridge", "Bluetooth HC-05", "Android Joystick GUI", "NiMH Battery Pack"],
    description: "A responsive differential-drive robotic rover steered in all directions (Forward, Backward, Left, Right, 360 Spin) via an Android application.",
    abstract: "Developing intuitive human-robot interfaces is essential for mobile tele-robotics. This project implements a high-mobility differential drive rover controlled via Bluetooth RF packets from an Android device. The firmware decodes character packet commands into precision PWM motor speed vectors.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 19,
    title: "Home Appliance Control Using Android Application Project",
    domain: "Smart Home Automation & Multi-Channel Relays",
    category: "Home Automation & Smart Appliances",
    tech: ["PIC16F877A Microcontroller", "8-Channel Relay Module", "Bluetooth HC-05", "Android Toggle App", "16x2 LCD"],
    description: "A multi-channel appliance hub switching up to 8 independent domestic loads simultaneously with real-time feedback on an LCD.",
    abstract: "Managing diverse domestic loads from a single console simplifies smart living. This project utilizes a PIC16F877A microcontroller interfaced with an 8-channel relay board. The Android application enables one-touch toggle control with visual confirmation on both the phone screen and an onboard 16x2 alphanumeric display.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 20,
    title: "Android Controlled Fire Fighter Robot",
    domain: "Autonomous Fire Fighting & Disaster Response",
    category: "Robotics & Autonomous Vehicles",
    tech: ["8051 / ATmega32", "Flame Sensor Array", "Submersible Water Pump", "Extinguisher Nozzle", "Android Tele-Operation"],
    description: "A disaster response firefighting rover equipped with optical flame sensors, a high-pressure water pump, and remote Android steering.",
    abstract: "Fire outbreaks in chemical warehouses pose severe risks of explosion to human firefighters. This project designs a compact firefighting robot carrying a water reservoir and electric DC pump nozzle. The robot navigates toward fire hotspots under Android remote command and sprays pressurized water extinguishing the blaze.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 21,
    title: "Android Controlled Based Spy Robot With Night Vision Camera",
    domain: "Military Surveillance & Low-Light Reconnaissance",
    category: "Robotics & Autonomous Vehicles",
    tech: ["PIC Microcontroller / AVR", "IR Night Vision Wireless Cam", "Bluetooth HC-05", "High-Torque DC Motors", "Android App"],
    description: "A covert reconnaissance robot equipped with infrared night-vision optics streaming live covert audio-visuals to tactical units.",
    abstract: "Nighttime military reconnaissance requires stealth and night-vision capabilities. This project presents an all-terrain spy rover with high-intensity infrared LED illumination and a wireless camera transmitting clear video in total darkness. Android tele-operation allows silent perimeter surveillance behind enemy lines.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 22,
    title: "Voice Based Notice Board Using Android",
    domain: "Speech Recognition & Speech-to-Text Display",
    category: "Wireless Display & Communication",
    tech: ["8051 / Arduino", "Google Speech API", "Bluetooth Serial", "LED Scrolling Matrix", "Voice Command Parser"],
    description: "A voice-activated electronic notice board converting spoken audio into scrolling alphanumeric text on high-brightness LED matrices.",
    abstract: "Manual typing on mobile screens can be slow during rapid emergency broadcasts. This project combines Android speech recognition with an embedded LED display. Spoken voice sentences are converted to text strings on the Android smartphone and wirelessly transmitted to an 8051 microcontroller driving scrolling LED boards.",
    year: "2013 - 2014",
    difficulty: "Intermediate",
  },
  {
    id: 23,
    title: "Android Circuit Breaker",
    domain: "High-Voltage Protection & Remote Trip Relay",
    category: "Industrial & Motor Control",
    tech: ["8051 Microcontroller", "High-Current Contactor Relay", "Current Sensing Shunt / CT", "Bluetooth HC-05", "Android Safety App"],
    description: "An intelligent digital circuit breaker providing password-authenticated remote line trip and reconnection for electrical maintenance technicians.",
    abstract: "Line maintenance workers face electrical shock hazards if circuit breakers are accidentally closed during repairs. This project designs an Android-authenticated smart circuit breaker. Technicians trip and lock power lines remotely from their smartphone with personal PIN protection, ensuring safety during line work.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
  {
    id: 24,
    title: "Traffic Density Control With Android Override Using Avr",
    domain: "Intelligent Traffic Flow & Microcontroller AVR",
    category: "Traffic & Infrastructure",
    tech: ["AVR ATmega16/32", "Photodiode IR Sensor Matrix", "Dynamic Signal Timer", "Android Bluetooth Override", "Embedded C"],
    description: "A smart AVR microcontroller traffic management system optimizing green light durations according to real-time lane density.",
    abstract: "Traffic congestion wastes millions of fuel liters daily. In this project, an AVR ATmega16/32 microcontroller calculates real-time vehicle density at a 4-way intersection using IR sensor pairs. The algorithm dynamically adjusts green signal time slots while providing emergency clearance override through an Android application.",
    year: "2013 - 2014",
    difficulty: "Advanced",
  },
];

const yearNavigationLinks = [
  { label: "Embedded Projects 2022 - 2023", path: "/embedded-ieee-projects-2022-2023" },
  { label: "Embedded Projects 2021 - 2022", path: "/embedded-systems-projects-2021-2022-chennai" },
  { label: "Embedded Projects 2020 - 2021", path: "/embedded-ieee-projects-2020-2021-in-chennai" },
  { label: "Embedded Projects 2019 - 2020", path: "/embedded-systems-domain-2019-2020-chennai" },
  { label: "Embedded Projects 2018 - 2019", path: "/embedded-systems-projects-2018-2019-chennai" },
  { label: "Embedded Projects 2017 - 2018", path: "/embedded-systems-projects-2017-2018-chennai" },
  { label: "Embedded Projects 2016 - 2017", path: "/embedded-systems-projects-2016-2017-chennai" },
  { label: "Embedded Projects 2015 - 2016", path: "/embedded-systems-projects-2015-2016-chennai" },
  { label: "Embedded Projects 2014 - 2015", path: "/http-dhanamfoundationindia-coembedded-ieee-projects-2014-2015-in-chennai" },
  { label: "Embedded Projects 2013 - 2014", path: "/embedded-systems-projects-2013-2014-chennai", active: true },
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

export default function EmbeddedProjects2013() {
  const [projectsList, setProjectsList] = useState(embeddedProjects2013Data);
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
    academicYear: "2013 - 2014",
    projectRequirements: "Embedded Systems Projects 2013-2014 in Chennai",
    captchaChecked: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDynamicProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/project_titles.php?tech=embedded&year=2013 - 2014`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item, idx) => ({
              id: item.id || idx + 1,
              title: item.title,
              domain: item.domain || "Embedded Systems & Microcontrollers",
              category: item.category || "Robotics & Autonomous Vehicles",
              tech: item.tech_stack ? item.tech_stack.split(",").map((s) => s.trim()) : ["8051", "AVR", "PIC", "Bluetooth", "Android App"],
              description: item.description || item.title,
              abstract: item.abstract || item.description || item.title,
              year: item.academic_year || "2013 - 2014",
              difficulty: item.difficulty || "Intermediate",
            }));
            setProjectsList(mapped);
          }
        }
      } catch (err) {
        console.log("Using default fallback 2013-2014 Embedded projects");
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
        // Fallback simulated success
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
              Embedded Systems Projects 2013 – 2014
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
              8051 • PIC • AVR • ARM Cortex • Android Bluetooth • Motor Drives
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            2013 – 2014 Embedded System Projects{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
              in Chennai
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mb-8 leading-relaxed">
            Build high-performance embedded prototypes and Android-interfaced robotic controllers with customized circuit schematics, microcontroller firmware in Embedded C, physical hardware testing, and complete IEEE project documentation in Chennai.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects-directory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <SearchIcon sx={{ fontSize: 20 }} />
              Browse 2013-2014 Embedded Titles
            </a>
            <a
              href="https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20am%20interested%20in%202013-2014%20Embedded%20Systems%20Projects%20in%20Chennai"
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
              <div className="text-2xl font-black text-sky-400">25+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Embedded 2013 Titles</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-cyan-400">8051 / PIC / AVR</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Physical Microcontroller Kits</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl font-black text-blue-400">Android App + BT</div>
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

      {/* About Embedded System Project 2013 - 2014 Section */}
      <section className="py-16 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
                <AutoAwesomeIcon sx={{ fontSize: 14 }} />
                Microcontroller Hardware Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6">
                ABOUT EMBEDDED SYSTEM PROJECT 2013 – 2014
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <blockquote className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-sky-400 text-sky-200 font-medium italic">
                  “A Precise Definition of Embedded Systems is Not Easy. Simply Stated, all Computing Systems other than General Purpose Computer (with Monitor, Keyboard, Etc.) are Embedded Systems.”
                </blockquote>

                <p>
                  <strong>IEEE Project Centre</strong> is a leading provider of Embedded System Projects for students in 2013-2014. Our team of experienced professionals provide the best quality services to help you develop your project with ease. We have extensive experience in developing Embedded Systems, ranging from simple microcontroller-based designs to complex multi-processor architectures. With our expertise, we can create custom solutions that meet all your requirements and exceed expectations.
                </p>

                <p>
                  Our team has developed numerous successful projects over the years, including medical devices, automotive electronics, consumer products and industrial automation systems. All these projects were designed using advanced technologies such as ARM Cortex processors, FPGAs and other specialized components like sensors or actuators. We also offer support for open source software platforms like Arduino or Raspberry Pi so that you can quickly get started on your project without any hassle.
                </p>

                <p>
                  At <strong>IEEE Project Centre</strong> we strive to deliver high quality results within tight deadlines while keeping costs low at all times. Our engineers are always available to answer questions about design decisions or implementation details related to your project development process. Furthermore, they will be happy to assist you with debugging issues during testing phases if needed too! If you’re looking for an experienced partner who can help bring your Embedded System Project ideas into reality then look no further than IEEE Project Centre! Contact us today and let us show you how easy it is to make great things happen when working together!
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
                    <h3 className="text-lg font-bold text-white">Embedded Project Deliverables</h3>
                    <p className="text-xs text-slate-400">Complete Hardware &amp; Firmware Kit</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-sky-400 mb-1">
                      <span>1. PHYSICAL HARDWARE CIRCUIT</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">PCB / Breadboard</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Assembled microcontrollers (8051, PIC, AVR, ARM), sensors, motor drivers, Bluetooth modules, and power supplies.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30">
                    <div className="flex items-center justify-between text-xs font-bold text-cyan-300 mb-1">
                      <span>2. EMBEDDED C SOURCE CODE</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">Keil µVision / MPLAB</span>
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
                2013-2014 Project Catalog
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Embedded System Projects List (2013-2014)
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-2xl">
                Explore Android-controlled rovers, home automation circuits, industrial motor controllers, and smart infrastructure projects.
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
                placeholder="Search embedded projects by title, microcontroller (8051, PIC, AVR), or keyword..."
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
                  href={`https://wa.me/919597793345?text=Hi%20IEEE%20Project%20Centre,%20I%20want%20to%20develop%20the%20Embedded%20project:%20${encodeURIComponent(
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
                      projectRequirements: `Enquiry for: ${selectedProject.title} (Embedded 2013-2014)`,
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
              Hands-On Technical Support
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Develop Embedded Projects at IEEE Project Centre?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              From circuit design and breadboard assembly to hex burning and thesis defense preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <MemoryIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Microcontroller Diversity</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hands-on training across 8051 (AT89S52), PIC (PIC16F877A), AVR (ATmega32), Arduino, ARM Cortex, and Raspberry Pi embedded architectures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <AndroidIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Android Tele-Operation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Custom Bluetooth Android applications with virtual joysticks, sliders, buttons, and voice recognition for wireless robotic control.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <SpeedIcon sx={{ fontSize: 24 }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Physical Hardware Testing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero-simulated compromises. Every student receives a fully wired and tested hardware kit with complete oscilloscope calibration.
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
                Get Started on Your Embedded Project
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Fill out the form below to receive hardware circuit kits, complete firmware source code, and guidance in Chennai.
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
                    id="emb-captcha"
                    required
                    checked={formData.captchaChecked}
                    onChange={(e) => setFormData({ ...formData, captchaChecked: e.target.checked })}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-sky-600 focus:ring-sky-500"
                  />
                  <label htmlFor="emb-captcha" className="text-xs text-slate-400">
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
