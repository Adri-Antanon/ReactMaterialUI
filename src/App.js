import "./App.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  testTitle: {
    fontStyle: "oblique",
    color: "red",
  },
  buttonStyles: {
    color: "green",
    border: 0,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.testTitle} variant="h3" color="secondary">
        Título de prueba
      </Typography>
      <Button
        className={classes.buttonStyles}
        variant="outlined"
        color="secondary"
      >
        Este es mi primer botón con MaterialUI
      </Button>
    </div>
  );
}

export default App;
