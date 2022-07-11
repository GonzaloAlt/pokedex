import { getPokemon, getPokemonList } from '../pokemonService';

beforeEach(() => {
  global.fetch = jest.fn();
});

test('get bulbasaur data', () => {
  global.fetch.mockImplementation(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r({});
    });
    resolve({ json: () => jsonPromise });
  }));
  getPokemon('bulbasaur');
  expect(global.fetch).toHaveBeenCalledTimes(1);
});

test('try to get pokemon without passing a name', () => {
  expect(getPokemon()).rejects.toEqual(new Error('Ingrese el nombre del pokemon'));
  expect(global.fetch).toHaveBeenCalledTimes(0);
});

test('get pokemon list', () => {
  global.fetch.mockImplementation(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r([]);
    });
    resolve({ json: () => jsonPromise });
  }));
  getPokemonList(0);
  expect(global.fetch).toHaveBeenCalledTimes(1);
});
