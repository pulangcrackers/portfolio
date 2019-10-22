import React from "react";

import { Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#333",
      padding: theme.spacing(3, 2)
    },
    container: {
      padding: theme.spacing(3, 2),
      marginBottom: 20,
      display: "block",
      justifyContent: "space-around",
      alignItems: "center",
      msrginRight: 20,
      "&:last-child": {
        marginBottom: 0,
        marginRight: 0
      }
    }
  })
);
const Services = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Paper className={classes.container}>
          <Typography variant="h1">Services</Typography>
        </Paper>
        <Paper className={classes.container}>
          <Typography variant="h1">Services</Typography>
        </Paper>
        <Paper className={classes.container}>
          <Typography variant="h1">Services</Typography>
        </Paper>
      </Paper>
    </div>
  );
};

export default Services;
