import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  buttonText: (props) => {
    return {
      color: props.cool ? "red" : "blue",
      border: "none",
      [theme.breakpoints.up("sm")]: {
        border: "1px solid blue",
      },
    };
  },
  buttonBackground: {
    backgroundColor: "lightsalmon",
  },
}));

const CoolButton = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <h1>Título</h1>
      <Button
        fullWidth
        className={classNames(classes.buttonBackground, classes.buttonText)}
      >
        Botón
      </Button>
    </>
  );
};

export default CoolButton;
