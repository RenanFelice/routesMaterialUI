import React, {useState, createContext} from 'react';

export const JokeContext = createContext();

const JokeProvider = (props) => {
    const [joke, setJoke] = useState([])

    const fetchJoke = async () => {
        await fetch('https://icanhazdadjoke.com/', {headers: {
            "Accept" : "application/json" 
          }})
        .then(resp => resp.json())
        .then(data => setJoke([...joke, data]))         
    }

    const deleteJoke = id => {
       setJoke(joke.filter(joke => joke.id !== id)) 
    }

    return ( 
        <JokeContext.Provider value={{joke, fetchJoke, deleteJoke}}>
            {props.children}
        </JokeContext.Provider>
    );
}
 
export default JokeProvider;