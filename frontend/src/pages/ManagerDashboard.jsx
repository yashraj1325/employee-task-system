import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function ManagerDashboard() {
  const navigate = useNavigate();
  const [summary, setSummary] = useState({});

  useEffect(() => {
    API.get("/dashboard/summary")
      .then((res) => setSummary(res.data))
      .catch(() => alert("Error loading dashboard"));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Manager Dashboard</h1>
        <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-6">
        <div className="bg-blue-100 p-4 rounded">Users: {summary.totalUsers}</div>
        <div className="bg-green-100 p-4 rounded">Tasks: {summary.totalTasks}</div>
        <div className="bg-yellow-100 p-4 rounded">Reports: {summary.totalReports}</div>
        <div className="bg-purple-100 p-4 rounded">Completed: {summary.completedTasks}</div>
      </div>

      <button onClick={() => navigate("/create-task")} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
        Create Task
      </button>

      <button onClick={() => navigate("/tasks")} className="mt-6 ml-3 bg-gray-700 text-white px-4 py-2 rounded">
        View Tasks
      </button>
    </div>
  );
}

export default ManagerDashboard;