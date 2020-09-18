describe("Testing form input", () => {
    beforeEach(function() {
        cy.visit("http://localhost:3000/pizza")
    });

    it("Input name into name field", () => {
        cy.get('[for="name"] > input')
            .type("Sean")
            .should("have.value", "Sean")

        cy.get('input[type="checkbox"]')
            .check()
            .should("be.checked")

        cy.get("form").submit()
    })

})