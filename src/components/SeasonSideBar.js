import React, { useState } from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import NoMeetingRoomIcon from "@material-ui/icons/NoMeetingRoom";
const styles = (theme) => ({
  sidebarTitle: {
    marginBottom: theme.spacing(),
  },
  formControl: {
    marginTop: theme.spacing(),
  },
});
const SeasonSideBar = ({ classes, ...props }) => {
  const [castingOpen, setCastingOpen] = useState(false);
  return (
    <div>
      <Button
        className={classes.tallerButton}
        fullWidth
        variant="contained"
        color={castingOpen ? "secondary" : "primary"}
        onClick={() => setCastingOpen(!castingOpen)}
        startIcon={castingOpen ? <MeetingRoomIcon /> : <NoMeetingRoomIcon />}
      >
        CASTING {castingOpen ? "IS OPEN " : "CLOSED "}
      </Button>
      <Button className={classes.formControl} variant="contained" fullWidth>
        Casting Meeting
      </Button>
    </div>
  );
};

export default withStyles(styles)(SeasonSideBar);
