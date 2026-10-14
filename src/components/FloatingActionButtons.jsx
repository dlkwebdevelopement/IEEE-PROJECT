import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Modern Phone Handset SVG Icon
 * Clean white handset with drop shadow and crisp contours.
 */
function ModernPhoneFabIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4.07c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z" />
    </svg>
  );
}

/**
 * Crisp Pure White WhatsApp SVG Icon
 * Official WhatsApp speech bubble with integrated handset.
 */
function WhatsAppWhiteFabIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16c0 2.57.72 4.975 1.97 7.027L2.8 28.2l5.343-1.402A13.435 13.435 0 0016 29.5c7.456 0 13.5-6.044 13.5-13.5S23.456 2.5 16 2.5zm0 2.35c6.158 0 11.15 4.992 11.15 11.15 0 6.158-4.992 11.15-11.15 11.15-2.19 0-4.23-.63-5.957-1.725l-.427-.27-3.96.938.942-3.882-.278-.442A11.11 11.11 0 014.85 16c0-6.158 4.992-11.15 11.15-11.15zm6.48 14.18c-.353-.177-2.093-1.033-2.417-1.151-.325-.118-.56-.177-.797.177-.236.354-.915 1.151-1.121 1.387-.206.236-.413.265-.767.089-.353-.177-1.492-.55-2.842-1.754-1.05-.937-1.76-2.094-1.966-2.447-.206-.353-.022-.544.155-.72.16-.158.353-.413.53-.619.177-.206.236-.354.354-.59.118-.235.059-.442-.03-.619-.088-.177-.796-1.92-1.091-2.628-.287-.69-.58-.595-.797-.607-.206-.01-.442-.012-.677-.012-.236 0-.619.088-.943.441-.324.354-1.238 1.21-1.238 2.95 0 1.74 1.267 3.42 1.444 3.656.177.236 2.493 3.808 6.04 5.341.843.365 1.502.583 2.015.746.847.269 1.618.23 2.227.14.68-.102 2.093-.855 2.387-1.68.295-.826.295-1.534.206-1.681-.088-.147-.324-.236-.677-.413z"
      />
    </svg>
  );
}

export default function FloatingActionButtons() {
  const [hoverPhone, setHoverPhone] = useState(false);
  const [hoverWa, setHoverWa] = useState(false);

  return (
    <>
      {/* =========================================================================
          LEFT FAB: GLOWING CYAN-BLUE PHONE BUTTON
          ========================================================================= */}
      <div
        className="fixed bottom-6 left-5 sm:left-7 z-50 flex items-center gap-3"
        onMouseEnter={() => setHoverPhone(true)}
        onMouseLeave={() => setHoverPhone(false)}
      >
        <div className="relative flex items-center justify-center">
          {/* Subtle Ambient Glow Aura */}
          <span className="absolute -inset-1.5 rounded-full bg-sky-400/35 blur-md animate-pulse pointer-events-none" />

          {/* Smooth Expanding Radar Glow Ring */}
          <span className="absolute -inset-1 rounded-full border border-sky-400/50 animate-ping opacity-40 pointer-events-none" />

          {/* Clean Cyan-Blue Phone Button */}
          <motion.a
            href="tel:+919751800789"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#0052cc] flex items-center justify-center text-white shadow-lg shadow-sky-600/50 cursor-pointer overflow-hidden group no-underline"
            title="Call +91 97518 00789"
            aria-label="Call 1 Crore Projects"
          >
            <div className="animate-wiggle-ring flex items-center justify-center">
              <ModernPhoneFabIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-sm" />
            </div>
          </motion.a>
        </div>

        {/* Floating Tooltip on Desktop Hover */}
        <AnimatePresence>
          {hoverPhone && (
            <motion.div
              initial={{ opacity: 0, x: -12, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-950/92 text-white backdrop-blur-xl border border-sky-400/40 shadow-2xl shadow-black/60 pointer-events-none whitespace-nowrap"
            >
              <div>
                <p className="text-xs font-black text-sky-300 uppercase tracking-wider mb-0 leading-none">
                  Call IEEE Project Lead
                </p>
                <p className="text-sm font-extrabold text-white mb-0 leading-tight mt-1">
                  +91 97518 00789
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================================
          RIGHT FAB: GLOWING EMERALD GREEN WHATSAPP BUTTON
          ========================================================================= */}
      <div
        className="fixed bottom-6 right-5 sm:right-7 z-50 flex flex-row-reverse items-center gap-3"
        onMouseEnter={() => setHoverWa(true)}
        onMouseLeave={() => setHoverWa(false)}
      >
        <div className="relative flex items-center justify-center">
          {/* Subtle Ambient Glow Aura */}
          <span className="absolute -inset-1.5 rounded-full bg-emerald-400/35 blur-md animate-pulse pointer-events-none" />

          {/* Smooth Expanding Radar Glow Ring */}
          <span className="absolute -inset-1 rounded-full border border-emerald-400/50 animate-ping opacity-40 pointer-events-none" />

          {/* Clean Emerald Green WhatsApp Button */}
          <motion.a
            href="https://wa.me/919751800789?text=Hi%2C%20I%20am%20looking%20for%20an%20IEEE%20Project%20and%20Base%20Paper%20guidance"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#25d366] via-[#16a34a] to-[#15803d] flex items-center justify-center text-white shadow-lg shadow-green-600/50 cursor-pointer overflow-hidden group no-underline"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <div className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <WhatsAppWhiteFabIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-sm" />
            </div>
          </motion.a>
        </div>

        {/* Floating Tooltip on Desktop Hover */}
        <AnimatePresence>
          {hoverWa && (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-950/92 text-white backdrop-blur-xl border border-emerald-400/40 shadow-2xl shadow-black/60 pointer-events-none whitespace-nowrap"
            >
              <div>
                <p className="text-xs font-black text-emerald-300 uppercase tracking-wider mb-0 leading-none">
                  Chat on WhatsApp
                </p>
                <p className="text-sm font-extrabold text-white mb-0 leading-tight mt-1">
                  Instant Project Support
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
