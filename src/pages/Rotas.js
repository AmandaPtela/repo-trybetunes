import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Search from './Search';

class Rotas extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/home" component={ Home } />
        <Route path="/search" component={ Search } />
      </Switch>
    );
  }
}
export default Rotas;
