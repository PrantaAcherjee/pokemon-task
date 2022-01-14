import axios from 'axios';
import React, {useState } from 'react';
import './Pokemon.css'

// all state
const Pokemon = () => {
    const [name,setName]=useState('');
    const [pokemon,setPokemon]=useState({});
    const [get,setGet]=useState(false);
    const [error,setError]=useState('');

// on change the input field
    const handleOnChange=(e)=>{
        setName(e.target.value)       
    }

 

// on click the btn    
    const handleOnClick=()=>{

          axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then(
              (res)=>{
              setPokemon({
                name:res.data.species.name,
                image:res.data.sprites.back_default,
                stats:res.data.stats[0].base_stat,
                id:res.data.id,
                game:res.data.game_indices[0]. game_index,
                base_experience:res.data.base_experience
            })            
            setGet(true)   
            setError('')           
              }
          )
          .catch(error => {
            setError(error.response.data)
           
         })
 
      
    }

    return (
        <div className='bg'>
            <h2 className='font-bold font-serif text-gray-50 text-4xl my-3 p-2'>Search Pokemon</h2>
            
        <div className='leading-2'>
            <input
            className='rounded-lg bg-gray-200 p-3 m-2'
            type="text" onChange={handleOnChange}
            placeholder='Enter Pokemon Name' />
            <button onClick={handleOnClick}><i class="fas fa-search text-4xl p-2 m-3 text-teal-400"></i></button>
        </div>
        {
            get &&
            <div className='text-2xl font-mono bg-red-100  p-5 rounded-lg'>
         <div>
            <div>Name: {pokemon.name}</div>
            <div className='flex justify-center'><img src={pokemon.image} alt="" /></div>
            <div>Stats: {pokemon.stats}</div>
            <div>Id: {pokemon.id}</div>
            <div>Game: {pokemon.game}</div>
            <div>Base Experience: {pokemon.base_experience}</div>
         </div>
          </div>
        }
          
          {
              error && <div className='text-red-600 p-3 m-3 text-3xl f-bold'>THIS IS WRONG NAME</div>
          }
        </div>
    );
};

export default Pokemon;