import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", form);
      alert("Signup successful");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full mb-3" required />

        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full mb-3" required />

        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full mb-3" required />

        <select name="role" onChange={handleChange} className="border p-2 w-full mb-3">
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
        </select>

        <button className="bg-blue-600 text-white p-2 w-full rounded">Signup</button>

        <p className="mt-3 text-center">
          Already have account?{" "}
          <span onClick={() => navigate("/")} className="text-blue-600 cursor-pointer">
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;