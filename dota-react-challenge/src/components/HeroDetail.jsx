import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addToFavorite } from '../store/reducers/actions'


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  } 
})

export default function NestedList(props) {
  
  const dispatch = useDispatch()
  const history = useHistory()
  
  const classes = useStyles()


  const [open, setOpen] = React.useState(false)


  const matchUpButton =() => {
    history.push(`/detail/${props.hero.id}`)
  }

  
  const handleAddToFavorite = () => {
    dispatch(addToFavorite(props.hero.localized_name))
  }

  const handleClick = () => {
    setOpen(!open);
  };

  const setRoles = () => {
    return props.hero.roles.join(', ')
  }

  return (
    <List component="nav">
      <ListItem divider button onClick={handleClick}>
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemText><Typography variant="h5">{props.hero.localized_name}</Typography></ListItemText>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem divider className={classes.root}>
            <ListItemText>
              <Typography variant="h6">Primary Attribute: {props.hero.primary_attr}</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h6">Attack Type: {props.hero.attack_type}</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h6">Roles: {setRoles()}</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h6">Legs: {props.hero.legs}</Typography>
            </ListItemText>
              <Button color="primary" onClick={matchUpButton}>Match Up</Button>
              <Button color="primary" onClick={handleAddToFavorite}>Add to My Favorite</Button>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}