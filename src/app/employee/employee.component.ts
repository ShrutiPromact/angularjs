import {Component, OnInit} from '@angular/core';
import {employee} from './employee.model';
import {Service} from './employee.service';

@Component({
  selector: 'employee-app1',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit
{
  //constructor(private _employeeService: EmployeeService){}
  // employees=[
  //   {
  //     firstName="Shruti", lastName="Singh",emailAddress="shruti@gmail.com",gender="Female",qualification="BE",Experience="fresher"}
    
  // ];
    qualifications :string[];
    experiences : string[];
    pref: string[];
    checkarray = [];
     box_check ( lang: string)
   {
     for(var i=0;i<5;i++)
     {
       var flag=0;
       if (this.checkarray[i] == lang)
       {
         flag=1;
         break;
       }
     }
       if(flag==1)
       {
         this.checkarray.splice(i,1);
       }
       else{
         this.checkarray.push(lang);
       }
    
   }

     ngOnInit(){
          this.qualifications =['BE','ME','Mca','Bca'];
          this.experiences =['Fresher','1year','3year','5year'];
         this.pref=['C/C++','Java','C#','PHP','python'];        
     }
    model=new employee('','','','','','',this.checkarray);
    Onclick(model:string)
   {
     console.log(model);
   }

   model:any={};
   addEmployee(){
     this.employee.push()this.model;
   }
   deleteEmployee(){
     console.log(i);
   }
}
