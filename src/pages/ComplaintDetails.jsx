import { useParams } from "react-router-dom";

function ComplaintDetails() {
  const { id } = useParams();

  const complaint = {
    id,
    title: "WiFi not working",
    category: "WiFi",
    status: "Pending",
    priority: "High",
    description:
      "The hostel WiFi has not been working properly for the last 2 days.",
    date: "22 May 2026",
  };

  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-6">
        Complaint Details
      </h1>

      <div className="bg-slate-800 p-6 rounded-2xl shadow-md max-w-3xl">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-semibold text-white">
            {complaint.title}
          </h2>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium
            ${
              complaint.status === "Pending"
                ? "bg-yellow-500/20 text-yellow-400"
                : complaint.status === "Resolved"
                ? "bg-green-500/20 text-green-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
          >
            {complaint.status}
          </span>

        </div>

        <div className="space-y-4">

          <p className="text-slate-300">
            <span className="font-semibold text-white">
              Category:
            </span>{" "}
            {complaint.category}
          </p>

          <p className="text-slate-300">
            <span className="font-semibold text-white">
              Priority:
            </span>{" "}
            {complaint.priority}
          </p>

          <p className="text-slate-300">
            <span className="font-semibold text-white">
              Description:
            </span>{" "}
            {complaint.description}
          </p>

          <p className="text-slate-400 text-sm">
            Submitted on: {complaint.date}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ComplaintDetails;