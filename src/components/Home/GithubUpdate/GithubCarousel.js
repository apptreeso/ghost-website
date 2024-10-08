import React from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, Grid } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  cardsize: {
    width: 350,
    backgroundColor: "rgba(22, 22, 26, 0.8);",
    backdropFilter: "blur(10px)",
    borderRadius: 15,
    border: "1px solid #2D2D2D",
    padding: "48px 38px",
    boxSizing: "border-box",
    color: theme.palette.primary.textColor,
    marginTop: 55,
    marginRight: 20,
    boxShadow: "none",
  },
  titleLogo: {
    display: "flex",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: FontSize.m,
    marginRight: 17,
  },
  logo: {
    opacity: 0.5,
  },
  time: {
    fontSize: FontSize.sm,
    color: "#72757E",
  },
  description: {
    color: theme.palette.secondary.textColor,
    fontSize: FontSize.sm,
    marginTop: 20,
  },
  btn: {
    marginTop: 23,
  },
  button: {
    backgroundColor: "rgba(239,69,101, 0.1)",
    border: "none",
    color: theme.palette.secondary.main,
    padding: "15px 28px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: FontSize.size16,
    borderRadius: 4,
    cursor: "pointer",
    marginRight: 10,
    marginBottom: 10,
  },
}));

const arr = [
  {
    title: "Ghost-coldstaking-pools ",
    time: "Updated 3 hours ago",
    description: "A directory of cold staking pools for the Ghost network.",
    btnOne: "Staking ",
    btnTwo: "Pool",
  },
  {
    title: "Ghost-desktop",
    time: "Updated 4 hours ago",
    description:
      "Generic altcoin DNS seeder. Easy configuration for virtually any cryptocurrency ",
    btnOne: "TypeScript",
    btnTwo: "GPL-2.0",
  },
  {
    title: "bitcoin-script-debugger",
    time: "Updated 2 hours ago",
    description:
      "Online Debugging tool for Bitcoin script language Online Debugging tool for Bitcoin script languageOnline Debugging tool for Bitcoin script languageOnline Debugging tool for Bitcoin script languageOnline Debugging tool for Bitcoin script languageOnline Debugging tool for Bitcoin script language",
    btnOne: "JavaScript",
    btnTwo: "MIT",
  },
  // {
  //   title: "ghost-coldstakepool",
  //   time: "Updated 3 hours ago",
  //   description:
  //     "Generic altcoin DNS seeder. Easy configuration for virtually any cryptocurrency",
  // },
];

const GithubCarousel = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {arr.map((data) => (
        <Card className={classes.cardsize}>
          <div className={classes.titleLogo}>
            <Typography className={classes.cardTitle}>{data.title}</Typography>
            <GitHubIcon fontSize="small" className={classes.logo} />
          </div>
          <Typography className={classes.time}>{data.time}</Typography>
          <Typography className={classes.description}>
            {data.description}
          </Typography>
          <div className={classes.btn}>
            <button className={classes.button}>{data.btnOne}</button>
            <button className={classes.button}>{data.btnTwo}</button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GithubCarousel;
