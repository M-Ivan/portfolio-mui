import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Slide,
  Toolbar,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
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
    zIndex: 10,
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
  },
  // Fix: ZINDEX?
  appbarActive: {
    flexGrow: 1,
    margin: 0,
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderBottom: "3px solid #d300c1",
    backgroundColor: "#19171d",
    height: "60px",
    zIndex: 10,
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
  },
  button: {
    color: "#fff",
    position: "relative",
    transition: "0.5s",
    "&: hover": {
      color: "#d300c1",
    },
  },
  active: {
    color: "#ff9100",
  },

  icon: {
    marginRight: "5px",
    color: "#8600d3",
  },
  menu: {
    color: "#ff9100",
    width: "2rem",
    height: "2rem",
  },
}));

export default function NavBar(props) {
  const {
    gotoHeader,
    gotoAbout,
    gotoFolio,
    gotoContact,
    handleCallback,
    about,
  } = props;

  const classes = useStyles();

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= about.current.offsetTop * 0.95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  console.log("window.scrollY", window.scrollY);
  console.log("navbar", navbar);
  window.addEventListener("scroll", changeBackground);

  return (
    <Grid container className={classes.root} justify="center">
      {navbar ? (
        <Slide direciton="down" {...{ timeout: 700 }} in={navbar}>
          <AppBar className={classes.appbarActive} elevation={0}>
            <Toolbar>
              <Hidden mdUp>
                <IconButton
                  onClick={() => handleCallback()}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <SortIcon className={classes.menu} />
                </IconButton>
              </Hidden>
              <Hidden smDown>
                <Button
                  href="#header"
                  onClick={gotoHeader}
                  className={classes.button}
                >
                  {
                    // <HomeOutlinedIcon className={classes.icon} />
                  }
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
              </Hidden>
            </Toolbar>
          </AppBar>
        </Slide>
      ) : (
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                onClick={() => handleCallback()}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <SortIcon className={classes.menu} />
              </IconButton>{" "}
            </Hidden>
            <Hidden smDown>
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
              </Button>{" "}
            </Hidden>
          </Toolbar>
        </AppBar>
      )}{" "}
    </Grid>
  );
}
