import React, { useState } from "react";
import axios from "axios";
import "../../index.css";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // login logic
    try {
      const response = await axios.post("/login", {
        username,
        password,
      });
      console.log("Login successful:", response.data);
      // Optionally, redirect the user to the dashboard after successful login
    } catch (error: any) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="login-form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default LoginForm;