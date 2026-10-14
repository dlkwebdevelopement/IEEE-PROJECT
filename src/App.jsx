import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AdminDashboard from "./admin/AdminDashboard";
import NotFound from "./components/NotFound";
import JavaProjects2024 from "./components/JavaProjects2024";
import JavaProjects2022 from "./components/JavaProjects2022";
import JavaProjects2021 from "./components/JavaProjects2021";
import JavaProjects2020 from "./components/JavaProjects2020";
import DotnetProjects2024 from "./components/DotnetProjects2024";
import DotnetProjects2022 from "./components/DotnetProjects2022";
import DotnetProjects2021 from "./components/DotnetProjects2021";
import Ns2Projects2022 from "./components/Ns2Projects2022";
import Ns2Projects2021 from "./components/Ns2Projects2021";
import Ns3Projects2024 from "./components/Ns3Projects2024";
import Ns3Projects2022 from "./components/Ns3Projects2022";
import Ns3Projects2021 from "./components/Ns3Projects2021";
import SdnProjects2020 from "./components/SdnProjects2020";
import SdnProjects2021 from "./components/SdnProjects2021";
import SdnProjects2022 from "./components/SdnProjects2022";
import MatlabProjects2020 from "./components/MatlabProjects2020";
import MatlabProjects2021 from "./components/MatlabProjects2021";
import MatlabProjects2024 from "./components/MatlabProjects2024";
import IotProjects2024 from "./components/IotProjects2024";
import IotProjects2022 from "./components/IotProjects2022";
import EmbeddedProjects2013 from "./components/EmbeddedProjects2013";
import EmbeddedProjects2020 from "./components/EmbeddedProjects2020";
import EmbeddedProjects2021 from "./components/EmbeddedProjects2021";
import EmbeddedProjects2022 from "./components/EmbeddedProjects2022";
import EmbeddedProjects2024 from "./components/EmbeddedProjects2024";
import BcaProjects2020 from "./components/BcaProjects2020";
import BcaProjects2021 from "./components/BcaProjects2021";
import BscProjects2020 from "./components/BscProjects2020";
import BigdataProjects2018 from "./components/BigdataProjects2018";
import BigdataProjects2020 from "./components/BigdataProjects2020";
import BigdataProjects2021 from "./components/BigdataProjects2021";
import BigdataProjects2022 from "./components/BigdataProjects2022";
import BigdataProjects2024 from "./components/BigdataProjects2024";
import VlsiProjects2013 from "./components/VlsiProjects2013";
import VlsiProjects2020 from "./components/VlsiProjects2020";
import VlsiProjects2021 from "./components/VlsiProjects2021";
import VlsiProjects2022 from "./components/VlsiProjects2022";
import RaspberryPiProjects from "./components/RaspberryPiProjects";
import PowerElectronicsProjects from "./components/PowerElectronicsProjects";
import CloudSimProjects from "./components/CloudSimProjects";
import PythonFrameworkProjects from "./components/PythonFrameworkProjects";
import ComputerVisionProjects from "./components/ComputerVisionProjects";
import DatabaseProjects from "./components/DatabaseProjects";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import ProjectDetail from "./components/ProjectDetail";
import FloatingActionButtons from "./components/FloatingActionButtons";

