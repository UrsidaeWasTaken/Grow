import axios from "axios"
import { useEffect, useState } from "react"
import PlantDetailPage from "../components/plant"
import NotFound from "./notFound"

function Plant({ match }) {
    const [plant, setPlant] = useState([])

    useEffect(() => {
        axios.get(
            `https://localhost:44317/api/plants/${match.params.plantId}`
        ).then(res => setPlant(res.data)
        ).catch(error => console.warn(error))
    }, [match.params.plantId])


    // Check that plant exists, else return Not Found
    return (plant ? 
        (
            <div className="PlantContainer">
                <PlantDetailPage plant={plant}/>
            </div>
        ):
            <NotFound />
        )

}

export default Plant
