import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*function Counter(){
  return (
    <div>
      2
    </div>
  )
}*/

/* Arrow Function and Props 
const Counter = (props) => (
  <div>
    {props.val}
  </div>
)

const Counter = ({val}) => (
  <div>
    {val}
  </div>
)
*/

// Functional Component
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {val: props.initial, incBy: 1}
    this.inc = this.inc.bind(this)
    this.handleIncChange = this.handleIncChange.bind(this)
  }

  /*componentDidMount() {
    let self = this;
    setInterval( function() {
      self.setState({val: self.state.val + 1});
      console.log(self.state.val);
    }, 1000)
  }*/

  inc() {
    // this.setState({val: this.state.val + parseInt(this.incByInput.value)})
    // console.log(this.state.incBy)
    if (this.state.incBy !== "")
        this.setState({val: this.state.val + parseInt(this.state.incBy, 10)}, () => {
            if (this.props.onInc())
              this.props.onInc()
        })
  }

  handleIncChange(event) {
    this.setState({incBy: event.target.value})
  }

  render() {
    return (
      <div>
        {/* this.state.val */}
        {this.state.val} 
        {/* <input type="number" defaultValue={1} ref={input => this.incByInput = input}/> */}
        <input type="number" value={this.state.incBy} onChange={this.handleIncChange} />
        <button onClick={this.inc}> Click </button>
      </div>
    )
  }

}

Counter.propTypes = {
    initial: PropTypes.number
}

export default Counter;
