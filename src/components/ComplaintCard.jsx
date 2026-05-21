function ComplaintCard({
  title,
  category,
  status,
  priority,
  date,
}) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-md">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium
          ${
            status === "Pending"
              ? "bg-yellow-500/20 text-yellow-400"
              : status === "Resolved"
              ? "bg-green-500/20 text-green-400"
              : "bg-blue-500/20 text-blue-400"
          }`}
        >
          {status}
        </span>

      </div>

      <p className="text-slate-400 mt-3">
        Category: {category}
      </p>

      <p className="text-slate-400 mt-2">
        Priority: {priority}
      </p>

      <p className="text-slate-500 text-sm mt-4">
        {date}
      </p>

    </div>
  );
}

export default ComplaintCard;