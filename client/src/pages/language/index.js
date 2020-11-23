import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createAndUpdatePokeboard } from '../../redux/user/actions';
import { setAlert } from '../../redux/alert/actions';
import { Redirect } from 'react-router-dom';
import { capitalize } from '../../utils/helpers';

// Styles
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import JapanFlag from '../../assets/images/japan.svg';
import ChinaFlag from '../../assets/images/china.svg';
import EnglishFlag from '../../assets/images/uk.svg';
import FrenchFlag from '../../assets/images/france.svg';
import Logo from '../../assets/images/pikachu.svg';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';

const Language = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth.user);
  const pokeboard = useSelector((state) => state.user.pokeboard);
  const alert = useSelector((state) => state.alert);
  const [language, setLanguage] = useState('english');

  const handleLanguage = async (e) => {
    dispatch(createAndUpdatePokeboard(language));
  };

  const handleChange = (e) => {
    setLanguage({
      language: e.target.value,
    });

    console.log(language);
  };

  // Redirect if logged in and pokeboard created
  if (isAuthenticated && pokeboard !== null) {
    return <Redirect to="/pokemons" />;
  }
  return (
    <Container maxWidth="xs" className={classes.root}>
      <Paper className={classes.paper}>
        <img className={classes.logo} src={Logo} />
        <Typography variant="h6">Wellcome {capitalize(user.name)}</Typography>
        <div>
          <div>
            <FormControl component="fieldset" className={classes.fieldset}>
              <FormLabel
                component="legend"
                focused={false}
                className={classes.legend}
              >
                Please choose your language.
              </FormLabel>
              <RadioGroup
                row
                className={classes.language}
                aria-label="gender"
                name="language"
                value={language}
                onChange={handleChange}
              >
                <FormControlLabel
                  name="english"
                  value="english"
                  control={
                    <Radio checked={language === 'english'} color="primary" />
                  }
                  labelPlacement="top"
                  label={<img className={classes.flag} src={EnglishFlag} />}
                />
                <FormControlLabel
                  name="chinese"
                  value="chinese"
                  control={
                    <Radio checked={language === 'chinese'} color="primary" />
                  }
                  labelPlacement="top"
                  label={<img className={classes.flag} src={ChinaFlag} />}
                ></FormControlLabel>
                <FormControlLabel
                  name="japanese"
                  value="japanese"
                  control={
                    <Radio checked={language === 'japan'} color="primary" />
                  }
                  labelPlacement="top"
                  label={<img className={classes.flag} src={JapanFlag} />}
                ></FormControlLabel>
                <FormControlLabel
                  name="french"
                  value="french"
                  control={
                    <Radio checked={language === 'french'} color="primary" />
                  }
                  labelPlacement="top"
                  label={<img className={classes.flag} src={FrenchFlag} />}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </div>

          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            onClick={handleLanguage}
          >
            CREATE YOUR POKEBOARD
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

Language.propTypes = {};

export default Language;
