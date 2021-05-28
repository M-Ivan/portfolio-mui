import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  SwipeableDrawer,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import { useWindowSize } from "react-use";
import SortIcon from "@material-ui/icons/Sort";
import { HomeOutlined } from "@material-ui/icons";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    zIndex: 10,
  },
  appbar: {
    margin: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "100vh",
    bottom: 0,
    borderBottom: "3px solid #d300c1",
    backgroundColor: "#19171d",
    height: "60px",
  },

  appbarActive: {
    margin: 0,
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderBottom: "3px solid #d300c1",
    backgroundColor: "#19171d",
    height: "60px",
  },
  button: {
    color: "#fff",
    position: "relative",
    transition: "0.5s",
    "&: hover": {
      color: "#d300c1",
    },
  },
  icon: {
    marginRight: "5px",
    color: "8600d3",
  },
  drawer: {
    display: "flex",
    alignItems: "center",
    width: "60%",
    backgroundColor: "#19171d",
    borderRight: "3px solid #d300c1",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      flexShrink: 1,
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  bigNav: {
    backgroundColor: "#19171d",
    border: "3px solid #d300c1",
    color: "#fff",
    position: "fixed",
    height: "100vh",
  },
}));

export default function NavBar(props) {
  const { gotoHeader, gotoAbout, gotoFolio, gotoContact, handleCallback } =
    props;

  const classes = useStyles();

  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const { x: width } = useWindowSize();
  const theme = useTheme();

  const changeBackground = () => {
    if (window.scrollY >= 850) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  console.log("window.scrollY", window.scrollY);
  window.addEventListener("scroll", changeBackground);

  return (
    <Grid container className={classes.root} justify="center">
      {navbar ? (
        <Slide direciton="down" {...{ timeout: 700 }} in={navbar}>
          <AppBar className={classes.appbarActive} elevation={0}>
            <Toolbar>
              <IconButton
                onClick={() => handleCallback()}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <SortIcon />
              </IconButton>
              <Button
                href="#header"
                onClick={gotoHeader}
                className={classes.button}
              >
                {
                  // <HomeOutlinedIcon className={classes.icon} />
                }{" "}
                Inicio
              </Button>{" "}
              <Button
                href="#aboutme"
                onClick={gotoAbout}
                className={classes.button}
              >
                {
                  // <FingerprintIcon className={classes.icon} />
                }
                Sobre mí
              </Button>{" "}
              <Button
                href="#portafolio"
                onClick={gotoFolio}
                className={classes.button}
              >
                {
                  //  <WorkOutlineOutlinedIcon className={classes.icon} />
                }{" "}
                Portafolio
              </Button>{" "}
              <Button
                href="#contacto"
                onClick={gotoContact}
                className={classes.button}
              >
                {
                  //<EmailOutlinedIcon className={classes.icon} />
                }{" "}
                Contacto
              </Button>
            </Toolbar>
          </AppBar>
        </Slide>
      ) : (
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar>
            <IconButton
              onClick={() => handleCallback()}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <SortIcon />
            </IconButton>
            <Button
              href="#header"
              onClick={gotoHeader}
              className={classes.button}
            >
              {
                // <HomeOutlinedIcon className={classes.icon} />
              }{" "}
              Inicio
            </Button>{" "}
            <Button
              href="#aboutme"
              onClick={gotoAbout}
              className={classes.button}
            >
              {
                // <FingerprintIcon className={classes.icon} />
              }{" "}
              Sobre mí
            </Button>{" "}
            <Button
              href="#portafolio"
              onClick={gotoFolio}
              className={classes.button}
            >
              {
                //  <WorkOutlineOutlinedIcon className={classes.icon} />
              }{" "}
              Portafolio
            </Button>{" "}
            <Button
              href="#contacto"
              onClick={gotoContact}
              className={classes.button}
            >
              {
                //<EmailOutlinedIcon className={classes.icon} />
              }{" "}
              Contacto
            </Button>
          </Toolbar>
        </AppBar>
      )}{" "}
    </Grid>
  );
}
