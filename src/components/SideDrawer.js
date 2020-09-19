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
import { Link } from "react-router-dom";
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
          </List>
        </div>
        <Divider className={classes.divideCenter} />
        <div className={classes.sidebarContent}>
          <SeasonSideBar />
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(SideDrawer);
