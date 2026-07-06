import React from "react";
import mylogo from "../assets/logo.png";
import { FiBell, FiSun, FiLogOut, FiMenu } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="w-full h-[80px] bg-[#131921] text-white flex justify-between items-center px-4 md:px-8 border-b border-[#232f3e]">
      
      <div className="flex items-center gap-4">
        
        <button className="block md:hidden bg-[#232f3e] p-2 rounded-md text-white cursor-pointer hover:opacity-90">
          <FiMenu size={20} />
        </button>

        
        <img src={mylogo} alt="Logo" className="w-[100px] md:w-[120px] h-auto" />

        
        <div className="hidden md:flex flex-col ml-2">
          <h2 className="text-sm font-bold text-white">Koda Dashboard</h2>
          <span className="text-xs text-[#febd69]">E-Commerce Admin Panel</span>
        </div>
      </div>

    
      <div className="flex items-center gap-2 md:gap-3">
        
    
        <button className="relative w-[35px] h-[35px] bg-[#232f3e] flex items-center justify-center rounded-full cursor-pointer hover:opacity-90">
          <FiBell size={18} />
        
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#febd69] rounded-full"></span>
        </button>

        
        <button className="w-[35px] h-[35px] bg-[#232f3e] flex items-center justify-center rounded-full cursor-pointer hover:opacity-90">
          <FiSun size={18} />
        </button>
    
        <div className="hidden md:flex items-center gap-1.5 bg-[#232f3e] p-1 rounded-[20px]">
        
          <div className="w-[28px] h-[28px] bg-[#ff9900] text-[#131921] rounded-full flex items-center justify-center font-bold text-xs">
            AA
          </div>
          <span className="hidden sm:inline text-xs font-medium pr-1.5 text-white">Admin Account</span>
        </div>

        <button className="bg-[#f03a3a] text-white p-1.5 px-3 rounded-md flex items-center gap-1.5 text-xs md:text-sm cursor-pointer transition-colors duration-200 hover:bg-[#d92626]">
          <FiLogOut size={14} />
          <span className="hidden md:inline">Logout</span>
        </button>

      </div>
    </div>
  );
};

export default Topbar;