import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPokemon, deletePokemon } from "../../redux/user/actions";

import {
  Card,
  Grow,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Fab,
} from "@material-ui/core";
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
          <CardActionArea className={classes.actionArea}>
            <CardMedia className={classes.media} image={urlImage} />
            <CardContent>
              <Typography
                gutterBottom
                align="center"
                variant="h5"
                component="h2"
              >
                {name || name !== "" ? name : "Unknown"}
              </Typography>
              <Typography
                className={classes.invitation}
                gutterBottom
                variant="body1"
                align="center"
                component="p"
              >
                Allow me to introduce myself!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions className={classes.cardAction}>
          {props.path === "/pokemons" ? (
            <Fab
              size="large"
              color="primary"
              onClick={handleAddPokemon}
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          ) : (
            <Fab
              size="large"
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
