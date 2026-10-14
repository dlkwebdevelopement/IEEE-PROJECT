// Power Electronics IEEE Project Master Dataset & API Bridge
import { API_BASE } from "../api";

export const powerElectronicsProjects2020 = [
  {
    id: 1,
    title: "Front-End Isolated Quasi-Z-Source DC-DC Converter Modules in Series for Photovoltaic High Voltage DC Applications",
    domain: "Quasi-Z-Source & High-Gain DC-DC",
    category: "Solar PV & Renewable Converters",
    tech: ["MATLAB / Simulink", "Quasi-Z-Source Network", "High Voltage DC (HVDC)", "MOSFET / IGBT", "PLECS"],
    description: "An isolated modular series Quasi-Z-Source DC-DC converter boosting solar array output to high-voltage DC distribution buses.",
    abstract: "Photovoltaic farm integration into HVDC networks requires ultra-high voltage step-up with galvanic isolation. This project designs modular series-connected Quasi-Z-Source DC-DC converters achieving continuous input current, low component voltage stress, and soft-switching Zero Voltage Switching (ZVS) under varying solar irradiance.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "A Single-Phase PV Quasi-Z-Source Inverter With Reduced Capacitance Using Modified Modulation and Double-Frequency Ripple Suppression Control",
    domain: "Ripple Suppression & Inverter Modulation",
    category: "Solar PV & Renewable Converters",
    tech: ["MATLAB / Simulink", "qZSI Topology", "Second-Harmonic Current Suppression", "SPWM / SVPWM", "DSP / FPGA"],
    description: "A single-phase PV Quasi-Z-Source Inverter (qZSI) minimizing DC-link capacitor sizing via modified shoot-through pulse-width modulation.",
    abstract: "Single-phase grid-tied PV inverters suffer from double-frequency (2\u03c9) power ripples that degrade battery/PV lifespan and necessitate bulky electrolytic capacitors. We implement an active ripple suppression control algorithm and modified shoot-through SPWM in MATLAB/Simulink that shrinks required DC-link capacitance by 60%.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Highly Efficient Asymmetrical PWM Full-Bridge Converter for Renewable Energy Sources",
    domain: "Soft-Switching Full-Bridge Converters",
    category: "DC-DC Converters & SMPS",
    tech: ["MATLAB / Simulink", "Asymmetrical PWM (APWM)", "Zero Voltage Switching (ZVS)", "Planar Transformer"],
    description: "An asymmetrical PWM full-bridge DC-DC converter achieving full-range ZVS turn-on and eliminating secondary parasitic ringing.",
    abstract: "Renewable energy battery-charging interfaces require high efficiency across broad load ranges. This project constructs an APWM full-bridge topology with an auxiliary clamp inductor that achieves zero-voltage switching across 10% to 100% load variations with over 97.2% peak conversion efficiency.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "A High-Efficiency Flyback Micro-inverter With a New Adaptive Snubber for Photovoltaic Applications",
    domain: "PV Micro-inverters & Snubber Circuits",
    category: "Solar PV & Renewable Converters",
    tech: ["MATLAB / Simulink", "Flyback Topology", "Active Clamp Snubber", "MPPT Perturb & Observe", "DSPIC / TMS320"],
    description: "A high-power-density flyback PV micro-inverter utilizing an adaptive regenerative snubber to reclaim leakage inductance energy.",
    abstract: "Flyback micro-inverters are popular for module-level power electronics (MLPE) but dissipate significant energy in passive RCD snubbers. We model an adaptive active-clamp snubber in Simulink that recycles transformer leakage energy to the grid, boosting European weighted efficiency to 96.5%.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "An Optimal Method to Design a Trap-CL Filter for a PV AC-Module Based on Flyback Inverter",
    domain: "Grid Filter Design & EMI Suppression",
    category: "Grid-Tied Inverters & Power Quality",
    tech: ["MATLAB / Simulink", "Trap-CL Filter", "Total Harmonic Distortion (THD)", "IEEE 519 Standard", "Bode Analysis"],
    description: "An optimal Trap-CL grid filter design suppressing high-frequency switching harmonics and adhering to IEEE 519 grid standards.",
    abstract: "Grid-tied solar micro-inverters require compact output filters to meet stringent harmonic distortion norms. This design introduces a tuned Trap-CL filter methodology that attenuates switching frequency sidebands by 45 dB with smaller magnetic footprint compared to conventional LCL filters.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "Design and Analysis of a High Efficiency DC–DC Converter With Soft Switching Capability for Renewable Energy Applications Requiring High Voltage Gain",
    domain: "High-Gain Coupled-Inductor Boost",
    category: "DC-DC Converters & SMPS",
    tech: ["MATLAB / Simulink", "Coupled Inductor", "Switched Capacitor Cell", "ZCS / ZVS", "Hardware Prototype"],
    description: "A non-isolated high-gain DC-DC converter combining coupled inductors with switched-capacitor voltage multiplier cells.",
    abstract: "Low-voltage fuel cells and solar panels generate 24V-48V DC, requiring boosting to 400V DC for grid inverters. This project presents a high-gain converter utilizing coupled-inductor energy recirculation and soft-switching to deliver a 10x voltage gain without extreme duty cycles.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 7,
    title: "Single Phase Cascaded H5 Inverter with Leakage Current Elimination for Transformerless Photovoltaic System",
    domain: "Transformerless PV & Common-Mode Voltage",
    category: "Solar PV & Renewable Converters",
    tech: ["MATLAB / Simulink", "H5 Inverter Topology", "Common Mode Leakage Current", "Grid Synchronization (PLL)"],
    description: "A transformerless H5 solar inverter topology decoupling DC and AC sides during freewheeling to eliminate parasitic ground leakage currents.",
    abstract: "Transformerless PV systems suffer from high-frequency common-mode voltages charging parasitic solar panel capacitances to earth ground. We implement an H5 bridge in Simulink with optimized gate-drive logic that keeps common-mode voltage constant, reducing leakage ground currents below DIN V VDE 0126-1-1 thresholds (30mA).",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "Development of DC/DC Converter for Battery Energy Storage Supporting Railway DC Feeder Systems",
    domain: "Railway Traction & High-Power Energy Storage",
    category: "Energy Storage & Electric Vehicles (EV)",
    tech: ["MATLAB / Simulink", "Interleaved Bidirectional DC-DC", "Regenerative Braking", "Supercapacitors / Lithium-Ion"],
    description: "A high-capacity bidirectional multi-phase interleaved DC-DC converter capturing train regenerative braking energy for catenary line stabilization.",
    abstract: "Subway and electrified train braking releases substantial kinetic energy that causes catenary voltage spikes if unabsorbed. This project develops a 750V/1500V railway wayside energy storage converter in Simulink utilizing interleaved bidirectional phases to absorb peak braking surges into battery banks.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 9,
    title: "High Efficiency Bi-Directional Converter for Flywheel Energy Storage Application",
    domain: "Flywheel Power Conditioning & PMSM Drives",
    category: "Energy Storage & Electric Vehicles (EV)",
    tech: ["MATLAB / Simulink", "Dual Active Bridge (DAB)", "Field Oriented Control (FOC)", "High-Speed Flywheel"],
    description: "A high-efficiency bidirectional Dual Active Bridge (DAB) power conditioning system for high-speed kinetic flywheel energy storage.",
    abstract: "Flywheel energy storage requires sub-millisecond charge/discharge response for grid frequency regulation. We model a Dual Active Bridge converter with phase-shift modulation coupled with a Permanent Magnet Synchronous Machine (PMSM) drive, delivering 98% round-trip conversion efficiency.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 10,
    title: "Series-Parallel Connection of Low-Voltage Sources for Integration of Galvanically Isolated Energy Storage System",
    domain: "Modular Battery Management & Active Balancing",
    category: "Energy Storage & Electric Vehicles (EV)",
    tech: ["MATLAB / Simulink", "Modular Multilevel Converter (MMC)", "Isolated DC-DC", "State-of-Charge (SoC) Balancing"],
    description: "A reconfigurable series-parallel isolated power architecture actively equalizing State-of-Charge across heterogeneous second-life battery packs.",
    abstract: "Utilizing second-life EV batteries in stationary grid storage causes cell unbalance and thermal runaway risks. This project designs a modular isolated DC-DC converter array in Simulink that dynamically switches battery modules between series and parallel configurations to equalize cell degradation.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 11,
    title: "A bidirectional single-stage three-phase Rectifier with high-frequency Isolation and power factor Correction",
    domain: "Three-Phase Matrix Rectifiers & Isolated PFC",
    category: "Power Quality & PFC Rectifiers",
    tech: ["MATLAB / Simulink", "Matrix Converter", "High Frequency AC Link Transformer", "Space Vector Modulation", "THD < 3%"],
    description: "A single-stage isolated bidirectional three-phase AC-DC matrix converter providing near-unity power factor without bulky DC-link capacitors.",
    abstract: "Traditional three-phase isolated chargers use two-stage conversion (PFC boost rectifier followed by isolated DC-DC). We propose a single-stage matrix-based bidirectional rectifier in Simulink with a high-frequency AC link transformer, achieving sinusoidal grid currents (THD < 2.8%) and bidirectional V2G power flow.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 12,
    title: "A High-Voltage SiC-Based Boost PFC for LED Applications",
    domain: "Silicon Carbide (SiC) & High-Frequency PFC",
    category: "Power Quality & PFC Rectifiers",
    tech: ["MATLAB / Simulink", "SiC MOSFET", "Continuous Conduction Mode (CCM) PFC", "High Voltage LED Driver"],
    description: "A wide-bandgap Silicon Carbide (SiC) boost power factor correction pre-regulator operating at 200 kHz for industrial horticultural LED lighting.",
    abstract: "High-power industrial LED luminaires require high power factor (>0.99) and compact magnetic footprints. We implement a SiC-based boost PFC converter operating at 200 kHz in Simulink, drastically cutting boost inductor dimensions while maintaining low switching losses.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Control of a Single-Stage Three-Phase Boost Power Factor Correction Rectifier",
    domain: "Three-Phase PWM Rectifiers & Vector Control",
    category: "Power Quality & PFC Rectifiers",
    tech: ["MATLAB / Simulink", "Voltage Oriented Control (VOC)", "Space Vector PWM (SVPWM)", "d-q Synchronous Frame"],
    description: "A Voltage Oriented Control (VOC) strategy for three-phase boost active front-end rectifiers providing decoupled active/reactive power control.",
    abstract: "Industrial variable frequency drives demand regenerative front ends with bidirectional power handling. This project implements d-q synchronous reference frame current controllers in Simulink regulating DC bus voltage to 700V while drawing purely sinusoidal balanced grid currents at unity power factor.",
    year: "2020 - 2021",
    difficulty: "Intermediate",
  },
  {
    id: 14,
    title: "LCL Filter Design for Three-phase Two-level Power Factor Correction using Line Impedance Stabilization Network",
    domain: "EMI Standards & LCL Filter Optimization",
    category: "Power Quality & PFC Rectifiers",
    tech: ["MATLAB / Simulink", "LISN Network Simulation", "Passive Damping Resistors", "Active Damping Control"],
    description: "A systematic LCL filter design methodology utilizing Line Impedance Stabilization Networks (LISN) to prevent grid resonance and suppress conducted EMI.",
    abstract: "Three-phase grid-connected converters with LCL filters suffer from inherent resonance peaks that can destabilize the control loop. This paper formulates an optimal passive and active virtual damping strategy in Simulink verified against LISN impedance models for conducted electromagnetic compatibility.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "New AC–DC Power Factor Correction Architecture Suitable for High-Frequency Operation",
    domain: "Bridgeless PFC & Totem-Pole Topologies",
    category: "Power Quality & PFC Rectifiers",
    tech: ["MATLAB / Simulink", "Totem-Pole Bridgeless PFC", "GaN FET / SiC Diode", "Zero Voltage Switching (ZVS)"],
    description: "A totem-pole bridgeless AC-DC converter topology eliminating bridge diode conduction losses for server and telecommunications power supplies.",
    abstract: "Conventional diode bridge boost rectifiers dissipate substantial power across front-end bridge diodes. We model a bridgeless totem-pole GaN PFC converter in Simulink that operates at 300 kHz with critical conduction mode (CRM) ZVS soft-switching, achieving 98.9% peak efficiency.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
  {
    id: 16,
    title: "Electric Vehicle On-Board Charger with Bidirectional Vehicle-to-Grid (V2G) Capability",
    domain: "EV Charging Infrastructure & V2G",
    category: "Energy Storage & Electric Vehicles (EV)",
    tech: ["MATLAB / Simulink", "Totem-Pole PFC", "CLLC Resonant Converter", "V2G / G2V Control", "CAN Bus Interface"],
    description: "A 6.6 kW bidirectional EV on-board charger interfacing a totem-pole PFC front-end with an isolated CLLC resonant DC-DC stage.",
    abstract: "Vehicle-to-Grid (V2G) technology allows EV batteries to support local distribution grids during peak demand. This project designs a two-stage bidirectional on-board charger in MATLAB/Simulink featuring seamless transitions between G2V charging and V2G discharging modes.",
    year: "2020 - 2021",
    difficulty: "Advanced",
  },
];

export const powerElectronicsProjects2021 = powerElectronicsProjects2020.map((item) => ({
  ...item,
  year: "2021 - 2022",
}));

export const powerElectronicsProjects2022 = powerElectronicsProjects2020.map((item) => ({
  ...item,
  year: "2022 - 2023",
}));

export const yearlyLinks = [
  { year: "2013 - 2014", path: "/power-electronics-ieee-projects-2013-2014-in-chennai" },
  { year: "2014 - 2015", path: "/power-electronics-ieee-projects-2014-2015-in-chennai" },
  { year: "2015 - 2016", path: "/power-electronics-ieee-projects-2015-2016-in-chennai" },
  { year: "2016 - 2017", path: "/power-electronics-ieee-projects-2016-2017-in-chennai" },
  { year: "2017 - 2018", path: "/power-electronics-ieee-projects-2017-2018-in-chennai" },
  { year: "2018 - 2019", path: "/power-electronics-ieee-projects-2018-2019-in-chennai" },
  { year: "2019 - 2020", path: "/power-electronics-ieee-projects-2019-2020-in-chennai" },
  { year: "2020 - 2021", path: "/power-electronics-ieee-projects-2020-2021-in-chennai" },
  { year: "2021 - 2022", path: "/power-electronics-ieee-projects-2021-2022-in-chennai" },
  { year: "2022 - 2023", path: "/2022-2023-power-electronics-projects" },
];

export const editorialContentByYear = {
  "2020 - 2021": {
    badge: "IEEE 2020 – 2021 Power Electronics & Renewable Energy Systems",
    title: "Power Electronics IEEE Projects 2020 - 2021 in Chennai",
    subtitle: "Explore high-impact IEEE Power Electronics projects in Quasi-Z-Source solar inverters, soft-switching DC-DC converters, transformerless PV systems, and bidirectional PFC rectifiers with complete MATLAB/Simulink models and base papers.",
    aboutTitle: "ABOUT IEEE POWER ELECTRONICS PROJECT 2020 – 2021",
    aboutP1: "Step into the world of 2020-2021, a period characterized by transformative advancements in Power Electronics IEEE projects. At IEEE Project Centre, we invite you to delve into a curated selection of these pioneering projects that have left an indelible mark on the power electronics landscape. Situated in the vibrant city of Chennai, our center provides a platform for tech enthusiasts, students, and aspiring engineers to explore the exceptional projects that defined this era.",
    aboutP2: "The years 2020-2021 witnessed a significant leap in creativity and innovation in the realm of power electronics. These projects explored renewable energy solutions, advanced power conversion technologies, and smart control systems that pushed the boundaries of what was possible. At IEEE Project Centre, we are dedicated to preserving and celebrating this rich heritage. Through hands-on learning experiences guided by seasoned mentors, our aim is not only to honor the achievements of this era but also to inspire today's learners to build upon this foundation and shape the future of power electronics.",
    aboutP3: "Join us at IEEE Project Centre to explore the 2020-2021 Power Electronics IEEE projects. These projects are not just a glimpse into the past but also a window into the future. Our commitment to bridging history with innovation ensures that you will acquire valuable insights and practical skills, positioning you to become a driving force in the ever-evolving field of power electronics. Immerse yourself in the journey of discovery, learning, and creation as we unite the past and the present in the pursuit of technological excellence.",
    themeColor: "from-amber-400 via-orange-300 to-yellow-400",
    activeBtnColor: "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20",
    primaryColor: "amber",
  },
  "2021 - 2022": {
    badge: "IEEE 2021 – 2022 Power Electronics & Clean Energy Conversion",
    title: "Power Electronics IEEE Projects 2021 - 2022 in Chennai",
    subtitle: "Discover cutting-edge IEEE Power Electronics projects covering wide-bandgap SiC/GaN devices, railway traction DC-DC converters, flywheel energy storage systems, and LCL filter stability designs.",
    aboutTitle: "ABOUT IEEE POWER ELECTRONICS PROJECT 2021 – 2022",
    aboutP1: "Step into the world of innovation with IEEE Project Centre as we explore the years 2021-2022, a period marked by transformative advancements in Power Electronics IEEE projects. We invite you to delve into a curated selection of these groundbreaking projects that are redefining the power electronics landscape. Located in the vibrant city of Chennai, our center serves as a hub for tech enthusiasts, students, and aspiring engineers to explore the exceptional projects that have defined this era.",
    aboutP2: "The years 2021-2022 witnessed a significant leap in creativity and innovation in the field of power electronics. These projects ventured into renewable energy solutions, advanced power conversion technologies, and smart control systems that are pushing the boundaries of what is achievable. At IEEE Project Centre, we are dedicated to preserving and celebrating this rich legacy. Through hands-on learning experiences guided by seasoned mentors, our goal is not only to honor the accomplishments of this era but also to inspire today's learners to build upon this strong foundation and shape the future of power electronics.",
    aboutP3: "Join us at IEEE Project Centre to explore the 2021-2022 Power Electronics IEEE projects. These projects offer a bridge between the past and the future, providing valuable insights and practical skills that empower you to become a driving force in the dynamic field of power electronics. Immerse yourself in a journey of discovery, learning, and creation as we unite history with innovation in pursuit of technological excellence.",
    themeColor: "from-emerald-400 via-teal-300 to-cyan-400",
    activeBtnColor: "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20",
    primaryColor: "emerald",
  },
  "2022 - 2023": {
    badge: "IEEE 2022 – 2023 Power Electronics & Electric Vehicle (EV) Systems",
    title: "Power Electronics IEEE Projects 2022 - 2023 in Chennai",
    subtitle: "Master high-efficiency power electronics topologies: Quasi-Z-Source inverters, high-gain coupled-inductor converters, bidirectional EV chargers, and totem-pole bridgeless PFC circuits with complete simulation models and thesis support.",
    aboutTitle: "ABOUT IEEE POWER ELECTRONICS PROJECT 2022 – 2023",
    aboutP1: "IEEE Project Centers started 2022-2023 Power Electronics Projects. The first high power electronic devices were mercury-arc valves. In fashionable systems, the conversion is performed with semiconductor switching devices like diodes, thyristors, and transistors, pioneered by R. D. Middlebrook et al. starting in the nineteen fifties. In distinction to electronic systems involved with transmission and processing of signals and information, in power electronics, substantial amounts of electricity are processed.",
    aboutP2: "IEEE Project Centre is a nexus of innovation where technology meets energy in the realm of Power Electronics projects for the years 2022-2023. As advocates of technical brilliance among students, enthusiasts, and aspiring power engineers, we're thrilled to introduce a diverse array of IEEE Power Electronics projects that are poised to revolutionize the landscape of energy conversion and electrical systems.",
    aboutP3: "An AC/DC converter (rectifier) is the most common power electronics device found in consumer electronic devices (TV sets, personal computers, battery chargers). In trade, a standard application is the Variable Speed Drive (VSD) used to control induction motors from hundreds of watts to tens of megawatts. Power electronics plays a crucial role in renewable energy systems, electric vehicles, industrial machinery, and consumer electronics.",
    themeColor: "from-cyan-400 via-sky-300 to-indigo-400",
    activeBtnColor: "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20",
    primaryColor: "cyan",
  },
};

/**
 * Fetch Power Electronics projects by technology and year from backend DB API with local fallback.
 */
export const fetchPowerElectronicsProjects = async (academicYear = "2020 - 2021") => {
  try {
    const res = await fetch(`${API_BASE}/project_titles.php?tech=power-electronics&year=${encodeURIComponent(academicYear)}`);
    if (res.ok) {
      const json = await res.json();
      const items = Array.isArray(json) ? json : json.data || [];
      if (items && items.length > 0) {
        return items.map((item, idx) => ({
          id: item.id || idx + 1,
          title: item.title_name || item.title || `Power Electronics Project ${idx + 1}`,
          domain: item.domain || "Power Electronics & Energy Systems",
          category: item.category || "Renewable Energy Converters",
          tech: item.tech ? (Array.isArray(item.tech) ? item.tech : item.tech.split(",")) : ["MATLAB / Simulink", "Power Converters", "Inverters", "PWM"],
          description: item.description || "IEEE Standard Power Electronics Project implementation with complete MATLAB/Simulink models, circuit schematics, and base paper.",
          abstract: item.abstract || "Comprehensive experimental evaluation and simulation analysis using IEEE standard benchmarks.",
          year: item.academic_year || academicYear,
          difficulty: item.difficulty || "Advanced",
        }));
      }
    }
  } catch (err) {
    console.warn(`Database API fetch fallback to local data for Power Electronics ${academicYear}:`, err);
  }

  if (academicYear.includes("2022")) return powerElectronicsProjects2022;
  if (academicYear.includes("2021")) return powerElectronicsProjects2021;
  return powerElectronicsProjects2020;
};
