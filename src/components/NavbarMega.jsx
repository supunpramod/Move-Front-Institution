import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    
  },
  {
    label: "What We Do",
    to: "/what-we-do",
    
  },
  { label: "Resources", to: "/where-we-work" },
  { label: "Archive", to: "/funding-reports" },
  { label: "Media Room", to: "/mediaroom" },
  { label: "Contact Us", to: "/contact" },
];

export default function NavbarMega() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-white/10 sticky top-0 z-50 shadow-lg shadow-black/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="h-14 w-30   justify-center rounded-xl ">
            <img
              src={logo}
              alt="MFI Logo"
              className="h-full w-auto  rounded-lg"
            />
          </div>
          <div>
            <div className="font-extrabold tracking-wide text-xl md:text-xl text-secondary group-hover:text-accent transition">
              Move Front
            </div>
            <div className="text-xs text-secondary">
              Life Changing Innovations
            </div>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `py-1 rounded-xl text-sm font-semibold transition relative
                   ${
                     isActive
                       ? "text-secondary"
                       : "text-secondary hover:text-[#EA5C67]"
                   }
                   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:rounded-full
                   after:bg-accent after:scale-x-0 after:origin-left after:transition
                   ${isActive ? "after:scale-x-100" : "group-hover:after:scale-x-100"}`
                }
              >
                {item.label}
              </NavLink>

              {/* Dropdown */}
              {item.children && (
                <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
                  <div className="w-64 bg-white border border-black/10 rounded-2xl shadow-xl shadow-black/15 p-2 ring-1 ring-black/5">
                    <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.to}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-xl text-sm transition
                          ${
                            isActive
                              ? "bg-[#ffc121]/25 text-slate-900 font-semibold"
                              : "text-slate-700 hover:bg-slate-100"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* CTA Button (Desktop) */}
          
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary text-4xl   rounded-xl  hover:bg-white/10 active:bg-white/15 transition"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "☰" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="rounded-2xl overflow-hidden">
                <NavLink
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 text-sm font-semibold transition
                     ${
                       isActive
                         ? "bg-primary text-white"
                         : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                     }`
                  }
                >
                  {item.label}
                </NavLink>

                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 pb-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-xl text-sm transition
                          ${
                            isActive
                              ? "bg-[#ffc121]/30 text-slate-900 font-semibold"
                              : "text-slate-600 hover:bg-slate-100"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            
          </div>
        </div>
      )}
    </header>
  );
}