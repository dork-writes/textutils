import "./App.css";
import "./index.css"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import Alert from "./components/Alert";
import React, { useState } from 'react'

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = function(message, type)
  {
    setAlert({msg: message, type: type});
    setTimeout(()=>
    {
      setAlert(null);
    },1500);
  }

  return (
    <>
      <Navbar title = "TextUtils"/>
      <Alert alert = {alert} />
      <br/>
      <Routes>
        <Route path = "/textutils" element = {<TextForm alert = {showAlert}/>} />
      </Routes>
    </>
  );
}

export default App;
