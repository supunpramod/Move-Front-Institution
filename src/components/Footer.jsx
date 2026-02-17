import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="font-bold text-lg">Move Front Institution (MFI)</div>
          <p className="text-sm text-slate-600 mt-2 max-w-md">
            MFI is a social development organization (registration in process) facilitating community change
            towards total development, focusing on women, men, children, youth and disadvantaged communities.
          </p>
        </div>

        <div>
          <div className="font-semibold">Quick Links</div>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <NavLink className="text-slate-600 hover:text-slate-900" to="/about">About</NavLink>
            <NavLink className="text-slate-600 hover:text-slate-900" to="/what-we-do">What We Do</NavLink>
            <NavLink className="text-slate-600 hover:text-slate-900" to="/funding-reports">Funding & Reports</NavLink>
            <NavLink className="text-slate-600 hover:text-slate-900" to="/contact">Contact</NavLink>
          </div>
        </div>

        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-3 text-sm text-slate-600 space-y-2">
            <div>📍 No 310, Oruwella Road, Katuneriya, Sri Lanka</div>
            <div>📞 031 2252610 / 0777559177 / 0712007295</div>
            <div>✉️ chamika1969@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-slate-600 flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>© {new Date().getFullYear()} Move Front Institution. All rights reserved.</p>
          <p className="text-slate-500">Established: 01/06/2021</p>
        </div>
      </div>
    </footer>
  );
}
