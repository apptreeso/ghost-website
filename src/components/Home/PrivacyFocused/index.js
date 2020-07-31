import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import PrivacyLeftSide from "./PrivacyLeftSide";
import FontSize from "../../../utils/FontSize";

import speedbgImg from "../../../assets/privacyfocused/privacyFocusMainImg.svg";
import overview from "../../../assets/privacyfocused/rightSideImage/overview.png";

const useStyles = makeStyles((theme) => ({
  privacycontainer: {
    paddingTop: 70,
    position: "relative",
  },
  exchange: {
    height: 73,
    marginRight: 20,
    marginTop: 117,
  },
  exchangeText: {
    color: "#72757E",
    fontSize: FontSize.sm,
  },
  exchangeLogo: {
    fontSize: FontSize.size25,
    color: "#72757E",
    marginRight: 25,
    fontWeight: 700,
  },
}));

const PrivacyFocused = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${speedbgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="container">
        <Grid container className={classes.privacycontainer}>
          <Grid item lg={8} md={6} sm={6} xs={6}>
            <PrivacyLeftSide />
          </Grid>
        </Grid>
      </div>
      <div className="container">
        <Grid item sm={12} xs={12}>
          <div className={classes.exchange}>
            <Typography className={classes.exchangeText}>
              Exchanges which are working with Ghost
            </Typography>
            <div style={{ display: "flex", marginTop: 20 }}>
              <Typography className={classes.exchangeLogo}>
                Changelly
              </Typography>
              <Typography className={classes.exchangeLogo}>HitBTC</Typography>
              <Typography className={classes.exchangeLogo}>MXC</Typography>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default PrivacyFocused;
