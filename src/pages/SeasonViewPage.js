import React, { useState } from "react";
import {
  withStyles,
  Typography,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Button,
  Chip,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import SeasonSettingsModal from "../modals/SeasonSettingsModal";
import AddPlayModal from "../modals/AddPlayModal";
import PlayListItem from "../components/PlayListItem";

const styles = (theme) => ({
  playList: { marginTop: theme.spacing() },

  addPlayButton: {
    marginRight: theme.spacing(),
  },
});

const SeasonViewPage = ({ classes, ...props }) => {
  const [seasonSettingsModal, setSeasonSettingsModal] = useState(false);
  const [newPlayModal, setNewPlayModal] = useState(false);
  return (
    <div>
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

      <List className={classes.playList}>
        <PlayListItem />
      </List>
      <SeasonSettingsModal
        modalOpen={seasonSettingsModal}
        toggleModalOpen={setSeasonSettingsModal}
      />
      <AddPlayModal
        modalOpen={newPlayModal}
        toggleModalOpen={setNewPlayModal}
      />
    </div>
  );
};

export default withStyles(styles)(SeasonViewPage);
