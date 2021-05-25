import {
  Button,
  Grid,
  makeStyles,
  IconButton,
  withStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const CustomTypography = withStyles((theme) => ({
  root: {
    height: 25,
    fontFamily: "Raleway",
  },
}))(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    backgroundColor: "#00000090",
    color: "#fff",
    minHeight: "100vh",
  },
  contact: {
    padding: "1rem",
    width: "80%",
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    padding: "2rem 0 1rem 0",
    textAlign: "center",
    textTransform: "uppercase",
    display: "inline-block",
    textDecoration: "none",
    backgroundImage: "linear-gradient(to right, #ff9100, #ff9100)",
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "35% 3px",
    transition: "background-size .5s ease",
    "&:hover": {
      backgroundSize: "100% 3px",
    },
  },
  contactArea: {
    textAlign: "center",
    backgroundColor: "#000",
  },
  button: {
    width: "100%",
    border: "2px solid #ff9100",
    borderRadius: "0%",
    color: "#fff",
    padding: "0.4rem 2rem 0.4rem 2rem ",
    "&:hover": {
      backgroundColor: "#ff9100",
      color: "#3f3f3f",
    },
  },
  footer: {
    display: "flex",
    height: "300px",
    backgroundColor: "#19171d",
  },
  mediaButton: {
    color: "#fff",
    "&:hover": {
      color: "#d300c1",
    },
  },
  icon: {
    width: "50px",
    height: "50px",
  },
  watermark: {
    display: "flex",
    justifyContent: "center",
    color: "#acacac",
    marginBottom: "4rem",
    fontSize: "1.2rem",
    textTransform: "uppercase",
  },
  watermarkColor: {
    color: "#d300c1",
  },
}));
export default function Contact() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center">
      <Grid container className={classes.contact}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <h1 className={classes.title}>Contacto</h1>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="column" alignItems="center">
              <h1>email</h1>
              <p>MiragayaIvan@hotmail.com</p>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button classes={{ root: classes.button }}>
              Creemos algo increible
            </Button>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} className={classes.footer}>
            <Grid container justify="center" alignItems="flex-end">
              <IconButton
                href="https://www.linkedin.com/in/miragaya-ivan/"
                className={classes.mediaButton}
              >
                {" "}
                <LinkedInIcon className={classes.icon} />
              </IconButton>{" "}
              <IconButton
                href="https://github.com/m-ivan"
                className={classes.mediaButton}
              >
                <GitHubIcon className={classes.icon} />
              </IconButton>
              <Grid container justify="center">
                <CustomTypography component="h4" className={classes.watermark}>
                  Iván Miragaya
                  <span className={classes.watermarkColor}> ©2021</span>
                </CustomTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
