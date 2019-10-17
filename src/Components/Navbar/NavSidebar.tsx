import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";

import { Link, Switch, Route } from "react-router-dom";

import NavHeader from "../Navbar/NavHeader";
import Home from "../Home";
import About from "../About";
import Services from "../Services";
import Works from "../Works";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      backgroundColor: "#333",
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
      color: "#fc0505"
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
      backgroundColor: "#333",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      backgroundColor: "#333",
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
      padding: theme.spacing(3)
    },
    navIcon: {
      marginLeft: 30
    },
    navHeaderIcon: {
      color: "#fc0505"
    },
    list: {
      marginTop: 20
    },
    listItem: {
      marginBottom: 25
    },
    listText: {
      color: "#fff",
      textDecoration: "none",
      alignItems: "center"
    },
    listIcon: {
      color: "#fc0505"
    },
    divider: {
      backgroundColor: "#fc0505"
    }
  })
);

const NavSidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
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
          <ListItem className={classes.listItem} component={Link} to="/profile/">
            <ListItemIcon className={classes.listIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Home" />
          </ListItem>
          <ListItem className={classes.listItem} component={Link} to="/profile/about">
            <ListItemIcon className={classes.listIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="About Me" />
          </ListItem>
          <ListItem className={classes.listItem} component={Link} to="/profile/works">
            <ListItemIcon className={classes.listIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Works" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            component={Link}
            to="/profile/services"
          >
            <ListItemIcon className={classes.listIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Services" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/profile/" component={Home} />
          <Route path="/profile/about" component={About} />
          <Route path="/profile/works" component={Works} />
          <Route path="/profile/services" component={Services} />
        </Switch>
      </main>
    </div>
  );
};

export default NavSidebar;
{
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
}
{
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
}
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
{
  /* <Link className={classes.link} to="/">
          <li>Home</li>
        </Link>
        <Link className={classes.link} to="/about">
          <li>About</li>
        </Link>
        <Link className={classes.link} to="/shop">
          <li>Shop</li>
        </Link> */
}
