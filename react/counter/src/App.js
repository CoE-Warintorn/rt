import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {

  constructor(props) {
    super(props)
    this.counters = {}
    this.state = {total: 10}
  }

  handleInc() {
    let total = 0
    Object.values(this.counters).forEach(c => total += c.state.val)
    console.log('total = ' + total)
    this.setState({total: total})
  }

  render() {
    return (
      <div>
        {/* <Counter val={3}/>   props */}
        {/* <Counter initial={4}/>
            <Counter initial={1}/>
            <Counter initial={5}/>  */}
        {
          [4,1,5].map( (it, idx) => <Counter initial={it} key={idx} 
          onInc={this.handleInc.bind(this)}
          ref={c => this.counters[idx] = c}/>) 
        }
        {this.state.total}
        
      </div>
    );
  }
}

export default App;
