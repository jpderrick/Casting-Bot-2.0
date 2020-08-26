import React, { useState } from "react";
import {
  Button,
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
  withStyles,
  Toolbar,
} from "@material-ui/core";
import TopBar from "./components/TopBar";
import SideDrawer from "./components/SideDrawer";

import SeasonViewPage from "./pages/SeasonViewPage";
const styles = (theme) => ({
  root: { display: "flex" },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

function App({ classes, ...props }) {
  const theme = createMuiTheme({
    shadows: ["none"],
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

  const [modalOpen, setModalOpen] = useState(true);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <TopBar />
        <SideDrawer />
        <div className={classes.content}>
          <Toolbar />
          <SeasonViewPage />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
