// Application base routing file
import { FC, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// view component lazy loading
const home = lazy(() => import('./pages/Home'));
const cart = lazy(() => import('./pages/Cart'));

const BaseRouter: FC = () => (
  <Switch>
    <Route path="/cart" component={cart} />
    <Route exact path="/" component={home} />
    <Redirect to="/" />
  </Switch>
);

export default BaseRouter;
