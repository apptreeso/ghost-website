import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography, Card, IconButton } from "@material-ui/core";

import githubupdateBg from "../../../assets/githubupdate/githubupdateBg.svg";
import GithubCarousel from "./GithubCarousel";
import FontSize from "../../../utils/FontSize";

import arrowleft from "../../../assets/githubupdate/arrowleft.svg";
import arrowright from "../../../assets/githubupdate/arrowright.svg";

import ArrowRight from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: FontSize.l,
  },
  description: {
    color: "#94A1B2",
    fontSize: FontSize.m,
    width: 510,
  },
  progress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 170,
    marginTop: 66
  },
  rightarrow: {
    cursor: "pointer",
    marginLeft: 12,
  },
  leftarrow: {
    transform: "rotate(180deg)",
    cursor: "pointer",
    marginRight: 12,
  },
  progressline: {
    width: 60,
    height: 2,
    backgroundColor: "#2F2F35",
    borderRadius: "15px 0px 0px 15px",
  },
}));

const GithubUpdate = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer" style={{ paddingTop: 30 }}>
      <div
        style={{
          backgroundImage: `url(${githubupdateBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div>
            <Typography className={classes.title}>
              Latest Github updates
            </Typography>
            <Typography className={classes.description}>
              Stay informed about all latest news
            </Typography>
          </div>
          <div style={{ paddingBottom: 270 }}>
            <GithubCarousel />
            {/* progress bar  */}
            <div className={classes.progress}>
              <IconButton>
                <img src={arrowleft} alt="arrow left" />
              </IconButton>
              <div
                className={classes.progressline}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "15px 0px 0px 15px",
                }}
              />
              <div className={classes.progressline} />
              <IconButton>
                <img src={arrowright} alt="arrow right" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubUpdate;
