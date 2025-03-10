import { useState, useEffect } from "react";
import { 
  FiHome, 
  FiInfo, 
  FiUserCheck, 
  FiUsers, 
  FiCalendar, 
  FiPhoneCall, 
  FiMenu 
} from "react-icons/fi";
import logo from "../assets/logo3.png"
import ces from "../assets/ces2.png"
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[997] transition-all duration-500 ${scrolled ? "bg-opacity-95 bg-[#132049] h-[70px]" : "h-[90px]"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <a href="#intro" className="scrollto">
            <img src={ces} alt="CES Logo" className="h-10 md:h-8" />
          </a>
          <a href="http://www.mmmut.ac.in/" target="_blank" rel="noopener noreferrer" className="scrollto">
            <img src={logo} alt="University Logo" className="h-10 md:h-8" />
          </a>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/" className="text-gray-400 hover:text-white text-lg hover:underline-offset-8 "><FiHome /></a>
          <a href="#about" className="text-gray-400 hover:text-white text-lg flex items-center gap-1 hover:underline hover:underline-offset-8 ">About <FiInfo /></a>
          <a href="#faculty-section" className="text-gray-400 hover:text-white text-lg flex items-center gap-1 hover:underline hover:underline-offset-8 ">Faculty <FiUserCheck /></a>
          <a href="new_team.html" className="text-gray-400 hover:text-white text-lg flex items-center gap-1 hover:underline hover:underline-offset-8 ">Team <FiUsers /></a>
          <a href="events.html" target="_blank" className="text-gray-400 hover:text-white text-lg flex items-center gap-1 hover:underline hover:underline-offset-8 ">Events <FiCalendar /></a>
          <a href="#contact" className="button-24 px-3 py-2 rounded-lg bg-blue-200 text-blue-900 font-bold hover:bg-white hover:text-blue-900 flex items-center gap-1">Contact <FiPhoneCall /></a>
        </nav>

        <button className="md:hidden text-white text-2xl">
          <FiMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
