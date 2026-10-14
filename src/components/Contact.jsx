import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { API_BASE } from "../api";
import { sendToWhatsApp, submitEnquiryWithWhatsApp, DEFAULT_WHATSAPP_NUMBER } from "../utils/whatsapp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    academicYear: "",
    requirement: ""
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [lastSubmittedData, setLastSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        academicYear: formData.academicYear || "2024 - 2025",
        requirement: formData.requirement || "General Contact Enquiry",
        message: "Enquiry submitted via Contact Page",
        source: "Contact Page"
      };

      // Save to backend database AND open WhatsApp with form details
      await submitEnquiryWithWhatsApp(submissionData, {
        openWhatsApp: true,
        whatsappNumber: DEFAULT_WHATSAPP_NUMBER
      });
      
      setStatus("success");
      setLastSubmittedData(submissionData);
      setFormData({ name: "", email: "", phone: "", academicYear: "", requirement: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Times_New_Roman',_Times,_serif]">
      <Navbar />
      
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Three cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {/* Card 1: Phone */}
          <div className="bg-white p-8 flex flex-col items-center text-center shadow-sm border border-gray-200">
            <div className="w-20 h-20 bg-[#ff8200] rounded-full flex items-center justify-center mb-6 text-white shadow-sm">
              <PhoneIcon sx={{ fontSize: 40 }} />
            </div>
            <p className="font-bold text-[14px] text-gray-800 leading-loose">
              +91 44 4203 2818 / +91 97518 00789 /<br/>+91 72999 51536
            </p>
          </div>
          
          {/* Card 2: Location */}
          <div className="bg-white p-8 flex flex-col items-center text-center shadow-sm border border-gray-200">
            <div className="w-20 h-20 bg-[#ff8200] rounded-full flex items-center justify-center mb-6 text-white shadow-sm">
              <LocationOnIcon sx={{ fontSize: 40 }} />
            </div>
            <p className="font-bold text-[14px] text-gray-800 leading-loose">
              1croreprojects, Door No : 68 & 70 , No :<br/>
              172, Ground Floor , Rahaat Plaza ( Opp. of<br/>
              Vijaya Hospital ) , Vadapalani, Chennai-<br/>
              600026.
            </p>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-8 flex flex-col items-center text-center shadow-sm border border-gray-200">
            <div className="w-20 h-20 bg-[#ff8200] rounded-full flex items-center justify-center mb-6 text-white shadow-sm">
              <EmailIcon sx={{ fontSize: 40 }} />
            </div>
            <p className="font-bold text-[14px] text-gray-800 leading-loose">
              1croreprojects@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Map and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-1 border border-gray-200"
          >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6853755427214!2d80.20846561482294!3d13.055694290799757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266eb7bba0bb5%3A0x67390230cd704fb3!2s1Crore%20Projects!5e0!3m2!1sen!2sin!4v1689255018698!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '500px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-gray-200 py-6 px-6"
          >
            <div className="bg-[#ff8200] text-white text-center py-3 text-[18px] font-bold mb-4 uppercase tracking-wide">
              Reach Us
            </div>
            <div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name" 
                  required
                  className="w-full border border-gray-300 p-2.5 bg-[#f5f5f5] text-gray-700 outline-none focus:border-[#ff8200] transition-colors" 
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  required
                  className="w-full border border-gray-300 p-2.5 bg-[#f5f5f5] text-gray-700 outline-none focus:border-[#ff8200] transition-colors" 
                />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number" 
                  required
                  className="w-full border border-gray-300 p-2.5 bg-[#f5f5f5] text-gray-700 outline-none focus:border-[#ff8200] transition-colors" 
                />
                
                <div className="flex flex-col gap-1 mt-6">
                  <label className="text-[12px] text-gray-500 font-semibold">Current Academic Year</label>
                  <select 
                    name="academicYear"
                    value={formData.academicYear}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 bg-[#f5f5f5] text-gray-700 outline-none focus:border-[#ff8200] transition-colors"
                  >
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] text-gray-500 font-semibold">Project Requirement</label>
                  <select 
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 bg-[#f5f5f5] text-gray-700 outline-none focus:border-[#ff8200] transition-colors"
                  >
                    <option value="">Select Requirements</option>
                    <option value="IEEE Project">IEEE Project</option>
                    <option value="Mini Project">Mini Project</option>
                    <option value="Real Time Project">Real Time Project</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div className="border border-gray-300 p-3 bg-white flex items-center justify-between mt-6 max-w-[300px]">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-sm"></div>
                    <span className="text-[14px] text-gray-700 font-semibold">I'm not a robot</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="h-8 opacity-80" alt="reCAPTCHA" />
                    <span className="text-[8px] text-gray-500 mt-1">reCAPTCHA</span>
                  </div>
                </div>

                {status === "success" && (
                  <div className="p-4 bg-emerald-50 border border-emerald-300 rounded text-emerald-800 mt-4 space-y-2">
                    <p className="font-bold text-sm m-0">
                      Message & Enquiry Sent Successfully!
                    </p>
                    <p className="text-xs text-emerald-700 m-0">
                      Your details have been forwarded to our technical team and WhatsApp chat has been initiated.
                    </p>
                    {lastSubmittedData && (
                      <button
                        type="button"
                        onClick={() => sendToWhatsApp(lastSubmittedData)}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#25d366] hover:bg-[#16a34a] text-white text-xs font-bold rounded shadow-sm transition-all mt-1 cursor-pointer"
                      >
                        <span>Reopen WhatsApp Chat</span>
                      </button>
                    )}
                  </div>
                )}
                {status === "error" && (
                  <div className="text-red-600 font-bold text-sm mt-4">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-[#1ca3b9] hover:bg-[#168a9d] disabled:opacity-70 text-white px-6 py-2.5 mt-6 text-[14px] font-bold rounded-sm transition-colors shadow-sm uppercase tracking-wide flex items-center gap-2 cursor-pointer"
                >
                  {status === "loading" ? "Sending to WhatsApp..." : "Send Message via WhatsApp"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
