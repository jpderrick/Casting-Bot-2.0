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
} from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
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
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Seasons" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(SideDrawer);
