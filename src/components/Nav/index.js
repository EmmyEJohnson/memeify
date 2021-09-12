import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Register from '../../pages/Register';
import Signin from '../../pages/Signin';

const Nav = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };
  return (
    <div>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/signin">Login</Link>
      </nav>
      <Switch>
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Route path="/signin" render={(props) => <Signin {...props} />} />
      </Switch>
    </div>
  );
};

export default Nav;