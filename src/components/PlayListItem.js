import React, { useState } from "react";

import {
  Paper,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  ListItemText,
  Typography,
  withStyles,
  Chip,
} from "@material-ui/core";

import SettingsIcon from "@material-ui/icons/Settings";
import EditPlayModal from "../modals/EditPlayModal";

const styles = (theme) => ({
  playItem: {
    marginBottom: theme.spacing(),
  },
  typeChip: {
    marginLeft: theme.spacing(),
  },
});

const PlayListItem = ({ classes, data, ...props }) => {
  const [editPlayModal, setEditPlayModal] = useState(false);

  return (
    <div>
      <Paper>
        <ListItem ho className={classes.playItem}>
          <ListItemText
            primary={
              <div>
                <Typography style={{ display: "inline-block" }}>
                  {data.text}
                </Typography>
                <Chip className={classes.typeChip} size="small" label="ODN" />
              </div>
            }
          />
          <ListItemSecondaryAction>
            <IconButton onClick={() => setEditPlayModal(true)}>
              <SettingsIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>

      <EditPlayModal
        modalOpen={editPlayModal}
        toggleModalOpen={setEditPlayModal}
      />
    </div>
  );
};

export default withStyles(styles)(PlayListItem);
