import axios from 'axios';
import React, {useState } from 'react';

const Pokemon = () => {
    const [name,setName]=useState('');
    const [pokemon,setPokemon]=useState({});
    


    const handleOnChange=(e)=>{
        setName(e.target.value)
    }
    const handleOnClick=()=>{
          axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
              (res)=>{
              setPokemon({
                name:res.data.species.name,
                image:res.data.sprites.back_default,
                stats:res.data.stats[0].base_stat,
                id:res.data.id,
                game:res.data.game_indices[0]. game_index,
                base_experience:res.data.base_experience
            })               
              }
          )
    }

    return (
        <div>
            <h2>Search Pokemon</h2>
            
        <div>
            <input type="text" onChange={handleOnChange} />
            <button onClick={handleOnClick}>serach</button>
        </div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} alt="" />
            <h4>{pokemon.stats}</h4>
            <h4>{pokemon.id}</h4>
            <h4>{pokemon.game}</h4>
            <h4>{pokemon.base_experience}</h4>
        </div>
    );
};

export default Pokemon;