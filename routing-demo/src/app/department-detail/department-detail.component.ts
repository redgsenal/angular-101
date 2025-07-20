import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  imports: [],
  templateUrl: './department-detail.component.html',
  styles: ``,
})
export class DepartmentDetailComponent {
  public departmentId: string | null | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Department ID:', id);
  }

  ngOnInit() {
    // You can also use this to fetch department details based on the ID
    /* 
    this method has a drawback: it only runs once when the component is initialized.
    If the route changes while the component is still active, it won't update the departmentId.
    
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Department ID on init:', id); 
    
    */
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.departmentId = id;
      // This will log the department ID whenever the route changes
      console.log('Department ID from paramMap:', this.departmentId);
    });
  }

  goNext() {
    let nextId = parseInt(this.departmentId || '0', 10) + 1;
    this.router.navigate(['/departments', nextId]);
  }
  goPrevious() {
    let previousId = parseInt(this.departmentId || '0', 10) - 1;
    this.router.navigate(['/departments', previousId]);
  }
}
