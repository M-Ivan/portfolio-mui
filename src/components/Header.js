import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Collapse,
  Grid,
  Slide,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const HeaderTypography = withStyles((theme) => ({
  root: {
    height: 25,
    fontFamily: "Raleway",
  },
}))(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    padding: "3rem",
    backgroundColor: "#00000020",
    minHeight: "106vh",
  },
  welcomeText: {
    padding: "0 0 20rem 0",
    textAlign: "center",
    fontSize: "1rem",
  },
  headerButton: {
    border: "2px solid #fff",
    borderRadius: "0%",
    marginTop: "1rem",
    transition: "0.5s",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ff9100",
      color: "#fff",
      border: "2px solid #ff9100",
    },
  },
  iconAnim: {
    transition: "0.5s",
    width: "30px",
    height: "30px",
    marginLeft: "0.5rem",
    transform: "rotate(90deg)",
  },
  icon: {
    width: "30px",
    height: "30px",
    marginLeft: "0.5rem",
  },
  colorText: {
    color: "#ff9100",
    fontSize: "3rem",
    fontWeight: 600,
  },
}));

export default function Header(props) {
  const { checked, headerSection, gotoAbout } = props;
  const classes = useStyles();
  const [rotate, setRotate] = useState(false);

  return (
    <Grid container className={classes.root} ref={headerSection}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.welcomeText}
      >
        <HeaderTypography variant="p" component="h1">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Slide direction="down" in={checked} {...{ timeout: 1000 }}>
              <Box>
                <span className={classes.colorText}>Iván Miragaya.</span>{" "}
              </Box>
            </Slide>
            <Slide direction="right" in={checked} {...{ timeout: 1600 }}>
              <Box>Full-Stack developer. </Box>
            </Slide>

            <Slide direction="left" in={checked} {...{ timeout: 2000 }}>
              <Box>
                <Button
                  onMouseEnter={() => setRotate(true)}
                  onMouseLeave={() => setRotate(false)}
                  size="large"
                  href="#about"
                  variant="outlined"
                  onClick={gotoAbout}
                  classes={{ root: classes.headerButton }}
                >
                  Mis trabajos
                  <ArrowForwardIcon
                    className={rotate ? classes.iconAnim : classes.icon}
                  />
                </Button>{" "}
              </Box>
            </Slide>
          </Grid>
        </HeaderTypography>
      </Grid>
    </Grid>
  );
}
