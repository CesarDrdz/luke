import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
// import Planets from "./Planets";
// import Person from "./Person";

const Form = (props) => {
    // this is the state var for the option tag 
    // if its not defined IT'S NOT GONNA HAPPEN 
    const [selected, setSelected] = useState("planet");
    const [selectedId, setSelectedId] = useState(1)
    const navigate =useNavigate();


// on the event handler we have to get the selected value we want to return and the routes when changing to a new component MUST MATCH!!
    const submitHandler = (e) => {
        e.preventDefault();
        if (selected === "person"){
            navigate("/person/" + selectedId)
        }else if (selected === "planet"){
            navigate("/planets/" + selectedId)

        } 
    }


    return (

        <div>
            <br />
            <fieldset>
                <form onSubmit={submitHandler}>
                    <label htmlFor="">
                        Search for: </label>
                    <select value={selected} onChange={e => setSelected(e.target.value)} >
{/* slecting the value needs to be set to to the value you want by maaking a const  */}
                        <option value={"person"}>Person</option>
                        <option value={"planet"}>Planet</option>
                    </select>
                    <label>ID:</label>
                    <input type="number"  value={selectedId} onChange={e => setSelectedId(e.target.value)} />
                    <br />
                    <button>Search The Force!</button>
                </form>
            </fieldset>
            <nav>
                <h3>This is also the HOME/Main Route page</h3>
                <Link to={"/"}>
                    <button>Home</button>
                </Link>
            </nav>
            {JSON.stringify(selected)}
            <br />
            {JSON.stringify(selectedId)}

        </div>
    )
}

export default Form;