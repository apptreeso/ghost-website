import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, IconButton } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import arrowright from "../../../assets/githubupdate/arrowright.svg";
import stackRewardImg from "../../../assets/About/stackReward/stackRewardImg.png";
import BtnWithArrow from "../../../utils/BtnWithArrow";

const useStyles = makeStyles((theme) => ({
  stackContainer: {
    paddingTop: 70,
    paddingLeft: 95
  },
  title: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    lineHeight: 1.2
  },
  subtitle: {
    fontSize: FontSize.l,
    paddingTop: 20,
    width: 470,
    lineHeight: 1.2
  },
  description: {
    fontSize: FontSize.m,
    width: 420,
    color: theme.palette.secondary.textColor,
    paddingTop: 31,
  },
}));

const StackReward = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer">
      <div className="container">
        <Grid container style={{ paddingTop: 60, paddingBottom: 210 }}>
          <Grid item md={6} sm={12} xs={12}>
            <img src={stackRewardImg} alt="designDeveloperRightImg" />
          </Grid>
          <Grid item md={6} sm={12} xs={12} className={classes.stackContainer}>
            <Typography className={classes.title}>Staking Rewards</Typography>
            <div>
              <Typography className={classes.subtitle}>
                Earn Rewards by staking coins and fiat
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                Staking is a great way to maximize your holdings in staking
                coins and fiat that would otherwise be sitting in your Kraken
                account.
              </Typography>
              <Typography className={classes.description}>
                Once you have staked your assets you can earn staking rewards on
                top of your holdings and grow them further by compounding those
                future rewards.
              </Typography>
            </div>
            <BtnWithArrow title="Start now" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default StackReward;
