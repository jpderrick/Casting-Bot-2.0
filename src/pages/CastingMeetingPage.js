import React from "react";
import { withStyles } from "@material-ui/core";
import FreeToCast from "../components/FreeToCast";
import Deadlocks from "../components/Deadlocks";

const styles = (theme) => ({});

const CastingMeetingPage = ({ classes, ...props }) => {
  return (
    <div>
      <FreeToCast />
      <Deadlocks />
    </div>
  );
};

export default withStyles(styles)(CastingMeetingPage);
