import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { configureStore } from './store/configureStore'
import './styles/index.scss'

import { addIncrement } from './actions/increments'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

store.dispatch(addIncrement(50))

console.log(store.getState())
