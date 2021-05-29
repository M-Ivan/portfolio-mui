import { Avatar, Box, Grid, Hidden, Slide } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import BuildIcon from "@material-ui/icons/Build";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import CodeIcon from "@material-ui/icons/Code";
import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Hexagon from "react-hexagon";

const SkillsLinearProgress = withStyles((theme) => ({
  root: {
    height: 25,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 400 : 700],
  },
  bar: {
    backgroundImage:
      "linear-gradient(to right, #a000c0, #a000c0, #a000c0, #ff9100)",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    backgroundColor: "#f3f3f3",
    color: "#2e2e2e",
    minHeight: "100vh",
  },
  aboutme: {
    padding: "1rem 20% 1rem 20%",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      padding: "1rem 10% 1rem 10%",
    },
  },
  descriptionText: {
    fontSize: "1.2rem",
    color: "#3d3d3d",
    padding: "0 0rem 2rem 0",
    textAlign: "center",
  },
  title: {
    fontWeight: "600",
    padding: "1rem 0 1rem 0",
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
      backgroundSize: "100% 3px",
    },
  },
  subtitleColor: {
    color: "#d300c1",
  },

  avatar: {
    width: "100%",
    height: "100%",
    maxWidth: "270px",
    maxHeight: "270px",
    marginTop: "2rem",
  },
  skillArea: {
    marginTop: "3rem",
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
    textAlign: "center",
  },
  skillIcon: {
    color: "#fff",
    width: "50%",
    height: "50%",
  },
  progressBox: {
    display: "flex",
    width: "100%",
    color: "#fff",
    fontWeight: "bold",
    height: 26,
    borderRadius: "0.15rem",
    backgroundColor: "#d300c1",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function ProgressBar(props) {
  const { progress } = props;
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <SkillsLinearProgress variant="determinate" value={progress} />
      </Box>
      <Box minWidth={35}>
        <h3 style={{ fontFamily: "Work Sans" }}>{progress}%</h3>
      </Box>
    </Box>
  );
}

export default function AboutMe(props) {
  const { checked, aboutSection } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      ref={aboutSection}
    >
      <Grid container className={classes.aboutme}>
        <Grid item xs={12}>
          <Slide
            direction="left"
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Grid container justify="center" alignItems="center">
              <h1 className={classes.title}>Sobre mí</h1>
            </Grid>
          </Slide>
          <Slide
            direction="right"
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Grid item xs={12}>
              <h2 style={{ textAlign: "center" }}>
                Mi{" "}
                <span className={classes.subtitleColor}>
                  fórmula
                  <DoneAllIcon />
                </span>{" "}
                para el éxito
              </h2>
            </Grid>
          </Slide>
          <Grid item xs={12}>
            <Grid container justify="center" className={classes.skillArea}>
              <Grid item xs={6} lg={3}>
                <Slide
                  direction="right"
                  in={checked}
                  {...(checked ? { timeout: 1000 } : {})}
                >
                  <Grid container alignItems="center" direction="column">
                    <Grid className={classes.skill}>
                      <Grid container justify="center" alignItems="center">
                        <CodeIcon className={classes.skillIcon} />
                      </Grid>
                    </Grid>
                    <h2>Clean Coder</h2>
                    <p className={classes.skillText}>
                      Fiel a las revisiones de código. <br />
                      Es escencial dejar todo lo mas facil de entender posible.
                    </p>
                  </Grid>
                </Slide>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Slide
                  direction="right"
                  in={checked}
                  {...(checked ? { timeout: 1000 } : {})}
                >
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
                </Slide>
              </Grid>{" "}
              <Grid item xs={6} lg={3}>
                <Slide
                  direction="right"
                  in={checked}
                  {...(checked ? { timeout: 1000 } : {})}
                >
                  <Grid container alignItems="center" direction="column">
                    <Grid className={classes.skill}>
                      <Grid container justify="center" alignItems="center">
                        <EmojiObjectsOutlinedIcon
                          className={classes.skillIcon}
                        />
                      </Grid>
                    </Grid>
                    <h2>Intuitivo</h2>
                    <p className={classes.skillText}>
                      La UX como brújula: <br />
                      cuanto mas facil de usar, mejor.
                    </p>
                  </Grid>
                </Slide>
              </Grid>{" "}
              <Grid item xs={6} lg={3}>
                <Slide
                  direction="right"
                  in={checked}
                  {...(checked ? { timeout: 1000 } : {})}
                >
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
                </Slide>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Slide
                  direction="right"
                  in={checked}
                  {...(checked ? { timeout: 1000 } : {})}
                >
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Hexagon
                      className={classes.avatar}
                      backgroundImage="/assets/profile3.jpg"
                      style={{
                        stroke: "#00000000",
                      }}
                    />
                    {
                      //   <Avatar
                      //   src="/assets/profile.jpg"
                      //   className={classes.avatar}
                      // />
                    }
                    <Grid item xs={9} className={classes.descriptionText}>
                      <h3>¿Quién soy?</h3>
                      <p>
                        Tengo 21 años, soy un desarrollador web con preferencia
                        en el Front-end. Empecé a programar hace 8 meses
                        aproximadamente, y actualmente manejo el stack MERN.
                      </p>
                    </Grid>
                  </Grid>
                </Slide>
              </Grid>
              <Slide
                direction="left"
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Grid item xs={12} lg={6}>
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      HTML
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={80} />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      CSS
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={80} />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      <Hidden smDown>JavaScript</Hidden>
                      <Hidden mdUp>JS</Hidden>
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={80} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      React
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={90} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      NodeJS
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={50} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      <Hidden smDown>Diseño UI</Hidden>
                      <Hidden mdUp>UI</Hidden>
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={70} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      <Hidden smDown>PhotoShop</Hidden>
                      <Hidden mdUp>Ps</Hidden>
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={60} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      <Hidden smDown>Deployment</Hidden>
                      <Hidden mdUp>Deploy</Hidden>
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={40} />
                    </Grid>
                  </Grid>{" "}
                  <Grid container alignItems="center">
                    <Grid item xs={2} className={classes.progressBox}>
                      DevOps
                    </Grid>
                    <Grid item xs={10}>
                      <ProgressBar progress={30} />
                    </Grid>
                  </Grid>{" "}
                </Grid>
              </Slide>
            </Grid>
          </Grid>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Grid>
  );
}
