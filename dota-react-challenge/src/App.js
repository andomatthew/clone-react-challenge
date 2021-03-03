import './App.css'
import AppBar from './components/AppBar'
import HomePage from './pages/HomePage'
import MatchUpPage from './pages/MatchUpPage'
import { Switch, Route } from 'react-router-dom'

import Container from '@material-ui/core/Container'

function App() {
  
  return (
    <div className="background">
      <Container>
        <AppBar/>
        <Switch>
          <Route path='/detail/:id'>
            <MatchUpPage/>
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
