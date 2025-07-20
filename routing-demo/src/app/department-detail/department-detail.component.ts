import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  imports: [],
  templateUrl: './department-detail.component.html',
  styles: ``,
})
export class DepartmentDetailComponent {
  public departmentId: string | null | undefined;
  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Department ID:', id);
  }

  ngOnInit() {
    // You can also use this to fetch department details based on the ID
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Department ID on init:', id);
    this.departmentId = id;
  }
}
