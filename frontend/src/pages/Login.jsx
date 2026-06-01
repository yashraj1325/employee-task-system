import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "manager") {
        navigate("/manager");
      } else {
        navigate("/employee");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full mb-3" required />

        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full mb-3" required />

        <button className="bg-green-600 text-white p-2 w-full rounded">Login</button>

        <p className="mt-3 text-center">
          New user?{" "}
          <span onClick={() => navigate("/signup")} className="text-blue-600 cursor-pointer">
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;