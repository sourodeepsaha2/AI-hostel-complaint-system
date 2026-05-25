import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyComplaints from "./pages/MyComplaints";
import CreateComplaint from "./pages/CreateComplaint";
import ComplaintDetails from "./pages/ComplaintDetails";

import MainLayout from "./layouts/MainLayout";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-complaints"
        element={
          <ProtectedRoute>
            <MainLayout>
              <MyComplaints />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/create-complaint"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CreateComplaint />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/complaint/:id"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ComplaintDetails />
            </MainLayout>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;