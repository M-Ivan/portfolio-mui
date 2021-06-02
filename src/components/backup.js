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
    <Grid container direction="column" className={classes.detailsArea}>
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
    </Grid>
    <CardActions className={classes.actionBox}>
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
        Demo <LaunchIcon />
      </Button>
    </CardActions>
    <Hidden mdUp>
      <IconButton onClick={() => setShowDetails(false)}>
        <Close />
      </IconButton>
    </Hidden>
  </Card>
</Fade>;
