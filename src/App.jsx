
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { routes } from './routes/routes';
import { PrivateRoute } from './pages/PrivateRoute';



const App = () => {
  const renderRoutes = () => {
    return routes.map(({ path, component: Component, privateRoute, layout: Layout }) => {

      const WrappedComponent = (props) => Layout ? <Layout {...props} render={(props) => <Component {...props} />} /> : <Component {...props} />;


      return privateRoute ?
        <PrivateRoute path={path} component={WrappedComponent} key={path} />
        : <Route path={path} component={WrappedComponent} key={path} />;

    });
  };

  return (
    <BrowserRouter>
        <Switch>
          {renderRoutes()}
        </Switch>
    </BrowserRouter>
  );
}

export default App;
