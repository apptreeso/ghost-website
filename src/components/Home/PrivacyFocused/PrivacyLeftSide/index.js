import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import Font from "../../../../utils/FontSize";
import GitHubIcon from "@material-ui/icons/GitHub";
import PrimaryButton from "../../../../utils/Button/PrimaryButton";
import SocialIcon from "../../../../utils/SocialIcon";

import DiscordIcon from "../../../../assets/privacyfocused/privacyDiscordIcon.png";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: Font.xl,
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  title2: {
    fontSize: Font.xl,
    fontWeight: "normal",
    width: 700,
  },
  description: {
    fontSize: Font.m,
    width: 430,
    color: theme.palette.secondary.textColor,
    paddingTop: 50,
  },
  btnarea: {
    display: "flex",
  },
  btn: {
    height: 65,
    width: 200,
    borderRadius: 8,
    marginTop: 50,
    marginRight: 20,
    border: "1px solid #FFFFFF",
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    },
  },
  socialIconGroup: {
    marginTop: 40,
  },
}));

const PrivacyLeftSide = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>
        Privacy-focused &amp;{" "}
        <span className={classes.title2}>Decentralized Ecosystem</span>
      </Typography>
      <Typography className={classes.description}>
        Proof of Stake privacy coin to help make you nothing but a "ghost" when
        transacting online!
      </Typography>
      <div className={classes.btnarea}>
        <PrimaryButton
          style={{
            marginTop: 50,
            marginRight: 20,
            textTransform: "capitalize",
          }}
          title="Download Ghost Wallet"
        />
        <Button variant="contained" color="primary" className={classes.btn}>
          <GitHubIcon style={{ marginRight: 10 }} />
          Ghost Github
        </Button>
      </div>
      <div className={classes.socialIconGroup}>
        <SocialIcon DiscordIcon={DiscordIcon} />
      </div>
    </div>
  );
};

export default PrivacyLeftSide;
