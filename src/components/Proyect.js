import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Divider, Fade, Grid, Modal } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";
import SubjectIcon from "@material-ui/icons/Subject";
const CustomTypography = withStyles((theme) => ({
  root: {
    height: 25,
    fontFamily: "Raleway",
  },
}))(Typography);

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    zIndex: 10,
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
  },
  tecnologias: {
    fontSize: "1.2rem",
    color: "#ff0080",
  },
  detailsBox: {
    height: 300,
    display: "flex",
    alignItems: "center",
  },
  detailsArea: {
    marginBottom: "6rem",
  },
  detailsTitle: {
    fontWeight: "bolder",
  },
  detailsSubtitle: {
    fontWeight: "bolder",
    textTransform: "uppercase",
    color: "#9e9e9e",
  },
  detailsDescription: {},
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
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBox: {
    maxWidth: "900px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
    },
  },
  modalImg: {
    maxHeight: "600px",
  },
  demoButton: {
    backgroundColor: "#ff9100",
    borderRadius: "0%",
    color: "#fff",
    fontWeight: "bold",
    padding: "0.4rem 2rem 0.4rem 2rem ",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3f3f3f",
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
  } = props;
  const classes = useStyles();

  const [showBox, setShowBox] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Grid container>
      <Card
        elevation={0}
        onMouseEnter={() => setShowBox(true)}
        onMouseLeave={() => setShowBox(false)}
        className={classes.cardRoot}
      >
        {!showBox ? (
          <CardActionArea>
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
        ) : (
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
        )}
        {console.log("showBox", showBox)}
      </Card>
      <Modal
        className={classes.modal}
        open={showDetails}
        onClose={() => setShowDetails(false)}
      >
        <Fade in={showDetails}>
          <Card className={classes.modalBox}>
            <CardMedia
              component="img"
              alt={nombre}
              height="auto"
              width="auto"
              image={img}
              title={nombre}
              className={classes.modalImg}
            />
            <CardContent className={classes.detailsArea}>
              <CustomTypography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.detailsTitle}
              >
                {nombre}
              </CustomTypography>{" "}
              <CustomTypography
                gutterBottom
                variant="subtitle1"
                component="h3"
                className={classes.detailsSubtitle}
              >
                {appType}.
                <Divider />
              </CustomTypography>
              <CustomTypography
                variant="body1"
                color="textPrimary"
                component="p"
                className={classes.detailsDescription}
              >
                {descripcion}
              </CustomTypography>{" "}
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href={githubRepo}
                classes={{ root: classes.demoButton }}
              >
                GitHub <GitHubIcon />
              </Button>
              <Button
                href={demoUrl}
                size="small"
                classes={{ root: classes.demoButton }}
              >
                Demo Online <LaunchIcon />
              </Button>
            </CardActions>
          </Card>
        </Fade>
      </Modal>
    </Grid>
  );
}
