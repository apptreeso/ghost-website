import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import arrowright from "../../../assets/githubupdate/arrowright.svg";
import FontSize from "../../../utils/FontSize";
import BtnWithArrow from "../../../utils/BtnWithArrow";

const useStyles = makeStyles((theme) => ({
  constainer: {
    paddingLeft: 118,
    paddingTop: 250,
    paddingBottom: 250,
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
}));

const StackRightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.constainer}>
      <Typography className={classes.title}>Stake on Ghost</Typography>
      <Typography className={classes.description}>
        You can earn staking rewards by securing the network. It’s that easy!
      </Typography>
      <BtnWithArrow title="Stake your Ghost now" />
    </div>
  );
};

export default StackRightSide;
