import React from 'react'
import TodoTemplate from '../components/TodoTemplate'
import { connect } from 'react-redux'
import { addTodo, setFilter, toggleTodo } from '../actions/actions'
import { getTodosByVisibilityFilter } from '../reducers/selectors'

const mapStateToProps = state => {
    const { visibilityFilter } = state
    const todos = getTodosByVisibilityFilter(state, visibilityFilter)
    const activeFilter = visibilityFilter
    return { todos, activeFilter }
}
    
const TodoPage = ({addTodo, ...rest}) => 
    <TodoTemplate addTodo={ input => addTodo(input) } {...rest} />

export default connect( mapStateToProps, { addTodo, setFilter, toggleTodo } )(TodoPage)