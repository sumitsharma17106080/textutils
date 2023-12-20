
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode", "warning");
      document.title = "TextUtils-Light"
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode", "success");
      document.title = "TextUtils-Dark"
    }
  }
  const [alert, setAlert] = useState(null);

  const showAlert = (mesaage, type) => {
    setAlert({ msg: mesaage, ty: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const [theme, setTheme] = useState(null);

  const themeF = (c) => {

    setTheme(c);
    document.body.style.backgroundColor = c;

  }
  return (
    <>
      <BrowserRouter>
      
        <Navbar title="My-APP2" mode={mode} theme={themeF} toggleMode={toggleMode} />
        <Alert alertMessage={alert} />
        <Routes>
          <Route path='about'
            element={<About />}>
          </Route>
          <Route path='/'
          element={<TextForm heading="Enter the Text for Changes" mode={mode} showAlert={showAlert} />}>
          </Route>
         
        </Routes>

      </BrowserRouter>
      
         
    </>
  );
}

export default App;
