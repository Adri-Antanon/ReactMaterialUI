import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import CardMedia from "@material-ui/core/CardMedia";

// import city from "../../static/images/places/city.jpg";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    height: 150,
  },
});
const CoffeCard = (props) => {
  const classes = useStyles();

  const { avatarUrl, title, price, description, imageUrl } = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt="Adri Antanon" src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia className={classes.image} image={imageUrl} />
      <CardContent>{description}</CardContent>
      <CardActions>
        <Button color="primary" size="small">
          Comprar AHORA!
        </Button>
        <Button color="secondary" size="small">
          Ofrecer
        </Button>
      </CardActions>
    </Card>
  );
};

export default CoffeCard;
