import { ReuseableCode } from "../support/ReuseableCode";
const reuseableCode = new ReuseableCode

export class EmployeeCases {
    loginToTheSite(userName,password){
        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('be.visible').and('contain.text','Login')
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper').should('be.visible').and('contain.text','Username')
        cy.get("input[placeholder='Username']").should('be.visible').type(userName)
        cy.get("input[placeholder='Password']").should('be.visible').type(password)
        cy.get("button[type='submit']").should('be.visible').click()
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('be.visible').and('contain.text','Dashboard')
    }
    goToAddEmployee(){
        cy.get(':nth-child(2) > .oxd-main-menu-item').should('be.visible').click()
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('be.visible').and('contain.text','PIM')   
    }
    addEmployeeDetail(){
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").should('be.visible').click()
        cy.get('.oxd-label.oxd-input-field-required').should('be.visible').and('contain.text','Employee Full Name')
        const FirstName = reuseableCode.getRandomFirstName()
        cy.get("input[placeholder='First Name']").should('be.visible').type(FirstName)
        cy.get("input[placeholder='Middle Name']").should('be.visible').type('test')
        const LastName = reuseableCode.getRandomLastName()
        cy.get("input[placeholder='Last Name']").should('be.visible').type(LastName)
        cy.get("button[type='submit']").should('be.visible').click()
    }
    editEmployeeDetails(employeeName,licence){

        cy.get('[placeholder="Type for hints..."]').eq(0).should('be.visible').type(employeeName)
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('be.visible').and('contain.text','(1) Record Found')
        cy.get("div[class='orangehrm-container'] button:nth-child(1)").click() // Edit button
        cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('be.visible').and('contain.text','Personal Details')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('be.visible').and('contain.text',"Driver's License Number")
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type(licence)
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible').click()
        cy.get('.oxd-toast').should('exist')
    }
    deleteEmployee(){
        cy.get('[class="oxd-icon bi-trash"]').eq(0).should('be.visible').click() // click on delete Icon
        cy.get('.oxd-text.oxd-text--p.oxd-text--card-title').should('be.visible').and('contain.text','Are you Sure?')
        cy.get('.oxd-button--label-danger').should('be.visible').click()
        cy.get('.oxd-toast').should('exist')
    }
}