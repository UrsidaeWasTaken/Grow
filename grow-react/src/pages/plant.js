import axios from "axios"
import { useEffect, useState } from "react"
import PlantDetailPage from "../components/plant"

function Plant({ match }) {
    const [plant, setPlant] = useState([])

    useEffect(() => {
        axios.get(
            `https://localhost:44317/api/plants/${match.params.plantId}`
        ).then(res => setPlant(res.data)
        ).catch(error => console.warn(error))
    }, [match.params.plantId])

    return (
        <div className="PlantContainer">
            <PlantDetailPage plant={plant}/>
        </div>
    )
}

export default Plant
