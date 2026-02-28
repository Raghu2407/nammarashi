import { useState } from "react";
import logo from "../assets/logo.png";
import { APP_STRINGS } from "../constants/strings";

const navLinks = [
  { label: "Nearby Taxis", id: "nearby" },
  { label: "Our Promise", id: "promise" },
  { label: "Customer Happiness", id: "happiness" },
  { label: "FAQ", id: "faq" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const navbarHeight = 80; // adjust this
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo + Desktop Nav */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <a href="#" className="flex shrink-0 items-center gap-2">
              <img src={logo} alt={`${APP_STRINGS.appName} Logo`} className="h-8 w-auto" />
              <span className="hidden sm:block text-gray-900 font-semibold text-base tracking-wide">
                {APP_STRINGS.appName}
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden sm:ml-8 sm:flex sm:items-center sm:space-x-1">
              {navLinks.map((link) => (
                 <button
  key={link.label}
  onClick={() => {
    scrollToSection(link.id);
    setMenuOpen(false);
  }}
  className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
>
  {link.label}
</button>
              ))}
            </div>
          </div>

          {/* Right side CTA */}
          <div className="absolute inset-y-0 right-0 flex items-center gap-2 sm:static sm:inset-auto sm:ml-6">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${APP_STRINGS.OwnerContact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.854L.057 23.882l6.195-1.624A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.372l-.36-.214-3.724.976.999-3.633-.234-.374A9.817 9.817 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              WhatsApp
            </a>

            {/* Call */}
            <a
              href={`tel:+91${APP_STRINGS.OwnerContact.phone}`}
              className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-100 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
           <button
  key={link.label}
  onClick={() => {
    scrollToSection(link.id);
    setMenuOpen(false);
  }}
  className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
>
  {link.label}
</button>
          ))}

          {/* Mobile contact buttons */}
          <div className="flex gap-2 pt-2">
            <a
              href={`https://wa.me/${APP_STRINGS.OwnerContact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-2.5 rounded-lg transition-colors"
            >
              💬 WhatsApp
            </a>
            <a
              href={`tel:+91${APP_STRINGS.OwnerContact.phone}`}
              className="flex-1 flex items-center justify-center gap-1.5 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-xs font-semibold px-3 py-2.5 rounded-lg transition-colors"
            >
              📞 Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
