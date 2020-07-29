import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

import joinCommunityBg from "../../../assets/ghostReward/joinCommunity/joinCommunityBg.svg";

import ghostrewardbg from "../../../assets/ghostReward/ghostrewardbg.svg";
import ghostrewardbgVector from "../../../assets/ghostReward/ghostrewardbgVector.svg";

import RewardLeftSide from "./RewardSection/RewardLeftSide";
import RewardRightSide from "./RewardSection/RewardRightSide";
import DiveDeeper from "../DiveDeeper";
import JoinCommunity from "../JoinCommunity";

const useStyles = makeStyles((theme) => ({
  ghostrewardbgVector: {
    position: "absolute",
    top: 150,
    right: 0,
  },
  joinCommunityBg: {
    position: "absolute",
    top: 1750,
    right: 0,
  },
}));

const GhostReward = () => {
  const classes = useStyles();
  return (
    <div
      className="maincontainer"
      style={{ paddingTop: 50, position: "relative" }}
    >
      <div
        style={{
          backgroundImage: `url(${ghostrewardbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: 783,
        }}
      >
        <img
          src={ghostrewardbgVector}
          alt="Overview"
          className={classes.ghostrewardbgVector}
        />
        {/* <img
          src={joinCommunityBg}
          alt="Overview"
          className={classes.joinCommunityBg}
        /> */}
        <div
          className="container"
          style={{ paddingTop: 300 }}
        >
          <Grid container>
            <Grid item md={6} sm={12} xs={12}>
              <RewardLeftSide />
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <RewardRightSide />
            </Grid>
            {/* <DiveDeeper /> */}
            {/* <JoinCommunity /> */}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default GhostReward;
