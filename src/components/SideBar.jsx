import { Link, useLocation } from "react-router-dom";

import {
  FaTachometerAlt,
  FaPlusCircle,
  FaClipboardList,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Create Complaint",
      path: "/create-complaint",
      icon: <FaPlusCircle />,
    },
    {
      name: "My Complaints",
      path: "/my-complaints",
      icon: <FaClipboardList />,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-800 p-5">

      <h1 className="text-3xl font-bold text-white mb-10">
        HostelCare
      </h1>

      <nav className="flex flex-col gap-4">

        {menuItems.map((item, index) => (

          <Link
            key={index}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition
              
              ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-700"
              }
            `}
          >

            <span className="text-lg">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </Link>

        ))}

      </nav>

    </div>
  );
}

export default Sidebar;