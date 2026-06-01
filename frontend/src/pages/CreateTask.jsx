import { useState } from "react";
import API from "../services/api";

function CreateTask() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createTask = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", form);
      alert("Task created successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Task creation failed");
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={createTask} className="bg-white p-6 shadow rounded max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create Task</h2>

        <input name="title" placeholder="Task Title" onChange={handleChange} className="border p-2 w-full mb-3" required />

        <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2 w-full mb-3" />

        <input name="assignedTo" placeholder="Employee User ID" onChange={handleChange} className="border p-2 w-full mb-3" required />

        <input name="deadline" type="date" onChange={handleChange} className="border p-2 w-full mb-3" required />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
}

export default CreateTask;