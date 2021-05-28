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

const CustomTypography = withStyles((theme) => ({
  root: {
    height: 25,
    fontFamily: "Raleway",
  },
}))(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    color: "#fff",
    minHeight: "100vh",
  },
  contact: {
    height: "85%",
    backgroundColor: "#1a1a1a",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    zIndex: 10,
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

  button: {
    width: "90%",
    border: "2px solid #d31ec0",
    borderRadius: "0%",
    color: "#fff",
    padding: "1rem",
    fontSize: "1rem",
    marginTop: "3rem",
    "&:hover": {
      backgroundColor: "#d31ec0",
      color: "#fff",
    },
  },
  contactLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.5rem",
    "&:hover": {
      color: "#ff9100",
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
    backgroundColor: "#3f3f3f", //"#3f3f3f",
    height: "40px",
    transform: "skewY(5deg)",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  detail4: {
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
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#19171d",
  },
  mediaButton: {
    width: "60px",
    height: "60px",
    color: "#fff",
    "&:hover": {
      color: "#d300c1",
    },
  },
  icon: {
    width: "40px",
    height: "40px",
  },
  watermark: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: "#acacac",
    fontSize: "1.2rem",
    textTransform: "uppercase",
  },
  watermarkColor: {
    color: "#d300c1",
  },
}));
export default function Contact(props) {
  const { checked, contactSection } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.root} ref={contactSection}>
      <Grid container className={classes.contact}>
        <Grid item xs={6} className={classes.detail3}></Grid>
        <Grid item xs={6} className={classes.detail4}></Grid>
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <h1 className={classes.title}>Contacto</h1>
            </Grid>{" "}
          </Grid>
        </Grow>
        <Grid item xs={12} className={classes.detail1}>
          {" "}
          <Grid container>
            <Slide
              direction="left"
              in={checked}
              {...(checked ? { timeout: 800 } : {})}
            >
              <Grid item xs={12} className={classes.detailText}>
                <CustomTypography variant="h2" component="h2">
                  {" "}
                  <strong> Contactame!</strong>
                </CustomTypography>
              </Grid>
            </Slide>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <EmailIcon className={classes.typeIcon} />{" "}
            <CustomTypography variant="subtitle1" component="h3">
              <a
                className={classes.contactLink}
                href="mailto:MiragayaIvan@hotmail.com"
              >
                <strong>MiragayaIvan@hotmail.com</strong>
              </a>
            </CustomTypography>
          </Collapse>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <CallIcon className={classes.typeIcon} />
            <Typography variant="subtitle1" component="h3">
              <a className={classes.contactLink} href="tel:+541127677832">
                <strong>11-2767-7832</strong>{" "}
              </a>{" "}
            </Typography>{" "}
          </Collapse>
        </Grid>
        <Grid item xs={12} className={classes.detail2}>
          {" "}
          <Grid container>
            <Slide
              direction="right"
              in={checked}
              {...(checked ? { timeout: 800 } : {})}
            >
              <Grid item xs={12}>
                <CustomTypography
                  variant="body1"
                  component="h2"
                  className={classes.detailText1}
                >
                  {" "}
                  y hagamos algo juntos
                </CustomTypography>
              </Grid>
            </Slide>
          </Grid>
        </Grid>{" "}
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <Grid item xs={12} md={6}>
            <Button
              href="mailto:MiragayaIvan@hotmail.com"
              classes={{ root: classes.button }}
            >
              Creemos algo increible{" "}
              <LaunchOutlined style={{ marginLeft: "1rem" }} />
            </Button>
          </Grid>
        </Grow>
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
      </Grid>{" "}
    </Grid>
  );
}
