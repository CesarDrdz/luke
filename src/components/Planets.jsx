import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";


const Planets = (props) => {
    const { urlVar } = useParams()
    console.log(urlVar);

    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${urlVar}`)
            .then(res => {
                console.log(res.data);
                setPlanet(res.data);
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div>
            {/* {/* <h3>This will render the Planets component</h3> */}
            <br />
            <Link to={"/"}>
                <button>Home</button>
            </Link>
            <br />
            <hr /> 
            {/* {JSON.stringify(planet)} */}

            {/*  */}
            {
                planet ? (
                    <div>

                        <h4>{planet.name}</h4>
                        <p>{planet.rotation_period}</p>
                        <p>{planet.climate}</p>
                        <p>{planet.terrain}</p>
                        {/*  */}
                    </div>


                ) : <p>Loading...</p>
            }



        </div>

    )
}

export default Planets