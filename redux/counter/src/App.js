import React, { Component } from 'react';
import Counter from './Counter';
import CounterBar from './CounterBar';

class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <CounterBar/>
      </div>
    );
  }
}

export default App;
