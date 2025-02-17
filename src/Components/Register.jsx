import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");



  const handleSubmit = async (e) => {
   e.preventDefault()
   try {
     const payload = { username, email, password };
     const response = await axios.post(
       "http://localhost:5500/api/user/register",
       payload
       //  { withCredentials: true }
     );
     setResponseMsg(response.data.message);
   } catch (error) {
     console.error("Registration Error:", error); // Log full error for debugging
     if (error.response) {
       // Server responded with a status code other than 2xx
       console.error("Error Response:", error.response.data);
       setResponseMsg(error.response.data.message || "Registration failed.");
     } else if (error.request) {
       // No response received from the server
       console.error("No response received:", error.request);
       setResponseMsg("Server is unreachable. Please try again later.");
     } else {
       // Request setup issue
       console.error("Request Error:", error.message);
       setResponseMsg("An unexpected error occurred.");
     }
   }
 };


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h2 className="text-center text-primary">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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
            Register
          </button>
        </form>

        {responseMsg && (
          <div className="alert alert-info mt-3 text-center">{responseMsg}</div>
        )}
      </div>
    </div>
  );
};

export default Register;