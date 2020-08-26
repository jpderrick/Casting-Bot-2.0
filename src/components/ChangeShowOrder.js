import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
const ChangeShowOrder = () => {
  return (
    <div>
      <IconButton onClick={() => console.log("Earlier")}>
        <ArrowUpwardIcon />
      </IconButton>
      <IconButton onClick={() => console.log("Later")}>
        <ArrowDownwardIcon />
      </IconButton>
    </div>
  );
};

export default ChangeShowOrder;
