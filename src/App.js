import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
// Cookies
import Cookies from 'js-cookie';

import Login from './auth/login';
import Dashboard from './pages/dashboard';

class App extends Component {
  componentDidMount() {
    console.log(Cookies.get());
  }
  render() {
    return (
      <Fragment>
        {
          Cookies.getJSON('auth') ?
          <Dashboard /> :
          <Login />
        }
      </Fragment>
    );
  }
}

export default connect(s => s)(App);
