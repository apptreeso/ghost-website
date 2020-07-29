import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, IconButton } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import arrowright from "../../../assets/githubupdate/arrowright.svg";
import designDeveloperRightImg from "../../../assets/About/designdeveloper/designDeveloperRightImg.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: FontSize.l,
    paddingTop: 20,
    width: 410,
  },
  description: {
    fontSize: FontSize.m,
    width: 400,
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
            <div className={classes.btnarrow}>
              <Typography className={classes.btn}>Read the docs</Typography>
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

export default DesignDeveloper;
