"use client";
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontWeight: 500,
      fontSize: "30px",
      lineHeight: "40px",
    },
    h2: {
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: "40px",
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        item: {
          paddingTop: "12px !important",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
