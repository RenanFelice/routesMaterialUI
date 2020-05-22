import React, { useContext } from 'react';
import '../styles/Sidebar.css'
import '../context/JokeContext'
import { JokeContext } from '../context/JokeContext';



const Sidebar = () => {
    const { fetchJoke } = useContext(JokeContext)
    return (
        <div className='Sidebar'>
            <i className="far fa-grin-squint-tears"></i>
            <button onClick={e => {
                e.preventDefault()
                fetchJoke()
            }
            }>Fetch Joke</button>
        </div>

    );
}

export default Sidebar;