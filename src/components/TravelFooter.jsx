import { useState } from "react";
import cityScape from "../assets/cityscape.png";
import logo from "../assets/logo.png";
import { APP_STRINGS } from "../constants/strings";

const links = {
  "Our Services": ["City Rides", "Airport Drops", "Outstation Trips", "Railway Pickup", "Corporate Booking"],
  "Popular Routes": ["Hubli → Dharwad", "Hubli → Dandeli", "Hubli → Goa", "Hubli → Bangalore", "Hubli → Belgaum"],
  "Our Website": ["Our Promise", "Nearby Taxis", "Customer Happiness", "FAQ", "About Us"],
  Support: ["Call Us", "WhatsApp Us", "Cancellation Policy", "Safety", "Privacy Policy"],
};

const socials = [
  {
    label: "WhatsApp",
    href:  `https://wa.me/91${APP_STRINGS.OwnerContact.whatsapp}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.854L.057 23.882l6.195-1.624A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.372l-.36-.214-3.724.976.999-3.633-.234-.374A9.817 9.817 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const quickContacts = [
  { label: "24/7 Booking", value: `+91 ${APP_STRINGS.OwnerContact.phone}`, href: `tel:+91${APP_STRINGS.OwnerContact.phone}` },
  { label: "WhatsApp", value: `+91 ${APP_STRINGS.OwnerContact.whatsapp}`, href: `https://wa.me/91${APP_STRINGS.OwnerContact.whatsapp}` },
  { label: "Email", value: "hello@yourcab.com", href: "mailto:hello@yourcab.com" },
];

export default function TravelFooter() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-end">
      <footer className="relative overflow-hidden">

        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(10,17,40,0.8))" }} />

        {/* Horizon glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
          style={{ background: "linear-gradient(to right, transparent, #f59e0b44, #fb923c55, #f59e0b44, transparent)" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(251,146,60,0.08) 0%, transparent 70%)" }} />

        <div className="relative" style={{ background: "linear-gradient(to bottom, #0a1128 0%, #060d1a 100%)" }}>

          {/* Quick route tags */}
          <div className="border-b border-white/5">
            <div className="max-w-7xl mx-auto px-8 py-4 flex flex-wrap items-center gap-3">
              <span className="text-slate-500 text-xs uppercase tracking-widest mr-2">🚖 Popular Routes</span>
              {["Hubli → Goa", "Hubli → Dandeli", "Hubli → Bangalore", "Hubli → Belgaum", "Hubli ↔ Dharwad"].map((route) => (
                <a key={route} href="#"
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-slate-400 hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all duration-300">
                  {route}
                </a>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="max-w-7xl mx-auto px-8 pt-14 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">

              {/* Brand */}
              <div className="lg:col-span-2 space-y-6">

                {/* Logo */}
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9">
                    <div className="absolute inset-0 rounded-full"
                      style={{ background: "linear-gradient(135deg, #fff, #fff)" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={logo} alt="Logo" className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-white text-2xl font-light tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                    {APP_STRINGS.appName}<span className="text-amber-400">.</span>
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  Hubli's most trusted local cab service. Fixed fares, clean cars, and a driver who knows every road.
                </p>

                {/* Quick Contact */}
                <div className="space-y-3">
                  <p className="text-slate-300 text-xs uppercase tracking-widest">Get in touch</p>
                  {quickContacts.map((c) => (
                    <a key={c.label} href={c.href}
                      className="flex items-center justify-between group">
                      <span className="text-slate-500 text-xs">{c.label}</span>
                      <span className="text-slate-300 text-xs font-medium group-hover:text-amber-400 transition-colors">
                        {c.value}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Book now CTA */}
                {submitted ? (
                  <p className="text-amber-400 text-sm">✓ We'll call you shortly!</p>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); if (name) setSubmitted(true); }}
                    className="space-y-2"
                  >
                    <p className="text-slate-300 text-xs uppercase tracking-widest">Request a callback</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your phone number"
                        className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 transition-all"
                      />
                      <button type="submit"
                        className="px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-95"
                        style={{ background: "linear-gradient(135deg, #f59e0b, #fb923c)" }}>
                        Call
                      </button>
                    </div>
                  </form>
                )}

                {/* Socials */}
                <div className="flex gap-2 pt-1">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-slate-500 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              {Object.entries(links).map(([category, items]) => (
                <div key={category} className="space-y-5">
                  <h4 className="text-xs uppercase tracking-widest text-slate-500">{category}</h4>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item}>
                        <a href="#"
                          className="text-slate-400 text-sm hover:text-amber-300 transition-colors duration-200">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="border-t border-b border-white/5 py-6 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "5,000+", label: "Rides completed" },
                { value: "4.9 ⭐", label: "Average rating" },
                { value: "24/7", label: "Always available" },
                { value: "100%", label: "Fixed fares" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-amber-400 font-bold text-lg">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-600 text-xs">
                © {new Date().getFullYear()} {APP_STRINGS.appName} — Proudly serving Hubli–Dharwad
              </p>
              <div className="flex gap-6">
                {["Privacy", "Terms", "Cancellation"].map((item) => (
                  <a key={item} href="#" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Cityscape image */}
          <img src={cityScape} alt="Cityscape" className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none" />
        </div>
      </footer>
    </div>
  );
}