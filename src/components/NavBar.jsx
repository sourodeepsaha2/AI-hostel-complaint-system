import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="bg-slate-800 p-4 rounded-xl flex justify-between items-center">

      <h2 className="text-white text-xl font-semibold">
        Student Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          S
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg text-white"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;