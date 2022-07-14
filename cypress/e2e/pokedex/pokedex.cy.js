const URL = 'http://127.0.0.1:8080';

context('Pokedex', () => {
  before(() => {
    cy.visit(URL);
  });

  it('se asegura que se hayan renderizado los pokemones', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20', { fixture: 'api-page-1.json' }).as('pokemonsFirstPage');
    cy.get('#pokemon-list-btns').find('.pokemon-btn').should('have.length', 20);
  });

  it('se asegura que los botones tengan id', () => {
    cy.get('#pokemon-list-btns .pokemon-btn').should('have.attr', 'id');
  });

  it('se asegura que se renderice el pokemon seleccionado', () => {
    const bulbasaurData = {
      id: 1,
      name: 'bulbasaur',
      weight: 69,
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    };
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur', { fixture: 'bulbasaur.json' }).as('getBulbasaur');

    cy.get('button').contains('1').click();
    cy.get('#pokemon-id').should('contain', bulbasaurData.id);
    cy.get('#pokemon-name').should('contain', bulbasaurData.name);
    cy.get('#pokemon-weight').should('contain', bulbasaurData.weight / 10);
    cy.get('#pokemon-img').should('have.attr', 'src', bulbasaurData.img);
  });

  it('se asegura que se cargue la página siguiente', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20', { fixture: 'api-page-2.json' });
    cy.get('button').contains('Página siguiente').click();

    cy.get('#pokemon-list-btns').find('.pokemon-btn').as('secondPagePokeBtns');
    cy.get('@secondPagePokeBtns').should('have.length', 20);

    cy.get('#pokemon-list-btns').find('.pokemon-btn').last().as('lastPokeBtn');
    cy.get('@lastPokeBtn').should('have.text', '40');
  });

  it('se asegura que cargue la página anterior', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20', { fixture: 'api-page-1.json' });
    cy.get('button').contains('Página anterior').click();
    cy.get('#pokemon-list-btns').find('.pokemon-btn').last().as('firstPagePokeBtns');
    cy.get('@firstPagePokeBtns').should('have.text', '20');
  });

  it('se asegura el movimiento de la pokeball cuando se selecciona un pokemon', () => {
    const BOUNCE_TIME = 450;
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur', { fixture: 'bulbasaur.json' }).as('getBulbasaur');
    cy.get('button').contains('1').click();
    cy.get('#pokeball').should('have.class', 'jump');
    cy.clock().then((clock) => {
      clock.tick(BOUNCE_TIME);
      cy.get('#pokeball').should('not.have.class', 'jump');
    });
  });
});
