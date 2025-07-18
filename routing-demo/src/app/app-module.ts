import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing-module';
import { App } from './app';
import { DepartmentList } from './department-list/department-list';
import { EmployeeList } from './employee-list/employee-list';

@NgModule({
  declarations: [App, DepartmentList, EmployeeList],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
