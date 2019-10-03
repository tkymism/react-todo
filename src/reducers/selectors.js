import { VISIBILITY_FILTERS } from '../constants'

const todos = store => store.todos

const getTodoList = store =>
    todos(store) ? todos(store).allIds : []

const getTodoById = (store, id) =>
    todos(store) ? { ...todos(store).byIds[id], id } : {}

const getTodos = store =>
    getTodoList(store).map(id => getTodoById(store, id))

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store)
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed)
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed)
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos
    }
}