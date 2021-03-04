import './App.css'
import AppBar from './components/AppBar'
import HomePage from './pages/HomePage'
import MatchUpPage from './pages/MatchUpPage'
import FavoritePage from './pages/FavoritePage'
import { Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/store'

import Container from '@material-ui/core/Container'

function App() {
  
  return (
    <Provider store={store}>
    <div className="background">
      <Container>
        <AppBar/>
        <Switch>
          <Route path='/detail/:id'>
            <MatchUpPage/>
          </Route>
          <Route path='/favorite'>
            <FavoritePage/>
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>
      </Container>
    </div>
    </Provider>
  );
}

export default App;
