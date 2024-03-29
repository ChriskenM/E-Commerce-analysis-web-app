import { useState } from "react";
import { Link } from "react-router-dom";
//import PixIcon from "@mui/icons-material/Pix";
import SpaIcon from "@mui/icons-material/Spa";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <SpaIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Chambuzi
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>

        {/* Login Link */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/login"
            onClick={() => setSelected("login")}
            style={{
              color: selected === "login" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Login
          </Link>
        </Box>

        {/* Register Link */}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/register"
            onClick={() => setSelected("register")}
            style={{
              color: selected === "register" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Register
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
