import React from "react";
import {
  withStyles,
  Drawer,
  Typography,
  List,
  ListItem,
  Toolbar,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SeasonSideBar from "./SeasonSideBar";
import { Link, useLocation } from "react-router-dom";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerWidth = 240;

const styles = (theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  divideCenter: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
  sidebarContent: {
    margin: theme.spacing(2),
  },
});

const SideDrawer = ({ classes, ...props }) => {
  const location = useLocation();
  const seasonsCheck = "seasons/d";
  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button to="/seasons" component={Link}>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Seasons" />
            </ListItem>
            <ListItem button to="/people" component={Link}>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItem>
            <ListItem button to="/settings" component={Link}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </div>
        <Divider className={classes.divideCenter} />
        <div className={classes.sidebarContent}>
          {location.pathname == "/seasons/1" && <SeasonSideBar />}
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(SideDrawer);
