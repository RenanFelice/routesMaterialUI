import React, { useContext } from 'react';
import Joke from './Joke';
import '../styles/JokeList.css'
import { JokeContext } from '../context/JokeContext'

const JokeList = () => {
    const { joke } = useContext(JokeContext)
    return (
        <div className='JokeList'>
            {joke.length !== 0 ? joke.map(j => <Joke key={j.id} id={j.id} joke={j.joke} />) : 
            <div className='JokeList-noJokes'>
            <i className="far fa-sad-cry"></i>
            <p>No jokes yet...</p>
            </div>}
        </div>

    );
}

export default JokeList;