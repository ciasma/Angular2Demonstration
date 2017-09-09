import { Component, Output, OnInit} from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})

export class EmployeeListComponent implements OnInit{
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = "Loading data.  Please wait...";

    //private _employeeService: EmployeeService

    //constructor(_employeeService: EmployeeService) { 
    //this._employeeService = _employeeService;
    //}

    //short hand syntax for above  to initialize class properties - dependency injection
    constructor(private _employeeService: EmployeeService) {
     
    }
    ngOnInit() {
       this._employeeService.getEmployees()
           .subscribe((employeesData) => this.employees = employeesData,
           (error) => {
               this.statusMessage = 'Problem with the service.  Please try again later';
           });
    }
    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(x => x.gender === "Female").length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(x => x.gender === "Male").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string) : void{
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}