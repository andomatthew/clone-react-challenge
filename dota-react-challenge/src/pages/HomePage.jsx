import React from 'react';

//material-ui
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

//components

import HeroDetail from '../components/HeroDetail'
import UseFetch from '../hooks/UseFetch'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  position: {
    position: 'relative',
    top: 800
  }
})

export default function Heroes () {
  const classes = useStyles()
  const [heroes, error] = UseFetch('https://api.opendota.com/api/heroes')

  return (
      <Paper className={classes.position}>
        <List
          className={classes.root}
        >
        {
          error ? <h1>{error}</h1> : heroes.map(hero => <HeroDetail key={hero.id} hero={hero}></HeroDetail>)
        }
        </List>
      </Paper>
   
  )
}