import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import arrowright from "../../../assets/githubupdate/arrowright.svg";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  constainer: {
    paddingLeft: 118,
    paddingTop: 90,
  },
  title: {
    fontSize: FontSize.l,
  },
  description: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.textColor,
    width: 340,
    marginTop: 18,
  },
  btnarrow: {
    display: "flex",
    alignItems: "center",
    marginTop: 35,
  },
  btn: {
    marginRight: 15,
    fontSize: FontSize.size16,
    color: theme.palette.secondary.textColor,
  },
  arrow: {
    cursor: "pointer",
  },
}));

const StackRightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.constainer}>
      <Typography className={classes.title}>Stake on Ghost</Typography>
      <Typography className={classes.description}>
        You can earn staking rewards by securing the network. It’s that easy!
      </Typography>
      <div className={classes.btnarrow}>
        <Typography className={classes.btn}>Stake your Ghost now</Typography>
        <IconButton>
          <img src={arrowright} alt="arrow right" />
        </IconButton>
      </div>
    </div>
  );
};

export default StackRightSide;
