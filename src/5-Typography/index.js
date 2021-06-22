import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
});


const Typo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
    </div>
  );
};

export default Typo;
