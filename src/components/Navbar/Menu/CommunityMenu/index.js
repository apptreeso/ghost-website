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
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia,
} from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";

import DiscordIcon from "../../../../assets/Menubar/discordcommunityIcon.svg";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "rgba(1,1,1,0)",
  },
  menubar: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  button: {
    height: 40,
    width: 120,
    cursor: "pointer",
    textTransform: "capitalize",
  },
  navbarText: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
  },

  container: {
    position: "relative",
    position: "absolute",
    top: 50,
    left: 35,
    width: 190,
    height: 230,
    borderRadius: 12,
    backgroundColor: "rgba(39, 39, 45, 1)",
    zIndex: 100,
    // padding: "34px 24px",
    boxSizing: "border-box",
  },

  clippath: {
    backgroundColor: "rgba(39, 39, 45, 0.8)",
    position: "absolute",
    top: -15,
    right: 85,
    width: 8,
    height: 13,
    zIndex: -1,
    transform: "perspective(1px) rotateX(5deg)",
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
  },
  navbarText: {
    fontWeight: 300,
    marginRight: 25,
    cursor: "pointer",
    textTransform: "capitalize",
  },
  logotitle: {
    display: "flex",
    alignItems: "center",
  },
  socilaIcon: {
    color: theme.palette.secondary.socialIconColor,
    fontSize: 20,
    marginRight: 12,
  },
  title: {
    color: theme.palette.secondary.textColor,
    fontSize: 14,
    textTransform: "capitalize",
  },
  discordIcon: {
    marginRight: 14,
  },
}));

const CommunityMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Button
        color="inherit"
        className={classes.navbarText}
        onClick={handleToggle}
      >
        Community
      </Button>
      {open && (
        <div className={classes.container}>
          <div className={classes.clippath} />
          <List style={{ padding: "22px 24px" }}>
            <ListItem button>
              <TelegramIcon className={classes.socilaIcon} />
              <ListItemText className={classes.title} primary="Telegram" />
            </ListItem>
            <ListItem button>
              <img src={DiscordIcon} className={classes.discordIcon} />
              <ListItemText className={classes.title} primary="Discord" />
            </ListItem>
            <ListItem button>
              <TwitterIcon className={classes.socilaIcon} />
              <ListItemText className={classes.title} primary="Twitter" />
            </ListItem>
            <ListItem button>
              <RedditIcon className={classes.socilaIcon} />
              <ListItemText className={classes.title} primary="Reddit" />
            </ListItem>
          </List>
        </div>
      )}
    </div>
  );
};

export default CommunityMenu;
