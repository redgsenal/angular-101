import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-department-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent {
  public departments = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Finance' },
    { id: 4, name: 'Marketing' },
    { id: 5, name: 'Sales' },
  ];
  constructor(private router: Router) {}

  onSelect(department: { id: number; name: string }) {
    console.log('Selected Department:', department);
    this.router.navigate(['/departments', department.id]);
    // This will navigate to the department detail page
    // e.g., /departments/1 for the HR department
  }

  navToAdmin() {
    this.router.navigateByUrl('/admin');
    console.log('Navigating to Admin');
  }
}
