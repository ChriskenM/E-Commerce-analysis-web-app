import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Box, Typography } from "@mui/material";

const Login: React.FC = () => {
  return (
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

export default Login;
