import React, {useState, useContext} from 'react';
import '../styles/Joke.css'
import { JokeContext } from '../context/JokeContext'


const Joke = ({joke, id}) => {
    const [votes, setVotes] = useState(0)
    const {deleteJoke} = useContext(JokeContext);

    const handleVote = e => {
       if(e.target.className === "far fa-thumbs-up") setVotes(votes + 1)
       if(e.target.className === "far fa-thumbs-down") setVotes(votes - 1)
    }

    let voteClass;
    if(votes < 0) voteClass = 'red'
    if(votes > 5) voteClass = 'green'

    return (
        <div className='Joke'>
            <div className='Joke-votes'>
                <i onClick={e => handleVote(e)} className="far fa-thumbs-up"></i>
                <div className={`Joke-votes-qty ${voteClass}`}>{votes}</div>
                <i onClick={e => handleVote(e)} className="far fa-thumbs-down"></i>
            </div>
            <p>{joke}</p>
            <i onClick={e => deleteJoke(id)} className="fas fa-trash"></i>
        </div>
    );
}

export default Joke;


