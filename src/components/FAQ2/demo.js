import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid } from "@material-ui/core";
import FontSize from "../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 160,
    paddingRight: 100,
    paddingTop: 90,
  },
  title: {
    fontSize: FontSize.l,
    width: 540,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: FontSize.size25,
    width: 360,
    fontWeight: "bold",
  },
  description: {
    fontSize: FontSize.m,
    width: 370,
    color: theme.palette.secondary.textColor,
    paddingTop: 22,
  },
  btn: {
    paddingTop: 73,
    paddingBottom: 140,
  },
  button: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
  },
}));

const arr = [1, 2];

const Faq2 = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer">
      <div className="container">
        <div className={classes.container}>
          <Typography className={classes.title}>
            Frequently Asked Questions 2
          </Typography>
          <div className={classes.btn}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              General
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              style={{ opacity: 0.5 }}
            >
              Staking
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              style={{ opacity: 0.5 }}
            >
              Ghost Veterans
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              style={{ opacity: 0.5 }}
            >
              Erc-20 Ghost Swap
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              style={{ opacity: 0.5 }}
            >
              Exchanges / Wallets
            </Button>
          </div>
          <Grid container>
            <Grid
              sm={12}
              xs={12}
              md={6}
              style={{ paddingBottom: 78 }}
            >
              <Typography className={classes.subtitle}>
                How does Staking work?
              </Typography>
              <Typography className={classes.description}>
                Here is a link to a really well written explanation of Proof of
                Stake,{" "}
                <span style={{ color: "#EF4565" }}>
                  {" "}
                  Proof of Work VS Proof of Stake
                </span>
              </Typography>
            </Grid>
            <Grid sm={12} xs={12} md={6} style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                What are the future plans for Ghost?
              </Typography>
              <Typography className={classes.description}>
                You can stake your Ghost in several different ways: 1. By having
                the Official Ghost Wallet open and running your Ghost coins will
                automatically be staking (“hot staking”) for as long as the
                Ghost application is running. Second, and the “best” option, is
                to setup a VPS (virtual private machine) that is linked to your
                wallet via our Cold Staking implementation that will stake your
                Ghost 24.7 without the need to have the Ghost Wallet running. 2.
                Finally, the easiest and simplest way, would be to join a
                Staking Pool. In this method you do not need to do anything
                highly technical. Several users pool their coins together and
                the pool operator generally takes a fee from the rewards to
                maintain the server and disperses the payouts to users who are
                joined in the pool.
              </Typography>
            </Grid>
            <Grid sm={12} xs={12} md={6} style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                What is the average speed of a Ghost public/private transaction?
              </Typography>
              <Typography className={classes.description}>
                Transactions will show up in your wallet in less than a second.
                For the first confirmation it usually takes 1-2 minute.
              </Typography>
            </Grid>
            <Grid sm={12} xs={12} md={6} style={{ paddingBottom: 78 }}>
              <Typography className={classes.subtitle}>
                What are the fees for sending a transaction?
              </Typography>
              <Typography className={classes.description}>
                A fraction of a penny.
              </Typography>
            </Grid>
            <Grid sm={12} xs={12} md={6}>
              <Typography className={classes.subtitle}>
                Where can I see the status and transactions on the Ghost
                blockchain?
              </Typography>
              <Typography className={classes.description}>
                The status of the Ghost Blockchain, peers, blocks, and
                transactions can be found on{" "}
                <span style={{ color: "#EF4565" }}>https://ghostscan.io/</span>
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Grid direction="row">
          <div>
            <Typography>ladsjflsjdfl</Typography>
            <Typography>ladsjflsjdfl</Typography>
            <Typography>ladsjflsjdfl</Typography>
            <Typography>ladsjflsjdfl</Typography>
          </div>
          <div>
            <Typography>ladsjflsjdfl</Typography>
            <Typography>ladsjflsjdfl</Typography>
            <Typography>ladsjflsjdfl</Typography>
            <Typography>ladsjflsjdfl</Typography>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Faq2;
