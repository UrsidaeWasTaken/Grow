import { Container, ContentSection, ImageWrapper, PlantDescription, PlantImage, PlantName, PlantPrice } from "./plant.style"

function PlantDetailPage({ plant }) {
    plant.price = parseFloat(plant.price).toFixed(2)

    return (
        <>
            <Container>
                <ImageWrapper>
                    <PlantImage backgroundImage={ plant.imageUrl }/>
                </ImageWrapper>
                <ContentSection>
                    <PlantName>{ plant.name }</PlantName>
                    <PlantPrice>£{ plant.price }</PlantPrice>
                    <hr/>
                    <PlantDescription>{ plant.description }</PlantDescription>
                </ContentSection>
            </Container>
        </>
    )
}

export default PlantDetailPage
