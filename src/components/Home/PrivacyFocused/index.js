import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import PrivacyLeftSide from "./PrivacyLeftSide";
import PrivacyRightSide from "./PrivacyRightSide";
import FontSize from "../../../utils/FontSize"


const useStyles = makeStyles((theme) => ({
  privacycontainer: {
    paddingTop: 70,
    position: 'relative'
  },
  exchange: {
    height: 73,
    width: 850,
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
    <div className="maincontainer">
      <Grid className="container">
        <Grid container className={classes.privacycontainer}>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <PrivacyLeftSide />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <PrivacyRightSide />
          </Grid>
        </Grid>
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
      </Grid>
    </div>
  );
};

export default PrivacyFocused;
