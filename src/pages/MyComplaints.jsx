import ComplaintCard from "../components/ComplaintCard";

function MyComplaints() {
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
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-6">
        My Complaints
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {complaints.map((complaint, index) => (
          <ComplaintCard
            key={index}
            title={complaint.title}
            category={complaint.category}
            status={complaint.status}
            priority={complaint.priority}
            date={complaint.date}
          />
        ))}

      </div>

    </div>
  );
}

export default MyComplaints;