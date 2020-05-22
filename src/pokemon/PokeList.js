import React, {useState, useEffect} from 'react';
import PokeCard from './PokeCard'

const Poke = () => {
    const [poke, setPoke] = useState()

    const [url, setUrl] = useState('bulbasaur')

    useEffect(() => {
        async function fetchPoke (url){
            try{
                const newUrl = url.toLowerCase()
                await fetch(`https://pokeapi.co/api/v2/pokemon/${newUrl}/`)
            .then(resp => resp.json())
            .then(pokemon => setPoke(pokemon))
            } 
            catch{
                
                if(url !== '') alert(`pokemon ${url} não existe, digite corretamente`)
            }
            
        }
        fetchPoke(url)
    },[url])   
   
    return (
        <PokeCard setUrl={setUrl} pokemon={poke}/>
    );
}

export default Poke;