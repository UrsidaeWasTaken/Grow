import axios from 'axios';
import { useState, useEffect } from 'react';
import PlantList from '../components/plants';

function Plants() {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        axios.get(
            "https://localhost:44317/api/plants"
        ).then(res => setPlants(res.data)
        ).catch(error => console.warn(error));
    }, []);

    return (
        <div className="PlantListContainer">
            <PlantList plants={ plants }/>
        </div>
    );
}

export default Plants;
