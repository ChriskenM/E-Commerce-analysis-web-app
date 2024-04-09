import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Box, Typography } from "@mui/material";

// Defines a functional component called Login
const Login: React.FC = () => {
  return (
    // Renders a div containing login form centered within a Box component
    <div>
      <Box textAlign={"center"}>
        <Typography variant="h4" fontSize="16px">
          Login
        </Typography>
        <LoginForm />
      </Box>
    </div>
  );
};

// Export the Login component
export default Login;
