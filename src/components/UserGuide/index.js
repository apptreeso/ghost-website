import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import UserGuideHeader from "./UserGuideHeader";
import UserContainer from "./UserContainer";

import userGuideLeftbg from "../../assets/UserGuide/userGuideLeftbg.svg";
import userGuideRightbg1 from "../../assets/UserGuide/userGuideRightbg1.svg";
import userGuideRightbg2 from "../../assets/UserGuide/userGuideRightbg2.svg";
import userGuidebg from "../../assets/UserGuide/userGuidebg.svg";
import FontSize from "../../utils/FontSize";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
 
}));

const UserGuide = () => {
  const classes = useStyles();
  return (
    <div
      className="maincontainer"
      style={{
        backgroundImage: `url(${userGuidebg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <UserGuideHeader />
      <UserContainer />
    </div>
  );
};

export default UserGuide;

      {/*  */}
      {/*   */}
