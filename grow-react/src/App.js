import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/navbar/"
import Home from './pages'
import Plants from './pages/plants'
import About from './pages/about'

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/plants' component={ Plants } />
            <Route path='/about' component={ About } />
        </Switch>
    </Router>
  );
}

export default App;
