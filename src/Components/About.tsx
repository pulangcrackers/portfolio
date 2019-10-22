// import React, { useState } from "react";

// import { Paper, Typography, Tabs, Tab, Box } from "@material-ui/core";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: any;
//   value: any;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       <Box>{children}</Box>
//     </Typography>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`
//   };
// }

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       padding: theme.spacing(3, 2)
//     },
//     tabs: {
//       margin: 0
//     }
//   })
// );

// const About = () => {
//   const classes = useStyles();
//   const [value, setValue] = useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <div>
//       <div className={classes.root}>
//         <Tabs
//           orientation="vertical"
//           variant="scrollable"
//           value={value}
//           onChange={handleChange}
//           aria-label="Vertical tabs example"
//           className={classes.tabs}
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//         <TabPanel value={value} index={0}>
//           Item One
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           Item Three
//         </TabPanel>
//         <Typography variant="h1">About</Typography>
//       </Paper>
//     </div>
//   );
// };

// export default About;

import React from "react";
import {
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  className: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, className, ...other } = props;

  return (
    <Paper>
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        <Box>{children}</Box>
      </Typography>
    </Paper>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: 0,
      margin: 0
    },
    root: {
      flexGrow: 1,
      margin: 0,
      padding: 0,
      display: "flex",
      // height: 290,
      position: "relative",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      alignItems: "center",
      color: "#fff"
    },
    tabsContainer: {
      borderRight: `1px solid ${theme.palette.divider}`,
      // padding: "32px"
      padding: 0,
      margin: 0
    },
    tabsTitleHeader: {
      padding: 20,
      fontSize: 50,
      textTransform: "uppercase"
    },
    tabsTitle: {
      padding: 20,
      fontSize: 30
    },
    tabsContentContainer: {
      padding: "32px",
      flex: "auto"
    },
    noPadding: {
      padding: "0px"
    },
    tabPanelContent: {
      padding: "16px",
      backgroundColor: "#2A2A2A"
    },
    tabText: {
      color: "#fff",
      textTransform: "initial",
      fontSize: 20,
      textAlign: "right",
      alignItems: "right"
    }
  })
);

const About = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.tabsContainer}>
          <Typography variant="h5" className={classes.tabsTitleHeader}>
            About
          </Typography>
          <Tabs
            orientation="vertical"
            variant="fullWidth"
            color="primary"
            indicatorColor="secondary"
            scrollButtons="off"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            // className={classes.tabs}
            // classes={{
            //   indicator: "custom-indicator"
            // }}
          >
            <Tab
              className={classes.tabText}
              label="Myself"
              {...a11yProps(0)}
              // classes={{
              //   root: "custom-tab",
              //   wrapper: "vertical-tab-label-custom-wrapper",
              //   selected: "vertical-tab-label-custom-selected"
              // }}
            />
            <Tab
              className={classes.tabText}
              label="Contact"
              {...a11yProps(1)}
              // classes={{
              //   root: "custom-tab",
              //   wrapper: "vertical-tab-label-custom-wrapper",
              //   selected: "vertical-tab-label-custom-selected"
              // }}
            />
            <Tab
              className={classes.tabText}
              label="Email"
              {...a11yProps(2)}
              // classes={{
              //   root: "custom-tab",
              //   wrapper: "vertical-tab-label-custom-wrapper",
              //   selected: "vertical-tab-label-custom-selected"
              // }}
            />
            <Tab
              className={classes.tabText}
              label="Social Media"
              {...a11yProps(3)}
              // classes={{
              //   root: "custom-tab",
              //   wrapper: "vertical-tab-label-custom-wrapper",
              //   selected: "vertical-tab-label-custom-selected"
              // }}
            />
          </Tabs>
        </div>

        <div className={classes.tabsContentContainer}>
          <TabPanel value={value} index={0} className={classes.noPadding}>
            <Typography variant="h5" className={classes.tabsTitle}>
              Facebook
            </Typography>
            <div className={classes.tabPanelContent}>Facebook</div>
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.noPadding}>
            <Typography variant="h5" className={classes.tabsTitle}>
              Twitter
            </Typography>
            <div className={classes.tabPanelContent}>Twitter</div>
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.noPadding}>
            <Typography variant="h5" className={classes.tabsTitle}>
              Github
            </Typography>
            <div className={classes.tabPanelContent}>Github</div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default About;
