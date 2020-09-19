import React, { useState } from "react";
import { Snackbar, withStyles } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const styles = (theme) => ({
  snackbarStyling: {
    width: 200,
  },
});

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackBarHolder = ({ classes, ...props }) => {
  const [snackBar, setSnackBar] = useState(true);
  return (
    <div>
      <Snackbar
        autoHideDuration={5000}
        className={classes.snackbarStyling}
        open={snackBar}
        onClose={() => setSnackBar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert style={{ width: "100%" }} severity="error">
          Failed to cast
        </Alert>
      </Snackbar>
    </div>
  );
};

export default withStyles(styles)(SnackBarHolder);
