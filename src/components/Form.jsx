import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'

const Form = (props) => {




    return (

        <div>
            <br />
            <fieldset>

                <form action="input" flex>
                    <label htmlFor="">
                        Search for: </label>
                    <select name="" id="">
                        <option value="person">Person</option>
                        <option value="planet">Planet</option>
                    </select>
                    <label>ID:</label>
                    <input type="number" placeholder='0' />
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

        </div>
    )
}

export default Form;