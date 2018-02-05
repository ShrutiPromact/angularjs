import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeComponent} from './employee/employee.component';
import {FormsModule} from '@angular/forms';
//import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    //AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