export default function App() {
  return (
    <Router>
      <FloatingActionButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/" element={<AdminDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/" element={<BlogList />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/blog/:slug/" element={<BlogDetail />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/project/:id/" element={<ProjectDetail />} />
        <Route path="/project-details/:id" element={<ProjectDetail />} />
        <Route path="/project-details/:id/" element={<ProjectDetail />} />
        <Route path="/2024-2025-java-ieee-projects" element={<JavaProjects2024 />} />
        <Route path="/2024-2025-java-ieee-projects/" element={<JavaProjects2024 />} />
        <Route path="/2022-2023-java-ieee-projects" element={<JavaProjects2022 />} />
        <Route path="/2022-2023-java-ieee-projects/" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2022-2023-in-chennai" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2022-2023-in-chennai/" element={<JavaProjects2022 />} />
        <Route path="/2021-2022-java-ieee-projects" element={<JavaProjects2021 />} />
        <Route path="/2021-2022-java-ieee-projects/" element={<JavaProjects2021 />} />
        <Route path="/java-ieee-projects-2021-2022-in-chennai" element={<JavaProjects2021 />} />
        <Route path="/java-ieee-projects-2021-2022-in-chennai/" element={<JavaProjects2021 />} />
        <Route path="/2020-2021-java-ieee-projects" element={<JavaProjects2020 />} />
        <Route path="/2020-2021-java-ieee-projects/" element={<JavaProjects2020 />} />
        <Route path="/java-ieee-projects-2020-2021-in-chennai" element={<JavaProjects2020 />} />
        <Route path="/java-ieee-projects-2020-2021-in-chennai/" element={<JavaProjects2020 />} />
        <Route path="/java-ieee-projects-2019-2020-in-chennai" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2019-2020-in-chennai/" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2018-2019-in-chennai" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2018-2019-in-chennai/" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2017-2018-in-chennai" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2017-2018-in-chennai/" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2016-2017-in-chennai" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2016-2017-in-chennai/" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2015-2016-in-chennai" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2015-2016-in-chennai/" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2014-2015-in-chennai" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2014-2015-in-chennai/" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2013-2014-in-chennai" element={<JavaProjects2022 />} />
        <Route path="/java-ieee-projects-2013-2014-in-chennai/" element={<JavaProjects2022 />} />
        <Route path="/2024-2025-dotnet-projects-chennai" element={<DotnetProjects2024 />} />
        <Route path="/2024-2025-dotnet-projects-chennai/" element={<DotnetProjects2024 />} />
        <Route path="/2022-2023-dot-net-ieee-application-projects" element={<DotnetProjects2022 />} />
        <Route path="/2022-2023-dot-net-ieee-application-projects/" element={<DotnetProjects2022 />} />
        <Route path="/2022-2023-dotnet-projects-chennai" element={<DotnetProjects2022 />} />
        <Route path="/2022-2023-dotnet-projects-chennai/" element={<DotnetProjects2022 />} />
        <Route path="/2021-2022-dotnet-projects-chennai" element={<DotnetProjects2021 />} />
        <Route path="/2021-2022-dotnet-projects-chennai/" element={<DotnetProjects2021 />} />
        <Route path="/dotnet-ieee-projects-2021-2022-in-chennai" element={<DotnetProjects2021 />} />
        <Route path="/dotnet-ieee-projects-2021-2022-in-chennai/" element={<DotnetProjects2021 />} />
        <Route path="/dotnet-ieee-projects-2020-2021-in-chennai" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2020-2021-in-chennai/" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2019-2020-in-chennai" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2019-2020-in-chennai/" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2018-2019-in-chennai" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2018-2019-in-chennai/" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2017-2018-in-chennai" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2017-2018-in-chennai/" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2016-2017-in-chennai" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2016-2017-in-chennai/" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2015-2016-in-chennai" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2015-2016-in-chennai/" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2014-2015-in-chennai" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2014-2015-in-chennai/" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2013-2014-in-chennai" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-ieee-projects-2013-2014-in-chennai/" element={<DotnetProjects2022 />} />
        <Route path="/dotnet-projects" element={<DotnetProjects2024 />} />
        <Route path="/dotnet-projects/" element={<DotnetProjects2024 />} />
        <Route path="/java-projects" element={<JavaProjects2024 />} />
        <Route path="/java-projects/" element={<JavaProjects2024 />} />
        <Route path="/java-ieee-projects" element={<JavaProjects2024 />} />
        <Route path="/java-ieee-projects/" element={<JavaProjects2024 />} />
        <Route path="/java-ieee-projects-in-chennai" element={<JavaProjects2024 />} />
        <Route path="/java-ieee-projects-in-chennai/" element={<JavaProjects2024 />} />
        <Route path="/bca-ieee-projects-2020-2021-in-chennai" element={<BcaProjects2020 />} />
        <Route path="/bca-ieee-projects-2020-2021-in-chennai/" element={<BcaProjects2020 />} />
        <Route path="/ieee-bca-project-list-2021-2022" element={<BcaProjects2021 />} />
        <Route path="/ieee-bca-project-list-2021-2022/" element={<BcaProjects2021 />} />
        <Route path="/bca-ieee-projects-2021-2022-in-chennai" element={<BcaProjects2021 />} />
        <Route path="/bca-ieee-projects-2021-2022-in-chennai/" element={<BcaProjects2021 />} />
        <Route path="/bsc-ieee-projects-2020-2021-in-chennai" element={<BscProjects2020 />} />
        <Route path="/bsc-ieee-projects-2020-2021-in-chennai/" element={<BscProjects2020 />} />
        <Route path="/2022-2023-ns2-projects-chennai" element={<Ns2Projects2022 />} />
        <Route path="/2022-2023-ns2-projects-chennai/" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2022-2023-in-chennai" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2022-2023-in-chennai/" element={<Ns2Projects2022 />} />
        <Route path="/2021-2022-ns2-projects-chennai" element={<Ns2Projects2021 />} />
        <Route path="/2021-2022-ns2-projects-chennai/" element={<Ns2Projects2021 />} />
        <Route path="/ns2-ieee-projects-2021-2022-in-chennai" element={<Ns2Projects2021 />} />
        <Route path="/ns2-ieee-projects-2021-2022-in-chennai/" element={<Ns2Projects2021 />} />
        <Route path="/ns2-ieee-projects-2020-2021-in-chennai" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2020-2021-in-chennai/" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2019-2020-in-chennai" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2019-2020-in-chennai/" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2018-2019-in-chennai" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2018-2019-in-chennai/" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2017-2018-in-chennai" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2017-2018-in-chennai/" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2016-2017-in-chennai" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2016-2017-in-chennai/" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2015-2016-in-chennai" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2015-2016-in-chennai/" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2014-2015-in-chennai" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2014-2015-in-chennai/" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2013-2014-in-chennai" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects-2013-2014-in-chennai/" element={<Ns2Projects2022 />} />
        <Route path="/ns2-projects" element={<Ns2Projects2022 />} />
        <Route path="/ns2-projects/" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects" element={<Ns2Projects2022 />} />
        <Route path="/ns2-ieee-projects/" element={<Ns2Projects2022 />} />
        <Route path="/2024-2025-ns3-projects-chennai" element={<Ns3Projects2024 />} />
        <Route path="/2024-2025-ns3-projects-chennai/" element={<Ns3Projects2024 />} />
        <Route path="/ns3-ieee-projects-2022-2023-in-chennai" element={<Ns3Projects2022 />} />
        <Route path="/ns3-ieee-projects-2022-2023-in-chennai/" element={<Ns3Projects2022 />} />
        <Route path="/2022-2023-ns3-projects-chennai" element={<Ns3Projects2022 />} />
        <Route path="/2022-2023-ns3-projects-chennai/" element={<Ns3Projects2022 />} />
        <Route path="/2021-2022-ns3-projects-chennai" element={<Ns3Projects2021 />} />
        <Route path="/2021-2022-ns3-projects-chennai/" element={<Ns3Projects2021 />} />
        <Route path="/ns3-ieee-projects-2021-2022-in-chennai" element={<Ns3Projects2021 />} />
        <Route path="/ns3-ieee-projects-2021-2022-in-chennai/" element={<Ns3Projects2021 />} />
        <Route path="/ns3-ieee-projects-2020-2021-in-chennai" element={<Ns3Projects2022 />} />
        <Route path="/ns3-ieee-projects-2020-2021-in-chennai/" element={<Ns3Projects2022 />} />
        <Route path="/ns3-ieee-projects-2019-2020-in-chennai" element={<Ns3Projects2022 />} />
        <Route path="/ns3-ieee-projects-2019-2020-in-chennai/" element={<Ns3Projects2022 />} />
        <Route path="/ns3-ieee-projects-2018-2019-in-chennai" element={<Ns3Projects2022 />} />
        <Route path="/ns3-ieee-projects-2018-2019-in-chennai/" element={<Ns3Projects2022 />} />
        <Route path="/ns3-projects" element={<Ns3Projects2024 />} />
        <Route path="/ns3-projects/" element={<Ns3Projects2024 />} />
        <Route path="/ns3-ieee-projects" element={<Ns3Projects2024 />} />
        <Route path="/ns3-ieee-projects/" element={<Ns3Projects2024 />} />
        <Route path="/ns3-projects-in-chennai" element={<Ns3Projects2024 />} />
        <Route path="/ns3-projects-in-chennai/" element={<Ns3Projects2024 />} />
        <Route path="/2020-2021-sdn-projects-chennai" element={<SdnProjects2020 />} />
        <Route path="/2020-2021-sdn-projects-chennai/" element={<SdnProjects2020 />} />
        <Route path="/sdn-ieee-projects-2020-2021-in-chennai" element={<SdnProjects2020 />} />
        <Route path="/sdn-ieee-projects-2020-2021-in-chennai/" element={<SdnProjects2020 />} />
        <Route path="/2021-2022-sdn-projects-chennai" element={<SdnProjects2021 />} />
        <Route path="/2021-2022-sdn-projects-chennai/" element={<SdnProjects2021 />} />
        <Route path="/sdn-ieee-projects-2021-2022-in-chennai" element={<SdnProjects2021 />} />
        <Route path="/sdn-ieee-projects-2021-2022-in-chennai/" element={<SdnProjects2021 />} />
        <Route path="/2022-2023-sdn-projects-chennai" element={<SdnProjects2022 />} />
        <Route path="/2022-2023-sdn-projects-chennai/" element={<SdnProjects2022 />} />
        <Route path="/sdn-ieee-projects-2022-2023-in-chennai" element={<SdnProjects2022 />} />
        <Route path="/sdn-ieee-projects-2022-2023-in-chennai/" element={<SdnProjects2022 />} />
        <Route path="/sdn-ieee-projects-2019-2020-in-chennai" element={<SdnProjects2020 />} />
        <Route path="/sdn-ieee-projects-2019-2020-in-chennai/" element={<SdnProjects2020 />} />
        <Route path="/sdn-ieee-projects-2018-2019-in-chennai" element={<SdnProjects2020 />} />
        <Route path="/sdn-ieee-projects-2018-2019-in-chennai/" element={<SdnProjects2020 />} />
        <Route path="/sdn-projects" element={<SdnProjects2022 />} />
        <Route path="/sdn-projects/" element={<SdnProjects2022 />} />
        <Route path="/sdn-ieee-projects" element={<SdnProjects2022 />} />
        <Route path="/sdn-ieee-projects/" element={<SdnProjects2022 />} />
        <Route path="/2024-2025-matlab-projects-chennai" element={<MatlabProjects2024 />} />
        <Route path="/2024-2025-matlab-projects-chennai/" element={<MatlabProjects2024 />} />
        <Route path="/2020-2021-matlab-projects-chennai" element={<MatlabProjects2020 />} />
        <Route path="/2020-2021-matlab-projects-chennai/" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2020-2021-in-chennai" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2020-2021-in-chennai/" element={<MatlabProjects2020 />} />
        <Route path="/2021-2022-matlab-projects-chennai" element={<MatlabProjects2021 />} />
        <Route path="/2021-2022-matlab-projects-chennai/" element={<MatlabProjects2021 />} />
        <Route path="/matlab-ieee-projects-2021-2022-in-chennai" element={<MatlabProjects2021 />} />
        <Route path="/matlab-ieee-projects-2021-2022-in-chennai/" element={<MatlabProjects2021 />} />
        <Route path="/matlab-ieee-projects-2022-2023-in-chennai" element={<MatlabProjects2021 />} />
        <Route path="/matlab-ieee-projects-2022-2023-in-chennai/" element={<MatlabProjects2021 />} />
        <Route path="/matlab-ieee-projects-2019-2020-in-chennai" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2019-2020-in-chennai/" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2018-2019-in-chennai" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2018-2019-in-chennai/" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2017-2018-in-chennai" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2017-2018-in-chennai/" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2016-2017-in-chennai" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2016-2017-in-chennai/" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2015-2016-in-chennai" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2015-2016-in-chennai/" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2014-2015-in-chennai" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2014-2015-in-chennai/" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2013-2014-in-chennai" element={<MatlabProjects2020 />} />
        <Route path="/matlab-ieee-projects-2013-2014-in-chennai/" element={<MatlabProjects2020 />} />
        <Route path="/matlab-projects" element={<MatlabProjects2024 />} />
        <Route path="/matlab-projects/" element={<MatlabProjects2024 />} />
        <Route path="/matlab-ieee-projects" element={<MatlabProjects2024 />} />
        <Route path="/matlab-ieee-projects/" element={<MatlabProjects2024 />} />
        <Route path="/matlab-projects-in-chennai" element={<MatlabProjects2024 />} />
        <Route path="/matlab-projects-in-chennai/" element={<MatlabProjects2024 />} />
        <Route path="/2024-2025-iot-projects-chennai" element={<IotProjects2024 />} />
        <Route path="/2024-2025-iot-projects-chennai/" element={<IotProjects2024 />} />
        <Route path="/2022-2023-iot-projects-chennai" element={<IotProjects2022 />} />
        <Route path="/2022-2023-iot-projects-chennai/" element={<IotProjects2022 />} />
        <Route path="/iot-2022-2023-project-centers-chennai" element={<IotProjects2022 />} />
        <Route path="/iot-2022-2023-project-centers-chennai/" element={<IotProjects2022 />} />
        <Route path="/iot-ieee-projects-2022-2023-in-chennai" element={<IotProjects2022 />} />
        <Route path="/iot-ieee-projects-2022-2023-in-chennai/" element={<IotProjects2022 />} />
        <Route path="/2021-2022-iot-projects-chennai" element={<IotProjects2024 />} />
        <Route path="/2021-2022-iot-projects-chennai/" element={<IotProjects2024 />} />
        <Route path="/2020-2021-iot-projects-chennai" element={<IotProjects2024 />} />
        <Route path="/2020-2021-iot-projects-chennai/" element={<IotProjects2024 />} />
        <Route path="/2019-2020-iot-projects-chennai" element={<IotProjects2024 />} />
        <Route path="/2019-2020-iot-projects-chennai/" element={<IotProjects2024 />} />
        <Route path="/2018-2019-iot-projects-chennai" element={<IotProjects2024 />} />
        <Route path="/2018-2019-iot-projects-chennai/" element={<IotProjects2024 />} />
        <Route path="/iot-projects" element={<IotProjects2024 />} />
        <Route path="/iot-projects/" element={<IotProjects2024 />} />
        <Route path="/iot-ieee-projects" element={<IotProjects2024 />} />
        <Route path="/iot-ieee-projects/" element={<IotProjects2024 />} />
        <Route path="/iot-projects-in-chennai" element={<IotProjects2024 />} />
        <Route path="/iot-projects-in-chennai/" element={<IotProjects2024 />} />
        <Route path="/embedded-systems-projects-2013-2014-chennai" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-projects-2013-2014-chennai/" element={<EmbeddedProjects2013 />} />
        <Route path="/2013-2014-embedded-systems-projects-chennai" element={<EmbeddedProjects2013 />} />
        <Route path="/2013-2014-embedded-systems-projects-chennai/" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-ieee-projects-2013-2014-in-chennai" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-ieee-projects-2013-2014-in-chennai/" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-projects" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-projects/" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-ieee-projects" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-ieee-projects/" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-projects-in-chennai" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-projects-in-chennai/" element={<EmbeddedProjects2013 />} />
        <Route path="/http-dhanamfoundationindia-coembedded-ieee-projects-2014-2015-in-chennai" element={<EmbeddedProjects2013 />} />
        <Route path="/http-dhanamfoundationindia-coembedded-ieee-projects-2014-2015-in-chennai/" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-projects-2015-2016-chennai" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-projects-2015-2016-chennai/" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-projects-2016-2017-chennai" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-projects-2016-2017-chennai/" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-projects-2017-2018-chennai" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-projects-2017-2018-chennai/" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-projects-2018-2019-chennai" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-projects-2018-2019-chennai/" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-domain-2019-2020-chennai" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-domain-2019-2020-chennai/" element={<EmbeddedProjects2013 />} />
        <Route path="/embedded-systems-projects-2020-2021-chennai" element={<EmbeddedProjects2020 />} />
        <Route path="/embedded-systems-projects-2020-2021-chennai/" element={<EmbeddedProjects2020 />} />
        <Route path="/2020-2021-embedded-systems-projects-chennai" element={<EmbeddedProjects2020 />} />
        <Route path="/2020-2021-embedded-systems-projects-chennai/" element={<EmbeddedProjects2020 />} />
        <Route path="/embedded-ieee-projects-2020-2021-in-chennai" element={<EmbeddedProjects2020 />} />
        <Route path="/embedded-ieee-projects-2020-2021-in-chennai/" element={<EmbeddedProjects2020 />} />
        <Route path="/embedded-systems-projects-2021-2022-chennai" element={<EmbeddedProjects2021 />} />
        <Route path="/embedded-systems-projects-2021-2022-chennai/" element={<EmbeddedProjects2021 />} />
        <Route path="/2021-2022-embedded-systems-projects-chennai" element={<EmbeddedProjects2021 />} />
        <Route path="/2021-2022-embedded-systems-projects-chennai/" element={<EmbeddedProjects2021 />} />
        <Route path="/embedded-ieee-projects-2021-2022-in-chennai" element={<EmbeddedProjects2021 />} />
        <Route path="/embedded-ieee-projects-2021-2022-in-chennai/" element={<EmbeddedProjects2021 />} />
        <Route path="/embedded-ieee-projects-2022-2023" element={<EmbeddedProjects2022 />} />
        <Route path="/embedded-ieee-projects-2022-2023/" element={<EmbeddedProjects2022 />} />
        <Route path="/2022-2023-embedded-systems-projects-chennai" element={<EmbeddedProjects2022 />} />
        <Route path="/2022-2023-embedded-systems-projects-chennai/" element={<EmbeddedProjects2022 />} />
        <Route path="/embedded-systems-projects-2022-2023-chennai" element={<EmbeddedProjects2022 />} />
        <Route path="/embedded-systems-projects-2022-2023-chennai/" element={<EmbeddedProjects2022 />} />
        <Route path="/2024-2025-embedded-projects-chennai" element={<EmbeddedProjects2024 />} />
        <Route path="/2024-2025-embedded-projects-chennai/" element={<EmbeddedProjects2024 />} />
        <Route path="/embedded-systems-projects-2024-2025-chennai" element={<EmbeddedProjects2024 />} />
        <Route path="/embedded-systems-projects-2024-2025-chennai/" element={<EmbeddedProjects2024 />} />
        <Route path="/embedded-ieee-projects-2024-2025-in-chennai" element={<EmbeddedProjects2024 />} />
        <Route path="/embedded-ieee-projects-2024-2025-in-chennai/" element={<EmbeddedProjects2024 />} />
        <Route path="/bigdata-ieee-projects-2018-2019-in-chennai" element={<BigdataProjects2018 />} />
        <Route path="/bigdata-ieee-projects-2018-2019-in-chennai/" element={<BigdataProjects2018 />} />
        <Route path="/bigdata-ieee-projects-2018-2019-in-chennai.php" element={<BigdataProjects2018 />} />
        <Route path="/bigdata-ieee-projects-2019-2020-in-chennai" element={<BigdataProjects2018 />} />
        <Route path="/bigdata-ieee-projects-2019-2020-in-chennai/" element={<BigdataProjects2018 />} />
        <Route path="/ieee-bigdata-project-list-2020-2021" element={<BigdataProjects2020 />} />
        <Route path="/ieee-bigdata-project-list-2020-2021/" element={<BigdataProjects2020 />} />
        <Route path="/bigdata-ieee-projects-2020-2021-in-chennai" element={<BigdataProjects2020 />} />
        <Route path="/bigdata-ieee-projects-2020-2021-in-chennai/" element={<BigdataProjects2020 />} />
        <Route path="/ieee-bigdata-project-list-2021-2022" element={<BigdataProjects2021 />} />
        <Route path="/ieee-bigdata-project-list-2021-2022/" element={<BigdataProjects2021 />} />
        <Route path="/bigdata-ieee-projects-2021-2022-in-chennai" element={<BigdataProjects2021 />} />
        <Route path="/bigdata-ieee-projects-2021-2022-in-chennai/" element={<BigdataProjects2021 />} />
        <Route path="/ieee-bigdata-project-list-2022-2023" element={<BigdataProjects2022 />} />
        <Route path="/ieee-bigdata-project-list-2022-2023/" element={<BigdataProjects2022 />} />
        <Route path="/bigdata-ieee-projects-2022-2023-in-chennai" element={<BigdataProjects2022 />} />
        <Route path="/bigdata-ieee-projects-2022-2023-in-chennai/" element={<BigdataProjects2022 />} />
        <Route path="/2024-2025-big-data-projects-chennai" element={<BigdataProjects2024 />} />
        <Route path="/2024-2025-big-data-projects-chennai/" element={<BigdataProjects2024 />} />
        <Route path="/bigdata-projects" element={<BigdataProjects2024 />} />
        <Route path="/bigdata-projects/" element={<BigdataProjects2024 />} />
        <Route path="/bigdata-ieee-projects" element={<BigdataProjects2024 />} />
        <Route path="/bigdata-ieee-projects/" element={<BigdataProjects2024 />} />
        <Route path="/bigdata-projects-in-chennai" element={<BigdataProjects2024 />} />
        <Route path="/bigdata-projects-in-chennai/" element={<BigdataProjects2024 />} />
        {/* VLSI Projects Routes */}
        <Route path="/vlsi-ieee-projects-2013-2014-in-chennai" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2013-2014-in-chennai/" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2013-2014-in-chennai.php" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2014-2015-in-chennai" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2014-2015-in-chennai/" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2014-2015-in-chennai.php" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2015-2016-in-chennai" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2015-2016-in-chennai/" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2015-2016-in-chennai.php" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2016-2017-in-chennai" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2016-2017-in-chennai/" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2016-2017-in-chennai.php" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2017-2018-in-chennai" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2017-2018-in-chennai/" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2017-2018-in-chennai.php" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2018-2019-in-chennai" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2018-2019-in-chennai/" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2018-2019-in-chennai.php" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2019-2020-in-chennai" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2019-2020-in-chennai/" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-projects-2019-2020-in-chennai.php" element={<VlsiProjects2013 />} />
        <Route path="/vlsi-ieee-project-2020-2021" element={<VlsiProjects2020 />} />
        <Route path="/vlsi-ieee-project-2020-2021/" element={<VlsiProjects2020 />} />
        <Route path="/vlsi-ieee-projects-2020-2021-in-chennai" element={<VlsiProjects2020 />} />
        <Route path="/vlsi-ieee-projects-2020-2021-in-chennai/" element={<VlsiProjects2020 />} />
        <Route path="/vlsi-ieee-project-2021-2022" element={<VlsiProjects2021 />} />
        <Route path="/vlsi-ieee-project-2021-2022/" element={<VlsiProjects2021 />} />
        <Route path="/vlsi-ieee-projects-2021-2022-in-chennai" element={<VlsiProjects2021 />} />
        <Route path="/vlsi-ieee-projects-2021-2022-in-chennai/" element={<VlsiProjects2021 />} />
        <Route path="/vlsi-ieee-project-2022-2023" element={<VlsiProjects2022 />} />
        <Route path="/vlsi-ieee-project-2022-2023/" element={<VlsiProjects2022 />} />
        <Route path="/vlsi-ieee-projects-2022-2023-in-chennai" element={<VlsiProjects2022 />} />
        <Route path="/vlsi-ieee-projects-2022-2023-in-chennai/" element={<VlsiProjects2022 />} />
        <Route path="/vlsi-projects" element={<VlsiProjects2022 />} />
        <Route path="/vlsi-projects/" element={<VlsiProjects2022 />} />
        <Route path="/vlsi-ieee-projects" element={<VlsiProjects2022 />} />
        <Route path="/vlsi-ieee-projects/" element={<VlsiProjects2022 />} />
        <Route path="/vlsi-projects-in-chennai" element={<VlsiProjects2022 />} />
        <Route path="/vlsi-projects-in-chennai/" element={<VlsiProjects2022 />} />
        {/* Raspberry Pi Projects Routes */}
        <Route path="/raspberry-pi-ieee-projects-2013-2014-in-chennai" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2013-2014-in-chennai/" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2013-2014-in-chennai.php" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2014-2015-in-chennai" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2014-2015-in-chennai/" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2014-2015-in-chennai.php" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2015-2016-in-chennai" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2015-2016-in-chennai/" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2015-2016-in-chennai.php" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2016-2017-in-chennai" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2016-2017-in-chennai/" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2016-2017-in-chennai.php" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2017-2018-in-chennai" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2017-2018-in-chennai/" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2017-2018-in-chennai.php" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2018-2019-in-chennai" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2018-2019-in-chennai/" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2018-2019-in-chennai.php" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2019-2020-in-chennai" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2019-2020-in-chennai/" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2019-2020-in-chennai.php" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2020-2021-in-chennai" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2020-2021-in-chennai/" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2020-2021-in-chennai.php" element={<RaspberryPiProjects defaultYear="2020 - 2021" />} />
        <Route path="/raspberry-pi-ieee-projects-2021-2022-in-chennai" element={<RaspberryPiProjects defaultYear="2021 - 2022" />} />
        <Route path="/raspberry-pi-ieee-projects-2021-2022-in-chennai/" element={<RaspberryPiProjects defaultYear="2021 - 2022" />} />
        <Route path="/raspberry-pi-ieee-projects-2021-2022-in-chennai.php" element={<RaspberryPiProjects defaultYear="2021 - 2022" />} />
        <Route path="/ieee-2022-2023-raspberry-pi-projects-in-chennai" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        <Route path="/ieee-2022-2023-raspberry-pi-projects-in-chennai/" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        <Route path="/ieee-2022-2023-raspberry-pi-projects-in-chennai.php" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        <Route path="/raspberry-pi-projects-2022-2023-in-chennai" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        <Route path="/raspberry-pi-projects-2022-2023-in-chennai/" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        <Route path="/raspberry-pi-projects" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        <Route path="/raspberry-pi-projects/" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        <Route path="/raspberry-pi-ieee-projects" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        <Route path="/raspberry-pi-ieee-projects/" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        <Route path="/raspberry-pi-projects-in-chennai" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        <Route path="/raspberry-pi-projects-in-chennai/" element={<RaspberryPiProjects defaultYear="2022 - 2023" />} />
        {/* Power Electronics Projects Routes */}
        <Route path="/power-electronics-ieee-projects-2013-2014-in-chennai" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2013-2014-in-chennai/" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2013-2014-in-chennai.php" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2014-2015-in-chennai" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2014-2015-in-chennai/" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2014-2015-in-chennai.php" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2015-2016-in-chennai" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2015-2016-in-chennai/" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2015-2016-in-chennai.php" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2016-2017-in-chennai" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2016-2017-in-chennai/" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2016-2017-in-chennai.php" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2017-2018-in-chennai" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2017-2018-in-chennai/" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2017-2018-in-chennai.php" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2018-2019-in-chennai" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2018-2019-in-chennai/" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2018-2019-in-chennai.php" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2019-2020-in-chennai" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2019-2020-in-chennai/" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2019-2020-in-chennai.php" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2020-2021-in-chennai" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2020-2021-in-chennai/" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2020-2021-in-chennai.php" element={<PowerElectronicsProjects defaultYear="2020 - 2021" />} />
        <Route path="/power-electronics-ieee-projects-2021-2022-in-chennai" element={<PowerElectronicsProjects defaultYear="2021 - 2022" />} />
        <Route path="/power-electronics-ieee-projects-2021-2022-in-chennai/" element={<PowerElectronicsProjects defaultYear="2021 - 2022" />} />
        <Route path="/power-electronics-ieee-projects-2021-2022-in-chennai.php" element={<PowerElectronicsProjects defaultYear="2021 - 2022" />} />
        <Route path="/2022-2023-power-electronics-projects" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        <Route path="/2022-2023-power-electronics-projects/" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        <Route path="/2022-2023-power-electronics-projects.php" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        <Route path="/power-electronics-ieee-projects-2022-2023-in-chennai" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        <Route path="/power-electronics-ieee-projects-2022-2023-in-chennai/" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        <Route path="/power-electronics-projects" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        <Route path="/power-electronics-projects/" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        <Route path="/power-electronics-ieee-projects" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        <Route path="/power-electronics-ieee-projects/" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        <Route path="/power-electronics-projects-in-chennai" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        <Route path="/power-electronics-projects-in-chennai/" element={<PowerElectronicsProjects defaultYear="2022 - 2023" />} />
        {/* IEEE CloudSim Projects Routes */}
        <Route path="/cloud-sim-ieee-projects-2013-2014-in-chennai" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2013-2014-in-chennai/" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2013-2014-in-chennai.php" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2014-2015-in-chennai" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2014-2015-in-chennai/" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2014-2015-in-chennai.php" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2015-2016-in-chennai" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2015-2016-in-chennai/" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2015-2016-in-chennai.php" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2016-2017-in-chennai" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2016-2017-in-chennai/" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2016-2017-in-chennai.php" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2017-2018-in-chennai" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2017-2018-in-chennai/" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2017-2018-in-chennai.php" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/ieee-cloud-sim-project-list-2018-2019" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/ieee-cloud-sim-project-list-2018-2019/" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2018-2019-in-chennai" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2018-2019-in-chennai/" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/cloud-sim-ieee-projects-2018-2019-in-chennai.php" element={<CloudSimProjects defaultYear="2018 - 2019" />} />
        <Route path="/ieee-cloud-sim-project-list-2019-2020" element={<CloudSimProjects defaultYear="2019 - 2020" />} />
        <Route path="/ieee-cloud-sim-project-list-2019-2020/" element={<CloudSimProjects defaultYear="2019 - 2020" />} />
        <Route path="/cloud-sim-ieee-projects-2019-2020-in-chennai" element={<CloudSimProjects defaultYear="2019 - 2020" />} />
        <Route path="/cloud-sim-ieee-projects-2019-2020-in-chennai/" element={<CloudSimProjects defaultYear="2019 - 2020" />} />
        <Route path="/cloud-sim-ieee-projects-2019-2020-in-chennai.php" element={<CloudSimProjects defaultYear="2019 - 2020" />} />
        <Route path="/ieee-cloud-sim-project-list-2020-2021" element={<CloudSimProjects defaultYear="2020 - 2021" />} />
        <Route path="/ieee-cloud-sim-project-list-2020-2021/" element={<CloudSimProjects defaultYear="2020 - 2021" />} />
        <Route path="/cloud-sim-ieee-projects-2020-2021-in-chennai" element={<CloudSimProjects defaultYear="2020 - 2021" />} />
        <Route path="/cloud-sim-ieee-projects-2020-2021-in-chennai/" element={<CloudSimProjects defaultYear="2020 - 2021" />} />
        <Route path="/cloud-sim-ieee-projects-2020-2021-in-chennai.php" element={<CloudSimProjects defaultYear="2020 - 2021" />} />
        <Route path="/ieee-cloud-sim-project-list-2021-2022" element={<CloudSimProjects defaultYear="2021 - 2022" />} />
        <Route path="/ieee-cloud-sim-project-list-2021-2022/" element={<CloudSimProjects defaultYear="2021 - 2022" />} />
        <Route path="/cloud-sim-ieee-projects-2021-2022-in-chennai" element={<CloudSimProjects defaultYear="2021 - 2022" />} />
        <Route path="/cloud-sim-ieee-projects-2021-2022-in-chennai/" element={<CloudSimProjects defaultYear="2021 - 2022" />} />
        <Route path="/cloud-sim-ieee-projects-2021-2022-in-chennai.php" element={<CloudSimProjects defaultYear="2021 - 2022" />} />
        <Route path="/ieee-cloud-sim-project-list-2022-2023-in-chennai" element={<CloudSimProjects defaultYear="2022 - 2023" />} />
        <Route path="/ieee-cloud-sim-project-list-2022-2023-in-chennai/" element={<CloudSimProjects defaultYear="2022 - 2023" />} />
        <Route path="/cloud-sim-ieee-projects-2022-2023-in-chennai" element={<CloudSimProjects defaultYear="2022 - 2023" />} />
        <Route path="/cloud-sim-ieee-projects-2022-2023-in-chennai/" element={<CloudSimProjects defaultYear="2022 - 2023" />} />
        <Route path="/cloud-sim-ieee-projects-2022-2023-in-chennai.php" element={<CloudSimProjects defaultYear="2022 - 2023" />} />
        <Route path="/cloud-sim-projects" element={<CloudSimProjects defaultYear="2024 - 2025" />} />
        <Route path="/cloud-sim-projects/" element={<CloudSimProjects defaultYear="2024 - 2025" />} />
        <Route path="/cloud-sim-ieee-projects" element={<CloudSimProjects defaultYear="2024 - 2025" />} />
        <Route path="/cloud-sim-ieee-projects/" element={<CloudSimProjects defaultYear="2024 - 2025" />} />
        <Route path="/cloud-sim-projects-in-chennai" element={<CloudSimProjects defaultYear="2024 - 2025" />} />
        <Route path="/cloud-sim-projects-in-chennai/" element={<CloudSimProjects defaultYear="2024 - 2025" />} />
        <Route path="/2024-2025-cloud-sim-ieee-project-chennai" element={<CloudSimProjects defaultYear="2024 - 2025" />} />
        <Route path="/2024-2025-cloud-sim-ieee-project-chennai/" element={<CloudSimProjects defaultYear="2024 - 2025" />} />
        <Route path="/2024-2025-cloud-sim-ieee-project-chennai.php" element={<CloudSimProjects defaultYear="2024 - 2025" />} />
        <Route path="/2024-2025-cloud-sim-projects-chennai" element={<CloudSimProjects defaultYear="2024 - 2025" />} />
        <Route path="/2024-2025-cloud-sim-projects-chennai/" element={<CloudSimProjects defaultYear="2024 - 2025" />} />

        {/* Python Web Application Frameworks Routes */}
        {/* Django */}
        <Route path="/django-project-center-in-chennai" element={<PythonFrameworkProjects defaultFramework="django" />} />
        <Route path="/django-project-center-in-chennai/" element={<PythonFrameworkProjects defaultFramework="django" />} />
        <Route path="/django-project-center-in-chennai.php" element={<PythonFrameworkProjects defaultFramework="django" />} />
        <Route path="/django-project-center" element={<PythonFrameworkProjects defaultFramework="django" />} />
        <Route path="/django-project-center/" element={<PythonFrameworkProjects defaultFramework="django" />} />
        <Route path="/django-projects-in-chennai" element={<PythonFrameworkProjects defaultFramework="django" />} />
        <Route path="/django-projects-in-chennai/" element={<PythonFrameworkProjects defaultFramework="django" />} />

        {/* Flask */}
        <Route path="/flask-project-center-in-chennai" element={<PythonFrameworkProjects defaultFramework="flask" />} />
        <Route path="/flask-project-center-in-chennai/" element={<PythonFrameworkProjects defaultFramework="flask" />} />
        <Route path="/flask-project-center-in-chennai.php" element={<PythonFrameworkProjects defaultFramework="flask" />} />
        <Route path="/flask-project-center" element={<PythonFrameworkProjects defaultFramework="flask" />} />
        <Route path="/flask-project-center/" element={<PythonFrameworkProjects defaultFramework="flask" />} />
        <Route path="/flask-projects-in-chennai" element={<PythonFrameworkProjects defaultFramework="flask" />} />
        <Route path="/flask-projects-in-chennai/" element={<PythonFrameworkProjects defaultFramework="flask" />} />

        {/* Streamlit */}
        <Route path="/streamlit-project-center-in-chennai" element={<PythonFrameworkProjects defaultFramework="streamlit" />} />
        <Route path="/streamlit-project-center-in-chennai/" element={<PythonFrameworkProjects defaultFramework="streamlit" />} />
        <Route path="/streamlit-project-center-in-chennai.php" element={<PythonFrameworkProjects defaultFramework="streamlit" />} />
        <Route path="/streamlit-project-center" element={<PythonFrameworkProjects defaultFramework="streamlit" />} />
        <Route path="/streamlit-project-center/" element={<PythonFrameworkProjects defaultFramework="streamlit" />} />
        <Route path="/streamlit-projects-in-chennai" element={<PythonFrameworkProjects defaultFramework="streamlit" />} />
        <Route path="/streamlit-projects-in-chennai/" element={<PythonFrameworkProjects defaultFramework="streamlit" />} />

        {/* Gradio */}
        <Route path="/gradio-project-center-in-chennai" element={<PythonFrameworkProjects defaultFramework="gradio" />} />
        <Route path="/gradio-project-center-in-chennai/" element={<PythonFrameworkProjects defaultFramework="gradio" />} />
        <Route path="/gradio-project-center-in-chennai.php" element={<PythonFrameworkProjects defaultFramework="gradio" />} />
        <Route path="/gradio-project-center" element={<PythonFrameworkProjects defaultFramework="gradio" />} />
        <Route path="/gradio-project-center/" element={<PythonFrameworkProjects defaultFramework="gradio" />} />
        <Route path="/gradio-projects-in-chennai" element={<PythonFrameworkProjects defaultFramework="gradio" />} />
        <Route path="/gradio-projects-in-chennai/" element={<PythonFrameworkProjects defaultFramework="gradio" />} />

        {/* Computer Vision & Image Processing Frameworks */}
        {/* OpenCV */}
        <Route path="/opencv-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="opencv" />} />
        <Route path="/opencv-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="opencv" />} />
        <Route path="/opencv-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="opencv" />} />
        <Route path="/opencv-project-center" element={<ComputerVisionProjects defaultFramework="opencv" />} />
        <Route path="/opencv-project-center/" element={<ComputerVisionProjects defaultFramework="opencv" />} />
        <Route path="/opencv-projects-in-chennai" element={<ComputerVisionProjects defaultFramework="opencv" />} />
        <Route path="/opencv-projects-in-chennai/" element={<ComputerVisionProjects defaultFramework="opencv" />} />

        {/* MTCNN */}
        <Route path="/mtcnn-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="mtcnn" />} />
        <Route path="/mtcnn-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="mtcnn" />} />
        <Route path="/mtcnn-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="mtcnn" />} />
        <Route path="/mtcnn-project-center" element={<ComputerVisionProjects defaultFramework="mtcnn" />} />
        <Route path="/mtcnn-project-center/" element={<ComputerVisionProjects defaultFramework="mtcnn" />} />
        <Route path="/mtcnn-projects-in-chennai" element={<ComputerVisionProjects defaultFramework="mtcnn" />} />
        <Route path="/mtcnn-projects-in-chennai/" element={<ComputerVisionProjects defaultFramework="mtcnn" />} />

        {/* FaceNet */}
        <Route path="/facenet-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="facenet" />} />
        <Route path="/facenet-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="facenet" />} />
        <Route path="/facenet-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="facenet" />} />
        <Route path="/facenet-project-center" element={<ComputerVisionProjects defaultFramework="facenet" />} />
        <Route path="/facenet-project-center/" element={<ComputerVisionProjects defaultFramework="facenet" />} />
        <Route path="/facenet-projects-in-chennai" element={<ComputerVisionProjects defaultFramework="facenet" />} />
        <Route path="/facenet-projects-in-chennai/" element={<ComputerVisionProjects defaultFramework="facenet" />} />

        {/* Dlib & Dilib */}
        <Route path="/dlib-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="dlib" />} />
        <Route path="/dlib-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="dlib" />} />
        <Route path="/dlib-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="dlib" />} />
        <Route path="/dilib-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="dlib" />} />
        <Route path="/dilib-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="dlib" />} />
        <Route path="/dilib-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="dlib" />} />
        <Route path="/dlib-project-center" element={<ComputerVisionProjects defaultFramework="dlib" />} />
        <Route path="/dlib-project-center/" element={<ComputerVisionProjects defaultFramework="dlib" />} />
        <Route path="/dlib-projects-in-chennai" element={<ComputerVisionProjects defaultFramework="dlib" />} />
        <Route path="/dlib-projects-in-chennai/" element={<ComputerVisionProjects defaultFramework="dlib" />} />

        {/* Image Classification */}
        <Route path="/image-classification-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="image-classification" />} />
        <Route path="/image-classification-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="image-classification" />} />
        <Route path="/image-classification-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="image-classification" />} />
        <Route path="/image-classification-project-center" element={<ComputerVisionProjects defaultFramework="image-classification" />} />
        <Route path="/image-classification-project-center/" element={<ComputerVisionProjects defaultFramework="image-classification" />} />
        <Route path="/image-classification-projects-in-chennai" element={<ComputerVisionProjects defaultFramework="image-classification" />} />
        <Route path="/image-classification-projects-in-chennai/" element={<ComputerVisionProjects defaultFramework="image-classification" />} />

        {/* Object Detection */}
        <Route path="/object-detection-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="object-detection" />} />
        <Route path="/object-detection-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="object-detection" />} />
        <Route path="/object-detection-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="object-detection" />} />
        <Route path="/object-detection-project-center" element={<ComputerVisionProjects defaultFramework="object-detection" />} />
        <Route path="/object-detection-project-center/" element={<ComputerVisionProjects defaultFramework="object-detection" />} />
        <Route path="/object-detection-projects-in-chennai" element={<ComputerVisionProjects defaultFramework="object-detection" />} />
        <Route path="/object-detection-projects-in-chennai/" element={<ComputerVisionProjects defaultFramework="object-detection" />} />

        {/* Image Segmentation */}
        <Route path="/image-segmentation-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="image-segmentation" />} />
        <Route path="/image-segmentation-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="image-segmentation" />} />
        <Route path="/image-segmentation-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="image-segmentation" />} />
        <Route path="/image-segmentation-project-center" element={<ComputerVisionProjects defaultFramework="image-segmentation" />} />
        <Route path="/image-segmentation-project-center/" element={<ComputerVisionProjects defaultFramework="image-segmentation" />} />
        <Route path="/image-segmentation-projects-in-chennai" element={<ComputerVisionProjects defaultFramework="image-segmentation" />} />
        <Route path="/image-segmentation-projects-in-chennai/" element={<ComputerVisionProjects defaultFramework="image-segmentation" />} />

        {/* Instance Segmentation */}
        <Route path="/instance-segmentation-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="instance-segmentation" />} />
        <Route path="/instance-segmentation-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="instance-segmentation" />} />
        <Route path="/instance-segmentation-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="instance-segmentation" />} />
        <Route path="/instance-segmentation-project-center" element={<ComputerVisionProjects defaultFramework="instance-segmentation" />} />
        <Route path="/instance-segmentation-project-center/" element={<ComputerVisionProjects defaultFramework="instance-segmentation" />} />
        <Route path="/instance-segmentation-projects-in-chennai" element={<ComputerVisionProjects defaultFramework="instance-segmentation" />} />
        <Route path="/instance-segmentation-projects-in-chennai/" element={<ComputerVisionProjects defaultFramework="instance-segmentation" />} />

        {/* Semantic Segmentation (and 'sementic' alias) */}
        <Route path="/semantic-segmentation-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="semantic-segmentation" />} />
        <Route path="/semantic-segmentation-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="semantic-segmentation" />} />
        <Route path="/semantic-segmentation-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="semantic-segmentation" />} />
        <Route path="/sementic-segmentation-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="semantic-segmentation" />} />
        <Route path="/sementic-segmentation-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="semantic-segmentation" />} />
        <Route path="/sementic-segmentation-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="semantic-segmentation" />} />
        <Route path="/semantic-segmentation-project-center" element={<ComputerVisionProjects defaultFramework="semantic-segmentation" />} />
        <Route path="/semantic-segmentation-project-center/" element={<ComputerVisionProjects defaultFramework="semantic-segmentation" />} />
        <Route path="/semantic-segmentation-projects-in-chennai" element={<ComputerVisionProjects defaultFramework="semantic-segmentation" />} />
        <Route path="/semantic-segmentation-projects-in-chennai/" element={<ComputerVisionProjects defaultFramework="semantic-segmentation" />} />

        {/* YOLO Projects */}
        <Route path="/yolo-project-center-in-chennai" element={<ComputerVisionProjects defaultFramework="yolo" />} />
        <Route path="/yolo-project-center-in-chennai/" element={<ComputerVisionProjects defaultFramework="yolo" />} />
        <Route path="/yolo-project-center-in-chennai.php" element={<ComputerVisionProjects defaultFramework="yolo" />} />
        <Route path="/yolo-project-center" element={<ComputerVisionProjects defaultFramework="yolo" />} />
        <Route path="/yolo-project-center/" element={<ComputerVisionProjects defaultFramework="yolo" />} />
        <Route path="/yolo-projects-in-chennai" element={<ComputerVisionProjects defaultFramework="yolo" />} />
        <Route path="/yolo-projects-in-chennai/" element={<ComputerVisionProjects defaultFramework="yolo" />} />

        {/* Database Project Centers: SQLite, MongoDB, PostgreSQL */}
        {/* SQLite */}
        <Route path="/sqlite-project-center-in-chennai" element={<DatabaseProjects defaultDb="sqlite" />} />
        <Route path="/sqlite-project-center-in-chennai/" element={<DatabaseProjects defaultDb="sqlite" />} />
        <Route path="/sqlite-project-center-in-chennai.php" element={<DatabaseProjects defaultDb="sqlite" />} />
        <Route path="/sqlite-project-center" element={<DatabaseProjects defaultDb="sqlite" />} />
        <Route path="/sqlite-project-center/" element={<DatabaseProjects defaultDb="sqlite" />} />
        <Route path="/sqlite-projects-in-chennai" element={<DatabaseProjects defaultDb="sqlite" />} />
        <Route path="/sqlite-projects-in-chennai/" element={<DatabaseProjects defaultDb="sqlite" />} />

        {/* MongoDB */}
        <Route path="/mongodb-project-center-in-chennai" element={<DatabaseProjects defaultDb="mongodb" />} />
        <Route path="/mongodb-project-center-in-chennai/" element={<DatabaseProjects defaultDb="mongodb" />} />
        <Route path="/mongodb-project-center-in-chennai.php" element={<DatabaseProjects defaultDb="mongodb" />} />
        <Route path="/mongodb-project-center" element={<DatabaseProjects defaultDb="mongodb" />} />
        <Route path="/mongodb-project-center/" element={<DatabaseProjects defaultDb="mongodb" />} />
        <Route path="/mongodb-projects-in-chennai" element={<DatabaseProjects defaultDb="mongodb" />} />
        <Route path="/mongodb-projects-in-chennai/" element={<DatabaseProjects defaultDb="mongodb" />} />

        {/* PostgreSQL */}
        <Route path="/postgresql-project-center-in-chennai" element={<DatabaseProjects defaultDb="postgresql" />} />
        <Route path="/postgresql-project-center-in-chennai/" element={<DatabaseProjects defaultDb="postgresql" />} />
        <Route path="/postgresql-project-center-in-chennai.php" element={<DatabaseProjects defaultDb="postgresql" />} />
        <Route path="/postgresql-project-center" element={<DatabaseProjects defaultDb="postgresql" />} />
        <Route path="/postgresql-project-center/" element={<DatabaseProjects defaultDb="postgresql" />} />
        <Route path="/postgresql-projects-in-chennai" element={<DatabaseProjects defaultDb="postgresql" />} />
        <Route path="/postgresql-projects-in-chennai/" element={<DatabaseProjects defaultDb="postgresql" />} />
        <Route path="/postgres-project-center-in-chennai" element={<DatabaseProjects defaultDb="postgresql" />} />
        <Route path="/postgres-project-center-in-chennai/" element={<DatabaseProjects defaultDb="postgresql" />} />

        {/* 404 Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

