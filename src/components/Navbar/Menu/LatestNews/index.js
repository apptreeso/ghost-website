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

const useStyles = makeStyles((theme) => ({
  navbarText: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
  },
}));

const LatestNews = () => {
  const classes = useStyles();
  return (
    <div>
      <Button color="inherit" className={classes.navbarText}>
      Latest news
      </Button>
    </div>
  );
};

export default LatestNews;
