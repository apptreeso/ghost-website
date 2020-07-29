import React from "react";
import { Avatar, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ghostwallet from "../../../assets/Menubar/getghostbtn/ghostwallet.svg";
import exchange from "../../../assets/Menubar/getghostbtn/exchange.svg";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  getbtnarea: {
    position: "relative",
  },
  getbtn: {
    height: 40,
    width: 120,
    cursor: "pointer",
    textTransform: "capitalize",
  },

  container: {
    position: "relative",
    position: "absolute",
    top: 60,
    right: 0,
    width: 350,
    height: 215,
    borderRadius: 12,
    backgroundColor: "rgba(39, 39, 45, 1)",
    zIndex: 100,
    padding: 43,
    boxSizing: "border-box",
  },

  clippath: {
    backgroundColor: "rgba(39, 39, 45, 0.8)",
    position: "absolute",
    top: -15,
    right: 65,
    width: 8,
    height: 13,
    zIndex: -1,
    transform: "perspective(1px) rotateX(5deg)",
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
  },
  getList: {
    display: "flex",
    alignItems: "center",
  },
  ghostwallet: { marginRight: 25 },
  title: {
    fontSize: FontSize.m,
    color: theme.palette.secondary.textColor,
  },
  description: {
    fontSize: FontSize.sm,
    color: theme.palette.secondary.textColor,
  },
}));

const GetGhostBtn = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.getbtnarea}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.getbtn}
        onClick={handleToggle}
      >
        Get Ghost
      </Button>
      {open && (
        <div className={classes.container}>
          <div className={classes.clippath} />
          <div className={classes.getList} style={{ marginBottom: 30 }}>
            <img
              src={ghostwallet}
              alt="ghost wallet"
              className={classes.ghostwallet}
            />
            <div>
              <Typography className={classes.title}>Ghost Wallet</Typography>
              <Typography className={classes.description}>
                Ghost Desktop Client v2.0.7
              </Typography>
            </div>
          </div>
          <div className={classes.getList} style={{ marginBottom: 30 }}>
            <img
              src={exchange}
              alt="exchange"
              className={classes.ghostwallet}
            />
            <div>
              <Typography className={classes.title}>Exchanges</Typography>
              <Typography className={classes.description}>
                Malesuada gravida tincidunt
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetGhostBtn;
