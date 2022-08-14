/* eslint-disable consistent-return */
export const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonListAPI = async (offsetValue = 0) => {
  try {
    const response = await fetch(`${URL_BASE}?offset=${offsetValue}&limit=20`);
    const pokemonList = await response.json();
    const { results: pokemons } = pokemonList;
    return pokemons;
  } catch (e) {
    throw new Error('No se pudieron retornar los pokemons desde API');
  }
};
export const getPokemonAPI = async (pokemonName) => {
  try {
    if (pokemonName) {
      const pokemon = await fetch(`${URL_BASE}${pokemonName}`);
      return await pokemon.json();
    }
  } catch (e) {
    if (!pokemonName) throw new Error('Ingrese un pokemon');
    throw new Error('No se pudo retornar el pokemon desde API');
  }
};
