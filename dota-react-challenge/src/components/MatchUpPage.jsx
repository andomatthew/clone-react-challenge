import React from 'react'
import UseFetch from '../hooks/UseFetch'

import Paper from '@material-ui/core/Paper'

export default function HeroDetail(props) {

  const [matchUp, setMatchUp] = UseFetch('https://api.opendota.com/api/heroes/1/matchups')

  return (
    <Paper style={{position: 'relative', top: 100}}>
      <h1 style={{textAlign: 'center'}}>Hello</h1>
      <ul>
        {
          matchUp.map((el, index) => <li key={index}>{el.hero_id}</li>)
        }
      </ul>
    </Paper>
  )
}