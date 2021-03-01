import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function NestedList(props) {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const setRoles = () => {
    let roles = ''
    props.hero.roles.forEach(el => {
      roles += el + ', '
    })
    return roles
  }

  return (
    <List component="nav">
      <ListItem divider button onClick={handleClick}>
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemText primary={props.hero.localized_name} />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <ListItemText> Primary attribute: {props.hero.primary_attr}</ListItemText>
            <ListItemText> Attack Type: {props.hero.attack_type}</ListItemText>
            <ListItemText> Roles: {setRoles()}</ListItemText>
            <ListItemText> Legs: {props.hero.legs}</ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}