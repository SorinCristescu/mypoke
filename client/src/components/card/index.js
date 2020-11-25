import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPokemon, deletePokemon } from "../../redux/user/actions";

import Card from "@material-ui/core/Card";
import Grow from "@material-ui/core/Grow";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import useStyles from "./styles";

const CardItem = (props) => {
  const classes = useStyles();

  const { _id, name, urlImage } = props.item;

  const dispatch = useDispatch();
  const handleAddPokemon = (e) => {
    dispatch(addPokemon(props.item));
  };
  const handleDeletePokemon = (e) => {
    dispatch(deletePokemon(props.item._id));
  };
  return (
    <Grow in>
      <Card className={classes.root}>
        <Link to={`/pokemon/${_id}`}>
          <CardActionArea>
            <CardMedia className={classes.media} image={urlImage} />
            <CardContent>
              <Typography
                gutterBottom
                align="center"
                variant="h5"
                component="h2"
              >
                {name}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                align="center"
                component="p"
              >
                See details
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions className={classes.cardAction}>
          {props.path === "/pokemons" ? (
            <Fab
              size="medium"
              color="primary"
              onClick={handleAddPokemon}
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          ) : (
            <Fab
              size="medium"
              color="secondary"
              onClick={handleDeletePokemon}
              aria-label="add"
            >
              <DeleteIcon />
            </Fab>
          )}
        </CardActions>
      </Card>
    </Grow>
  );
};

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardItem;
