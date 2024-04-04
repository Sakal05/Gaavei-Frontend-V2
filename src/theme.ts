"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      // Define style for h1 (title) elements
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      // Define style for h2 elements
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      // Define style for h2 elements
      fontSize: "1rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "0.5rem",
      fontWeight: 300,
    },
    body1: {
      // Define style for normal text
      fontSize: "1rem",
      fontWeight: 350,
    },
    body2: {
      fontSize: "0.8rem",
      fontWeight: 200,
    },
    subtitle1: {
      // Define style for secondary text
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 200,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
    },

    // h5: {
    //     fontSize: ""
    // }
  },
  palette: {
    primary: {
      light: "#ffffff",
      main: "#2F2F85",
      dark: "#2C2C2C",
      contrastText: "#000000",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    success: {
      main: "#2ECC71",
      light: "#81e0a9",
    },
    error: {
      main: "#FF0000",
      light: "#ff6666",
    },
    background: {
      default: "#aaaaaa"
    }
  },
});

export default theme;
