import { useState } from "react";
import { toast } from "react-toastify";

function CreateComplaint() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    toast.success("Complaint submitted successfully!");

    setFormData({
      title: "",
      category: "",
      description: "",
    });
  };

  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-6">
        Create Complaint
      </h1>

      <div className="bg-slate-800 p-6 rounded-2xl shadow-md max-w-3xl">

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title */}

          <div>
            <label className="block text-slate-300 mb-2">
              Complaint Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter complaint title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}

          <div>
            <label className="block text-slate-300 mb-2">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Electricity">Electricity</option>
              <option value="Water">Water</option>
              <option value="WiFi">WiFi</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>

          {/* Description */}

          <div>
            <label className="block text-slate-300 mb-2">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              placeholder="Describe your issue..."
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Upload */}

          <div>
            <label className="block text-slate-300 mb-2">
              Upload Image
            </label>

            <input
              type="file"
              className="w-full text-slate-300"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold"
          >
            Submit Complaint
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateComplaint;