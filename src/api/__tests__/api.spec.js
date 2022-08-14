import { getPokemonListAPI, getPokemonAPI, URL_BASE } from '../api';

/// <reference types="@types/jest" /> /

beforeEach(() => {
  global.fetch = jest.fn();
});

test('load 1 pokemon', () => {
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r({});
    });
    resolve({ json: () => jsonPromise });
  }));
  getPokemonAPI('bulbasaur');
  expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}bulbasaur`);
  expect(global.fetch).toHaveBeenCalledTimes(1);
});

test('try load pokemon and fail, API throw error', async () => {
  try {
    await getPokemonAPI('bulbasaur');
  } catch (e) {
    expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}bulbasaur`);
    expect(e).toEqual(new Error('No se pudo retornar el pokemon desde API'));
  }
});

test('try load pokemon without argument throw error', async () => {
  try {
    await getPokemonAPI();
  } catch (e) {
    expect(e).toEqual(new Error('Ingrese un pokemon'));
  }
});

test('get pokemon list with default params', () => {
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r({});
    });
    resolve({ json: () => jsonPromise });
  }));

  getPokemonListAPI();

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}?offset=0&limit=20`);
});

test('get pokemon list with user params', () => {
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r({});
    });
    resolve({ json: () => jsonPromise });
  }));

  getPokemonListAPI(1);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}?offset=1&limit=20`);
});

test('try load pokemon list and fail, API throw error', async () => {
  try {
    await getPokemonListAPI(1);
  } catch (e) {
    expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}?offset=1&limit=20`);
    expect(e).toEqual(new Error('No se pudieron retornar los pokemons desde API'));
  }
});
