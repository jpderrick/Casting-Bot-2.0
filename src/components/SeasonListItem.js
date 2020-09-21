import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import {
  Paper,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  ListItemText,
  Typography,
  withStyles,
} from "@material-ui/core";

const styles = (theme) => ({
  season: {
    marginBottom: theme.spacing(),
  },
});

const SeasonListItem = ({ classes, ...props }) => {
  return (
    <div>
      <Paper>
        <ListItem className={classes.season}>
          <ListItemText
            primary={
              <div>
                <Typography style={{ display: "inline-block" }}>
                  Autumn Term 2020
                </Typography>
              </div>
            }
          />
          <ListItemSecondaryAction>
            <IconButton component={Link} to="/seasons/1">
              <ArrowForwardIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(SeasonListItem);
