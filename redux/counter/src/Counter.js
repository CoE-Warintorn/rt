import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  state = {green: false}

  componentWillReceiveProps(nextProps){
    if(nextProps.val > this.props.val){
      this.setState({green: true})
    }
  }

  componentDidUpdate(){
    if(this.state.green){
      if(this.__preTimeout){
        clearTimeout(this.__preTimeout)
      }
      this.__preTimeout = setTimeout(() => this.setState({green: false}), 2000)
    }
  }

  render() {
    return (
      <div style={{color: this.state.green? 'green': 'black'}}>
        {this.props.val}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {val: state.val}
}

export default connect(mapStateToProps)(Counter);
