import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeComponent} from './employee/employee.component';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {EmployeelistComponent} from './EmployeeList/employee-list.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
   EmployeelistComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path: 'List', component: EmployeelistComponent},
        {path: 'Home', component: EmployeeComponent},
        //{path: '', component: EmployeeComponent},
        //{path: 'welcome',component: AppComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
