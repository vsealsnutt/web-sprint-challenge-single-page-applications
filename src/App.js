import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Components/Home';
import PizzaForm from './Components/PizzaForm';
import Confirmation from './Components/ConfirmationPage';

const initialFormValues = {
  name: '',
  size: '', 
  sauce: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  topping6: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '', 
  sauce: ''
}

const initialDisabled = true;

const App = () => {
  const [orderForm, setOrderForm] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
          <PizzaForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
