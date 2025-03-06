// import React from 'react';
// import "./Footer.css"
// import logo from "../assets/logo3.png"
// import ces from "../assets/ces2.png"
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div>
//             <a href="index.html">
//               <img src={ces} alt="CES-logo" className="mb-4 h-20 w-20" />
//             </a>
//             <a href="http://www.mmmut.ac.in/" target="_blank" rel="noopener noreferrer">
//               <img src={logo} alt="mmmut-logo" className="mb-4 h-20 w-20" />
//             </a>
//             <p className="text-sm">
//               The Computer Engineering Society has been functioning since 1993 with the collective efforts of a group of B.Tech. students who have a strong urge to complement the theoretical and practical knowledge imparted in the classroom and laboratory, with an emphasis on the development of the overall personality of budding engineering graduates.
//             </p>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Our Other Events</h4>
//             <ul className="space-y-2">
//               <li><a href="events.html#ctf" className="hover:text-gray-400">CTF</a></li>
//               <li><a href="events.html#wield" className="hover:text-gray-400">Wield The Web</a></li>
//               <li><a href="events.html#goc" className="hover:text-gray-400">Game of Codes</a></li>
//               <li><a href="events.html#carpedium" className="hover:text-gray-400">Carpe diem</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Annual Event and Magazine</h4>
//             <ul className="space-y-2">
//               <li><a href="https://cesennexus2k23.netlify.app/" className="hover:text-gray-400">Ennexus</a></li>
//               <li><a href="https://online.fliphtml5.com/ckxdu/qogo/#p=1" className="hover:text-gray-400">Algorica (I Edition)</a></li>
//               <li><a href="https://issuu.com/ces_mmmut/docs/algorica_2023" className="hover:text-gray-400">Algorica (II Edition)</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <p className="text-sm">
//               MMMUT <br />
//               Gorakhpur, U.P India
//             </p>
//             <div className="flex space-x-4 mt-4">
//               <a href="https://www.facebook.com/ces.mmmut/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//                 <i className="bi bi-facebook text-2xl"></i>
//               </a>
//               <a href="https://www.instagram.com/cesmmmut/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//                 <i className="bi bi-instagram text-2xl"></i>
//               </a>
//               <a href="https://www.linkedin.com/company/cesmmmut/mycompany/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//                 <i className="bi bi-linkedin text-2xl"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-700 mt-8 pt-4 text-center">
//           <p>&copy; Copyright <strong>CES</strong>. All Rights Reserved</p>
//           <p>Designed by <a href="https://bootstrapmade.com/" className="hover:text-gray-400">CES</a></p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from "../assets/logo3.png"
import ces from "../assets/ces2.png"
const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="mx-auto bg-[#030919] flex flex-wrap justify-between px-8 pt-10">
        {/* Company Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h4 className="text-lg flex font-semibold mb-4 relative after:absolute after:left-0 after:bottom-[-10px] after:bg-[#177ba9] after:w-12 after:h-1">
            <img src={ces} alt="" className="h-12 w-20" />
            <img src={logo} alt="" className="h-12 w-12" />
          </h4>
         <p className="text-base">The Computer Engineering Society has been functioning since 1993 with the collective efforts of a group of B.Tech. students who have a strong urge to complement the theoretical and practical knowledge imparted in the classroom and laboratory, </p>
        </div>

        {/* Get Help Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 ps-20">
          <h4 className="text-lg font-semibold mb-4 relative after:absolute after:left-0 after:bottom-[-10px] after:bg-[#177ba9] after:w-12 after:h-1">
          Our Other Events

          </h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-[#177ba9] transition">CTF</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#177ba9] transition">Wield The Web</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#177ba9] transition">Games of Code</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#177ba9] transition"></a></li>Codigo
            
          </ul>
        </div>

        {/* Online Shop Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 ps-20">
          <h4 className="text-lg font-semibold mb-4 relative after:absolute after:left-0 after:bottom-[-10px] after:bg-[#177ba9] after:w-12 after:h-1">
          Annual Event and Magazine

          </h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-[#177ba9] transition">Ennexus
            </a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#177ba9] transition">Algorica (I Edition)</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#177ba9] transition">Algorica (II Edition)</a></li>
            <li><a href="#" className="hover:text-[#177ba9] transition">Algorica (III Edition)</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 ps-20">
          <h4 className="text-lg font-semibold mb-4 relative after:absolute after:left-0 after:bottom-[-10px] after:bg-[#177ba9] after:w-12 after:h-1">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-gray-900 p-1 rounded-full hover:bg-[#177ba9] hover:text-white transition">
              <FaFacebook className="text-xl"/>
            </a>
            <a href="#" className="bg-white text-gray-900 p-1 rounded-full hover:bg-[#177ba9] hover:text-white transition">
              <FaTwitter className="text-xl"/>
            </a>
            <a href="#" className="bg-white text-gray-900 p-1 rounded-full hover:bg-[#177ba9] hover:text-white transition">
              <AiFillInstagram className="text-xl"/>
            </a>
            <a href="#" className="bg-white text-gray-900 p-1 rounded-full hover:bg-[#177ba9] hover:text-white transition">
             <FaLinkedinIn className="text-xl"/>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#0f1521] p-3">
        <p className="text-center">© Copyright CES. All Rights Reserved</p>
        <p className="text-center">Designed by <span className="text-[#177ba9]">CES</span>        </p>
      </div>
    </footer>
  );
};

export default Footer;