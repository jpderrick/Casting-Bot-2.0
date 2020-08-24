import React from "react";
import {
  withStyles,
  Modal,
  Paper,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const styles = (theme) => ({
  modal: {
    outline: "none",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0%) !important",
  },
  modalContent: {
    marginTop: theme.spacing(2),
    minWidth: 600,
    padding: theme.spacing(2),
  },
  modalTitle: {
    borderBottom: "2px solid",
    borderBottomColor: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  modalTitleText: {
    flex: 1,
    display: "inline-block",
  },
});

const ModalContainer = ({
  classes,
  isOpen,
  toggleModal,
  modalTitle,
  ...props
}) => {
  return (
    <>
      <div>
        <Modal open={isOpen} onClose={() => toggleModal()}>
          <div className={classes.modal}>
            <Toolbar />
            <Paper className={classes.modalContent}>
              <div className={classes.modalTitle}>
                <div className={classes.modalTitleText}>
                  <Typography variant="h6">{modalTitle}</Typography>
                </div>

                <div>
                  <IconButton size="small" onClick={() => toggleModal()}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              Hehehj
              {props.children}
            </Paper>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default withStyles(styles)(ModalContainer);
