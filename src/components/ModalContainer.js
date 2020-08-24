import React from "react";
import { withStyles, Modal } from "@material-ui/core";

const styles = (theme) => ({});

const ModalContainer = ({ classes, isOpen, toggleModal, ...props }) => {
  return (
    <div>
      <Modal open={isOpen} onClose={toggleModal}>
        <div>{...children}</div>
      </Modal>
    </div>
  );
};

export default withStyles(styles)(ModalContainer);
