import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = (props) => {
  const items = props.pokemons.map((pokemon, index) => {
    return (
      <li className='card' key={index}>
        <Pokemon url={pokemon.url} name={pokemon.name} types={pokemon.types} />
      </li>
    );
  });
  return <ul className='cards'>{items}</ul>;
};

export default PokemonList;
