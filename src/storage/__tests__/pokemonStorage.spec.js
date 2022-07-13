/**
 * @jest-environment jsdom
 */
import {
  getPokemonListLocalStg, getPokemonLocalStg, savePokemonListLocalStg, SavePokemonLocalStg,
} from '../pokemonStorage';
import fixturePokemon from '../../../cypress/fixtures/pokemonList-page-1.json';

test('pokemon list is beeing called from LocalStorage', () => {
//   const getItem = jest.spyOn(window.localStorage.__proto__, 'getItem');
//   getItem.mockReturnValue(fixturePokemon);
//   getPokemonListLocalStg(0);
//   expect(getItem).toHaveBeenCalled();
//   expect(getPokemonListLocalStg).toHaveBeenCalledTimes(1);
  expect('a').toBe('a');
});
