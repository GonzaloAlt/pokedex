/**
 * @jest-environment jsdom
 */
import {
  getPokemonListLocalStg, getPokemonLocalStg, savePokemonListLocalStg, savePokemonLocalStg,
} from '../pokemonStorage';
import localStorageFixture from '../../__mocks__/localStorage.fixture';
import localStorageBulbasaurFixture from '../../__mocks__/localStorageBulbasaur.fixture';

describe('get pokemon list localStorage', () => {
  test('pokemon list is beeing called from LocalStorage', () => {
    jest.spyOn(Storage.prototype, 'getItem');
    const offset = 0;
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(localStorageFixture[offset]));

    getPokemonListLocalStg(offset);

    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test('try to get pokemon list that is not in LocalStorage, get error', () => {
    jest.spyOn(Storage.prototype, 'getItem');
    const offset = 1;
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(localStorageFixture[offset]));

    try {
      getPokemonListLocalStg(offset);
    } catch (err) {
      expect(err).toEqual(new Error(`Lista con offset ${offset} no encontrada en LocalStorage`));
    }

    expect(localStorage.getItem).toHaveBeenCalled();
  });
});

describe('get one pokemon localStorage', () => {
  test('one pokemon is beeing called from LocalStorage', () => {
    jest.spyOn(Storage.prototype, 'getItem');
    const pokemonName = 'bulbasaur';
    // eslint-disable-next-line max-len
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(localStorageBulbasaurFixture[pokemonName]));

    getPokemonLocalStg(pokemonName);

    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test('try to get one pokemon that is not in LocalStorage, get error', () => {
    jest.spyOn(Storage.prototype, 'getItem');
    const pokemonName = 'pikachu';
    // eslint-disable-next-line max-len
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(localStorageBulbasaurFixture[pokemonName]));

    try {
      getPokemonLocalStg(pokemonName);
    } catch (err) {
      expect(err).toEqual(new Error(`Pokemon ${pokemonName} no encontrado en LocalStorage`));
    }

    expect(localStorage.getItem).toHaveBeenCalled();
  });
});

describe('save pokemon list localStorage', () => {
  test('pokemon list is beeing saved in LocalStorage', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn(() => {});

    savePokemonListLocalStg(0, localStorageFixture);

    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('try to save pokemon list in LocalStorage with undefined values, get error', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn(() => {});

    try {
      savePokemonListLocalStg();
    } catch (err) {
      expect(err).toEqual(new Error('No se pueden guardar los pokemones'));
    }
  });
});

describe('save one pokemon localStorage', () => {
  test('one pokemon is beeing saved in LocalStorage', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn(() => {});

    savePokemonLocalStg('bulbasaur', localStorageBulbasaurFixture);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('try to save one pokemon in LocalStorage with undefined values, get error', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn(() => {});

    try {
      savePokemonLocalStg();
    } catch (err) {
      expect(err).toEqual(new Error('No se puede guardar el pokemon'));
    }
  });
});
