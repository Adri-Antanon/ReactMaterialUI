import { Grid } from '@material-ui/core';
import React from 'react';
import CoffeCard from './CoffeCard';

const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4} >
        <CoffeCard title={"Test"} avatarSrc={"/static/images/avatar/1.JPG"} subtitle={"10€"} />
      </Grid>
      <Grid item xs={12} sm={4} >
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4} >
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4} >
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4} >
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4} >
        <CoffeCard />
      </Grid>
    </Grid>
  );
};

export default Content;
