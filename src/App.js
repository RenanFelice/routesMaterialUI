import React from 'react';
import PersistentDrawerLeft from './Main'
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <PersistentDrawerLeft/>
    </div>
    </BrowserRouter>
  );
}

export default App;
