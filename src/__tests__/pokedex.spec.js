/**
 * @jest-environment jsdom
 */

import fixture from '../__mocks__/pokedex.fixture';
import initPokedex from '../pokedex';
import pokemonList from '../../cypress/fixtures/pokemonList-page-1.json';

beforeEach(() => {
  global.fetch = jest.fn();
});

test('Initiate pokedex', () => {
  document.body.innerHTML = fixture;

  global.fetch.mockImplementation(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r(pokemonList);
    });
    resolve({ json: () => jsonPromise });
  }));

  initPokedex();
  expect(global.fetch).toHaveBeenCalledTimes(1);
});
