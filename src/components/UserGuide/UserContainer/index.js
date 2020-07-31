import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Card } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

import userGuideLeftbg from "../../../assets/UserGuide/userGuideLeftbg.svg";
import userGuideRightbg1 from "../../../assets/UserGuide/userGuideRightbg1.svg";
import userGuideRightbg2 from "../../../assets/UserGuide/userGuideRightbg2.svg";
import userGuidebg from "../../../assets/UserGuide/userGuidebg.svg";

const useStyles = makeStyles((theme) => ({
  cardarea: {
    paddingTop: 150,
  },
  cardsize: {
    height: 250,
    width: 540,
    backgroundColor: "rgba(26, 26, 31, 0.7)",
    borderRadius: 15,
    marginRight: 30,
    padding: 50,
    boxSizing: "border-box",
    backdropFilter: "blur(15px)",
    boxShadow: "none",
    border: "1px solid #2D2D2D"
  },
  cardLogo: {
    marginTop: 65,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 25,
    marginBottom: 20,
    maxWidth: 315,
  },
  cardDescription: {
    fontSize: FontSize.sm,
    color: "#94A1B2",
    width: 410,
    fontSize: 18,
  },

  paginationarea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 107,
  },
  pagination: {
    backgroundColor: "#16161A",
    color: "#72757E",
    margin: 10,
    outline: "none",
    border: "none",
    width: 45,
    height: 42,
    borderRadius: 4,
    cursor: "pointer",
  },

  userGuideLeftbg: {
    position: "absolute",
    left: 0,
    top: -115,
  },

  userGuideRightbg1: {
    position: "absolute",
    right: 0,
    top: 1170,
  },
  userGuideRightbg2: {
    position: "absolute",
    right: 0,
    top: 1075,
  },
}));

const arr = [
  {
    title: " Getting Started",
    description:
      " Egestas morbi diam aliquam condimentum velit aliquam purus euismod dui. Mauris adipiscing eu.",
  },
  {
    title: "Working with the Ghost desktop app ",
    description:
      "Get to know the basics of using the Ghost desktop app for stacking, transerfingg and sharing user flow diagrams.",
  },
  {
    title: "Working with the Ghost Dashboard",
    description:
      "Manage Shares, folders, People, and your dashboard user account, online from your Dashboard.",
  },
  {
    title: "VPS Cold Staking Setup",
    description:
      "Here you will find information about how you can create a cold staking VPS (virtual private machine) for the Ghost…",
  },
  {
    title: " Getting Started",
    description:
      " Egestas morbi diam aliquam condimentum velit aliquam purus euismod dui. Mauris adipiscing eu.",
  },
  {
    title: "Working with the Ghost desktop app ",
    description:
      "Get to know the basics of using the Ghost desktop app for stacking, transerfingg and sharing user flow diagrams.",
  },
  {
    title: " Getting Started",
    description:
      " Egestas morbi diam aliquam condimentum velit aliquam purus euismod dui. Mauris adipiscing eu.",
  },
  {
    title: "Working with the Ghost desktop app ",
    description:
      "Get to know the basics of using the Ghost desktop app for stacking, transerfingg and sharing user flow diagrams.",
  },
];

const UserContainer = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer" style={{position: 'relative'}}>
      <img
        src={userGuideLeftbg}
        alt="Overview"
        className={classes.userGuideLeftbg}
      />
      <img
        src={userGuideRightbg1}
        alt="Overview"
        className={classes.userGuideRightbg1}
      />
      <img
        src={userGuideRightbg2}
        alt="Overview"
        className={classes.userGuideRightbg2}
      />
      <div className="container">
        <Grid container spacing={2} className={classes.cardarea}>
          {arr.map((data) => (
            <Grid item md={6} sm={12} xs={12}>
              <Card className={classes.cardsize}>
                <Typography className={classes.cardTitle}>
                  {data.title}
                </Typography>
                <Typography className={classes.cardDescription}>
                  {data.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className={classes.paginationarea}>
          <button
            className={classes.pagination}
            style={{
              backgroundColor: "rgba(44,45,49,0.5)",
            }}
          >
            1
          </button>
          <button className={classes.pagination}>2</button>
          <button className={classes.pagination}>3</button>
          <button className={classes.pagination}>4</button>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
