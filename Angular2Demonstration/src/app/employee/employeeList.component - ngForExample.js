"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 'emp101', name: 'Marcia', gender: 'Female', annualSalary: 5500, dateOfBirth: '6/25/1988' },
            { code: 'emp102', name: 'Tom', gender: 'Male', annualSalary: 2300, dateOfBirth: '7/05/1998' },
            { code: 'emp103', name: 'Dick', gender: 'Male', annualSalary: 2200, dateOfBirth: '3/22/1968' },
            { code: 'emp104', name: 'Jane', gender: 'Female', annualSalary: 5300, dateOfBirth: '4/25/1988' },
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'emp101', name: 'Marcia', gender: 'Female', annualSalary: 5500, dateOfBirth: '6/25/1988' },
            { code: 'emp102', name: 'Tom', gender: 'Male', annualSalary: 2300, dateOfBirth: '7/05/1998' },
            { code: 'emp103', name: 'Dick', gender: 'Male', annualSalary: 2200, dateOfBirth: '3/22/1968' },
            { code: 'emp104', name: 'Jane', gender: 'Female', annualSalary: 5300, dateOfBirth: '4/25/1988' },
            { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '5/12/1982' },
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'list-employee',
        templateUrl: 'app/employee/employeeList.component.html',
        styleUrls: ['app/employee/employeeList.component.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component - ngForExample.js.map