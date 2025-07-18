import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentList } from './department-list/department-list';
import { EmployeeList } from './employee-list/employee-list';

const routes: Routes = [
  { path: 'deparment', component: DepartmentList },
  { path: 'employees', component: EmployeeList },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [DepartmentList, EmployeeList];
