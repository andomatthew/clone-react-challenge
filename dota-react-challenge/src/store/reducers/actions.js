export function addToFavorite(payload) {
  return (dispatch) => {
    dispatch({ type: 'FAVORITE/ADDFAVORITE', payload })
  }
}


export function setHeroes(payload) {
  console.log('masuk di setHeroes action')
  return ({type: 'HEROES/FETCHHEROES', payload})
}
