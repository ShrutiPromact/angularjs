import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
//import { Component } from './employee.component';

@Injectable()
export class EmployeeService{
       private _employeeUrl = 'employee-list.html';
       constructor(private _http: HttpClient){}
       getEmployees(){
           return this._http.get(this._employeeUrl);
       }
}