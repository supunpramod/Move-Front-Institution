import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#1c2674]">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="font-bold text-lg text-white">Move Front Institution (MFI)</div>
          <p className="text-sm text-white mt-2 max-w-md">
            MFI is a social development organization (registration in process) facilitating community change
            towards total development, focusing on women, men, children, youth and disadvantaged communities.
          </p>

          <div className="font-bold text-lg text-white mt-5">Companies Act Registration</div>
          <p className="text-sm text-white mt-2 max-w-md">
            Process to register under the Companies Act, No 7 of 2007, with Registrar General of Companies.
          </p>
        </div>

        <div>
          <div className="font-semibold text-white">Quick Links</div>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <NavLink className="text-white hover:text-slate-900" to="/about">About</NavLink>
            <NavLink className="text-white hover:text-slate-900" to="/what-we-do">What We Do</NavLink>
            <NavLink className="text-white hover:text-slate-900" to="/funding-reports">Funding & Reports</NavLink>
            <NavLink className="text-white hover:text-slate-900" to="/contact">Contact</NavLink>
          </div>
        </div>

        <div>
  <div className="font-semibold text-white text-lg">Contact</div>

  <div className="mt-3 text-sm text-white space-y-3">
    
    <div className="flex items-start gap-3">
      <FaMapMarkerAlt className="text-[#ffc121] mt-1" />
      <span>No 310, Oruwella Road, Katuneriya, Sri Lanka</span>
    </div>

    <div className="flex items-center gap-3">
      <FaPhoneAlt className="text-[#ffc121]" />
      <span>031 2252610 / 0777559177 / 0712007295</span>
    </div>

    <div className="flex items-center gap-3">
      <MdEmail className="text-[#ffc121] text-lg" />
      <span>chamika1969@gmail.com</span>
    </div>

  </div>
</div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-white flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>© {new Date().getFullYear()} Copyright © 2026 Techtwo Bee Pvt. Ltd. All Rights Reserved</p>
          <p className="text-white">Established: 19/02/2026</p>
        </div>
      </div>
    </footer>
  );
}
