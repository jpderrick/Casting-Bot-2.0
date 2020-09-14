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
import EditPlayModal from "../modals/EditPlayModal";

const styles = (theme) => ({
  seasonList: { marginTop: theme.spacing() },
  playItem: {
    marginBottom: theme.spacing(),
  },
  addPlayButton: {
    marginRight: theme.spacing(),
  },
  typeChip: {
    marginLeft: theme.spacing(),
  },
});

const SeasonViewPage = ({ classes, ...props }) => {
  const [seasonSettingsModal, setSeasonSettingsModal] = useState(false);
  const [newPlayModal, setNewPlayModal] = useState(false);
  const [editPlayModal, setEditPlayModal] = useState(false);
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

      <List className={classes.seasonList}>
        <Paper>
          <ListItem ho className={classes.playItem}>
            <ListItemText
              primary={
                <div>
                  <Typography style={{ display: "inline-block" }}>
                    <strong>Week 2:</strong> The Drunks
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
        <Paper>
          <ListItem className={classes.playItem}>
            <ListItemText primary="The Drunks" />
            <ListItemSecondaryAction>
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      </List>
      <SeasonSettingsModal
        modalOpen={seasonSettingsModal}
        toggleModalOpen={setSeasonSettingsModal}
      />
      <AddPlayModal
        modalOpen={newPlayModal}
        toggleModalOpen={setNewPlayModal}
      />
      <EditPlayModal
        modalOpen={editPlayModal}
        toggleModalOpen={setEditPlayModal}
      />
    </div>
  );
};

export default withStyles(styles)(SeasonViewPage);
