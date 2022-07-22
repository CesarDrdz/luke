import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import axios from 'axios';
// axios wasnt needed here because the api is defined in the components.
import Form from "./components/Form";
import Person from "./components/Person";
import Planets from "./components/Planets";
import Error from "./components/Error";
// See how some if not most of the imports are not being used this is an example of what not to add when trying to render just a component. Only use what is needed.
function App() {
  return (
    <div className="App">

      {/* The nav and fieldset are just to have a point of refference and to test my links */}
      <nav>
        <fieldset>
          <Link to={"/Form"}>Form</Link>
        </fieldset>

      </nav>

      <Routes>
        <Route path="/form" element={<Form/>}/>
        <Route path="/person/:urlVar" element={<Person/>}/>
        <Route path="/planets/:urlVar" element={<Planets/>}/>
        <Route path="/error" element={<Error/>}/>

      </Routes>
    </div>
  );
}

export default App;
