describe("Promo codes test", () => {
    before(() => {
        cy.signIn()
    })
    it("Have promoCodes", () => {
        cy.visit('https://localhost:3000/promocodes')
    })
})