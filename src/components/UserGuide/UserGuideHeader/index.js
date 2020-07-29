import React from "react";

import { makeStyles, fade } from "@material-ui/core/styles";

import { Grid, Typography, InputBase } from "@material-ui/core";

import userGuideLeftbg from "../../../assets/UserGuide/userGuideLeftbg.svg";
import userGuideRightbg1 from "../../../assets/UserGuide/userGuideRightbg1.svg";
import userGuideRightbg2 from "../../../assets/UserGuide/userGuideRightbg2.svg";
import userGuidebg from "../../../assets/UserGuide/userGuidebg.svg";

import FontSize from "../../../utils/FontSize";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 80,
  },
  title: {
    fontSize: FontSize.l,
  },
  description: {
    color: "#94A1B2",
    fontSize: FontSize.m,
    width: 510,
    textAlign: "center",
  },

  userGuidebg: {
    position: "relative",
    position: "absolute",
    left: 0,
    top: 0,
    // zIndex: -10
  },

  userGuideRightbg1: {
    position: "absolute",
    right: 0,
    top: 1730,
  },
  userGuideRightbg2: {
    position: "absolute",
    right: 0,
    top: 1630,
  },

  searchInput: {
    width: 480,
    height: 55,
    paddingLeft: 55,
    border: "1px solid #ccc",
    borderRadius: 8,
    boxSizing: "border-box",
    fontSize: 18,
    outline: 'none',
    "&::placeholder": {
      color: "#94A1B2",
    },
  },
}));

const UserGuideHeader = () => {
  const classes = useStyles();
  return (
    <div className="container" style={{ paddingBottom: 280 }}>
        <Grid item sm={12} xs={12} className={classes.header}>
          <Typography className={classes.title}>Ghost User Guides</Typography>
          <Typography className={classes.description}>
            How can we help you?
          </Typography>
        </Grid>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 42,
            position: "relative",
          }}
        >
          <input className={classes.searchInput} placeholder="search" />
          <SearchIcon
            style={{
              color: "#72757E",
              position: "absolute",
              top: 54,
              left: 330,
              fontSize: 35,
            }}
          />
        </div>
      </div>

  );
};

export default UserGuideHeader;
