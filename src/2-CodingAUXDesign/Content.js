import { Grid } from "@material-ui/core";
import React from "react";
import CoffeCard from "./CoffeCard";

import cardInfo from "./constants";

const Content = () => {
  const getCardInfo = (card) => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeCard {...card} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={4}>
      {cardInfo.map((card) => getCardInfo(card))}
    </Grid>
  );
};

export default Content;
