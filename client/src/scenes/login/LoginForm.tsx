import React, { useState } from "react";
import axios from "axios";
import "../../index.css";

const LoginForm: React.FC = () => {
  // Define state variables to store username and password
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // login logic
    try {
      // Send a POST request to the server with username and password
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users`, // Endpoint URL
        {
          params: {
            name,
            password,
          },
        }
      );
      console.log("Login successful:", response.data);
      // Optionally, redirect the user to the dashboard after successful login
    } catch (error: any) {
      console.error("Login failed:", error.message);
    }
  };
  // Displays the login form containing input fields for username and password
  return (
    <div className="login-form">
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
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

// Exports the login form
export default LoginForm;
