import React from 'react'
import ReactDOM from 'react-dom'
import TodoPage from './containers/TodoPage'
import { Provider } from 'react-redux'
import store from './store'

const rootElement = document.getElementById('root')
const Application = () => <Provider store={store}><TodoPage/></Provider>
ReactDOM.render(<Application /> , rootElement)