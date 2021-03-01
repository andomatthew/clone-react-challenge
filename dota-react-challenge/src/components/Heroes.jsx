import React, { Component } from 'react';
import Navigation from './AppBar'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import HeroesList from './ListHeroes'

class Heroes extends Component {
  
  state = { 
    heroes: []
   }

  render() { 
    return ( 
      <Container>
      <Navigation/>
      <Paper style={{position: 'relative', top: 50}}>
        <div>
          <List>
            {
              this.state.heroes.map(hero =>
              <HeroesList key={ hero.id } hero={hero} />)
            }
          </List>
        </div>
      </Paper>
    </Container>

    );
  }

  getData = () => {
    fetch('https://api.opendota.com/api/heroes')
    .then(response => response.json())
    .then(data => this.setState({
      heroes: data
    }))
  }

  componentDidMount () {
    this.getData()
  }
}
 
export default Heroes;