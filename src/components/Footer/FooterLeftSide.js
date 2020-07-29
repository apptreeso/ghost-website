import React from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Avatar,
} from "@material-ui/core";

import logo from "../../assets/ghostlogo-white.png";
import SocialIcon from "../../utils/SocialIcon";

import DiscordIcon from "../../assets/privacyfocused/footerDiscordIcon.png";
import FontSize from "../../utils/FontSize";


const useStyles = makeStyles((theme) => ({
  logoArea: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 25,
    height: 30,
  },
  logoText: {
    marginLeft: 17,
    fontSize: FontSize.size25,
  },
  description: {
    width: 170,
    fontSize: FontSize.size16,
    color: theme.palette.secondary.textColor,
    marginTop: 20,
    marginBottom: 30,
  },
  social: {
      marginLeft: -10
  }
}));

const FooterLeftSide = () => {
  const classes = useStyles();
  return (
    <div >
      <div className={classes.logoArea}>
        <Avatar alt="Ghost Logo" src={logo} className={classes.logo} />
        <Typography className={classes.logoText}>Ghost</Typography>
      </div>
      <Typography className={classes.description}>
        Collaboration platform for modern teams.
      </Typography>{" "}
      <div className={classes.social}>
        <SocialIcon DiscordIcon={DiscordIcon} />
      </div>
    </div>
  );
};

export default FooterLeftSide;
