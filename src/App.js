import React from "react";
import {
  Button,
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import TopBar from "./components/TopBar";
function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#bc564f",
        main: "#AC2C23",
        dark: "#781e18",
      },
      secondary: {
        light: "#5965b2",
        main: "#303f9f",
        dark: "#212c6f",
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <TopBar />
    </MuiThemeProvider>
  );
}

export default App;
