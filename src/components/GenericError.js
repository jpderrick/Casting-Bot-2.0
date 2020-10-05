import { Divider } from "@material-ui/core";
import { AlertTitle, Alert } from "@material-ui/lab";
import React from "react";

const GenericError = ({ message }) => {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Alas poor Casting Bot, I knew him well.</AlertTitle>
        {message}
      </Alert>
    </div>
  );
};

export default GenericError;
