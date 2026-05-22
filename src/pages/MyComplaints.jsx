import { useState } from "react";
import ComplaintCard from "../components/ComplaintCard";

function MyComplaints() {
  const [searchTerm, setSearchTerm] = useState("");

  const complaints = [
    {
      title: "WiFi not working",
      category: "WiFi",
      status: "Pending",
      priority: "High",
      date: "22 May 2026",
    },
    {
      title: "Fan issue in room 302",
      category: "Electricity",
      status: "In Progress",
      priority: "Medium",
      date: "21 May 2026",
    },
    {
      title: "Water leakage in bathroom",
      category: "Water",
      status: "Resolved",
      priority: "High",
      date: "20 May 2026",
    },
    {
      title: "Broken chair",
      category: "Furniture",
      status: "Pending",
      priority: "Low",
      date: "19 May 2026",
    },
  ];

  const filteredComplaints = complaints.filter((complaint) =>
    complaint.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <h1 className="text-3xl font-bold text-white">
          My Complaints
        </h1>

        <input
          type="text"
          placeholder="Search complaints..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-slate-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80"
        />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {filteredComplaints.length > 0 ? (
          filteredComplaints.map((complaint, index) => (
            <ComplaintCard
              key={index}
              title={complaint.title}
              category={complaint.category}
              status={complaint.status}
              priority={complaint.priority}
              date={complaint.date}
            />
          ))
        ) : (
          <p className="text-slate-400">
            No complaints found.
          </p>
        )}

      </div>

    </div>
  );
}

export default MyComplaints;