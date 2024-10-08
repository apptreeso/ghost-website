import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#C4C4C4",
    marginBottom: 80,
    opacity: 0.1,
  },
}));

const FooterDivider = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <Divider className={classes.divider} />
    </div>
  );
};

export default FooterDivider;
