import React, { useState, useEffect } from "react";
import { Link,useParams } from 'react-router-dom';
import axios from "axios";


const Planets = (props) => {
    const {urlVar,num} = useParams()

    const [planets, setPlanets] = useState(null);

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/${urlVar}/")
        .then(res => {
            console.log(res.data);
            setPlanets(res.data);
        })
        .catch(err => console.log(err))

    },[])

    return (
        <div>
            <h3>This will render the Planets component</h3>
            <br />
            <hr />
            <Link to={"/"}>
                <button>Home</button>
            </Link>
            <br />
            <hr />
            {JSON.stringify(planets)}

            {/*  */}
            <h4>{planets.name}</h4>
            <p>{planets.rotation_period}</p>
            <p>{planets.climate}</p>
            <p>{planets.terrain}</p>
            {/*  */}



        </div>

    )
}

export default Planets