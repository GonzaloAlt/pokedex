export const getPokemonListLocalStg = (offsetValue) => {
  let pokemonList;
  try {
    pokemonList = JSON.parse(localStorage.getItem(offsetValue));
  } catch (err) {
    throw new Error(`Lista con offset ${offsetValue} no encontrada en LocalStorage`);
  }
  if (pokemonList === null) { throw new Error(`Lista con offset ${offsetValue} no encontrada en LocalStorage`); }
  return pokemonList;
};

export const getPokemonLocalStg = (pokemonName) => {
  let pokemon;
  try {
    pokemon = JSON.parse(localStorage.getItem(pokemonName));
  } catch (err) {
    throw new Error(`Pokemon ${pokemonName} no encontrado en LocalStorage`);
  }
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
