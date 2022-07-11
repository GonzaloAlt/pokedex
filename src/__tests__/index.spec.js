import iniciatePokedex from '../pokedex';
import '../index';

jest.mock('../pokedex.js', () => jest.fn());

test('iniciate pokedex', () => {
  expect(iniciatePokedex).toHaveBeenCalledTimes(1);
});
