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
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import NewSeasonModal from "../modals/NewSeasonModal";
import { Link } from "react-router-dom";

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

const SeasonsPage = ({ classes, ...props }) => {
  const [newSeasonModal, setNewSeasonModal] = useState(false);
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant="h6">Seasons</Typography>}
          />
          <ListItemSecondaryAction>
            <Button
              className={classes.addPlayButton}
              color="secondary"
              variant="contained"
              startIcon={<AddCircleIcon />}
              onClick={() => setNewSeasonModal(true)}
            >
              New Season
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
      </List>

      <NewSeasonModal
        modalOpen={newSeasonModal}
        toggleModalOpen={setNewSeasonModal}
      />
    </div>
  );
};

export default withStyles(styles)(SeasonsPage);
