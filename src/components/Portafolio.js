import { Grid, Hidden, makeStyles, Slide } from "@material-ui/core";
import React from "react";
import DetailsMobile from "./DetailsMobile";
import Proyect from "./Proyect";
import { projectsimg } from "../projectsimg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    backgroundColor: "#3f3f3f",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "Work Sans",
  },
  portafolio: {
    padding: "1rem 10% 1rem 10%",
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
  proyectAreaBox: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Portafolio(props) {
  const { animation, folioSection } = props;
  const classes = useStyles();
  const bullsOnImg = projectsimg[0].bullsOn;
  const buscadorImg = projectsimg[0].buscador;
  const ecommerceImg = projectsimg[0].amLibre;
  const restauranteImg = projectsimg[0].restaurante;

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      ref={folioSection}
    >
      <Grid container className={classes.portafolio}>
        <Hidden mdUp>
          <DetailsMobile />
        </Hidden>
        <Grid item xs={12}>
          <Slide
            direction="left"
            in={animation}
            {...(animation ? { timeout: 1000 } : {})}
          >
            <Grid container justify="center" alignItems="center">
              <h1 className={classes.title}>Proyectos</h1>
            </Grid>
          </Slide>
        </Grid>
        <Grid
          item
          xs={12}
          id="portfolioArea"
          className={classes.proyectAreaBox}
        >
          <Grid container className={classes.proyectArea}>
            <Grid item xs={12} md={6}>
              <Proyect
                animation={animation}
                nombre="BullsOn"
                img={bullsOnImg}
                tecnologias="React (M-UI) / MongoDB / Express"
                descripcion="Bulls On es una red social que aunque 
            sigue en desarrollo, ya posee las principales funcionalidades 
            que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas."
                githubRepo="https://github.com/M-Ivan/BullsOn"
                demoUrl="https://bullson.herokuapp.com"
                appType="Red social"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Proyect
                animation={animation}
                nombre="Buscador de pasajes"
                img={buscadorImg}
                tecnologias="React (M-UI) / MongoDB / Express"
                descripcion="Proyecto que hace request a una API REST y devuelve una lista de pasajes que cumplan con los requisitos solicitados."
                githubRepo="https://github.com/M-Ivan/Buscador-de-pasajes"
                demoUrl="https://buscadorpasajes.herokuapp.com/"
                appType="Consumo de API REST"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Proyect
                animation={animation}
                nombre="AmLibre"
                img={ecommerceImg}
                tecnologias="React / MongoDB / Express"
                descripcion="AmLibre es un E-Commerce completamente funcional y hecho a semejanza de Amazon y Mercado Libre, acepta pagos con PayPal, ofrece seguimiento de ordenes y dashoard del admin y vendedor. Entre otras cosas."
                githubRepo="https://github.com/M-Ivan/E-Commerce"
                demoUrl="https://amlibre.herokuapp.com"
                appType="E-Commerce"
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <Proyect
                animation={animation}
                nombre="Reactstaurante"
                img={restauranteImg}
                tecnologias="React (ReactStrap) / MongoDB / Express"
                descripcion="Aplicación con backend incluido que ofrece un menu, configuracion, lista de platos y demás a los usuarios en una sola pagina, ya que se trata de una SPA."
                githubRepo="https://github.com/M-Ivan/Restaurante"
                demoUrl="https://reactstaurant.herokuapp.com"
                appType="Restaurante"
              />
            </Grid>
          </Grid>{" "}
        </Grid>{" "}
      </Grid>
    </Grid>
  );
}
