import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import {Routes, Route } from "react-router-dom";
import PageNotFount from "./Components/PageNotFount";

function App() {
  const [mode, setMode] = useState ("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message , type) =>{
    setAlert({
      message : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#2d2c2c';
      showAlert('Dark mode has been enabled' , 'success')
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert('Light mode has been enabled' , 'success')
    }
  }
  return (
    <>
    <Navbar title = "Txtmodi" mode ={mode} toggleMode ={toggleMode} />
    <Alert alert = {alert}/>
    <div className="container my-2">
      <Routes>
        <Route exact path="/" element={<Textform heading ="Enter your Text" mode ={mode} showAlert={showAlert}/>}/>
        <Route exact path="/about" element={<About mode ={mode} />}/>
        <Route exact path="*" element={<PageNotFount/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
