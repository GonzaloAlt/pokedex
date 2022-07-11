import initPokedex from '../pokedex';
import '../index';

jest.mock('../pokedex.js', () => jest.fn());

test('initiate pokedex', () => {
  expect(initPokedex).toHaveBeenCalledTimes(1);
});
