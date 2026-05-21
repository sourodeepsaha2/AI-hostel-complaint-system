import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyComplaints from "./pages/MyComplaints";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route
        path="/my-complaints"
        element={
          <MainLayout>
            <MyComplaints />
          </MainLayout>
        }
      />

    </Routes>
  );
}

export default App;