import { ReuseableCode } from "../support/ReuseableCode";
const reuseableCode = new ReuseableCode

export class AdminPage {
    loginToTheSite(userName,password){
        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('be.visible').and('contain.text','Login')
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper').should('be.visible').and('contain.text','Username')
        cy.get("input[placeholder='Username']").should('be.visible').type(userName)
        cy.get("input[placeholder='Password']").should('be.visible').type(password)
        cy.get("button[type='submit']").should('be.visible').click()
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('be.visible').and('contain.text','Dashboard')
    }
    goToAddAdmin(){
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click()
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('be.visible').and('contain.text','Admin')
        
    }
    addAdminDetails(employeeName){
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").should('be.visible').click()
        cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').should('be.visible').and('contain.text','Add User')
        cy.get('.oxd-label.oxd-input-field-required').contains('User Role').should('be.visible')
        cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(0).type('{downarrow}{enter}')
        //cy.contains('Admin').should('be.visible').click()
        cy.get('.oxd-label.oxd-input-field-required').contains('Employee Name').should('be.visible')
        cy.get("input[placeholder='Type for hints...']").should('be.visible').type(employeeName)
        cy.contains(employeeName).should('be.visible').click()
        cy.get('.oxd-label.oxd-input-field-required').contains('Status').should('be.visible')
        cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).click()
        cy.contains('Enabled').should('be.visible').click()
        cy.get('.oxd-label.oxd-input-field-required').contains('Username').should('be.visible')
        const AdminName = reuseableCode.RandomString(3)
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin'+AdminName)
        cy.get('.oxd-label.oxd-input-field-required').contains('Password').should('be.visible')
        cy.get("input[type='password']").eq(0).should('be.visible').type('admin123')
        cy.get('.oxd-label.oxd-input-field-required').contains('Confirm Password').should('be.visible')
        cy.get("input[type='password']").eq(1).should('be.visible').type('admin123')
        cy.get("button[type='submit']").should('be.visible').click()
        cy.get('.oxd-toast').should('be.visible').and('contain.text','Successfully Saved')
    }
    editAdmin(){
        cy.get('.oxd-table-cell-actions > :nth-child(2)').eq(0).should('be.visible').click() // edit button
        cy.get(':nth-child(2) > .oxd-input').should('be.visible').clear().type('ShahidLund')
        cy.get('.oxd-button--secondary').should('be.visible').click() // save Button
        cy.get('.oxd-toast').should('be.visible').and('contain.text','Successfully Updated')
    }
    deleteAdmin(){
        cy.get('[class="oxd-icon bi-trash"]').eq(1).should('be.visible').click() 
        cy.get('.oxd-button--label-danger').should('be.visible').click()
        cy.get('.oxd-toast').should('be.visible').and('contain.text','Successfully Deleted')
    }
}