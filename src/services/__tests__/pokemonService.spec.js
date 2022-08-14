import { getPokemon } from '../pokemonService';
import { getPokemonAPI } from '../../api/api';
import { getPokemonLocalStg } from '../../storage/pokemonStorage';
import { pokemonMap } from '../../mappers/pokemonMapper';

beforeEach(() => {
  global.fetch = jest.fn();
});

// afterEach(() => {
//   jest.clearAllMocks();
// });

jest.mock('../../storage/pokemonStorage', () => {
  const originalModule = jest.requireActual('../../storage/pokemonStorage');
  return {
    __esModule: true,
    ...originalModule,
    getPokemonLocalStg: jest.fn(() => ({
      id: 1, name: 'bulbasaur', weight: 1, sprites: { front_default: 'img' },
    })),
  };
});
jest.mock('../../api/api', () => {
  const originalModule = jest.requireActual('../../api/api');
  return {
    __esModule: true,
    ...originalModule,
    getPokemonAPI: jest.fn(() => ({
      id: 1, name: 'bulbasaur', weight: 1, sprites: { front_default: 'img' },
    })),
  };
});
jest.mock('../../mappers/pokemonMapper', () => {
  const originalModule = jest.requireActual('../../mappers/pokemonMapper');
  return {
    __esModule: true,
    ...originalModule,
    pokemonMap: jest.fn(() => {}),
  };
});

test('get bulbasaur data from localstorage', () => {
  getPokemon('bulbasaur');
  expect(getPokemonLocalStg).toHaveBeenCalledTimes(1);
  expect(getPokemonAPI).toHaveBeenCalledTimes(0);
  expect(pokemonMap).toHaveBeenCalledTimes(1);
});

test('try to get pokemon without passing a name', async () => {
  expect.assertions(1);
  try {
    await getPokemon();
  } catch (e) {
    expect(e).toEqual(new Error('Ingrese el nombre del pokemon'));
  }
});
