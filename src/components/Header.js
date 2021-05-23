import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.5rem",
    color: "#fff",
    padding: "3rem",
    backgroundColor: "#00000090",
  },
  headerButton: {
    border: "2px solid #ff9100",
    borderRadius: "0%",
    color: "#fff",
    marginTop: "1rem",
    fontFamily: "Work Sans",
  },
  colorText: {
    color: "#ff9100",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.title}
    >
      {" "}
      <Typography variant="h3" component="h1">
        Hola, soy <span className={classes.colorText}>Iván Miragaya</span>.{" "}
        <br />
        Soy Full-Stack developer.
        <br />
        <Grid container justify="center">
          <Button
            size="large"
            href="#portafolio"
            variant="outlined"
            classes={{ root: classes.headerButton }}
          >
            Mis trabajos
            <ArrowForwardIcon />
          </Button>
        </Grid>{" "}
      </Typography>
    </Grid>
  );
}
