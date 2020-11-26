import React, { lazy, Suspense, useEffect } from "react";
import { loadUser } from "./redux/auth/actions";
import setAuthToken from "./utils/setAuthToken";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Layout from "./layout";
import Loader from "./components/loader";
import PrivateRoute from "./routing/privateRoute";
import Alert from "./components/alert";
import ErrorFallback from "./components/errorBoundary";

// Styles
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles";
import useStyles from "./styles";

// Lazy loading with code splitting.
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Pokeboard = lazy(() => import("./pages/pokeboard"));
const Pokemon = lazy(() => import("./pages/pokemon"));
const Pokemons = lazy(() => import("./pages/pokemons"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // Here we can reset the state of the app so the error doesn't happen again
            window.location.reload();
          }}
        >
          <Suspense fallback={<Loader />}>
            <div className={classes.wrapper}>
              <Alert />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Layout>
                  <PrivateRoute path="/pokemons" exact component={Pokemons} />
                  <PrivateRoute path="/pokeboard" exact component={Pokeboard} />
                  <PrivateRoute path="/pokemon/:id" exact component={Pokemon} />
                </Layout>
              </Switch>
            </div>
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  );
};

export default App;
