import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Styling the Box component to create a custom FlexBetween
const FlexBetween = styled(Box)({
  /**
   * Setting display property to flex to enable flexbox layout
   * Distributing space evenly between flex items along the main axis
   * Aligning flex items along the cross axis to the center
   */
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// Exporting flexbetween for use in other files.
export default FlexBetween;
