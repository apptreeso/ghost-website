import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import ghostCreatedDistributedImg from "../../../assets/ghostCreatedDistributed/ghostCreatedDistributedImg.svg";
import CreatedDistributed from "./CreatedDistributed";

const useStyles = makeStyles((theme) => ({}));

const GhostCreatedDistributed = () => {
  const classes = useStyles();
  return (
    <div className="maincontainer">
      <div className="container" style={{ paddingTop: 140 }}>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <img
              src={ghostCreatedDistributedImg}
              alt="Ghost Created Distributed Img"
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CreatedDistributed />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GhostCreatedDistributed;
