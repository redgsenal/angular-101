import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employeeservice';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  public employees: { id: number; name: string; age: number }[] = [];
  constructor(private _employeeservice: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeservice.getEmployees();
  }
}
