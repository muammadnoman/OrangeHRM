/// <reference types = "cypress"/>

import { EmployeeCases } from "../PageObject/EmployeeCases";
import { ReuseableCode } from "../support/ReuseableCode";

const employeeCases = new EmployeeCases
const reuseableCode = new ReuseableCode

describe('Admin Cases',function(){
    let userName = 'Admin'
    let password = 'admin123'
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.viewport(1440,1000)
    })

    it ('TC_E_001 - Add New Employee', function(){
        employeeCases.loginToTheSite(userName,password)
        employeeCases.goToAddEmployee()
        employeeCases.addEmployeeDetail()
    })
    it ('TC_E_002 - Edit Employee', function(){
        employeeCases.loginToTheSite(userName,password)
        employeeCases.goToAddEmployee()
        employeeCases.editEmployeeDetails('QA Tester','123456789')
    })
    it ('TC_E_003 - Delete Employee', function(){
        employeeCases.loginToTheSite(userName,password)
        employeeCases.goToAddEmployee()
        employeeCases.deleteEmployee()
    })
})