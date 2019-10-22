import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import BuildIcon from "@material-ui/icons/Build";

import { Link, Switch, Route, withRouter } from "react-router-dom";

import NavHeader from "../Navbar/NavHeader";
import Home from "../Home";
import About from "../About";
import Services from "../Services";
import Works from "../Works";

import bg2 from "../../assets/bg2.jpg";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      backgroundColor: "rgba(0, 0, 0, 3.5)",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 15,
      color: "#fc0505",
      "&:hover": {
        color: "#fff"
      }
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      color: "#fff",
      backgroundColor: "rgba(0, 0, 0, 3.5)",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      backgroundColor: "rgba(0, 0, 0, 3.5)",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(5),
      backgroundImage: `url(${bg2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "auto"
    },
    navIcon: {
      marginLeft: 30
    },
    navHeaderIcon: {
      color: "#fc0505"
    },
    list: {
      marginTop: 50
    },
    listItem: {
      marginBottom: 50,
      marginLeft: 8
    },
    listText: {
      color: "#fff",
      textDecoration: "none",
      alignItems: "center",
      fontFamily: "Nunito"
    },
    listIcon: {
      color: "#fc0505",
      alignItems: "center",
      "&:hover": {
        color: "#fff"
      }
    },
    divider: {
      backgroundColor: "#fc0505",
      marginBottom: 20
    },
    slide: {
      backgroundColor: "rgba(3, 3, 3, 0.5)",
      height: "100vh",
      width: "auto"
    }
  })
);

const NavSidebar = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const pathname = props.location.pathname;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <NavHeader />
          <IconButton className={classes.navIcon} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className={classes.navHeaderIcon} />
            ) : (
              <ChevronLeftIcon className={classes.navHeaderIcon} />
            )}
          </IconButton>
        </div>
        <List className={classes.list}>
          <ListItem
            className={classes.listItem}
            component={Link}
            to="/portfolio/"
            selected={"/portfolio/" === pathname}
          >
            <ListItemIcon className={classes.listIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Home" />
          </ListItem>
          {/* <Divider className={classes.divider} /> */}
          <ListItem
            className={classes.listItem}
            component={Link}
            to="/portfolio/about"
            selected={"/portfolio/about" === pathname}
          >
            <ListItemIcon className={classes.listIcon}>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="About Me" />
          </ListItem>
          {/* <Divider className={classes.divider} /> */}
          <ListItem
            className={classes.listItem}
            component={Link}
            to="/portfolio/works"
            selected={"/portfolio/works" === pathname}
          >
            <ListItemIcon className={classes.listIcon}>
              <LaptopMacIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Works" />
          </ListItem>
          {/* <Divider className={classes.divider} /> */}
          <ListItem
            className={classes.listItem}
            component={Link}
            to="/portfolio/services"
            selected={"/portfolio/services" === pathname}
          >
            <ListItemIcon className={classes.listIcon}>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Services" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/portfolio/" component={Home} />
          <Route path="/portfolio/about" component={About} />
          <Route path="/portfolio/works" component={Works} />
          <Route path="/portfolio/services" component={Services} />
        </Switch>
        {/* <div className={classes.slide}/> */}
      </main>
    </div>
  );
};

export default withRouter(NavSidebar);
/* <Link className={classes.link} to="/">
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </Link>
        <Link className={classes.link} to="/about">
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </Link>
        <Link className={classes.link} to="/shop">
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Shop</ListItemText>
        </Link> */
/* <Link className={classes.link} to="/about">
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        <Link className={classes.link} to="/shop">
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Shop</ListItemText>
        </Link> */
// <AppBar position="static">
//   <Toolbar>
//     <Typography variant="h6">Hello</Typography>
//     <Typography>
//       <Link to="/" className={classes.link}>
//         <ListItemtext>Home</ListItemtext>
//       </Link>
//       <Link to="/about" className={classes.link}>
//         <ListItemtext>About</ListItemtext>
//       </Link>
//       <Link to="/shop" className={classes.link}>
//         <ListItemtext>Home</ListItemtext>
//       </Link>
//     </Typography>
//   </Toolbar>
/* <Link className={classes.link} to="/">
          <li>Home</li>
        </Link>
        <Link className={classes.link} to="/about">
          <li>About</li>
        </Link>
        <Link className={classes.link} to="/shop">
          <li>Shop</li>
        </Link> */
