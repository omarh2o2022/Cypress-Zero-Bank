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
        //Dropdown Options
        cy.get('#aa_accountId').select(1)
        cy.get('#aa_accountId').select(2)
        cy.get('#aa_accountId').select(3)
        cy.get('#aa_accountId').select(4)
        cy.get('#aa_accountId').select(5)
        cy.get('.ui-tabs-nav > :nth-child(2) > a').click()

    })
    
    it('Transfer Funds', ()=>{
        cy.get('#transfer_funds_tab > a').click()
        cy.get('.board-header').should('contain.text', 'Transfer Money & Make Payments')

        //Dropdown Options From Account
        cy.get('#tf_fromAccountId').select(1)
        cy.get('#tf_fromAccountId').select(2)
        cy.get('#tf_fromAccountId').select(3)
        cy.get('#tf_fromAccountId').select(4)
        cy.get('#tf_fromAccountId').select(5)

        //Dropdown Options To Account
        cy.get('#tf_toAccountId').select(1)
        cy.get('#tf_toAccountId').select(2)
        cy.get('#tf_toAccountId').select(3)
        cy.get('#tf_toAccountId').select(4)
        cy.get('#tf_toAccountId').select(5)

        //Amount transaction
        cy.get('#tf_amount').type('99.99')
        cy.get('#tf_description').type('this is a test transfer')
        cy.get('#btn_submit').click()

    })
    
    it.only('Pay Bills', ()=>{
        // Pay Saved payees
        cy.get('#pay_bills_tab > a').click()
        cy.get('.board-header').should('contain.text', 'Make payments to your saved payees')

        //Payee  Dropdown 
        cy.get('#sp_payee').select(0)
        cy.get('#sp_payee').select(1)
        cy.get('#sp_payee').select(2)
        cy.get('#sp_payee').select(3)

        //Account Dropdown 
        cy.get('#sp_account').select(0)
        cy.get('#sp_account').select(1)
        cy.get('#sp_account').select(2)
        cy.get('#sp_account').select(3)
        cy.get('#sp_account').select(4)
        cy.get('#sp_account').select(5)

        // transaction
        cy.get('#sp_amount').type('49.99')
        cy.get('#sp_date')
        cy.get('#sp_description').type('this is a description of a transaction')
        cy.get('#pay_saved_payees').click()

    })
    
})
