import React, { useState } from "react";
import {
  ListItem,
  List,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  withStyles,
  Typography,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import SeasonSettingsModal from "../modals/SeasonSettingsModal";
import AddPlayModal from "../modals/AddPlayModal";

const styles = (theme) => ({
  addPlayButton: {
    marginRight: theme.spacing(),
  },
});
const SeasonPageHeader = ({ classes, ...props }) => {
  const [newPlayModal, setNewPlayModal] = useState(false);
  const [seasonSettingsModal, setSeasonSettingsModal] = useState(false);

  return (
    <div>
      <SeasonSettingsModal
        modalOpen={seasonSettingsModal}
        toggleModalOpen={setSeasonSettingsModal}
      />
      <AddPlayModal
        modalOpen={newPlayModal}
        toggleModalOpen={setNewPlayModal}
      />
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant="h6">Season Title</Typography>}
          />
          <ListItemSecondaryAction>
            <Button
              className={classes.addPlayButton}
              color="secondary"
              variant="contained"
              startIcon={<AddCircleIcon />}
              onClick={() => setNewPlayModal(true)}
            >
              Add PLAY
            </Button>
            <Button
              color="secondary"
              onClick={() => setSeasonSettingsModal(true)}
              variant="contained"
              startIcon={<SettingsIcon />}
            >
              SEASON SETTINGS
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};

export default withStyles(styles)(SeasonPageHeader);
