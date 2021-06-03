import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  Divider,
  Fade,
  Grid,
  Grow,
  Modal,
  Slide,
  IconButton,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";
import SubjectIcon from "@material-ui/icons/Subject";
import { Close } from "@material-ui/icons";

const CustomTypography = withStyles((theme) => ({
  root: {
    height: 25,
    fontFamily: "Raleway",
  },
}))(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    color: "#fff",
    backgroundColor: "transparent",
    borderRadius: "0",
  },
  nameBox: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  nombre: {
    fontSize: "2rem",
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15pt",
    },
  },
  tecnologias: {
    fontSize: "1.2rem",
    color: "#ff0080",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10pt",
    },
  },
  detailsBox: {
    height: 300,
    display: "flex",
    alignItems: "center",
  },
  button: {
    width: "60%",
    marginTop: "3rem",
    border: "2px solid #ff0080",
    borderRadius: "0%",
    color: "#fff",
    padding: "0.4rem 2rem 0.4rem 2rem ",
    "&:hover": {
      backgroundColor: "#ff0080",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0pt",
    },
  },
  modal: {
    borderRadius: "1rem",
    position: "absolute",
    width: "90%",
    height: "90%",
    backgroundColor: "#fff",
    boxShadow: theme.shadows[24],
    top: "5%",
    left: "5%",
    transform: "translate(-50, -50%)",
    [theme.breakpoints.down("md")]: {
      overflow: "scroll",
      width: "100%",
      height: "100%",
      top: "0%",
      left: "0%",
    },
  },
  close: {
    position: "absolute",
    top: "5px",
    right: "1%",
    width: "50px",
    height: "50px",
    zIndex: 100,
  },
  img: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: "1rem",
    transition: "1s",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-end",
    },
  },
  modalBtn: {
    backgroundColor: "#ff9100",
    bottom: "0px",
    borderRadius: "0%",
    color: "#fff",
    fontWeight: "bold",
    padding: "0.4rem 2rem 0.4rem 2rem ",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3f3f3f",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0",
      padding: "0.4rem 1rem 0.4rem 1rem ",
    },
    "&:not(:last-child)": {
      marginRight: "10px",
    },
  },
}));

export default function Proyect(props) {
  const {
    nombre,
    tecnologias,
    descripcion,
    img,
    appType,
    githubRepo,
    demoUrl,
    animation,
  } = props;
  const classes = useStyles();

  const [showBox, setShowBox] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // TODO: Copiar el modal del otro proyecto

  const body = (
    <Grow in={showDetails} {...{ timeout: 400 }}>
      <Grid container justify="center" className={classes.modal}>
        <IconButton
          className={classes.close}
          onClick={() => setShowDetails(!showDetails)}
        >
          <Close className={classes.icon} />
        </IconButton>
        <Grid item xs={12} md={7}>
          <CardMedia
            component="div"
            alt="Project 2"
            image={img}
            title="Project 2"
            className={classes.img}
          >
            {" "}
            <Button href={demoUrl} className={classes.modalBtn}>
              Demo
              <LaunchIcon />
            </Button>
            <Button href={githubRepo} className={classes.modalBtn}>
              Repo
              <GitHubIcon />
            </Button>{" "}
          </CardMedia>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{
            padding: "2rem",
          }}
        >
          <CustomTypography
            variant="h4"
            gutterBottom
            className={classes.nombre}
          >
            {nombre}
          </CustomTypography>
          <CustomTypography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            style={{
              fontWeight: 600,
              textTransform: "uppercase",
              alignSelf: "flex-start",
            }}
          >
            {appType}
          </CustomTypography>
          <Divider />

          <CustomTypography variant="body1">{descripcion}</CustomTypography>
        </Grid>
      </Grid>
    </Grow>
  );

  return (
    <Grow in={animation}>
      <Grid container>
        <Card
          elevation={0}
          onMouseEnter={() => setShowBox(true)}
          onMouseLeave={() => setShowBox(false)}
          className={classes.root}
        >
          {!showBox ? (
            <Slide direction="up" in={!showBox} {...{ timeout: 500 }}>
              <CardActionArea onClick={() => setShowBox(true)}>
                <CardMedia
                  // Poner una imagen que respete las dimensiones siempre
                  component="img"
                  alt={nombre}
                  height="300"
                  width="400"
                  image={img}
                  title={nombre}
                />
              </CardActionArea>
            </Slide>
          ) : (
            <Fade in={showBox} {...{ timeout: 800 }}>
              <Grid container className={classes.detailsBox}>
                <Grid item xs={12}>
                  <Box className={classes.nameBox}>
                    <span className={classes.nombre}>{nombre}</span> <br />
                    <span className={classes.tecnologias}>{tecnologias}</span>
                  </Box>
                  <Grid container justify="center">
                    <Button
                      onClick={() => setShowDetails(true)}
                      classes={{ root: classes.button }}
                    >
                      Más Info <SubjectIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Fade>
          )}
        </Card>
        <Modal open={showDetails} onClose={() => setShowDetails(false)}>
          {body}
        </Modal>
      </Grid>
    </Grow>
  );
}
