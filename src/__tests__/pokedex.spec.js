/**
 * @jest-environment jsdom
 */

import fixture from '../__mocks__/pokedex.fixture';
import iniciatePokedex from '../pokedex';
import pokemonList from '../../cypress/fixtures/pokemonList-page-1.json';

beforeEach(() => {
  global.fetch = jest.fn();
});

test('Iniciate pokedex', () => {
  document.body.innerHTML = fixture;

  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r(pokemonList);
    });
    resolve({ json: () => jsonPromise });
  }));

  iniciatePokedex();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(document.querySelector('#bulbasaur').textContent)
  .toContain('1');
  // expect(document.querySelectorAll('.pokemon-btn')).toHaveLength(20);
});