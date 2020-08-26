import React from "react";
import {
  withStyles,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemSecondaryAction,
  Switch,
  IconButton,
} from "@material-ui/core";
import ChangeShowOrder from "../components/ChangeShowOrder";
import SettingsIcon from "@material-ui/icons/Settings";
const styles = (theme) => ({
  showContainer: {
    border: "1px solid",
    borderColor: theme.palette.primary.light,
  },
});

const SeasonViewPage = ({ classes, ...props }) => {
  return (
    <div>
      <Switch />
      <List>
        <Paper className={classes.showContainer}>
          <ListItem>
            <ListItemText primary="Title of play" />
            <ListItemSecondaryAction>
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      </List>
    </div>
  );
};

export default withStyles(styles)(SeasonViewPage);
