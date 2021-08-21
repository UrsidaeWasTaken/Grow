import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 2em 15em;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: normal;
        margin: auto;
    }
`

export const ImageWrapper = styled.div`
    width: 50%;
    padding: 2em;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
    }
`

export const PlantImage = styled.div`
    width: 100%;
    height: 50em;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.backgroundImage});

    @media screen and (max-width: 768px) {
        height: 28em;
    }
`

export const ContentSection = styled.section`
    width: 50%;
    padding: 2em;

    @media screen and (max-width: 768px) {
        width: 100%
    }
`

export const PlantName = styled.h1`
    font-size: 2.2em;
` 

export const PlantPrice = styled.p`
    font-size: 1.3em;
    text-decoration: none;
    margin-bottom: 1em;
`

export const PlantDescription = styled.p`
    margin-top: 1em;
    font-size: 1.2em;
    line-height: 1.6;
`