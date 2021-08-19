import styled from 'styled-components'

export const CardContainer = styled.div`
    background-color: #332915;
    box-shadow: 0 .5em 1em rgba(0,0,0,0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        box-shadow: 0 .5em 1em rgba(0,0,0,0.4);
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

export const CardContent = styled.div`
    color: #f5f0e6;
    padding: 2rem;
    flex: 1;
    transition: all 0.4s ease-in-out;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: #f5f0e6;
        color: #211602;
    }
`

export const CardH3 = styled.h3`
    flex: 1;
    text-decoration: none;
    margin-bottom: 1rem;
`

export const CardP = styled.p`
    text-decoration: none;
`