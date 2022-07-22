import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Person = (props) => {
    const navigate = useNavigate();

    const { urlVar} = useParams()

    const [person, setPerson] = useState(null)


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${urlVar}`)
            .then(res => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch(err => {

                console.log(err)
                navigate("/error")

            })

    }, [])


    return (
        <div>
            {
                person ? (
                    <div>
                        <h3>Person </h3>
                        url: <p>{urlVar}</p>
                        <hr />
                        {JSON.stringify(person)}

                        <div>
                            {/*  */}
                            <h4>{person.name}</h4>
                            <p>{person.height}</p>
                            <p>{person.eye_color}</p>
                            <p>{person.gender}</p>
                            {/*  */}
                        </div>
                    </div>
                ) : <p>"loading"</p>
            }


            <h3>This will render the Person component!...</h3>
            <br />
            <hr />
            <Link to={"/"}>
                <button>Home</button>
            </Link>

        </div>
    )
}

export default Person;