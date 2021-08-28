import {
    Nav,
    MobileIcon,
    NavLink,
    NavMenu,
  } from './navbar.style';
import { FaBars } from 'react-icons/fa'

function Navbar({ toggle }) {
    return (
        <Nav>
            <NavLink to="/">
                <h1>GROW</h1>
            </NavLink>
            <MobileIcon onClick={ toggle }>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavLink to="/plants">Plants</NavLink>
                <NavLink to="/about">About</NavLink>
            </NavMenu>
        </Nav>
    )
}

export default Navbar
