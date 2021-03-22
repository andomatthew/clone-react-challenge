export function addToFavorite(payload) {
  console.log('masuk actions', payload)
  return {
    type: 'FAVORITE/ADDFAVORITE',
    payload
  }
}