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

const EditPlayModal = ({ classes, ...props }) => {
  const [playType, setPlayType] = useState(null);
  const [week, setWeek] = useState(null);
  return (
    <div>
      <ModalContainer
        isOpen={props.modalOpen}
        toggleModal={props.toggleModalOpen}
        modalTitle="The Drunks"
      >
        <div>
          <TextField variant="outlined" fullWidth label="Producer Email" />
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.formControl}
          >
            Resend login
          </Button>
          <Button
            className={classes.formControl}
            color="primary"
            variant="contained"
            fullWidth
          >
            Delete
          </Button>
        </div>
      </ModalContainer>
    </div>
  );
};

export default withStyles(styles)(EditPlayModal);
