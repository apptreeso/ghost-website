import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

import StackGhostBg from "../../../assets/stackGhost/StakeGhostBg.svg";
import StakeGhostBgVector1 from "../../../assets/stackGhost/StakeGhostBgVector1.svg";
import StakeGhostBgVector2 from "../../../assets/stackGhost/StakeGhostBgVector2.svg";
import StackLeftSide from "./StackLeftSide";
import StackRightSide from "./StackRightSide";

const useStyles = makeStyles((theme) => ({
  StakeGhostBgVector1: {
    position: "absolute",
    top: 600,
    right: 0,
  },
  StakeGhostBgVector2: {
    position: "absolute",
    top: 690,
    right: 0,
  },
}));

const StackGhost = () => {
  const classes = useStyles();

  return (
    <div style={{ paddingTop: 115, position: "relative" }}>
      <div
        style={{
          backgroundImage: `url(${StackGhostBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={StakeGhostBgVector1}
          alt="Overview"
          className={classes.StakeGhostBgVector1}
        />
        <img
          src={StakeGhostBgVector2}
          alt="Overview"
          className={classes.StakeGhostBgVector2}
        />
        <Grid
          container
          className="container"
          style={{ paddingTop: 250, paddingBottom: 250 }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <StackLeftSide />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <StackRightSide />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default StackGhost;
