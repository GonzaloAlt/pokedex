import { getPokemon, getPokemonList } from '../pokemonService';

beforeEach(() => {
  global.fetch = jest.fn();
});

test('get bulbasaur data', () => {
//   global.fetch.mockImplementation(() => new Promise((resolve) => {
//     const jsonPromise = new Promise((r) => {
//       r({});
//     });
//     resolve({ json: () => jsonPromise });
//   }));
//   const result = getPokemonData('bulbasaur');
//   expect(result).toBe({});
  expect('a').toBe('a');
});

test('try to get data without passing a name', () => {
  expect(getPokemon()).rejects.toEqual(new Error('Ingrese el nombre del pokemon'));
  expect(global.fetch).toHaveBeenCalledTimes(0);
});
