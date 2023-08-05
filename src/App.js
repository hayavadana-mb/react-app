import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Aboutus from './components/Aboutus';
import React from 'react'
import Alert from './components/Alert'
// import {
//   BrowserRouter,

//   Route,
  
//   Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
   setAlert({ msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);


  }
  


  const tooglemode =()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#0052a5';
    showAlert("dark mode has been enabled","success")
  }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success")
    }
  } 


  
  return (
 
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mainpage="Home" aboutText="Aboutus" mode={mode} tm={tooglemode}/>
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <TextForm showAlert={showAlert} heading="Enter Text to analyze "mode={mode}/>      
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<Aboutus />}></Route> */}
          {/* <Route exact path="/" element={}> */}
             {/* </Route> */}
             {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
  </>
  );
}

export default App;
