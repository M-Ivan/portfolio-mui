import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Slide } from "@material-ui/core";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#19171df9",
    margin: 0,
    padding: 0,
    display: "flex",
    border: "3px solid #d300c1",
    minHeight: "100vh",
    alignItems: "center",
    boxSizing: "border-box",
    position: "fixed",
    zIndex: 11,
  },

  closeIcon: {
    color: "#00d4db",
    width: "3rem",
    height: "3rem",
    [theme.breakpoints.down("sm")]: {
      width: "2rem",
      height: "2rem",
    },
    animation: `$back 0.5s alternate ${theme.transitions.easing.easeInOut} infinite`,
  },
  "@keyframes back": {
    from: {
      transform: "translateX(2px)",
    },
    to: {
      transform: "translateX(-2px)",
    },
  },
}));

// TODO, decorar Nav grande

export default function BigNav(props) {
  const {
    gotoHeader,
    gotoAbout,
    gotoFolio,
    gotoContact,
    handleCallback,
    open,
  } = props;
  const classes = useStyles();

  const handleGoToHeader = () => {
    gotoHeader();
    handleCallback();
  };
  const handleGoToAbout = () => {
    gotoAbout();
    handleCallback();
  };
  const handleGoToFolio = () => {
    gotoFolio();
    handleCallback();
  };
  const handleGoToContact = () => {
    gotoContact();
    handleCallback();
  };

  return (
    <Slide direction={"right"} in={open}>
      <Grid container justify="center" className={classes.root}>
        <Box>
          <Grid
            container
            style={{
              transform: "skewY(-3deg)",
            }}
          >
            <h2 className="sub-header">Iván Miragaya</h2>
          </Grid>

          <div className="navigation">
            <div>
              <li>
                {" "}
                <a href="#header" data-text="Inicio" onClick={handleGoToHeader}>
                  Inicio
                </a>
              </li>{" "}
              <li>
                <a href="#about" data-text="Sobre Mí" onClick={handleGoToAbout}>
                  Sobre Mí
                </a>
              </li>{" "}
              <li>
                <a
                  href="#folio"
                  data-text="Portafolio"
                  onClick={handleGoToFolio}
                >
                  Portafolio
                </a>
              </li>{" "}
              <li>
                <a
                  href="#contact"
                  data-text="Contacto"
                  onClick={handleGoToContact}
                >
                  Contacto
                </a>
              </li>
              <li>
                <a data-text="volver" onClick={handleCallback}>
                  <ArrowBackOutlinedIcon
                    className="sub-header"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </a>
              </li>
            </div>{" "}
          </div>
        </Box>
      </Grid>
    </Slide>
  );
}
