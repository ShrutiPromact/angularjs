import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'e-list',
    templateUrl: './employee-list.html'
})
export class EmployeelistComponent{

      btnClick= function () {
        this.router.navigateByUrl('/Home');
};
}