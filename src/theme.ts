"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "900", "400", "700"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: [lato.style.fontFamily, "-apple-system"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSize: 14,
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1.17rem",
    },
    h4: {
      fontSize: "1rem",
    },
    h5: {
      fontSize: "0.83rem",
    },
    h6: {
      fontSize: "0.75rem",
    },
    // fontFamily: ["Roboto", "Lato", "sans-serif"].join(","),
    // h1: {
    //   // Define style for h1 (title) elements
    //   fontSize: "2.5rem",
    //   fontWeight: 500,
    // },
    // h2: {
    //   // Define style for h2 elements
    //   fontSize: "2rem",
    //   fontWeight: 700,
    // },
    // h3: {
    //   // Define style for h2 elements
    //   fontSize: "1.5rem",
    //   fontWeight: 400,
    // },
    // h4: {
    //   fontSize: "1.25rem",
    //   fontWeight: 600,
    // },
    // h5: {
    //   fontSize: "0.875rem",
    //   fontWeight: 300,
    // },
    // body1: {
    //   // Define style for normal text
    //   fontSize: "1rem",
    //   fontWeight: 400,
    // },
    // body2: {
    //   fontSize: "0.8rem",
    //   fontWeight: 200,
    // },
    // subtitle1: {
    //   // Define style for secondary text
    //   fontSize: "1rem",
    //   fontWeight: 600,
    // },
    // subtitle2: {
    //   fontSize: "0.875rem",
    //   fontWeight: 200,
    // },
    // button: {
    //   fontSize: "1rem",
    //   fontWeight: 600,
    // },

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
      default: "#aaaaaa",
    },
  },
});

export default theme;
