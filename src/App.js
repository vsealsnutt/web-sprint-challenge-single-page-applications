import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Components/Home';
import PizzaForm from './Components/PizzaForm';
import Confirmation from './Components/ConfirmationPage';

const App = () => {
  return (
    <div className="App">
      <h1>BloomTech Eats</h1>
      <nav>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/help'>Help</Link>
        </div>
      </nav>

      <Switch>
        <Route path={'/confirmation'}>
          <Confirmation />
        </Route>
        <Route path={'/pizza-form'}>
          <PizzaForm />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
