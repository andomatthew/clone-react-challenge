
const initialState = {
  favorite: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FAVORITE/ADDFAVORITE':
      let newFavorite = { ...state }
      newFavorite.favorite.push(action.payload)
      return newFavorite
    default:
      return state
  }
}

export default reducer