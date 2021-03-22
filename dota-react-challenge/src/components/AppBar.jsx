import React from 'react';
//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
})



export default function Navigation() {
  const classes = useStyles()
  return(
    <React.Fragment>
      <AppBar
        className={classes.root}
      >
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography><h3>List of Heroes</h3></Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}