import React from "react";
import { withStyles } from "@material-ui/core";
import FreeToCast from "../components/FreeToCast";
import Deadlocks from "../components/Deadlocks";
import Sharing from "../components/Sharing";

const styles = (theme) => ({});

const CastingMeetingPage = ({ classes, ...props }) => {
  return (
    <div>
      <FreeToCast />
      <Deadlocks />
      <Sharing />
    </div>
  );
};

export default withStyles(styles)(CastingMeetingPage);
