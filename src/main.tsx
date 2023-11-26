import ReactDOM from "react-dom/client";

import "./reset.css";

import "./index.css";

import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App.tsx";

// const theme = createTheme({
//   palette: {
//     primary: lime,
//     secondary: purple,
//   },
//   typography: {
//     fontFamily: ["Arial"].join(","),
//   },
// });

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    custom: true;
  }
}

const theme = createTheme({
  palette: {
    custom: {
      main: "#fff",
      light: "#fff",
      dark: "#cacaca",
      contrastText: "#000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);
