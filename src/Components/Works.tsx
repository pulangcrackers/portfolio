import React from "react";

import {
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
  Toolbar
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2)
    },
    toolbar: {
      marginTop: 20,
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    },
    card: {
      minWidth: 100,
      marginRight: 15,
      "&:last-child": {
        marginRight: 0
      }
    },
    cardContent: {
      marginRight: 20
    }
  })
);
const Works = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h1">Works</Typography>
        ndhvfcnvcxvnvbvbcn
        <Toolbar className={classes.toolbar}>
          <Card className={classes.card}>
            <CardContent>
              <Typography>Hello World</Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography>Hello World</Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography>Hello World</Typography>
            </CardContent>
          </Card>
        </Toolbar>
      </Paper>
    </div>
  );
};

export default Works;
