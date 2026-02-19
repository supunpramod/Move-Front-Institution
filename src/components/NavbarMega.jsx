import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Who We Are", to: "/about" },
      { label: "Vision & Mission", to: "/about#vision" },
      { label: "Organization", to: "/organization" },
    ],
  },
  {
    label: "What We Do",
    to: "/what-we-do",
    children: [
      { label: "Livelihood Development", to: "/what-we-do#livelihood" },
      { label: "Women Empowerment", to: "/what-we-do#women" },
      { label: "Youth & Child Rights", to: "/what-we-do#youth" },
      { label: "Environment", to: "/what-we-do#env" },
    ],
  },
  { label: "Resources", to: "/where-we-work" },
  { label: "Archive", to: "/funding-reports" },
  { label: "Media Room", to: "/funding-reports" },
  { label: "Contact", to: "/contact" },
];

export default function NavbarMega() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#AEDB44] border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-brand-600 text-white grid place-items-center font-bold">
            M
          </div>
          <div>
            <div className="font-bold text-sm md:text-base">
              Move Front 
            </div>
            <div className="text-xs text-slate-500">
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
                  ` py-2 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "text-brand-700"
                      : "text-black  hover:text-slate-500"
                  }`
                }
              >
                {item.label}
              </NavLink>

              {/* Dropdown */}
              {item.children && (
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <div className="w-60 bg-white border border-slate-200 rounded-2xl shadow-lg p-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.to}
                        className="block px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-100"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

         
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <NavLink
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-xl bg-slate-100 text-sm font-medium text-slate-800"
                >
                  {item.label}
                </NavLink>

                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-100"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-2 rounded-2xl bg-brand-600 text-white text-sm font-semibold text-center"
            >
              Donate / Partner
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
