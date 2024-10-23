/// <reference types = "cypress"/>

import { AdminUserCases } from "../PageObject/AdminUserCases";
import { ReuseableCode } from "../support/ReuseableCode";

const adminUserCases = new AdminUserCases
const reuseableCode = new ReuseableCode

describe('Admin Cases',function(){
    let userName = 'Admin'
    let password = 'admin123'
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.viewport(1440,1000)
    })

    it ('TC_A_001 - Create Admin ', function(){
        adminUserCases.loginToTheSite(userName,password)
        adminUserCases.goToAddAdmin()
        adminUserCases.addAdminDetails()
    })

    it ('TC_A_002 - Edit Admin ', function(){
        adminUserCases.loginToTheSite(userName,password)
        adminUserCases.goToAddAdmin()
        adminUserCases.editAdmin()
    })

    it .only('TC_A_003 - Delete Admin ', function(){
        adminUserCases.loginToTheSite(userName,password)
        adminUserCases.goToAddAdmin()
        adminUserCases.deleteAdmin()
    })
})