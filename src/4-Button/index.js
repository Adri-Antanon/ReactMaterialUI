import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
    border: "none"
  },
}));

const CustomButton = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} >
        <Button disableRipple disableFocusRipple>
          Botón sin animación
        </Button>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} >
        <Button fullWidth>
          Botón ancho completo
        </Button>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} >
        <Button size="6" color="primary" variant="outlined">
          Botón sin animación
        </Button>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} >
        <Button className={classes.root} variant="outlined" color="secondary" size="small">
          Botón con classname
        </Button>
      </Grid>
    </Grid>
  );
};

export default CustomButton;
