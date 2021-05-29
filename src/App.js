import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Grid, IconButton, Zoom } from "@material-ui/core";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";
import Particles from "react-particles-js";
import useWindowPosition from "./hooks/useWindowPosition";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useSetState, useWindowScroll } from "react-use";
import BigNav from "./components/BigNav";

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
  scrollTop: {
    boxShadow: "0 0 10px #00000030",
    position: "fixed",
    bottom: "30px",
    right: "5%",
    backgroundColor: "#fff",
    transition: "1s",
    color: "#d300c1",
    "&:hover": {
      backgroundColor: "#b400cc",
      color: "#fff",
    },
  },
  scrollTopIcon: {
    animation: `$scrollTop 0.5s alternate ${theme.transitions.easing.easeInOut} infinite`,
    width: "40px",
    height: "40px",
  },
  "@keyframes scrollTop": {
    from: {
      transform: "translateY(4px)",
    },
    to: {
      transform: "translateY(-1px)",
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const checked = useWindowPosition("root");

  const header = useRef(null);
  const about = useRef(null);
  const folio = useRef(null);
  const contact = useRef(null);

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pageYOffset >= 930) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const gotoHeader = () =>
    window.scrollTo({ top: header.current.offsetTop, behavior: "smooth" });
  const gotoAbout = () =>
    window.scrollTo({
      top: about.current.offsetTop * 0.945,
      behavior: "smooth",
    });
  const gotoFolio = () =>
    window.scrollTo({
      top: folio.current.offsetTop * 0.97,
      behavior: "smooth",
    });
  const gotoContact = () =>
    window.scrollTo({
      top: contact.current.offsetTop,
      behavior: "smooth",
    });

  const handleCallback = () => {
    setOpen((prev) => !prev);
  };

  console.log("header", header);
  console.log("about", about);
  console.log("folio", folio);
  console.log("contact", contact);

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
              color: "#4b00fa", //#d31ec0
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
                  opacity: 0.3,
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
        <NavBar
          gotoHeader={gotoHeader}
          gotoAbout={gotoAbout}
          gotoFolio={gotoFolio}
          gotoContact={gotoContact}
          handleCallback={handleCallback}
        />
        {open ? (
          <BigNav
            gotoHeader={gotoHeader}
            gotoAbout={gotoAbout}
            gotoFolio={gotoFolio}
            gotoContact={gotoContact}
            handleCallback={handleCallback}
            open={open}
          />
        ) : null}
        {
          // TODO: BOTON DE SCROLL DOWN && SCROLL UP
        }
        <Header
          checked={checked.headerAnimation}
          headerSection={header}
          gotoAbout={gotoAbout}
        />
        <AboutMe checked={checked.aboutAnimation} aboutSection={about} />
        <Portafolio
          folioSection={folio}
          checked={checked.portfolioAnimation}
        />{" "}
        <Contact checked={checked.contactAnimation} contactSection={contact} />{" "}
        {visible ? (
          <Zoom in {...{ timeout: 1000 }}>
            <IconButton
              onClick={gotoHeader}
              classes={{ root: classes.scrollTop }}
            >
              <ExpandLessIcon className={classes.scrollTopIcon} />
            </IconButton>
          </Zoom>
        ) : null}
      </Grid>
      <CssBaseline />
    </div>
  );
}
