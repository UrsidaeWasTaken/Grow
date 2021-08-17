import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
  } from './navbar.style';

function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>GROW</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/plants" activeStyle>
                        Plants
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
