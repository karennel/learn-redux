import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/counter'; 

class App extends Component {

  render() {

    return (
      <div>
        <Counter value="value" 
        onIncrement={() => console.log('increment')}
        onDecrement={()=> console.log('decrement')}
        />
        {/* <Counter value={store.getState()} 
        onIncrement={() => store.dispatch({
          type: 'INCREMENT'
        })}
        onDecrement={() => store.dispatch({
          type: 'DECREMENT'
        })}
        /> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
