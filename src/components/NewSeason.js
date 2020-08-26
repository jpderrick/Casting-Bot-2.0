import React from "react";
import {
  withStyles,
  TextField,
  Button,
  Typography,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const styles = (theme) => ({
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  seasonOptions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});

const NewSeason = ({ classes, ...props }) => {
  return (
    <div>
      <TextField label="Name" variant="outlined" fullWidth />
      <div className={classes.seasonOptions}>
        <Typography variant="subtitle" color="primary">
          Season Options
        </Typography>
        <Divider className={classes.divider} />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked name="checkedB" color="primary" />}
            label="Big Rona Casting Rules"
          />
        </FormGroup>
      </div>
      <Button color="secondary" variant="contained" fullWidth>
        Create Season
      </Button>
    </div>
  );
};

export default withStyles(styles)(NewSeason);
