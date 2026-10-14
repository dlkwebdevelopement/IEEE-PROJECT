import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ProjectsSlider from "./ProjectsSlider";
import AboutContent from "./AboutContent";
import TechnologyVideos from "./TechnologyVideos";
import FeaturedProjectsVideos from "./FeaturedProjectsVideos";
import OurValues from "./OurValues";
import StudentTestimonials from "./StudentTestimonials";
import PartneredWith from "./PartneredWith";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      <Navbar />
      <Hero />
      <ProjectsSlider />
      <AboutContent />
      <TechnologyVideos />
      <OurValues />
      <FeaturedProjectsVideos />
      <StudentTestimonials />
      <PartneredWith />
      <Footer />
    </div>
  );
}
