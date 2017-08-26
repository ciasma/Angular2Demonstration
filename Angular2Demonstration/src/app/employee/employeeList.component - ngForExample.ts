import { Component } from '@angular/core'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})

export class EmployeeListComponent {
    employees: any[];
    constructor() { 
    this.employees = [
        { code: 'emp101', name: 'Marcia', gender: 'Female', annualSalary: 5500, dateOfBirth: '6/25/1988' },
        { code: 'emp102', name: 'Tom', gender: 'Male', annualSalary: 2300, dateOfBirth: '7/05/1998' },
        { code: 'emp103', name: 'Dick', gender: 'Male', annualSalary: 2200, dateOfBirth: '3/22/1968' },
        { code: 'emp104', name: 'Jane', gender: 'Female', annualSalary: 5300, dateOfBirth: '4/25/1988' },
    ];
    }
    getEmployees(): void {
        this.employees = [
            { code: 'emp101', name: 'Marcia', gender: 'Female', annualSalary: 5500, dateOfBirth: '6/25/1988' },
            { code: 'emp102', name: 'Tom', gender: 'Male', annualSalary: 2300, dateOfBirth: '7/05/1998' },
            { code: 'emp103', name: 'Dick', gender: 'Male', annualSalary: 2200, dateOfBirth: '3/22/1968' },
            { code: 'emp104', name: 'Jane', gender: 'Female', annualSalary: 5300, dateOfBirth: '4/25/1988' },
            { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '5/12/1982' },
        ]
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

}