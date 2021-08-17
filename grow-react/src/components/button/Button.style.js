import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Button = styled(Link)`
    border-radius: 50px;
    background: #211602;
    white-space: nowrap;
    color: #f5f0e6;
    padding: 14px 48px;
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