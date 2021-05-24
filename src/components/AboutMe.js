import {
  Avatar,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import BuildIcon from "@material-ui/icons/Build";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import CodeIcon from "@material-ui/icons/Code";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    backgroundColor: "#00000090",
    color: "#2e2e2e",
    minHeight: "100vh",
    fontFamily: "Work Sans",
  },
  aboutme: {
    padding: "1rem",
    width: "80%",
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
  },
  descriptionText: {
    fontSize: "1.2rem",
    color: "#3d3d3d",
    padding: "3rem",
  },
  descriptionTitle: {
    fontWeight: "600",
    textAlign: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
  },
  skillArea: {
    marginTop: "1rem",
  },
  skill: {
    padding: 0,
    borderRadius: "20%",
    width: "100px",
    height: "100px",
    backgroundColor: " #ff9100",
    display: "flex",
  },
  skillText: {
    fontFamily: "Work Sans",
    textAlign: "center",
  },
  skillIcon: {
    color: "#fff",
    width: "50%",
    height: "50%",
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center">
      <Grid container className={classes.aboutme}>
        <Grid item xs={12}>
          <h1 className={classes.descriptionTitle}>SOBRE MÍ</h1>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={3}>
              <Grid container justify="flex-end">
                <Avatar src="/assets/profile.jpg" className={classes.avatar} />
              </Grid>
            </Grid>
            <Grid item xs={9} className={classes.descriptionText}>
              <h3>
                ¿Quién soy? <Divider />
              </h3>
              <p>
                Tengo 21 años, soy un desarrollador web con preferencia en el
                Front-end, empecé a programar hace 8 meses aproximadamente, y
                actualmente manejo el stack MERN.
              </p>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <h2 style={{ textAlign: "center" }}>Mi formula para el exito</h2>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" className={classes.skillArea}>
              <Grid item xs={6} lg={3}>
                <Grid container alignItems="center" direction="column">
                  <Grid className={classes.skill}>
                    <Grid container justify="center" alignItems="center">
                      <CodeIcon className={classes.skillIcon} />
                    </Grid>
                  </Grid>
                  <h2>Clean Coder</h2>
                  <p className={classes.skillText}>
                    Fiel a las revisiones de código <br />
                    es escencial dejar todo lo mas facil de entender posible.
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Grid container alignItems="center" direction="column">
                  <Grid className={classes.skill}>
                    <Grid container justify="center" alignItems="center">
                      <VerifiedUserIcon className={classes.skillIcon} />
                    </Grid>
                  </Grid>
                  <h2 style={{ textAlign: "center" }}>Mentalidad Win/Win</h2>
                  <p className={classes.skillText}>
                    Profundicemos lo que sabemos.
                    <br />
                    Si algo cuesta, se aprenderá.
                  </p>
                </Grid>
              </Grid>{" "}
              <Grid item xs={6} lg={3}>
                <Grid container alignItems="center" direction="column">
                  <Grid className={classes.skill}>
                    <Grid container justify="center" alignItems="center">
                      <EmojiObjectsOutlinedIcon className={classes.skillIcon} />
                    </Grid>
                  </Grid>
                  <h2>Intuitivo</h2>
                  <p className={classes.skillText}>
                    La UX como brújula: <br />
                    cuanto mas facil de usar, mejor.
                  </p>
                </Grid>
              </Grid>{" "}
              <Grid item xs={6} lg={3}>
                <Grid container alignItems="center" direction="column">
                  <Grid className={classes.skill}>
                    <Grid container justify="center" alignItems="center">
                      <BuildIcon className={classes.skillIcon} />
                    </Grid>
                  </Grid>
                  <h2>Dedicado</h2>
                  <p className={classes.skillText}>
                    En constante aprendizaje, mi filosofía es: <br />
                    "siempre se puede hacer mejor".
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
