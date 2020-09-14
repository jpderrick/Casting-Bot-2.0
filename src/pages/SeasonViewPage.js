import React, { useState } from "react";
import {
  withStyles,
  TableBody,
  TableRow,
  Table,
  TableHead,
  Typography,
  TableCell,
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

const styles = (theme) => ({
  seasonList: { marginTop: theme.spacing() },
  playItem: {
    marginBottom: theme.spacing(),
  },
  weekIndicator: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
    marginLeft: -theme.spacing(2),
    marginTop: -theme.spacing(),
    marginBottom: -theme.spacing(),
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontWeight: "bold",
  },
  typeChip: {
    marginLeft: theme.spacing(),
  },
});

const SeasonViewPage = ({ classes, ...props }) => {
  const [seasonSettingsModal, setSeasonSettingsModal] = useState(false);
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant="h6">Season Title</Typography>}
          />
          <ListItemSecondaryAction>
            <Button variant="contained" startIcon={<AddCircleIcon />}>
              Add PLAY
            </Button>
            <Button
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
                    The Drunks
                  </Typography>
                  <Chip className={classes.typeChip} size="small" label="ODN" />
                </div>
              }
            />
            <ListItemSecondaryAction>
              <IconButton>
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
    </div>
  );
};

export default withStyles(styles)(SeasonViewPage);
