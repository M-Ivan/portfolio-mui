import {
  Button,
  Grid,
  makeStyles,
  IconButton,
  withStyles,
  Typography,
  Grow,
  Slide,
  Collapse,
  Box,
} from "@material-ui/core";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import { LaunchOutlined } from "@material-ui/icons";
import { CustomTypography } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    color: "#fff",
    minHeight: "100vh",
  },
  contact: {
    height: "60vh",
    backgroundColor: "#1a1a1a",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    padding: "0 2rem",
  },
  title: {
    fontWeight: "600",
    zIndex: 1,
    padding: "1rem",
    textAlign: "center",
    textTransform: "uppercase",
    display: "inline-block",
    textDecoration: "none",
    backgroundImage: "radial-gradient(circle, #ff9100, #d31ec0)",
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "35% 3px",
    transition: "background-size .5s ease",
    "&:hover": {
      backgroundSize: "80% 3px",
    },
  },
  subtitle: {
    color: "#00d4db",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "12pt",
    },
  },

  button: {
    width: "50%",
    border: "2px solid #03c2c9",
    borderRadius: "0%",
    color: "#fff",
    padding: "1rem",
    fontSize: "1rem",
    transition: "0.6s",
    "&:hover": {
      backgroundColor: "#03c2c9",
      color: "#1b1b1b",
      fontWeight: 600,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "10pt",
    },
  },
  contactLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.5rem",
    transition: "0.6s",
    "&:hover": {
      color: "#ff9100",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10pt",
    },
  },

  // Diagonal Box (big text)
  detail1: {
    backgroundColor: "#d31ec0", //"#3f3f3f",
    height: "80px",
    transform: "skewY(-5deg)",
    textAlign: "center",
    marginBottom: "3rem",
  },

  // Diagonal Box (small text)
  detail2: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#d31ec0", //"#3f3f3f",
    transform: "skewY(5deg)",
    height: "40px",
    textAlign: "center",
    width: "100%",
    marginTop: "3rem",
  },
  detailText: {
    textShadow: "0 0 8px #000",
  },
  detail3: {
    position: "absolute",
    backgroundColor: "#3f3f3f", //"#3f3f3f",
    height: "40px",
    transform: "skewY(5deg)",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  detail4: {
    position: "absolute",
    backgroundColor: "#3f3f3f", //"#3f3f3f",
    height: "40px",
    transform: "skewY(-5deg)",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  detailText1: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  typeIcon: {
    color: "#808080",
  },
  footer: {
    height: "15vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#19171d",
  },
  mediaButton: {
    width: "55px",
    height: "55px",
    backgroundColor: "#272727",
    color: "#fff",
    margin: "0 1vw 0 1vw ",
    borderRadius: "0%",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#03c2c9",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "40px",
    },
  },
  icon: {
    width: "30px",
    height: "30px",
    transition: "1s",
  },
  watermark: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: "#acacac",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: { fontSize: "8pt" },
  },
  watermarkColor: {
    color: "#d300c1",
  },
  card: {
    borderRadius: "0%",
    height: "12vh",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    backgroundColor: "#1e242c",
    color: "#fff",

    [theme.breakpoints.down("sm")]: { width: "100%" },
  },
  available: {
    fontSize: "15pt",
    textTransform: "uppercase",
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")]: { fontSize: "10pt" },
  },
  cardText: {
    [theme.breakpoints.down("sm")]: { fontSize: "11pt" },
  },
}));
export default function Contact(props) {
  const { animation, contactSection } = props;
  const classes = useStyles();

  const opciones = [
    // 0
    "Disponible",
    // 1
    "Solo freelance / Part-Time",
    // 2
    "No disponible",
  ];

  const disponibilidad = opciones[0];

  return (
    <Grid
      container
      alignItems="flex-end"
      className={classes.root}
      ref={contactSection}
    >
      <Grow in={animation} {...(animation ? { timeout: 1000 } : {})}>
        <Grid container justify="center" alignItems="center">
          <h1 className={classes.title}>Contacto</h1>
        </Grid>
      </Grow>
      <Grid container className={classes.contact}>
        <Grow in={animation} {...(animation ? { timeout: 1000 } : {})}>
          <Grid container elevation={0} className={classes.card}>
            <Grid item xs={12}>
              <CustomTypography variant="h6" className={classes.cardText}>
                {" "}
                En este momento me encuentro:
              </CustomTypography>
            </Grid>
            <Grid item xs={12}>
              <CustomTypography variant="subtitle1">
                <strong
                  className={classes.available}
                  style={
                    disponibilidad === opciones[0]
                      ? { color: "#00b62e" }
                      : disponibilidad === opciones[1]
                      ? { color: "#ffbb00" }
                      : { color: "#ff0000" }
                  }
                >
                  {disponibilidad}
                </strong>{" "}
              </CustomTypography>{" "}
            </Grid>
          </Grid>
        </Grow>
        <Slide
          direction="left"
          in={animation}
          {...(animation ? { timeout: 1000 } : {})}
        >
          <Grid item xs={12}>
            <CustomTypography variant="h4" className={classes.subtitle}>
              Tenés una consulta o querés que trabajemos juntos?
            </CustomTypography>
          </Grid>
        </Slide>

        <Grid item xs={12} lg={3}>
          <Collapse in={animation} {...(animation ? { timeout: 1000 } : {})}>
            <EmailIcon className={classes.typeIcon} />{" "}
            <CustomTypography variant="subtitle1" component="h2">
              <a
                id="mail"
                className={classes.contactLink}
                href="mailto:MiragayaIvan@hotmail.com"
              >
                <strong>MiragayaIvan@hotmail.com</strong>
              </a>
            </CustomTypography>
          </Collapse>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Collapse in={animation} {...(animation ? { timeout: 1000 } : {})}>
            <CallIcon className={classes.typeIcon} />
            <Typography variant="subtitle1" component="h3">
              <a className={classes.contactLink} href="tel:+541127677832">
                <strong>11-2767-7832</strong>{" "}
              </a>{" "}
            </Typography>{" "}
          </Collapse>
        </Grid>
        <Slide
          direction="right"
          in={animation}
          {...(animation ? { timeout: 1000 } : {})}
        >
          <Grid item xs={12}>
            <Button
              href="mailto:MiragayaIvan@hotmail.com"
              classes={{ root: classes.button }}
            >
              Creemos algo increible{" "}
              <LaunchOutlined style={{ marginLeft: "1vw" }} />
            </Button>
          </Grid>
        </Slide>
      </Grid>
      <Grid container className={classes.footer}>
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
        </IconButton>{" "}
        <Grid item xs={12}>
          <Box>
            <CustomTypography component="h4" className={classes.watermark}>
              Iván Miragaya
              <span className={classes.watermarkColor}>©2021</span>
            </CustomTypography>{" "}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
