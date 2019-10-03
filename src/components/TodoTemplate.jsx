import React from "react";
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import VisibilityFilters from "./VisibilityFilters"
import "./styles.css"

const TodoTemplate = ({ todos, activeFilter, addTodo, setFilter, toggleTodo }) => (
    <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <VisibilityFilters activeFilter={activeFilter} setFilter={setFilter}/>
    </div>
)

export default TodoTemplate