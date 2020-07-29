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
    // fontWeight: "bold",
    // color: 'red'
  },
  title2: {
    fontSize: Font.xl,
    fontWeight: 'normal'
  },
  description: {
    fontSize: Font.m,
    width: 430,
    color: theme.palette.secondary.textColor,
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    // lineHeight: 1
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
    border: "1px solid #fff",
  },
  socialIconGroup: {
    marginTop: 55,
  },
}));

const PrivacyLeftSide = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <h1 className={classes.title}>
          Privacy-focused &amp;
        </h1>
          <span className={classes.title2}>Decentralized Ecosystem</span>
      </div>
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
