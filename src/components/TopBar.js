import React from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

const styles = (theme) => ({
  title: {
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
  },
  icon: {
    color: theme.palette.primary.contrastText,
  },
});

const TopBar = ({ classes, ...props }) => {
  return (
    <AppBar>
      <Toolbar>
        <div className={classes.title}>
          <IconButton
            className={classes.icon}
            disableRipple
            disableFocusRipple
            disableTouchRipple
          >
            <EmojiPeopleIcon />
            <Typography variant="h6" className={classes.title}>
              Casting Bot
            </Typography>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);
