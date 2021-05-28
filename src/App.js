import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  createMuiTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";
import Particles from "react-particles-js";
import useWindowPosition from "./hooks/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg59.gif"})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1b1b1b",
    backgroundSize: "100% 100vh",
    backgroundAttachment: "relative",
    display: "flex",
    fontFamily: "Raleway",
    overflowX: "hidden",
  },
}));

export default function App() {
  const classes = useStyles();
  const checked = useWindowPosition("root");

  return (
    <div className={classes.root}>
      <Particles
        params={{
          particles: {
            number: {
              value: 300,
            },
            color: {
              value: "#cd2ad9", // "#0f7dd8",  //#ff9100
            },
            shape: {
              stroke: {
                width: 0,
              },
              type: "edge",
              image: {
                src: "/assets/react.png",
                width: 40,
                height: 30,
              },
            },
            opacity: {
              value: 1,
            },
            size: {
              value: 5,
              random: true,
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#fff", //#d31ec0
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              direction: "bottom",
              outMode: "out",
              random: true,
              speed: 3,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              grab: {
                lineLinked: {
                  opacity: 0.2,
                },
                distance: 400,
              },
              repulse: {
                distance: 200,
              },
            },
          },
        }}
        height="100vh"
        style={{
          position: "absolute",
          borderRadious: "50%",
          zIndex: 0,
        }}
      />{" "}
      <Grid container id="root">
        <NavBar />
        <Header checked={checked.headerAnimation} />
        <AboutMe checked={checked.aboutAnimation} />
        <Portafolio checked={checked.portfolioAnimation} />{" "}
        <Contact checked={checked.contactAnimation} />{" "}
      </Grid>
      <CssBaseline />
    </div>
  );
}
