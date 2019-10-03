import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import VisibilityFilters from "../components/VisibilityFilters";
import "./styles.css";

const TodoContainer = ({ todos, activeFilter, addTodo, setFilter, toggleTodo }) => (
    <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <VisibilityFilters activeFilter={activeFilter} setFilter={setFilter}/>
    </div>
)

export default TodoContainer;