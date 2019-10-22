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
//       <Paper className={classes.root}>
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
import { Paper, Typography, Tabs, Tab, Box } from "@material-ui/core";
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
    root: {
      flexGrow: 1,
      padding: theme.spacing(3, 2),
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      display: "flex",
      // height: 290,
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 50,
      alignItems: "center"
    },
    tabsContainer: {
      borderRight: `1px solid ${theme.palette.divider}`,
      padding: "32px"
    },
    tabsTitle: {
      padding: "16px"
    },
    tabsContentContainer: {
      padding: "32px",
      flex: "auto"
    },
    noPadding: {
      padding: "0px"
    },
    tabPanelContent: {
      padding: "16px"
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
          <Typography variant="h5" className={classes.tabsTitle}>
            About
          </Typography>
          <Tabs
            orientation="vertical"
            variant="fullWidth"
            // indicatorColor="primary"
            textColor="primary"
            scrollButtons="off"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            classes={{
              indicator: "custom-indicator"
            }}
          >
            <Tab
              label="Facebook"
              {...a11yProps(0)}
              classes={{
                root: "custom-tab",
                wrapper: "vertical-tab-label-custom-wrapper",
                selected: "vertical-tab-label-custom-selected"
              }}
            />
            <Tab
              label="Twitter"
              {...a11yProps(1)}
              classes={{
                root: "custom-tab",
                wrapper: "vertical-tab-label-custom-wrapper",
                selected: "vertical-tab-label-custom-selected"
              }}
            />
            <Tab
              label="Github"
              {...a11yProps(2)}
              classes={{
                root: "custom-tab",
                wrapper: "vertical-tab-label-custom-wrapper",
                selected: "vertical-tab-label-custom-selected"
              }}
            />
            <Tab
              label="Instagram"
              {...a11yProps(3)}
              classes={{
                root: "custom-tab",
                wrapper: "vertical-tab-label-custom-wrapper",
                selected: "vertical-tab-label-custom-selected"
              }}
            />
            <Tab
              label="Gmail"
              {...a11yProps(4)}
              classes={{
                root: "custom-tab",
                wrapper: "vertical-tab-label-custom-wrapper",
                selected: "vertical-tab-label-custom-selected"
              }}
            />
            <Tab
              label="LinkedIn"
              {...a11yProps(5)}
              classes={{
                root: "custom-tab",
                wrapper: "vertical-tab-label-custom-wrapper",
                selected: "vertical-tab-label-custom-selected"
              }}
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
