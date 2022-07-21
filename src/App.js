import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import Form from "./components/Form";
import Person from "./components/Person";
import Planets from "./components/Planets";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">

      {/* The nav and fieldset are just to have a point of refference and to test my links */}
      <nav>
        <fieldset>
          <Link to={"/Form"}>Form</Link>
          <br />
          
          <Link to={"/Person"}>Person</Link>
          <br />
          
          <Link to={"/Planets"}>Planets</Link>
        </fieldset>

      </nav>

      <Routes>
        <Route path="/form" element={<Form/>}/>
        <Route path="/person/:urlVal/:num" element={<Person/>}/>
        <Route path="/planets/:urlVal/:num" element={<Planets/>}/>
        <Route path="/error" element={<Error/>}/>

      </Routes>
    </div>
  );
}

export default App;
