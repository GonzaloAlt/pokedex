/* eslint-disable import/extensions */
import { bouncePokeBall } from './animation.js';

export const renderPokemonListBtn = (pokemons, offset) => {
  const $pokemonListBtn = document.getElementById('pokemon-list-btns');
  $pokemonListBtn.innerHTML = '';
  pokemons.forEach((pokemon, index) => {
    const $btn = document.createElement('button');
    $btn.innerHTML = offset + index + 1;
    $btn.id = pokemon.name;
    $btn.className = 'pokemon-btn';

    $pokemonListBtn.appendChild($btn);
  });
};

export const renderPokemon = (pokemon) => {
  // eslint-disable-next-line no-param-reassign
  const {
    id, name, weight, img,
  } = pokemon;
  bouncePokeBall();
  document.getElementById('pokemon-id').innerText = `ID: ${id} `;
  document.getElementById('pokemon-name').innerText = name;
  document.getElementById('pokemon-weight').innerText = `${weight / 10}KG`;
  document.getElementById('pokemon-img').src = img;
};
