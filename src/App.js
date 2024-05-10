import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Routes from './Services/Router'; 

function App() {
  return (
    <Router> 
        <Routes />
    </Router>
  );
}

export default App;

