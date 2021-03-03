import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'

export default function HeroDetail() {
  let { id } = useParams()
  const [matchUp, setMatchUp] = useFetch(`https://api.opendota.com/api/heroes/${id}/matchups`)
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