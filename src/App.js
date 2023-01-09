import React from "react";
import { Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import PizzaForm from './Components/PizzaForm';

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
    </div>
  );
};
export default App;
