import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import ModalContainer from "../components/ModalContainer";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import NoMeetingRoomIcon from "@material-ui/icons/NoMeetingRoom";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = (theme) => ({
  tallerButton: { padding: theme.spacing(2), marginBottom: theme.spacing(2) },
});

const SeasonSettingsModal = ({ classes, ...props }) => {
  const [castingOpen, setCastingOpen] = useState(false);

  return (
    <div>
      <ModalContainer
        isOpen={props.modalOpen}
        toggleModal={props.toggleModalOpen}
        modalTitle={"Season Settings"}
      >
        <Button
          className={classes.tallerButton}
          fullWidth
          variant="contained"
          color={"primary"}
          startIcon={<DeleteIcon />}
        >
          DELETE SEASON
        </Button>
      </ModalContainer>
    </div>
  );
};

export default withStyles(styles)(SeasonSettingsModal);
