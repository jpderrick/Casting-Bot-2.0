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

import CheckIcon from "@material-ui/icons/Check";

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
                <ListItemText>Joe Bloggs (Week 3) </ListItemText>
                <ListItemText>Hello</ListItemText>
                <ListItemSecondaryAction>
                  <Tooltip title="Cast">
                    <IconButton>
                      <CheckIcon />
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
