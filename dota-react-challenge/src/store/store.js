import { createStore  } from 'redux'

const initialState = {
  favorite: []
}

function reducer(state = initialState, action) {
  console.log('masuk store', state)
  switch(action.type) {
    case 'FAVORITE/ADDFAVORITE':
      let a = {...state}
      console.log(a, 'hasil clone')
      a.favorite.push(action.payload)
      console.log(a, 'hasil clone yang di tambah data')
      return a
    default:
      return state
  }
}

const store = createStore(reducer)

export default store