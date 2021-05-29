import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#19171df9",
    border: "3px solid #d300c1",
    color: "#fff",
    position: "fixed",
    height: "100%",
    width: "100%",
    zIndex: 100,
  },
}));

export default function DetailsMobile(props) {
  const classes = useStyles();
  return <Grid container className={classes.root}></Grid>;
}
