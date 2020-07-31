import React from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import FontSize from "../../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: FontSize.l,
    width: 453,
    lineHeight: 1.2,
  },
  description: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.textColor,
    marginTop: 25,
    width: 402,
  },
  btnStart: {
    height: 65,
    width: 200,
    borderRadius: 8,
    marginTop: 50,
    marginRight: 20,
    border: "1px solid #fff",
    fontSize: FontSize.size16,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    },
  },
}));

const RewardLeftSide = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>
        How to get ghost rewards
      </Typography>
      <Typography className={classes.description}>
        With a token award, either the recipient pays for newly issued,
        outstanding tokens, or the recipient is awarded the tokens as
        compensation for past or future services
      </Typography>{" "}
      <Button variant="contained" color="primary" className={classes.btnStart}>
        Start now
      </Button>
    </div>
  );
};

export default RewardLeftSide;
