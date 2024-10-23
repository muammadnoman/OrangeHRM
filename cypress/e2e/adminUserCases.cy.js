/// <reference types = "cypress"/>

import { EmployeePage } from "../PageObject/EmployeePage";
import { AdminPage } from "../PageObject/AdminPage";
import { ReuseableCode } from "../support/ReuseableCode";

const employeePage = new EmployeePage
const adminPage = new AdminPage
const reuseableCode = new ReuseableCode

describe('Admin Cases', function () {
    let userName = 'Admin'
    let password = 'admin123'
    const FirstName = reuseableCode.getRandomFirstName()
    const LastName = reuseableCode.getRandomLastName()
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.viewport(1440, 1000)
    })

    it('TC_A_001 - Create Admin ', function () {
        adminPage.loginToTheSite(userName, password)
        //Add an employee first 
        employeePage.goToAddEmployee()
        employeePage.addEmployeeDetail(FirstName, LastName)
        //Create an admin by selecting the created employee
        adminPage.goToAddAdmin()
        adminPage.addAdminDetails(FirstName)
    })

    it('TC_A_002 - Edit Admin ', function () {
        adminPage.loginToTheSite(userName, password)
        adminPage.goToAddAdmin()
        adminPage.editAdmin() //Edit the first available record in the admin list
    })

    it('TC_A_003 - Delete Admin ', function () {
        adminPage.loginToTheSite(userName, password)
        adminPage.goToAddAdmin()
        adminPage.deleteAdmin() //Delete the first available record in admin list
    })
})