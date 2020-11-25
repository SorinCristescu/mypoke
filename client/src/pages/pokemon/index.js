import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/user/actions";

// Components
import Chart from "../../components/chart";
import Loader from "../../components/loader";

// Styles
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const Pokemon = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.user.loaded);
  const pokemon = useSelector((state) => state.user.pokemon);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getPokemon(id));
  }, []);

  if (loaded) {
    const { base, type, urlImage, name } = pokemon;
    const { HP, Attack, Defense, SpAttack, SpDefense, Speed } = base;
    const dataSet = [HP, Attack, Defense, SpAttack, SpDefense, Speed];
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Grid
            wrap
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justify="center"
              alignItems="center"
              className={classes.gridItem}
            >
              <img src={urlImage} alt="pokemon" className={classes.image} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              justify="center"
              alignItems="center"
              className={classes.gridItem}
            >
              <Typography variant="h4" align="center">
                {name}
              </Typography>
              <div className={classes.chips}>
                <Typography variant="h6" align="center">
                  Skills:
                </Typography>
                {type &&
                  type.map((chip, index) => (
                    <Chip
                      key={index}
                      className={classes.chip}
                      color="primary"
                      size="small"
                      label={chip}
                    />
                  ))}
              </div>
              <Chart dataSet={dataSet} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Pokemon;
