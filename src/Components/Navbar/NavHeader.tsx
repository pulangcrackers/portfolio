import React from "react";

import Logo from "../../assets/Logo.png";

import { Fab, Avatar, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useAnotherStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      height: "32px",
      width: "32px"
    },
    fabContainer: {
      display: "inline-flex",
      alignItems: "center",
      padding: "5px"
    }
  })
);
const NavHeader = () => {
  const classes = useAnotherStyles();
  return (
    <Fab className="fabContainer" variant="extended">
      <Avatar className={classes.profile} src={Logo} />
      <Typography>Qwerty</Typography>
    </Fab>
  );
};

export default NavHeader;
