import { createTheme } from "@mui/material/styles";
import { C1, C2 } from "./modules/helper";

const theme = createTheme({
  palette: {
    primary: {
      main: C2, // Navy
    },
    secondary: {
      main: C1, // Soft teal
    },
    background: {
      default: "#ffffff",
      paper: "#f7f9fa",
    },
    text: {
      primary: "#222",
      secondary: C2,
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    button: {
      textTransform: "none", // No all-caps
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8, // slightly rounded corners
  },
  components: {
    // Smooth hover behavior for buttons
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "0.25s",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: "0.25s",
        },
      },
    },
  },
});

export default theme;