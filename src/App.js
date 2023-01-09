import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Components/Home';
import PizzaForm from './Components/PizzaForm';
import Confirmation from './Components/ConfirmationPage';

import axios from 'axios';
import schema from './Validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  size: '', 
  sauce: '',
  pepperoni: false,
  bacon: false,
  chicken: false,
  mushrooms: false,
  onions: false,
  peppers: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '', 
  sauce: ''
}

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewOrder = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([ res.data, ...orders ]);
      })
      .catch(err => console.error(err))
      .finally(setFormValues(initialFormValues));
  }


  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni', 'bacon', 'chicken', 'mushrooms', 'onions', 'peppers'].filter(topping => !!formValues[topping])
    }
    postNewOrder(newOrder);
  }

  return (
    <Router>
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
              errors={formErrors}
            />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
