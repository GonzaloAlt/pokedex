// eslint-disable-next-line import/prefer-default-export
export const bouncePokeBall = () => {
  const $pokeball = document.getElementById('pokeball');
  $pokeball.classList = 'jump';
  setTimeout(() => {
    $pokeball.classList.remove('jump');
  }, 450);
};
