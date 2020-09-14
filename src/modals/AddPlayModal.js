import React, { useState } from "react";
import _ from "lodash";
import {
  withStyles,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@material-ui/core";
import ModalContainer from "../components/ModalContainer";

const styles = (theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
  },
});

const AddPlayModal = ({ classes, ...props }) => {
  const [playType, setPlayType] = useState(null);
  const [week, setWeek] = useState(null);
  return (
    <div>
      <ModalContainer
        isOpen={props.modalOpen}
        toggleModal={props.toggleModalOpen}
        modalTitle="Add new play"
      >
        <div>
          <TextField variant="outlined" fullWidth label="Play Title" />
          <FormControl
            fullWidth
            className={classes.formControl}
            variant="outlined"
          >
            <InputLabel>Type</InputLabel>
            <Select
              value={playType}
              onChange={(e) => setPlayType(e.target.value)}
              label="Type"
            >
              <MenuItem value={"Weekend"}>Weekend</MenuItem>
              <MenuItem value={"ODN"}>ODN</MenuItem>
              <MenuItem value={"special"}>Special</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            className={classes.formControl}
            variant="outlined"
          >
            <InputLabel>Week</InputLabel>
            <Select
              disabled={playType === "special"}
              value={week}
              onChange={(e) => setWeek(e.target.value)}
              label="Week"
            >
              {_.times(9, (i) => {
                return <MenuItem value={i + 1}>{`Week ${i + 1}`}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <TextField
            className={classes.formControl}
            variant="outlined"
            fullWidth
            label="Producer Email"
          />
          <Button
            className={classes.formControl}
            color="secondary"
            variant="contained"
            fullWidth
          >
            Add Play
          </Button>
        </div>
      </ModalContainer>
    </div>
  );
};

export default withStyles(styles)(AddPlayModal);
