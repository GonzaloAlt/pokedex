/**
 * @jest-environment jsdom
 */
import pokedexFixture from '../../__mocks__/pokedex.fixture';
import setOffsetPagination from "../offsetPagination";

test('check pagination buttons listeners', ()=> {
    const mockCallBack = jest.fn()
    document.body.innerHTML = pokedexFixture;

    setOffsetPagination(mockCallBack);
    document.getElementById('next-btn').click();
    document.getElementById('previous-btn').click();
    expect(mockCallBack).toBeCalledTimes(2);
});

test('previous button should do nothing if offset is 0', ()=> {
    const mockCallBack = jest.fn()
    document.body.innerHTML = pokedexFixture;

    setOffsetPagination(mockCallBack);
    document.getElementById('previous-btn').click();
    expect(mockCallBack).toBeCalledTimes(0);
});
