import React from "react";
import {
  withStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
  Paper,
} from "@material-ui/core";
import _ from "lodash";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const styles = (theme) => ({
  personToCast: { marginBottom: theme.spacing() },
});

const Deadlocks = ({ classes, ...props }) => {
  return (
    <div>
      <Typography variant="h6">Deadlocks</Typography>
      <List dense>
        {_.times(5, (i) => {
          return (
            <Paper className={classes.personToCast}>
              <ListItem>
                <ListItemText>Joe Bloggs</ListItemText>
                <ListItemText primary={"Role"} secondary={"Week 3"} />
                <ListItemText primary={"Role"} secondary={"Week 4"} />

                <ListItemSecondaryAction>
                  <Tooltip title="Needs Resolving!">
                    <IconButton disabled>
                      <ErrorOutlineIcon />
                    </IconButton>
                  </Tooltip>
                </ListItemSecondaryAction>
              </ListItem>
            </Paper>
          );
        })}
      </List>
    </div>
  );
};

export default withStyles(styles)(Deadlocks);
