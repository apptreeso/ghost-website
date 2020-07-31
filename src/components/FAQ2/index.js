import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid } from "@material-ui/core";
import FontSize from "../../utils/FontSize";
import { Link } from "react-router-dom";
import FAQ2Main from "./FAQ2Main";

import Footer from "../Footer";
import FooterDivider from "../../utils/FooterDivider";

const Faq2 = () => {
  return (
    <div className="maincontainer">
      <FAQ2Main />
      <FooterDivider />
      <Footer />
    </div>
  );
};

export default Faq2;
