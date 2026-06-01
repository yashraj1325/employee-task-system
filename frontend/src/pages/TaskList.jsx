import { useEffect, useState } from "react";
import API from "../services/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const updateStatus = async (id, status) => {
    await API.put(`/tasks/${id}/status`, { status });
    alert("Status updated");
    getTasks();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Deadline: {task.deadline}</p>

            <select
              value={task.status}
              onChange={(e) => updateStatus(task.id, e.target.value)}
              className="border p-2 mt-2"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;