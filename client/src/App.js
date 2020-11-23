import React, { lazy, Suspense, useEffect } from 'react';
import { loadUser } from './redux/auth/actions';
import setAuthToken from './utils/setAuthToken';
import { useDispatch } from 'react-redux';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Layout from './layout';
import Loader from './components/loader';
import PrivateRoute from './routing/privateRoute';
import Alert from './components/alert';

// Styles
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './styles';
import useStyles from './styles';
import Container from '@material-ui/core/Container';

// Lazy loading with code splitting.
const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const Pokeboard = lazy(() => import('./pages/pokeboard'));
const Details = lazy(() => import('./pages/details'));
const Pokemons = lazy(() => import('./pages/pokemons'));
const Language = lazy(() => import('./pages/language'));
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <ErrorBoundary> */}
        <Suspense fallback={<Loader />}>
          <Container className={classes.root} maxWidth="lg">
            <Alert />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <PrivateRoute path="/language" exact component={Language} />
              <Layout>
                <PrivateRoute path="/pokemons" exact component={Pokemons} />
                <PrivateRoute path="/pokeboard" exact component={Pokeboard} />
                <PrivateRoute path="/details/:id" exact component={Details} />
              </Layout>
            </Switch>
          </Container>
        </Suspense>
        {/* </ErrorBoundary> */}
      </ThemeProvider>
    </Router>
  );
};

export default App;
