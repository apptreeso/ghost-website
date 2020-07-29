import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, IconButton } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import arrowright from "../../../assets/githubupdate/arrowright.svg";
import designDeveloperRightImg from "../../../assets/About/GhostVeteran/GhostVeteranImg.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: FontSize.l,
    paddingTop: 20,
    width: 490,
  },
  description: {
    fontSize: FontSize.m,
    width: 420,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
  },
  btnarrow: {
    display: "flex",
    alignItems: "center",
    paddingTop: 48,
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

const GhostVeteran = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer">
      <div className="container">
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
            <div className={classes.btnarrow}>
              <Typography className={classes.btn}>Start now</Typography>
              <IconButton>
                <img src={arrowright} alt="arrow right" />
              </IconButton>
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <img src={designDeveloperRightImg} alt="designDeveloperRightImg" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GhostVeteran;
