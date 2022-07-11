/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import { pokemonMap } from '../mappers/pokemonMapper.js';
import { getPokemonAPI, getPokemonListAPI } from '../api/api.js';

// eslint-disable-next-line import/prefer-default-export
export const getPokemon = async (name) => {
  if (name) {
    try {
      const pokemon = await getPokemonAPI(name);
      const pokemonData = pokemonMap(pokemon);
      return pokemonData;
    } catch (e) {
      Error(e);
    }
  } else {
    throw new Error('Ingrese el nombre del pokemon');
  }
};

export const getPokemonList = async (offset) => {
  try {
    const pokemonList = await getPokemonListAPI(offset);
    const pokemons = pokemonList;
    return pokemons;
  } catch (e) {
    Error(e);
  }
};
