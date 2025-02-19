// import React, { useState } from "react";
// import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

// const Navbar = () => {
//   const [menu, openMenu] = useState(false);
//   const [showMenu, setShowmenu] = useState(true);

//   return (
//     <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
//       <span className="font-mono text-2xl font-bold tracking-wide">Json brewer</span>
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-50 transform ${
//           menu ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out md:hidden`}
//       >
//         <ul className="flex flex-col items-center justify-center h-full gap-6">
//           <a href="#About" onClick={() => openMenu(false)}>
//             <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
//               About
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//             </li>
//           </a>
//           <a href="#Experience" onClick={() => openMenu(false)}>
//             <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
//               Skills
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//             </li>
//           </a>
//           <a href="#Projects" onClick={() => openMenu(false)}>
//             <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
//               Projects
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//             </li>
//           </a>
//           <a href="#Footer" onClick={() => openMenu(false)}>
//             <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
//               Contact
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//             </li>
//           </a>
//         </ul>
//       </div>

//       <ul className="hidden md:flex gap-6">
//         <a href="#About">
//           <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
//             About
//             <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//           </li>
//         </a>
//         <a href="#Experience">
//           <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
//             Skills
//             <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//           </li>
//         </a>
//         <a href="#Projects">
//           <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
//             Projects
//             <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//           </li>
//         </a>
//         <a href="#Footer">
//           <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
//             Contact
//             <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
//           </li>
//         </a>
//       </ul>

//       {showMenu ? (
//         <RiMenu2Line
//           size={30}
//           className="md:hidden absolute right-10 top-6 transition-all duration-300"
//           onClick={() => {
//             openMenu(true);
//             setShowmenu(false);
//           }}
//         />
//       ) : (
//         <RiCloseLine
//           size={30}
//           className="md:hidden absolute right-10 top-6 transition-all duration-300"
//           onClick={() => {
//             openMenu(false);
//             setShowmenu(true);
//           }}
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-wrap justify-between md:items-center text-white px-10 py-6 md:px-20 bg-black bg-opacity-35 z-50">
      <span className="font-mono text-2xl font-bold tracking-wide">Json brewer</span>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-50 transform ${
          menu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-6">
          <a href="#About" onClick={() => openMenu(false)}>
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
          </a>
          <a href="#Experience" onClick={() => openMenu(false)}>
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
              Skills
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
          </a>
          <a href="#Projects" onClick={() => openMenu(false)}>
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
              Projects
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
          </a>
          <a href="#Footer" onClick={() => openMenu(false)}>
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
          </a>
        </ul>
      </div>

      <ul className="hidden md:flex gap-6">
        <a href="#About">
          <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </li>
        </a>
        <a href="#Experience">
          <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
            Skills
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </li>
        </a>
        <a href="#Projects">
          <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
            Projects
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </li>
        </a>
        <a href="#Footer">
          <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:text-gray-400 hover:scale-105 relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </li>
        </a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(true);
            setShowmenu(false);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(false);
            setShowmenu(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;