import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-department-list',
  imports: [RouterLink],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent {
  constructor(private router: Router) {}

  navToAdmin() {
    this.router.navigateByUrl('/admin');
    console.log('Navigating to Admin');
  }
}
