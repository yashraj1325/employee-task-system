import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <div className="mt-6 space-x-3">
        <button onClick={() => navigate("/tasks")} className="bg-blue-600 text-white px-4 py-2 rounded">
          My Tasks
        </button>

        <button onClick={() => navigate("/daily-report")} className="bg-green-600 text-white px-4 py-2 rounded">
          Submit Daily Report
        </button>
      </div>
    </div>
  );
}

export default EmployeeDashboard;