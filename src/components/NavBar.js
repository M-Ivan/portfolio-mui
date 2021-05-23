import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { fontFamily: "Work Sans" },
  appbar: {
    background: "none",
  },
  button: {
    color: "#fff",
    fontFamily: "Work Sans",
  },
  icon: {
    marginRight: "5px",
    color: "#ff9100",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Grid container justify="center">
            <Button href="#header" className={classes.button}>
              <HomeOutlinedIcon className={classes.icon} /> Inicio
            </Button>{" "}
            <Button href="#aboutme" className={classes.button}>
              <FingerprintIcon className={classes.icon} /> Sobre mí
            </Button>{" "}
            <Button href="#portafolio" className={classes.button}>
              <WorkOutlineOutlinedIcon className={classes.icon} /> Portafolio
            </Button>{" "}
            <Button href="#contacto" className={classes.button}>
              <EmailOutlinedIcon className={classes.icon} /> Contacto
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
