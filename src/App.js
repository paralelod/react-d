import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Button from './components/blocks/Button';
import { btn } from './components/blocks/Button.module.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button content="Sample Button" class="btn"/>
          <Button content="Sample Button" class={btn}/>
        </header>
      </div>
    );
  }
}

export default App;
