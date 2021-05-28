import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Button, Grid, Slide, Toolbar } from "@material-ui/core";

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
}));

export default function NavBar() {
  const classes = useStyles();
  const [navbar, setNavbar] = useState(false);

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
              <Button href="#header" className={classes.button}>
                {
                  // <HomeOutlinedIcon className={classes.icon} />
                }{" "}
                Inicio
              </Button>{" "}
              <Button href="#aboutme" className={classes.button}>
                {
                  // <FingerprintIcon className={classes.icon} />
                }{" "}
                Sobre mí
              </Button>{" "}
              <Button href="#portafolio" className={classes.button}>
                {
                  //  <WorkOutlineOutlinedIcon className={classes.icon} />
                }{" "}
                Portafolio
              </Button>{" "}
              <Button href="#contacto" className={classes.button}>
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
            <Button href="#header" className={classes.button}>
              {
                // <HomeOutlinedIcon className={classes.icon} />
              }{" "}
              Inicio
            </Button>{" "}
            <Button href="#aboutme" className={classes.button}>
              {
                // <FingerprintIcon className={classes.icon} />
              }{" "}
              Sobre mí
            </Button>{" "}
            <Button href="#portafolio" className={classes.button}>
              {
                //  <WorkOutlineOutlinedIcon className={classes.icon} />
              }{" "}
              Portafolio
            </Button>{" "}
            <Button href="#contacto" className={classes.button}>
              {
                //<EmailOutlinedIcon className={classes.icon} />
              }{" "}
              Contacto
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </Grid>
  );
}
