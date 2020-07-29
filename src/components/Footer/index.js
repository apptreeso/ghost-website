import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import FooterLeftSide from "./FooterLeftSide";
import FooterRightSide from "./FooterRightSide";

import { makeStyles } from "@material-ui/core/styles";
import FontSize from "../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  copyright: {
    fontSize: FontSize.size13,
    color: theme.palette.secondary.textColor,
    paddingTop: 200,
    paddingBottom: 50
  },
  divider: {
    backgroundColor: "#C4C4C4",
    marginBottom: 80,
    opacity: 0.1,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer" style={{ backgroundColor: "#16161A" }}>
      <div className="container" style={{ paddingTop: 100 }}>
        <Divider className={classes.divider} />
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <FooterLeftSide />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <FooterRightSide />
          </Grid>
        </Grid>
        <Typography className={classes.copyright}>© Copyright Ghost</Typography>
      </div>
    </div>
  );
};

export default Footer;
