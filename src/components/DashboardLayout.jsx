import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import MobileSidebar from "./sidebar/MobileSidebar";
import { FaBars } from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-amazon-bg">
      {/* Sidebar  */}
      <Sidebar />
      <MobileSidebar open={open} setOpen={setOpen} />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar  */}
        <header className="flex h-16 items-center border-b border-amazon-border px-4">
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg bg-amazon-lightNavy p-3 text-amazon-surface lg:hidden"
          >
            <FaBars />
          </button>

          <span>[Topbar Row]</span>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
