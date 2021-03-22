
const initialState = {
  heroes: [],
  error: null,
  loading: false
}

function reducer(state = initialState, action) {
  console.log('reducer')
  switch(action.type) {
    case 'HEROES/FETCHHEROES':
      let newHeroes = { ...state }
      console.log(newHeroes, 'ini newHeroes')
      console.log(action.payload, '-=-=-=--=-=')
      return newHeroes.heroes 
    default:
      return state
  }
}

export default reducer