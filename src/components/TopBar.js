import React from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const styles = (theme) => ({
  titleHolder: {
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
  },
  title: {
    marginLeft: theme.spacing(),
  },
  icon: {
    color: theme.palette.primary.contrastText,
  },
});

const TopBar = ({ classes, ...props }) => {
  return (
    <AppBar>
      <Toolbar>
        <div className={classes.titleHolder}>
          <IconButton className={classes.icon} disableRipple>
            <EmojiPeopleIcon />
            <Typography variant="h6" className={classes.title}>
              Casting Bot
            </Typography>
          </IconButton>
        </div>

        <Tooltip title="About">
          <IconButton className={classes.icon}>
            <InfoIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Logout">
          <IconButton className={classes.icon}>
            <ExitToAppIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);
