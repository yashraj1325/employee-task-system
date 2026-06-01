import { useState } from "react";
import API from "../services/api";

function DailyReport() {
  const [form, setForm] = useState({
    workSummary: "",
    blockers: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitReport = async (e) => {
    e.preventDefault();

    try {
      await API.post("/reports", form);
      alert("Report submitted");
    } catch (error) {
      alert("Report submission failed");
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={submitReport} className="bg-white p-6 shadow rounded max-w-md">
        <h2 className="text-2xl font-bold mb-4">Daily Work Report</h2>

        <textarea name="workSummary" placeholder="Work Summary" onChange={handleChange} className="border p-2 w-full mb-3" required />

        <textarea name="blockers" placeholder="Blockers" onChange={handleChange} className="border p-2 w-full mb-3" />

        <input name="date" type="date" onChange={handleChange} className="border p-2 w-full mb-3" required />

        <button className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default DailyReport;