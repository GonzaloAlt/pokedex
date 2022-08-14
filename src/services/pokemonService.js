/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import { pokemonMap } from '../mappers/pokemonMapper.js';
import { getPokemonAPI, getPokemonListAPI } from '../api/api.js';
import {
  getPokemonListLocalStg, getPokemonLocalStg, savePokemonListLocalStg, savePokemonLocalStg,
} from '../storage/pokemonStorage.js';

export const getPokemon = async (name) => {
  if (!name) {
    throw new Error('Ingrese el nombre del pokemon');
  } else {
    let pokemon;
    try {
      pokemon = getPokemonLocalStg(name);
    } catch (e) {
      pokemon = await getPokemonAPI(name);
      savePokemonLocalStg(name, pokemon);
    }
    pokemon = pokemonMap(pokemon);
    return pokemon;
  }
};

export const getPokemonList = async (offset) => {
  try {
    return getPokemonListLocalStg(offset);
  } catch (e) {
    const pokemons = await getPokemonListAPI(offset);
    savePokemonListLocalStg(offset, pokemons);
    return pokemons;
  }
};
