import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, IconButton } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import arrowright from "../../../assets/githubupdate/arrowright.svg";
import designDeveloperRightImg from "../../../assets/About/GhostVeteran/GhostVeteranImg.svg";
import BtnWithArrow from "../../../utils/BtnWithArrow";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    lineHeight: 1.2
  },
  subtitle: {
    fontSize: FontSize.l,
    paddingTop: 20,
    width: 490,
    lineHeight: 1.2
  },
  description: {
    fontSize: FontSize.m,
    width: 420,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
  },
}));

const GhostVeteran = () => {
  const classes = useStyles();
  return (
      <div className="container" style={{paddingBottom: 160}}>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Typography className={classes.title}>Ghost Veterans</Typography>
            <div>
              <Typography className={classes.subtitle}>
                Earn a share of the transaction fees using the staking features
                for Ghost
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                Help secure the GHOST network and earn a share of the
                transaction fees using the staking features for GHOST.
              </Typography>
            </div>
            <BtnWithArrow title="Start now" />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <img src={designDeveloperRightImg} alt="designDeveloperRightImg" />
          </Grid>
        </Grid>
      </div>
  );
};

export default GhostVeteran;
