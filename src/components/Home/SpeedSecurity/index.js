import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography, Card } from "@material-ui/core";

import speedbgImg from "../../../assets/SpeedSecurity/speedbgImg.png";
import DecentralizedIcon from "../../../assets/SpeedSecurity/cardIcon/DecentralizedIcon.svg";
import privacyIcon from "../../../assets/SpeedSecurity/cardIcon/privacyIcon.svg";
import transactionIcon from "../../../assets/SpeedSecurity/cardIcon/transactionIcon.svg";
import veteransIcon from "../../../assets/SpeedSecurity/cardIcon/veteransIcon.svg";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.l,
  },
  description: {
    color: "#94A1B2",
    fontSize: FontSize.m,
    width: 510,
    marginLeft: -60,
  },
  cardarea: {
    paddingTop: 150,
  },
  cardsize: {
    height: 420,
    width: 255,
    backgroundColor: "rgba(26, 26, 31, 0.7)",
    borderRadius: 15,
    marginRight: 30,
    backdropFilter: "blur(10px)"
  },
  cardLogo: {
    marginTop: 65,
  },
  cardTitle: {
    color: "#fff",
    fontSize: FontSize.ml,
    marginTop: 50,
    marginBottom: 20,
    maxWidth: 235,
  },
  cardDescription: {
    fontSize: FontSize.sm,
    color: "#94A1B2",
    width: 180,
    marginLeft: 37.5,
  },
}));

const arr = [
  {
    logo: privacyIcon,
    title: "Privacy",
    description:
      "Ghost transactions use a state of the art escrow pool to shield and erase the history of transactions. Ghost transactions are verified using zero-knowledge proofs.",
  },
  {
    logo: DecentralizedIcon,
    title: "Decentralized",
    description:
      "Ghost transactions use a state of the art escrow pool to shield and erase the history of transactions. Ghost transactions are verified using zero-knowledge proofs.",
  },
  {
    logo: transactionIcon,
    title: "Faster transaction times / low fees",
    description:
      " With Ghost, transactions are processed on chain in under 120 seconds with just a fraction of a penny paid in transaction fees.",
  },
  {
    logo: veteransIcon,
    title: "Ghost veterans",
    description:
      "Help secure the Ghost network and earn a share of the transaction fees using the staking features for Ghost.",
  },
];

const StackGhost = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer">
      <div
        style={{
          backgroundImage: `url(${speedbgImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <Grid item sm={12} xs={12} className={classes.header}>
            <Typography className={classes.title}>
              {" "}
              Speed, security, scalability{" "}
            </Typography>
            <Typography className={classes.description}>
              {" "}
              Enjoy the benefits and independence of the digital economy without
              the technical headaches and complexity
            </Typography>
          </Grid>
          {/* card area  */}

          <Grid container spacing={2} className={classes.cardarea} style={{ textAlign: "center" }}>
            {arr.map((data) => (
              <Grid item md={3} sm={6} xs={6}>
                <Card className={classes.cardsize}>
                  <img
                    src={data.logo}
                    alt="Overview"
                    className={classes.cardLogo}
                  />
                  <Typography className={classes.cardTitle}>{data.title}</Typography>
                  <Typography className={classes.cardDescription}>
                    {data.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default StackGhost;
                                                                                      