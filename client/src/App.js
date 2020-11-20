import React, { lazy, Suspense } from 'react';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Layout from './layout';
import Loader from './components/loader';

// Styles
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './styles';

// Lazy loading with code splitting.
const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const Pokeboard = lazy(() => import('./pages/pokeboard'));
const Details = lazy(() => import('./pages/details'));

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          {/* <ErrorBoundary> */}
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/pokeboard" exact component={Pokeboard} />
              <Route path="/details/:id" exact component={Details} />
            </Switch>
          </Suspense>
          {/* </ErrorBoundary> */}
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
