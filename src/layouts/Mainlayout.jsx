import { useState } from "react";
import { FaBars } from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-slate-900 min-h-screen">

      {/* Mobile Sidebar Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <div
        className={`fixed lg:static top-0 left-0 z-50 h-full transform transition-transform duration-300
          
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <Sidebar />
      </div>

      {/* Main Content */}

      <div className="flex-1 p-4 lg:p-6 w-full">

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden mb-4 text-white text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        <Navbar />

        <div className="mt-6">
          {children}
        </div>

      </div>

    </div>
  );
}

export default MainLayout;