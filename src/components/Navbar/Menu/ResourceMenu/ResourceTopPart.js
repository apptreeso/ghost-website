import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import BlockExplorer from "../../../../assets/Menubar/Resource/blockExplorer.svg";
import bountyPortal from "../../../../assets/Menubar/Resource/bountyPortal.svg";
import FAQ from "../../../../assets/Menubar/Resource/FAQ.svg";
import userGuide from "../../../../assets/Menubar/Resource/userGuide.svg";
import githubIcon from "../../../../assets/Menubar/Resource/githubIcon.svg";
import whitepaper from "../../../../assets/Menubar/Resource/whitepaper.svg";
import FontSize from "../../../../utils/FontSize";

const useStyles = makeStyles((theme) => ({
  leftSide: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  title: {
    fontSize: FontSize.sm,
    color: theme.palette.secondary.textColor,
    paddingLeft: 14,
    width: "100%",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  // titleSvg: {
  //   display: "flex",
  //   alignItems: "center",
  //   fill: theme.palette.secondary.socialIconColor,
  //   color: theme.palette.secondary.textColor,
  //   cursor: "pointer",
  //   "&:hover": {
  //     color: theme.palette.secondary.main,
  //     fill: theme.palette.secondary.main,
  //   },
  // },
  titleSvg: {
    display: "flex",
    alignItems: "center",
    fill: theme.palette.secondary.socialIconColor,
    color: theme.palette.secondary.textColor,
    cursor: "pointer",
    transform: "translateY(0)",
    transition: "all .2s",
    "&:hover": {
      transform: "translateY(3px)",
      color: theme.palette.secondary.main,
      fill: theme.palette.secondary.main,
    },
  },
}));

const ResourceTopPart = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={6} xs={6}>
        <div className={classes.titleSvg} style={{ paddingBottom: 15 }}>
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.035 5.05634H7.5525L10.4666 0H3.87575L0.964844 8.31881H5.64453L3.57019 16L13.035 5.05634Z"
              // fill="#72757E"
            />
          </svg>
          <Typography className={classes.title}>Bounty Portal</Typography>
        </div>
        <div className={classes.titleSvg} style={{ paddingBottom: 15 }}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.50047 7.11659L13.6649 3.55907L7.50047 0L1.33594 3.55907L7.50047 7.11659Z" />
            <path d="M7.05903 7.88073L0.894531 4.32324V11.4412L7.05903 15.0003V7.88073Z" />
            <path d="M7.94043 7.88073V15.0003L14.1048 11.4412V4.32324L7.94043 7.88073Z" />
          </svg>
          <Typography className={classes.title}>Bounty Portal</Typography>
        </div>
        <div className={classes.titleSvg} style={{ paddingBottom: 15 }}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.50084 6.44587e-07C3.35661 -0.00172072 0 3.44446 0 7.69796C0 11.0615 2.09977 13.9207 5.02402 14.9707C5.41783 15.0723 5.3575 14.7848 5.3575 14.5886V13.2545C3.08345 13.5282 2.99129 11.9824 2.83879 11.7242C2.53044 11.1837 1.80147 11.046 2.01933 10.7878C2.53715 10.5141 3.06502 10.8567 3.67668 11.7845C4.11909 12.4575 4.98213 12.3439 5.41951 12.232C5.51503 11.8275 5.71947 11.466 6.00101 11.1854C3.64484 10.7517 2.66283 9.27473 2.66283 7.51893C2.66283 6.66686 2.93599 5.88364 3.47224 5.25189C3.13038 4.21047 3.50408 3.3188 3.55435 3.18625C4.52799 3.09674 5.54016 3.90234 5.61893 3.96603C6.17194 3.81283 6.80371 3.73193 7.51089 3.73193C8.22143 3.73193 8.85488 3.81627 9.41292 3.9712C9.60228 3.82316 10.5407 3.13117 11.4456 3.21552C11.4942 3.34806 11.8596 4.21907 11.5378 5.24673C12.0808 5.88019 12.3573 6.6703 12.3573 7.5241C12.3573 9.28334 11.3686 10.762 9.0057 11.1889C9.20808 11.3933 9.36878 11.6372 9.47841 11.9061C9.58803 12.1751 9.64438 12.4638 9.64417 12.7553V14.6919C9.65758 14.8468 9.64417 15 9.89554 15C12.8634 13.9723 15 11.0925 15 7.69968C15 3.44446 11.6417 6.44587e-07 7.50084 6.44587e-07Z" />
          </svg>
          <Typography className={classes.title}>Github</Typography>
        </div>
      </Grid>
      <Grid item sm={6} xs={6}>
        <div className={classes.titleSvg} style={{ paddingBottom: 15 }}>
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.14092 15.9776H11.318C11.851 15.9776 12.2837 15.5449 12.2837 15.0119V2.45441V1.44127C12.2837 0.908225 11.851 0.475586 11.318 0.475586H6.14092H4.41949V0.795045C4.42313 0.827904 4.42497 0.862588 4.42497 0.897272V3.00205V3.5424C4.42497 4.29267 3.81526 4.90238 3.06498 4.90238H2.52464H0.419861C0.392479 4.90238 0.363271 4.90055 0.335889 4.89873H0V15.0119C0 15.5449 0.432639 15.9776 0.96568 15.9776H2.02446H6.14092ZM6.33625 12.6954H2.96093C2.70902 12.6954 2.50456 12.4909 2.50456 12.239C2.50456 11.9871 2.70902 11.7826 2.96093 11.7826H6.33807C6.58999 11.7826 6.79445 11.9871 6.79445 12.239C6.79445 12.4909 6.58817 12.6954 6.33625 12.6954ZM9.71339 10.3661H2.96093C2.70902 10.3661 2.50456 10.1616 2.50456 9.9097C2.50456 9.65776 2.70902 9.45333 2.96093 9.45333H9.71339C9.96531 9.45333 10.1698 9.65776 10.1698 9.9097C10.1698 10.1616 9.96531 10.3661 9.71339 10.3661ZM2.96093 6.97978H9.71339C9.96531 6.97978 10.1698 7.18423 10.1698 7.43615C10.1698 7.68807 9.96531 7.89252 9.71339 7.89252H2.96093C2.70902 7.89252 2.50456 7.68807 2.50456 7.43615C2.50456 7.18423 2.70902 6.97978 2.96093 6.97978Z" />
            <path d="M0.420764 4.35527H3.06589C3.06771 4.35527 3.07136 4.35527 3.07319 4.35527C3.51496 4.35162 3.87275 3.99382 3.8764 3.55206C3.8764 3.55023 3.8764 3.54658 3.8764 3.54475V0.897805C3.8764 0.653191 3.6756 0.490723 3.46751 0.490723C3.36711 0.490723 3.26671 0.527232 3.18274 0.611204L0.132338 3.66159C-0.12323 3.91715 0.0574931 4.35527 0.420764 4.35527Z" />
          </svg>
          <Typography className={classes.title}>Whitepaper</Typography>
        </div>
        <div className={classes.titleSvg} style={{ paddingBottom: 15 }}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.4219 0H4.04297C2.97677 0 2.10938 0.867393 2.10938 1.93359V12.8906C2.10938 14.0537 3.05563 15 4.21875 15H12.4219C12.6808 15 12.8906 14.7901 12.8906 14.5312C12.8906 14.2724 12.6808 14.0625 12.4219 14.0625H4.21875C3.57258 14.0625 3.04688 13.5368 3.04688 12.8906C3.04688 12.2445 3.57258 11.7188 4.21875 11.7188H12.4219C12.6808 11.7188 12.8906 11.5089 12.8906 11.25V0.46875C12.8906 0.209883 12.6808 0 12.4219 0ZM3.04688 10.8818V1.93359C3.04688 1.38346 3.49283 0.9375 4.04297 0.9375H4.07227C4.15315 0.9375 4.21875 1.0031 4.21875 1.08398V10.6396C4.21875 10.7162 4.15978 10.7807 4.08334 10.7856C3.78788 10.8044 3.5088 10.8844 3.25857 11.0129C3.16181 11.0626 3.04688 10.9905 3.04688 10.8818Z" />
            <path d="M12.4219 12.4219H4.21875C3.95985 12.4219 3.75 12.6318 3.75 12.8906C3.75 13.1495 3.95985 13.3594 4.21875 13.3594H12.4219C12.6808 13.3594 12.8906 13.1495 12.8906 12.8906C12.8906 12.6318 12.6808 12.4219 12.4219 12.4219Z" />
          </svg>
          <Typography className={classes.title}>User Guides</Typography>
        </div>
        <div className={classes.titleSvg} style={{ paddingBottom: 15 }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path d="M13.945 12.6776L12.9839 9.88051C13.4462 8.9461 13.6906 7.90452 13.6923 6.85651C13.6951 5.05177 12.9968 3.3453 11.726 2.05148C10.455 0.757436 8.76139 0.0290532 6.95711 0.000424258C6.01181 -0.0147515 5.09454 0.159428 4.22938 0.517549C3.39493 0.862955 2.64662 1.36332 2.00524 2.00472C1.36384 2.6461 0.863477 3.39441 0.518071 4.22886C0.159895 5.09402 -0.0140929 6.01176 0.000891425 6.95659C0.0294656 8.76087 0.757876 10.4545 2.05189 11.7255C3.34317 12.9938 5.04527 13.6918 6.84613 13.6918C6.84963 13.6918 6.85337 13.6918 6.8569 13.6918C7.90493 13.6902 8.94648 13.4457 9.88095 12.9834L12.678 13.9445C12.7856 13.9815 12.8958 13.9995 13.0049 13.9995C13.264 13.9995 13.516 13.8977 13.7071 13.7066C13.9786 13.4351 14.0698 13.0408 13.945 12.6776ZM6.77875 10.7484C6.54608 10.7484 6.37379 10.5583 6.36373 10.3334C6.35369 10.1093 6.56167 9.91839 6.77875 9.91839C7.01142 9.91839 7.18371 10.1086 7.19377 10.3334C7.20384 10.5575 6.99583 10.7484 6.77875 10.7484ZM7.19377 7.57842V8.898C7.19377 9.12719 7.00795 9.31302 6.77875 9.31302C6.54956 9.31302 6.36373 9.12719 6.36373 8.898V7.20528C6.36373 6.97609 6.54956 6.79026 6.77875 6.79026C7.45961 6.79026 8.01357 6.2363 8.01357 5.55544C8.01357 4.87458 7.45961 4.32063 6.77875 4.32063C6.09789 4.32063 5.54393 4.87458 5.54393 5.55544C5.54393 5.78464 5.35811 5.97047 5.12891 5.97047C4.89972 5.97047 4.71389 5.78464 4.71389 5.55544C4.71389 4.4169 5.64018 3.49058 6.77875 3.49058C7.91729 3.49058 8.84361 4.41688 8.84361 5.55544C8.84361 6.5519 8.13413 7.38578 7.19377 7.57842Z" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Typography className={classes.title}>FAQ</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default ResourceTopPart;
