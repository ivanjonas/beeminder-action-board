import { createStore, combineReducers } from 'redux'
import incrementReducer from '../reducers/increments'

const configureStore = () => {
  const store = createStore(
    combineReducers({
      increments: incrementReducer
    })
  )

  return store
}

export { configureStore }
