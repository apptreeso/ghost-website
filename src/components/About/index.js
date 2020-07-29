import React, { Fragment } from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import AboutUs from "./AboutUs";
import DesignDeveloper from "./DesignDeveloper";
import StackReward from "./StackReward";
import GhostVeteran from "./GhostVeteran";

const useStyles = makeStyles((theme) => ({}));

const About = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AboutUs />
      <DesignDeveloper />
      <StackReward />
      <GhostVeteran />
    </Fragment>
  );
};

export default About;
