import React, { useState, useEffect } from 'react';
import Routes from "./Routes";
import { decode } from "jsonwebtoken";
import './App.css';
import NavBar from "./NavBar";
import JoblyApi from './JoblyApi';
import UserContext from "./UserContext";

function App() {
  const [token, setToken] = useState(localStorage.getItem("jobly-token"));
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser ,setCurrentUser] = useState(null);
    
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { username } = decode(token);
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser(currentUser);
      } catch(e) {
        setCurrentUser(null);
      }
      setInfoLoaded(true);
    };
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  const handleLogOut = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("jobly-token");
  };

  if (!infoLoaded) {
    return (
      <p>Content is loading!</p>
    )
  }

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser, setToken}}>
    <div className="App">
      <NavBar handleLogOut={handleLogOut}/>
      <Routes/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
