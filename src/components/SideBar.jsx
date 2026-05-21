import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-800 p-5">

      <h1 className="text-2xl font-bold text-white mb-10">
        HostelCare
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="text-slate-300 hover:bg-slate-700 p-3 rounded-lg transition"
        >
          Dashboard
        </Link>

        <Link
          to="/my-complaints"
          className="text-slate-300 hover:bg-slate-700 p-3 rounded-lg transition"
        >
          My Complaints
        </Link>

      </nav>
    </div>
  );
}

export default Sidebar;