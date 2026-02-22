import { Phone, Mail } from "lucide-react";
import { 
  FaFacebookF, 
  FaYoutube, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaTiktok 
} from "react-icons/fa";


export default function TopBar() {
  return (
    <div className="bg-[#1F3A5F] text-white text-sm">
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
        <div className="flex gap-4 text-white text-base">

  <a href="https://web.facebook.com/profile.php?id=61558851387887"  aria-label="Facebook" className="hover:text-blue-600 transition">
    <FaFacebookF />
  </a>

  <a href="#" aria-label="YouTube" className="hover:text-red-600 transition">
    <FaYoutube />
  </a>

  <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
    <FaInstagram />
  </a>

  <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition">
    <FaLinkedinIn />
  </a>

  <a href="#" aria-label="Twitter" className="hover:text-sky-500 transition">
    <FaTwitter />
  </a>

  <a href="#" aria-label="TikTok" className="hover:text-black transition">
    <FaTiktok />
  </a>

</div>
      </div>
    </div>
  );
}
