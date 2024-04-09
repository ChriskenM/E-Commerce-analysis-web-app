import React, { useState } from "react";
import axios from "axios";
import "../../index.css";

// Defines RegisterForm functional component
const RegisterForm: React.FC = () => {
  // Defines state variables for name, email, and password
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    // registration logic
    try {
      // Sends a POST request to the server to register a new user
      const response = await axios.post("/register", {
        name,
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

  // Displays the register from with name, email and password
  return (
    <div className="register-form">
      {" "}
      {/* Apply styles from index.css */}
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
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

// exports registerform
export default RegisterForm;
