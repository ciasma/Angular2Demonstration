
import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {
    columnSpan = 2;
    firstName = 'Tom';
    lastName = 'Thumb';
    gender = 'Male';
    age = 20;
    showDetails = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}