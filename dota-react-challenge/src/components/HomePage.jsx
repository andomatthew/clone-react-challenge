import React from 'react';
import Navigation from './AppBar'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import HeroDetail from './HeroDetail'
import UseFetch from '../hooks/UseFetch'

export default function Heroes () {

  const [heroes, error] = UseFetch('https://api.opendota.com/api/heroes')

  return (
    <Container>
      <Navigation/>
      <Paper style={{position: 'relative', top: 200}}>
        <List>
        
        {
          error ? <h1>{error}</h1> : heroes.map(hero => <HeroDetail key={hero.id} hero={hero}></HeroDetail>)
        }
        </List>
      </Paper>
    </Container>
  )
}