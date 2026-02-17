import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavbarMega from "./components/NavbarMega";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import WhereWeWork from "./pages/WhereWeWork";
import Organization from "./pages/Organization";
import Funding from "./pages/Funding";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <TopBar />
      <NavbarMega />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/where-we-work" element={<WhereWeWork />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/funding-reports" element={<Funding />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
