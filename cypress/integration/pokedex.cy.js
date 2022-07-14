// const URL = 'http://127.0.0.1:8080';

context('Pokedex UI', () => {
  it('se asegura que se hayan renderizado los pokemones', () => {
    cy.get('#pokemon-list-btns').find('.pokemon-btn').should('have.length', 20);
  });
});
