import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-employee-detail',
  imports: [CommonModule],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.css',
})
export class EmployeeDetail {
  public employees: { id: number; name: string; age: number }[] = [];
  constructor(private _employeeservice: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeservice.getEmployees();
  }
}
