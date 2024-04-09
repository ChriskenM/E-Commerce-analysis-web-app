// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

/**
 * This module augmentation extends the PaletteColor interface and Palette interface
 * It allows adding an index signature to PaletteColor and adds a new property 'tertiary' to the Palette interface
 * This is useful for adding custom properties to the MUI palette for colors beyond the default ones
 */

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
