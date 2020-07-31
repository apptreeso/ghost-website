import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core";

import aboutbgleftbottom from "../../../assets/About/privatefast/aboutbgleftbottom.svg";
import aboutbglefttop from "../../../assets/About/privatefast/aboutbglefttop.svg";
import aboutbgright from "../../../assets/About/privatefast/aboutbgright.svg";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  aboutbgleftbottom: {
    position: "absolute",
    top: 265,
    left: 0,
  },
  aboutbgright: {
    position: "absolute",
    top: 130,
    right: 0,
  },
  aboutcontainer: {
    textAlign: "center",
    paddingBottom: 218,
  },
  title: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: FontSize.xl,
    paddingTop: 5,
    lineHeight: 1.2,
  },
  subtitle2: {
    fontSize: FontSize.xl,
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  description: {
    fontSize: FontSize.m,
    width: 487,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
    margin: "0 auto",
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: 95, position: "relative" }}>
      <div
        style={{
          backgroundImage: `url(${aboutbglefttop})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={aboutbgleftbottom}
          alt="Overview"
          className={classes.aboutbgleftbottom}
        />
        <img
          src={aboutbgright}
          alt="Overview"
          className={classes.aboutbgright}
        />
        <Grid container className="container">
          <Grid item md={12} sm={12} xs={12} className={classes.aboutcontainer}>
            <Typography className={classes.title}>About Us</Typography>
            <div>
              <Typography className={classes.subtitle}>
                The company that makes
              </Typography>
              <Typography className={classes.subtitle2}>
                cryptocurrency privat and fast
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                A non-profit born at the intersection of blockchain and
                collective intelligence.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AboutUs;
