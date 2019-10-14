import React, { useState } from "react";
import { Fab, Avatar, Typography, Divider } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Logo from "../../../../src/assets/Logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      marginTop: "15px",
      marginBottom: "20px",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    profile: {
      width: "32px",
      height: "32px"
    },
    fabContainer: {
      background: "red"
    },
    fabHeader: {
      display: "inline-flex",
      alignItems: "center"
    }
  })
);
const NavbarHeader = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>
      <Fab className={classes.fabContainer} variant="extended">
        <div className={classes.fabHeader}>
          <Avatar className={classes.profile} src={Logo} />
          <Typography variant="h5">Qwerty</Typography>
        </div>
      </Fab>
    </div>
  );
};

export default NavbarHeader;
