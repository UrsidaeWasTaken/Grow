import styled from 'styled-components'

export const PlantListContainer = styled.div`
    display: grid;
    margin: 2em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`

export const PageHeader = styled.h1`
    margin-top: 1em;
    text-align: center;
    color: #f5f0e6;
`