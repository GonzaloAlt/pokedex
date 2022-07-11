import { getPokemonListAPI, getPokemonAPI, URL_BASE } from '../api';

/// <reference types="@types/jest" /> /

beforeEach(() => {
  global.fetch = jest.fn();
});

test('load 1 pokemon', () => {
  global.fetch.mockImplementationOnce(() => {
    // eslint-disable-next-line no-new
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r();
      });
      resolve({ json: () => jsonPromise });
    });
  });

  getPokemonAPI('bulbasaur');

  expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}bulbasaur`);
  expect(global.fetch)
    .toHaveBeenCalledTimes(1);
});

test('try load pokemon without argument throw error', () => {
  expect(getPokemonAPI()).rejects.toEqual(new Error('Ingrese un pokemon'));
  expect(global.fetch).toHaveBeenCalledTimes(0);
});

test('get pokemon list with default params', () => {
  global.fetch.mockImplementationOnce(() => {
    // eslint-disable-next-line no-new
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    });
  });

  getPokemonListAPI();

  expect(global.fetch)
    .toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}?offset=0&limit=20`);
});

test('get pokemon list with user params', () => {
  global.fetch.mockImplementationOnce(() => {
    // eslint-disable-next-line no-new
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    });
  });

  getPokemonListAPI(1);

  expect(global.fetch)
    .toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}?offset=1&limit=20`);
});
