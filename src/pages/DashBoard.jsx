function Dashboard() {
  const stats = [
    {
      title: "Total Complaints",
      value: 24,
    },
    {
      title: "Pending",
      value: 10,
    },
    {
      title: "In Progress",
      value: 8,
    },
    {
      title: "Resolved",
      value: 6,
    },
  ];

  const recentComplaints = [
    {
      title: "WiFi not working",
      status: "Pending",
    },
    {
      title: "Water leakage in bathroom",
      status: "Resolved",
    },
    {
      title: "Fan issue in room 302",
      status: "In Progress",
    },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-6">
        Dashboard
      </h1>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl shadow-md"
          >

            <h2 className="text-slate-400 text-lg">
              {item.title}
            </h2>

            <p className="text-4xl font-bold text-white mt-3">
              {item.value}
            </p>

          </div>
        ))}

      </div>

      {/* Recent Complaints */}

      <div className="bg-slate-800 p-6 rounded-2xl shadow-md">

        <h2 className="text-2xl font-semibold text-white mb-6">
          Recent Complaints
        </h2>

        <div className="space-y-4">

          {recentComplaints.map((complaint, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-slate-700 p-4 rounded-xl"
            >

              <p className="text-white font-medium">
                {complaint.title}
              </p>

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
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;