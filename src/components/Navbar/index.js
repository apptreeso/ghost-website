import React, { Fragment } from "react";

// MUI stuff
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Avatar, Typography } from "@material-ui/core";

import ResourceMenu from "./Menu/ResourceMenu/index";
import AboutMenu from "./Menu/AboutMenu/index";
import CommunityMenu from "./Menu/CommunityMenu/index";
import Logo from "./Logo";
import GetGhostBtn from "./GetGhostBtn";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menubar: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className="nav-container">
      <Link className="routerlink" to="/">
        <Logo />
      </Link>
      <div className={classes.menubar}>
        <Link className="routerlink" to="/about">
          <AboutMenu />
        </Link>
        <CommunityMenu />
        <ResourceMenu />
      </div>
      <GetGhostBtn />
    </div>
  );
};

export default Navbar;
