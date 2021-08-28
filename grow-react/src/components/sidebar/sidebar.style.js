import styled from'styled-components'
import { FaTimes } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'

export const SidebarContainer = styled.div`
    position: fixed;
    background: #332915;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3 ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%': '0')};
    top: ${({isOpen}) => (isOpen ? '0': '-100%')};
`

export const SidebarWrapper = styled.div`
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    font-size: 1.5rem;
    list-style: none;
    text-decoration: none;
    transition: all 0.2 ease-in-out;
    color: #f5f0e6;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #f5f0e6;
        color: #211602;
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #f5f0e6;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`