import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Proyect from "./Proyect";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    backgroundColor: "#00000090",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "Work Sans",
  },
  portafolio: {
    padding: "1rem 10% 1rem 10%",
    backgroundColor: "#3f3f3f",
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    padding: "2rem 0 1rem 0",
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
  proyectArea: {
    width: "80%",
    marginTop: "5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "",
  },
}));

export default function Portafolio() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center">
      <Grid container className={classes.portafolio}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <h1 className={classes.title}>Proyectos</h1>
          </Grid>
        </Grid>
        <Grid container className={classes.proyectArea}>
          <Grid item xs={12} sm={6} lg={4}>
            <Proyect
              nombre="BullsOn"
              img="/assets/proyects/bullsOn.png"
              tecnologias="React / MongoDB / Express"
              descripcion="Bulls On es una red social que aunque 
            sigue en desarrollo, ya posee las principales funcionalidades 
            que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas."
              githubRepo="https://github.com/M-Ivan/BullsOn"
              demoUrl="https://bullson.herokuapp.com"
              appType="Red social"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Proyect
              nombre="BullsOn"
              img="/assets/proyects/bullsOn.png"
              tecnologias="React / MongoDB / Express"
              descripcion="Bulls On es una red social que aunque 
            sigue en desarrollo, ya posee las principales funcionalidades 
            que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas."
              githubRepo="https://github.com/M-Ivan/BullsOn"
              demoUrl="https://bullson.herokuapp.com"
              appType="Red social"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Proyect
              nombre="BullsOn"
              img="/assets/proyects/bullsOn.png"
              tecnologias="React / MongoDB / Express"
              descripcion="Bulls On es una red social que aunque 
            sigue en desarrollo, ya posee las principales funcionalidades 
            que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas."
              githubRepo="https://github.com/M-Ivan/BullsOn"
              demoUrl="https://bullson.herokuapp.com"
              appType="Red social"
            />{" "}
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Proyect
              nombre="BullsOn"
              img="/assets/proyects/bullsOn.png"
              tecnologias="React / MongoDB / Express"
              descripcion="Bulls On es una red social que aunque 
            sigue en desarrollo, ya posee las principales funcionalidades 
            que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas."
              githubRepo="https://github.com/M-Ivan/BullsOn"
              demoUrl="https://bullson.herokuapp.com"
              appType="Red social"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Proyect
              nombre="BullsOn"
              img="/assets/proyects/bullsOn.png"
              tecnologias="React / MongoDB / Express"
              descripcion="Bulls On es una red social que aunque 
            sigue en desarrollo, ya posee las principales funcionalidades 
            que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas."
              githubRepo="https://github.com/M-Ivan/BullsOn"
              demoUrl="https://bullson.herokuapp.com"
              appType="Red social"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Proyect
              nombre="BullsOn"
              img="/assets/proyects/bullsOn.png"
              tecnologias="React / MongoDB / Express"
              descripcion="Bulls On es una red social que aunque 
            sigue en desarrollo, ya posee las principales funcionalidades 
            que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas."
              githubRepo="https://github.com/M-Ivan/BullsOn"
              demoUrl="https://bullson.herokuapp.com"
              appType="Red social"
            />{" "}
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Proyect
              nombre="BullsOn"
              img="/assets/proyects/bullsOn.png"
              tecnologias="React / MongoDB / Express"
              descripcion="Bulls On es una red social que aunque 
            sigue en desarrollo, ya posee las principales funcionalidades 
            que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas."
              githubRepo="https://github.com/M-Ivan/BullsOn"
              demoUrl="https://bullson.herokuapp.com"
              appType="Red social"
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={4}>
            <Proyect
              nombre="BullsOn"
              img="/assets/proyects/bullsOn.png"
              tecnologias="React / MongoDB / Express"
              descripcion="Bulls On es una red social que aunque 
            sigue en desarrollo, ya posee las principales funcionalidades 
            que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas."
              githubRepo="https://github.com/M-Ivan/BullsOn"
              demoUrl="https://bullson.herokuapp.com"
              appType="Red social"
            />{" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6} lg={4}>
            <Proyect
              nombre="BullsOn"
              img="/assets/proyects/bullsOn.png"
              tecnologias="React / MongoDB / Express"
              descripcion="Bulls On es una red social que aunque 
            sigue en desarrollo, ya posee las principales funcionalidades 
            que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas."
              githubRepo="https://github.com/M-Ivan/BullsOn"
              demoUrl="https://bullson.herokuapp.com"
              appType="Red social"
            />{" "}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
