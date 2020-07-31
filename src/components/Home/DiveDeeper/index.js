import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography, Card, Button } from "@material-ui/core";

import ghostDefiImg from "../../../assets/ghostReward/DiveDeeperImg/ghostDefiImg.svg";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
  },
  title: {
    fontSize: FontSize.l,
  },
  subtitle: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.textColor,
    marginTop: 8,
  },
  ghostDefiImg: {
    borderRadius: 15,
  },
  btn: {
    marginTop: 55,
  },
  button: {
    backgroundColor: "rgba(239,69,101, 0.1)",
    border: "none",
    outline: "none",
    color: theme.palette.secondary.main,
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: FontSize.size16,
    borderRadius: 4,
    cursor: "pointer",
    marginRight: 10,
  },
  defiTitle: {
    fontSize: FontSize.size25,
    marginTop: 21,
  },
  defiDescription: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.textColor,
    marginTop: 15,
  },
  time: {
    fontSize: FontSize.sm,
    color: "#72757E",
    marginTop: 15,
  },

  btn: {
    marginTop: 55,
  },
  learnMore: {
    textAlign: "center",
  },

  btnLearnMore: {
    height: 65,
    width: 200,
    borderRadius: 8,
    marginTop: 87,
    border: "1px solid #fff",
    fontSize: FontSize.size16,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    },
  },
}));

const arr = [
  {
    btn: "news",
  },
  {
    btn: "Update",
  },
  {
    btn: "Coming soon",
  },
];

const DiveDeeper = () => {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: 160 }}>
      <div className="container">
      <div className={classes.header}>
        <Typography className={classes.title}>Want to dive deeper?</Typography>
        <Typography className={classes.subtitle}>
          Learn more about ghost community
        </Typography>
      </div>
        <Grid container spacing={2} style={{ paddingTop: 62 }}>
          {arr.map((data) => (
            <Grid item md={4} sm={6} xs={12}>
              <img
                src={ghostDefiImg}
                alt="Ghost Defi Img"
                className={classes.ghostDefiImg}
              />
              <div className={classes.btn}>
                <button className={classes.button}>{data.btn}</button>
              </div>
              <Typography className={classes.defiTitle}>
                Ghost is coming to DeFi privacy USD Stablecoin
              </Typography>
              <Typography className={classes.defiDescription}>
                Aliquam, massa vitae neque sed volutpat nulla vulputate tempor
                commodo. Aliquam turpis cursus vel amet odio...
              </Typography>
              <Typography className={classes.time}>July 16, 2020</Typography>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.learnMore}>
        <Button
          variant="contained"
          color="primary"
          className={classes.btnLearnMore}
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default DiveDeeper;
