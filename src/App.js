import React from 'react'; 
import { connect } from 'react-redux';
import Nav from './components/containers/Nav/Nav';
import Home from './components/content/Home';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  appName: state.appName
});


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <br/><br/><br/><br/>
        <Home/>
        {this.props.children}
      </div>
    );
  }
}

// App.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };
  

export default connect(mapStateToProps, () => ({}) )(App);