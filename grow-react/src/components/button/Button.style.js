import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Button = styled(Link)`
    border-radius: 80px;
    background: #332915;
    white-space: nowrap;
    color: #f5f0e6;
    padding: 1em 2em;
    outline: none;
    border: none;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    transition: all 0.4s ease-in-out;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: #f5f0e6;
        color: #211602;
    }
`