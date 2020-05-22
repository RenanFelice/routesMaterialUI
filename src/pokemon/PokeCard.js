import React, {useState} from 'react';
import './PokeCard.css'

const PokeCard = ({ pokemon, setUrl }) => {
    const [newPokeUrl, setNewPokeUrl] = useState('')
    return (
        <div className='PokeCard-App'>
            {pokemon ? <div className="card" style={{ width: "25rem" }}>
                <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                <div className="card-body">
                    <h5 className="card-title">{pokemon.order} - {pokemon.name}</h5>
                    <p className="card-text"><strong>Altura</strong> - {(pokemon.height / 10).toFixed(2)} m</p>
                    <p className="card-text"><strong>Peso</strong> - {(pokemon.weight / 10).toFixed(2)} kg</p>
                    <div className='card-text type'>
                        <strong>Type</strong> - {pokemon.types.map((obj, idx) => idx === pokemon.types.length - 1 ? <span key={obj.type.name}>{obj.type.name}</span> : <span key={obj.type.name}>{obj.type.name}/</span>)}
                    </div>

                    <form onSubmit={e => {
                        e.preventDefault()
                        setUrl(newPokeUrl)
                        setNewPokeUrl('')
                    }}>
                        <div className="form-group" />
                        <input value={newPokeUrl} onChange={e => setNewPokeUrl(e.target.value)} type="text" className="form-control" id="fetchPokemon" placeholder='Fetch new pokemon...' />
                    </form>
                </div>

            </div>
                : <div className="card" style={{ width: "25rem" }}>
                    <img src='' className="card-img-top" alt='' />
                    <div className="card-body">
                        <h5 className="card-title">???</h5>
                        <p className="card-text"><strong>Altura</strong> - ???</p>
                        <p className="card-text"><strong>Peso</strong> - ???</p>
                        <div className='card-text type'>
                            <strong>Type</strong> - ???
                </div>

                        <form onSubmit={e => {
                            e.preventDefault()
                            setUrl(newPokeUrl)
                            setNewPokeUrl('')
                        }}>
                            <div className="form-group" />
                            <input value={newPokeUrl} onChange={e => setNewPokeUrl(e.target.value)} type="text" className="form-control" id="fetchPokemon" placeholder='Fetch new pokemon...' />
                        </form>
                    </div>

                </div>}
        </div>
    );
}

export default PokeCard;