import { pokemonMap } from '../pokemonMapper';
import bulbasaur from '../../../cypress/fixtures/bulbasaur.json';
import Pokemon from '../../entities/Pokemon';

test('map pokemon info', () => {
  expect(pokemonMap(bulbasaur)).toBeInstanceOf(Pokemon);
});
