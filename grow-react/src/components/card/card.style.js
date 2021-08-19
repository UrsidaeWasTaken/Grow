import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const CardContent = styled.div`
    color: #f5f0e6;
    padding: 2rem;
    flex: 1;
    transition: all 0.4s ease-in-out;
`
export const CardContainer = styled.div`
    background-color: #332915;
    box-shadow: 0 .5em 1em rgba(0,0,0,0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        box-shadow: 0 .5em 1em rgba(0,0,0,0.3);
    }

    &:hover ${CardContent} {
        transition: all 0.4s ease-in-out;
        background: #f5f0e6;
        color: #211602;
    }
`

export const CardImage = styled.div`
    width: 100%;
    height: 28em;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.backgroundImage});
`

export const CardH3 = styled.h3`
    flex: 1;
    margin-bottom: 1rem;
`

export const CardLink = styled(Link)`
    text-decoration: none;
`

export const CardP = styled.p`
`