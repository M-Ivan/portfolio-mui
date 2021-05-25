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

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg18.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    display: "flex",
    fontFamily: "Raleway",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <NavBar />
        <Header />
        <AboutMe />
        <Portafolio />
        <Contact />
      </Grid>
      <CssBaseline />
    </div>
  );
}
