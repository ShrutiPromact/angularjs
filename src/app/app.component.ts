import { Component } from '@angular/core';
import  {EmployeeService} from './employee/employee.service';

@Component({
  selector: 'employee-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent {
  title = 'app';
}
 