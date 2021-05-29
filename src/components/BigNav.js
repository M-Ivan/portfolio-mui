import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  ClickAwayListener,
  Divider,
  Grid,
  IconButton,
  Slide,
} from "@material-ui/core";
import { HomeOutlined } from "@material-ui/icons";
import { orange } from "@material-ui/core/colors";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
const useStyles = makeStyles((theme) => ({
  bigNav: {
    backgroundColor: "#19171df9",
    border: "3px solid #d300c1",
    color: "#fff",
    position: "fixed",
    height: "100%",
    width: "100%",
    zIndex: 100,
  },
  banner: {
    fontSize: "3rem",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#d300c1",
  },
  icon: {
    width: "2rem",
    height: "2rem",
  },
  closeIcon: {
    width: "3rem",
    height: "3rem",
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
  button: {
    textAlign: "center",
    color: "#fff",
    width: "100%",
    height: "10%",
    fontSize: "2rem",
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
    <Slide direction="right" in={open}>
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.bigNav}
      >
        <ClickAwayListener onClickAway={handleCallback}>
          <Grid container alignItems="center" justify="center">
            <div>
              <h1 className={classes.banner}>Iván Miragaya</h1>
            </div>
            <Divider />
            <Button
              classes={{ root: classes.button }}
              onClick={handleGoToHeader}
            >
              <HomeOutlined
                style={{ color: orange[700] }}
                className={classes.icon}
              />
              Inicio
            </Button>{" "}
            <Button
              classes={{ root: classes.button }}
              onClick={handleGoToAbout}
            >
              <AccountBoxOutlinedIcon
                className={classes.icon}
                style={{ color: orange[700] }}
              />
              Sobre mí
            </Button>{" "}
            <Button
              classes={{ root: classes.button }}
              onClick={handleGoToFolio}
            >
              <WorkOutlineOutlinedIcon
                className={classes.icon}
                style={{ color: orange[700] }}
              />
              Portafolio
            </Button>{" "}
            <Button
              classes={{ root: classes.button }}
              onClick={handleGoToContact}
            >
              <ContactMailOutlinedIcon
                className={classes.icon}
                style={{ color: orange[700] }}
              />
              Contacto
            </Button>
            <IconButton onClick={handleCallback} style={{ marginTop: "1rem" }}>
              <ArrowBackOutlinedIcon
                className={classes.closeIcon}
                style={{ color: orange[700] }}
              />
            </IconButton>
          </Grid>
        </ClickAwayListener>
      </Grid>
    </Slide>
  );
}
