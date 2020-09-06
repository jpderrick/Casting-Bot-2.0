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
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import NoMeetingRoomIcon from "@material-ui/icons/NoMeetingRoom";

const styles = (theme) => ({
  seasonList: { marginTop: theme.spacing() },
  playItem: {
    marginBottom: theme.spacing(),
  },
});

const SeasonViewPage = ({ classes, ...props }) => {
  const [castingOpen, setCastingOpen] = useState(false);
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant="h6">Season Title</Typography>}
          />
          <ListItemSecondaryAction>
            <Button
              className={classes.castingCloseOpen}
              variant="contained"
              color={castingOpen ? "secondary" : "primary"}
              onClick={() => setCastingOpen(!castingOpen)}
              startIcon={
                castingOpen ? <MeetingRoomIcon /> : <NoMeetingRoomIcon />
              }
            >
              CASTING IS {castingOpen ? "OPEN " : "CLOSED "}
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      <List className={classes.seasonList}>
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
    </div>
  );
};

export default withStyles(styles)(SeasonViewPage);
