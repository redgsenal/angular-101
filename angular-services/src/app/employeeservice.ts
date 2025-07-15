import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getEmployees() {
    return [
      { id: 1, name: 'Andrew', age: 40 },
      { id: 2, name: 'Jassica', age: 24 },
      { id: 3, name: 'Lance', age: 33 },
      { id: 4, name: 'Mike', age: 47 },
      { id: 5, name: 'Lisa', age: 37 },
    ];
  }
}
