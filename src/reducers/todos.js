import { ADD_TODO, TOGGLE_TODO } from '../actions/types'

const initialState = {
    allIds: [],
    byIds: {}
}

const addTodo = (state, action) => {
    const { id, content } = action.payload
    return {
        ...state,
        allIds: [...state.allIds, id],
            byIds: {
                ...state.byIds,
                [id]: {
                    content,
                    completed: false
                }
            }
        }
}

const toggleTodo = (state, action) => {
    const { id } = action.payload
    return {
            ...state,
            byIds: {
                ...state.byIds,
                [id]: {
                ...state.byIds[id],
                completed: !state.byIds[id].completed
                }
            }
        }
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: 
            return addTodo(state, action)
        case TOGGLE_TODO: 
            return toggleTodo(state, action)
        default:
            return state
    }
}

export default todos