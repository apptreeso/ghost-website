import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, IconButton } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import arrowright from "../../../assets/githubupdate/arrowright.svg";
import designDeveloperRightImg from "../../../assets/About/designdeveloper/designDeveloperRightImg.svg";
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
    width: 410,
    lineHeight: 1.2
  },
  description: {
    fontSize: FontSize.m,
    width: 400,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
  },
}));

const DesignDeveloper = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer">
      <div className="container">
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Typography className={classes.title}>
              Designed for developers
            </Typography>
            <div>
              <Typography className={classes.subtitle}>
                The world’s most powerful and easy-to-use APIs
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                We agonize over the right abstractions so your teams don’t need
                to stitch together disparate systems or spend months integrating
                payments functionality.
              </Typography>
            </div>
            <BtnWithArrow title="Read the docs" />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <img src={designDeveloperRightImg} alt="designDeveloperRightImg" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DesignDeveloper;
