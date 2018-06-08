import React, { Component } from 'react';
import VisibleTodoList from './containers/VisibleTodoList';
import VisibilityFilterBar from './components/VisibilityFilterBar';
import AddTodo from './containers/AddTodo';
import AddOrDeleteTodo from './containers/AddOrDeleteTodo';

class App extends Component {
  render() {
    return (
      <div>
        <VisibleTodoList/>
        <VisibilityFilterBar/>
        <AddOrDeleteTodo/>
      </div>
    );
  }
}

export default App;
