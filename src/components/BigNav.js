import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  SwipeableDrawer,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import { useWindowSize } from "react-use";
import SortIcon from "@material-ui/icons/Sort";
import { HomeOutlined } from "@material-ui/icons";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  bigNav: {
    backgroundColor: "#19171d",
    border: "3px solid #d300c1",
    color: "#fff",
    position: "fixed",
    height: "100vh",
    zIndex: 100,
  },
}));

// TODO, decorar Nav grande

export default function BigNav(props) {
  const { gotoHeader, gotoAbout, gotoFolio, gotoContact, handleCallback } =
    props;
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
    <Slide direction="right" in>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.bigNav}
      >
        <div className={classes.drawerHeader}>
          <h1 className="brand">Iván Miragaya</h1>
        </div>
        <Divider />
        <Button onClick={handleGoToHeader}>
          <HomeOutlined style={{ color: orange[700] }} />
          Inicio
        </Button>{" "}
        <Button onClick={handleGoToAbout}>
          <HomeOutlined style={{ color: orange[700] }} />
          About
        </Button>{" "}
        <Button onClick={handleGoToFolio}>
          <HomeOutlined style={{ color: orange[700] }} />
          Folio
        </Button>{" "}
        <Button onClick={handleGoToContact}>
          <HomeOutlined style={{ color: orange[700] }} />
          Contact
        </Button>{" "}
      </Grid>
    </Slide>
  );
}
