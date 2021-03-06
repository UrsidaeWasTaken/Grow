import Card from "../card"
import { PlantListContainer, PageHeader } from "./plants.style"

function PlantList({ plants }) {
    return (
        <>
            <PageHeader>All Plants</PageHeader>
            <PlantListContainer>
                {plants.map(plant => {
                    return(
                        <Card
                            key={ plant.id }
                            name={ plant.name }
                            price={ plant.price }
                            imageUrl={ plant.imageUrl }
                            routeUrl={ `/plant/${ plant.id }` }
                        />
                    )
                })}
            </PlantListContainer>
        </>
    )
}

export default PlantList
