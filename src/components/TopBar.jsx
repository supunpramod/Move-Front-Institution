import { Phone, Mail } from "lucide-react";


export default function TopBar() {
  return (
    <div className="bg-[#4479DB] text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          
          <div className="flex items-center gap-6 text-gray-700">
  
  <div className="flex items-center gap-2 hover:text-blue-600 transition">
    <Phone className="w-5 h-4 text-white" />
    <span className="text-white">031 2252610</span>
  </div>

  <div className="flex items-center gap-2 hover:text-red-600 transition">
    <Mail className="w-5 h-4 text-white" />
    <span className="text-white">chamika1969@gmail.com</span>
  </div>

</div>
        </div>
        <div className="flex gap-3">
          <a className="hover:underline" href="#" aria-label="facebook">Facebook</a>
          <a className="hover:underline" href="#" aria-label="youtube">YouTube</a>
        </div>
      </div>
    </div>
  );
}
