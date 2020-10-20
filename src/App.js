import React, { useState } from 'react';
import Routes from "./Routes";
import './App.css';
import NavBar from "./NavBar";

function App() {
  const _token = localStorage.getItem("jobly-token");
  const [token, setToken] = useState()

  return (
    <div className="App">
      <NavBar/>
      <Routes/>
    </div>
  );
}

export default App;
