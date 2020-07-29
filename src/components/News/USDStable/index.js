import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, IconButton } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import arrowright from "../../../assets/githubupdate/arrowright.svg";
import stackRewardImg from "../../../assets/About/stackReward/stackRewardImg.png";

import USDStableLeftImg from "../../../assets/News/USDStable/USDStableLeftImg.svg";

const useStyles = makeStyles((theme) => ({
  stackContainer: {
    paddingTop: 25,
    paddingLeft: 70,
  },
  title: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
  title: {
    fontSize: 33,
    paddingTop: 15,
    width: 550,
  },
  description: {
    fontSize: FontSize.m,
    width: 400,
    color: theme.palette.secondary.textColor,
    paddingTop: 15,
  },
  time: {
    fontSize: FontSize.sm,
    color: "#72757E",
    paddingTop: 23
  },
  btn: {
    marginTop: 23,
  },
  button: {
    backgroundColor: "rgba(239,69,101, 0.1)",
    border: "none",
    color: theme.palette.secondary.main,
    padding: "15px 28px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: FontSize.size16,
    borderRadius: 4,
    cursor: "pointer",
    marginRight: 10,
    marginBottom: 10,
  },
}));

const USDStable = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer">
      <div className="container">
        <Grid container style={{ paddingTop: 125 }}>
          <Grid item md={6} sm={12} xs={12}>
            <img src={USDStableLeftImg} alt="USDStableLeftImg" />
          </Grid>
          <Grid item md={6} sm={12} xs={12} className={classes.stackContainer}>
            <div className={classes.btn}>
              <button className={classes.button}>News</button>
            </div>
            <div>
              <Typography className={classes.title}>
                Ghost is coming to DeFi privacy USD Stablecoin
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                Aliquam, massa vitae neque sed volutpat nulla vulputate tempor
                commodo. Aliquam turpis cursus vel amet odio. Sagittis at massa
              </Typography>
            </div>

            <Typography className={classes.time}>July 16, 2020</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default USDStable;
