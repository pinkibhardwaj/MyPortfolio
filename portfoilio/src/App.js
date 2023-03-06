import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import Proficiencies from './components/Proficiencies'
import Projects from './components/Projects'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <HomePage/>
        <hr></hr>
        <Proficiencies/>
        <Projects/>
      </div>

    </BrowserRouter>
  );
}

export default App;
