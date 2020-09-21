import React, { useState } from "react";
import {
  withStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import NewSeasonModal from "../modals/NewSeasonModal";
import SeasonListItem from "../components/SeasonListItem";

const styles = (theme) => ({
  seasonList: { marginTop: theme.spacing() },
  newSeason: {
    marginRight: theme.spacing(),
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
              className={classes.newSeason}
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
        <SeasonListItem />
      </List>

      <NewSeasonModal
        modalOpen={newSeasonModal}
        toggleModalOpen={setNewSeasonModal}
      />
    </div>
  );
};

export default withStyles(styles)(SeasonsPage);
