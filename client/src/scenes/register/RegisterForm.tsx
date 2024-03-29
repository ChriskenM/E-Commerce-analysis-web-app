import React, { useState } from "react";
import axios from "axios";
import "../../index.css";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    // registration logic
    try {
      const response = await axios.post("/register", {
        username,
        email,
        password,
        date: new Date().toISOString(), //capture registration date
      });
      console.log("Registration successful:", response.data);
      // Optionally redirect user to the login page
    } catch (error: any) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="register-form">
      {" "}
      {/* Apply styles from index.css */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="register-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="register-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="register-input"
      />
      <button onClick={handleRegister} className="register-button">
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
