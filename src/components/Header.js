import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Slide } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    padding: "0rem",
    backgroundColor: "#19171d",
    minHeight: "106vh",
  },

  welcomeText: {
    justifyContent: "center",
    alignSelf: "center",
    transform: "skewY(-3deg)",
  },
  button: {
    border: "2px solid #03c2c9",
    background: "transparent",
    width: "500px",
    borderRadius: "0%",
    transform: "skewY(3deg)",
    marginTop: "5vh",

    [theme.breakpoints.down("xs")]: {
      width: "70%",
      fontSize: "10pt",
    },

    transition: "0.5s",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#00000000",
      color: "#fff",
      border: "2px solid #d300c1",
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
}));

export default function Header(props) {
  const { animation, headerSection, gotoAbout } = props;
  const classes = useStyles();
  const [rotate, setRotate] = useState(false);

  return (
    <Grid container className={classes.root} ref={headerSection}>
      <Grid container className={classes.welcomeText}>
        <Grid item xs={12}>
          <Slide direction="left" in={animation} {...{ timeout: 2000 }}>
            <Box>
              <h1 className="header">Iván Miragaya</h1>
            </Box>
          </Slide>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ transform: "skewY(4.5deg)", marginLeft: "5%" }}
        >
          <Slide direction="right" in={animation} {...{ timeout: 2000 }}>
            <Box>
              <h2 className="sub-header">Web Developer</h2>
            </Box>
          </Slide>{" "}
        </Grid>
        {
          // <Slide direction="left" in={animation} {...{ timeout: 2000 }}>
          //   <Box>
        }
        <Button
          onMouseEnter={() => setRotate(true)}
          onMouseLeave={() => setRotate(false)}
          size="large"
          href="#about"
          variant="outlined"
          onClick={gotoAbout}
          classes={{ root: classes.button }}
        >
          Mis trabajos
          <ArrowForwardIcon
            className={rotate ? classes.iconAnim : classes.icon}
          />
        </Button>{" "}
        {
          // </Box>
          // </Slide>
        }
      </Grid>
    </Grid>
  );
}
