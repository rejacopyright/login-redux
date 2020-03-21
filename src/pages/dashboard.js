import React, { Component } from 'react';
import { connect } from 'react-redux';
class Dashboard extends Component {
  render() {
    return (
      <div>
        Kamu ada di dashboard h
        <button type="button" onClick={() => this.props.handleLogout()}>Logout</button>
      </div>
    );
  }
}
const mapDispatch = (dispatch) => {
  return {
    handleLogout : () => dispatch({type:'LOGOUT'})
  }
}
export default connect(state => state, mapDispatch)(Dashboard);
