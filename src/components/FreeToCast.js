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

const FreeToCast = ({ classes, ...props }) => {
  return (
    <div>
      <Typography variant="h6">Free to cast</Typography>
      <List dense>
        {_.times(5, (i) => {
          return (
            <Paper className={classes.personToCast}>
              <ListItem>
                <ListItemText
                  primary={"Joe Bloggs"}
                  secondary={"Role - Play Name"}
                ></ListItemText>

                <ListItemSecondaryAction>
                  <Tooltip title="Cast">
                    <IconButton color="secondary">
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

export default withStyles(styles)(FreeToCast);
