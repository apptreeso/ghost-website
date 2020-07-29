import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import FontSize from "../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: 30,
  },
  title: {
    fontSize: FontSize.l,
    marginBottom: 50
  },
  list: {
    display: "flex",
    alignItems: "center",
    marginTop: 45,
  },
  listNumber: {
    padding: "15px 20px",
    borderRadius: 4,
  },
  listTitle: {
    fontSize: FontSize.m,
    width: 290,
    marginLeft: 25,
  },
  listDescription: {
    width: 300,
    marginTop: 10,
    marginLeft: 80,
    color: theme.palette.secondary.textColor,
    fontSize: FontSize.sm,
  },
}));

const CreatedDistributed = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Typography className={classes.title}>
        How is ghost created and distributed?
      </Typography>
      {/* list 1  */}
      <div>
        <div className={classes.list}>
          <Typography
            className={classes.listNumber}
            style={{
              backgroundColor: "rgba(239,69,101, 0.1)",
              color: "#EF4565",
            }}
          >
            1.
          </Typography>
          <div>
            <Typography className={classes.listTitle}>
              New Ghost tokens are minted each block
            </Typography>
          </div>
        </div>
        <Typography className={classes.listDescription}>
          In the beginning, 12 new Ghost tokens are minted each block (every 2
          minutes).
        </Typography>
      </div>

      {/* list 2  */}
      <div>
        <div className={classes.list}>
          <Typography
            className={classes.listNumber}
            style={{
              backgroundColor: "rgba(61,169,252, 0.1)",
              color: "#3DA9FC",
            }}
          >
            2.
          </Typography>
          <div>
            <Typography className={classes.listTitle}>
              Ghosts are split between Ghost Veterans
            </Typography>
          </div>
        </div>
        <Typography className={classes.listDescription}>
          6 Ghost are split between Ghost Veterans
        </Typography>
      </div>

      {/* list 3  */}
      <div>
        <div className={classes.list}>
          <Typography
            className={classes.listNumber}
            style={{
              backgroundColor: "rgba(239,69,101, 0.1)",
              color: "#EF4565",
            }}
          >
            3.
          </Typography>
          <div>
            <Typography className={classes.listTitle}>
              Ghost is awarded to the staker
            </Typography>
          </div>
        </div>
        <Typography className={classes.listDescription}>
          4 Ghost is awarded to the staker who mined the block
        </Typography>
      </div>

      {/* list 4  */}
      <div>
        <div className={classes.list}>
          <Typography
            className={classes.listNumber}
            style={{
              backgroundColor: "rgba(61,169,252, 0.1)",
              color: "#3DA9FC",
            }}
          >
            4.
          </Typography>
          <div>
            <Typography className={classes.listTitle}>
              Ghost goes into a pool
            </Typography>
          </div>
        </div>
        <Typography className={classes.listDescription}>
          2 Ghost goes into a pool used for future Ghost development and growt
        </Typography>
      </div>
    </div>
  );
};

export default CreatedDistributed;
