
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading employee. Please Wait';
    constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = 'Employee with the specified Employee Code does not exist ';
                } else {
                    this.employee = employeeData
                }
            },
            (error) => {
                    this.statusMessage = 'Problem with the service. Please try again after some time'
                    console.error(error);
                }
            );
    }
}