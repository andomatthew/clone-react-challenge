import { createStore, combineReducers, applyMiddleware } from 'redux'
// import semua reducer yang sudah dipisah
import heroesReducer from './heroes'
import favoriteReducer from './favorite'

import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  heroes: heroesReducer,
  favorite: favoriteReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store