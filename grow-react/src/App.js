import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/navbar/"
import Home from './pages'
import Plant from "./pages/plant"
import Plants from './pages/plants'
import About from './pages/about'

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path="/plant/:plantId" component={ Plant } />
            <Route exact path='/plants' component={ Plants } />
            <Route exact path='/about' component={ About } />
        </Switch>
    </Router>
  );
}

export default App;
