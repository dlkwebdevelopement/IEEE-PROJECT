import { API_BASE } from "../api";

// Default verified WhatsApp Support Number for 1 Crore Projects / IEEE Project Centre
export const DEFAULT_WHATSAPP_NUMBER = (
  typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_WHATSAPP_NUMBER
    ? import.meta.env.VITE_WHATSAPP_NUMBER
    : "919751800789"
).replace(/[^0-9]/g, "");

/**
 * Format form data into a structured WhatsApp message
 */
export const formatWhatsAppMessage = (data = {}) => {
  const {
    name = "",
    mobile = "",
    phone = "",
    email = "",
    academicYear = "",
    academic_year = "",
    year = "",
    requirement = "",
    project_requirements = "",
    projectTitle = "",
    domain = "",
    college = "",
    department = "",
    message = "",
    source = "",
    sourcePage = ""
  } = data;

  const contactPhone = mobile || phone || "Not Provided";
  const selectedYear = academicYear || academic_year || year || "2024 - 2025";
  const projectReq = projectTitle || project_requirements || requirement || domain || "IEEE Academic Project";
  const pageSource = source || sourcePage || (typeof window !== "undefined" ? window.location.pathname : "");

  const lines = [
    `🎓 *NEW IEEE PROJECT ENQUIRY*`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Student Name:* ${name || "Not Specified"}`,
    `📱 *Mobile / WhatsApp:* ${contactPhone}`,
  ];

  if (email && email.trim() !== "") {
    lines.push(`✉️ *Email:* ${email}`);
  }

  if (selectedYear) {
    lines.push(`📅 *Academic Year:* ${selectedYear}`);
  }

  if (college && college.trim() !== "") {
    lines.push(`🏫 *College:* ${college}`);
  }

  if (department && department.trim() !== "") {
    lines.push(`🏛️ *Department:* ${department}`);
  }

  if (projectReq) {
    lines.push(`📋 *Project / Domain:* ${projectReq}`);
  }

  if (message && message.trim() !== "") {
    lines.push(`💬 *Requirement Notes:* ${message}`);
  }

  if (pageSource) {
    lines.push(`🔗 *Source Page:* ${pageSource}`);
  }

  lines.push(`━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`⚡ _Sent via IEEE Project Centre Online Portal_`);

  return lines.join("\n");
};

/**
 * Open WhatsApp with pre-formatted message
 */
export const sendToWhatsApp = (data = {}, targetNumber = DEFAULT_WHATSAPP_NUMBER) => {
  const text = typeof data === "string" ? data : formatWhatsAppMessage(data);
  const cleanNumber = (targetNumber || DEFAULT_WHATSAPP_NUMBER).replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedText}`;

  if (typeof window !== "undefined") {
    // Open in a new tab / window (supported on Android, iOS, Desktop Web)
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return whatsappUrl;
};

/**
 * Save enquiry to backend database AND open WhatsApp
 */
export const submitEnquiryWithWhatsApp = async (data = {}, options = {}) => {
  const {
    openWhatsApp = true,
    whatsappNumber = DEFAULT_WHATSAPP_NUMBER,
    sourceMessage = "Enquiry submitted via web form"
  } = options;

  let backendSuccess = false;

  // 1. Send data to Laravel / PHP backend API
  try {
    const res = await fetch(`${API_BASE}/enquiries.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name || "",
        email: data.email || "",
        mobile: data.mobile || data.phone || "",
        academic_year: data.academicYear || data.academic_year || data.year || "2024 - 2025",
        project_requirements: data.projectTitle || data.project_requirements || data.requirement || data.domain || "General Enquiry",
        message: data.message || sourceMessage,
        status: "New"
      })
    });
    backendSuccess = res.ok;
  } catch (err) {
    console.warn("Backend enquiry sync notice:", err);
  }

  // 2. Open WhatsApp directly with full structured payload
  if (openWhatsApp) {
    sendToWhatsApp(data, whatsappNumber);
  }

  return { backendSuccess, whatsappTriggered: openWhatsApp };
};
