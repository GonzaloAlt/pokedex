/**
 * @jest-environment jsdom
 */
import { renderPokemonListBtn, renderPokemon } from '../ui';
import pokedexFixture from '../../__mocks__/pokedex.fixture';
import firstPageList from '../../../cypress/fixtures/pokemonList-page-1.json';

test('check render pokemon buttons', () => {
  document.body.innerHTML = pokedexFixture;
  renderPokemonListBtn(firstPageList, 0);
  expect(document.querySelectorAll('.pokemon-btn')).toHaveLength(20);
});

test('render one pokemon', () => {
  document.body.innerHTML = pokedexFixture;
  const pokemon = {
    id: '1', name: 'bulbasaur', weight: '100', img: 'img_bulbasaur',
  };
  renderPokemon(pokemon);
  expect(document.getElementById('pokemon-id').innerText).toContain('1');
  expect(document.getElementById('pokemon-name').innerText).toContain('bulbasaur');
  expect(document.getElementById('pokemon-weight').innerText).toContain('10');
});
