import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/'
import Sidebar from './components/sidebar'
import Home from './pages'
import Plant from './pages/plant'
import Plants from './pages/plants'
import About from './pages/about'
import NotFound from './pages/notFound'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen)
    }

    return (
    <Router>
        <Sidebar isOpen={ isOpen } toggle={ toggle } />
        <Navbar toggle={ toggle }/>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path="/plant/:plantId" component={ Plant } />
            <Route exact path='/plants' component={ Plants } />
            <Route exact path='/about' component={ About } />
            <Route path='' component={ NotFound }/>
        </Switch>
    </Router>
  );
}

export default App;
