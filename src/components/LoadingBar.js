import { Fade, LinearProgress } from "@material-ui/core";
import React from "react";

const LoadingBar = () => {
  return (
    <div>
      <Fade in timeout={4000}>
        <LinearProgress />
      </Fade>
    </div>
  );
};

export default LoadingBar;
