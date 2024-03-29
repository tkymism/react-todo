import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
  <ul className='todo-list'>
    {todos && todos.length ? todos.map((todo, index) => {
      return <Todo key={`todo-${todo.id}`} todo={todo} toggleTodo={toggleTodo} />
      })
      : 'No todos, yay!'}
  </ul>
)

export default TodoList