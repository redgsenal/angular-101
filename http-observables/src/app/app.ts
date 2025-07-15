import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeDetail } from './employee-detail/employee-detail';
import { EmployeeService } from './employee-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeList, EmployeeDetail],
  providers: [EmployeeService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-services';
}
