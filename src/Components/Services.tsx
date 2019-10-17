import React from "react";

import { Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2)
    }
  })
);
const Services = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h1">Services</Typography>
      </Paper>
    </div>
  );
};

export default Services;
