"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xs500: 500,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});

export default theme;
