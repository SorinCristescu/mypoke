import React, { lazy, Suspense, useEffect } from 'react';
import { loadUser } from './redux/auth/actions';
import setAuthToken from './utils/setAuthToken';
import { useDispatch } from 'react-redux';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Layout from './layout';
import Loader from './components/loader';

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
const PrivateRoute = lazy(() => import('./routing/privateRoute'));

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
        <Layout>
          {/* <ErrorBoundary> */}
          <Suspense fallback={<Loader />}>
            <Route path="/" exact component={Home} />
            <Container className={classes.root}>
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <PrivateRoute path="/pokeboard" exact component={Pokeboard} />
                <Route path="/details/:id" exact component={Details} />
              </Switch>
            </Container>
          </Suspense>
          {/* </ErrorBoundary> */}
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
