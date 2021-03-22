import React from 'react'
import useFetch from '../hooks/useFetch'
import useFetchMatch from '../hooks/useFetchMatch'
import { useParams } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, Typography} from '@material-ui/core'

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
    margin: 0,
    textAlign: 'center'
  }
})

export default function HeroDetail() {
  let { id } = useParams()
  const classes = useStyles()
  const [heroes, loadingFetch] = useFetch()
  const [matchUp, loadingMatch] = useFetchMatch(id)
  let heroName

  try {
    const filtered = heroes.filter(el => el.id === +id)  
    let selected = filtered[0]
    heroName = selected.localized_name

    const test = heroes.filter((el) => matchUp.includes(el))

  } catch (error) {
    
  }

  return (
    <Paper className={[classes.root, classes.position]}>
      <h1 className={classes.header}>Match Up Data</h1>
      <h2 className={classes.header}>{heroName}</h2>
      <List >
        {
          matchUp.map((el, index) => <ListItem key={index}>{JSON.stringify(el)}</ListItem>)
        }
      </List>
    </Paper>
  )
}