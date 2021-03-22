import React from 'react';
//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'

//react-router
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  search: {
    display: 'flex',
    alignItems: 'center'
  }
})

export default function Navigation() {
  const classes = useStyles()
  return(
    <React.Fragment>
      <AppBar
        className={classes.root}
      >
        <Toolbar style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <Link to="/">
            <Button>
              <h3 button>Home</h3>
            </Button>
          </Link>
          <div className={classes.search}>
            <SearchIcon/>
            <InputBase placeholder="Search..."></InputBase>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}