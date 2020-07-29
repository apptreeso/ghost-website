// import React from "react";

// import { makeStyles } from "@material-ui/core/styles";

// import overview from '../../../../assets/privacyfocused/rightSideImage/overview.png'

// const useStyles = makeStyles((theme) => ({
//   overviewImg: {
//     height: 457,
//     width: 488,
//     borderTopLeftRadius: 10,
//     borderBottomLeftRadius: 10
//   },
// }));

// const PrivacyRightSide = () => {
//   const classes = useStyles();
//   return (
//     <div>
//       <img src={overview} alt="Overview" className={classes.overviewImg} />
//     </div>
//   );
// };

// export default PrivacyRightSide;

import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import overview from "../../../../assets/privacyfocused/rightSideImage/overview.png";
import totalBalance from "../../../../assets/privacyfocused/rightSideImage/totalBalance.svg";
import sentBlind from "../../../../assets/privacyfocused/rightSideImage/sentBlind.svg";

const useStyles = makeStyles((theme) => ({
  privacyRight: {
    position: "relative",
  },
  overviewImg: {
    width: 538,
    height: 465,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  totalBalanceImg: {
    position: "absolute",
    top: 220,
    left: -120,
  },
  sentBlindImg: {
    position: "absolute",
    bottom: -67,
    left: 75,
  },
}));

const PrivacyRightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.privacyRight}>
      <img src={overview} alt="Overview" className={classes.overviewImg} />
      <img
        src={totalBalance}
        alt="Total Balance"
        className={classes.totalBalanceImg}
      />
      <img src={sentBlind} alt="Sent Blind" className={classes.sentBlindImg} />
    </div>
  );
};

export default PrivacyRightSide;
