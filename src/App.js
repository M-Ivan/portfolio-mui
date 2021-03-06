import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Grid,
  IconButton,
  Typography,
  withStyles,
  Zoom,
} from "@material-ui/core";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useWindowScroll } from "react-use";
import BigNav from "./components/BigNav";

export const CustomTypography = withStyles((theme) => ({
  root: {
    height: 25,
    fontFamily: "Raleway",
  },
}))(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    padding: "0rem",
    margin: 0,

    //  backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg59.gif"})`,
    //  backgroundRepeat: "no-repeat",
    //  backgroundColor: "#1b1b1b",
    //  backgroundSize: "100% 100vh",
    //  backgroundAttachment: "relative",

    display: "flex",
    fontFamily: "Raleway",
    overflow: "hidden",
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

  const header = useRef(null);
  const about = useRef(null);
  const folio = useRef(null);
  const contact = useRef(null);

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const [headerAnimation, setHeaderAnimation] = useState(false);
  const [aboutAnimation, setAboutAnimation] = useState(false);
  const [portfolioAnimation, setPortfolioAnimation] = useState(false);
  const [contactAnimation, setContactAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      if (header.current && about.current && folio.current && contact.current) {
        if (window.pageYOffset === 0) {
          setAboutAnimation(false);
          setPortfolioAnimation(false);
          setContactAnimation(false);
        }
        if (about && window.pageYOffset < about.current.offsetTop) {
          setHeaderAnimation(true);
        }
        if (
          window.pageYOffset < folio.current.offsetTop &&
          window.pageYOffset >= about.current.offsetTop * 0.9
        ) {
          setAboutAnimation(true);
        }
        if (
          window.pageYOffset < contact.current.offsetTop &&
          window.pageYOffset >= folio.current.offsetTop * 0.9
        ) {
          setPortfolioAnimation(true);
          setHeaderAnimation(false);
        }
        if (contact && window.pageYOffset > contact.current.offsetTop * 0.9) {
          setContactAnimation(true);
          setAboutAnimation(false);
          setPortfolioAnimation(false);
        }
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
  }, [about, header, folio, contact]);

  useEffect(() => {
    if (pageYOffset >= about.current.offsetTop) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const gotoHeader = () =>
    window.scrollTo({ top: header.current.offsetTop, behavior: "smooth" });
  const gotoAbout = () =>
    window.scrollTo({
      top: about.current.offsetTop * 0.95,
      behavior: "smooth",
    });
  const gotoFolio = () =>
    window.scrollTo({
      top: folio.current.offsetTop * 0.99,
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

  return (
    <div className={classes.root}>
      {
        //  <ParticlesX />
      }{" "}
      <Grid container id="root">
        <NavBar
          gotoHeader={gotoHeader}
          gotoAbout={gotoAbout}
          gotoFolio={gotoFolio}
          gotoContact={gotoContact}
          handleCallback={handleCallback}
          header={header}
          about={about}
          folio={folio}
          contact={contact}
          open={open}
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
          animation={headerAnimation}
          headerSection={header}
          gotoAbout={gotoAbout}
        />
        <AboutMe animation={aboutAnimation} aboutSection={about} />
        <Portafolio folioSection={folio} animation={portfolioAnimation} />{" "}
        <Contact animation={contactAnimation} contactSection={contact} />{" "}
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
