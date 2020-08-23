import React from "react";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import TopBar from "./components/TopBar";
function App() {
  const lightTheme = createMuiTheme({
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
    <MuiThemeProvider theme={lightTheme}>
      <div className="App">
        <Button variant="contained">Hello, World</Button>
        <TopBar />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
