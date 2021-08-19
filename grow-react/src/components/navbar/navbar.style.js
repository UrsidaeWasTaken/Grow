import styled from 'styled-components'
import { FaBars, FaSearch } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #211602;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 99;
`

export const NavLink = styled(Link)`
    color: #f5f0e6;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;

    &.active {
    color: #f5f0e6;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #211602;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  width: 100vw;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Search = styled(FaSearch)`

`