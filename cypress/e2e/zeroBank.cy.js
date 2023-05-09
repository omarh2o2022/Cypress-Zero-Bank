/// <reference types = "cypress"/>  

describe (' Zero Bank', () => {
    beforeEach(() => {

        cy.visit('http://zero.webappsecurity.com/')
        cy.get('.icon-signin').click()
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
        cy.get('.btn').click() 
      })


    it ('Account Summary assert', ()=> {
        
        cy.get('.brand').should('have.text', 'Zero Bank') 
        cy.get('.offset2 > :nth-child(1)').should('have.text', 'Cash Accounts') 
        cy.get('.offset2 > :nth-child(3)').should('have.text', 'Investment Accounts')
        cy.get('.offset2 > :nth-child(5)').should('have.text', 'Credit Accounts')
        cy.get('.offset2 > :nth-child(7)').should('have.text', 'Loan Accounts')
        cy.get(':nth-child(2) > .board-content > .table > thead > tr > :nth-child(3)').should('have.text', 'Balance')
        
    })

    it('Account Activity', ()=>{
        cy.get('#account_activity_tab > a').click()
        cy.get('.board-header').should('have.text','Show Transactions')
        cy.get('#aa_accountId').select([2])
    })
    
    
    
})
