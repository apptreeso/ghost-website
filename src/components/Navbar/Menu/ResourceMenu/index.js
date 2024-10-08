import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import {
  Avatar,
  Typography,
  Menu,
  MenuItem,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import ResourceTopPart from "./ResourceTopPart";
import ResourceBottomPart from "./ResourceBottomPart";
import HoverExtrapart from "../../../../utils/HoverExtrapart";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "rgba(1,1,1,0)",
  },
  menubar: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  button: {
    height: 40,
    width: 120,
    cursor: "pointer",
    textTransform: "capitalize",
  },
  navbarText: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
  },

  container: {
    position: "relative",
    position: "absolute",
    top: 50,
    left: -50,
    width: 500,
    height: 330,
    borderRadius: 12,
    zIndex: 100,
  },

  clippath: {
    backgroundColor: "rgba(39, 39, 45, 0.8)",
    position: "absolute",
    top: -15,
    right: 90,
    width: 8,
    height: 13,
    zIndex: -1,
    transform: "perspective(1px) rotateX(5deg)",
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
  },
  navbarText: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
  },
  topPart: {
    padding: 45,
    backgroundColor: "rgba(39, 39, 45, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  bottomPart: {
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 50,
    background: "#33333A",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  hover: {},
}));

const ResourceMenu = () => {
  const classes = useStyles();

  return (
    <div className="menu">
      <Button color="inherit" className={classes.navbarText}>
        Resources
      </Button>
      <div className="dropdown-menu">
        <div className={classes.container}>
          <HoverExtrapart style={{ width: 500 }} />
          <div className={classes.clippath} />

          <div className={classes.topPart}>
            <ResourceTopPart />
          </div>
          <div className={classes.bottomPart}>
            <ResourceBottomPart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceMenu;
