describe('BloomTech Eats App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=name]');
    const baconCheckbox = () => cy.get('input[name=bacon]');
    const mushroomsCheckbox = () => cy.get('input[name=mushrooms]');
    const submitBtn = () => cy.get(`button[id='order-button']`);

    it('the proper elements are showing', () => {
        nameInput().should('exist');
        baconCheckbox().should('exist');
        mushroomsCheckbox().should('exist');
        submitBtn().should('exist');
    })

    describe('Filling out inputs', () => {
        it('can name in input', () => {
            nameInput()
                .should('have.value', '')
                .type('Vanessa')
                .should('have.value', 'Vanessa');
        })
    })

    describe('Checking boxes', () => {
        it('can check pizza toppings', () => {
            baconCheckbox().check();
            mushroomsCheckbox().check();
        })
    })

    describe('Submit the form', () => {
        it('can submit the pizza order form', () => {
            submitBtn().click();
        })
    })



})