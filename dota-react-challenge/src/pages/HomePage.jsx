import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

//material-ui
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

//components

import HeroDetail from '../components/HeroDetail'
import useFetch  from '../hooks/useFetch'


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
  
  const [heroes, error, loading] = useFetch()
  const classes = useStyles()

 
  return (
      <Paper className={classes.position}>
        
        <List
          className={classes.root}
        >
        {
          loading ? <h1>Loading...</h1> : (error ? <h1>{error}</h1> : heroes.map(hero => <HeroDetail key={hero.id} hero={hero}></HeroDetail>))
        }
        </List>
      </Paper>
   
  )
}