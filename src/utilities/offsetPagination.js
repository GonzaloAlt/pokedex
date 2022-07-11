// eslint-disable-next-line import/prefer-default-export
const setOffsetPagination = (newPageCallBack) => {
  let offset = 0;
  const POKEMONS_PER_PAGE = 20;
  document.getElementById('previous-btn').addEventListener('click', () => {
    if (offset !== 0) {
      offset -= POKEMONS_PER_PAGE;
      newPageCallBack(offset);
    }
  });
  document.getElementById('next-btn').addEventListener('click', () => {
    offset += POKEMONS_PER_PAGE;
    newPageCallBack(offset);
  });
};

export default setOffsetPagination;
