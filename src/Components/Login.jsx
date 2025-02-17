import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin();
  };

  const userLogin = async () => {
    try {
      const payload = { email, password };
      const response = await axios.post(
        "https://backend-g1tu.onrender.com//api/user/login",
        payload,
        {
          withCredentials: true,
        }
      );

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token); // Store token
        setResponseMsg("Login successful! Redirecting...");
        setTimeout(() => {
          navigate("/"); // Redirect to home
        }, 1000);
      } else {
        setResponseMsg(response.data.message || "Login failed");
      }
    } catch (error) {
      setResponseMsg("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h2 className="text-center text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        {responseMsg && (
          <div className="alert alert-info mt-3 text-center">{responseMsg}</div>
        )}

        {/* Register Navigation */}
        <div className="mt-3 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-primary">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
