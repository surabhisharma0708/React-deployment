// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   // BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link,
//   // Routes
// } from "react-router-dom";
function App() {
  //whether dark mode is enabled or not
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtil- Light Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      // document.body.style.color = 'black';
      document.title = "TextUtil- Dark Mode"
    }
  }
  return (
    <>
       
        <Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* <Routes>
              <Route exact path="about" element={<About />}/>    
              <Route exact path="/" element={<TextForm/>}/>                
          </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>

        </div>
        

        
    </>
  );
}

export default App;
