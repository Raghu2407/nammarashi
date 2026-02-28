import { useState } from "react";
import cityScape from "../assets/cityscape.png";
import logo from "../assets/logo.png";
import { APP_STRINGS } from "../constants/strings";

const destinations = ["Bali", "Santorini", "Kyoto", "Patagonia", "Amalfi", "Morocco"];

const links = {
  Explore: ["Top Destinations", "Adventure Trips", "Beach Getaways", "City Breaks", "Hidden Gems"],
  Plan: ["Trip Builder", "Travel Guides", "Packing Lists", "Travel Insurance", "Visa Info"],
  Community: ["Travel Blog", "Photo Stories", "Reviews", "Forum", "Affiliate Program"],
  Support: ["Help Center", "Contact Us", "Cancellation Policy", "Safety", "Accessibility"],
};

const socials = [
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 2.981-2.3 2.981-5.023 0-2.068-1.35-3.657-3.818-3.657-2.796 0-4.552 2.086-4.552 4.425 0 .807.239 1.375.617 1.816a.48.48 0 01.114.453c-.063.258-.202.814-.229.927-.037.149-.151.202-.276.147-1.029-.423-1.51-1.562-1.51-2.839 0-2.668 2.25-5.9 6.7-5.9 3.617 0 5.952 2.64 5.952 5.478 0 3.764-2.072 6.6-5.118 6.6-1.027 0-1.994-.553-2.326-1.175l-.633 2.44c-.229.862-.85 1.941-1.267 2.597.954.289 1.967.445 3.016.445C17.523 22 22 17.523 22 12S17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
];

export default function TravelFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-end" >
      {/* Demo atmosphere */}

      <footer className="relative overflow-hidden">
        {/* Sky gradient top fade */}
        <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(10,17,40,0.8))" }} />

        {/* Horizon glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px" style={{ background: "linear-gradient(to right, transparent, #f59e0b44, #fb923c55, #f59e0b44, transparent)" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(251,146,60,0.08) 0%, transparent 70%)" }} />

        <div className="relative" style={{ background: "linear-gradient(to bottom, #0a1128 0%, #060d1a 100%)" }}>

          {/* Destination tags */}
          <div className="border-b border-white/5">
            <div className="max-w-7xl mx-auto px-8 py-5 flex flex-wrap items-center gap-3">
              <span className="text-slate-500 text-xs uppercase tracking-widest mr-2">✈ Popular</span>
              {destinations.map((d) => (
                <a
                  key={d}
                  href="#"
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-slate-400 hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all duration-300"
                >
                  {d}
                </a>
              ))}
            </div>
          </div>

          {/* Main footer content */}
          <div className="max-w-7xl mx-auto px-8 pt-14 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">

              {/* Brand */}
              <div className="lg:col-span-2 space-y-6">
                {/* Logo */}
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9">
                    <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, #fff, #fff)" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={logo} alt="Cityscape" className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-white text-2xl font-light tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
                    {APP_STRINGS.appName}<span className="text-amber-400">.</span>
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  Discover the world on your own terms. Curated travel experiences for the curious soul.
                </p>

                {/* Newsletter */}
                <div className="space-y-3">
                  <p className="text-slate-300 text-xs uppercase tracking-widest">Trip inspiration, weekly</p>
                  {subscribed ? (
                    <p className="text-amber-400 text-sm">✓ You're on the list. Adventure awaits.</p>
                  ) : (
                    <form
                      onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
                      className="flex gap-2"
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/8 transition-all"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-95"
                        style={{ background: "linear-gradient(135deg, #f59e0b, #fb923c)" }}
                      >
                        Go
                      </button>
                    </form>
                  )}
                </div>

                {/* Socials */}
                <div className="flex gap-2 pt-1">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-slate-500 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
                    >
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
                        <a
                          href="#"
                          className="text-slate-400 text-sm hover:text-amber-300 transition-colors duration-200"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-600 text-xs">
                © 2025 Wandr, Inc. — Made with ♥ for explorers everywhere
              </p>
              <div className="flex gap-6">
                {["Privacy", "Terms", "Cookies"].map((item) => (
                  <a key={item} href="#" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <img src={cityScape} alt="Cityscape" className="absolute bottom-0 left-0 w-full opacity-20s pointer-events-none" />
        </div>
        
      </footer>
    </div>
  );
}
