import React from "react";
import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import portLogo from "../../assets/Logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: "#000"
    }
  })
);
const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <MenuIcon></MenuIcon>
          <Avatar />
          <Typography variant="h6">My Portfolio</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
