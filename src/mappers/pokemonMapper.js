/* eslint-disable import/extensions */
import Pokemon from '../entities/Pokemon.js';

// eslint-disable-next-line import/prefer-default-export
export const pokemonMap = (apiData) => {
  const {
    id, name, weight, sprites: { front_default: img },
  } = apiData;

  return new Pokemon(id, name, weight, img);
};
