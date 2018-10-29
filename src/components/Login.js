import React from 'react';
import { connect } from 'react-redux';
import Nav from './containers/Nav/Nav';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <br/><br/><br/><br/>
        <h1>LOGIN PAGE</h1>
      </div>
    );
  }
}

export default connect(() => ({}), () => ({}))(Login);