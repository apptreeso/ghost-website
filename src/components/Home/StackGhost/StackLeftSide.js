import React from "react";

// MUI stuff
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Card, Slider, Divider } from "@material-ui/core";

import logo from "../../../assets/ghostlogo-white.png";
import ghostPriceLogo from "../../../assets/stackGhost/ghostPriceLogo.svg";
import FontSize from "../../../utils/FontSize";

const PrettoSlider = withStyles({
  root: {
    color: "#27AE60",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    color: "#2F2F35",
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  cardsize: {
    height: 400,
    width: 540,
    backgroundColor: "rgba(22, 22, 26, 0.8);",
    borderRadius: 15,
    border: "1px solid #2D2D2D",
    padding: 60,
    marginRight: 120,
    boxSizing: "border-box",
    color: theme.palette.primary.textColor,
  },
  cardTitle: {
    fontSize: FontSize.ml,
  },
  ghost: {
    display: "flex",
    alignItems: "center",
    marginTop: 43,
  },
  ghostText1: {
    color: theme.palette.secondary.textColor,
    marginRight: 10,
    fontSize: FontSize.m,
  },
  ghostText2: {
    color: theme.palette.primary.textColor,
    marginRight: 10,
    fontSize: FontSize.ml,
  },
  ghostlogo: {
    height: 18,
    width: 18,
    marginTop: 3,
  },
  sliderarea: {
    marginTop: 25,
  },
  slidertext: {
    color: theme.palette.secondary.textColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    backgroundColor: "#72757E",
    marginTop: 25,
    opacity: 0.2,
  },
  priceMonthReward: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    color: theme.palette.secondary.textColor,
  },
  price: {},
  priceTextLogo: {
    display: "flex",
    alignItems: "center",
  },
  priceText: {
    marginRight: 10,
    fontSize: FontSize.ml,
  },
  monthPrice: {
    color: "#27AE60",
    fontSize: FontSize.ml,
  },
  reward: {},
}));

const StackLeftSide = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.cardsize}>
        <Typography className={classes.cardTitle}>
          Estimate your rewards
        </Typography>
        <div className={classes.ghost}>
          <Typography className={classes.ghostText1}>You stake</Typography>
          <Typography className={classes.ghostText2}>
            2,608,233 ghost
          </Typography>
          <img src={logo} alt="Logo" className={classes.ghostlogo} />
        </div>
        <div className={classes.sliderarea}>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
          <div className={classes.slidertext}>
            <Typography>0</Typography>
            <Typography>10m</Typography>
          </div>
          <Divider className={classes.divider} />
        </div>
        <div className={classes.priceMonthReward}>
          <div className={classes.price}>
            <Typography>Ghost price</Typography>
            <div className={classes.priceTextLogo}>
              <Typography className={classes.priceText}>$ 15</Typography>
              <img src={ghostPriceLogo} alt="Ghost Price Logo" />
            </div>
          </div>
          <div>
            <Typography>Each Month</Typography>
            <Typography className={classes.monthPrice}>$ 15</Typography>
          </div>
          <div className={classes.reward}>
            <Typography>Annual reward</Typography>
            <Typography className={classes.monthPrice}>7.74%</Typography>
          </div>
        </div>
      </Card>
    </>
  );
};

export default StackLeftSide;
