/// <reference types = "cypress"/>

import { EmployeePage } from "../PageObject/EmployeePage";
import { ReuseableCode } from "../support/ReuseableCode";

const employeePage = new EmployeePage
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
    it('TC_E_001 - Add New Employee', function () {
        employeePage.loginToTheSite(userName, password)
        employeePage.goToAddEmployee()
        employeePage.addEmployeeDetail(FirstName, LastName)
    })
    it('TC_E_002 - Edit Employee', function () {
        employeePage.loginToTheSite(userName, password)
        employeePage.goToAddEmployee()
        employeePage.editEmployeeDetails(FirstName, '123456789')
    })
    it('TC_E_003 - Delete Employee', function () {
        employeePage.loginToTheSite(userName, password)
        employeePage.goToAddEmployee()
        employeePage.deleteEmployee() //Will delete first employee from the list
    })
})