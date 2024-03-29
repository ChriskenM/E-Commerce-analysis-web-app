import React from "react";
import RegisterForm from "./RegisterForm";
import { Box, Typography } from "@mui/material";

const Register: React.FC = () => {
  return (
    <div>
      <Box textAlign={"center"}>
        <Typography variant="h4" fontSize="20px">
          Register
        </Typography>
        <RegisterForm />
      </Box>
    </div>
  );
};

export default Register;
