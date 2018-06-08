import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inc, reset, incWithDelay, accumulate, accPush } from './actions';

class CounterBar extends Component {
  render() {
    return (
      <div>
          <button onClick={this.props.inc}>Click</button>
          <button onClick={this.props.incWithDelay}>IncWithDelay</button>
          <button onClick={this.props.reset}>Reset</button>
          <button onClick={this.props.accumulate}>Accumulate</button>
          <button onClick={this.props.accPush}>Push</button>
          
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        incWithDelay: () => dispatch(incWithDelay()),
        reset: () => dispatch(reset()),
        accumulate: () => dispatch(accumulate()),
        accPush: () => dispatch(accPush())
    }
}

export default connect(null, mapDispatchToProps)(CounterBar);
