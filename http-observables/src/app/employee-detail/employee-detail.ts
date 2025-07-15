import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee-service';
import { map } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  imports: [CommonModule],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.css',
})
export class EmployeeDetail {
  public employees: { id: number; name: string; age: number }[] = [];
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService
      .getEmployees()
      .pipe(
        map((data) => {
          return data.sort(
            (
              a: { id: number; name: string; age: number },
              b: { id: number; name: string; age: number }
            ) => a.age - b.age
          );
        })
      )
      .subscribe((data: { id: number; name: string; age: number }[]) => {
        this.employees = data;
        console.log('data:', this.employees);
      });
  }
}
