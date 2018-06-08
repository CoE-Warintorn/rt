import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';

class AddOrDeleteTodo extends Component {
    submitAddTodo = (e) => {
        e.preventDefault()
        if(!this.input.value.trim())
            return
        this.props.addTodo(this.input.value)
        this.input.value = ''
    }
    submitDeleteTodo = (e) => {
        e.preventDefault()
        if(!this.input.value.trim())
            return
        this.props.deleteTodo(this.input.value)
        this.input.value = ''
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submitAddTodo}>
                    <input ref={node => this.input = node}/>
                    <button type="submit">ADD</button>
                </form>
                
                <form onSubmit={this.submitDeleteTodo}>
                    <input ref={node => this.input = node}/>
                    <button type="submit">DELETE</button>
                </form>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text)),
    deleteTodo: (text) => dispatch(deleteTodo(text))
})

export default connect(null, mapDispatchToProps)(AddOrDeleteTodo);