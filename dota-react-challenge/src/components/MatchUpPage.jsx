import React from 'react'
import UseFetch from '../hooks/UseFetch'

export default function HeroDetail(props) {

  const [matchUp, setMatchUp] = UseFetch('https://api.opendota.com/api/heroes/1/matchups')

  return (
    <div style={{position: 'relative', top: 100}}>
      <h1 style={{textAlign: 'center'}}>Hello</h1>
      <ul>
        {
          matchUp.map((el, index) => <li key={index}>{JSON.stringify(el)}</li>)
        }
      </ul>
    </div>
  )
}