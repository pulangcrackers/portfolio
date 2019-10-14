import React, { useState } from "react";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  Typography
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import NavbarHeader from "../Navbar-Header/navbarHeader";

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    list: {
      alignItems: "center",
      backgroundColor: "#333",
      height: "100vh",
      width: "auto",
      overflow: "hidden"
    },
    listItem: {
      textAlign: "center",
      alignItems: "center",
      marginTop: "20px",
      marginBottom: "20px"
    },
    listIcon: {
      color: "#ff0202",
      margin: "0",
      padding: "0"
    },
    listText: {
      color: "#eee"
    }
  })
);
const NavbarSidebar = (props: any) => {
  const classes = useStyles();
  return (
    <Drawer variant="permanent">
      <NavbarHeader />
      <Divider />
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon />
          </ListItemIcon>
          <Typography className={classes.listText} variant="h6">
            Home
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <AccountCircleIcon />
          </ListItemIcon>
          <Typography className={classes.listText} variant="h6">
            About
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <FolderSpecialIcon />
          </ListItemIcon>
          <Typography className={classes.listText} variant="h6">
            Works
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <DirectionsRunIcon />
          </ListItemIcon>
          <Typography className={classes.listText} variant="h6">
            Services
          </Typography>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavbarSidebar;
