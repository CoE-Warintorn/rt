import React, {Component} from 'react';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../actions';
import { createSelector } from 'reselect';

/* class VisibleTodoList extends Component {
    render(){
        return <TodoList {...this.props}/>
    }
} */

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

const todosSelector = (state) => state.todos
const visibilityFilterSelector = (state) => state.visibilityFilter
const getVisibleTodosSelector = createSelector([todosSelector, visibilityFilterSelector],
    (todos, visibilityFilter) => getVisibleTodos(todos, visibilityFilter)
)

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})

// export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);