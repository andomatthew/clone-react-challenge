import React from 'react'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import {List, ListItem, Typography} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  position: {
    position: 'relative',
    top: 400
  },
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: 0,
    margin: 0
  }
})

export default function FavoritePage() {
  
  const favorite = useSelector(state => state.favorite)
  const heroes = useSelector(state => state.heroes)
  const classes = useStyles()

  console.log(favorite, 'ini favorite dari favorite page')

  return (
    <Paper className={classes.position}>
      <h1 className={classes.header}>My Favorite Heroes</h1>
      <List className={classes.root}>
        {
          favorite.map((el, index) => <ListItem key={index}><Typography variant="h5">{el}</Typography></ListItem>)
        }
      </List>
    </Paper>
  )
}