/**
 * @jest-environment jsdom
 */
import { bouncePokeBall } from '../animation';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('validate that the bounce animation is invoked', () => {
  document.body.innerHTML = '<div><img src="./pngegg.png" alt="" id="pokeball" /></div>';

  bouncePokeBall();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 450);
});

test('bounce animation classList removal', () => {
  document.body.innerHTML = '<div><img src="./pngegg.png" alt="" id="pokeball" /></div>';

  bouncePokeBall();

  Promise.resolve().then(() => {
    jest.advanceTimersByTime(460);
    expect(document.getElementById('pokeball').classList.contains('jump')).toBe(false);
  });
});
