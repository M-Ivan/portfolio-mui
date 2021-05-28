import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Collapse,
  Fade,
  Grid,
  Slide,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const HeaderTypography = withStyles((theme) => ({
  root: {
    height: 25,
    fontFamily: "Big Shoulders Display",
  },
}))(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1.5rem",
    color: "#fff",
    padding: "3rem",
    backgroundColor: "#00000020",
    minHeight: "106vh",
  },
  welcomeText: {
    padding: "0 0 10rem 0",
    textAlign: "center",
  },
  headerButton: {
    border: "2px solid #ff9100",
    borderRadius: "0%",
    transition: "0.6s",
    color: "#fff",
    marginTop: "8rem",
    "&:hover": {
      backgroundColor: "#ff9100",
      color: "#fff",
    },
  },
  colorText: {
    color: "#ff9100",
    fontSize: "4rem",
  },
}));

export default function Header(props) {
  const { checked } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.root} id="header">
      <Grid
        container
        className={classes.welcomeText}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Slide direction="left" in={checked} {...{ timeout: 1000 }}>
          <HeaderTypography variant="h3" component="h1">
            <span className={classes.colorText}>Iván Miragaya</span>.
            <br />
            Full-Stack developer.
          </HeaderTypography>
        </Slide>
        <Slide direction="right" in={checked} {...{ timeout: 1000 }}>
          <Box>
            <Button
              size="large"
              href="#portafolio"
              variant="outlined"
              classes={{ root: classes.headerButton }}
            >
              Mis trabajos
              <ArrowForwardIcon />
            </Button>{" "}
          </Box>
        </Slide>
      </Grid>
    </Grid>
  );
}
