import React from 'react';
import JokeList from './components/JokeList'
import Sidebar from './components/Sidebar'
import './styles/DadJokesApp.css';
import JokeProvider from './context/JokeContext'

function DadJokeApp() {
  return (
    <div className="DadJokeApp">
      <JokeProvider>
        <Sidebar />
        <JokeList />
      </JokeProvider>
    </div>
  );
}

export default DadJokeApp;
