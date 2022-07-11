/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import { pokemonMap } from '../mappers/pokemonMapper.js';
import { getPokemon, getPokemonList } from '../api/api.js';

// eslint-disable-next-line import/prefer-default-export
export const getPokemonData = async (name) => {
  if (name) {
    try {
      const pokemon = await getPokemon(name);
      const pokemonData = pokemonMap(pokemon);
      return pokemonData;
    } catch (e) {
      Error(e);
    }
  } else {
    throw new Error('Ingrese el nombre del pokemon');
  }
};

export const getPokemonListData = async (offset) => {
  try {
    const pokemonList = await getPokemonList(offset);
    const pokemons = pokemonList;
    return pokemons;
  } catch (e) {
    Error(e);
  }
};
