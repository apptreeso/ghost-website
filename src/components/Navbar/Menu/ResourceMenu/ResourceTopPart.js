import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import BlockExplorer from "../../../../assets/Menubar/Resource/blockExplorer.svg";
import bountyPortal from "../../../../assets/Menubar/Resource/bountyPortal.svg";
import FAQ from "../../../../assets/Menubar/Resource/FAQ.svg";
import userGuide from "../../../../assets/Menubar/Resource/userGuide.svg";
import githubIcon from "../../../../assets/Menubar/Resource/githubIcon.svg";
import whitepaper from "../../../../assets/Menubar/Resource/whitepaper.svg";
import FontSize from "../../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  leftSide: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.sm,
    color: theme.palette.secondary.textColor,
    paddingLeft: 14,
  },
}));

const ResourceTopPart = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={6} xs={6}>
        <div className={classes.leftSide} style={{ paddingBottom: 15 }}>
          <img src={bountyPortal} alt="Bounty Portal" />
          <Typography className={classes.title}>Bounty Portal</Typography>
        </div>
        <div className={classes.leftSide} style={{ paddingBottom: 15 }}>
          <img src={BlockExplorer} alt="Block Explorer" />
          <Typography className={classes.title}>Block Explorer</Typography>
        </div>
        <div className={classes.leftSide}>
          <img src={githubIcon} alt="Github" />
          <Typography className={classes.title}>Github</Typography>
        </div>
      </Grid>
      <Grid item sm={6} xs={6}>
        <div className={classes.leftSide} style={{ paddingBottom: 15 }}>
          <img src={whitepaper} alt="white paper" />
          <Typography className={classes.title}>Whitepaper</Typography>
        </div>
        <div className={classes.leftSide} style={{ paddingBottom: 15 }}>
          <img src={userGuide} alt="User Guide" />
          <Typography className={classes.title}>User Guides</Typography>
        </div>
        <div className={classes.leftSide}>
          <img src={FAQ} alt="FAQ" />
          <Typography className={classes.title}>FAQ</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default ResourceTopPart;
