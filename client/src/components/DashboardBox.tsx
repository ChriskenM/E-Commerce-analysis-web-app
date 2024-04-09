import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Styling the Box component to create a custom DashboardBox
const DashboardBox = styled(Box)(({ theme }) => ({
  /**
   * Applying border radius to create rounded corners
   * Applying box shadow for a visual effect
   */
  backgroundColor: theme.palette.background.light,
  borderRadius: "1rem",
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
}));

// Export dashboard box to use in other files
export default DashboardBox;
