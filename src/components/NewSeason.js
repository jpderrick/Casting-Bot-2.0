import React from "react";
import { withStyles, TextField } from "@material-ui/core";

const styles = (theme) => ({});

const NewSeason = ({ classes, ...props }) => {
  return (
    <div>
      <TextField />
    </div>
  );
};

export default withStyles(styles)(NewSeason);
