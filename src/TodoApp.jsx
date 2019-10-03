import React from "react";
import TodoContainer from "./containers/TodoContainer";
import { connect } from "react-redux";
import { addTodo, setFilter, toggleTodo } from "./redux/actions";
import { getTodosByVisibilityFilter } from "./redux/selectors";

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    const activeFilter = visibilityFilter;
    return { todos, activeFilter };
};
    
const TodoApp = props => {
    const { addTodo, ...rest } = props;
    return (<TodoContainer addTodo={input => addTodo(input)} {...rest} />);
}

export default connect( mapStateToProps, { addTodo, setFilter, toggleTodo } )(TodoApp);