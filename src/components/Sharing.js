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

const Sharing = ({ classes, ...props }) => {
  return (
    <div>
      <Typography variant="h6">Sharing cast members</Typography>
      <List dense>
        {_.times(5, (i) => {
          return (
            <Paper className={classes.personToCast}>
              <ListItem>
                <ListItemText>Joe Bloggs</ListItemText>
                <ListItemText primary={"Role"} secondary={"Week 3"} />
                <ListItemText primary={"Role"} secondary={"Week 4"} />

                <ListItemSecondaryAction>
                  <Tooltip title="Cast in both shows">
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

export default withStyles(styles)(Sharing);
