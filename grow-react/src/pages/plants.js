import { useState, useEffect } from 'react';
import axios from 'axios';
import PlantList from '../components/plants';

function Plants() {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        axios.get(
            "https://localhost:44317/api/plants"
        ).then((res) => { 
            console.log(res.data)
            setPlants(res.data)
        }
        ).catch(error => console.log(error));
    }, []);

    return (
        <div>
            <PlantList plants={ plants }/>
        </div>
    );
}

export default Plants;
