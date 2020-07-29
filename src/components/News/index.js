import React, { Fragment } from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import LatestNews from "./LatestNews";
import USDStable from "./USDStable";
import NewsContainer from "./NewsContainer";

const useStyles = makeStyles((theme) => ({}));

const News = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <LatestNews />
      <USDStable />
      <NewsContainer />
    </Fragment>
  );
};

export default News;
