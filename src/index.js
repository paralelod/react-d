import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import './index.scss';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './components/content/Home';
import Login from './components/Login';


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={App}/>
        <Route exact path="/home" component={App}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
