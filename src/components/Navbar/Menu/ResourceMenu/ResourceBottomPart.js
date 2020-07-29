import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import latestNews from "../../../../assets/Menubar/Resource/latestNews.svg";
import rightarrow from "../../../../assets/Menubar/Resource/rightarrow.svg";
import FontSize from "../../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  top: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 13,
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 3,
    marginLeft: -13,
  },

  title: {
    fontSize: FontSize.sm,
    color: "#72757E",
    paddingLeft: 14,
  },
}));
const ResourceBottomPart = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.top}>
        <img src={latestNews} alt="Latest News" />
        <Typography className={classes.title}>Latest News</Typography>
      </div>
      <div className={classes.bottom}>
        <Typography className={classes.title}>
          Live Q&amp;A $500 in Ghost will be given away
        </Typography>
        <img src={rightarrow} alt="arrow" />
      </div>
      <div className={classes.bottom}>
        <Typography className={classes.title}>
          Ghost available on Vision
        </Typography>
        <img src={rightarrow} alt="arrow" />
      </div>
      <div className={classes.bottom}>
        <Typography className={classes.title}>
          Ghost Recap — How far we’ve come
        </Typography>
        <img src={rightarrow} alt="arrow" />
      </div>
    </div>
  );
};

export default ResourceBottomPart;
