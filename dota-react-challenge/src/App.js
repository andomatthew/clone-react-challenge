import './App.css'
import HomePage from './components/HomePage'
import Navigation from './components/AppBar'

import Container from '@material-ui/core/Container'

function App() {
  return (
    <div className="background">
      <Container>
        <Navigation/>
        <HomePage/>
      </Container>
    </div>
  );
}

export default App;
