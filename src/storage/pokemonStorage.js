export const getPokemonListLocalStg = (offsetValue) => {
  const pokemonList = JSON.parse(localStorage.getItem(offsetValue));
  if (pokemonList === null) {
    throw new Error(`Lista con offset ${offsetValue} no encontrada en LocalStorage`);
  }
  return pokemonList;
};

export const getPokemonLocalStg = (pokemonName) => {
  const pokemon = JSON.parse(localStorage.getItem(pokemonName));
  if (pokemon === null) {
    throw new Error(`Pokemon ${pokemonName} no encontrado en LocalStorage`);
  }
  return pokemon;
};

export const savePokemonListLocalStg = (offsetValue, pokemons) => {
  if (offsetValue !== undefined && pokemons !== undefined) {
    localStorage.setItem(offsetValue, JSON.stringify(pokemons));
  } else {
    throw new Error('No se pueden guardar los pokemones');
  }
};

export const savePokemonLocalStg = (pokemonName, pokemon) => {
  if (pokemonName !== undefined && pokemon !== undefined) {
    localStorage.setItem(pokemonName, JSON.stringify(pokemon));
  } else {
    throw new Error('No se puede guardar el pokemon');
  }
};
