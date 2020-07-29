import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import logo from "../../../assets/joinCommunity/joincommunitylogo.svg";
import { Typography, Button, CardMedia } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import DiscordIcon from "../../../assets/joinCommunity/joinCommunityDiscordLogo.svg";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";

import joinCommunityBg from "../../../assets/ghostReward/joinCommunity/joinCommunityBg.svg";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  mainarea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {},
  title: {
    fontSize: FontSize.l,
    marginTop: 40,
  },
  description: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.textColor,
    marginTop: 8,
    width: 550,
    textAlign: "center",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    marginTop: 35,
  },
  button: {
    height: 52,
    width: 153,
    backgroundColor: "rgba(61, 169, 252, 0.05)",
    borderRadius: 8,
    border: "1px solid #3DA9FC",
    fontSize: FontSize.size16,
    textTransform: "capitalize",
    marginRight: 30,
  },
  discordIcon: {
    marginTop: 5,
  },
}));

const JoinCommunity = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer" style={{ backgroundColor: "#1A1A1F" }}>
      <div
        style={{
          backgroundImage: `url(${joinCommunityBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 750,
        }}
      >
        <div className="container" style={{ paddingTop: 200 }}>
          <div className={classes.mainarea}>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography className={classes.title}>
              Join our Community
            </Typography>
            <Typography className={classes.description}>
              Learn more about the project. interact with the team, andtake a
              part in shaping the future of Ghost{" "}
            </Typography>
            <div className={classes.btn}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <TelegramIcon style={{ marginRight: 10 }} />
                Telegram
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <img
                  src={DiscordIcon}
                  alt="Discord Icom"
                  style={{ marginRight: 10 }}
                />
                Discord
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <TwitterIcon style={{ marginRight: 10 }} />
                Twitter
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <RedditIcon style={{ marginRight: 10 }} />
                Reddit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
