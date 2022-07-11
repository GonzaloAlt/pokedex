/* eslint-disable import/extensions */
import { getPokemonData, getPokemonListData } from './services/pokemonService.js';
import { renderPokemon, renderPokemonListBtn } from './ui/ui.js';
import setOffsetPagination from './utilities/offsetPagination.js';

const showPokemon = (getDataCallBack) => {
  const $pokemonListBtn = document.getElementById('pokemon-list-btns');
  // eslint-disable-next-line no-param-reassign
  // eslint-disable-next-line func-names
  $pokemonListBtn.onclick = async function (e) {
    try {
      if (e.target.classList.contains('pokemon-btn')) {
        const pokemonName = e.target.id;
        const pokemon = await getDataCallBack(pokemonName);
        renderPokemon(pokemon);
      }
    } catch (error) {
      Error(error);
    }
  };
};

const showPokemonList = async (offset) => {
  try {
    const pokemonList = await getPokemonListData(offset);
    renderPokemonListBtn(pokemonList, offset);
  } catch (error) {
    Error(error);
  }
};

const iniciatePokedex = () => {
  showPokemonList(0);
  showPokemon(getPokemonData);
  setOffsetPagination(showPokemonList);
};

export default iniciatePokedex;
