import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'




export default function Navigation() {

  return(
    <React.Fragment>
      <AppBar>
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